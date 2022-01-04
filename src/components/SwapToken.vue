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
                        
                        <v-btn block @click="getStrio">Get sStrio</v-btn>
                        
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
  import {xeenus_token_meta, weenus_token_meta } from '../../bd/erc20_metadata.json'
  import Web3Utils from "web3-utils";
  import Contract from 'web3-eth-contract';
  const  {ethereum} = window;



  export default {
    mounted() {
        console.log('Mounted for [SwapToken] ');

        let self = this;
        setTimeout(function() {
            console.log('ative stable ', self.$store.contracts.state.ative_stable);
            self.items = self.$store.contracts.state.ative_stable;

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
        
    }),
    methods: {

        getStrio (){
            
        },
        changeStable ()
        {

            console.log('Stable changed : ', this.stableSelected);
            console.log('user address ', this.$store.account.state.address)
            if(this.stableSelected == 'weenus')
            {
                this.getWeenusBalance(this.$store.account.state.address)
            }else if(this.stableSelected == 'xeenus'){
                this.getXeenusBalance(this.$store.account.state.address)
            }
        },
        getXeenusBalance( owner )
        {
            let self = this;

            console.log('Etherum provider ', ethereum );

            const XeenusToken = new Contract(
                xeenus_token_meta.abi,
                xeenus_token_meta.address,{
            })
            
            ethereum.request({
                method: 'eth_call',
                params: [{
                to: xeenus_token_meta.address,
                data: XeenusToken.methods.balanceOf(owner).encodeABI()
                }]
            })
            .then(result => 
            { 
                //console.log('Result from ethcall balanceOf strio Token ', Web3Utils.hexToNumberString(result) )
                let xeenusBalance = Web3Utils.fromWei(Web3Utils.hexToNumberString(result), 'ether');
                self.stableAmount = Number(xeenusBalance).toFixed(2)
                self.totalStableAmount = Number(xeenusBalance).toFixed(2)
                console.log('xeenus balance : ', xeenusBalance )
                return xeenusBalance;
            })
            .catch(err => {
                console.error('Error when call balanceOF ', err)
            })

        },
        getWeenusBalance( owner )
        {
            let self = this;
            console.log('Etherum provider ', ethereum );

            const WeenusToken = new Contract(
                weenus_token_meta.abi,
                weenus_token_meta.address,{
            })
            
            ethereum.request({
                method: 'eth_call',
                params: [{
                to: weenus_token_meta.address,
                data: WeenusToken.methods.balanceOf(owner).encodeABI()
                }]
            })
            .then(result => 
            { 
                //console.log('Result from ethcall balanceOf strio Token ', Web3Utils.hexToNumberString(result) )
                let weenusBalance = Web3Utils.fromWei(Web3Utils.hexToNumberString(result), 'ether');
                self.stableAmount = Number(weenusBalance).toFixed(2)
                self.totalStableAmount = Number(xeenusBalance).toFixed(2)

                console.log('weenus balance : ', weenusBalance )
                return weenusBalance;
            })
            .catch(err => {
                console.error('Error when call balanceOF ', err)
            })

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