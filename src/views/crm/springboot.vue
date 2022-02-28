<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <ul class="catalogue">
            <li v-for="(items,index) in catalogue"><a @click="jump(index)">{{items.name}}</a></li>
          </ul>
          <h3>简述一下spring boot 和 spring cloud</h3>
          <pre>
先说一下SSM框架
SSM：Spring+SpringMVC+MyBatis常作为数据源较简单的web项目的框架
Spring：就像是整个项目中装配bean的大工厂，在配置文件中可以指定使用特定的参数去调用实体类的构造方法来实例化对象。也可以称之为项目中的粘合剂。
Spring的核心思想是IoC（控制反转），即不再需要程序员去显式地`new`一个对象，而是让Spring框架帮你来完成这一切。
SpringMVC：在项目中拦截用户请求，它的核心Servlet即DispatcherServlet承担中介或是前台这样的职责，将用户请求通过HandlerMapping去匹配Controller，Controller就是具体对应请求所执行的操作。SpringMVC相当于SSH框架中struts。
mybatis：是对jdbc的封装，它让数据库底层操作变的透明。mybatis的操作都是围绕一个sqlSessionFactory实例展开的。mybatis通过配置文件关联到各实体类的Mapper文件，Mapper文件中配置了每个类对数据库所需进行的sql语句映射。在每次与数据库交互时，通过sqlSessionFactory拿到一个sqlSession，再执行sql命令

SSM优缺
1）spring核心ioc、aop技术，ioc解耦，使得代码复用，可维护性大幅度提升，aop提供切面编程，同样的增强了生产力。
2）spring mvc对比struts2等mvc框架来说的，不说struts2爆出的那么多安全漏洞，而且是类拦截，所有Action变量共享，同时是filter入口的，而spring mvc是方法拦截，controller独享request response数据，采用的serlvet入口，与spring无缝对接。开发而言，spring mvc更加轻量和低入门。
3）mybatis嘛，看业务场景，主要是mybatis的sql可以由开发者去掌控和调优，相对hibernate等orm框架来说，更加直观。在业务场景比较复杂，sql好多联合关联的情况下，mybatis谁用谁知道。当然缺点就是对sql不熟悉的开发者就不太友好了

springboot 只是为了提高开发效率，是为了提升生产力的：
1、springboot一个应用是一个可执行jar（启动类main方法启动web应用），而不像传统的war，内嵌tomcat容器，可以jar形式启动一个服务，可以快速部署发布web服务，微服务最好不过了。
2、将原有的xml配置，简化为java配置
3、当然结构可能跟一般的ssm有一定区别，但其实主要是在资源文件

1、SpringBoot：是一个快速开发框架，通过用MAVEN依赖的继承方式，帮助我们快速整合第三方常用框架，完全采用注解化（使用注解方式启动SpringMVC），简化XML配置，内置HTTP服务器（Tomcat，Jetty），最终以Java应用程序进行执行。
2、SpringCloud： 是一套目前完整的微服务框架，它是是一系列框架的有序集合。它只是将目前各家公司开发的比较成熟、经得起实际考验的服务框架组合起来，通过SpringBoot风格进行再封装屏蔽掉了复杂的配置和实现原理，最终给开发者留出了一套简单易懂、易部署和易维护的分布式系统开发工具包。它利用Spring Boot的开发便利性巧妙地简化了分布式系统基础设施的开发，如服务发现注册、配置中心、消息总线、负载均衡、断路器、数据监控等，都可以用SpringBoot的开发风格做到一键启动和部署。
二、SpringBoot和SpringCloud的关系与区别
1、SpringBoot只是一个快速开发框架，使用注解简化了xml配置，内置了Servlet容器，以Java应用程序进行执行。
2、SpringCloud是一系列框架的集合，可以包含SpringBoot。
三、SpringBoot是微服务框架吗？
1、SpringBoot只是一个快速开发框架，算不上微服务框架。
2、SpringCloud+Spring Boot 实现微服务开发。具体的来说是，SpringCloud具备微服务开发的核心技术：RPC远程调用技术；SpringBoot的web组件默认集成了SpringMVC，可以实现HTTP+JSON的轻量级传输，编写微服务接口，所以SpringCloud依赖SpringBoot框架实现微服务开发。</pre>
          <h3>Spring Boot项目启动方式</h3>
          <pre>
方式一
如果是单独某一个类的启动可以在当前类中配置@EnableAutoConfiguration 和 @ComponentScan('com.example.XXX')
@EnableAutoConfiguration：启用 SpringBoot 的自动配置机制
@ComponentScan： 扫描被@Component (@Service,@Controller)注解的 bean，注解默认会扫描该类所在的包下所有的类
方式二
启动类上添加@SpringBootApplication注解，它等同于 @EnableAutoConfiguration 和 @ComponentScan 的组合，它会自动扫描同一目录下面所有的包中的内容</pre>
          <h3>@RestController注解</h3>
          <pre>
@RestController和@Controller之间区别
如果在类上加上@RestController，该类中所有的SpringMVCUrl接口映射都是返回json格式，类似加上@ResponseBody注解
@RestController是SpringMVC提供，而不思SpringBoot提供
Rest微服务接口开发中Rest风格，数据传输格式json格式，http协议
@Controller控制层注解SpringMVC接口映射，默认情况下返回页面跳转，如果要返回json格式加上@ResponseBody注解</pre>
          <h3>SpringBoot静态资源目录</h3>
          <pre>
