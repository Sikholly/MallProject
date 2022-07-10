module.exports = {
    // 关闭eslint代码校验功能
    lintOnSave:false,
    devServer: {
        proxy: {
            // 对象中键是本地请求地址,值是代理服务器配置对象
            // /personalized?limit=10
            // 注意: vue/cli已经安装并配置了代理模块,可以直接用
            '/api': {
                target: 'http://gmall-h5-api.atguigu.cn',// 要跨域的域名
                //是否开启跨域
                changeOrigin: true,
            }
        }
    }
}