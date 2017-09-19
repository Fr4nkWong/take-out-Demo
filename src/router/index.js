import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Goods from '../components/goods/Goods'
import Ratings from '../components/ratings/Ratings'
import Seller from '../components/seller/Seller'

import '../common/stylus/index.styl'

Vue.use(Router)
Vue.use(Resource)

export default new Router({
  routes: [{
    path: '/',
    component: Goods
  },
  {
    path: '/goods',
    component: Goods
  },
  {
    path: '/ratings',
    component: Ratings
  },
  {
    path: '/seller',
    component: Seller
  }]
})
