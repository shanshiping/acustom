import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/page/Home'
import Sort from '@/components/page/Sort'
import Cart from '@/components/page/Cart'
import Mine from '@/components/page/Mine'

import customMan from '@/components/page/sort/customMan'
import customWoman from '@/components/page/sort/customWoman'
import smartMan from '@/components/page/sort/smartMan'
import smartWoman from '@/components/page/sort/smartWoman'
import allgoods from '@/components/page/sort/allgoods'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: '',
      component: Home
    },
    {
      path: '/sort',
      name: '分类',
      component: Sort,
      children: [{
          path: '/',
          component: customMan
        },
        {
          path: 'customWoman',
          component: customWoman
        },
        {
          path: 'smartMan',
          component: smartMan
        },
        {
          path: 'smartWoman',
          component: smartWoman
        },
      ]
    },
    {
      path: '/cart',
      name: '购物车',
      component: Cart
    },
    {
      path: '/mine',
      name: '我的',
      component: Mine
    },
    {
      path:'/allgoods',
      name:"全部商品",
      component:allgoods
    }
  ]
})
