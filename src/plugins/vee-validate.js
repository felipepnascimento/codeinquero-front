import { extend, localize, ValidationProvider, ValidationObserver } from 'vee-validate'

import {
  required
} from 'vee-validate/dist/rules'

import Vue from 'vue'
import ptBr from 'vee-validate/dist/locale/pt_BR'

export const injectVeeValidate = () => {
  extend('required', required)

  localize('ptBr', ptBr)

  Vue.component('ValidationObserver', ValidationObserver)
  Vue.component('ValidationProvider', ValidationProvider)
}
