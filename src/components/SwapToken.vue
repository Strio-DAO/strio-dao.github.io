<template>
    <v-card dark>
      <v-col></v-col>
      <v-col>
         <v-row >
                    <v-col></v-col>
                    <v-col>
                        <div style="text-align:center;">
                            <h4>Get sStrio Tokens</h4>
                        </div>
                    </v-col>
                    <v-col>
                            <!-- <v-btn
                            
                            color="transparent"
                            class="connect-wallet-button"
                            @click="connectWallet">
                                Connect Wallet 
                                <v-icon dark right> mdi-checkbox-marked-circle </v-icon>
                            </v-btn> -->
                            <WalletConnect />
                    </v-col>
        </v-row>
        
        <v-layout justify-center>
            <v-form class="px-50">
                <v-container>
                    <v-col></v-col>
                    <v-row class="swapInput">
                        <v-col>
                            
                            <v-row>
                                <v-col justify-center>
                                    <v-select
                                    :items="items"
                                    v-model= "stableSelected"
                                    label = "MAX 10,000"
                                    v-on:change="changeStable()"
                                    ></v-select>
                                </v-col>
                                <v-col>
                                    <v-text-field 
                                    id="stableInput" 
                                    type="number"
                                    
                                    min="2000" 
                                    max="10000"
                                    label = "Min 2000"
                                    v-model = "stableAmount"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row class="" style="padding:0px;margin-top:0px;" >
                        <v-col>
                            
                            <v-row>
                                <v-col justify-center>
                                 <p> balance stable: {{totalStableAmount}}</p>
                                </v-col>
                                <v-col>
                                    <p> balance strio : {{this.$store.account.state.strioBalance}}</p>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row class="swapInput">    
                        <v-col>
                            <v-row>
                                <v-col>
                                    <v-img
                                    alt="Vuetify Logo"
                                    class="mx-auto swapImage"
                                    contain
                                    src="../assets/images/StrioLogo1.png"
                                    
                                />
                                </v-col>
                                <v-col>
                                    <v-text-field 
                                    id="sstrioInput" 
                                    type="number"
                                    label="1 DAI = 10 STRIO"
                                    v-model = "strioAmount"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-col>
                        
                    </v-row>
                    <v-row >
                    <v-col></v-col>
                    <v-col>
                        <v-btn v-if="isAproved" block @click="getStrio">Swap</v-btn>
                        <v-btn v-else block @click="toApprove">Approve </v-btn>
                    </v-col>
                    <v-col></v-col>
                    
                    </v-row>
                </v-container>
            </v-form>
        </v-layout>

      </v-col>
      <v-col></v-col>
       
    </v-card>
</template>

