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
    path: '/java/entityVoDto',
    name: ' 实体类（ENTITY，VO，DTO）理解',
    type: "java",
    created: "2020-03-01",
    component: resolve => require(['@/views/java/entityVoDto'], resolve)
  },
  {
    path: '/java/postJson',
    name: ' Java JSON 接收 post 传参， 实体类接收和 JSON接收',
    type: "java",
    created: "2020-03-01",
    component: resolve => require(['@/views/java/postJson'], resolve)
  },
  {
    path: '/java/getLocalIP',
    name: 'Java 通过接口请求获取访问者本地ip',
    type: "java",
    created: "2020-05-08",
    component: resolve => require(['@/views/java/getLocalIP'], resolve)
  },
  {
    path: '/java/javaEquals',
    name: 'java中equals以及==的用法',
    type: "java",
    created: "2020-06-18",
    component: resolve => require(['@/views/java/javaEquals'], resolve)
  },
  {
    path: '/java/strSBuffeSBuilder',
    name: 'java中String、StringBuffer和StringBuilder的区别',
    type: "java",
    created: "2020-06-18",
    component: resolve => require(['@/views/java/strSBuffeSBuilder'], resolve)
  },
  {
    path: '/java/mapReducce',
    name: 'MapReduce介绍',
    type: "java",
    created: "2021-01-08",
    component: resolve => require(['@/views/java/mapReducce'], resolve)
  },
  {
    path: '/java/learnJDBC',
    name: 'JDBC与Druid简单介绍',
    type: "java",
    created: "2021-01-16",
    component: resolve => require(['@/views/java/learnJDBC'], resolve)
  },
  {
    path: '/java/macLocalHost',
    name: 'mac电脑连接oracle报错ora-24454，客户主机名未设置',
    type: "java",
    created: "2022-03-21",
    component: resolve => require(['@/views/java/macLocalHost'], resolve)
  },
  {
    path: '/java/fastjson',
    name: 'fastjson使用教程',
    type: "java",
    created: "2022-04-03",
    component: resolve => require(['@/views/java/fastjson'], resolve)
  },
  {
    path: '/java/resultmapAndResulttype',
    name: 'MyBatis 之 resultmap和resulttype区别和应用',
    type: "java",
    created: "2022-04-11",
    component: resolve => require(['@/views/java/resultmapAndResulttype'], resolve)
  },
  {
    path: '/java/myBatisParameterType',
    name: 'MyBatis 之 parameterType',
    type: "java",
    created: "2022-04-11",
    component: resolve => require(['@/views/java/myBatisParameterType'], resolve)
  },
  {
    path: '/java/myBatisLike',
    name: 'Mybatis中 Like 的三种使用方式',
    type: "java",
    created: "2022-04-11",
    component: resolve => require(['@/views/java/myBatisLike'], resolve)
  },
  {
    path: '/java/mapperAndMapperScan',
    name: 'Mybatis中Mapper和MapperScan注解',
    type: "java",
    created: "2022-04-25",
    component: resolve => require(['@/views/java/mapperAndMapperScan'], resolve)
  },
  {
    path: '/java/sqlSFAndST',
    name: 'MyBatis之 SqlSession 、SqlSessionFactory 、SqlSessionTemplate、 SqlSessionManager',
    type: "java",
    created: "2022-04-25",
    component: resolve => require(['@/views/java/sqlSFAndST'], resolve)
  },
];
export default javaRouter;
