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
    }
}

export default new Vuex.Store({
    state : state,
    mutations : mutations
  })
  
