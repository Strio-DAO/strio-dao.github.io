<template>
    <v-col>
        <v-row class="bg">
          <v-col>
            <v-row style="margin-top:5%" justify="center" align="center">
              <div class="title1" style="color: white">VIDEO STORIES</div>
            </v-row>
            <v-row style="margin-top: 0px; margin-bottom: 30px;" justify="center" align="center">
              <h2 style="color:gray;">Owned by you and the community</h2>
            </v-row>
            <v-row style="color: white;" justify="center" align="center">
              <v-col justify="center" align="center">
                <h2>
                  Launch your Creator Token and issue<br>
                  your video content as NFTs to grow together<br>
                  with your supporters.
                </h2>
              </v-col>
            </v-row>
            <v-row style="margin-top: 50px;" justify="center" align="center">
              <v-col style="color: white;" align="center" justify="center">
                <v-row style="background: grey; width: 20%; border-radius: 30px; padding: 0px; margin-right: 4%">
                  <v-col cols="10" style="margin: 0px; padding: 0px;">
                    <input placeholder="Insert your mail" type="text" style="height:50px; margin:0px; margin-left: 20px; width:90%; color: white">
                  </v-col>
                  <v-col cols="2" style="margin: 0px; padding: 0px;" align="right">
                    <v-btn style="color: white; width:130px; height: 50px; font-size: 0.8em; margin: 0px; border-radius: 30px; background-color: #EF4423;">
                      Join waitlist
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row justify="center" align="center" style="margin-top: 100px;">
              <v-col justify="center" align="center">
                <span style="color: white;">
                  We are creating a new way for Video Creators to strive. <br>
                  By enabling them to issue their own tokens, <br>
                  they become able to monetize their careers and build <br>
                  an index pool for their content NFT <br>
                  Throug Strio, Creators can deploy  content as NFTs, sharing fractions of the <br>
                  Intellectual Property (IP) with their supporters. <br>
                </span>
              </v-col>
            </v-row>
            <v-row justify="center" align="center" style="margin-top: 100px;">
              <v-btn style="background: none; outline: none; border:none;">
                <v-img
                  alt="arrow"
                  src="../assets/images/ArrowDown.png"
                  width="10"
                  @click="scroll($refs.cardPanel)"
                />
              </v-btn>
            </v-row>
            <v-row id="cardPanel" ref="cardPanel" justify="center" align="center" style="margin-top: 100px; padding-top: 200px;">
              <v-col cols="2"></v-col>
              <v-col cols="4">
                <!-- <iframe width="500" height="300" src="https://www.youtube.com/embed?v=ujGSt-93qZo"></iframe> -->
                <v-img
                  src="../assets/images/girlImage.png"
                  alt="image loading..."
                ></v-img>
              </v-col>
              <v-col style="color: white;" cols="4">
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
                      <v-row style="margin-bottom: 30px;">
                        Upload content as NFTs and <br>
                        distribute IP amongst your <br>
                        community
                      </v-row>
                      <v-row>
                        <v-btn class="mr-4" style="background-color: #EF4423; color: white; height: 50px; font-size: 0.8em; padding: 20px;">
                          Join creator waitlist
                        </v-btn>
                      </v-row>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="2"></v-col>
            </v-row>
            <v-row justify="center" align="center" style="margin-bottom: 200px; margin-top: 100px;">
              <v-col cols="2"></v-col>
              <v-col style="color: white;" cols="4">
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
                  <v-btn class="mr-4" style="background-color: #EF4423; color: white; height: 50px; font-size: 0.8em; padding: 20px;">
                    Join the community
                  </v-btn>
                </v-row>
              </v-col>
              <v-col cols="4">
                <v-img
                  src="../assets/images/people.png"
                  alt="image loading..."
                ></v-img>
              </v-col>
              <v-col cols="2"></v-col>

            </v-row>
          </v-col>
        </v-row>
        <v-row style="min-height: 1000px;">
          <v-col id="page3">
            <v-row justify="center" align="center">
              <div class="title2" style="color:white; margin-top: 20px;">BE PART OF IT</div>
            </v-row>
            <v-row justify="center" align="center">
              <div style="display: inline; margin-top: 60px;">
                <v-img
                  width="300px;"
                  src="../assets/images/GroupImg.png"
                ></v-img>
              </div>
            </v-row>
            <v-row justify="center" align="center">
              <h1 style="color:white; margin-top: 100px;">A video streaming platform that you own</h1>
            </v-row>
          </v-col>
        </v-row>
        <v-row ref="strioDAO">
          <v-col id="page4">
            <v-row justify="center" align="center">
              <div>

              <v-img
                contain
                src="../assets/images/CirclePageImage.png"
                width="500px;"
              ></v-img>
              </div>
            </v-row>
            <!-- <v-row justify="center" align="center">
              <div style="width: 650px;">
                <v-img
                  id="img1"
                  contain
                  src="../assets/images/page4circle.png"
                ></v-img>
                <label for="img1" style="color:white; position: relative; top:-350px; left: 33%; font-size: 40px; font-weight: 500; font-family: aileronregular ">How it works</label>
                <v-sheet
                  max-width="350"
                  class="rounded-pill mx-auto transition-swing secondary"
                  elevation="12"
                  height="128"
                  width="100%"
                  style="color:white; position: relative; top:-500px; left: -350px; opacity: 0.9"
                >
                  <v-row justify="center" align="center">
                    <v-col cols="3" style="margin-top: 30px;">
                      <v-img containt width="45" style="margin-left: 20px;" src="../assets/images/iconsHIW/pallete.png"></v-img>
                      <v-divider vertical></v-divider>
                    </v-col>
                    <v-col>
                      <span style="float:left; margin-left: 10px;">
                        Creators issue their own <br>
                        ERC-20 tokens and<br>
                        upload their video<br>
                        content as NFTs.
                      </span>
                    </v-col>
                  </v-row>
                </v-sheet>
                <v-sheet
                  max-width="350"
                  class="rounded-pill mx-auto transition-swing secondary"
                  elevation="12"
                  height="128"
                  width="100%"
                  style="color:white; position: relative; top:-470px; left: -330px; opacity: 0.9;"
                >
                  <v-row justify="center" align="center">
                    <v-col cols="3" style="margin-top: 30px;">
                      <v-img contain width="45" style="margin-left: 20px;" src="../assets/images/iconsHIW/2-User.png"></v-img>
                      <v-divider vertical></v-divider>
                    </v-col>
                    <v-col>
                      <span style="float:left; margin-left: 10px;">
                        Supporters invest in <br>
                        their favourite creators<br>
                        by buying their<br>
                        personal tokens or NFTs.
                      </span>
                    </v-col>
                  </v-row>
                </v-sheet>
                <v-sheet
                  max-width="350"
                  class="rounded-pill mx-auto transition-swing secondary"
                  elevation="12"
                  height="128"
                  width="100%"
                  style="color:white; position: relative; top:-440px; left: -300px; opacity: 0.9"
                >
                  <v-row justify="center" align="center">
                    <v-col cols="3" style="margin-top: 30px;">
                      <v-img contain width="45" style="margin-left: 20px;" src="../assets/images/iconsHIW/Paper-Download.png"></v-img>
                      <v-divider vertical></v-divider>
                    </v-col>
                    <v-col>
                      <span style="float:left; margin-left: 10px;">
                        NFT holders keep a share <br>
                        of their content IP, profiting <br>
                        from market success and <br>
                        secondary market sales.
                      </span>
                    </v-col>
                  </v-row>
                </v-sheet>
                <v-sheet
                  max-width="350"
                  class="rounded-pill mx-auto transition-swing secondary"
                  elevation="12"
                  height="128"
                  width="100%"
                  style="color:white; position: relative; top: -850px; left: 350px; opacity: 0.9"
                >
                  <v-row justify="center" align="center">
                    <v-col cols="3" style="margin-top: 30px;">
                      <v-img contain width="45" style="margin-left: 20px;" src="../assets/images/iconsHIW/Arrow.png"></v-img>
                      <v-divider vertical></v-divider>
                    </v-col>
                    <v-col>
                      <span style="float:left; margin-left: 10px;">
                        Viewers access videos <br>
                        for free through Strio <br>
                        platform.
                      </span>
                    </v-col>
                  </v-row>
                </v-sheet>
                <v-sheet
                  max-width="350"
                  class="rounded-pill mx-auto transition-swing secondary"
                  elevation="12"
                  height="128"
                  width="100%"
                  style="color:white; position: relative; top: -820px; left: 330px; opacity: 0.9"
                >
                  <v-row justify="center" align="center">
                    <v-col cols="3" style="margin-top: 30px;">
                      <v-img contain width="45" style="margin-left: 20px;" src="../assets/images/iconsHIW/Wallet.png"></v-img>
                      <v-divider vertical></v-divider>
                    </v-col>
                    <v-col>
                      <span style="float:left; margin-left: 10px;">
                        Strio DAO Treasury collects <br>
                        a fee over Creator Token<br>
                        transactions and NFT mints<br>
                      </span>
                    </v-col>
                  </v-row>
                </v-sheet>
                <v-sheet
                  max-width="350"
                  class="rounded-pill mx-auto transition-swing secondary"
                  elevation="12"
                  height="128"
                  width="100%"
                  style="color:white; position: relative; top: -790px; left: 300px; opacity: 0.9"
                >
                  <v-row justify="center" align="center">
                    <v-col cols="3" style="margin-top: 30px;">
                      <v-img contain width="45" style="margin-left: 20px;" src="../assets/images/iconsHIW/Star.png"></v-img>
                      <v-divider vertical></v-divider>
                    </v-col>
                    <v-col>
                      <span style="float:left; margin-left: 10px;">
                        Supporters and Creators <br>
                        are rewarded by Strio DAO <br>
                        according to content success <br>
                        and NFT ownership.
                      </span>
                    </v-col>
                  </v-row>
                </v-sheet>
              </div>
            </v-row> -->
            <!-- style="margin-top:-600px;" -->
            <v-row justify="center" align="center" style="margin-top: 100px;">  
              <div>
                <v-img
                  contain
                  src="../assets/images/strioCrafted.png"
                ></v-img>
              </div>
              <!-- <v-btn dark style="padding:50px;" class="rounded-pill">
                <v-img
                  src="../assets/images/StrioDaoLogo1.png"
                ></v-img>
              </v-btn> -->
            </v-row>
            <v-row justify="center" align="center">
              <span style="color:white; margin-top:60px;" justify="center" align="center">
                Strio is a full-blown DAO from day one, governed, managed <br>
                and built by a group of distributed contributors and core team <br>
                members pledged under Strio’s contribution. <br>
              </span>
            </v-row>
            <v-row justify="center" align="center" style="margin-bottom: 50px; margin-top: 50px;">
              <v-btn style="background-color: #EF4423; color: white; height: 50px; font-size: 0.8em; padding: 20px; margin-right: 10px;">
                Strio DAO Governance
              </v-btn>
              <v-btn dark style="border: 1px solid #EF4423; color: white; height: 50px; font-size: 0.8em; padding: 20px; ">
                <span style="margin-right:10px;">Get on the whitelist</span>
                <!-- <v-icon style="height:5px;">mdi-arrow-right</v-icon> -->
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
              <h2 style="margin-top: 30px; color: gray">What's on the wiki:</h2>
            </v-row>
            <v-row>
              <v-col></v-col>
              <v-col>
                <roadmap-card style="border: 3px solid #EF4423;" :items="preSeasonCard.items" :title="preSeasonCard.title"></roadmap-card>
              </v-col>
              <v-col>
                <roadmap-card :items="launchpadSeasonCard.items" :title="launchpadSeasonCard.title"></roadmap-card>
              </v-col>
              <v-col>
                <roadmap-card :items="streamingSeasonCard.items" :title="streamingSeasonCard.title"></roadmap-card>
              </v-col>
              <v-col></v-col>
            </v-row>
            <v-row justify="center" align="center" style="color:white; margin-top: 150px;">
              <h1>Strio core team</h1>
            </v-row>
            <v-row justify="center" align="center" style="color:white; margin-top: 70px;">
              <v-col></v-col>
              <Avatar :data="avatarItems.s3mz"/>
              <Avatar :data="avatarItems.drBrown"/>
              <Avatar :data="avatarItems.sara"/>
              <Avatar :data="avatarItems.godinMaking"/>
              <v-col></v-col>
            </v-row>
            <v-row justify="center" align="center" style="color:white; margin-top: 50px;">
              <v-col></v-col>
              <Avatar :data="avatarItems.salvador"/>
              <Avatar :data="avatarItems.hadzija"/>
              <Avatar :data="avatarItems.israel"/>
              <Avatar :data="avatarItems.fiyin"/>
              <v-col></v-col>
            </v-row>
            <v-row style="color: white; margin-top: 120px; margin-bottom: 150px;" justify="center" align="center">
              <v-col justify="center" align="center">
                <!-- <div style="display: inline-block;">
                  <h2 style="margin-right: 40px; color: gray;">Built on</h2>
                </div> -->
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
          discord: "https://discord.gg/ysqDFzzT",
        },
        drBrown: {
          picture: "drBrown.png",
          name: "Dr Brown",
          role: "Head of Blockchain",
          twitter: "https://twitter.com/EmmetBr01669163",
          discord: "https://discord.gg/ysqDFzzT",
        },
        sara: {
          picture: "Sara.png",
          name: "Sara Karim",
          role: "Head of Marketing",
          twitter: "https://twitter.com/saraikarim",
          discord: "https://discord.gg/ysqDFzzT",
        },
        godinMaking: {
          picture: "godinMaking.png",
          name: "GodinMaking",
          role: "Business Developer",
          twitter: "https://twitter.com/DogInMaking",
          discord: "https://discord.gg/ysqDFzzT",
        },
        salvador: {
          picture: "SalvadorBarros.png",
          name: "Salvador Barros",
          role: "Builder",
          twitter: "https://twitter.com/SalvadorBBarros",
          discord: "https://discord.gg/ysqDFzzT",
        },
        hadzija: {
          picture: "hadzija.png",
          name: "Hadzija",
          role: "Front-end Developer",
          twitter: "https://twitter.com/SremacCrypto",
          discord: "https://discord.gg/ysqDFzzT",
        },
        israel: {
          picture: "IsraelRex.png",
          name: "Israel Rex",
          role: "UI/UX Lead",
          twitter: "https://twitter.com/israelrex9",
          discord: "https://discord.gg/ysqDFzzT",
        },
        fiyin: {
          picture: "Fiyin.png",
          name: "Fiyin Odebunmi",
          role: "Builder",
          twitter: "https://twitter.com/FiyinOdebunmi",
          discord: "https://discord.gg/ysqDFzzT",
        },
      }

    }),

    components: {
      RoadmapCard,
      Avatar,
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
    font-size: 110%;
    font-weight: 300;
    /* font-family: AileronBold; */
  }
  
  .title1 {
    font-size: 70px;
    font-weight: 800;
    /* font-family: AileronBold; */
  }

  .title2 {
    font-size: 60px;
    font-weight: 600;
    /* font-family: AileronBold; */
  }

  h1 {
    font-size: 40px;
    font-weight: 500;
    /* font-family: AileronBold; */
  }

  h2 {
    font-size: 30px;
    font-weight: 300;
    /* font-family: AileronBold; */
  }

  h3 {
    font-size: 20px;
    font-weight: 500;
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
