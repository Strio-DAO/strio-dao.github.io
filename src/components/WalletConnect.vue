<template>
   
    <v-row>
        <v-col>
         <div v-if="isConnected" style="" class="add_container">
              <div class="ether_place" style="padding-left:3%;padding-right:3%;flex-shrink: 0;">{{balance}} DAI</div>
              <input disabled class="address"  v-model="reducedWa" value="..." >
              <div class="wa_ico" style="padding-right:2%;" >
                <div class="sc-gGBfsJ gLyupU"><div style="border-radius: 50px; overflow: hidden; padding: 0px; margin: 0px; width: 16px; height: 16px; display: inline-block;"><svg height="100" version="1.1" width="100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="overflow: hidden; position: relative;"><desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Raphaël 2.3.0</desc><defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs><rect x="0" y="0" width="16" height="16" rx="0" ry="0" fill="#2362e1" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect><rect x="0" y="0" width="16" height="16" rx="0" ry="0" fill="#1897f2" stroke="none" transform="matrix(0.0423,-0.9991,0.9991,0.0423,-1.1516,16.1943)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect><rect x="0" y="0" width="16" height="16" rx="0" ry="0" fill="#c8144a" stroke="none" transform="matrix(0.9999,0.0113,-0.0113,0.9999,4.9636,-6.633)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect><rect x="0" y="0" width="16" height="16" rx="0" ry="0" fill="#f94301" stroke="none" transform="matrix(0.7978,0.6029,-0.6029,0.7978,17.6356,1.9986)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect></svg></div></div>
            </div>
          </div>

            <v-btn v-else                  
                color="transparent"
                class="connect-wallet-button"
                @click="connectWallet">
                    Connect 
                    <v-icon dark right> mdi-checkbox-marked-circle </v-icon>
            </v-btn>

        </v-col>
    </v-row>

</template>

<script>
import detectEthereumProvider from '@metamask/detect-provider';
import Web3Utils from "web3-utils";
import Contract from 'web3-eth-contract';
import Web3ABI from 'web3-eth-abi';
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'
import {strio_token_meta} from '../../bd/erc20_metadata.json'


