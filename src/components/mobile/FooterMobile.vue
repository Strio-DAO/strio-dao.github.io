<template>
  <v-footer
    dark
    padless
    style="background: black;"
  >
    <v-col>
        <v-row justify="center" align="center" style="margin-top: 2em; margin-bottom: 1em;">
            <div class="d-flex align-center">
              <v-img
                alt="Strio Logo"
                class="shrink mr-2"
                contain
                src="@/assets/images/StrioLogo1.png"
                transition="scale-transition"
                width="100"
              />
            </div>
        </v-row>
        <v-row>
            <v-col cols="3"></v-col>
            <v-col cols="4" justify="center" align="center">
                <v-row class="fieldRow">
                    <span style="color: gray; font-family: 'Aileron', sans-serif; font-size: calc(10px + 0.6vw); font-weight: 300;">Developers</span>
                </v-row>
                <v-row class="fieldRow">
                    <a href="https://github.com/Strio-DAO" style="text-decoration:none !important; color: white;" target="_blank">Github</a>
                </v-row>
                <v-row class="fieldRow">
                    <span style="color: gray; font-family: 'Aileron', sans-serif; font-size: calc(10px + 0.6vw); font-weight: 300;">Governance</span>
                </v-row>
                <v-row class="fieldRow">
                    <a href="https://snapshot.org/#/test6.shot.eth" style="text-decoration:none !important; color: white;" target="_blank">Snapshot</a>
                </v-row>
            </v-col>
            <v-col cols="4" justify="center" align="center">
                <v-row class="fieldRow">
                    <span style="color: gray; font-family: 'Aileron', sans-serif; font-size: calc(10px + 0.6vw); font-weight: 300;">Community</span>
                </v-row>
                <v-row class="fieldRow">
                    <a style="text-decoration:none !important; color: white;" href="https://discord.gg/BCPgjK5C7q" target="_blank">Discord</a>
                </v-row>
                <v-row class="fieldRow">
                    <a style="text-decoration:none !important; color: white;" href="https://twitter.com/StrioDAO" target="_blank">Twitter</a>
                </v-row>
                <v-row class="fieldRow">
                    <a style="text-decoration:none !important; color: white;" href="https://medium.com/strio-dao" target="_blank">Medium</a>
                </v-row>
            </v-col>
            <v-col cols="1"></v-col>
        </v-row>
        <v-row>
            <v-col>
                
            </v-col>
        </v-row>
    </v-col>
  </v-footer>
</template>

<script>
export default {

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