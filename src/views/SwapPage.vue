<template>
<v-container>
<div class="color-flare1"></div>
    <div class="color-flare2"></div>
    <v-row>
      <SwapToken></SwapToken>
    </v-row>
    
    <v-row  class="text-caption supplyInfo">
      <v-col cols="3" offset="3" align="left" >
        <p>Max Supply:</p>
        <p>DAU Treasury Holdings:</p>
        <p>Circulating Supply:</p>
        <p>Available Supply:</p>
      </v-col>
      
      <v-col cols="3" align="right" >
        <p>{{maxSupply}}</p>
        <p>{{treasuryHoldings}}</p>
        <p>{{circulatingSupply}}</p>
        <p>{{availableSupply}}</p>
      </v-col>
    </v-row>  

    
  </v-container>
</template>

<script>

import SwapToken from '../components/SwapToken.vue';

export default 
{
  data() {
    return{
      maxSupply: "100,000,000 SSTRIO",
      treasuryHoldings: "60,000,000 SSTRIO",
      circulatingSupply: "20,000,000 SSTRIO",
      availableSupply: "20,000,000 SSTRIO",
    }
  },
   
   components: {
    SwapToken,
  
    
  },
  
}


</script>

<style>
.supplyInfo{
  color: grey;
}
.color-flare1{
  width: 800px;
  height: 800px;
  background: radial-gradient(50% 50% at 50% 50%, rgba(27, 156, 250, 0.4) 0%, rgba(196, 196, 196, 0) 100%);
 
  position: absolute;
  top:20%;
  left:-10%;
  opacity: .4;
}
.color-flare2{
  width: 800px;
  height: 800px;
  background: radial-gradient(50% 50% at 50% 50%, rgba(250, 27, 188, 0.18) 0%, rgba(196, 196, 196, 0) 80%);
  
  position: absolute;
  top:-400px;
  left:50%;
  opacity: 1;
}

</style>