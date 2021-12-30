import { xeenus_token_meta, weenus_token_meta, strio_token_meta } from '../bd/erc20_metadata.json';

export const state = () => ({
    strio_token : {
        address: strio_token_meta.address,
        abi: strio_token_meta.abi.abi
    },
    weenus_token : {
        address: weenus_token_meta.address,
        abi: weenus_token_meta.abi.abi
    },
    xeenus_token : {
        address: xeenus_token_meta.address,
        abi: xeenus_token_meta.abi.abi
    },
   
})
  
export const mutations = {
   
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