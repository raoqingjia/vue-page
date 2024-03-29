const pluginRouter = [
  //插件参数记录
  {
    path: '/plugin/echarts-tooltip',
    name: 'Echarts中tooltip超出外层div显示不全问题',
    type: "plugin",
    category:"web",
    created: "2018-03-26",
    component: resolve => require(['@/views/plugin/echarts-tooltip'], resolve)
  },
  {
    path: '/plugin/momentJs',
    name: 'moment.js 格式化时间',
    type: "plugin",
    category:"web",
    created: "2018-03-26",
    component: resolve => require(['@/views/plugin/momentJs'], resolve)
  },
  {
    path: '/plugin/colresizable',
    name: 'colResizable.js 调整table表格的列宽',
    type: "plugin",
    category:"web",
    created: "2018-03-29",
    component: resolve => require(['@/views/plugin/colresizable'], resolve)
  },
  {
    path: '/plugin/mobileSelect',
    name: 'mobileSelect.js 手机移动端选择组件',
    type: "plugin",
    category:"web",
    created: "2018-03-29",
    component: resolve => require(['@/views/plugin/mobileSelect'], resolve)
  },
  {
    path: '/plugin/mock',
    name: 'mock.js 模拟数据，实现前后端分离开发',
    type: "plugin",
    category:"web",
    created: "2018-04-09",
    component: resolve => require(['@/views/plugin/mock'], resolve)
  },
  {
    path: '/plugin/tablefixed',
    name: 'table表头固定',
    type: "plugin",
    category:"web",
    created: "2018-05-19",
    component: resolve => require(['@/views/plugin/tablefixed'], resolve)
  },
  {
    path: '/plugin/better-scroll',
    name: 'better-scroll 触屏滚动插件',
    type: "plugin",
    category:"web",
    created: "2018-05-19",
    component: resolve => require(['@/views/plugin/better-scroll'], resolve)
  },
  {
    path: '/plugin/Lodash',
    name: 'Lodash JavaScript 实用工具库',
    type: "plugin",
    category:"web",
    created: "2018-09-01",
    component: resolve => require(['@/views/plugin/Lodash'], resolve)
  },

  {
    path: '/plugin/mockjs',
    name: 'mockjs',
    type: "plugin",
    category:"web",
    created: "2019-03-11",
    component: resolve => require(['@/views/plugin/mockjs'], resolve)
  },
  {
    path: '/plugin/fastmock',
    name: 'fastmock',
    type: "plugin",
    category:"web",
    created: "2019-05-21",
    component: resolve => require(['@/views/plugin/fastmock'], resolve)
  },
  {
    path: '/plugin/qrcanvas',
    name: 'qrcanvas 生成二维码',
    type: "plugin",
    category:"web",
    created: "2019-09-04",
    component: resolve => require(['@/views/plugin/qrcanvas'], resolve)
  },
  {
    path: '/plugin/dayjs',
    name: 'day.js一个轻量处理时间和日期的JavaScript 库',
    type: "plugin",
    category:"web",
    created: "2020-04-05",
    component: resolve => require(['@/views/plugin/dayjs'], resolve)
  },
  {
    path: '/plugin/jscookie',
    name: 'js.cookie: 一个简单，轻量级的JavaScript API，用于处理cookie',
    type: "plugin",
    category:"web",
    created: "2021-08-12",
    component: resolve => require(['@/views/plugin/jscookie'], resolve)
  },
  {
    path: '/plugin/eslint',
    name: 'ESLint可组装的 javaScript 和 JSX 检查工具',
    type: "plugin",
    category:"web",
    created: "2021-09-02",
    component: resolve => require(['@/views/plugin/eslint'], resolve)
  },
  {
    path: '/plugin/vueI18n',
    name: 'vue项目利用vue-i18n实现国际化',
    type: "plugin",
    category:"web",
    created: "2021-09-02",
    component: resolve => require(['@/views/plugin/vueI18n'], resolve)
  },
  {
    path: '/plugin/liveServer',
    name: 'live-server使用指南',
    type: "plugin",
    category:"web",
    created: "2022-01-14",
    component: resolve => require(['@/views/plugin/liveServer'], resolve)
  },
  {
    path: '/plugin/html2canvas ',
    name: 'html2canvas ',
    type: "plugin",
    category:"web",
    created: "2022-08-14",
    component: resolve => require(['@/views/plugin/html2canvas'], resolve)
  },
  {
    path: '/plugin/googleTranslateApi ',
    name: '免费的谷歌翻译api google-translate-open-api',
    type: "plugin",
    category:"web",
    created: "2022-09-07",
    component: resolve => require(['@/views/plugin/googleTranslateApi'], resolve)
  },
  {
    path: '/plugin/fetchJsonp ',
    name: 'fetch-jsonp 实现跨域',
    type: "plugin",
    category:"web",
    created: "2022-09-14",
    component: resolve => require(['@/views/plugin/fetchJsonp'], resolve)
  },
  {
    path: '/plugin/validator ',
    name: '前端的验证工具 validator.js',
    type: "plugin",
    category:"web",
    created: "2022-09-21",
    component: resolve => require(['@/views/plugin/validator'], resolve)
  },
  {
    path: '/plugin/cryptoJS ',
    name: '前端加密JS库--CryptoJS',
    type: "plugin",
    category:"web",
    created: "2022-10-19",
    component: resolve => require(['@/views/plugin/cryptoJS'], resolve)
  },
  {
    path: '/plugin/axios ',
    name: 'axios项目中二次封装',
    type: "plugin",
    category:"web",
    created: "2022-10-19",
    component: resolve => require(['@/views/plugin/axios'], resolve)
  },
  {
    path: '/plugin/scrollAnimate',
    name: 'wow.js、scrollReveal.js、aos.js是页面滚动显示动画的JavaScript',
    type: "plugin",
    category:"web",
    created: "2023-01-27",
    component: resolve => require(['@/views/plugin/scrollAnimate'], resolve)
  },
  {
    path: '/plugin/lerna',
    name: 'lerna管理包含多个软件包',
    type: "plugin",
    category:"web",
    created: "2023-02-01",
    component: resolve => require(['@/views/plugin/lerna'], resolve)
  },
  {
    path: '/plugin/jsencryptAndEncryptlong',
    name: 'jsencrypt 与 encryptlong',
    type: "plugin",
    category:"web",
    created: "2023-02-11",
    component: resolve => require(['@/views/plugin/jsencryptAndEncryptlong'], resolve)
  },
  {
    path: '/plugin/anywhere',
    name: '本地替代Apache  Tomcat 的工具 anywhere',
    type: "plugin",
    category:"web",
    created: "2023-04-06",
    component: resolve => require(['@/views/plugin/anywhere'], resolve)
  }
];
export default pluginRouter;
