<template>
<v-container >
    <v-row >
        <v-col style="color:white;">

            <v-row >
                <v-col xs="12" sm="10" md="10" offset-md="1" offset-sm="1" offset-xs=""  align="center" >
                    <div style="color:white;">
                        <h2>Get sStrio Tokens</h2>
                    </div>
                </v-col>
            </v-row>
            

            <v-row >
                <v-col xs="12" sm="8" md="6" offset-md="3" offset-sm="2" offset-xs="" class="swapForm">
                    <v-form>
                        <v-row dense>
                            <v-col>
                                <div>From</div>
                            </v-col>
                            <v-col  align="right">
                                <div class="text-caption">
                                    Balance: 0.00
                                    <v-btn x-small dark plain> HALF</v-btn>
                                    <v-btn x-small dark plain> MAX</v-btn>
                                </div>
                            </v-col>
                        </v-row>
                        <v-row dense class="swapInput"> 
                            <v-col cols= '0' xs="0" sm="0" md="0">
                                <img width="50px" height="50px" src="..\assets\images\daiLogo.png" >
                                
                            </v-col>
                            <v-col cols = '3'>
                                <v-select  style="margin-top:0px;" class="d-flex"
                                :items="items"
                                dark
                                ></v-select>
                            </v-col>
                            <v-col >
                                <v-text-field 
                                id="stableInput" 
                                type="number"
                                dark
                                rounded
                                reverse
                                min='0'
                                v-model = "stableAmount"
                                ></v-text-field>
                            </v-col>
                                                
                        </v-row>
                        
                        <v-col  dense align="center">
                             <v-icon x-large dark >mdi-arrow-down </v-icon>
                        </v-col>
                        
                        <v-row  dense>
                            <v-col  dense>
                                <div>To</div>
                            </v-col>
                            
                            <v-col align="right">
                                <div class="text-caption">
                                    Balance: 0.00
                                    <v-btn x-small dark plain> HALF</v-btn>
                                    <v-btn x-small dark plain> MAX</v-btn>
                                </div>
                            </v-col>
                        </v-row>
                        
                        <v-row dense class="swapInput">   
                            
                                
                        
                            
                            <v-col cols= '0' xs="0" sm="0" md="0">
                                <img width="50px" height="50px" contain src="..\assets\images\StrioS.png">
                            
                            </v-col>
                            <v-col cols = '3' >
                                <h3 style="margin-top:10px;">sStrio</h3>
                            </v-col>
                            <v-col >
                                <v-text-field 
                                id="sstrioInput" 
                                type="number"
                                rounded
                                dark
                                reverse
                                min='0'
                                v-model = "strioAmount"
                                ></v-text-field>
                            </v-col>       
                        </v-row>

                        <v-row>
                            <v-col align="right">
                                <div class="text-caption">
                                    1 DAI = 10 sSTRIO
                                </div>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-col>
            </v-row>

            
        </v-col>
        
    </v-row>
    <v-row>
            <v-col  xs="12" sm="8" md="6" offset-md="3" offset-sm="2" offset-xs="" class="swapButton">
                <v-btn color="#EF4423" large dark block @click="getStrio">Get sStrio</v-btn>
            </v-col>
        </v-row>
</v-container>
</template>

<script>
  export default {
    data: () => ({
        items: ['Weenus', 'Zeenus', 'Dai'],
        stableAmount: 0,
        strioAmount: 0,
        stableSelected: '',
        coinOptions: [
            {
                name: 'DAI',
                imgSrc: ''
            }
        ]
    }),
    methods: {
        getStrio (){
            
        },

        connectWallet (){
            
        },
    }
  }
</script>

<style lang="scss">
 .swapInput{
    padding: 20px;
    padding-bottom: 0px;
    margin: auto;
    
    border-radius: 20px;
    background: rgba(100, 100, 100, 0.5);

 }
.swapButton{
    padding: 30px;
   

 }
 .swapForm{
    padding: 20px;
    padding-bottom: 30px;
    border: 1px solid transparent;
    border-radius: 20px;
    background-image: linear-gradient(black,black), radial-gradient(circle at top left, #EF4423, #FAA31B);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    
 }
    

</style>