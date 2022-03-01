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
          <h3>Spring Boot项目启动方式</h3>
          <pre>
spring-boot-starter-parent父依赖启动器的主要作用是进行版本统一管理
< parent>
    < groupId>org.springframework.boot< /groupId>
    < artifactId>spring-boot-starter-parent< /artifactId>
    < version>2.0.1.RELEASE< /version>
    < relativePath/>
< /parent>
spring-boot-starter-web 实现Web场景开发，而不需要额外导入Tomcat服务器以及其他Web依赖文件等
< dependency>
   < groupId>org.springframework.boot< /groupId>
   < artifactId>spring-boot-starter-web< /artifactId>
< /dependency>
集成spring-boot-starter-test
< dependency>
	< groupId>org.springframework.boot< /groupId>
	< artifactId>spring-boot-starter-test< /artifactId>
	< scope>test< /scope>
< /dependency>
@RunWith(SpringRunner.class)
@SpringBootTest
@Slf4j
public class MyTests {
    @Test
    public void test2() {
        log.info("test hello 2");
        TestCase.assertEquals(1, 1);
    }
}</pre>
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
          <h3>SpringBoot整合Mysql、Mybatis和JDBC的配置</h3>
          <pre>
首先注入依赖
MySQL和JBDC依赖
< dependency>
    // 整合jdbc模板框架
    < groupId>org.springframework.boot< /groupId>
    < artifactId>spring-boot-starter-jdbc< /artifactId>
< /dependency>
< dependency>
    // 整合mysql驱动类
    < groupId>mysql< /groupId>
    < artifactId>mysql-connector-java< /artifactId>
< /dependency>
< dependency>
    < groupId>org.mybatis.spring.boot< /groupId>
    < artifactId>mybatis-spring-boot-starter< /artifactId>
    < version>1.3.2< /version>
< /dependency>

然后配置application文件
spring:
 datasource:
   username: root
   password: 123456
   url: jdbc:mysql://localhost:3306/pestore?useUnicode=true&characterEncoding=utf-8&useSSL=true&serverTimezone=UTC
   driver-class-name: com.mysql.cj.jdbc.Driver
mybatis:
  mapper-locations: classpath:mapping/*Mapper.xml   #告诉mybatis去哪里扫描mapper

注意：配置文件和数据库连接的相对内容（url，username,password,classname)要相对应，而且要注意MySQL的版本与驱动之间的对应
关于mybatis配置扫描
1、java目录下的xml资源在项目打包时会被忽略掉，所以，如果xml放在包下，需要在pom.xml文件中再添加如下配置，避免打包时java目录下的XML文件被自动忽略掉：
< build>
    < resources>
        < resource>
            < directory>src/main/java< /directory>
            < includes>
                < include>**/*.xml< /include>
            < /includes>
        < /resource>
        < resource>
            < directory>src/main/resources< /directory>
        < /resource>
    < /resources>
