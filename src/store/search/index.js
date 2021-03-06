// 用于管理search的数据

import Vue from "vue";
import VueX from "vuex";
// 需要使用一次vuex
Vue.use(VueX);

// state:仓库存储数据的地方
const state = {
};
// mutations:修改state的唯一手段
const mutations= {};
// actions:处理actions,可以书写自己的业务逻辑,也可以处理异步
const actions = {};
// getters:理解为计算属性,可以简化仓库数据,让组件获取仓库数据更加方便
const getters = {};


//对外暴露小仓库
export default {
    state,
    mutations,
    actions,
    getters
}