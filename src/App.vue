<template>
  <v-app style="background:black;">
    <v-app-bar
      app
      color="dark"
      dark
      style="position:fixed;"
    >
      <v-col>
        <div class="d-flex align-center">
          <a style="color:white; text-decoration:none !important; margin-right: 50px" @click="scrollMeTo('topPage')">
            <v-img
              alt="Strio Logo"
              class="shrink mr-2"
              contain
              src="./assets/images/StrioLogo1.png"
              transition="scale-transition"
              width="100"
            />
          </a>
        </div>
      </v-col>
      <v-col cols="7" align="center" justify="center" class="d-none d-sm-flex" >
        <v-row align="center" justify="center">
          <div align="center">
            <a style="color:white; text-decoration:none !important; margin-right: 50px; font-family: 'Aileron', sans-serif; font-size: 20px;" @click="scrollMeTo('roadmap')">Roadmap</a>
            <a style="color:white; text-decoration:none !important; margin-right: 50px; font-family: 'Aileron', sans-serif; font-size: 20px;" @click="scrollMeTo('becomeMember')">Become a member</a>
            <a style="color:white; text-decoration:none !important; margin-right: 50px; font-family: 'Aileron', sans-serif; font-size: 20px;" @click="scrollMeTo('strioDAO')">DAO</a>
          </div>
        </v-row>
      </v-col>
      <v-col>
        <div align="right">
          <v-btn class="d-none d-sm-flex" href="https://www.notion.so/Strio-Wiki-cf0ef9581f8a47ae83496c79fb09da5a" target="_blank" dark style="border: 1px solid #EF4423; margin-top: 30px; margin-bottom: 30px; width: 150px;">
            <span style="margin-right:10px; font-family: 'Aileron', sans-serif; font-size: 15px;">Strio Wiki</span>
            <v-icon small>mdi-arrow-right</v-icon>
          </v-btn>
          <!-- <v-btn class="d-flex d-sm-none">
            <Menu></Menu>
          </v-btn> -->
          <v-btn @click.stop="drawer = !drawer" class="d-flex d-sm-none">
            <v-img
                contain
                src="@/assets/images/mobile/menuMobile.png"
            />
          </v-btn>
        </div>
      </v-col>
    </v-app-bar>

    <v-navigation-drawer
      class="d-flex d-sm-none"
      v-model="drawer"
      absolute
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
              <a style="color:white; text-decoration:none !important; margin-right: 50px; font-family: 'Aileron', sans-serif; font-size: 20px;" @click="scrollMeTo('roadmap')">Roadmap</a>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <a style="color:white; text-decoration:none !important; margin-right: 50px; font-family: 'Aileron', sans-serif; font-size: 20px;" @click="scrollMeTo('becomeMember')">Become a member</a>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <a style="color:white; text-decoration:none !important; margin-right: 50px; font-family: 'Aileron', sans-serif; font-size: 20px;" @click="scrollMeTo('strioDAO')">DAO</a>
            </v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view ref="home"/>
    </v-main>

    <v-divider color="gray" style="margin-right:10%; margin-left: 10%; height:3px;"></v-divider>
    <!-- <div id="divider" style="background-color:#404040; height: 0.02px; margin-right:10%; margin-left: 10%"></div> -->
    <Footer ref="porto"></Footer>
    
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue'
import Menu from './components/mobile/Menu.vue'
import NavDrawer from './components/mobile/NavDrawer.vue'

export default {
  name: 'App',

  components: {
    Footer,
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
    }
  }

};
</script>

<style>



</style>
