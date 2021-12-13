<template>
  <v-footer
    dark
    padless
    style="background: black;"
  >
    <v-col>
      <v-row id="mainRow" style="margin-top: 30px; margin-bottom: 50px;">
        <v-col></v-col>
        <v-col>
          <v-row>
            <div class="d-flex align-center">
              <v-img
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                src="../assets/images/StrioLogo1.png"
                transition="scale-transition"
                width="100"
              />
            </div>
          </v-row>
          <v-row style="margin-top: 120px;">
          </v-row>
        </v-col>
        <v-col>
          <v-row class="fieldRow">
            <span style="color: gray">Developers</span>
          </v-row>
          <v-row class="fieldRow">
            <a href="https://github.com/Strio-DAO" style="text-decoration:none !important; color: white;" target="_blank">Github</a>
          </v-row>
        </v-col>
        <v-col>
          <v-row class="fieldRow">
            <span style="text-decoration:none !important; color: gray;">Governance</span>
          </v-row>
          <v-row class="fieldRow">
            <a href="https://snapshot.org/#/test6.shot.eth" style="text-decoration:none !important; color: white;" target="_blank">Snapshot</a>
          </v-row>
        </v-col>
        <v-col>
          <v-row class="fieldRow">
            <span style="color: gray">Community</span>
          </v-row>
          <v-row class="fieldRow">
            <a style="text-decoration:none !important; color: white;" href="https://discord.gg/qZwwVuzB" target="_blank">Discord</a>
          </v-row>
          <v-row class="fieldRow">
            <a style="text-decoration:none !important; color: white;" href="https://twitter.com/StrioDAO" target="_blank">Twitter</a>
          </v-row>
          <v-row class="fieldRow">
            <a style="text-decoration:none !important; color: white;" href="https://medium.com/strio-dao" target="_blank">Medium</a>
          </v-row>
        </v-col>
        <v-col></v-col>
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

</style>