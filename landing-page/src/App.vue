<template>
  <v-app>
    <v-app-bar
      app
      color="dark"
      dark
      style="position:fixed;"
    >
      <v-col>
        <div class="d-flex align-center">
          <router-link style="color:white; text-decoration:none !important; margin-right: 50px" to="/">
            <v-img
              alt="Strio Logo"
              class="shrink mr-2"
              contain
              src="./assets/images/StrioLogo1.png"
              transition="scale-transition"
              width="100"
            />
          </router-link>
        </div>
      </v-col>
      <v-col>
        <div align="center">
          <!-- <router-link style="color:white; text-decoration:none !important; margin-right: 50px" to="/about">About</router-link> -->
          <!-- <router-link style="color:white; text-decoration:none !important; margin-right: 50px" to="/roadmap">Roadmap</router-link> -->
          <a style="color:white; text-decoration:none !important; margin-right: 50px" @click="scrollMeTo('roadmap')">Roadmap</a>
          <a style="color:white; text-decoration:none !important; margin-right: 50px" @click="scrollMeTo('strioDAO')">DAO</a>
        </div>
      </v-col>
      <v-col>
        <div align="right">
          <v-btn href="https://www.notion.so/Strio-Wiki-cf0ef9581f8a47ae83496c79fb09da5a" target="_blank" dark style="border: 1px solid #EF4423; margin-top: 30px; margin-bottom: 30px; 0.8em;">
            <span style="margin-right:10px;">Strio Wiki</span>
            <v-icon small>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-app-bar>

    <v-main>
      <router-view ref="home"/>
    </v-main>

    <v-divider color="gray"></v-divider>

    <Footer ref="porto"></Footer>
    
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'App',

  components: {
    Footer,
  },

  data: () => ({
    //
  }),

  methods: {
    scrollMeTo(refName) {
      var element = this.$refs.home.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
      // element.scrollIntoView({ behavior: 'smooth' });
    }
  }

};
</script>

<style>
</style>
