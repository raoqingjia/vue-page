import Vue from 'vue'
import Router from 'vue-router'


// const Register = (resolve) => require(['../views/index.vue'], resolve)
// const index = require('@/views/index')

// 懒加载：component: resolve => require(['@/view/index.vue'], resolve)
// 用require这种方式引入的时候，会将你的component分别打包成不同的js，加载的时候也是按需加载，只用访问这个路由网址时才会加载这个js
//
// 非懒加载：component: index
// 如果用import引入的话，当项目打包时路由里的所有component都会打包在一个js中，造成进入首页时，需要加载的内容过多，时间相对比较长

Vue.use(Router);

export const routes = [
  {
    path: '/',
    name: 'layout',
    component: resolve => require(['@/views/layout'], resolve),
    children: [
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
        path: '/project',
        name: 'project',
        component: resolve => require(['@/views/project'], resolve)
      },
      //H5 案例
      {
        path: '/h5/autocompleteNoWork',
        name: 'autocomplete属性失效的解决方法',
        type: "h5",
        created: "2018-02-27",
        component: resolve => require(['@/views/h5/autocompleteNoWork'], resolve)
      },
      {
        path: '/h5/h5historyApi',
        name: 'H5 的 history API介绍与使用',
        type: "h5",
        created: "2018-02-27",
        component: resolve => require(['@/views/h5/h5historyApi'], resolve)
      },
      {
        path: '/h5/imgShowBorderError',
        name: 'img出现边框，css设置无效',
        type: "h5",
        created: "2018-03-12",
        component: resolve => require(['@/views/h5/imgShowBorderError'], resolve)
      },
      {
        path: '/h5/understandH5',
        name: 'H5 是做什么，和移动端有啥区别',
        type: "h5",
        created: "2019-07-18",
        component: resolve => require(['@/views/h5/understandH5'], resolve)
      },
      //css案例
      {
        path: '/css/text-indent',
        name: 'text-indent段落首行文字缩进',
        type: "css",
        created: "2018-02-27",
        component: resolve => require(['@/views/css/text-indent'], resolve)
      },
      {
        path: '/css/linefeed',
        name: 'css文字换行',
        type: "css",
        created: "2018-03-18",
        component: resolve => require(['@/views/css/linefeed'], resolve)
      },
      {
        path: '/css/overflow-omit',
        name: 'css实现单行、多行文本溢出显示省略号...',
        type: "css",
        created: "2018-03-18",
        component: resolve => require(['@/views/css/overflow-omit'], resolve)
      },
      {
        path: '/css/line-block',
        name: 'line-block元素换行存在间隙',
        type: "css",
        created: "2018-03-26",
        component: resolve => require(['@/views/css/line-block'], resolve)
      },
      {
        path: '/css/padding-bottom',
        name: 'IE、Firefox使用overflow后padding-bottom失效',
        type: "css",
        created: "2018-03-29",
        component: resolve => require(['@/views/css/padding-bottom'], resolve)
      },
      {
        path: '/css/background-size',
        name: 'background-size规定背景图像的尺寸',
        type: "css",
        created: "2018-04-09",
        component: resolve => require(['@/views/css/background-size'], resolve)
      },
      {
        path: '/css/absolute-overflow',
        name: 'overflow:hidden与absolute冲突',
        type: "css",
        created: "2018-05-03",
        component: resolve => require(['@/views/css/absolute-overflow'], resolve)
      },
      {
        path: '/css/loading',
        name: '添加Loading遮罩层',
        type: "css",
        created: "2018-05-03",
        component: resolve => require(['@/views/css/loading'], resolve)
      },
      {
        path: '/css/doubleBorder',
        name: '伪造双色border-bottom',
        type: "css",
        created: "2018-05-04",
        component: resolve => require(['@/views/css/doubleBorder'], resolve)
      },
      {
        path: '/css/borderCreateZigzag',
        name: '利用border伪造锯齿状效果',
        type: "css",
        created: "2018-05-04",
        component: resolve => require(['@/views/css/borderCreateZigzag'], resolve)
      },
      {
        path: '/css/img-linear',
        name: '背景渐变色，图片同时显示',
        type: "css",
        created: "2018-05-14",
        component: resolve => require(['@/views/css/img-linear'], resolve)
      },
      {
        path: '/css/linear-gradient',
        name: 'linear-gradient背景渐变色',
        type: "css",
        created: "2018-05-14",
        component: resolve => require(['@/views/css/linear-gradient'], resolve)
      },
      {
        path: '/css/ayout-zIndex',
        name: 'z-index的布局',
        type: "css",
        created: "2018-05-14",
        component: resolve => require(['@/views/css/layout-zIndex'], resolve)
      },
      {
        path: '/css/after:arrow',
        name: '利用after伪元素制作小三角',
        type: "css",
        created: "2018-05-14",
        component: resolve => require(['@/views/css/after-arrow'], resolve)
      },
      {
        path: '/css/trackBar',
        name: '类似快递查询信息界面',
        type: "css",
        created: "2018-06-11",
        component: resolve => require(['@/views/css/track-bar'], resolve)
      },
      {
        path: '/css/keyFrames',
        name: '关键帧动画',
        type: "css",
        created: "2018-06-15",
        component: resolve => require(['@/views/css/key-frames'], resolve)
      },
      {
        path: '/css/fontFace',
        name: 'CSS3 @font-face 规则',
        type: "css",
        created: "2018-09-11",
        component: resolve => require(['@/views/css/fontFace'], resolve)
      },
      {
        path: '/css/rem',
        name: '前端 rem算法',
        type: "css",
        created: "2018-09-19",
        component: resolve => require(['@/views/css/rem'], resolve)
      },
      //js案例
      {
        path: '/js/queryAndById',
        name: 'querySelector和getElementById方法的区别',
        type: "js",
        created: "2018-04-02",
        component: resolve => require(['@/views/js/queryAndById'], resolve)
      },
      {
        path: '/js/domAndbom',
        name: 'DOM与BOM的区别',
        type: "js",
        created: "2018-04-02",
        component: resolve => require(['@/views/js/domAndbom'], resolve)
      },
      {
        path: '/js/jsonIgnoreStr',
        name: 'json传输数据时会自动把0给忽略掉',
        type: "js",
        created: "2018-04-04",
        component: resolve => require(['@/views/js/jsonIgnoreStr'], resolve)
      },
      {
        path: '/js/getDate',
        name: '跟日期相关的js函数封装',
        type: "js",
        created: "2018-04-10",
        component: resolve => require(['@/views/js/getDate'], resolve)
      },
      {
        path: '/js/removeSpecialStr',
        name: 'JS删除string中特殊字符的方法',
        type: "js",
        created: "2018-04-10",
        component: resolve => require(['@/views/js/removeSpecialStr'], resolve)
      },
      {
        path: '/js/numTransformStr',
        name: '数字改变成每隔三位用逗号隔开',
        type: "js",
        created: "2018-05-05",
        component: resolve => require(['@/views/js/numTransformStr'], resolve)
      },
      {
        path: '/js/loginCheckOut',
        name: '登录校验类的js函数封装',
        type: "js",
        created: "2018-05-05",
        component: resolve => require(['@/views/js/loginCheckOut'], resolve)
      },
      {
        path: '/js/getUrlArguments',
        name: 'url传参，取参哪些事',
        type: "js",
        created: "2018-05-24",
        component: resolve => require(['@/views/js/getUrlArguments'], resolve)
      },
      {
        path: '/js/letAndConst',
        name: '浅谈ES6的let和const的异同点',
        type: "js",
        created: "2018-06-05",
        component: resolve => require(['@/views/js/letAndConst'], resolve)
      },
      {
        path: '/js/urlAndUri',
        name: 'url和uri的区别',
        type: "js",
        created: "2018-06-09",
        component: resolve => require(['@/views/js/urlAndUri'], resolve)
      },
      {
        path: '/js/ieGetArrayLength.',
        name: 'IE下获取对象数组长度错误',
        type: "js",
        created: "2018-06-23",
        component: resolve => require(['@/views/js/ieGetArrayLength'], resolve)
      },
      {
        path: '/js/jsForIn',
        name: '关于javsacript中 for in遍历对象',
        type: "js",
        created: "2018-07-03",
        component: resolve => require(['@/views/js/jsForIn'], resolve)
      },
      {
        path: '/js/jsonTurnObject',
        name: 'Json与Object的相互转换',
        type: "js",
        created: "2018-07-16",
        component: resolve => require(['@/views/js/jsonTurnObject'], resolve)
      },
      {
        path: '/js/sortNumStrCN',
        name: '基于JS实现数字+字母+中文的混合排序方法',
        type: "js",
        created: "2018-07-25",
        component: resolve => require(['@/views/js/sortNumStrCN'], resolve)
      },
      {
        path: '/js/canvasCode',
        name: '基于canvas实现随机验证码',
        type: "js",
        created: "2018-08-06",
        component: resolve => require(['@/views/js/canvasCode'], resolve)
      },
      {
        path: '/js/indexOf',
        name: 'IE8不支持数组的indexOf方法 ',
        type: "js",
        created: "2018-08-06",
        component: resolve => require(['@/views/js/indexOf'], resolve)
      },
      {
        path: '/js/jsRealizeTab',
        name: 'js实现tab标签切换效果',
        type: "js",
        created: "2018-08-22",
        component: resolve => require(['@/views/js/jsRealizeTab'], resolve)
      },
      {
        path: '/js/jsPrototype',
        name: 'Js的原型对象与原型链',
        type: "js",
        created: "2018-09-11",
        component: resolve => require(['@/views/js/jsPrototype'], resolve)
      },
      {
        path: '/js/ieDateError',
        name: 'ie下new Date()带参数不兼容的问题',
        type: "js",
        created: "2018-10-23",
        component: resolve => require(['@/views/js/ieDateError'], resolve)
      },
      {
        path: '/js/jsUndefined ',
        name: 'js中undefined的几种情况',
        type: "js",
        created: "2019-02-06",
        component: resolve => require(['@/views/js/jsUndefined'], resolve)
      },
      {
        path: '/js/efficiencyOfFor',
        name: 'for循环中通过new Date().getTime()获取唯一id的bug',
        type: "js",
        created: "2019-04-26",
        component: resolve => require(['@/views/js/efficiencyOfFor'], resolve)
      },
      {
        path: '/js/forEachObject',
        name: 'JavaScript遍历对象、数组总结',
        type: "js",
        created: "2019-05-30",
        component: resolve => require(['@/views/js/forEachObject'], resolve)
      },
      {
        path: '/js/multipleAsyncWaiting',
        name: 'JS中等待多个异步方法完成后再操作',
        type: "js",
        created: "2019-06-28",
        component: resolve => require(['@/views/js/multipleAsyncWaiting'], resolve)
      },
      {
        path: '/js/asyncWait',
        name: 'async/await 使用介绍',
        type: "js",
        created: "2019-06-28",
        component: resolve => require(['@/views/js/asyncWait'], resolve)
      },
      {
        path: '/js/JumpOutOfFor',
        name: 'for循环跳出<多层>循环',
        type: "js",
        created: "2019-10-28",
        component: resolve => require(['@/views/js/JumpOutOfFor'], resolve)
      },
      {
        path: '/js/formDateUpload',
        name: 'FormDate实现附件上传',
        type: "js",
        created: "2019-11-28",
        component: resolve => require(['@/views/js/formDateUpload'], resolve)
      },
      {
        path: '/js/inputFile',
        name: 'input[type="file"]解析',
        type: "js",
        created: "2019-11-28",
        component: resolve => require(['@/views/js/inputFile'], resolve)
      },
      {
        path: '/js/FileReader',
        name: '利用FileReader在线预览文本文件',
        type: "js",
        created: "2019-12-02",
        component: resolve => require(['@/views/js/FileReader'], resolve)
      },
      {
        path: '/js/createObjectURL',
        name: '利用createObjectURL下载已上传文件',
        type: "js",
        created: "2019-12-02",
        component: resolve => require(['@/views/js/createObjectURL'], resolve)
      },
      {
        path: '/js/base64ToBlobToFile',
        name: 'base64转化为blob,blob转化为file',
        type: "js",
        created: "2019-12-03",
        component: resolve => require(['@/views/js/base64ToBlobToFile'], resolve)
      },
      {
        path: '/js/blobAndFile',
        name: 'blob类、file类型',
        type: "js",
        created: "2019-12-03",
        component: resolve => require(['@/views/js/blobAndFile'], resolve)
      },
      {
        path: '/js/JsBase64',
        name: 'Base64编码解码',
        type: "js",
        created: "2019-12-03",
        component: resolve => require(['@/views/js/JsBase64'], resolve)
      },
      {
        path: '/js/blobURL',
        name: 'Blob URL是什么',
        type: "js",
        created: "2019-12-26",
        component: resolve => require(['@/views/js/blobURL'], resolve)
      },
      {
        path: '/js/dataURL',
        name: 'Data URL是什么',
        type: "js",
        created: "2019-12-26",
        component: resolve => require(['@/views/js/dataURL'], resolve)
      },
      {
        path: '/js/blobURLAndDataURL',
        name: 'Blob URL和Data URL有什么区别?',
        type: "js",
        created: "2019-12-26",
        component: resolve => require(['@/views/js/blobURLAndDataURL'], resolve)
      },
      {
        path: '/js/FileReader',
        name: 'js中call()和apply()方法',
        type: "js",
        created: "2020-02-15",
        component: resolve => require(['@/views/js/callAndApply'], resolve)
      },
      {
        path: '/js/jsCopy',
        name: 'JS实现复制功能',
        type: "js",
        created: "2020-02-28",
        component: resolve => require(['@/views/js/jsCopy'], resolve)
      },
      //jquery案例
      {
        path: '/jq/domMoreEvents',
        name: 'jquery怎么给多个元素绑定同一个事件',
        type: "jq",
        created: "2018-03-26",
        component: resolve => require(['@/views/jq/domMoreEvents'], resolve)
      },
      {
        path: '/jq/trim',
        name: '$trim()不被IE8支持',
        type: "jq",
        created: "2018-03-26",
        component: resolve => require(['@/views/jq/trim'], resolve)
      },
      {
        path: '/jq/loadAndReady',
        name: 'document.ready()与window.load()的区别',
        type: "jq",
        created: "2018-04-28",
        component: resolve => require(['@/views/jq/loadAndReady'], resolve)
      },
      {
        path: '/jq/jqueryOnLive',
        name: 'jQuery给动态添加的元素绑定事件的方法',
        type: "jq",
        created: "2019-02-24",
        component: resolve => require(['@/views/jq/jqueryOnLive'], resolve)
      },
      {
        path: '/jq/trigger',
        name: 'trigger()方法自动触发事件',
        type: "jq",
        created: "2019-04-24",
        component: resolve => require(['@/views/jq/trigger'], resolve)
      },
      {
        path: '/jq/jqVersion',
        name: 'jquery的版本问题',
        type: "jq",
        created: "2019-12-02",
        component: resolve => require(['@/views/jq/jqVersion'], resolve)
      },
      //app
      {
        path: '/plugin/correctUseSwiper',
        name: 'jquery-mobile下正确地初始化swiper',
        type: "plugin",
        created: "2018-03-26",
        component: resolve => require(['@/views/plugin/correctUseSwiper'], resolve)
      },
      {
        path: '/app/keyboardEffectHigh',
        name: '软键盘对浏览器的窗口高度影响',
        type: "app",
        created: "2018-04-13",
        component: resolve => require(['@/views/app/keyboardEffectHigh'], resolve)
      },
      {
        path: '/app/keyboardEffectWindow',
        name: '软键盘是否触发window.resize()',
        type: "app",
        created: "2018-04-13",
        component: resolve => require(['@/views/app/keyboardEffectWindow'], resolve)
      },
      {
        path: '/app/forbidKeyboard',
        name: 'H5禁止手机虚拟键盘弹出',
        type: "app",
        created: "2018-04-15",
        component: resolve => require(['@/views/app/forbidKeyboard'], resolve)
      },
      {
        path: '/app/judgeKeyboardShow',
        name: 'js判断手机端是否弹出软键盘',
        type: "app",
        created: "2018-04-15",
        component: resolve => require(['@/views/app/judgeKeyboardShow'], resolve)
      },
      {
        path: '/app/keyboardCover',
        name: '软键盘遮挡问题',
        type: "app",
        created: "2018-04-15",
        component: resolve => require(['@/views/app/keyboardCover'], resolve)
      },
      {
        path: '/app/KeyboardCode',
        name: '移动端监听软键盘按键事件',
        type: "app",
        created: "2018-04-16",
        component: resolve => require(['@/views/app/KeyboardCode'], resolve)
      },
      {
        path: '/app/historyGoError',
        name: 'history.go(-1)，history.back(-1)等返回事件的探究',
        type: "app",
        created: "2018-04-16",
        component: resolve => require(['@/views/app/historyGoError'], resolve)
      },
      {
        path: '/app/keyboardAutoAlert',
        name: '进入页面自动聚焦输入框，并弹出软键盘',
        type: "app",
        created: "2018-04-16",
        component: resolve => require(['@/views/app/keyboardAutoAlert'], resolve)
      },
      {
        path: '/app/forbidCopy',
        name: 'h5页面不可复制文字',
        type: "app",
        created: "2018-04-16",
        component: resolve => require(['@/views/app/forbidCopy'], resolve)
      },
      {
        path: '/app/returnReload',
        name: 'h5 ios/android 后退刷新',
        type: "app",
        created: "2018-04-19",
        component: resolve => require(['@/views/app/returnReload'], resolve)
      },
      {
        path: '/app/pageHidePageShow',
        name: '移动端中pagehide、pageshow的应用',
        type: "app",
        created: "2018-04-19",
        component: resolve => require(['@/views/app/pageHidePageShow'], resolve)
      },
      {
        path: '/app/scrollTop',
        name: 'scrollTop()在Android下跟IOS下的区别',
        type: "app",
        created: "2018-04-19",
        component: resolve => require(['@/views/app/scrollTop'], resolve)
      },
      {
        path: '/app/moveEffectClick',
        name: '滚动触发touchmove时,影响touchend点击事件',
        type: "app",
        created: "2018-04-19",
        component: resolve => require(['@/views/app/moveEffectClick'], resolve)
      },
      {
        path: '/app/placeholderColor',
        name: 'h5 input placeholder 颜色修改',
        type: "app",
        created: "2018-04-19",
        component: resolve => require(['@/views/app/placeholderColor'], resolve)
      },
      //{
      //  path: '/app/placeholderColor',
      //  name: '移动端input输入placeholder垂直不居中',
      //  type:"app",
      //  created:"2018-04-19",
      //  component: resolve =>require(['@/views/app/placeholderColor'],resolve)
      //},
      {
        path: '/app/coverShowNoscroll',
        name: '弹出层出现时禁止body滚动',
        type: "app",
        created: "2018-04-27",
        component: resolve => require(['@/views/app/coverShowNoscroll'], resolve)
      },
      {
        path: '/app/h5packApp',
        name: 'h5项目封装成app的原理',
        type: "app",
        created: "2018-05-04",
        component: resolve => require(['@/views/app/h5packApp'], resolve)
      },
      {
        path: '/app/h5SwiperLeftToRight',
        name: 'h5项实现左右滑屏切换页面',
        type: "app",
        created: "2018-05-04",
        component: resolve => require(['@/views/app/h5SwiperLeftToRight'], resolve)
      },
      //插件参数记录
      {
        path: '/plugin/echarts-tooltip',
        name: 'Echarts中tooltip超出外层div显示不全问题',
        type: "plugin",
        created: "2018-03-26",
        component: resolve => require(['@/views/plugin/echarts-tooltip'], resolve)
      },
      {
        path: '/plugin/momentJs',
        name: 'moment.js 格式化时间',
        type: "plugin",
        created: "2018-03-26",
        component: resolve => require(['@/views/plugin/momentJs'], resolve)
      },
      {
        path: '/plugin/colresizable',
        name: 'colResizable.js 调整table表格的列宽',
        type: "plugin",
        created: "2018-03-29",
        component: resolve => require(['@/views/plugin/colresizable'], resolve)
      },
      {
        path: '/plugin/mobileSelect',
        name: 'mobileSelect.js 手机移动端选择组件',
        type: "plugin",
        created: "2018-03-29",
        component: resolve => require(['@/views/plugin/mobileSelect'], resolve)
      },
      {
        path: '/plugin/mock',
        name: 'mock.js 模拟数据，实现前后端分离开发',
        type: "plugin",
        created: "2018-04-09",
        component: resolve => require(['@/views/plugin/mock'], resolve)
      },
      {
        path: '/plugin/tablefixed',
        name: 'table表头固定',
        type: "plugin",
        created: "2018-05-19",
        component: resolve => require(['@/views/plugin/tablefixed'], resolve)
      },
      {
        path: '/plugin/better-scroll',
        name: 'better-scroll 触屏滚动插件',
        type: "plugin",
        created: "2018-05-19",
        component: resolve => require(['@/views/plugin/better-scroll'], resolve)
      },
      {
        path: '/plugin/Lodash',
        name: 'Lodash JavaScript 实用工具库',
        type: "plugin",
        created: "2018-09-01",
        component: resolve => require(['@/views/plugin/Lodash'], resolve)
      },
      {
        path: '/plugin/fastmock',
        name: 'fastmock',
        type: "plugin",
        created: "2019-05-21",
        component: resolve => require(['@/views/plugin/fastmock'], resolve)
      },
      {
        path: '/plugin/qrcanvas',
        name: 'qrcanvas 生成二维码',
        type: "plugin",
        created: "2019-09-04",
        component: resolve => require(['@/views/plugin/qrcanvas'], resolve)
      },
      {
        path: '/plugin/dayjs',
        name: 'day.js一个轻量处理时间和日期的JavaScript 库',
        type: "plugin",
        created: "2020-04-05",
        component: resolve => require(['@/views/plugin/dayjs'], resolve)
      },
      {
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
        path: '/other/angularCliBuild',
        name: 'Angular Cli打包的事',
        type: "other",
        created: "2019-03-02",
        component: resolve => require(['@/views/other/angularCliBuild'], resolve)
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
        path: '/other/angular4to5',
        name: 'Angular4升级到5版本',
        type: "other",
        created: "2019-04-05",
        component: resolve => require(['@/views/other/angular4to5'], resolve)
      },
      {
        path: '/other/angular5to6',
        name: 'Angular5升级到6版本',
        type: "other",
        created: "2019-05-05",
        component: resolve => require(['@/views/other/angular5to6'], resolve)
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
        path: '/other/vue.config.js',
        name: 'vue-cli3 之vue.config.js配置',
        type: "other",
        created: "2020-03-21",
        component: resolve => require(['@/views/other/vueConfigJs'], resolve)
      },
      {
        path: '/other/reactIeError',
        name: 'react 17.0.1 项目再ie下运行报错',
        type: "other",
        created: "2020-12-20",
        component: resolve => require(['@/views/other/reactIeError'], resolve)
      },
      {
        path: '/other/reactVueAngularDiff',
        name: 'React、Vue、Angular的理解',
        type: "other",
        created: "2021-01-28",
        component: resolve => require(['@/views/other/reactVueAngularDiff'], resolve)
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
        path: '/other/avrFramework',
        name: 'angular、react、vue谁更适合大型项目应用？',
        type: "other",
        created: "2021-03-23",
        component: resolve => require(['@/views/other/avrFramework'], resolve)
      },
      {
        path: '/java/designMenuSql',
        name: '关于头部一级导航菜单sql表结构思路',
        type: "java",
        created: "2019-04-12",
        component: resolve => require(['@/views/java/designMenuSql'], resolve)
      },
      {
        path: '/java/designNoticeSql',
        name: '关于公告信息sql表结构思路',
        type: "java",
        created: "2019-04-12",
        component: resolve => require(['@/views/java/designNoticeSql'], resolve)
      },
      {
        path: '/java/intLength',
        name: 'mysql中int长度的意义',
        type: "java",
        created: "2019-04-15",
        component: resolve => require(['@/views/java/intLength'], resolve)
      },
      {
        path: '/java/serviceRequest',
        name: 'spring boot中服务直接调取的两种方式',
        type: "java",
        created: "2019-08-08",
        component: resolve => require(['@/views/java/serviceRequest'], resolve)
      },
      {
        path: '/java/JSONObject',
        name: 'JAVA  JSONObject项目中常见用法',
        type: "java",
        created: "2020-01-20",
        component: resolve => require(['@/views/java/JSONObject'], resolve)
      },
      {
        path: '/java/mavenCompilerPlugin',
        name: 'Maven插件 maven-compiler-plugin 讲解',
        type: "java",
        created: "2020-02-18",
        component: resolve => require(['@/views/java/mavenCompilerPlugin'], resolve)
      },
      {
        path: '/java/mavenCompilerPluginError',
        name: 'Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.2:compile',
        type: "java",
        created: "2020-02-21",
        component: resolve => require(['@/views/java/mavenCompilerPluginError'], resolve)
      },
      {
        path: '/java/getLocalIP',
        name: 'Java 通过接口请求获取访问者本地ip',
        type: "java",
        created: "2020-05-08",
        component: resolve => require(['@/views/java/getLocalIP'], resolve)
      },
      //工作笔记
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
        name: "Js",
        type: "web",
        img: require("../img/js-icon.png"),
        description: "js相关属性，功能介绍...",
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
      // {
      //   path: '/note/ps',
      //   name: "Ps",
      //   type: "web",
      //   img: require("../img/ps-icon.png"),
      //   description: "基于vue-cli搭建、参数配置...",
      //   created: "持续更新 最后版本 2018-03-26",
      //   component: resolve => require(['@/views/web/ps'], resolve)
      // },
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
      },
      {
        path: '/note/javaone',
        name: "JAVA入门简介",
        type: "crm",
        img: require("../img/java-icon.png"),
        description: "java初级入门笔记记录...",
        created: "持续更新 最后版本 2018-07-08",
        component: resolve => require(['@/views/crm/javaone'], resolve)
      },
      {
        path: '/note/java_oop',
        name: "JAVA面向对象",
        type: "crm",
        img: require("../img/java-icon.png"),
        description: "java实例、接口、抽象类",
        created: "持续更新 最后版本 2018-08-08",
        component: resolve => require(['@/views/crm/java_oop'], resolve)
      },
      {
        path: '/note/java_api',
        name: "JAVA API",
        type: "crm",
        img: require("../img/java-icon.png"),
        description: "java",
        created: "持续更新 最后版本 2018-09-08",
        component: resolve => require(['@/views/crm/java_api'], resolve)
      },
      {
        path: '/note/java_interview',
        name: "JAVA面试错题积累",
        type: "crm",
        img: require("../img/mistake-icon.png"),
        description: "java常见面试题记录...",
        created: "持续更新 最后版本 2018-04-08",
        component: resolve => require(['@/views/crm/java_interview'], resolve)
      },
      {
        path: '/note/mysql',
        name: "MySQL",
        type: "crm",
        img: require("../img/mysql-icon.png"),
        description: "mysql相关的安装,命令行...",
        created: "持续更新 最后版本 2019-04-08",
        component: resolve => require(['@/views/crm/mysql'], resolve)
      },
      {
        path: '/note/sqlPractice',
        name: "SQL练习积累",
        type: "crm",
        img: require("../img/mysql-icon.png"),
        description: "sql日常练习记录...",
        created: "持续更新 最后版本 2020-04-08",
        component: resolve => require(['@/views/crm/sqlPractice'], resolve)
      },
      {
        path: '/note/linux',
        name: "Linux",
        type: "crm",
        img: require("../img/linux-icon.png"),
        description: "linux相关的安装,命令行...",
        created: "持续更新 最后版本 2019-08-08",
        component: resolve => require(['@/views/crm/linux'], resolve)
      },
      {
        path: '/note/activeMq',
        name: "ActiveMQ",
        type: "crm",
        img: require("../img/activemq-icon.jpg"),
        description: "activeMq相关的安装,命令行...",
        created: "持续更新 最后版本 2020-02-25",
        component: resolve => require(['@/views/crm/activeMq'], resolve)
      },
      {
        path: '/note/docker',
        name: "Docker",
        type: "crm",
        img: require("../img/docker-icon.png"),
        description: "docker相关的安装,命令行...",
        created: "持续更新 最后版本 2020-03-28",
        component: resolve => require(['@/views/crm/docker'], resolve)
      }
    ]
  }
];


export default new Router({
  routes: routes,
  //mode: 'history',    //去掉一个#,防止刷新调到登录页
  hashbang: false,
  history: true,
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})


