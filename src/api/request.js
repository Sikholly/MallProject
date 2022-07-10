// 对axios进行二次封装 二次封装是为了使用到请求和响应拦截器
import axios from "axios";
// 引入nprogress进度条插件
import nProgress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css"

const requests = axios.create({
    // 基础路劲,在请求时候在路径中会出现/api
    baseURL: "/api",
    // 代表请求超时时间5s
    timeout: 5000,
});
// 请求拦截器 发请求之前
requests.interceptors.request.use((config) => {
    // confin 配置对象 , 对象里面有一个属性是headers请求头
    // 进度条开始动
    nProgress.start();
    return config;
})
// 响应拦截器
requests.interceptors.response.use((res) => {
    // 成功的回调函数数据回来时
    // 进度条结束
    nProgress.done();
    return res.data;
}, (error) => {
    // 请求失败回调函数
    return Promise.reject(new Error("faile"));
})
// 暴露
export default requests;