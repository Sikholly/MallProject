//配置路由
import Vue from "vue";
import VueRouter from "vue-router";

// 使用自定义插件
Vue.use(VueRouter);

// 引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

// 跳转到当前路由会抛出NavigationDuplicated的警告错误 因为新版vue-router引入了promise 要有成功和失败两个回调(所以需要传入两个回调) (重写push和replace方法) 
// 备份原版
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重写push方法 location 是跳到哪的参数 res 成功 rej 失败
VueRouter.prototype.push = function(location,resolve,reject){
    // 为什么不是直接调用旧版方法而是使用call 因为直接调用this指向windos 使用call改变调用者为this即是VueRouter
    if(resolve && reject) originPush.call(this,location,resolve,reject);//当传入promis的成功失败回调时调用原本方法
    else originPush.call(this,location,()=>{},()=>{});//当没传入时promis的成功失败回调时 自动添加两个回调
}
// 重写replace方法
VueRouter.prototype.replace = function(location,resolve,reject){
    // 为什么不是直接调用旧版方法而是使用call 因为直接调用this指向windos 使用call改变调用者为this即是VueRouter
    if(resolve && reject) originReplace.call(this,location,resolve,reject);//当传入promis的成功失败回调时调用原本方法
    else originReplace.call(this,location,()=>{},()=>{});//当没传入时promis的成功失败回调时 自动添加两个回调
}

// 配置路由
export default new VueRouter({
    // 配置路由
    // 配置路由元信息meta 来决定显示还是隐藏组件
    routes: [
        {
            path: "/home",
            component: Home,
            meta:{
                show:true
            }
        },
        {
            path: "/login",
            component: Login,
            meta:{
                show:false
            }
        },
        {
            path: "/register",
            component: Register,
            meta:{
                show:false
            }
        },
        {
            name:'search',
            path: "/search",
            component: Search,
            meta:{
                show:true
            }
        },
        // 重定向 进入显示的 
        {
            path: "/",
            redirect: "/home"
        }
    ]
})