export default {
 async mounted() {
	
    let self = this;
    console.log('Mounted for [WalletConnect] ');
		setTimeout(() => {
     
    }, 400);
     self.checkConnection();
   

	},
  computed: {
    count () {
      
      console.log('todo 1 : ', this.$store.todo.state.title)
      this.$store.todo.commit('changeTitle', 'isto é que é o titulo...')
      console.log('todo 2 : ', this.$store.todo.state.title)
      console.log('chainIdConncted :  ', this.$store.account.state.chainIdConncted)

      return this.$store.account.state.chainIdConncted ;
    }
  },
    name:"WalletConnect",
    props: [
        "title",
        "items"
    ],

    data () {
        return {
        isConnected : false,
        provider : '',
        currentAccount : '',
        reducedWa : '...',
        balance : 2,
        chain :  0,
        chainId:  0
    }
  },
  methods : {
   
   checkConnection : async function(){
      this.connectWallet();
    },
    getBalance : async function(account)
    {
      const balance = await ethereum.request({ method: 'eth_getBalance', params: [
        account,
        'latest'
      ]})
  
      let eth = Web3Utils.fromWei(balance, 'ether');
      console.log('Balance ', eth );
      this.balance = Math.round(eth * 1000) / 1000 ;
      //this.$store.commit('account/setBalance', Web3Utils.hexToNumberString(balance))
     
    },
    handleAccountsChanged : async function (accounts)
    {
      console.log('handleAccountsChanged ');
      if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts
        console.log('**** Please connect to MetaMask.');
      } else if (accounts[0] !== this.currentAccount) {
        // this.$data.currentAccount = accounts[0];
        // Do any other work!
        console.log('Current Account ', accounts[0] );
        await this.getBalance(accounts[0]);
        this.currentAccount = accounts[0];
    
        console.log('store output test 1212 ', this.$store.account.state.chainIdConncted )
        this.$store.account.commit('setAddress', accounts[0])
        this.reducedWa =  this.currentAccount.slice(0, 6) + '...' + this.currentAccount.slice(36, 40)
        this.isConnected = true;
        this.chainId = await ethereum.request({ method: 'eth_chainId' });
        console.log('ChainID 1 : ', this.chainId);
        if ( !(this.chainId  ==  this.$store.account.state.chainIdConncted ) )
        {
            console.error('ChainID is not connected!')
            return;
        }

        // LOAD ACCOUNT SSTRIO BALANCE
       const _this = this;
       console.log('user address ', this.$store.account.state.address)
       console.log('Abi ; ', strio_token_meta.address)
      

        // const StrioToken = new Contract(
        //   this.$store.contracts.state.strio_token.abi,
        //   this.$store.contracts.state.strio_token.address,{
        // })

        const StrioToken = new Contract(
          strio_token_meta.abi,
          strio_token_meta.address,{
        })
        
        
       //Contract.setProvider(this.provider);
     
        ethereum.request({
          method: 'eth_call',
          params: [{
            to: strio_token_meta.address,
            data: StrioToken.methods.balanceOf(this.$store.account.state.address).encodeABI()
          }]
        })
        .then(result => 
        { 
            console.log('Result from ethcall balanceOf strio Token ', Web3Utils.hexToNumberString(result) )
            let strioBalance = Web3Utils.fromWei(Web3Utils.hexToNumberString(result), 'ether');
            _this.$store.account.commit('setStrioBalance', strioBalance  )
            console.log('Strio balance : ', _this.$store.account.state.strioBalance )
        })
        .catch(err => {
          console.error('Error when call balanceOF ', err)
        })
      }
    },
    startApp : async function(provider)
    {
      console.log('Star de APP ');
      // If the provider returned by detectEthereumProvider is not the same as
      // window.ethereum, something is overwriting it, perhaps another wallet.
      if (provider !== window.ethereum) {
        console.error('Do you have multiple wallets installed?');
      }

      // Access the decentralized web!
      console.log(' Is metamask ', ethereum.isMetaMask );
      console.log(' Is connected ', ethereum.isConnected() );

      ethereum.on('accountsChanged', (accounts) => {
      // Handle the new accounts, or lack thereof.
      // "accounts" will always be an array, but it can be empty.
        console.log('Account change  [1] ');
        window.location.reload();

      });

      ethereum.on('chainChanged', (chainId) => {
        // Handle the new chain.
        // Correctly handling chain changes can be complicated.
        // We recommend reloading the page unless you have good reason not to.
        console.log('Account change  [2] ', chainId);
        window.location.reload();
      });
      ethereum.on('connect', (info) =>{
        console.log("Metamask connected [3] ", info);
      });
      ethereum.on('disconnect', (cenas) => {
           console.log("Metamask disconnect [4] ", cenas);
      });

      /*
          Get connected account
      */
      ethereum
        .request({ method: 'eth_requestAccounts' })
        .then(await this.handleAccountsChanged)
        .catch((error) => {
          if (error.code === 4001) {
            // EIP-1193 userRejectedRequest error
            console.log('Please connect to MetaMask.');
          } else {
            console.error(error);
          }
        });

    },
    connectWallet : async function()
    {
        // console.log('hello ', await this.hello()  );
        this.provider = await detectEthereumProvider();
        if (this.provider) {
          await this.startApp(this.provider); // Initialize your app
        } else {
          console.log('Please install MetaMask!');
        }
    }
  }
}
</script>

<style>
 ul {
    list-style: none;
  }

  li::before {
    content: "•";
    color: #EF4423;
    font-size: 1.3em;
    display: inline-block; width: 1em;
    margin-left: -1em
  }

  li {
    font-size: 1.3em;
    font-weight: 300;
    margin-bottom: 10px;
  }


.add_container {
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(237, 238, 242);
    border-radius: 12px;
    white-space: nowrap;
    width: 100%;
    cursor: pointer;
     color: #424242 !important;
}


.address {
    text-align: center;
    outline: none;
    text-decoration: none;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    font-size: 16px;
    display: flex;
    flex-flow: row nowrap;
    width: 60%;
    -webkit-box-align: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 12px;
    cursor: pointer;
    user-select: none;
    background-color: rgb(247, 248, 250);
    border: 1px solid rgb(237, 238, 242);
    color: rgb(0, 0, 0);
    font-weight: 500;
    font-family: Roboto;
    color: #424242 !important;
}


.ether_place {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    font-size: 12px !important;
    padding-left: 0.75rem;
    padding-right: 0.5rem;
    font-weight: 500;
    width: 28%;
}

.wa_ico {
    flex: 1 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: right;
    white-space: nowrap;
    margin: 0px 0.5rem 0px 0.25rem;
    font-size: 1rem;
    width: fit-content;
    font-weight: 500;
}

.address {
    text-align: center;
    outline: none;
    text-decoration: none;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    font-size: 16px;
    display: flex;
    flex-flow: row nowrap;
    width: 60%;
    -webkit-box-align: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 12px;
    cursor: pointer;
    user-select: none;
    background-color: rgb(247, 248, 250);
    border: 1px solid rgb(237, 238, 242);
    color: rgb(0, 0, 0);
    font-weight: 500;
    font-family: Roboto;
    color: #424242 !important;
}

</style>