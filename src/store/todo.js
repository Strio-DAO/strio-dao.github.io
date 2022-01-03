import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  title: "please, change title"
}

const mutations = {
  changeTitle(state, title) {
      state.title= title
  }
}

export default new Vuex.Store({
  state : state,
  mutations : mutations
})
