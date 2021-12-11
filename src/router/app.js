const appRouter = [
  //app
  {
    path: '/plugin/correctUseSwiper',
    name: 'jquery-mobile下正确地初始化swiper',
    type: "app",
    created: "2018-03-26",
    component: resolve => require(['@/views/app/correctUseSwiper'], resolve)
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
  }];
export default appRouter;
