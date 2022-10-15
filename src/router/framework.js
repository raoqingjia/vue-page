const frameworkRouter = [ // 前端框架
  {
    path: '/framework/angularCliBuild',
    name: 'Angular Cli打包的事',
    type: "framework",
    created: "2019-03-02",
    component: resolve => require(['@/views/framework/angularCliBuild'], resolve)
  },
  {
    path: '/framework/angular4to5',
    name: 'Angular4升级到5版本',
    type: "framework",
    created: "2019-04-05",
    component: resolve => require(['@/views/framework/angular4to5'], resolve)
  },
  {
    path: '/framework/angular5to6',
    name: 'Angular5升级到6版本',
    type: "framework",
    created: "2019-05-05",
    component: resolve => require(['@/views/framework/angular5to6'], resolve)
  },
  {
    path: '/framework/vue.config.js',
    name: 'vue-cli3 之vue.config.js配置',
    type: "framework",
    created: "2020-03-21",
    component: resolve => require(['@/views/framework/vueConfigJs'], resolve)
  },
  {
    path: '/framework/reactIeError',
    name: 'react 17.0.1 项目再ie下运行报错',
    type: "framework",
    created: "2020-12-20",
    component: resolve => require(['@/views/framework/reactIeError'], resolve)
  },
  {
    path: '/framework/reactVueAngularDiff',
    name: 'React、Vue、Angular的理解',
    type: "framework",
    created: "2021-01-28",
    component: resolve => require(['@/views/framework/reactVueAngularDiff'], resolve)
  },
  {
    path: '/framework/avrFramework',
    name: 'angular、react、vue谁更适合大型项目应用？',
    type: "framework",
    created: "2021-03-23",
    component: resolve => require(['@/views/framework/avrFramework'], resolve)
  },
  {
    path: '/framework/vueStyleDeep',
    name: 'vue中使用样式穿透 >>>  /deep/',
    type: "framework",
    created: "2021-04-23",
    component: resolve => require(['@/views/framework/vueStyleDeep'], resolve)
  },
  {
    path: '/framework/vueIeSCRIPT',
    name: 'vue项目在IE上显示空白 报错SCRIPT1006: 缺少 “)”',
    type: "framework",
    created: "2021-07-12",
    component: resolve => require(['@/views/framework/vueIeSCRIPT'], resolve)
  },
  {
    path: '/framework/vueData',
    name: 'vue的data为什么是函数类型',
    type: "framework",
    created: "2021-07-28",
    component: resolve => require(['@/views/framework/vueData'], resolve)
  },
  {
    path: '/framework/vueInterview',
    name: 'Vue面试题整理',
    type: "framework",
    created: "2021-07-28",
    component: resolve => require(['@/views/framework/vueInterview'], resolve)
  },
  {
    path: '/framework/mvvmAndMvm',
    name: 'mvvm模式和mvc的区别',
    type: "framework",
    created: "2021-09-01",
    component: resolve => require(['@/views/framework/mvvmAndMvm'], resolve)
  },
  {
    path: '/framework/vueTwoWayDataBinding',
    name: 'vue双向数据绑定原理',
    type: "framework",
    created: "2021-10-11",
    component: resolve => require(['@/views/framework/vueTwoWayDataBinding'], resolve)
  },
  {
    path: '/framework/vueLifeCycle',
    name: 'vue生命周期详解',
    type: "framework",
    created: "2021-10-11",
    component: resolve => require(['@/views/framework/vueLifeCycle'], resolve)
  },
  {
    path: '/framework/simulateReactiveFun',
    name: 'Object.defineProperty实现一个响应式函数',
    type: "framework",
    created: "2021-11-02",
    component: resolve => require(['@/views/framework/simulateReactiveFun'], resolve)
  },{
    path: '/framework/vuex',
    name: 'vuex用例',
    type: "framework",
    created: "2021-12-11",
    component: resolve => require(['@/views/framework/vuex'], resolve)
  },{
    path: '/framework/vuekeepalive',
    name: 'keep-alive组件的使用',
    type: "framework",
    created: "2021-12-23",
    component: resolve => require(['@/views/framework/vuekeepalive'], resolve)
  },
  {
    path: '/framework/vueUseAndNewVue',
    name: 'vue.use()与new Vue({})的区别',
    type: "framework",
    created: "2021-12-23",
    component: resolve => require(['@/views/framework/vueUseAndNewVue'], resolve)
  },
  {
    path: '/framework/reactComTemp',
    name: '通过webstorm快速创建react组件模板',
    type: "framework",
    created: "2022-04-12",
    component: resolve => require(['@/views/framework/reactComTemp'], resolve)
  },
  {
    path: '/framework/angularInnerHTML',
    name: 'Angular中innerHTML标签的样式不起作用的原因解析  ',
    type: "framework",
    created: "2022-05-06",
    component: resolve => require(['@/views/framework/angularInnerHTML'], resolve)
  },
  {
    path: '/framework/vueImgUseSrc',
    name: 'vue img使用动态:src',
    type: "framework",
    created: "2022-09-14",
    component: resolve => require(['@/views/framework/vueImgUseSrc'], resolve)
  },
  {
    path: '/framework/reactInJsxScope',
    name: '提示错误：React must be in scope when using JSX react/react-in-jsx-scope',
    type: "framework",
    created: "2022-10-04",
    component: resolve => require(['@/views/framework/reactInJsxScope'], resolve)
  }

];
export default frameworkRouter;