SpringBoot可以JAR/WAR的形式启动运行，有时候静态资源的访问是必不可少的，比如：image、js、css 等资源的访问
SpringBoot提供了几种默认的资源路径：
classpath:/META-INF/resources/
classpath:/resources/
classpath:/static/
classpath:/public/
springboot访问静态资源，默认有两个默认目录：
一个是 src/main/resource目录（上面将的就是这种情况）
一个是 ServletContext 根目录下( src/main/webapp )
一般来说 src/main/java 里面放Java代码，resource 里面放 配置文件、xml， webapp里面放页面、js之类的。
一般创建的maven项目里面都没有 webapp 文件夹 </pre>
          <h3>SpringBoot集成Thymeleaf环境配置</h3>
          <pre>
前后端分离的模式下用不着，了解一下就行了
thymeleaf是一个流行的模板引擎，该模板引擎采用java语言开发。
模板引擎是一个技术名词，是跨领域跨平台的概念，在java语言体系下有模板引擎，在c#、PHP语言体系下也有模板引擎，甚至在JavaScript也会用到模板引擎技术。
java生态下的模板引擎有thymeleaf、freemarker、velocity、beetl（国产）等。
thymeleaf模板引擎既能用于web环境下，也能用于非web环境下，在非web环境下，它能直接显示模板上的静态数据，在web环境下，它能像jsp一样从后台接收数据并替换掉模板上的静态数据。
thymeleaf是基于html的，以html标签为载体，thymeleaf要寄托在html的标签下实现对数据的展示。
thymeleaf的官方网站：http://www.thymeleaf.org
springboot集成了thymeleaf模板技术，并且springboot官方也推荐使用thymeleaf来替代jsp技术。thymeleaf是另外一种模板技术，它本身并不属于springboot，springboot只是很好地集成了这种模板技术，作为前端页面的数据展示
springboot使用thymeleaf作为视图展示时，约定将模板文件放置在src/main/resources/templates目录下，静态资源放在src/main/resources/static目录下
springboot使用thymeleaf作为视图展示时，约定将模板文件放置在src/main/resources/templates目录下，静态资源放在src/main/resources/static目录下
依赖
< dependency>
    < groupId>org.springframework.boot< /groupId>
    < artifactId>spring-boot-starter-thymeleaf< /artifactId>
< /dependency>
application.yml
spring:
  thymeleaf:
    cache: false  # 是否开启缓存，开发模式下为false避免改了模板还要重启服务
    prefix: classpath:/templates/  # 指定模板所在目录
    suffix: .html   # 文件后缀
    encoding: UTF-8
    content-type: text/html
    mode: HTML5
thymeleaf有5种表达式：　　
${}: 标准变量表达式
*{}: 选择变量表达式
#{}: 消息(i18n)表达式
@{}: 链接(URL)表达式
~{}: 片段表达式</pre>
          <h3>SpringBoot集成Thymeleaf环境配置</h3>
          <pre>

          </pre>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: '',
    data() {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name,
        catalogue: []
      }
    },
    mounted() {
      this.$nextTick(function () {
        this.createCatalogue();
      })
    },
    computed: {},
    methods: {
      jump(index) {
//        let jump = document.getElementsByTagName('h3');
//       // 获取需要滚动的距离
//        let total = jump[index].offsetTop;
//        // Chrome
//        document.body.scrollTop = total;
//        // Firefox
//        document.documentElement.scrollTop = total;
//       // Safari
//        window.pageYOffset = total
//        https://www.cnblogs.com/wisewrong/p/6495726.html  参考网站
        let jump = document.getElementsByTagName('h3');
        let total = jump[index].offsetTop;  // 获取目标位置滚动的距离
        let distance = document.documentElement.scrollTop || document.body.scrollTop; //获取当前滚动轴的位置
        // 平滑滚动，时长500ms，每10ms一跳，共50跳
        let step = total / 50;
        if (total > distance) {
          smoothDown()
        } else {
          let newTotal = distance - total;  //防止total，let step=total/50太小，移动缓慢
          step = newTotal / 50;
          smoothUp()
        }

        function smoothDown() {
          if (total > distance) {
            distance += step;
            document.body.scrollTop = distance;
            document.documentElement.scrollTop = distance;
            setTimeout(smoothDown, 10)
          } else {
            document.body.scrollTop = total;
            document.documentElement.scrollTop = total
          }
        }

        function smoothUp() {
          if (total < distance) {
            distance -= step;
            document.body.scrollTop = distance;
            document.documentElement.scrollTop = distance;
            setTimeout(smoothUp, 10)
          } else {
            document.body.scrollTop = total;
            document.documentElement.scrollTop = total
          }
        }
      },
      //创建目录函数
      createCatalogue() {
        let object = document.getElementsByTagName('h3');
        var flag = [];
        for (var i = 0; i < object.length; i++) {
          object[i].innerHTML = ((i + 1) + ". " + object[i].innerHTML);
          flag.push({name: object[i].innerHTML})
        }
        this.catalogue = flag;
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
