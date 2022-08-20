const webNoteRouter = [  //工作笔记
  {
    path: '/note/apache',
    name: "Apache",
    type: "web",
    img: require("../img/apache-icon.png"),
    description: "安装包、操作命令、参数..",
    created: "持续更新 最后版本 2018-03-02",
    component: resolve => require(['@/views/web/apache'], resolve)
  },
  {
    path: '/note/angularjs',
    name: "Angular.Js",
    type: "web",
    img: require("../img/angular-icon.png"),
    description: "基于1.2.9版本路由、指令...",
    created: "持续更新 最后版本 2018-02-26",
    component: resolve => require(['@/views/web/angular_js'], resolve)
  },
  {
    path: '/note/angular',
    name: "Angular 4.0",
    type: "web",
    img: require("../img/angular4-icon.png"),
    description: "基于angular-cli脚手架搭建...",
    created: "持续更新 最后版本 2018-04-08",
    component: resolve => require(['@/views/web/angular'], resolve)
  },
  {
    path: '/note/vue2',
    name: "Vue 2.0",
    type: "web",
    img: require("../img/vue-icon.png"),
    description: "基于vue-cli搭建、参数配置...",
    created: "持续更新 最后版本 2018-03-26",
    component: resolve => require(['@/views/web/vue2.0'], resolve)
  },
  {
    path: '/note/vue3',
    name: "Vue 3.0",
    type: "web",
    img: require("../img/vue-icon.png"),
    description: "Vue3.0与Vue2.0的差异对比...",
    created: "持续更新 最后版本 2021-05-26",
    component: resolve => require(['@/views/web/vue3.0'], resolve)
  },
  {
    path: '/note/react',
    name: "React",
    type: "web",
    img: require("../img/react-icon.png"),
    description: "React使用简介...",
    created: "持续更新 最后版本 2022-05-26",
    component: resolve => require(['@/views/web/react'], resolve)
  },
  {
    path: '/note/git',
    name: "Git",
    type: "web",
    img: require("../img/git-icon.png"),
    description: "操作方法，命令行详解...",
    created: "持续更新 最后版本 2021-02-24",
    component: resolve => require(['@/views/web/git'], resolve)
  },
  {
    path: '/note/ES6',
    name: "ES6",
    type: "web",
    img: require("../img/es6-icon.png"),
    description: "安装命令、引入模块、参数...",
    created: "持续更新 最后版本 2018-03-29",
    component: resolve => require(['@/views/web/ES6'], resolve)
  },
  {
    path: '/note/typescript',
    name: "TypeScript",
    type: "web",
    img: require("../img/typescript-icon.png"),
    description: "TypeScript 入门API文档...",
    created: "持续更新 最后版本 2018-03-16",
    component: resolve => require(['@/views/web/typescript'], resolve)
  },
  {
    path: '/note/ajax',
    name: "Ajax",
    type: "web",
    img: require("../img/ajax-icon.png"),
    description: "ajax教程及各个参数配置...",
    created: "持续更新 最后版本 2018-04-08",
    component: resolve => require(['@/views/web/ajax'], resolve)
  },
  {
    path: '/note/grunt',
    name: "Grunt",
    type: "web",
    img: require("../img/grunt-icon.png"),
    description: "安装命令、引入模块、参数...",
    created: "持续更新 最后版本 2018-03-30",
    component: resolve => require(['@/views/web/grunt'], resolve)
  },
  {
    path: '/note/gulp',
    name: "Gulp",
    type: "web",
    img: require("../img/gulp-icon.png"),
    description: "安装命令、引入模块、参数...",
    created: "2018-03-29",
    component: resolve => require(['@/views/web/gulp'], resolve)
  },
  {
    path: '/note/webpack',
    name: "webpack",
    type: "web",
    img: require("../img/webpack-icon.png"),
    description: "安装命令、引入模块、参数...",
    created: "持续更新 最后版本 2020-09-30",
    component: resolve => require(['@/views/web/webpack'], resolve)
  },
  {
    path: '/note/html',
    name: "Html",
    type: "web",
    img: require("../img/html-icon.png"),
    description: "html、html5常用标签...",
    created: "持续更新 最后版本 2018-03-20",
    component: resolve => require(['@/views/web/html'], resolve)
  },
  {
    path: '/note/css',
    name: "Css",
    type: "web",
    img: require("../img/css-icon.png"),
    description: "css、css3样式...",
    created: "持续更新 最后版本 2018-04-91",
    component: resolve => require(['@/views/web/css'], resolve)
  },
  {
    path: '/note/js',
    name: "JavaScript",
    type: "web",
    img: require("../img/js-icon.png"),
    description: "JavaScript相关属性，功能介绍...",
    created: "持续更新 最后版本 2018-03-20",
    component: resolve => require(['@/views/web/js'], resolve)
  },
  {
    path: '/note/http',
    name: "Http",
    type: "web",
    img: require("../img/http-icon.png"),
    description: "常见响应状态，报错详解...",
    created: "持续更新 最后版本 2018-03-20",
    component: resolve => require(['@/views/web/http'], resolve)
  },
  {
    path: '/note/echarts',
    name: "echarts",
    type: "web",
    img: require("../img/echarts-icon.png"),
    description: "可视化图表配置说明...",
    created: "持续更新 最后版本 2022-01-20",
    component: resolve => require(['@/views/web/echarts'], resolve)
  },
  {
    path: '/note/json',
    name: "Json",
    type: "web",
    img: require("../img/json-icon.png"),
    description: "json的格式，json的使用方式...",
    created: "持续更新 最后版本 2018-03-20",
    component: resolve => require(['@/views/web/json'], resolve)
  },
  {
    path: '/note/less',
    name: "Less",
    type: "web",
    img: require("../img/less-icon.png"),
    description: "Less是css预处理语言,扩展...",
    created: "持续更新 最后版本 2018-03-16",
    component: resolve => require(['@/views/web/less'], resolve)
  },
  {
    path: '/note/node',
    name: "Node.js",
    type: "web",
    img: require("../img/node-icon.png"),
    description: "命令行详解，常见错误详解...",
    created: "持续更新 最后版本 2018-03-16",
    component: resolve => require(['@/views/web/node'], resolve)
  },
  {
    path: '/note/npm',
    name: "Npm",
    type: "web",
    img: require("../img/npm-icon.png"),
    description: "命令行详解，常见错误详解...",
    created: "持续更新 最后版本 2018-03-16",
    component: resolve => require(['@/views/web/npm'], resolve)
  },
  {
    path: '/note/require',
    name: "Require.Js",
    type: "web",
    img: require("../img/require-icon.png"),
    description: "使用模块化防止污染全局变量...",
    created: "持续更新 最后版本 2018-03-26",
    component: resolve => require(['@/views/web/require'], resolve)
  },
  {
    path: '/note/svn',
    name: "Svn",
    type: "web",
    img: require("../img/svn-icon.png"),
    description: "Svn的安装与使用方法...",
    created: "持续更新 最后版本 2018-03-26",
    component: resolve => require(['@/views/web/svn'], resolve)
  },
  {
    path: '/note/webInterview',
    name: "Web面试题",
    type: "web",
    img: require("../img/web-icon.png"),
    description: "web开发中面试题积累...",
    created: "持续更新 最后版本 2018-04-08",
    component: resolve => require(['@/views/web/webInterview'], resolve)
  }];
export default webNoteRouter;
