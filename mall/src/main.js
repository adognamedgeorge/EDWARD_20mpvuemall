import Vue from 'vue'
import App from './App'
import MpvueRouterPatch from 'mpvue-router-patch'
import '../static/iconfont/iconfont.css'
import common from '@/js/common'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(MpvueRouterPatch)
const app = new Vue(App)
app.$mount()
Vue.use(common)
// Vue.prototype.goToPage = function () {
//   console.log('page')
// }
