// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#0D3854',
        success: '#2FB05B',
        error: '#E64A5D'
      }
    }
  }
}

export default new Vuetify(opts)
