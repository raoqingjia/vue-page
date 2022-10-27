<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <ul class="catalogue clearfix">
            <li class="catalog">目录</li>
            <li v-for="(items,index) in catalogue"  :key="index" ><a @click="jump(index)">{{items.name}}</a></li>
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
          <h3>Spring Boot 集成篇</h3>
          <pre>
starter 主要分为两种：一种是官方的，一种是三方的。官方与三方的命名方式上不太一样，官方的命名以 spring-boot 开头，而三方的命名以自定义的 xxx 名称开头。
例如，官方的命名：spring-boot-xxx-xxx.jar，而三方的命名：xxx-spring-boot-starter.jar。</pre>
          <h3>Spring Boot项目启动方式</h3>
          <pre>
方式一
如果是单独某一个类的启动可以在当前类中配置@EnableAutoConfiguration 和 @ComponentScan('com.example.XXX')
@EnableAutoConfiguration：启用 SpringBoot 的自动配置机制
@ComponentScan： 扫描被@Component (@Service,@Controller)注解的 bean，注解默认会扫描该类所在的包下所有的类
方式二
启动类上添加@SpringBootApplication注解，它等同于 @EnableAutoConfiguration 和 @ComponentScan 的组合，它会自动扫描同一目录下面所有的包中的内容
所在包不是Spring Boot启动类所在的包或者子包下就需要指定@ComponentScan，因为Spring Boot默认只扫描和启动类同一级或者下一级包。

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
          <h3>application.yml和 bootstrap.yml区别</h3>
          <pre>
bootstrap.yml（bootstrap.properties）用来程序引导时执行，应用于更加早期配置信息读取，如可以使用来配置application.yml中使用到参数等
application.yml（application.properties) 应用程序特有配置信息，可以用来配置后续各个模块中需使用的公共参数等。
加载顺序
bootstrap.yml > application.yml > application-dev(prod).yml

原理：bootstrap.yml 用于应用程序上下文的引导阶段。
bootstrap.yml 由父Spring ApplicationContext加载。
bootstrap.yml 可以理解成系统级别的一些参数配置，这些参数一般是不会变动的。
application.yml 可以用来定义应用级别的，如果搭配 spring-cloud-config 使用 application.yml 里面定义的文件可以实现动态替换。
使用Spring Cloud Config Server时，应在 bootstrap.yml 中指定
spring.application.name
spring.cloud.config.server.git.uri

例如
端口、访问路径、注册中心这种千年不动的东西都放到 bootStrap.yml
数据源、redis、kafka之类的都放到  application.yml

在springcloud工程中，资源文件夹中有 application.yml 、 application-dev(prod、test).yml时，,工程启动时会启动一个端口为8080的tomcat，即使在application.yml、application-dev.yml中指定了端口，工程也不会加载，推测资源文件加载失败
当资源文件中有bootstrap.yml、application.yml 、 application-dev(prod、test).yml文件时，并且三个文件都设置三个不同的tomcat的端口，此时application-dev会覆盖掉bootstrap.yml中的端口
当只有bootstrap.yml application.yml时，application.yml中的端口则不会覆盖掉bootstrap.yml中的端口</pre>
          <h3>修改Servlet相关配置</h3>
          <pre>
server:
  port: 8081
  servlet:
    context-path: /springboot
  tomcat:
    uri-encoding: utf-8
