<template>
    <v-col>
        <v-row ref="topPage" class="bg">
          <v-col>
            <v-row style="margin-top:5%" justify="center" align="center">
              <div class="title1" style="color: white">VIDEO STORIES</div>
            </v-row>
            <v-row style="margin-top: 0px; margin-bottom: 30px;" justify="center" align="center">
              <h2 style="color:gray;">Owned by you and the community</h2>
            </v-row>
            <v-row class=" d-sm-flex" justify="center" align="center">
              <v-col cols="8" sm="2" style="margin: 0px; padding: 0px;" align="center">
                <v-btn block href="https://0mukgaq1vrn.typeform.com/to/t8MAICvb" min-width="130px" target="_blank" style="color: white; height: 50px; font-size: 0.8em; background-color: #EF4423;">
                  Apply
                </v-btn>
              </v-col>
              <v-col cols="0" sm="1"></v-col>
              <v-col cols="8" sm="2" style="margin: 0px; padding: 0px;" align="center">
                <v-btn block outlined to="swapPage" min-width="150px" style="color: white; height: 50px; font-size: 0.8em;">
                  sStrio Token
                </v-btn>
              </v-col>
            </v-row>
            
            <v-row style="color: white; margin-top: 7%" justify="center" align="center">
              <v-col justify="center" align="center">
                <h2>
                  Launch a creator token and issue<br>
                  video content as NFTs to grow together<br>
                  with your supporters.
                </h2>
              </v-col>
            </v-row>
            <v-row justify="center" align="center" style="margin-top: 100px;">
              <v-btn class="d-none d-sm-flex" style="background: none; outline: none; border:none;">
                <v-img
                  alt="arrow"
                  src="../assets/images/ArrowDown.png"
                  width="10"
                  @click="scroll($refs.cardPanel)"
                />
              </v-btn>
              <v-btn class="d-flex d-sm-none" style="background: none; outline: none; border:none;">
                <v-img
                  alt="arrow"
                  src="../assets/images/ArrowDown.png"
                  width="10"
                  @click="scroll($refs.cardPanelBig)"
                />
              </v-btn>
            </v-row>
            <v-row class="d-none d-sm-flex" id="cardPanel" ref="cardPanel" justify="center" align="center" style="margin-top: 100px; padding-top: 200px;">
              <v-col cols="1"></v-col>
              <v-col cols="4">
                <v-img
                  src="../assets/images/girlImage.png"
                  alt="image loading..."
                ></v-img>
              </v-col>
              <v-col style="color: white;" cols="5">
                <v-row justify="center" align="right">
                  <v-col cols="4"></v-col>
                  <v-col style="margin-right: 10px;">
                      <v-row style="margin-bottom: 10px;">
                        <h1>For Video Creators</h1>
                      </v-row>
                      <v-row style="margin-bottom: 10px;">
                        Issue your own Creator tokens and let <br>
                        the community invest in you. As<br>
                        you succeed, so do your<br>
                        supporters.
                      </v-row>
                      <v-row ref="becomeMember" style="margin-bottom: 30px;">
                        Upload content as NFTs and <br>
                        distribute IP amongst your <br>
                        community
                      </v-row>
                      <v-row>
                        <v-btn class="mr-4" href="https://0mukgaq1vrn.typeform.com/to/t8MAICvb" target="_blank" style="background-color: #EF4423; color: white; height: 50px; font-size: 0.8em; padding: 20px;">
                          Apply for season one
                        </v-btn>
                      </v-row>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="1"></v-col>
            </v-row>
            <v-row class="d-none d-sm-flex" justify="center" align="center" style="margin-bottom: 200px; margin-top: 100px;">
              <v-col cols="1"></v-col>
              <v-col style="color: white;" cols="5">
                <v-row style="margin-bottom: 10px;">
                  <h1>For the community</h1>
                </v-row>
                <v-row style="margin-bottom: 10px;">
                  Invest in your favourite Creator by <br>
                  buying their personal tokens and profit<br>
                  from their shinny careers<br>
                </v-row>
                <v-row style="margin-bottom: 30px;">
                  Get a share of their creations' IP by <br>
                  holding their NFTs and be rewarded by <br>
                  their content success.
                </v-row>
                <v-row>
                  <v-btn href="https://discord.gg/BCPgjK5C7q" target="_blank" class="mr-4" style="background-color: #EF4423; color: white; height: 50px; font-size: 0.8em; padding: 20px;">
                    Join our discord
                  </v-btn>
                </v-row>
              </v-col>
              <v-col cols="4">
                <v-img
                  src="../assets/images/people.png"
                  alt="image loading..."
                ></v-img>
              </v-col>
              <v-col cols="1"></v-col>
            </v-row>
            <!-- Mobile version -->
            <v-row class="d-flex d-sm-none" id="cardPanel" ref="cardPanelBig" justify="center" align="center" style="margin-top: 100px; padding-top: 50px;">
              <v-col style="padding:10%">
                <v-img
                  src="../assets/images/girlImage.png"
                  alt="image loading..."
                ></v-img>
              </v-col>
            </v-row>
            <v-row class="d-flex d-sm-none" style="margin-bottom: 10px; color: white" justify="center" align="center">
              <h1>For Video Creators</h1>
            </v-row>
            <v-row class="d-flex d-sm-none" style="margin-bottom: 10px; color: white" justify="center" align="center">
              Issue your own Creator tokens and let <br>
              the community invest in you. As<br>
              you succeed, so do your supporters.
            </v-row>
            <v-row class="d-flex d-sm-none" ref="becomeMember" style="margin-bottom: 10px; color: white" justify="center" align="center">
              Upload content as NFTs and <br>
              distribute IP amongst your community.
            </v-row>
            <v-row class="d-flex d-sm-none" justify="center" align="center">
              <v-btn href="https://0mukgaq1vrn.typeform.com/to/t8MAICvb" target="_blank" style="background-color: #EF4423; color: white; height: 35px; font-size: 1em; margin-top: 10px; padding: 20px;">
                Apply for season one
              </v-btn>
            </v-row>
            <v-row class="d-flex d-sm-none">
              <v-col style="padding:10%">
                <v-img
                  src="../assets/images/people.png"
                  alt="image loading..."
                ></v-img>
              </v-col>
            </v-row>
            <v-row class="d-flex d-sm-none" style="margin-bottom: 10px; color: white" justify="center" align="center">
              <h1>For the community</h1>
            </v-row>
            <v-row class="d-flex d-sm-none" style="margin-bottom: 10px; color: white" justify="center" align="center">
              Invest in your favourite Creator by <br>
              buying their personal tokens and profit<br>
              from their shinny careers<br>
            </v-row>
            <v-row class="d-flex d-sm-none" style="margin-bottom: 30px; color: white" justify="center" align="center">
              Get a share of their creations' IP by <br>
              holding their NFTs and be rewarded by <br>
              their content success.
            </v-row>
            <v-row class="d-flex d-sm-none" style="color: white" justify="center" align="center">
              <v-btn href="https://discord.gg/VFZ54rNkav" target="_blank" style="background-color: #EF4423; color: white; height: 35px; font-size: 1em; padding: 20px; margin-top: -5px; margin-bottom: 30px;">
                Join our discord
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
        
        <v-row >
          <v-col id="page3">
            <v-row justify="center" align="center">
              <div class="title2" style="color:white; margin-top: 20px;">BE PART OF IT</div>
            </v-row>
            <v-row class="d-none d-sm-flex" justify="center" align="center">
              <div style="display: inline; margin-top: 60px;">
                <v-img
                  width="300px;"
                  src="../assets/images/GroupImg.png"
                ></v-img>
              </div>
            </v-row>
            <v-row class="d-flex d-sm-none" justify="center" align="center">
              <v-col style="padding:10%">
                <v-img
                  src="../assets/images/GroupImg.png"
                  alt="image loading..."
                ></v-img>
              </v-col>
            </v-row>
            <v-row class="d-none d-sm-flex" justify="center" align="center">
              <h1 style="color:white; margin-top: 60px; margin-bottom: 100px;">A video streaming platform that you own</h1>
            </v-row>
            <v-row class="d-flex d-sm-none" justify="center" align="center">
              <h1 style="color:white; margin-top: 20px;">A video streaming platform that you own</h1>
            </v-row>
          </v-col>
        </v-row>
        <v-row ref="strioDAO">
          <v-col id="page4">
            <v-row class="d-none d-sm-flex" justify="center" align="center">
              <div>
              <v-img
                contain
                src="../assets/images/CirclePageImage.png"
                width="500px;"
              ></v-img>
              </div>
            </v-row>
            <v-row class="d-flex d-sm-none" justify="center" align="center">
              <v-col>
                <v-img
                  contain
                  src="../assets/images/CirclePageImage.png"
                ></v-img>
              </v-col>
            </v-row>
            <v-row class="d-none d-sm-flex" justify="center" align="center" style="margin-top: 100px;">  
              <div>
                <v-img
                  contain
                  src="../assets/images/strioCrafted.png"
                ></v-img>
              </div>
            </v-row>
            <v-row class="d-flex d-sm-none" justify="center" align="center">  
              <v-col style="padding-left: 25%; padding-right: 25%; padding-top:5%;">
                <v-img
                  contain
                  src="../assets/images/strioCrafted.png"
                ></v-img>
              </v-col>
            </v-row>
            <v-row justify="center" align="center">
              <span style="color:white; margin-top:60px;" justify="center" align="center">
                Strio is a full-blown DAO from day one, governed, managed <br>
                and built by a group of distributed contributors and core team <br>
                members pledged under Strio’s contribution. <br>
              </span>
            </v-row>
            <v-row justify="center" align="center" style="margin-bottom: 50px; margin-top: 50px;">
              <v-btn href="https://www.notion.so/Governance-c1b6b84c72f34409b691102902d60634" target="_blank" style="background-color: #EF4423; color: white; height: 35px; font-size: 1em; padding: 25px; margin-right: 10px;">
                Strio DAO Governance
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
        <v-row id="page5" ref="roadmap">
          <v-col>
            <v-row justify="center" align="center" style="color: white">
              <h1 justify="center" align="center" style="margin-top: 50px;">
                Turning video content into distributed IP <br>
                is a long term journey
              </h1>
            </v-row>
            <v-row justify="center" align="center" style="color: white">
              <h2 style="margin-top: 30px; color: gray">Here is a sneak peak into our roadmap ahead</h2>
            </v-row>
            <v-row class="d-none d-sm-flex">
              <v-col cols="2"></v-col>
              <v-col>
                <roadmap-card style="border: 3px solid #EF4423" :items="preSeasonCard.items" :title="preSeasonCard.title"></roadmap-card>
              </v-col>
              <v-col>
                <roadmap-card :items="launchpadSeasonCard.items" :title="launchpadSeasonCard.title"></roadmap-card>
              </v-col>
              <v-col>
                <roadmap-card :items="streamingSeasonCard.items" :title="streamingSeasonCard.title"></roadmap-card>
              </v-col>
              <v-col cols="2"></v-col>
            </v-row>
            <!-- Mobile -->
            <v-row class="d-flex d-sm-none">
              <v-col style="padding-left: 10%; padding-right: 10%;">
                <roadmap-card style="border: 3px solid #EF4423; height: 350px;" :items="preSeasonCard.items" :title="preSeasonCard.title"></roadmap-card>
              </v-col>
            </v-row>
            <v-row class="d-flex d-sm-none">
              <v-col style="padding-left: 10%; padding-right: 10%; margin-top: -20%">
                <roadmap-card style="height: 350px;" :items="streamingSeasonCard.items" :title="streamingSeasonCard.title"></roadmap-card>
              </v-col>
            </v-row>
            <v-row class="d-flex d-sm-none">
              <v-col style="padding-left: 10%; padding-right: 10%; margin-top: -20%">
                <roadmap-card style="height: 350px;" :items="streamingSeasonCard.items" :title="streamingSeasonCard.title"></roadmap-card>
              </v-col>
            </v-row>
            <v-row class="d-none d-sm-flex" justify="center" align="center" style="color:white; margin-top: 150px;">
              <h1>Strio core team</h1>
            </v-row>
            <v-row class="d-flex d-sm-none" justify="center" align="center" style="color:white; margin-top: 40px;">
              <h1>Strio core team</h1>
            </v-row>
            <v-row class="d-none d-sm-flex" justify="center" align="center" style="color:white; margin-top: 70px;">
              <v-col></v-col>
              <Avatar :data="avatarItems.s3mz"/>
              <Avatar :data="avatarItems.drBrown"/>
              <Avatar :data="avatarItems.sara"/>
              <Avatar :data="avatarItems.godinMaking"/>
              <v-col></v-col>
            </v-row>
            <v-row class="d-none d-sm-flex" justify="center" align="center" style="color:white; margin-top: 50px;">
              <v-col></v-col>
              <Avatar :data="avatarItems.salvador"/>
              <Avatar :data="avatarItems.hadzija"/>
              <Avatar :data="avatarItems.israel"/>
              <Avatar :data="avatarItems.fiyin"/>
              <v-col></v-col>
            </v-row>
            <v-row class="d-flex d-sm-none" justify="center" align="center" style="color:white; margin-top: 70px;">
              <v-col>
                <v-row>
                  <Avatar :data="avatarItems.s3mz"/>
                  <Avatar :data="avatarItems.drBrown"/>
                </v-row>
                <v-row>
                  <Avatar :data="avatarItems.sara"/>
                  <Avatar :data="avatarItems.godinMaking"/>
                </v-row>
              </v-col>
            </v-row>
            <v-row class="d-flex d-sm-none" justify="center" align="center" style="color:white; margin-top: 50px;">
              <v-col>
                <v-row>
                  <Avatar :data="avatarItems.salvador"/>
                  <Avatar :data="avatarItems.hadzija"/>
                </v-row>
                <v-row>
                  <Avatar :data="avatarItems.israel"/>
                  <Avatar :data="avatarItems.fiyin"/>
                </v-row>
              </v-col>
            </v-row>
            <v-row style="color: white; margin-top: 120px; margin-bottom: 150px;" justify="center" align="center">
              <v-col justify="center" align="center">
                <img
                  style="margin-top: 20px;"
                  contain
                  src="@/assets/images/polygon-logo2.png"
                  width="300px"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="color:white;">
            <v-row style="margin-top: 4em;">
              <v-col cols="2"></v-col>
              <v-col cols="8" style="background: #181818; background-image: linear-gradient(to right, #181818,#000000,#181818);  border-radius: 30px;">
                <v-row align="center" justify="center" style="margin-top: 20px; margin-bottom: 20px;">
                  <div class="title2">Get Strio Token</div>
                </v-row>
                <v-row align="center" justify="center" style="margin-bottom: 30px;">
                  <v-btn  style="background-color: #EF4423; color: white; height: 50px; font-size: 0.8em;">
                    <router-link style="color:white; text-decoration:none !important;font-family: 'Aileron', sans-serif; font-size: 20px;" to="swapPage">Get sStrios</router-link>
                  </v-btn>
                </v-row>
              </v-col>
              <v-col cols="2"></v-col>
            </v-row>
            
            <v-row align="center" justify="center" style="margin-top: 50px; margin-bottom: 2em;">
              <h1>What are sStrio tokens?</h1>
            </v-row>
            <v-row class="d-none d-sm-flex" style="margin-bottom: 3em;">
              <v-col cols="3"></v-col>
              <v-col cols="3" align="center">
                <v-img
                style="margin-top: 40px;"
                src="@/assets/images/StrioS.png"
                width="200px"
                />
              </v-col>
              <v-col cols="4">
                <span>
                  sStrio Tokens are a pre-seed ERC-20 token <br>
                  deployed on the Ethereum mainnet that will be <br>
                  used to fund the DAO treasury before the IDO, to <br>
                  reward contributors or creators and to decentralize <br>
                  the decision-making process of the DAO through <br>
                  voting based on token holdings. They have no <br>
                  commercial value and will be burnt to claim the <br>
                  future Strio tokens deployed on the IDO
                </span>
              </v-col>
              <v-col cols="2"></v-col>
            </v-row>
            <v-row class="d-flex d-sm-none">
              <v-col align="center" justify="center">
                <v-row align="center" justify="center" style="margin-bottom: 2em;">
                  <span>
                    sStrio Tokens are a pre-seed ERC-20 token <br>
                    deployed on the Ethereum mainnet that will be <br>
                    used to fund the DAO treasury before the IDO, to <br>
                    reward contributors or creators and to decentralize <br>
                    the decision-making process of the DAO through <br>
                    voting based on token holdings. They have no <br>
                    commercial value and will be burnt to claim the <br>
                    future Strio tokens deployed on the IDO
                  </span>
                </v-row>
                <v-row align="center" justify="center" style="margin-bottom: 2em;">
                  <v-col>
                    <v-img
                    contain
                    src="@/assets/images/StrioS.png"
                    width="40%"
                    />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="d-none d-sm-flex" style="background: white;">
          <WhitePage/>
        </v-row>
        <v-row class="d-flex d-sm-none" style="background: white;">
          <WhitePageMobile/>
        </v-row>
        <v-row id="page7" style="background: black; color: white">
          <v-col></v-col>
          <v-col cols="4">
            <v-row justify="center" align="center">
              <h1 style="margin-top: 70px; margin-bottom: 30px;">Know more about Strio</h1>
            </v-row>
            <v-row justify="center" align="center">
              <v-btn href="https://medium.com/strio-dao" target="_blank" class="mr-4 button1" style="background-color: #EF4423; color: white; height: 50px; font-size: 0.8em; margin-bottom: 100px;">
                <span style="margin-right:10px;">Medium page</span>
                <v-icon small>mdi-arrow-right</v-icon>
              </v-btn>
            </v-row>
          </v-col>
          <v-col cols="4" align="center">
            <v-img
            style="margin-top: 40px;"
            src="@/assets/images/StrioS.png"
            width="200px"
            />
          </v-col>
          <v-col></v-col>
        </v-row>
      </v-col>
