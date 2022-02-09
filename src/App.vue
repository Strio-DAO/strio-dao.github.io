<template>
  <v-app dark style="background:black;">
    <v-app-bar
      app
      dark
      color="transparent" 
      fixed
    >
      <v-col cols="2">
        <div class="d-flex align-center">
          <router-link style="" to="/">
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
      <v-col cols="8" align="center" justify="center" class="d-none d-md-flex" >
        <v-row align="center" justify="center">
        
          <div align="center">
          <!-- v-else-if="getCurrentRoute()=='SwapPage'" -->
            <a v-if="getCurrentRoute()=='Home'" style="color:white; text-decoration:none !important; margin-right: 50px; font-family: 'Aileron', sans-serif; font-size: 20px;" @click="scrollMeTo('roadmap')">Roadmap</a>
            
            <router-link v-else style="color:white; text-decoration:none !important; margin-right: 50px; font-family: 'Aileron', sans-serif; font-size: 20px;" to="/">Roadmap</router-link>
            
            <a v-if="getCurrentRoute()=='Home'" style="color:white; text-decoration:none !important; margin-right: 50px; font-family: 'Aileron', sans-serif; font-size: 20px;" @click="scrollMeTo('becomeMember')">Become a member</a>
            <router-link v-else style="color:white; text-decoration:none !important; margin-right: 50px; font-family: 'Aileron', sans-serif; font-size: 20px;" to="/">Become a member</router-link>
            
            <router-link style="color:white; text-decoration:none !important; margin-right: 50px; font-family: 'Aileron', sans-serif; font-size: 20px;" to="swapPage">sStrio Tokens</router-link>
          </div>
          
        </v-row>
      </v-col>
      <v-col>
      
        <div  align="right">
          
          <v-btn v-if="getCurrentRoute()=='Home'" class="d-none d-md-flex" href="https://www.notion.so/Strio-Wiki-cf0ef9581f8a47ae83496c79fb09da5a" target="_blank" dark style="border: 1px solid #EF4423; margin-top: 30px; margin-bottom: 30px; ">
            <span style="margin-right:10px; font-family: 'Aileron', sans-serif; font-size: 15px;">Strio Wiki</span>
            <v-icon small>mdi-arrow-right</v-icon>
          </v-btn>
          <v-btn depressed plain @click.stop="drawer = !drawer" class="d-flex d-md-none"style="background: none; outline: none; border:none;">
            <v-img
                contain
                width="25px"
                src="@/assets/images/mobile/menuMobile2.png"
            />
          </v-btn>
        </div>
      </v-col>
    </v-app-bar>

    <v-navigation-drawer
      class="d-flex d-md-none"
      v-model="drawer"
      fixed
      left
      temporary
      style="background: #EF4423; opacity: 0.7"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-black--text text--accent-4"
        >
          <v-list-item style="margin-top: 20%;">
            <v-list-item-title>
              <a v-if="getCurrentRoute()=='Home'" style="color:white; text-decoration:none !important; margin-right: 50px; font-family: 'Aileron', sans-serif; font-size: 20px;" @click="scrollMeTo('roadmap')">Roadmap</a>
            
            <router-link v-else style="color:white; text-decoration:none !important; margin-right: 50px; font-family: 'Aileron', sans-serif; font-size: 20px;" to="/">RoadMap</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <a v-if="getCurrentRoute()=='Home'" style="color:white; text-decoration:none !important; margin-right: 50px; font-family: 'Aileron', sans-serif; font-size: 20px;" @click="scrollMeTo('becomeMember')">Become a member</a>
            <router-link v-else style="color:white; text-decoration:none !important; margin-right: 50px; font-family: 'Aileron', sans-serif; font-size: 20px;" to="/">Become a member</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <router-link style="color:white; text-decoration:none !important; margin-right: 50px; font-family: 'Aileron', sans-serif; font-size: 20px;" to="swapPage">sStrio Tokens</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <a style="color:white; text-decoration:none !important; margin-right: 50px; font-family: 'Aileron', sans-serif; font-size: 20px;"href="https://github.com/Strio-DAO//"target="_blank"><v-icon dark right> mdi-github</v-icon>Github</a>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <a style="color:white; text-decoration:none !important; margin-right: 50px; font-family: 'Aileron', sans-serif; font-size: 20px;"href="https://discord.gg/TKDRXsVz"target="_blank"><v-icon dark right> mdi-discord</v-icon>  Discord </a>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view ref="home"/>
    </v-main>
    
    
    
    <v-divider color="gray" style="margin-right:10%; margin-left: 10%; height:3px;"></v-divider>

    <Footer class="d-none d-sm-flex" ref="porto"></Footer>
    <FooterMobile class="d-flex d-sm-none" ref="porto"></FooterMobile>
    
    
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue'
import FooterMobile from './components/mobile/FooterMobile.vue'
import Menu from './components/mobile/Menu.vue'
import NavDrawer from './components/mobile/NavDrawer.vue'


export default {
  name: 'App',

  components: {
    Footer,
    FooterMobile,
    Menu,
    NavDrawer,
    
  },

  data: () => ({
    drawer:false
  }),

  methods: {
    scrollMeTo(refName) {
      var element = this.$refs.home.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
      // element.scrollIntoView({ behavior: 'smooth' });
    },
    getCurrentRoute() {
      const route = this.$route.name;
      console.log(route);
      return route;
    }
  }

};
</script>

<style>



</style>
