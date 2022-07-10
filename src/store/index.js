import Vue from "vue";
import VueX from "vuex";
// 需要使用一次vuex
Vue.use(VueX);

// 引入模块式开发小仓库
import home from "./home";
import search from "./search";

//对外暴露Store类的一个实例
export default new VueX.Store({
    // 实现vuex模块式开发
    modules:{
        // 注册小仓库
        home,
        search
    }

})