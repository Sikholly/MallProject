// 当前模块:API进行统一管理
import requests from "./request";
// 三级导航
// /api/product/getBaseCategoryList get null
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'GET' })