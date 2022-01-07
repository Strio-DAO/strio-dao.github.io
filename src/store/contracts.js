import { xeenus_token_meta, weenus_token_meta, strio_token_meta } from '../../bd/erc20_metadata.json';
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    ative_stable : ['weenus', 'xeenus'],
    strio_token : {
        address: strio_token_meta.address,
        abi: strio_token_meta.abi,
        balance : 0
    },
    weenus_token : {
        address: weenus_token_meta.address,
        abi: weenus_token_meta.abi,
        balance : 0
    },
    xeenus_token : {
        address: xeenus_token_meta.address,
        abi: xeenus_token_meta.abi,
        balance : 0
    }
}
  
const mutations = {

    getStrioMetadata(state) {
        return {
            address: state.strio_token.address,
            abi: state.strio_token.abi
        }
    },
    getWeenusMetadata(state) {
        return {
            address: state.weenus_token.address,
            abi: state.weenus_token.abi
        }
    },
    getXeenusMetadata(state) {
        return {
            address: state.xeenus_token.address,
            abi: state.xeenus_token.abi
        }
    },
    async getXeenusBalance(state, owner )
    {
        const XeenusToken = new Contract(
            xeenus_token_meta.abi,
            xeenus_token_meta.address,{
          })
          
          ethereum.request({
            method: 'eth_call',
            params: [{
              to: xeenus_token_meta.address,
              data: XeenusToken.methods.balanceOf(owner).encodeABI()
            }]
          })
          .then(result => 
          { 
              //console.log('Result from ethcall balanceOf strio Token ', Web3Utils.hexToNumberString(result) )
              let xeenusBalance = Web3Utils.fromWei(Web3Utils.hexToNumberString(result), 'ether');
              state.xeenus_token.balance = xeenusBalance;
              console.log('Strio balance : ', xeenusBalance )
              return xeenusBalance;
          })
          .catch(err => {
            console.error('Error when call balanceOF ', err)
          })

    }
}

export default new Vuex.Store({
    state : state,
    mutations : mutations
  })
  
