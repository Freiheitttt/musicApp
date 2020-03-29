import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Main = () => import('@/views/Main')
const Recommend = () => import('@/views/Recommend')
const Singer = () => import('@/views/Singer')
const Search = () => import('@/views/Search')
const Rank = () => import('@/views/Rank')
const SingerSongs = () => import('@/views/SingerSongs')
const SheetSongs = () => import('@/views/SheetSongs')
const RankSongs = () => import('@/views/RankSongs')

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
  },
  {path: '/singerSongs/:singerId',name: 'singerSongs', component: SingerSongs},
  {path: '/sheetSongs/:sheetId', name: 'sheetSongs', component: SheetSongs},
  {path: '/RankSongs/:rankId', name: 'rankSongs', component: RankSongs},
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router