//引入vue
import Vue from 'vue';
//引入App
import App from './App.vue';
//引入VueRouter
import VueRouter from 'vue-router';
//引入路由
import router from './router';
//关闭生产提示
Vue.config.productionTip = false
//使用VueRouter
Vue.use(VueRouter)
//创建路由实例
//创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    router:router
})