<script>
  import WalletConnect from './WalletConnect.vue';
  import {xeenus_token_meta, weenus_token_meta, strio_token_meta } from '../../bd/erc20_metadata.json'
  import Web3Utils from "web3-utils";
  import Contract from 'web3-eth-contract';
  const  {ethereum} = window;
  import Web3 from "web3";
  const BN = Web3Utils.BN;
  const EtherUnit = Web3Utils.toWei('1');

  export const MINIMUM_GAS_PRICE = 40;

  export default {
    async mounted() {
         let self = this;
         this.$nextTick( async function () {
            // Code that will run only after the
            // entire view has been rendered
            console.log('mounted next ticket [SwapToken]');
            console.log('ative stable ', self.$store.contracts.state.ative_stable);
            await self.init();
            self.items = self.$store.contracts.state.ative_stable;
            self.changeStable();

        })
        console.log('Mounted for [SwapToken] ');

        setTimeout(function() {
            console.log('ative stable ', self.$store.contracts.state.ative_stable);

        }, 1000)
	},
       
    computed: {
           
    },
    data: () => ({
        items:  ['weenus', 'xeenus'],
        stableAmount: 0,
        totalStableAmount : 0,
        strioAmount: 0,
        stableSelected: 'weenus',
        approveAmount : 2000000,
        allowanceBalance : -1,
        isAproved : false,
        minSwap : 2000,
        maxSwap : 10000,
        web3 : {},
        strioInstance : {},
        weenusInstance : {},
        xeenusInstance : {},
        
    }),
    methods: {
        async estimate(incr) {
            const e = await this.web3.eth.getGasPrice();
            console.log('gas price from ether ', e , ' *  ', incr);
            let gasPrice = e ? Number(e) * incr : undefined;
            const minimum = MINIMUM_GAS_PRICE * 1000000000;
            if (!gasPrice || gasPrice < minimum) {
            gasPrice = minimum;
            }
            console.log('Gas price is ', { gasPrice });
            return gasPrice;
        },
        async init()
        {
            console.log('init method ');
            const { ethereum } = window;
            this.web3 = new Web3(ethereum);

            this.strioInstance = new this.web3.eth.Contract(
                strio_token_meta.abi,
                strio_token_meta.address
            );
            this.weenusInstance = new this.web3.eth.Contract(
                weenus_token_meta.abi,
                weenus_token_meta.address
            );
            this.xeenusInstance = new this.web3.eth.Contract(
                xeenus_token_meta.abi,
                xeenus_token_meta.address
            );

            return  true;
        },
        async toApprove () 
        {
            console.log('...... Approve Token ...... ')

            let token = {};
            let tokenAddres = 0;
            let self = this;
            if(this.stableSelected == 'weenus'){
                token = this.weenusInstance;
                tokenAddres = weenus_token_meta.address
            }else if(this.stableSelected == 'xeenus'){
                token = this.xeenusInstance;
                tokenAddres = xeenus_token_meta.address
            }
           
           let result = 
            await new Promise(async (resolve, reject) => {
                const gasPrice = await this.estimate();
                const transValue = 0

                const approveAmount = new BN(self.approveAmount).mul(new BN(EtherUnit))
                console.log('Approve amount : ',  approveAmount);

                token.methods
                    .approve(strio_token_meta.address, approveAmount )
                    .send({
                        from: this.$store.account.state.address,
                        transValue,
                        to: tokenAddres,
                        gasPrice,
                    })
                    .on("error", function (error) {
                        console.log('error : ', { error });
                        reject(error);
                    })
                    .on("transactionHash", function (transactionHash) {
                        console.log('transactionHash : ', { transactionHash });
                    })
                    .on("receipt", async function (receipt) {
                        console.log('receipt : ', { receipt });
                        resolve(receipt);
                    });
            });

            // WE SHOULD PUT WAITING SPINNER HERE!!
            // FOR EACH TIME WE WAITING FOR A TRANSACTION
            console.log('Result from approve ', result )
            this.changeStable();
            
        },
        getStrio ()
        {
            console.log('...... Swap Strio Token ...... ')    

            console.log('...... Not implmented yet ! ...... ')    

        },
        async changeStable()
        {

            console.log('Stable changed : ', this.stableSelected);
            console.log('user address ', this.$store.account.state.address)
            if(this.stableSelected == 'weenus')
            {
                this.getWeenusBalance(this.$store.account.state.address)
            }else if(this.stableSelected == 'xeenus'){
                this.getXeenusBalance(this.$store.account.state.address)
            }
            
            this.isAproved = await this.allowance() > 0 ? true :false;
        },
        async getXeenusBalance( owner )
        {
            let self = this;

            console.log('Etherum provider ', ethereum );

            // const XeenusToken = new Contract(
            //     xeenus_token_meta.abi,
            //     xeenus_token_meta.address,{
            // })
            
            // ethereum.request({
            //     method: 'eth_call',
            //     params: [{
            //     to: xeenus_token_meta.address,
            //     data: XeenusToken.methods.balanceOf(owner).encodeABI()
            //     }]
            // })
            // .then(result => 
            // { 
            //     //console.log('Result from ethcall balanceOf strio Token ', Web3Utils.hexToNumberString(result) )
            //     let xeenusBalance = Web3Utils.fromWei(Web3Utils.hexToNumberString(result), 'ether');
            //     self.stableAmount = Number(xeenusBalance).toFixed(2)
            //     self.totalStableAmount = Number(xeenusBalance).toFixed(2)
            //     console.log('xeenus balance : ', xeenusBalance )
            //     return xeenusBalance;
            // })
            // .catch(err => {
            //     console.error('Error when call balanceOF ', err)
            // })

            let rawBalance = await this.xeenusInstance.methods
                .balanceOf(owner)
                .call({ from:this.$store.account.state.address });
            const balance = this.web3.utils.fromWei(rawBalance.toString());
            self.stableAmount = Number(balance).toFixed(2)
            self.totalStableAmount = Number(balance).toFixed(2)
            console.log('xeenus balance : ', balance )
            return balance;

        },
        async getWeenusBalance( owner )
        {
            let self = this;
            console.log('Etherum provider ', ethereum );

            // const WeenusToken = new Contract(
            //     weenus_token_meta.abi,
            //     weenus_token_meta.address,{
            // })
            
            // ethereum.request({
            //     method: 'eth_call',
            //     params: [{
            //     to: weenus_token_meta.address,
            //     data: WeenusToken.methods.balanceOf(owner).encodeABI()
            //     }]
            // })
            // .then(result => 
            // { 
            //     //console.log('Result from ethcall balanceOf strio Token ', Web3Utils.hexToNumberString(result) )
            //     let weenusBalance = Web3Utils.fromWei(Web3Utils.hexToNumberString(result), 'ether');
            //     self.stableAmount = Number(weenusBalance).toFixed(2)
            //     self.totalStableAmount = Number(weenusBalance).toFixed(2)

            //     console.log('weenus balance : ', weenusBalance )
            //     return weenusBalance;
            // })
            // .catch(err => {
            //     console.error('Error when call balanceOF ', err)
            // })

            let rawBalance = await this.weenusInstance.methods
                .balanceOf(owner)
                .call({ from:this.$store.account.state.address });
            const balance = this.web3.utils.fromWei(rawBalance.toString());
            self.stableAmount = Number(balance).toFixed(2)
            self.totalStableAmount = Number(balance).toFixed(2)
            console.log('weenus balance : ', balance )
            return balance;
        },
        _prepareApproveTransaction (contractMeta)
        {
            const StableContract = new Contract(contractMeta.abi, contractMeta.address)
            var txData = StableContract.methods.approve(strio_token_meta.address, this.approveAmount).encodeABI()
            return txData;
        },
        approveToken(contractAddress){

            let txData = this._prepareApproveTransaction(xeenus_token_meta);

            ethereum.request({
					method: 'eth_sendTransaction',
					params: [{
						from: this.account_address,
						to: contractAddress,
						gasLimit: '0x88b8',
						data: txData
					}]
				})

        },
        async allowance(){

            console.log('**** Allowance ***** ')

            let token = {};
            let self = this;
            if(this.stableSelected == 'weenus'){
                token = this.weenusInstance;
            }else if(this.stableSelected == 'xeenus'){
                token = this.xeenusInstance;
            }

            console.log('Abi ',  weenus_token_meta.abi);
            console.log('addr ',  weenus_token_meta.address);
            console.log('user addres ',  this.$store.account.state.address);
            console.log('token contract instance ', token)

            let rawBalance = await token.methods
                .allowance(this.$store.account.state.address, strio_token_meta.address)
                .call({ from:this.$store.account.state.address });
            const balance = this.web3.utils.fromWei(rawBalance.toString());

            console.log('Alloance balance :  ',  balance)
            return balance;
        },
        async OLD_allowance(){
            const { ethereum } = window;
            console.log('+ + + + Allowance Method + + + + ', ethereum);
            // let provider = await detectEthereumProvider();

            let stableMeta = {};
            let self = this;
            if(this.stableSelected == 'weenus'){
                stableMeta = weenus_token_meta;
            }else if(this.stableSelected == 'xeenus'){
                stableMeta = xeenus_token_meta;
            }

            const StableToken = new Contract(
                stableMeta.abi,
                stableMeta.address,{
            })

            console.log('stable address ', stableMeta.address );
            console.log('stable abi ', stableMeta.abi );

            console.log('user address ', this.$store.account.state.address);
            console.log('strio address ', strio_token_meta.address);

            
            ethereum.request({
                method: 'eth_call',
                params: [{
                    from: this.$store.account.state.address,    
                    to: stableMeta.address,
                    data: StableToken.methods.allowance(this.$store.account.state.address, strio_token_meta.address ).encodeABI()
                }]
            })
            .then(result => 
            {
                //console.log('Result from ethcall balanceOf strio Token ', Web3Utils.hexToNumberString(result) )
                let allowanceBalance = Web3Utils.fromWei(Web3Utils.hexToNumberString(result), 'ether');
                self.allowanceBalance = allowanceBalance;
                self.isAproved = allowanceBalance > 0 ? true : false;
                console.log('allowanceBalance  : ', allowanceBalance )
                return allowanceBalance;
            })
            .catch(err => {
                console.error('Error when call allowance ', err)
            })

        },
        async checkIfConnected(){
             const { ethereum } = window;
                const accounts = await ethereum.request({ method: "eth_accounts" });
                if (accounts.length !== 0) {
                    console.log('Account :' , accounts[0] );
                    // commit("setAccount", accounts[0]);
                    return 1;
                } else {
                    return 0;
                }
            }
    },
    components: {
      WalletConnect
  }
  }
</script>

<style>
 .swapInput{
     padding: 5px;
     margin: auto;
     max-width: 800px;
 }
 .swapImage{
     max-width: 150px;
 }

 .connect-wallet-button{
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 5px;
    border: none;
    cursor: pointer;
 }

</style>