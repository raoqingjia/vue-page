const frameworkRouter = [ // 前端框架
  {
    path: '/framework/angularCliBuild',
    name: 'Angular Cli打包的事',
    type: "framework",
    category:"Angular",
    created: "2019-03-02",
    component: resolve => require(['@/views/framework/angularCliBuild'], resolve)
  },
  {
    path: '/framework/angular4to5',
    name: 'Angular4升级到5版本',
    type: "framework",
    category:"Angular",
    created: "2019-04-05",
    component: resolve => require(['@/views/framework/angular4to5'], resolve)
  },
  {
    path: '/framework/angular5to6',
    name: 'Angular5升级到6版本',
    type: "framework",
    category:"Angular",
    created: "2019-05-05",
    component: resolve => require(['@/views/framework/angular5to6'], resolve)
  },
  {
    path: '/framework/vue.config.js',
    name: 'vue-cli3 之vue.config.js配置',
    type: "framework",
    category:"Vue",
    created: "2020-03-21",
    component: resolve => require(['@/views/framework/vueConfigJs'], resolve)
  },
  {
    path: '/framework/reactIeError',
    name: 'react 17.0.1 项目再ie下运行报错',
    type: "framework",
    category:"React",
    created: "2020-12-20",
    component: resolve => require(['@/views/framework/reactIeError'], resolve)
  },
  {
    path: '/framework/reactVueAngularDiff',
    name: 'React、Vue、Angular的理解',
    type: "framework",
    category:"Angular,Vue,React",
    created: "2021-01-28",
    component: resolve => require(['@/views/framework/reactVueAngularDiff'], resolve)
  },
  {
    path: '/framework/avrFramework',
    name: 'angular、react、vue谁更适合大型项目应用？',
    type: "framework",
    category:"Angular,Vue,React",
    created: "2021-03-23",
    component: resolve => require(['@/views/framework/avrFramework'], resolve)
  },
  {
    path: '/framework/vueStyleDeep',
    name: 'vue中使用样式穿透 >>>  /deep/',
    type: "framework",
    category:"Vue",
    created: "2021-04-23",
    component: resolve => require(['@/views/framework/vueStyleDeep'], resolve)
  },
  {
    path: '/framework/vueIeSCRIPT',
    name: 'vue项目在IE上显示空白 报错SCRIPT1006: 缺少 “)”',
    type: "framework",
    category:"Vue",
    created: "2021-07-12",
    component: resolve => require(['@/views/framework/vueIeSCRIPT'], resolve)
  },
  {
    path: '/framework/vueData',
    name: 'vue的data为什么是函数类型',
    type: "framework",
    category:"Vue",
    created: "2021-07-28",
    component: resolve => require(['@/views/framework/vueData'], resolve)
  },
  {
    path: '/framework/vueInterview',
    name: 'Vue面试题整理',
    type: "framework",
    category:"Vue",
    created: "2021-07-28",
    component: resolve => require(['@/views/framework/vueInterview'], resolve)
  },
  {
    path: '/framework/mvvmAndMvm',
    name: 'mvvm模式和mvc的区别',
    type: "framework",
    category:"Angular,Vue,React",
    created: "2021-09-01",
    component: resolve => require(['@/views/framework/mvvmAndMvm'], resolve)
  },
  {
    path: '/framework/vueTwoWayDataBinding',
    name: 'vue双向数据绑定原理',
    type: "framework",
    category:"Vue",
    created: "2021-10-11",
    component: resolve => require(['@/views/framework/vueTwoWayDataBinding'], resolve)
  },
  {
    path: '/framework/vueLifeCycle',
    name: 'vue生命周期详解',
    type: "framework",
    category:"Vue",
    created: "2021-10-11",
    component: resolve => require(['@/views/framework/vueLifeCycle'], resolve)
  },
  {
    path: '/framework/simulateReactiveFun',
    name: 'Object.defineProperty实现一个响应式函数',
    type: "Angular,Vue,React",
    category:"vue",
    created: "2021-11-02",
    component: resolve => require(['@/views/framework/simulateReactiveFun'], resolve)
  },{
    path: '/framework/vuex',
    name: 'vuex用例',
    type: "framework",
    category:"Vue",
    created: "2021-12-11",
    component: resolve => require(['@/views/framework/vuex'], resolve)
  },{
    path: '/framework/vuekeepalive',
    name: 'keep-alive组件的使用',
    type: "framework",
    category:"Vue",
    created: "2021-12-23",
    component: resolve => require(['@/views/framework/vuekeepalive'], resolve)
  },
  {
    path: '/framework/vueUseAndNewVue',
    name: 'vue.use()与new Vue({})的区别',
    type: "framework",
    category:"Vue",
    created: "2021-12-23",
    component: resolve => require(['@/views/framework/vueUseAndNewVue'], resolve)
  },
  {
    path: '/framework/reactComTemp',
    name: '通过webstorm快速创建react组件模板',
    type: "framework",
    category:"React",
    created: "2022-04-12",
    component: resolve => require(['@/views/framework/reactComTemp'], resolve)
  },
  {
    path: '/framework/angularInnerHTML',
    name: 'Angular中innerHTML标签的样式不起作用的原因解析  ',
    type: "framework",
    category:"Angular",
    created: "2022-05-06",
    component: resolve => require(['@/views/framework/angularInnerHTML'], resolve)
  },
  {
    path: '/framework/vueImgUseSrc',
    name: 'vue img使用动态:src',
    type: "framework",
    category:"Vue",
    created: "2022-09-14",
    component: resolve => require(['@/views/framework/vueImgUseSrc'], resolve)
  },
  {
    path: '/framework/reactInJsxScope',
    name: '提示错误：React must be in scope when using JSX react/react-in-jsx-scope',
    type: "framework",
    category:"React",
    created: "2022-10-04",
    component: resolve => require(['@/views/framework/reactInJsxScope'], resolve)
  },
  {
    path: '/framework/rxjs',
    name: 'Rxjs 专题详解',
    type: "framework",
    category:"Angular",
    created: "2022-10-04",
    component: resolve => require(['@/views/framework/rxjs'], resolve)
  },
  {
    path: '/framework/reactHooks',
    name: 'react Hooks 总结 ',
    type: "framework",
    category:"React",
    created: "2022-10-04",
    component: resolve => require(['@/views/framework/reactHooks'], resolve)
  },
  {
    path: '/framework/ruoyiCannotFindModule',
    name: '若依Vue框架部署前端项目报错 Cannot find module ‘@/views/.....‘',
    type: "framework",
    category:"Vue",
    created: "2023-02-21",
    component: resolve => require(['@/views/framework/ruoyiCannotFindModule'], resolve)
  },
  {
    path: '/framework/componentCardSolt',
    name: 'Vue中solt卡槽 Angular中ng-content React中prop 组件插槽',
    type: "framework",
    category:"Angular,Vue,React",
    created: "2023-02-21",
    component: resolve => require(['@/views/framework/componentCardSolt'], resolve)
  },
  {
    path: '/framework/use2install2component',
    name: 'Vue.use()、Vue.install()、Vue.component()',
    type: "framework",
    category:"Vue",
    created: "2022-03-10",
    component: resolve => require(['@/views/framework/use2install2component'], resolve)
  },
  {
    path: '/framework/projectAutoExit',
    name: '实现系统15分钟不操作自动退出到登录页',
    type: "framework",
    category:"Angular,Vue,React",
    created: "2022-04-15",
    component: resolve => require(['@/views/framework/projectAutoExit'], resolve)
  }
];
export default frameworkRouter;