</template>

<script>
import RoadmapCard from '../components/RoadmapCard.vue';
import Avatar from '../components/Avatar.vue';
import WhitePage from '../components/WhitePage.vue';
import WhitePageMobile from '../components//mobile/WhitePageMobile.vue';
  export default {
    name: 'Home',

    data: () => ({
      preSeasonCard: {
        title: "Pre Season",
        items: [
          "Launch Strio DAO",
          "Launch Creator cohort #1",
          "Launch Strio dAPP V1",
          "Fund Treasury",
        ]
      },
      launchpadSeasonCard: {
        title: "Launchpad Season",
        items: [
          "Cohort #1 Creator tokens launch",
          "Cohort #1 Content NFTs launch",
          "Launch Creator cohort #2",
          "Launch Strio dAPP V2",
          "IDO announcement",
        ]
      },
      streamingSeasonCard: {
        title: "Streaming Season",
        items: [
          "Content streamed on the platform",
          "Creator tokens + NFT",
          "Marketplace",
          "IDO",
        ]
      },
      avatarItems: {
        s3mz: {
          picture: "S3mz.png",
          name: "S3mz",
          role: "Business Developer",
          twitter: "https://twitter.com/unrealS3mz",
          discord: "https://discordapp.com/users/895329158454968360/",
        },
        drBrown: {
          picture: "drBrown.png",
          name: "Dr Brown",
          role: "Head of Blockchain",
          twitter: "https://twitter.com/EmmetBr01669163",
          discord: "https://discordapp.com/users/895428109682217052/",
        },
        sara: {
          picture: "Sara.png",
          name: "Sara Karim",
          role: "Head of Marketing",
          twitter: "https://twitter.com/saraikarim",
          discord: "https://discordapp.com/users/815665228187566080/",
        },
        godinMaking: {
          picture: "godinMaking.png",
          name: "GodinMaking",
          role: "Business Developer",
          twitter: "https://twitter.com/DogInMaking",
          discord: "https://discordapp.com/users/376837675040374811/",
        },
        salvador: {
          picture: "SalvadorBarros.png",
          name: "Salvador Barros",
          role: "Builder",
          twitter: "https://twitter.com/SalvadorBBarros",
          discord: "https://discordapp.com/users/785846322783584266/",
        },
        hadzija: {
          picture: "hadzija.png",
          name: "Hadzija",
          role: "Front-end Developer",
          twitter: "https://twitter.com/SremacCrypto",
          discord: "https://discordapp.com/users/462281828657528844/",
        },
        israel: {
          picture: "IsraelRex.png",
          name: "Israel Rex",
          role: "UI/UX Lead",
          twitter: "https://twitter.com/israelrex9",
          discord: "https://discordapp.com/users/699363724472877157/",
        },
        fiyin: {
          picture: "Fiyin.png",
          name: "Fiyin Odebunmi",
          role: "Builder",
          twitter: "https://twitter.com/FiyinOdebunmi",
          discord: "https://discordapp.com/users/871844643665506395/",
        },
      }

    }),

    components: {
      RoadmapCard,
      Avatar,
      WhitePage,
      WhitePageMobile,
    },

    methods: {
      scroll: function(target){
        var scrollContainer = target;
        do { //find scroll container
            scrollContainer = scrollContainer.parentNode;
            if (!scrollContainer) return;
            scrollContainer.scrollTop += 1;
        } while (scrollContainer.scrollTop == 0);
        
        var targetY = 0;
        do { //find the top of target relatively to the container
            if (target == scrollContainer) break;
            targetY += target.offsetTop;
        } while (target = target.offsetParent);
        
        scroll = function(c, a, b, i) {
            i++; if (i > 30) return;
            c.scrollTop = a + (b - a) / 30 * i;
            setTimeout(function(){ scroll(c, a, b, i); }, 20);
        }
        // start scrolling
        scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);

      },
      scrollMeTo(refName) {
        var element = this.$refs[refName];
        // var top = element.offsetTop;

        // window.scrollTo(0, top);
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }


  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Aileron');

  .bg {
    background: url("../assets/images/Rectangle18.png") no-repeat center center fixed;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
  }

  #page3 {
    background: url("../assets/images/blackBackgroundCircle.png") no-repeat center center fixed;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;

  }

  #page4 {
    background: url("../assets/images/page4bg.png") no-repeat center center fixed;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
  }

  #page5 {
    background: url("../assets/images/page5bg.png") no-repeat center center fixed;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
  }

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    opacity: 1; /* Firefox */
  }

