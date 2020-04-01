import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import './style.scss'
import axios from './api'
Vue.prototype.$axios = axios;

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/assets/font/iconfont.css'
import '@/assets/css/my-mint.css'  //修改mint-ui的默认样式
Vue.use(MintUI,{
	lazyload:{
		loading:require('@/assets/img/lazy1.jpg')
	}
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
