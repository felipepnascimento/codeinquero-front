import { createLocalVue } from 'vue-test-utils'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
const localVue = createLocalVue()
localVue.use(Vuex)

global.localVue = localVue
