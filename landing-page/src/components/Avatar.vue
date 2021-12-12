<template>
  <v-col>
        <v-row justify="center" align="center">
            <v-avatar color="#1B1811" size="130">
                <v-img
                :alt="data.name"
                :src="require(`@/assets/images/coreTeamPics/${data.picture}`)"
                />
            </v-avatar>
        </v-row>
        <v-row justify="center" align="center">
            <h3>{{data.name}}</h3>
        </v-row>
        <v-row justify="center" align="center">
            <p>{{data.role}}</p>
        </v-row>
        <v-row style="color:white;" justify="center" align="center">
            <v-btn
            class="ma-2 pa-1"
            fab
            dark
            style="border: 2px solid #EF4423"
            width="30px"
            height="30px"
            :href="data.twitter"
            target="_blank"
            >
                <v-img
                contain
                width="5px"
                src="@/assets/images/twitterLogo.png"
                />
            </v-btn>
            <v-btn
            class="ma-2 pa-1"
            fab
            dark
            style="border: 2px solid #EF4423"
            width="30px"
            height="30px"
            :href="data.discord"
            target="_blank"
            >
                <v-img
                contain
                width="5px"
                src="@/assets/images/githubLogo.png"
                />
            </v-btn>
        </v-row>
  </v-col>
</template>

<script>
export default {
    name: 'Avatar',
    props: [
        "data"
    ]
}
</script>

<style>

</style>