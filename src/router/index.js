import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//解决多次点击路由导航报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

const Main = () => import('@/views/Main')
const Recommend = () => import('@/views/Recommend')
const Singer = () => import('@/views/Singer')
const Search = () => import('@/views/Search')
const Rank = () => import('@/views/Rank')
const SingerSongs = () => import('@/views/SingerSongs')
const SheetSongs = () => import('@/views/SheetSongs')
const RankSongs = () => import('@/views/RankSongs')
const User = () => import('@/views/User')
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
  {path: '/singerSongs/singer/:id',name: 'singerSongs', component: SingerSongs},
  {path: '/sheetSongs/:id', name: 'sheetSongs', component: SheetSongs},
  {path: '/RankSongs/:id', name: 'rankSongs', component: RankSongs},
  {path: '/user', name: 'user', component: User}
]
const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router