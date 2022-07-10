import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
// 引入vuex 仓库
import store from './store'

// 全局组件三级
import TypeNav from '@/pages/Home/TypeNav'

import {reqCategoryList} from '@/api'
console.log(reqCategoryList())


// 注册组件
Vue.component(TypeNav.name,TypeNav)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由
  router,
  // 注册仓库vuex 注册完组件的实例多了$store
  store
}).$mount('#app')
