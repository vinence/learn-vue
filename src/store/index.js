import Vue from 'vue'
import Vuex from 'vuex'
import num from './modules/num'
import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    num
  },
  getters
})

export default store
