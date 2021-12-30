import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const main = '0x1';
const rinkeby = '0x4';

export default new Vuex.Store({

    state: {
        address: undefined,
        balance: '0',
        totalBuy : 0,
        strioBalance: 0,
        chainIdConncted : rinkeby //rinkeby
    },

    mutations : {
        setAddress(state, addr) {
            state.address = addr;
        },
        setBalance(state, bal) {
            console.log('set Ether balance ', bal)
            state.balance = bal;
        },
        setStrioBalance(state, strioVal) {
            console.log('set strio token ' , strioVal )
            state.strioBalance = strioVal;
        },
        setTotalBuys(state, v) 
        {
            state.totalBuy = v;
        }
    }

});

// export const state = () => ({
//     address: undefined,
//     balance: '0',
//     totalBuy : 0,
//     strioBalance: 0,
//     chainIdConncted : rinkeby //rinkeby
// })
  
// export const mutations = {
//     setAddress(state, addr) {
//         state.address = addr;
//     },
//     setBalance(state, bal) {
//         console.log('set Ether balance ', bal)
//         state.balance = bal;
//     },
//     setStrioBalance(state, strioVal) {
//         console.log('set strio token ' , strioVal )
//         state.strioBalance = strioVal;
//     },
//     setTotalBuys(state, v) 
//     {
//         state.totalBuy = v;
//     }
// }
