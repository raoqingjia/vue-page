const cssRouter = [ //css案例
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
  {
    path: '/css/lineHeight',
    name: '行高line-height属',
    type: "css",
    created: "2018-11-01",
    component: resolve => require(['@/views/css/lineHeight'], resolve)
  },
  {
    path: '/css/flexDirection',
    name: 'Flex布局的属性解析',
    type: "css",
    created: "2019-01-08",
    component: resolve => require(['@/views/css/flexDirection'], resolve)
  },
  {
    path: '/css/cssVar',
    name: 'CSS var() 函数',
    type: "css",
    created: "2019-01-17",
    component: resolve => require(['@/views/css/cssVar'], resolve)
  },
  {
    path: '/css/aKeyChangeSkin',
    name: 'CSS实现皮肤切换',
    type: "css",
    created: "2019-02-23",
    component: resolve => require(['@/views/css/aKeyChangeSkin'], resolve)
  },
  {
    path: '/css/transformScale',
    name: '用transform:scale()缩放',
    type: "css",
    created: "2019-02-23",
    component: resolve => require(['@/views/css/transformScale'], resolve)
  },
  {
    path: '/css/marginFailure',
    name: 'css中margin-top或者margin-bottom失效',
    type: "css",
    created: "2019-04-12",
    component: resolve => require(['@/views/css/marginFailure'], resolve)
  }
  ];
export default cssRouter;
