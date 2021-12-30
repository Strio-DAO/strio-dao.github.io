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

  export default {
    data: () => ({
        items: ['Weenus', 'Zeenus', 'Dai'],
        stableAmount: 0,
        strioAmount: 0,
        stableSelected: '',
    }),
    methods: {
        getStrio (){
            
        },

        connectWallet (){
            
        },
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