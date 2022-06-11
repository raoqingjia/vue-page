const otherRouter = [{
  path: '/other/browser',
  name: "关于IE浏览器",
  type: "other",
  img: require("../img/browser-icon.png"),
  description: "IE、谷歌、火狐等浏览器解说...",
  created: "2018-03-29",
  component: resolve => require(['@/views/other/browser'], resolve)
},
  {
    path: '/other/xFrameOptions',
    name: 'iframe 内嵌报错：X-Frame-Options to sameorigin',
    type: "other",
    created: "2019-02-24",
    component: resolve => require(['@/views/other/xFrameOptions'], resolve)
  },
  {
    path: '/other/npmBuildOutOfMemory',
    name: 'npm run build时报错FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed -错误',
    type: "other",
    created: "2019-03-02",
    component: resolve => require(['@/views/other/npmBuildOutOfMemory'], resolve)
  },
  {
    path: '/other/jsFetch',
    name: 'JavaScript 之 Fetch',
    type: "other",
    created: "2019-03-07",
    component: resolve => require(['@/views/other/jsFetch'], resolve)
  },
  {
    path: '/other/httpReferer',
    name: 'Http请求header之Referer讲解',
    type: "other",
    created: "2019-05-07",
    component: resolve => require(['@/views/other/httpReferer'], resolve)
  },
  {
    path: '/other/http413',
    name: 'HTTP 413错误解决方法',
    type: "other",
    created: "2019-06-23",
    component: resolve => require(['@/views/other/http413'], resolve)
  },
  {
    path: '/other/pcDifferentApp',
    name: '为什么一套项目不能同时适配pc端和移动端',
    type: "other",
    created: "2019-07-18",
    component: resolve => require(['@/views/other/pcDifferentApp'], resolve)
  },
  {
    path: '/other/proxyPassReverse',
    name: 'apache中关于ProxyPass、ProxyPassReverse代理和反向代理的理解',
    type: "other",
    created: "2019-07-21",
    component: resolve => require(['@/views/other/proxyPassReverse'], resolve)
  },
  {
    path: '/other/absWebPackageGuide',
    name: 'abs手动打包指南',
    type: "other",
    created: "2019-08-03",
    component: resolve => require(['@/views/other/absWebPackageGuide'], resolve)
  },
  {
    path: '/other/jwttoken',
    name: 'JWT token 前端解码',
    type: "other",
    created: "2020-01-15",
    component: resolve => require(['@/views/other/jwttoken'], resolve)
  },
  {
    path: '/other/rxjs',
    name: 'Rxjs入门教程',
    type: "other",
    created: "2020-03-10",
    component: resolve => require(['@/views/other/rxjs'], resolve)
  },
  {
    path: '/other/webpack.env',
    name: 'webpack（process.env.NODE_ENV）build打包自动区分环境',
    type: "other",
    created: "2020-03-21",
    component: resolve => require(['@/views/other/webpackEnv'], resolve)
  },
  {
    path: '/other/cloneDeep',
    name: '如何实现深拷贝',
    type: "other",
    created: "2021-02-02",
    component: resolve => require(['@/views/other/cloneDeep'], resolve)
  },
  {
    path: '/other/CommonJs&ES6',
    name: '深入 CommonJs 与 ES6 Module',
    type: "other",
    created: "2021-02-15",
    component: resolve => require(['@/views/other/commonJs&ES6'], resolve)
  },
  {
    path: '/other/styleLoader',
    name: 'webpack常用的sass-loader、node-sass、style-loader等区别作用',
    type: "other",
    created: "2021-02-26",
    component: resolve => require(['@/views/other/styleLoader'], resolve)
  },
  {
    path: '/other/cors',
    name: '跨域问题',
    type: "other",
    created: "2021-03-05",
    component: resolve => require(['@/views/other/cors'], resolve)
  },
  {
    path: '/other/MapAndFilter',
    name: 'ES6 Map遍历、filter()筛选对象',
    type: "other",
    created: "2021-03-05",
    component: resolve => require(['@/views/other/mapAndFilter'], resolve)
  },
  {
    path: '/other/indexedDB',
    name: '浏览器数据库 IndexedDB',
    type: "other",
    created: "2021-03-13",
    component: resolve => require(['@/views/other/indexedDB'], resolve)
  },
  {
    path: '/other/initProject',
    name: '对项目初期搭建的一些整理和注意点',
    type: "other",
    created: "2021-05-12",
    component: resolve => require(['@/views/other/initProject'], resolve)
  },
  {
    path: '/other/debounceAndThrottle',
    name: '防抖和节流',
    type: "other",
    created: "2021-06-11",
    component: resolve => require(['@/views/other/debounceAndThrottle'], resolve)
  },
  {
    path: '/other/backflowRredraw',
    name: '回流和重绘',
    type: "other",
    created: "2021-06-11",
    component: resolve => require(['@/views/other/backflowRredraw'], resolve)
  },
  {
    path: '/other/promiseErrorUndefined',
    name: 'ERROR Error: Uncaught (in promise): TypeError: Cannot read property "name" of undefined',
    type: "other",
    created: "2021-06-28",
    component: resolve => require(['@/views/other/promiseErrorUndefined'], resolve)
  },
  {
    path: '/other/cryptoJsInIEError',
    name: 'crypto-js在ie浏览器中因为兼容性问题报错',
    type: "other",
    created: "2021-07-12",
    component: resolve => require(['@/views/other/cryptoJsInIEError'], resolve)
  },
  {
    path: '/other/syntacticSugar',
    name: '什么是：语法糖',
    type: "other",
    created: "2021-07-23",
    component: resolve => require(['@/views/other/syntacticSugar'], resolve)
  },
  {
    path: '/other/osWebReflection',
    name: 'os-web上线2个月后回归仍发现一堆问题反思',
    type: "other",
    created: "2021-11-23",
    component: resolve => require(['@/views/other/osWebReflection'], resolve)
  },
  {
    path: '/other/enotfound',
    name: 'npm run dev运行报错getaddrinfo ENOTFOUND localhost',
    type: "other",
    created: "2021-12-23",
    component: resolve => require(['@/views/other/enotfound'], resolve)
  },
  {
    path: '/other/adviceForDashboard',
    name: '关于Dashboard数据可视化全屏写法的一些构思',
    type: "other",
    created: "2022-02-23",
    component: resolve => require(['@/views/other/adviceForDashboard'], resolve)
  },
  {
    path: '/other/axiosGetError ',
    name: 'axios中get请求对参数中包含的%进行了转义',
    type: "other",
    created: "2022-05-10",
    component: resolve => require(['@/views/other/axiosGetError'], resolve)
  },
  {
    path: '/other/threeAPP ',
    name: 'native APP、hybrid APP、web APP三者的区别',
    type: "other",
    created: "2022-05-10",
    component: resolve => require(['@/views/other/threeAPP'], resolve)
  },
  {
    path: '/other/postmanBody',
    name: 'Post 中 Body 的 ContentType的格式',
    type: "other",
    created: "2022-05-23",
    component: resolve => require(['@/views/other/postmanBody'], resolve)
  },
  {
    path: '/other/cURL',
    name: '如何使用cURL命令？有哪些常见的用法？',
    type: "other",
    created: "2022-05-23",
    component: resolve => require(['@/views/other/cURL'], resolve)
  },
];
export default otherRouter;
