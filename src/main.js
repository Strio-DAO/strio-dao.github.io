import Vue from 'vue'
import App from './App.vue'
import router from './router'
import todo from './store/todo'
import account from './store/account'
import contracts from './store/contracts'


//load store in a single object
let store = {
  todo : todo,
  contracts : contracts,
  account: account
}

import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
