const javaRouter = [    //JAVA 类
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
  }];
export default javaRouter;