/*font styles*/
  body {
    font-size: calc(10px + 0.6vw);
    font-weight: 300;
    font-family: 'Aileron', sans-serif;
    /* font-family: AileronBold; */
  }
  
  .title1 {
    font-size: calc(15px + 4vw);
    font-weight: 700;
    font-family: 'Aileron', sans-serif;
    /* font-family: AileronBold; */
  }

  .title2 {
    font-size: calc(15px + 3vw);;
    font-weight: 600;
    font-family: 'Aileron', sans-serif;
    /* font-family: AileronBold; */
  }

  h1 {
    font-size: calc(12px + 1.7vw);

    font-weight: 500;
    font-family: 'Aileron', sans-serif;
    /* font-family: AileronBold; */
  }

  h2 {
    font-size: calc(10px + 1.5vw);
    font-weight: 300;
    font-family: 'Aileron', sans-serif;
    /* font-family: AileronBold; */
  }

  h3 {
    font-size: calc(8px + 1.2vw);
    font-weight: 500;
    font-family: 'Aileron', sans-serif;
    /* font-family: AileronBold; */
  }

/*button styles*/
  .orangeButton {
    color: white;
    height: 50px;
    background-color: #EF4423;
    font-size: 0.8em;
    /* font-family: AileronRegular; */
    padding: 20px;
  }

/**style="background-color: #EF4423; color: white; height: 50px; font-size: 15px; font-family: Aileron; padding: 20px;" */

/* style="color: white; width:130px; height: 50px; font-size: 14px; font-family: Aileron; margin: 0px; border-radius: 30px;" */

</style>
