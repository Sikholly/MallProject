import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'

// 全局组件三级
import TypeNav from '@/pages/Home/TypeNav'
// 注册组件
Vue.component(TypeNav.name,TypeNav)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由
  router
}).$mount('#app')