spring:
  mvc:
    servlet:
      path: /*    #SpringBoot自动为我们配置DispatcherServlet，默认拦截"/"(所有请求，包括静态资源，但不拦截jsp请求，若要拦截Jsp请求，修改配置为“/*”即可)
          </pre>
          <h3>springboot 集成eureka</h3>
          <pre>
Eureka是Netflix开源的一个RESTful服务，主要用于服务的注册发现。
Eureka由两个组件组成：Eureka服务器和Eureka客户端。Eureka服务器用作服务注册服务器。
Eureka客户端是一个java客户端，用来简化与服务器的交互、作为轮询负载均衡器，并提供服务的故障切换支持。
Netflix在其生产环境中使用的是另外的客户端，它提供基于流量、资源利用率以及出错状态的加权负载均衡。

先创建一个Eureka-Server服务注册中心
            <!-- 引入的Eureka-server -->
< dependency>
  < groupId>org.springframework.cloud< /groupId>
  < artifactId>spring-cloud-starter-netflix-eureka-server< /artifactId>
< /dependency>
启动它Eureka项目只需要在启动类上加@EnableEurekaServer
还需要配置application.yml
Eureka是一个高可用的组件，每一个实例注册之后需要向注册中心发送心跳包，在默认情况下erureka server也是一个eureka client ,必须要指定一个 server。
eureka server的配置文件applcation.yml：
server:
  port: 8081 #服务注册中心端口号
eureka:
  instance:
    hostname: 127.0.0.1 #服务注册中心IP地址
  client:
    registerWithEureka: false #是否向服务注册中心注册自己
    fetchRegistry: false #是否检索服务
    serviceUrl: #服务注册中心的配置内容，指定服务注册中心的位置
      defaultZone: http://${eureka.instance.hostname}:${server.port}/eureka/

创建一个Eureka-Client客户端也就是服务提供者
客户端在向注册中心它会提供一些元数据，例如主机和端口，URL，主页等。Eureka server 从每个client实例接收心跳消息。 如果心跳超时，则通常将该实例从注册server中删除。
创建客户端和服务端差不多，只是启动注解有点不一样，还有yml配置文件
< dependency>
   < groupId>org.springframework.cloud< /groupId>
   < artifactId>spring-cloud-starter-netflix-eureka-client< /artifactId>
< /dependency>
怎么证明它是Client呢,在Spring-boot的启动类上通过注解@EnableEurekaClient 表明自己是一个eurekaclient

配置文件application-one.yml
server:
  port: 8082  #服务端口号 多个实例端口号不一致
spring:
  application:
    name: service-provider #服务名称--调用的时候根据名称来调用该服务的方法
 eureka:
  instance:
    instance-id:  127.0.0.1:8082    # 本地程序运行ip端口
    appname: ${spring.application.name}
  client:
    serviceUrl:
      defaultZone: http://127.0.0.1:8081/eureka/   # 注册中心的注册地址

Eureka-Client多个实例
每个微服务都是一个Eureka-Client，我们把每个app（SpringBootApplication）都向注册中心注册一个服务。
有时候，某个服务的工作量比较大的时候，我们可以多注册几个同名称的微服务，从而让他们交替工作，减轻单个服务的压力
https://blog.csdn.net/qq_36381800/article/details/119536562 </pre>
          <h3>在项目中配置多套环境的配置方法</h3>
          <pre>
因为现在一个项目有好多环境，开发环境，测试环境，准生产环境，生产环境，每个环境的参数不同，所以我们就可以把每个环境的参数配置到yml文件中，这样在想用哪个环境的时候只需要在主配置文件中将用的配置文件写上就行如application.yml
在Spring Boot中多环境配置文件名需要满足application-{profile}.yml的格式，其中{profile}对应你的环境标识，比如：
application-dev.yml：开发环境
application-test.yml：测试环境
application-prod.yml：生产环境
至于哪个具体的配置文件会被加载，需要在application.yml文件中通过spring.profiles.active属性来设置，其值对应{profile}值
spring:
  profiles:
    active: dev
#日志
logging:
   config: classpath:logback-${spring.profiles.active}.xml

使用方法：
通过指定启动参数使用不同的profile
测试环境: java -jar my-spring-boot.jar --spring.profiles.active=test--server.port=8060
生产环境: java -jar my-spring-boot.jar --spring.profiles.active=prod</pre>
          <h3>.yml文件 Spring Cloud Config分布式配置文件的管理</h3>
          <pre>
一、对于Spring Cloud Config快速实现需要以下三个模块：
EurekaServer 注册中心（主要是为了对外发布服务管理）
ConfigServer 远程配置中心服务,从远程仓库读取文件的服务（对接远程仓库主要服务）
ConfigClient 自己项目所对外提供的微服务

< dependency>
    < groupId>org.springframework.cloud< /groupId>
    < artifactId>spring-cloud-config-server< /artifactId>
< /dependency></pre>
          <h3>SpringBoot整合日志</h3>
          <pre>
springboot本身就内置了日志功能,详细的搜整合SpringBoot整合logback，网上有好多教程
1. 配置输出格式 为 时间 - 消息 换行
logging:
 pattern:
   console: "%d - %msg%n"
2. 配置日志输出位置
logging:
 path: /Users/gujiachun/Downloads
运行后，我们可以看到Downloads下生成了一个文件spring.log这文件是spring生成

3. 配置日志输出文件 ，这样可以指定日志输出到哪个文件
logging:
 file: /Users/gujiachun/Downloads/test.log
我们可以看到在Downloads生成了test文件,path和file不能同时用

4. 配置日志 输出级别
日志一般主要看重的有5个级别，优先级如 DEBUG< INFO< WARN< ERROR< FATAL等，而springboot默认配置是INFO级别，所以我们测试代码中写了三行，在结果中我们只看到了info 和 error，因为debug优先级比info低，所以我们看不到。
那么我们配置一下格式 logging.level.包名或类名: 级别 即可， 举例如下logging:
pattern:
  console:"%d - %msg%n"
file: /Users/gujiachun/Downloads/test.log
  level:
   com.rainbow.goods.test: debug  #这里可以是包名也可以是类名

5.lobback-spring.xml 配置
logging:
   config: classpath:log/logback-spring.xml
我们先把application.yml的关于日志的注释掉，新建一个文件logback-spring.xml，为什么要取这个名字呢，Spring Boot官方推荐优先使用带有-spring的文件名作为你的日志配置（如使用logback-spring.xml，而不是logback.xml），如果我们想自定义名字，可以在 application.yml中通过logging.config=classpath:/xxx.xml等方式配置。

log4j按照日期分割
Log4j配置中有5个重要的概念：日志记录器（Logger）、根记录器（rootLogger）、类别（category）、输出地（Appender）以及日志格式化器（Layout）。其中，Logger负责记录日志；rootLogger是所有记录器的父亲，任何记录器都可继承rooLogger的配置；category可以设置类别下所有的Logger，类似于java中的包，效果与Logger名字等价；Appender负责输出到什么地方；Layout负责以什么格式输出、输出哪些附加信息（比如：时间、类名、方法名、所在行数等）。在log4j.properties配置中，log4j.logger后面配置的是Logger，log4j.appender后面配置的是Appender，rootLogger直接用log4j.rootLogger配置。

再说下说下log4j的几种log级别的等级：
日志记录器（Logger）的行为是分等级的。如下表所示：
分 为OFF、FATAL、ERROR、WARN、INFO、DEBUG、ALL或者您定义的级别，这些级别是从高到低的级别。Log4j建议只使用四个级别，优先级从高到低分别是 ERROR、WARN、INFO、DEBUG。通过在这里定义的级别，您可以控制到应用程序中相应级别的日志信息的开关。比如在这里定义了INFO级别， 则应用程序中所有DEBUG级别的日志信息将不被打印出来


          </pre>
          <h3>Spring AOP @Aspect用法</h3>
          <pre>
AOP为Aspect Oriented Programming的缩写，意为：面向切面编程，通过预编译方式和运行期动态代理实现程序功能的统一维护的一种技术。AOP是Spring框架中的一个重要内容，它通过对既有程序定义一个切入点，然后在其前后切入不同的执行内容，比如常见的有：打开数据库连接/关闭数据库连接、打开事务/关闭事务、记录日志等。基于AOP不会破坏原来程序逻辑，因此它可以很好的对业务逻辑的各个部分进行隔离，从而使得业务逻辑各部分之间的耦合度降低，提高程序的可重用性，同时提高了开发的效率

添加MAVEN依赖:
< dependency>
    < groupId>org.springframework.boot< /groupId>
    < artifactId>spring-boot-starter-aop< /artifactId>
< /dependency>

AOP核心概念
1、横切关注点
对哪些方法进行拦截，拦截后怎么处理，这些关注点称之为横切关注点
2、切面（aspect）
类是对物体特征的抽象，切面就是对横切关注点的抽象
3、连接点（joinpoint）
被拦截到的点，因为Spring只支持方法类型的连接点，所以在Spring中连接点指的就是被拦截到的方法，实际上连接点还可以是字段或者构造器
4、切入点（pointcut）
对连接点进行拦截的定义
5、通知（advice）
所谓通知指的就是指拦截到连接点之后要执行的代码，通知分为前置、后置、异常、最终、环绕通知五类
6、目标对象
代理的目标对象
7、织入（weave）
将切面应用到目标对象并导致代理对象创建的过程
8、引入（introduction）
在不修改代码的前提下，引入可以在运行期为类动态地添加一些方法或字段

1、@Component：因为作为切面类需要 Spring 管理起来，所以在初始化时就需要将这个类初始化加入 Spring 的管理；@Aspect放在类头上，把这个类作为一个切面。
2、 @Pointcut放在方法头上，定义一个可被别的方法引用的切入点表达式。
3、5种通知。
@Before，前置通知，放在方法头上。
@After，后置【finally】通知，放在方法头上。
@AfterReturning，后置【try】通知，放在方法头上，使用returning来引用方法返回值。
@AfterThrowing，后置【catch】通知，放在方法头上，使用throwing来引用抛出的异常。
@Around，环绕通知，放在方法头上，这个方法要决定真实的方法是否执行，而且必须有返回值。
注意：
@Aspect：意思是这个类为切面类
@Componet：因为作为切面类需要 Spring 管理起来，所以在初始化时就需要将这个类初始化加入 Spring 的管理；
@Befoe：切入点的逻辑(Advice)execution…:切入点语法
          </pre>
          <h3>AOP统一日志打印处理</h3>
          <pre>
Springboot + AOP 统一处理日志。然后系统日志持久化到文件保存起来，当程序方便发生问题的时候，能够快速、准确的定位到问题的所在。
AOP框架AspectJ，AspectJ是基于java开发的aop框架，自spring2.0以后，springaop引入对他支持
添加MAVEN依赖:
< dependency>
    < groupId>org.springframework.boot< /groupId>
    < artifactId>spring-boot-starter-aop< /artifactId>
< /dependency>
编写切面:
为什么要使用AOP打印日志,因为在方法中打印日志会大大增加方法的冗余,增加开发时间
采用切面统一打印的比较多,因为日志一般会记录在文件,有的还会记录在数据库,不是打印在控制台上就完事了
那我们做的项目来说吧,一般日志会分为三种,用户的登录日志,用户的操作日志,用户的浏览日志,都是分开存储的
项目代码
@Aspect
@Component
public class LogAspect {
    private static final Logger logger = LoggerFactory.getLogger(LogAspect.class);

    // 定义切点表达式：*，第一个返回值，第二个类名，第三个方法名
    @Pointcut("execution(public * com.springboot.demo.service.*.*(..))")
    public void webLog() {} // 使用一个返回值为void，方法体为空的方法来命名切入点

    // 在方法执行之前执行
    @Before("webLog()")
    public void doBefore(JoinPoint joinPoint) throws Throwable {
        // 接收到请求，记录请求内容
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpServletRequest request = attributes.getRequest();
        // 记录下请求内容
        logger.info("URL : " + request.getRequestURL().toString());
        logger.info("HTTP_METHOD : " + request.getMethod());
        logger.info("IP : " + request.getRemoteAddr());
        Enumeration< String> enu = request.getParameterNames();
        while (enu.hasMoreElements()) {
            String name = (String) enu.nextElement();
            logger.info("name:{},value:{}", name, request.getParameter(name));
        }
    }

    // 后置通知
    @AfterReturning(returning = "objects", pointcut = "webLog()")
    public void myAfterReturning(Object objects) {
      logger.info("-----------@AfterReturning 后置通知-----------");
      logger.info("后置通知：模拟记录日志...");
      logger.info("返回值 response={}", objects);
    }

    //异常通知
	@AfterThrowing(value="myPointCut()", throwing="e")
	public void myAfterThrowing(JoinPoint joinPoint,Throwable e) {
		logger.info("-----------@AfterThrowing 异常通知-----------");
		logger.info("异常通知：出错了"+ e);
		logger.info("异常通知：出错了getStackTrace={}", e.getStackTrace());
		logger.info("异常通知：出错了Throwable...具体如下", e);
	}

	//最终通知
	@After("myPointCut()")
	public void myAfter() {
		logger.info("-----------@After 最终通知-----------");
		logger.info("最终通知：模拟方法结束后的释放资源...");
	}
}
          </pre>
          <h3>全局异常监听</h3>
          <pre>
SpringBoot中有一个ControllerAdvice的注解，使用该注解表示开启了全局异常的捕获，我们只需在自定义一个方法使用ExceptionHandler注解然后定义捕获异常的类型即可对这些捕获的异常进行统一的处理
在abs这种分布式的项目组，单独的服务直接没开启这种全局异常捕获，毕竟是前后台联调，有些错误是要单独加上错误信息的
常用的状态码
SUCCESS("200", "成功!")
BODY_NOT_MATCH("400","请求的数据格式不符!")
SIGNATURE_NOT_MATCH("401","请求的数字签名不匹配!")
NOT_FOUND("404", "未找到该资源!")
INTERNAL_SERVER_ERROR("500", "服务器内部错误!")
SERVER_BUSY("503","服务器正忙，请稍后再试!")

例如
@controllerAdvice
public class GlobalExceptionHandler{
     @ExceptionHandler(RuntimeException.class)
     @ResponseBody
     public Map< String,Object> resultError(){
         Map< String,Object> result = new HashMap< String,Object>();
         result.put("errorCode":"500");
         result.put("errorMsg":"系统错误。。。");
         return result；
     }
}
返回结构就是{errorCode:"500",errorMsg:"系统错误。。。"}
下面是升级版，了解就行了
RestControllerAdvice
public class MyExceptionHandler {
    public static final String ERROR_VIEW = "error";
    @ExceptionHandler(value = Exception.class)
    public Object errorHandler(HttpServletRequest request, HttpServletResponse response, Exception e) throws Exception {
        e.printStackTrace();
        if (isAjax(request)) {
            return JsonResult.errorException(e.getMessage());
        } else {
            ModelAndView mav = new ModelAndView();
            mav.addObject("exception", e);
            mav.addObject("url", request.getRequestURL());
            mav.setViewName(ERROR_VIEW);
            return mav;
        }
    }

    // 判断是否是ajax请求
    public static boolean isAjax(HttpServletRequest httpRequest) {
        String xRequestedWith = httpRequest.getHeader("X-Requested-With");
        return (xRequestedWith != null && "XMLHttpRequest".equals(xRequestedWith));
    }
}

自义定全局异常处理除了可以处理数据格式之外，也可以处理页面的跳转，只需在新增的异常方法的返回处理上填写该跳转的路径并不使用ResponseBody 注解即可。如果是用的RestControllerAdvice注解，它会将数据自动转换成JSON格式，这种于Controller和RestController类似，所以我们在使用全局异常处理的之后可以进行灵活的选择处理
# 注意区分
1、在类上的注解
@ControllerAdvice
@RestControllerAdvice
2、在方法上的注解
@ExceptionHandler(value = Exception.class)
3、在统一返回异常的形式配置中
类上的注解为@RestControllerAdvice
方法中返回ModelAndView对象就是返回页面，返回一个其他对象就会转换为json串，这样就实现了对页面请求和ajax请求中的错误的统一处理。</pre>
          <h3>@RestController注解</h3>
          <pre>
@RestController和@Controller之间区别
如果在类上加上@RestController，该类中所有的SpringMVCUrl接口映射都是返回json格式，类似加上@ResponseBody注解
@RestController是SpringMVC提供，而不思SpringBoot提供
Rest微服务接口开发中Rest风格，数据传输格式json格式，http协议
@Controller控制层注解SpringMVC接口映射，默认情况下返回页面跳转，如果要返回json格式加上@ResponseBody注解</pre>
          <h3>@ConfigurationProperties 配置模块</h3>
          <pre>
在编写项目代码时，我们要求更灵活的配置，更好的模块化整合。在 Spring Boot 项目中，为满足以上要求，我们将大量的参数配置在 application.properties 或 application.yml 文件中，通过 @ConfigurationProperties 注解，我们可以方便的获取这些参数值
@ConfigurationProperties和@Value 2个注解。
@ConfigurationProperties注解支持属性文件和javabean的映射，而@Value支持spel表达式。
如果是多个属性映射，而且常常被复用，推荐使用@ConfigurationProperties，如果只读取单个属性则使用@Value要方便许多
@ConfigurationProperties的用法
1.可以搭配@bean使用，绑定三方属性
@ConfigurationProperties(prefix = "spring.datasource.druid")
@Bean(name = "writeDruidDataSource")
@Primary
public DataSource writeDruidDataSource() {
    return new DruidDataSource();
}
2.可以将属性转换成bean对象，这里如果不用@component修饰。则在容器无法获取，如果只使用@ConfigurationProperties需要结合@EnableConfigurationProperties(PropertisInject.class)将其注册到spring容器中
看下面的案例
假设我们正在搭建一个发送邮件的模块,在本地测试，我们不想该模块真的发送邮件，所以我们需要一个参数来「开关」 disable 这个功能。另外，我们希望为这些邮件配置一个默认的主题，当我们查看邮件收件箱，通过邮件主题可以快速判断出这是测试邮件
在 application.properties 文件中创建这些参数
myapp.mail.enabled=true
myapp.mail.default-subject=this is a test mail
我们可以使用 @Value 注解或着使用 Spring Environment bean 访问这些属性，是这种注入配置方式有时显得很笨重。我们将使用更安全的方式(@ConfigurationProperties )来获取这些属性
@Data
@component
@ConfigurationProperties(prefix="myapp.mail")
public class MailModuleProperties(){
     private Boolean enabled = Boolean.TRUE;
     private String defaultSubject;
}

@ConfigurationProperties 的基本用法非常简单:我们为每个要捕获的外部属性提供一个带有字段的类。请注意以下几点:
前缀定义了哪些外部属性将绑定到类的字段上
根据 Spring Boot 宽松的绑定规则，类的属性名称必须与外部属性的名称匹配
我们可以简单地用一个值初始化一个字段来定义一个默认值
类本身可以是包私有的
类的字段必须有公共 setter 方法
@ConfigurationProperties 和 @value 有着相同的功能,但是 @ConfigurationProperties的写法更为方便
@ConfigurationProperties 的 POJO类的命名比较严格,因为它必须和prefix的后缀名要一致, 不然值会绑定不上, 特殊的后缀名是“driver-class-name”这种带横杠的情况,在POJO里面的命名规则是 下划线转驼峰 就可以绑定成功，所以就是 “driverClassName”

关与 @EnableConfigurationProperties 注解
如果一个配置类只配置@ConfigurationProperties注解，而没有使用@Component，那么在IOC容器中是获取不到properties 配置文件转化的bean。说白了 @EnableConfigurationProperties 相当于把使用 @ConfigurationProperties 的类进行了一次注入</pre>
          <h3>@Value注解读取配置文件给静态变量赋值</h3>
          <pre>
在SpringBoot中，使用@Value()是不能直接给静态变量赋值的，虽然没有编译和运行上的报错，但调试时你会发现值都是空的，而要给静态变量赋值，都是新建一个类进行的，其中需要在类上加入@Component注解，可以使用set()方法

方法1
@Component
public class ParamConfig {
    @Value("${rocketmq.tag.name}")
    public String name;
    public static String pre;   // @Value()是不能直接给静态变量赋值的

    //":"是赋予默认值，当从配置文件中找不到“rocketmq.tag.prefix”时，会传赋予“xxx”
    @Value("${rocketmq.tag.prefix: xxx}")
    public void setPre(String pre) {
        ParamConfig.pre = pre;
    }
}
使用
 @Service
public class FaceViewDomianServiceImpl implements FaceViewDomianService {
	......
    private static String prefix = ParamConfig.pre;
	......
 }

方法2
@Service
public class FaceViewDomianServiceImpl implements FaceViewDomianService {
   ......
   private static String prefix = "";
    @Value("${rocketmq.tag.prefix}")
   public void setPrefix(String prefix) {
       FaceViewDomianServiceImpl.prefix = "FILE_" + prefix + "_";
   }
   ......
}</pre>
          <h3>配置文件占位符使用</h3>
          <pre>
SpringBoot占位符支持的有随机数和配置的值等等
${random.value}、${random.int}、${random.long}、${random.uuid}
${random.int(10)}、${random.int(1024,65536)}
写个例子实践一下
user.properties
user.userName= root(${user.address.tel})
user.isAdmin= true
user.regTime= 2019/11/01
user.isOnline= 1
user.maps.k1=${random.int}
user.maps.k2=v2
user.lists=${random.uuid},${random.value}
user.address.tel= 15899988899
user.address.name=上海浦东区

@Component//将组件添加到Spring容器
@Data
@PropertySource(value = "classpath:user.properties",encoding = "utf-8")
@ConfigurationProperties(prefix = "user")//属性进行映射
public class User {
    private String userName;
    private boolean isAdmin;
    private Date regTime;
    private Long isOnline;
    private Map< String,Object> maps;
    private List< Object> lists;
    private Address address;
}</pre>
          <h3>springboot之异步调用@Async</h3>
          <pre>
在Java应用中，绝大多数情况下都是通过同步的方式来实现交互处理的；但是在处理与第三方系统交互的时候，容易造成响应迟缓的情况，之前大部分都是使用多线程来完成此类任务，其实，在spring 3.x之后，就已经内置了@Async来完美解决这个问题,在现在的分布式中好多都用中间件的方式处理异步问题。
启动类上要添加 @EnableAsync 开启异步调用

@ComponentScan(basePackages = { "com.xwj.controller", "com.xwj.service" })
@EnableAsync //开启异步调用
@EnableAutoConfiguration
public class App {
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}
@RestController
public class IndexController {
    @Autowired
    private UserService userService;
    @RequestMapping("/async")
    public String async(){
        System.out.println("####IndexController####   1");
        userService.sendSms();
        System.out.println("####IndexController####   4");
        return "success";
    }
}
@Service
public class UserService {
    @Async
    public void sendSms(){
        System.out.println("####sendSms####   2");
        IntStream.range(0, 5).forEach(d -> {
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });
        System.out.println("####sendSms####   3");
    }
}
先注掉@EnableAsync和@Async两个注解，看下同步调用执行的效果。执行结果如下：

####IndexController####   1
####sendSms####   2
####sendSms####   3
####IndexController####   4
对于sendSms方法，我们并不关注它什么时候执行完，所以可以采用异步的方式去执行。放开@EnableAsync和@Async两个注解，执行结果如下：

####IndexController####   1
####IndexController####   4
####sendSms####   2
####sendSms####   3

使用了@Async的方法，会被当成是一个子线程，所有整个sendSms方法，会在主线程执行完了之后执行
同一个类中，一个方法调用另外一个有@Async的方法，注解是不会生效的</pre>
          <h3>基于@Scheduled注解 实现定时任务</h3>
          <pre>
使用SpringBoot创建定时任务非常简单，目前主要有以下三种创建方式：
一、基于注解(@Scheduled)
二、基于接口（SchedulingConfigurer） 前者相信大家都很熟悉，但是实际使用中我们往往想从数据库中读取指定时间来动态执行定时任务，这时候基于接口的定时任务就派上用场了。
三、基于注解设定多线程定时任务
不过分布式的一般多用xxl-job框架

使用SpringBoot基于注解来创建定时任务非常简单，只需几行代码便可完成。 代码如下：
复制代码
@Component
@Configuration       //1.主要用于标记配置类，兼备Component的效果。
@EnableScheduling   // 2.开启定时任务
public class SaticScheduleTask {
    //3.添加定时任务
    @Scheduled(cron = "0/5 * * * * ?")
    //或直接指定时间间隔，例如：5秒
    //@Scheduled(fixedRate=5000)
    private void configureTasks() {
        System.err.println("执行静态定时任务时间: " + LocalDateTime.now());
    }
}</pre>
          <h3>@Bean 和 @Component的区别</h3>
          <pre>
注解作用
@Component注解表明一个类会作为组件类，并告知Spring要为这个类创建bean。
@Bean 用于告诉方法，产生一个Bean对象，然后这个Bean对象交给Spring管理。产生这个Bean对象的方法Spring只会调用一次，随后这个Spring将会将这个Bean对象放在自己的IOC容器中。@Bean 需要在配置类中使用，即类上需要加上@Configuration注解
理解
@Component （@Controller @Service @Respository）作用于类上，只有在我们的SpringBoot应用程序启用了组件扫描并且包含了被注解的类时才有效。通过组件扫描，Spring将扫描整个类路径，并将所有@Component注释类添加到Spring Context，这里有的不足就是会把整个类当成bean注册到spring 容器上，如果这个类中并不是所有方法都需要注册为bean的话，会出现不需要的方法都注册成为bean，这时候必须确保这些不需要的方法也能注册为bean或者在扫描中加filter 过滤这些不需要的bean,否者spring将无法成功启动。
@Bean相对来说就更加灵活了，它可以独立加在方法上，按需注册到spring容器，而且如果你要用到第三方类库里面某个方法的时候，你就只能用@Bean把这个方法注册到spring容器，因为用@Component你需要配置组件扫描到这个第三方类路径而且还要在别人源代码加上这个注解，很明显是不现实的。

@Component
public class Student {
    private String name = "lkm";
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
}
@Bean 需要在配置类中使用，即类上需要加上@Configuration注解，@Configuration把一个类作为一个IOC容器，它的某个方法头上如果注册了@Bean，就会作为这个Spring容器中的Bean。
@Configuration
public class WebSocketConfig {
    @Bean
    public Student student(){
        return new Student();
    }
}
都可以使用@Autowired或者@Resource注解注入
@Autowired
Student student;
那为什么有了@Compent,还需要@Bean呢？
如果你想要将第三方库中的组件装配到你的应用中，在这种情况下，是没有办法在它的类上添加@Component注解的，因此就不能使用自动化装配的方案了，但是我们可以使用@Bean</pre>
          <h3>@Primary 和 @Qualifier的区别</h3>
          <pre>
当一个方法有多个实现类时，在方法中注入了多个，@primary可以指定注入哪一个。
@Primary：自动装配时当出现多个Bean候选者时，被注解为@Primary的Bean将作为首选者，否则将抛出异常
例如在多数据源的时候，使用@Primary注解用于指定其中一个作为主数据源，即如果数据库操作没有指明使用哪个数据源的时候，默认使用主数据源，这个时候我们就使用到了@primary这个注解
@Autowired 默认按类型装配，如果我们想使用按名称装配，可以结合@Qualifier注解一起使用

当一个接口有多个不同实现时，注入Spring的时候会产生org.springframework.beans.factory.NoUniqueBeanDefinitionException异常信息。
解决方式有2种，使用@Primary 和 @Qualifier注解。

注解	        区别
@Primary	  优先注入该注解的标注的bean
@Qualifier	确定注入该注解标定的bean

@Qualifier
该注解的意思是直接注入该注解标定的bean，而非选择。如：
public interface ITeacher {
    String getName();
}
@Component
public class MathTeacher implements ITeacher {
    public String getName() {
        return "Math";
    }
}
@Component
public class EnglishTeacher implements ITeacher {
    public String getName() {
        return "English";
    }
}
如果这个时候使用@Autowired就会报错，需要指定注入具体对象：
public class ClassRoom {
   @Autowired
   @Qualifier("englishTeacher")
   public ITeacher teacher;
}

@Primary
@Qualifier是在使用注入的时候，使用方明确指出使用哪个；@Primary更像是提供方告诉你优先使用哪个。举个例子，你实现排序接口的很多的实例，如冒泡排序，快排，选择排序等等。在使用者选择不明确的情况下，你希望他优先（默认）选择冒泡排序。这样你就在冒泡排序实现类上使用@Primary予以标识。
public interface ISort {
    String getName();
}
@Component
@Primary
public class MaopaoSort implements ISort {
    public String getName() {
        return "冒泡排序";
    }
}
@Component
public class XuanzeSort implements ISort {
    public String getName() {
        return "选择排序";
    }
}
public class MySort {
   @Autowired
   public ISort sort;
}</pre>
          <h3>Controller获取Get请求问号后的参数</h3>
          <pre>
通过HttpServletRequest接收，post方式和get方式都可以
@RequestMapping("/addUser2")
public String addUser2(HttpServletRequest request) {
    String username=request.getParameter("username");
    String password=request.getParameter("password");
    System.out.println("username is:"+username);
    System.out.println("password is:"+password);
    return "demo/index";
}

用注解@RequestParam绑定请求参数到方法入参
@RequestParam定义的入参有一个好处是，如果前端没传，接口报400
当请求参数username不存在时会有异常发生,可以通过设置属性required=false解决,例如: @RequestParam(value="username", required=false)
但是参数多了很明显，这样的话，将会导致这个方法太难看
在一个查询接口中，需要的参数比较多，如果还是使用GET方式进行请求的话，那么，Controller 中的方法的参数列表将会非常多，如：
public List< String> getName(@RequestParam String query1,
                            @RequestParam String query2,
                            @RequestParam String query3,......) {
          return new ArrayList<>();
}

换成POST请求，将所有参数封装成一个类，然后使用 @RequestBody注解将参数自动解析成该类的一个实例，如：
public List< String> getName(@RequestBody QueryDto queryDto) {
        return new ArrayList<>();
}
QueryDto 类
public class QueryDto {
    private String query1;
    private String query2;
    private String query3;
    // getter, setter ...
}


参数多了使用GET请求，可以将所有请求参数通过JSON格式来传递，controller拿到参数后，使用 JSON 相关的库（如 gson），将该JSON转化为相应的对象，如：
public List< String> getName(@RequestParam String queryDtoStr) {
        QueryDto queryDto = new Gson().fromJson(queryDtoStr, QueryDto.class);
        return new ArrayList<>();
}
public class QueryDto {
    private String query1;
    private String query2;
    private String query3;
    // getter, setter ...
}
URL应该是类似于下面这样的：
http://localhost:8080/app/names?queryDtoStr={"query1":12,"query2":2,"query3":2}
当然，为了避免参数中出现 #、？、&等特殊字符，最好是采用 encodeURIComponent对参数进行转义
类似第二种方式还不如直接改成post请求</pre>
          <h3>打印HttpServletRequest的所有参数</h3>
          <pre>
@RequestMapping("/addUser")
public String addUser(HttpServletRequest request) {
    Map< String, String[]> map = request.getParameterMap();
    Set< Map.Entry< String, String[]>> keys = map.entrySet();
    Iterator< Map.Entry< String, String[]>> it = keys.iterator();
    while (it.hasNext()){
       Map.Entry< String, String[]> itMap = it.next();
       logger.info("参数--"+itMap.getKey()+":"+Arrays.toString(itMap.getValue()));
    }
}</pre>
          <h3>@EnableCaching实现缓存</h3>
          <pre>
@EnableCaching注解是spring framework中的注解驱动的缓存管理功能。自spring版本3.1起加入了该注解。如果你使用了这个注解，那么你就不需要在XML文件中配置cache manager了。
当你在配置类(@Configuration)上使用@EnableCaching注解时，会触发一个post processor，这会扫描每一个spring bean，查看是否已经存在注解对应的缓存。如果找到了，就会自动创建一个代理拦截方法调用，使用缓存的bean执行处理
@EnableCaching 启用缓存注解
下面四个注解，前三个写在方法上，第四个写在类上
@Cacheable      缓存里有就用缓存里的
@CacheEvict     每次用户缓存就清除缓存
@CachePut       每次用完都更新缓存
@CacheConfig</pre>
          <h3>其他注解</h3>
          <pre>
@Configuration把一个类作为一个IoC容器，它的某个方法头上如果注册了@Bean，就会作为这个Spring容器中的Bean。
@Scope注解 作用域
@Lazy(true) 表示延迟初始化
@Service用于标注业务层组件、
@Controller用于标注控制层组件（如struts中的action）
@Repository用于标注数据访问组件，即DAO组件。
@Component泛指组件，当组件不好归类的时候，我们可以使用这个注解进行标注。
@Scope用于指定scope作用域的（用在类上）
@PostConstruct用于指定初始化方法（用在方法上）
@PreDestory用于指定销毁方法（用在方法上）
@Resource 默认按名称装配，当找不到与名称匹配的bean才会按类型装配。
@DependsOn：定义Bean初始化及销毁时的顺序
@Primary：自动装配时当出现多个Bean候选者时，被注解为@Primary的Bean将作为首选者，否则将抛出异常
@Autowired 默认按类型装配，如果我们想使用按名称装配，可以结合@Qualifier注解一起使用
@Autowired @Qualifier(“personDaoBean”) 存在多个实例配合使用
@Entity(name="xxx")  name属性指定数据库中的表名，如没有name则默认表名与实体类同名，默认为 SnakeCaseStrategy(命名策略 )为表名</pre>

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
