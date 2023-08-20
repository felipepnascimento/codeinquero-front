import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import AppHome from '@/pages/AppHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/app',
      name: 'AppHome',
      component: AppHome
    }
  ]
})
