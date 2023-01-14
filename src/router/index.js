import Vue from 'vue'
import Router from 'vue-router'

import pluginRouter from './plugin'
import h5Router from './h5'
import cssRouter from "./css";
import jsRouter from "./js";
import queryRouter from "./jquery";
import appRouter from "./app";
import otherRouter from "./other";
import javaRouter from "./java";
import frameworkRouter from "./framework";
import webNoteRouter from "./webNote";
import crmNoteRouter from "./crmNote";


// const Register = (resolve) => require(['../views/index.vue'], resolve)
// const index = require('@/views/index')

// 懒加载：component: resolve => require(['@/view/index.vue'], resolve)
// 用require这种方式引入的时候，会将你的component分别打包成不同的js，加载的时候也是按需加载，只用访问这个路由网址时才会加载这个js
//
// 非懒加载：component: index
// 如果用import引入的话，当项目打包时路由里的所有component都会打包在一个js中，造成进入首页时，需要加载的内容过多，时间相对比较长

Vue.use(Router);
let basicRouter = [
  // nav导航   开始
  {
    path: '/index',
    name: 'index',
    component: resolve => require(['@/views/index'], resolve)
  },
  {
    path: '/list',
    name: 'list',
    component: resolve => require(['@/views/list'], resolve)
  },
  {
    path: '/framework',
    name: 'framework',
    component: resolve => require(['@/views/framework'], resolve)
  },
  {
    path: '/plugin',
    name: 'plugin',
    component: resolve => require(['@/views/plugin'], resolve)
  },
  {
    path: '/project',
    name: 'project',
    component: resolve => require(['@/views/project'], resolve)
  },
  {
    path: '/plan',
    name: 'plan',
    component: resolve => require(['@/views/plan'], resolve)
  },
  {
    path: '/onlineEdit',
    name: 'onlineEdit',
    component: resolve => require(['@/views/onlineEdit'], resolve)
  },
  // {
  //   path: '/translation',
  //   name: 'translation',
  //   component: resolve => require(['@/views/translation'], resolve)
  // }
];

export const routes = [
  {
    path: '/',
    name: 'layout',
    component: resolve => require(['@/views/layout'], resolve),
    children: basicRouter.concat(pluginRouter,h5Router,cssRouter,jsRouter,queryRouter,appRouter,otherRouter,javaRouter,frameworkRouter,webNoteRouter,crmNoteRouter)
  },
  {
    path: '/osDashboard',
    name: 'osDashboard',
    component: resolve => require(['@/views/dashboard/osDashboard'], resolve)
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: resolve => require(['@/views/dashboard/dashboard'], resolve)
  },
  {
    path: '/absweb',
    name: 'absweb',
    component: resolve => require(['@/absweb/layout/offerOrder'], resolve)
  }
];


console.log(routes);
export default new Router({
  routes: routes,
  //mode: 'history',    //去掉一个#,防止刷新调到登录页
  hashbang: false,
  history: true,
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})