< /build>
2、xml也可以直接放在resources目录下，这样就不用担心打包时被忽略了，但是放在resources目录下，又不能自动被扫描到，需要添加额外配置。例如我在resources目录下创建mapper目录用来放mapper文件
此时在application.properties中告诉mybatis去哪里扫描mapper：
mybatis.mapper-locations=classpath:mapper/*.xml
如此配置之后，mapper就可以正常使用了。注意第二种方式不需要在pom.xml文件中配置文件过滤
3、在application启动类中添加@MapperScan注解
@Mapper注解：
作用：在接口类上添加了@Mapper，在编译之后会生成相应的接口实现类
添加位置：接口类上面
@Mapper
public interface UserDAO {
   //代码
}
在在Springboot启动类中添加@MapperScan注解
@MapperScan
作用：指定要变成实现类的接口所在的包，然后包下面的所有接口在编译之后都会生成相应的实现类
@MapperScan("com.demo.mapper")：扫描指定包中的接口
@MapperScan("com.demo.*.mapper")：一个*代表任意字符串，但只代表一级包,比如可以扫到com.demo.aaa.mapper,不能扫到com.demo.aaa.bbb.mapper
@MapperScan("com.demo.**.mapper")：两个*代表任意个包,比如可以扫到com.demo.aaa.mapper,也可以扫到com.demo.aaa.bbb.mapper
@MapperScan({"com.kfit.demo","com.kfit.user"}使用@MapperScan注解多个包</pre>
          <h3>druid数据库连接池</h3>
          <pre>
Java程序很大一部分要操作数据库，为了提高性能操作数据库的时候，又不得不使用数据库连接池。
Druid 是阿里巴巴开源平台上一个数据库连接池实现，结合了 C3P0、DBCP 等 DB 池的优点，同时加入了日志监控。
Druid 可以很好的监控 DB 池连接和 SQL 的执行情况，天生就是针对监控而生的 DB 连接池。

// alibaba的druid数据库连接池
< dependency>
    < groupId>com.alibaba< /groupId>
    < artifactId>druid-spring-boot-starter< /artifactId>
    < version>1.1.9< /version>
< /dependency>
spring:
    datasource:
        name: mysql_test
        type: com.alibaba.druid.pool.DruidDataSource
        #druid相关配置
        druid:
          #监控统计拦截的filters
          filters: stat
          driver-class-name: com.mysql.jdbc.Driver
          #基本属性
          url: jdbc:mysql://localhost:3306/test?useUnicode=true&characterEncoding=UTF-8&allowMultiQueries=true
          username: root
          password: root
          #配置初始化大小/最小/最大
          initial-size: 1
          min-idle: 1
          max-active: 20
          #获取连接等待超时时间
          max-wait: 60000
          #间隔多久进行一次检测，检测需要关闭的空闲连接
          time-between-eviction-runs-millis: 60000
          #一个连接在池中最小生存的时间
          min-evictable-idle-time-millis: 300000
          validation-query: SELECT 'x'
          test-while-idle: true
          test-on-borrow: false
          test-on-return: false
          #打开PSCache，并指定每个连接上PSCache的大小。oracle设为true，mysql设为false。分库分表较多推荐设置为false
          pool-prepared-statements: false
          max-pool-prepared-statement-per-connection-size: 20</pre>
          <h3>SpringBoot热部署</h3>
          <pre>
devtools热部署
< dependency>
    < groupId>org.springframework.boot< /groupId>
    < artifactId>spring-boot-devtools< /artifactId>
    < optional>true< /optional>
    < scope>true< /scope>
< /dependency>
在application.yml中配置一下devtools
spring:
  devtools:
    restart:
      enabled: true  #设置开启热部署
      additional-paths: src/main/java #重启目录
      exclude: WEB-INF/**
  freemarker:
    cache: false    #页面不加载缓存，修改即时生效

下面是在idea中的配置 </pre>
          <img src="../../img/java/springboot01.png" height="250px" width="650px">
          <img src="../../img/java/springboot02.png" height="280px" width="650px">
          <pre>
注意
1、devtools可以实现页面热部署（即页面修改后会立即生效，这个可以直接在application.properties文件中配置spring.thymeleaf.cache=false来实现），
实现类文件热部署（类文件修改后不会立即生效），实现对属性文件的热部署。
即devtools会监听classpath下的文件变动，并且会立即重启应用（发生在保存时机），注意：因为其采用的虚拟机机制，该项重启是很快的
2、配置了true后在修改java文件后也就支持了热启动，不过这种方式是属于项目重启（速度比较快的项目重启），会清空session中的值，也就是如果有用户登陆的话，项目重启后需要重新登陆。
默认情况下，/META-INF/maven，/META-INF/resources，/resources，/static，/templates，/public这些文件夹下的文件修改不会使应用重启，但是会重新加载（devtools内嵌了一个LiveReload server，当资源发生改变时，浏览器刷新
          </pre>
          <h3>在项目中配置多套环境的配置方法</h3>
          <pre>
因为现在一个项目有好多环境，开发环境，测试环境，准生产环境，生产环境，每个环境的参数不同，所以我们就可以把每个环境的参数配置到yml文件中，这样在想用哪个环境的时候只需要在主配置文件中将用的配置文件写上就行如application.yml
在Spring Boot中多环境配置文件名需要满足application-{profile}.yml的格式，其中{profile}对应你的环境标识，比如：
application-dev.yml：开发环境
application-test.yml：测试环境
application-prod.yml：生产环境
至于哪个具体的配置文件会被加载，需要在application.yml文件中通过spring.profiles.active属性来设置，其值对应{profile}值</pre>
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
