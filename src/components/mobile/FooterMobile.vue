<template>
  <v-footer
    dark
    padless
    style="background: black;"
  >
    <v-col id="mainRow" style="margin-top: 30px; margin-bottom: 50px;">
        <v-row justify="center" align="center">
            <v-col></v-col>
            <v-col>
                <span style="color: gray; font-family: 'Aileron', sans-serif; font-size: calc(10px + 0.6vw); font-weight: 300;">Developers</span>
            </v-col>
            <v-col>
                <span style="color: gray; font-family: 'Aileron', sans-serif; font-size: calc(10px + 0.6vw); font-weight: 300;">Community</span>
            </v-col>
            <v-col></v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col></v-col>
            <v-col>
                <a href="https://github.com/Strio-DAO" style="text-decoration:none !important; color: white;" target="_blank">Github</a>
            </v-col>
            <v-col>
                <a style="text-decoration:none !important; color: white;" href="https://discord.gg/BCPgjK5C7q" target="_blank">Discord</a>
            </v-col>
            <v-col></v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col></v-col>
            <v-col>
                <span style="color: gray; font-family: 'Aileron', sans-serif; font-size: calc(10px + 0.6vw); font-weight: 300;">Governance</span>
            </v-col>
            <v-col>
                <a style="text-decoration:none !important; color: white;" href="https://twitter.com/StrioDAO" target="_blank">Twitter</a>
            </v-col>
            <v-col></v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col></v-col>
            <v-col>
                <a href="https://snapshot.org/#/test6.shot.eth" style="text-decoration:none !important; color: white;" target="_blank">Snapshot</a>
            </v-col>
            <v-col>
                <a style="text-decoration:none !important; color: white;" href="https://medium.com/strio-dao" target="_blank">Medium</a>
            </v-col>
            <v-col></v-col>
        </v-row>
        <v-row justify="center" align="center" style="margin-top: 15%;">
            <div class="d-flex align-center">
              <v-img
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                src="../../assets/images/StrioLogo1.png"
                transition="scale-transition"
                width="100"
              />
            </div>
        </v-row>
    </v-col>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
    }),
  }
</script>

<style>
  .fieldRow {
    padding: 8px;
  }

  a {
    font-size: calc(10px + 0.6vw);
    font-weight: 300;
    font-family: 'Aileron', sans-serif;
  }

</style>