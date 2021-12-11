const queryRouter = [  //jquery案例
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
  },];
export default queryRouter;
