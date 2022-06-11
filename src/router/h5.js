const h5Router = [  //H5 案例
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
  {
    path: '/h5/h5Drag',
    name: 'H5组件拖拽',
    type: "h5",
    created: "2020-03-11",
    component: resolve => require(['@/views/h5/h5Drag'], resolve)
  }
];
export default h5Router;
