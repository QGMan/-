// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import ElementUi from 'element-ui';
Vue.use(ElementUi);

// 引入jquery
import $ from 'jquery'

// import login from './components/admin/account/login.vue';
import layout from './components/admin/layout.vue';
import goodslist from './components/admin/goods/goodslist.vue';
import goodsadd from './components/admin/goods/goodsadd.vue';
import one from './components/admin/goods/one.vue';
import two from './components/admin/goods/two.vue';
import four from './components/admin/goods/four.vue';
import eight from './components/admin/goods/eight.vue';
//定义路由规则
var router = new VueRouter({
    routes: [
        {
            name: 'default', //自动 跳转到指定页面
            path: '/',
            redirect: '/admin/one'
        },
        // {
        //     name: 'login', //登录页面
        //     path: '/login',
        //     component: login
        // }, 
        {
            name: 'layout', //主页面
            path: '/admin',
            component: layout,
            children: [{
                name: 'goodslist', //购物管理列表页面
                path: '/admin/goodslist',
                component: goodslist,
                children:[
                    {
                    name:'one',
                    path:'/admin/one',
                    component: one,                   
                    },
                    {
                    name:'two',
                    path:'/admin/two',
                    component: two,                   
                    },
                    {
                    name:'four',
                    path:'/admin/four',
                    component: four,                   
                    },
                    {
                    name:'eight',
                    path:'/admin/eight',
                    component: eight,                   
                    },]
            }, {
                name: 'goodsadd', //类别管理列表页面（添加）
                path: '/admin/goodsadd',
                component: goodsadd

            }]
        }
    ]
})

//导入axios的使用
import axios from 'axios';
//绑定到Vue原型中，将来每次组件都可以使用，this.$http去调用即可
Vue.prototype.$http = axios;
//设定axios的基本url请求前缀
// axios.defaults.baseURL = 'http://157.122.54.189:9095';
axios.defaults.baseURL = 'http://192.168.0.10:8080/api/v1';
// axios.defaults.baseURL = 'http://localhost:8080/api/v1';



import '../static/theme_rms/index.css';
import '../static/css/site.css';

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: create => create(App)
})