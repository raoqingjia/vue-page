const jsRouter = [//js案例
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
    created: "2019-07-12",
    component: resolve => require(['@/views/js/asyncWait'], resolve)
  },
  {
    path: '/js/learnPromise',
    name: '理解Promise',
    type: "js",
    created: "2019-07-12",
    component: resolve => require(['@/views/js/learnPromise'], resolve)
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
    path: '/js/fileType',
    name: 'File类型',
    type: "js",
    created: "2019-12-02",
    component: resolve => require(['@/views/js/fileType'], resolve)
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
    path: '/js/blobTurnFileTurnBase64',
    name: 'blob 转 base64，base64 转 blob，blob转化为file，base64转为file，url 转 base64',
    type: "js",
    created: "2019-12-03",
    component: resolve => require(['@/views/js/blobTurnFileTurnBase64'], resolve)
  },
  {
    path: '/js/blobType',
    name: 'Blob类型',
    type: "js",
    created: "2019-12-03",
    component: resolve => require(['@/views/js/blobType'], resolve)
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
    path: '/js/callAndApply',
    name: 'js中call()和apply()方法',
    type: "js",
    created: "2020-02-15",
    component: resolve => require(['@/views/js/callAndApply'], resolve)
  },
  {
    path: '/js/instancesAndObjects',
    name: 'js中实例与对象的区别',
    type: "js",
    created: "2020-03-11",
    component: resolve => require(['@/views/js/instancesAndObjects'], resolve)
  },
  {
    path: '/js/jsCopy',
    name: 'JS实现复制功能',
    type: "js",
    created: "2020-03-28",
    component: resolve => require(['@/views/js/jsCopy'], resolve)
  },
  {
    path: '/js/learnClosure',
    name: '什么是闭包',
    type: "js",
    created: "2020-04-05",
    component: resolve => require(['@/views/js/learnClosure'], resolve)
  },
  {
    path: '/js/macroTaskMicroTask',
    name: '宏任务和微任务',
    type: "js",
    created: "2020-04-14",
    component: resolve => require(['@/views/js/macroTaskMicroTask'], resolve)
  },
  {
    path: '/js/eventLoop',
    name: '什么是 Event Loop',
    type: "js",
    created: "2020-04-16",
    component: resolve => require(['@/views/js/eventLoop'], resolve)
  },
  {
    path: '/js/newObjectWay',
    name: 'JavaScript创建对象的多种方式',
    type: "js",
    created: "2021-05-12",
    component: resolve => require(['@/views/js/newObjectWay'], resolve)
  },
  {
    path: '/js/newObject',
    name: 'new Object() 和 Object.create()',
    type: "js",
    created: "2021-07-22",
    component: resolve => require(['@/views/js/newObject'], resolve)
  },
  {
    path: '/js/constructor',
    name: 'JS：构造函数总结',
    type: "js",
    created: "2021-07-22",
    component: resolve => require(['@/views/js/constructor'], resolve)
  },
  {
    path: '/js/prototype',
    name: 'JavaScript prototype原型对象',
    type: "js",
    created: "2021-07-24",
    component: resolve => require(['@/views/js/prototype'], resolve)
  },
  {
    path: '/js/prototypeConstructor',
    name: 'JS中的prototype、__proto__与constructor',
    type: "js",
    created: "2021-07-24",
    component: resolve => require(['@/views/js/prototypeConstructor'], resolve)
  },
  {
    path: '/js/newObjectProcess',
    name: 'Js中new 一个对象的过程',
    type: "js",
    created: "2021-07-27",
    component: resolve => require(['@/views/js/newObjectProcess'], resolve)
  },
  {
    path: '/js/cookiejs',
    name: '实现操作cookie的常见方法总结',
    type: "js",
    created: "2021-08-12",
    component: resolve => require(['@/views/js/cookiejs'], resolve)
  },
  {
    path: '/js/leftPlusRightPlus',
    name: 'JS 中 ++i 和i++的区别',
    type: "js",
    created: "2021-08-12",
    component: resolve => require(['@/views/js/cookiejs'], resolve)
  },
  {
    path: '/js/eS6Tips',
    name: '5个有助于开发的ES6小技能',
    type: "js",
    created: "2022-05-05",
    component: resolve => require(['@/views/js/eS6Tips'], resolve)
  },
  {
    path: '/js/ieRefererLoss',
    name: 'IE中JS跳转丢失referer的问题',
    type: "js",
    created: "2022-05-16",
    component: resolve => require(['@/views/js/ieRefererLoss'], resolve)
  },
  {
    path: '/js/jsSleep',
    name: 'Js中使程序暂时中断睡眠的sleep方法',
    type: "js",
    created: "2022-06-22",
    component: resolve => require(['@/views/js/jsSleep'], resolve)
  }
  ];
export default jsRouter;
