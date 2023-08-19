// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
  theme: {
    themes: {
      light: {
        primary: '#0D3854',
        success: '#2FB05B',
        error: '#E64A5D',
        purple: '#6E1598',
        gray: '#808080'
      }
    }
  }
}

export default new Vuetify(opts)
