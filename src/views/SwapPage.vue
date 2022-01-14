<template>
<v-container>
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
</style>