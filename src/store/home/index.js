// 用于管理home的数据

import Vue from "vue";
import VueX from "vuex";
// 需要使用一次vuex
Vue.use(VueX);

//引入api模块
import { reqCategoryList } from "@/api";

// state:仓库存储数据的地方
const state = {
    categoryList: [],
};
// mutations:修改state的唯一手段
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    }
};
// actions:处理actions,可以书写自己的业务逻辑,也可以处理异步
const actions = {
    // 获取所有分类数据 异步 action 处理异步    参数:commit 是一个方法 用于触发mutations 方法
    // actions里面的默认参数context是一个对象,里面有一个commit方法所以在参数里面可以直接用{commit}把commit解构出来
    async categoryList({commit}) {
        let result = await reqCategoryList();
        if(result.code === 200) {
            commit('CATEGORYLIST',result.data);
        }
        // 拿到promise成功的返回结果输出
        console.log(result);
    }
};
// getters:理解为计算属性,可以简化仓库数据,让组件获取仓库数据更加方便
const getters = {};

//对外暴露Store类的一个实例
//对外暴露小仓库
export default {
    state,
    mutations,
    actions,
    getters
}