<template>

 <v-card
        class="mx-auto my-12"
        dark
        height="450"
        max-width="800"
        style="background-color: #404040; opacity: 0.9; border-radius: 15px;"
    >
    
    <!-- <v-row>
      <v-col>
          <WalletConnect/>
      </v-col>
    </v-row> -->

    <v-row>
      <v-col>
          <SwapToken/>
      </v-col>
    </v-row>
    

    </v-card>

</template>

<script>

import SwapToken from '../components/SwapToken.vue';

export default 
{
  name: 'SwapPage',

  components: {
      SwapToken
  },

}


</script>

<style>

</style>