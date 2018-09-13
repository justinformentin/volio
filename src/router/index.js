import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import quantyst from '@/components/quantyst'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/quantyst',
      name: 'quantyst',
      component: quantyst
    },
  ]
})
