import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Main from  '@/views/Main'
import Recommend from  '@/views/Recommend'
import Singer from  '@/views/Singer'
import Search from  '@/views/Search'
import Rank from  '@/views/Rank'


const routes = [
  {
    path: '/',
    component: Main,
    children: [
      {path : '', component: Recommend},
      {path : 'recommend' , component: Recommend},
      {path : 'singer' , component: Singer},
      {path : 'search' , component: Search},
      {path : 'rank' , component: Rank},
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router