import Vue from 'vue'
import Vuex from 'vuex'
import assessment from './modules/assessment'
import session from './modules/session'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    assessment,
    session
  }
})
