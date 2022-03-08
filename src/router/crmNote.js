const crmNoteRouter = [ {
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
    img: require("../img/sqllx-icon.png"),
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
  },
  {
    path: '/note/springboot',
    name: "Spring Boot",
    type: "crm",
    img: require("../img/springboot-icon.png"),
    description: "SpringBoot笔记记录...",
    created: "持续更新 最后版本 2020-03-28",
    component: resolve => require(['@/views/crm/springboot'], resolve)
  },
  {
    path: '/note/MongoDB',
    name: "MongoDB",
    type: "crm",
    img: require("../img/mongodb-icon.png"),
    description: "MongoDB笔记记录...",
    created: "持续更新 最后版本 2021-10-02",
    component: resolve => require(['@/views/crm/mongodb'], resolve)
  },
  ];
export default crmNoteRouter;
