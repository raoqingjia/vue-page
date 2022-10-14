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
            <li v-for="(items,index) in catalogue"><a @click="jump(index)">{{items.name}}</a></li>
          </ul>
          <h3>MyBatis基本概念</h3>
          <pre>把这些概念问题都梳理一下。
首先，我们学习框架要知道，框架是什么东西。
框架：是一个应用程序的一部分实现。例如：Spring，spring boot等等。
框架的优势：提高开发效率，提高代码规范性和可维护性，提高软件性能。
模式：解决一类问题的方法论。例如，单例模式，原型模式，迭代器模式，观察模式等。
架构：软件体系结构，一种设计方案。比如说，大家熟知的三层架构：MVC。

一.Mybatis
Mybatis：是一个半自动ROM框架，支持SQL查询，存储，高级映射的持久层框架，可以在实体类和SQL语句之间建立映射关系，对操作数据库的过程进行了封装，消除了原先使用JDBC的冗余。
JDBC：Java Database Connection 数据库连接，提供了一套数据库操作API包括加载驱动，获取连接，获取执行者对象，发送SQL语句。
ORM：Object Relational Mapping 对象关系映射。
ORM的映射是什么映射：对象与关系的映射，对操作的映射，对关联的映射。
mybatis的工作原理：配置类config --- mybatis-config.xml---Mapping.xml---创建会话工厂---创建会话对象---创建执行器---封装映射对象---操作数据库---输出结果映射

二.mybatis-config.xml
Mybatis的三个核心对象：SqlSessionFactoryBuilder，SqlSessionFactory，SqlSession
SqlSessionFactoryBuilder通过build()构造SqlSessionFactory
SqlSessionFactory使用openSession（）创建SqlSession对象
SqlSession对象：在应用程序与持久层之间执行交互操作，主要作用是执行持久化操作，包含了执行SQL操作的方法。
UNPLOOLED无连接池类型需要用户负责关闭
< mapper>标签用来引入mapper文件，主要有四种方式，类路径引入，本地文件引入，接口类引入，包名引入。

三.mapper.xml映射文件
mapper文件中的常用标签：< mapper>< cache>< cache-ref>< select>< update>< insert>< delete>< sql>< resultMap>
标签中的属性：
parameterType:参数类型        resultType：返回类型
动态SQL< if>判断< choose>< when>< otherwise>例如（switch....catch.....default）< where>条件< trim>去除多余关键字< set>更新< foreach>循环
< if>test属性中的值为判断值
< foreach>属性
    tem：集合中迭代元素的别名
    separator：分隔符
    index：元素的序号
    collection：类型必须指定，迭代类型值为list array map
    open开头符号 close结尾符号
查询
嵌套查询（子查询）通过执行另外一条SQL映射语句来返回预期的复杂类型
嵌套结果查询（多表查询）使用嵌套结果来处理重复的联合结果的子集
多对多关联映射Collection property ofType
常用注解:@Select   @Insert @Update  @Delete   @Param(指定参数)
@One一对一查询 @Many一对多查询
@Result映射查询结果可以嵌套，有三个属性property（关联的实体类属性），one（指定关联关系），column（关联数据库表中字段名）</pre>
          <h3>SqlSession</h3>
          <pre>是什么？
SqlSession是一个会话，相当于JDBC中的一个Connection对象，是整个Mybatis运行的核心。SqlSession接口提供了查询，插入，更新，删除方法，Mybatis中所有的数据库交互都由
SqlSession接口有两个实现SqlSessionManager，DefaultSqlSession。
1、SqlSessionManager:对SqlSessionFactory 和SqlSession 接口的实现，主要功能是对SqlSessionFactory 和SqlSession的管理，是更高层次的封装
2、DefaultSqlSession：SqlSession的实现，Mybatis工作时真正调用的类，所有调用都是通过此类来实现，线程不安全。

引申
SqlSession实现了Closeable接口，代表SqlSession是可以关闭的，那也就是说SqlSession代表一种可关闭的连接，也正如名字所表达的是Session，Session对于开发人员来说并不陌生。例如：浏览器和服务器之间的会话也是Session，Session用来维护无状态请求之间的状态的信息。所以说SqlSession也是一种会话，数据库连接客户端和数据库Server之间的一种会话，并维护了客户端和数据库Server的一些状态信息
SqlSession的执行最终只会产生一个connection，所以我们设想一下，在两个线程通过同一个sqlsession来执行crud，那么就有可能，我先跑完的线程，把唯一的这一个连接给关闭掉，从而造成另一条线程的逻辑不被成功执行，所以通过DefaultSqlSession来执行数据库操作是线程不安全的</pre>
          <h3>SqlSessionFactory</h3>
          <pre>是什么？
SqlSessionFactory 是 MyBatis 的重要对象之一，是创建 SqlSession 的工厂。

有什么用？
它的作用就是生成 SqlSession 接口对象，而且重载了许多不同的参数，你可以改变这些参数自定义会话过程中的一些默认行为。例如：可以设置自动提交事务或是关闭自动提交；可以设置获取数据库连接的线程的类型（重用，每次新产生等等）；也可以获取整个 Mybatis 的配置信息的 Configuration 对象实例等等。
SqlSessionFactory 默认也有两个实现类，分别是 DefaultSqlSessionFactory 和 SqlSessionManager，当然你也可以自定义实现类。默认实现是 DefaultSqlSessionFactory。
总而言之，SqlSessionFactory 就是生产 SqlSession 对象的工厂。那也就是说整个 Mybatis 中，如果只有一个数据库 Server 要连接，那么只需要一个工厂就够了（只有一个SqlSessionFactory的实例对象），而 SqlSession 可以自由的被关闭，也就代表SqlSession是需要反复被创建的。上面说到 SqlSession 是关联到具体数据库连接的，但是如果每次创建和销毁都直接操作物理连接的话，那么这个资源浪费很高，效率很低。
SqlSessionFactory可以让一次连接用完关闭SqlSession实例时，把数据库连接对象放回到对象池中，并没有直接销毁，使用池技术，大大提高了物力资源利用率，缩短连接时间、减少了资源利用等。</pre>
          <h3>SqlSessionTemplate</h3>
          <pre>是什么？
SqlSessionTemplate 是 MyBatis-Spring 的核心，是SqlSession的一个具体实现，这个类负责管理 MyBatis 的 SqlSession。
对于MyBatis提供的原生实现类来说，用的最多的就是DefaultSqlSession，但我们知道DefaultSqlSession这个类不是线程安全的，SqlSessionTemplate就是解决这个问题的

有什么用？
SqlSessionTemplate实现了SqlSession接口，也就是说我们可以使用SqlSessionTemplate来代理以往的DefaultSqlSession完成对数据库的操作，但是DefaultSqlSession这个类不是线程安全的，所以DefaultSqlSession这个类不可以被设置成单例模式的。
如果是常规开发模式的话，我们每次在使用DefaultSqlSession的时候都从SqlSessionFactory当中获取一个就可以了。但是与Spring集成以后，Spring提供了一个全局唯一的SqlSessionTemplate对象来完成DefaultSqlSession的功能，问题就是：无论是多个Dao使用一个SqlSessionTemplate，还是一个Dao使用一个SqlSessionTemplate，SqlSessionTemplate都是对应一个sqlSession对象，当多个web线程调用同一个Dao时，它们使用的是同一个SqlSessionTemplate，也就是同一个SqlSession，
SqlSessionTemplate传参是必须需要一个sqlsessionfactory的，sqlsessionTemplate在执行crud操作时，都不是通过唯一的一个sqlsession来执行的，他都是通过动态代理来执行具体的操作的，所以多个线程持有同一个sqlsessionTemplate是不会产生线程安全问题的。

@Primary
@Bean("dbSqlSessionTemplate")
public SqlSessionTemplate db1SqlSessionTemplate(@Qualifier("dbSqlSessionFactory") SqlSessionFactory sqlSessionFactory){
    return new SqlSessionTemplate(sqlSessionFactory);
}</pre>
          <h3>SqlSessionManager</h3>
          <pre>实现 SqlSessionFactory、SqlSession 两个接口
public class SqlSessionManager implements SqlSessionFactory, SqlSession {
  private final SqlSessionFactory sqlSessionFactory;
  private final SqlSession sqlSessionProxy;
  private final ThreadLocal< SqlSession> localSqlSession = new ThreadLocal<>();
  private SqlSessionManager(SqlSessionFactory sqlSessionFactory) {
    this.sqlSessionFactory = sqlSessionFactory;
    this.sqlSessionProxy = (SqlSession) Proxy.newProxyInstance(
        SqlSessionFactory.class.getClassLoader(),
        new Class[]{SqlSession.class},
        new SqlSessionInterceptor());
  }
  .....
  public static SqlSessionManager newInstance(Reader reader) {
    return new SqlSessionManager(new SqlSessionFactoryBuilder().build(reader, null, null));
  }

  public static SqlSessionManager newInstance(Reader reader, String environment) {
    return new SqlSessionManager(new SqlSessionFactoryBuilder().build(reader, environment, null));
  }

  public static SqlSessionManager newInstance(Reader reader, Properties properties) {
    return new SqlSessionManager(new SqlSessionFactoryBuilder().build(reader, null, properties));
  }
}
可以看出他的一个必要的参数也是SqlsessionFactory，SqlSessionManager既实现了SqlSessionFactory，也实现了SqlSession，具备生产SqlSession的能力，也具备SqlSession的能力，SqlSession的作用是执行具体的</pre>
          <h3>Mybatis中Mapper和MapperScan注解</h3>
          <pre>@Mapper
作用：在接口类上添加了@Mapper，会自动的把 @Mapper 注解的接口生成动态代理类，问题是在每个需要实现类的接口上都添加@Mapper注解，相对比较繁琐

@MapperScan
作用：配置一个或多个包路径，自动的扫描这些包路径下的类，自动的为它们生成代理类。
添加位置：是在Springboot启动类上面添加，或者是在config配置上
比如@MapperScan("com.xxx.x x")，有了这个注解，可不用一个一个添加@Mapper注解
在数据源config上添加通过sqlSessionFactoryRef指定数据源
@MapperScan(basePackages = "com.example.springdemo.dao.omss",sqlSessionFactoryRef = "SqlSessionFactoryMysqlOmss")
Spring boot启动类的@Mapperscan和各数据源的@Mapperscan只能生效一种,config配置上写了，启动类上就不要写了

@MapperScan有很多属性，最常用的是：
annotationClass : 这个是基于包下面扫描所有的接口类并注册，也有指定的属性。
markInterface : 基于包下面扫描所有接口类并注册，也可以指定特殊的接口为父类。
sqlSessionTemplateRef: 在指定使用sqlSessionTemplateRef的情况下，这里有一个或多个的Spring的容器。经常我们会使用一个或多个的数据库.
sqlSessionFactoryRef : 在指定使用sqlSessionFactoryRef的情况下，这里有一个或多个的Spring的容器。经常我们会使用一个或多个的数据库.
nameGenerator : 在Spring的容器中，将使用BeanNameGenerator去命名检测到的组件。
basePackageClasses : 这是一个安全替代basePackages()作为指定组件的扫描包。包下面的所有接口都将会被扫描。
basepackages : 基于包下面的扫描MyBatis的接口。注意是，只有是接口的将会被扫描注册，如果是具体的类将会被忽略

举例配置多数据源
直接上config配置代码，其他yml配置忽略了
由于Spring boot的自动装载不适用于多数据源，所以应该为每一个数据源各创建一个手动配置的配置文件。
注意：'默认数据源配（理解主数据源或者是随便一个就）'置文件里的每个方法都需要加@Primary注解，表示此数据源为默认数据源，不加的话Spring boot找不到默认的数据源。
因为在Spring Boot Jdbc的自动配置过程中，会对于开发者透明地使用dataSource进行一些相关配置，所以当有两个Datasource实现类时，Spring Boot将无法确定使用哪一个。
各个版本的 springboot 配置 datasource 时参数有所变化，例如低版本中yml配置数据库 url时使用 url 属性，高版本中yml配置使用 jdbc-url 属性，请注意区分

DataSourceConfig1 数据源
@Configuration
//数据源mapper接口所在包
@MapperScan(basePackages = "com.test.demo.dao.test1", sqlSessionFactoryRef = "db1SqlSessionFactory")
public class DataSourceConfig1 {
    @Primary
    @Bean("db1DataSource")
    @ConfigurationProperties(prefix = "spring.datasource.test1")
    public DataSource getDb1DataSource(){
        return DataSourceBuilder.create().build();
    }
    @Primary
    @Bean("db1SqlSessionFactory")
    public SqlSessionFactory db1SqlSessionFactory(@Qualifier("db1DataSource") DataSource dataSource) throws Exception {
        SqlSessionFactoryBean bean = new SqlSessionFactoryBean();
        bean.setDataSource(dataSource);
        //数据源的mapper.xml所在位置(具体到xml文件)
        bean.setMapperLocations(new PathMatchingResourcePatternResolver().getResources("classpath*:**/com/test/**/dao/test1/mapping/*Mapper.xml"));
        return bean.getObject();
    }
    @Primary
    @Bean("db1SqlSessionTemplate")
    public SqlSessionTemplate db1SqlSessionTemplate(@Qualifier("db1SqlSessionFactory") SqlSessionFactory sqlSessionFactory){
        return new SqlSessionTemplate(sqlSessionFactory);
    }
}

DataSourceConfig2 数据源
@Configuration
@MapperScan(basePackages = "com.test.demo.dao.test2", sqlSessionFactoryRef = "db2SqlSessionFactory")
public class DataSourceConfig2 {
    @Bean("db2DataSource")
    @ConfigurationProperties(prefix = "spring.datasource.test2")
    public DataSource getDb1DataSource(){
        return DataSourceBuilder.create().build();
    }
    @Bean("db2SqlSessionFactory")
    public SqlSessionFactory db1SqlSessionFactory(@Qualifier("db2DataSource") DataSource dataSource) throws Exception {
        SqlSessionFactoryBean bean = new SqlSessionFactoryBean();
        bean.setDataSource(dataSource);
        bean.setMapperLocations(new PathMatchingResourcePatternResolver().getResources("classpath*:**/com/test/**/dao/test2/mapping/*Mapper.xml"));
        return bean.getObject();
    }
    @Bean("db2SqlSessionTemplate")
    public SqlSessionTemplate db1SqlSessionTemplate(@Qualifier("db2SqlSessionFactory") SqlSessionFactory sqlSessionFactory){
        return new SqlSessionTemplate(sqlSessionFactory);
    }
}</pre>
          <h3>SpringBoot整合Mysql、Mybatis和JDBC的配置</h3>
          <pre>1、pom文件注入依赖
MySQL 驱动
< dependency>
    < groupId>mysql< /groupId>
    < artifactId>mysql-connector-java< /artifactId>
< /dependency>
通过 JDBC 连接数据库依赖 或者通过 下面二选一   druid的连接后面单独讲
< dependency>
    < groupId>org.springframework.boot< /groupId>
    < artifactId>spring-boot-starter-jdbc< /artifactId>
< /dependency>

< dependency>
   < groupId>com.alibaba< /groupId>
   < artifactId>druid-spring-boot-starter< /artifactId>
   < version>1.1.17< /version>
< /dependency>
MyBatis应用程序
< dependency>
    < groupId>org.mybatis.spring.boot< /groupId>
    < artifactId>mybatis-spring-boot-starter< /artifactId>
    < version>1.3.2< /version>
< /dependency>
https://blog.csdn.net/javaforwork/article/details/122677832  mysql配置引申

2、然后配置application文件
spring:
  datasource:
    username: root
    password: 123456
    url: jdbc:mysql://localhost:3306/pestore?useUnicode=true&characterEncoding=utf-8&useSSL=true&serverTimezone=UTC
    driver-class-name: com.mysql.cj.jdbc.Driver  # 用的jdbc连接池
mybatis:
  mapper-locations: classpath:mapping/*Mapper.xml   #告诉mybatis去哪里扫描mapper
  configLocation: classpath:mybatis/mybatis-config.xml  # 加载全局的配置文件
注意：配置文件和数据库连接的相对内容（url，username,password,classname)要相对应，而且要注意MySQL的版本与驱动之间的对应


3、关于mybatis配置扫描
3.1、java目录下的xml资源在项目打包时会被忽略掉，所以，如果xml放在包下，需要在pom.xml文件中再添加如下配置，避免打包时java目录下的XML文件被自动忽略掉：
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

3.2、xml也可以直接放在resources目录下，这样就不用担心打包时被忽略了，但是放在resources目录下，又不能自动被扫描到，需要添加额外配置。例如我在resources目录下创建mapper目录用来放mapper文件
此时在application.properties中告诉mybatis去哪里扫描mapper：
mybatis.mapper-locations=classpath:mapper/*.xml
如此配置之后，mapper就可以正常使用了。注意第二种方式不需要在pom.xml文件中配置文件过滤

3.3、在application启动类中添加@MapperScan注解
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
@MapperScan({"com.kfit.demo","com.kfit.user"}使用@MapperScan注解多个包

4、xml也可以直接放在resources、也可以直接放dao层下的impl里面，abs现在是一个项目下对应多个库的时候就放到了resources里，如果是一个项目对应一个mysql就直接放到了dao层的impl里面例如sso、urbac服务

5、定义datasource工厂方法，并将其放在使用@configuration注解的类中：
SpringBoot2中的spring-boot-starter-jdbc默认的数据已经更改为hikari，据说性能很高，有兴趣的可以进行测试。
目前使用最广泛的druid基础数组实现，而hikari则是基于threadlocal +CopyOnWriteArrayList实现。
举例代码，但数据源举例
@Slf4j
@Configuration
@MapperScan(basePackages = "com.example.springdemo.dao.omss",sqlSessionFactoryRef = "SqlSessionFactoryMysqlOmss")
public class DatasourceConfigMysqlOmss {
    private static final String MYBATIS_CONFIG = "mybatis-config.xml";
    private static final String MAPPER_LOCATION_MYSQL = "classpath:mapper/omss/*.xml";

    @Bean(name = "DataSourceMysqlOmss")
    @ConfigurationProperties("spring.mysql.omss")
    public DataSource dataSourceMysql() {
        return DataSourceBuilder.create().type(HikariDataSource.class).build();
    }

    //spring通过SqlSessionTemplate对象去操作sqlsession语句
    @Bean(name = "SqlSessionFactoryMysqlOmss")
    public SqlSessionFactory sqlSessionFactoryMysql(@Qualifier("DataSourceMysqlOmss") DataSource dataSource) throws Exception {
        log.debug("try obtain SqlSessionFactoryMysql");
        SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
        sessionFactory.setConfigLocation(new ClassPathResource(MYBATIS_CONFIG));
        sessionFactory.setMapperLocations(new PathMatchingResourcePatternResolver().getResources(MAPPER_LOCATION_MYSQL));
        sessionFactory.setDataSource(dataSource);
        SqlSessionFactory factory = sessionFactory.getObject();
        log.info("SqlSessionFactoryMysql obtained");
        return factory;
    }
    // 配置事务管理器
    @Bean(name = "TransactionManagerMysql")
    @Primary
    public DataSourceTransactionManager transactionManagerMysql() {
        log.trace("try create transactionManagerMysql");
        DataSourceTransactionManager txMgr = new DataSourceTransactionManager(dataSourceMysql());
        log.info("transactionManagerMysql obtained");
        return txMgr;
    }
}

5、mybatis与spring的整合之SqlSessionFactoryBean
在使用Spring+MyBatis的环境下，我们需要配值一个SqlSessionFactoryBean来充当SqlSessionFactory
SqlSessionFactoryBean是解析映射接口对应的sql配置文件（xml文件）

SqlSessionFactoryBean引入sql配置文件有两种形式，注入mapperLocations和注入configLocation
mapperLocations与configLocation比较
mapperLocations仅仅是sql配置文件，会被解析放入Configuration中
configLocation可以设置其他东西，比如二级缓存、实体类别名、数据源（DataSource）等，可以配置多个config.xml实现多数据源配置。它会被解析为Configuration对象，这是构建SqlSessionFactory所必须的。

例如下面
private static final String MYBATIS_CONFIG = "mybatis-config.xml";
private static final String MAPPER_LOCATION_MYSQL = "com/example/springdemo/urbac/dao/impl/*.xml";

SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
sessionFactory.setConfigLocation(new ClassPathResource(MYBATIS_CONFIG));
sessionFactory.setMapperLocations(new PathMatchingResourcePatternResolver().getResources(MAPPER_LOCATION_MYSQL));
sessionFactory.setDataSource(dataSource);
SqlSessionFactory factory = sessionFactory.getObject();
上面注意的是 SqlSessionFactoryBean 实现了 Spring 的 FactoryBean 接口。这意味着由 Spring 最终创建的 bean 并不是 SqlSessionFactoryBean 本身，而是工厂类（SqlSessionFactoryBean）的 getObject() 方法的返回结果。这种情况下，Spring 将会在应用启动时为你创建 SqlSessionFactory，并使用 sqlSessionFactory 这个名字存储起来


6、使用Mybatis：
创建映射对象User
/** * User实体映射类
 * Created by Administrator on 2017/11/24.
 */
public class User {
     private Integer id;
     private String name;
     private String password;
     private String phone;
     //省略 get 和 set ...
}
创建User映射的操作UserMapper，为了后续单元测试验证，实现插入和查询操作
/**
  * User映射类
  * Created by Administrator on 2017/11/24.
  */
@Mapper
public interface UserMapper {
    User findUserByPhone(@Param("phone") String phone);
    int insert(@Param("name") String name, @Param("password") String password, @Param("phone") String phone);
}
映射文件配置
< ?xml version="1.0" encoding="UTF-8"?>
< !DOCTYPE mapper PUBLIC "-// mybatis.org//DTD Mapper 3.0//EN" " http://mybatis.org/dtd/mybatis-3-mapper.dtd";> ;
< mapper namespace="com.test2.mapper.UserMapper">
    < select id="findUserByPhone" resultType="com.test2.entry.User">
        SELECT * FROM t_user WHERE PHONE=#{phone}
    < /select>
    < insert id="insert">
        INSERT INTO t_user(NAME,PASSWORD,PHONE) VALUES (#{name},#{password},#{phone})
    < /insert>
< /mapper>
创建单元测试：
@RunWith(SpringRunner.class)
@SpringBootTest
public class Demo2ApplicationTests {
   @Autowired
   private UserMapper userMapper;
   @Test
   public void insert(){
      userMapper.insert("hy","123456","123456789");
   }
   @Test
   public void getBYphone(){
      User user =userMapper.findUserByPhone("123456789");
      Assert.assertEquals("hy", user.getName());
      System.out.println(user.getName()+":"+user.getPassword());
   }
}</pre>
          <img src="../../img/crm/mybatis-01.png" width="100%" height="450px">
          <h3>MyBatis 之 resultmap和resulttype区别和应用</h3>
          <pre>1、MyBatis中在查询进行select映射的时候，返回结果的类型可以用resultType或者resultMap
2、resultType是直接表示返回类型的，而resultMap则适合应用复杂的映射关系
3、但是resultType跟resultMap不能同时存在

ResultType
resultType可以直接返回给出的返回值类型，比如String、int、Map，等等，其中返回List也是将返回类型定义为Map，然后mybatis会自动将这些map放在一个List中，resultType还可以是一个对象，举例如下：
1、返回常见类型：（类似于int或者Integer）
< select id="getLogCount" resultType="int">
　select COUNT(*) from AttLog where attTime = #{attTime} and userId = #{userId};
< /select>

2、返回Map
< select id="getDeviceInfoByDeviceId" resultType="Map">
　　select userCount as usercount,
　　fingerCount as fingercount,
　　faceCount as facecount,
　　attRecordCount as recordcount,
　　lastOnline,
　　state as status
　　from DeviceInfo where deviceId = #{deviceId} and tb_isDelete = 0;
< /select>

3、返回一个对象或者一个list（list里面是resultType的类型）
< select id="queryAllDeviceInfo" resultType="com.cachee.ilabor.att.clientmodel.DeviceInfo">
   select * from deviceInfo where tb_isDelete = 0;
< /select>

4、返回一个对象
对于SQL语句查询出的字段在相应的pojo中必须有和它相同的字段对应。
但是，如果列名没有精确匹配,你可以在列名上使用 select 字句的别名(一个 基本的 SQL 特性)来匹配标签。
< select id="selectUsers" parameterType="int" resultType="User">
  select
    user_id             as "id",
    user_name           as "userName",
    hashed_password     as "hashedPassword"
    from some_table
  where id = #{id}
< /select>

resultType对应的是java对象中的属性，大小写不敏感，
resultType如果放的是java.lang.Map, key是查询语句的列名，value是查询的值，大小写敏感
resultMap:指的是定义好了的id的，是定义好的resyltType的引用
注意：用resultType的时候，要保证结果集的列名与java对象的属性相同，而resultMap则不用，而且resultMap可以用typeHander转换
parameterType:参数类型，只能传一个参数，如果有多个参数要封装，如封装成一个类，要写包名加类名，基本数据类型则可以省略
一对1、一对多时，若有表的字段相同必须写别名，不然查询结果无法正常映射，出现某属性为空或者返回的结果与想象中的不同，而这往往是没有报错的。
ResultMap
应用场景：适合使用返回值是自定义实体类的情况
映射实体类的数据类型
id: resultMap的唯一标识
column: 库表的字段名
property： 实体类里的属性名

配置映射文件
type:映射实体类的数据类型  id：resultMap的唯一标识  column:库表的字段名 property:实体类里的属性名
< resultMap type="person" id="BaseResultMap">
  < id column="person_id" property="personId" />
  < result column="name" property="name" />
  < result column="gender" property="gender" />
  < result column="person_addr" property="personAddr" />
  < result column="birthday" property="birthday" />
< /resultMap>

id:当前sql的唯一标识
parameterType：输入参数的数据类型
resultType：返回值的数据类型
#{}:用来接受参数的，如果是传递一个参数#{id}内容任意，如果是多个参数就有一定的规则,采用的是预编译的形式select
* from person p where p.id = ? ，安全性很高

sql语句返回值类型使用resultMap
< select id="selectPersonById" parameterType="java.lang.Integer" resultMap="BaseResultMap">
   select * from person p where p.person_id = #{id}
< /select>

resultMap:适合使用返回值是自定义实体类的情况
resultType：适合使用返回值的数据类型是非自定义的，即jdk的提供的类型

< select id="selectPersonCount" resultType="java.lang.Integer">
  select count(*) from  person
< /select>
< select id="selectPersonByIdWithMap" parameterType="java.lang.Integer" resultType="java.util.Map">
  select * from person p where p.person_id= #{id}
< /select></pre>
          <h3>MyBatis 之 parameterType</h3>
          <pre>Mybatis的Mapper文件中的select、insert、update、delete元素中有一个parameterType属性，用于对应的mapper接口方法接受的参数类型。本文主要给大家介绍了关于MyBatis传入参数parameterType类型的相关内容，分享出来供大家参考学习，下面话不多说了，来一起看看详细的介绍吧。
1. MyBatis的传入参数parameterType类型分两种
基本数据类型：int,string,long,Date;
复杂数据类型：类和Map

2. 如何获取参数中的值:
基本数据类型：#{参数} 获取参数中的值
复杂数据类型：#{属性名}  ，map中则是#{key}

3.参数映射高级配置
提示 JDBC 要求，如果一个列允许使用 null 值，并且会使用值为 null 的参数，就必须要指定 JDBC 类型（jdbcType）。
要更进一步地自定义类型处理方式，可以指定一个特殊的类型处理器类（或别名），比如：
#{age,javaType=int,jdbcType=NUMERIC,typeHandler=MyTypeHandler}
参数的配置好像越来越繁琐了，但实际上，很少需要如此繁琐的配置。
对于数值类型，还可以设置 numericScale 指定小数点后保留的位数。
#{height,javaType=double,jdbcType=NUMERIC,numericScale=2}

4.案例：
4.1 基本数据类型案例
< sql id="Base_Column_List" >
  id, car_dept_name, car_maker_name, icon,car_maker_py,hot_type
< /sql>
< select id="selectByPrimaryKey" resultMap="BaseResultMap" parameterType="java.lang.Long" >
  select  < include refid="Base_Column_List" />
  from common_car_make  where id = #{id,jdbcType=BIGINT}
< /select>

4.2 复杂类型--map类型
< select id="queryCarMakerList" resultMap="BaseResultMap" parameterType="java.util.Map">
  select  < include refid="Base_Column_List" />
  from common_car_make cm
  where 1=1
  < if test="id != null">
   and cm.id = #{id,jdbcType=DECIMAL}
  < /if>
  < if test="carDeptName != null">
   and cm.car_dept_name = #{carDeptName,jdbcType=VARCHAR}
  < /if>
  < if test="hotType != null" >
   and cm.hot_type = #{hotType,jdbcType=BIGINT}
  < /if>
  ORDER BY cm.id
< /select>

4.3 复杂类型--类类型
< update id="updateByPrimaryKeySelective" parameterType="com.epeit.api.model.CommonCarMake" >
 update common_car_make
 < set >
  < if test="carDeptName != null" >
  car_dept_name = #{carDeptName,jdbcType=VARCHAR},
  < /if>
  < if test="carMakerPy != null" >
   car_maker_py = #{carMakerPy,jdbcType=VARCHAR},
  < /if>
  < if test="hotType != null" >
   hot_type = #{hotType,jdbcType=BIGINT},
  < /if>
 < /set>
 where id = #{id,jdbcType=BIGINT}
< /update>

4.4 复杂类型--map中包含数组的情况
< select id="selectProOrderByOrderId" resultType="com.epeit.api.model.ProOrder" parameterType="java.util.HashMap" >
  select sum(pro_order_num) proOrderNum,product_id productId,promotion_id promotionId
  from pro_order
  where 1=1
  < if test="orderIds != null">
   and
   < foreach collection="orderIds" item="item" open="order_id IN(" separator="," close=")">
    #{item,jdbcType=BIGINT}
   < /foreach>
  < /if>
  GROUP BY product_id,promotion_id
< /select>

4.5 注解@Param：这个比较特殊
案例一：
@Param(value="startdate") String startDate ：注解单一属性；这个类似于将参数重命名了一次
如调用mybatis的*mapper.xml中配置sql语句（DAO层）
List< String> selectIdBySortTime(@Param(value="startdate")String startDate);
则xml中的语句，需要配合@param括号中的内容:参数为startdate
< select id="selectIdBySortTime" resultType="java.lang.String" parameterType="java.lang.String">
 select distinct ajlcid from ebd_fh_ajlc where sorttime >= to_date(#{startdate,jdbcType=VARCHAR},'YYYY-MM-DD') and created_date=updated_date
 and keyvalue in (select distinct companyname from ebd_fh_company_list where isupdate='0')
< /select>

案例二：
注解javaBean,@Param(value="dateVo") DateVo dateVo；则需要注意编写的参数
List< String> selectIds(@Param(value="dateVo")DateVo dateVo);
对应的mapping文件
< select id="selectIds" resultType="java.lang.String" parameterType="com.api.entity.DateVo">
  select distinct ajlcid from ebd_fh_ajlc where sorttime >= to_date(#  {dateVo.startDate,jdbcType=VARCHAR},'YYYY-MM-DD') and created_date=updated_date
  and keyvalue in (select distinct companyname from ebd_fh_company_list where isupdate='0')
< /select>

实体类型注册别名
有时候在MyBatis的映射文件中，会发现这样一种情况：parameterType的参数有时候直接写类型名称就可以了，比如：
< delete id="deleteUser" parameterType="Integer">
        delete from user where uid = #{uid}
< /delete>

但有时候，需要写全限定类名（需要把完整的包路径写上），比如：
< insert id="addUser" parameterType="com.po.MyUser">
    insert into user (uname,usex) values(#{uname},#{usex})
< /insert>

为什么实体类不能直接写类名（MyUser）呢？
为此，我查询了MyBatis的官方文档，mybatis已经把常用的数据类型注册了"别名"，因此当使用基本类型或者String类型时可以直接写类型名称，使用实体类型时必须使用全限定类名。

如果不想用全限定类型名称怎么办？
MyBatis提供了两种方法为你的实体类型注册别名： a、XML配置  b、注解方式

a、XML配置：在mybatis的配置文件中，配置以下内容：
< typeAliases>
  < typeAlias alias="MyUser" type="com.po.MyUser"/>
< /typeAliases>
配置好后就可以直接在sql映射文件中使用别名，降低冗余的全限定类名书写。
< insert id="addUser" parameterType="MyUser">
    insert into user (uname,usex) values(#{uname},#{usex})
< /insert>

b、注解方式：
在mybatis的配置文件中，配置如下内容,name里为你的实体类型所在的包，即你想为实体类型注册别名所在类的包路径
< typeAliases>
  < package name="com.po"/>
< /typeAliases>
配置完成好后，在MyUser类中使用@Alias注解
@Alias("MyUser")
public class MyUser{
......
}
这样就可以直接在sql映射文件中使用别名.
< insert id="addUser" parameterType="MyUser">
    insert into user (uname,usex) values(#{uname},#{usex})
< /insert>
在每个com.po包中的JavaBean，如果没有使用注解的情况下，会使用Bean的首字母小写的非限定名来作为它的别名。比如上个例子中，没有使用@Alias(“MyUser”)情况下，自动注册以myUser为别名。          </pre>
          <h3>Mybatis中 Like 的三种使用方式</h3>
          <pre>方式一
在Mybatis中的第一种写法：
< select id="findUserByLikeName1" parameterType="java.lang.String" resultMap="user">
    select * from t_user where name like '%${name}%'
< /select>
$ 这种会有sql注入的问题，需要明白在 Mybatis中 $ 和 # 使用的区别。这种写法也不能加jdbcType=VARCHAR,否则也会报错。
# 符号则运用的场景比较广泛，原因是其工作原理是采用占位符的方式，将参数进行预编译操作，将传入参数统一做字符串处理，所以不存在sql的注入风险

做了个简单的测试：
@Test
public void findUserByLikeName1(){
    List< User> test = userMapper.findUserByLikeName1("Cloud");
    //select * from t_user where name like '%Cloud%'
    System.out.println(test.size());// 查出一条
    List< User> test1 = userMapper.findUserByLikeName1("' or '1=1");
    //select * from t_user where name like '%' or '1=1%'
    // 分析： '1=1%' 成立
    System.out.println(test1.size());// 查出了全部数据
}
注意：排序的字段也容易出现这个问题，在使用的时候也一定要注意。
order by ${orderBy}
第一种方式在实际开发过程中千万要注意，不要写成这样了。

方式二
在Mybatis中的第二种写法：
< select id="findUserByLikeName2" parameterType="java.lang.String" resultMap="user">
    select * from t_user where name like #{name,jdbcType=VARCHAR}
< /select>
直接在代码中拼接%, 不存在sql注入

@Test
public void findUserByLikeName2(){
    String name = "Cloud";
    List< User> test = userMapper.findUserByLikeName2("%" +name+"%");
    // select * from t_user where name like ?
    System.out.println(test.size());
 }
这种方式在一些项目中也会看到。如果没有使用如Mybatis等ORM框架，直接写sql查询就这样拼接了。

方式三（推荐）
在Mybatis中的第三种写法：
< select id="findUserByLikeName3" parameterType="java.lang.String" resultMap="user">
    select * from t_user where name like concat('%',#{name,jdbcType=VARCHAR},'%')
< /select>
concat Mysql和 Oracle区别 ,不存在sql注入
测试：
@Test
public void findUserByLikeName3(){
    String name = "Cloud";
    List< User> test = userMapper.findUserByLikeName3(name);
    // select * from t_user where name like concat('%',?,'%')
    System.out.println(test.size());
}
在实际开发中推荐使用这种方式。

注意
当使用方式三的时候，如果查询的关键字就是% ，那情况会是什么？ 初始化数据中name有9条数据中包含%。
查询的sql如下：
select * from t_user where name like concat(’%’,’%’,’%’)
查出来全部的数据，并不是只包含了%的数据，如果查询_也是一样的。
那这种情况肯定是不满足查询需求的，则需要调整。

①在代码中进行转义
@Test
public void findUserByLikeName3(){
    String name = "%";
    name = name.replaceAll("_", "\\\\_");
    name = name.replaceAll("%", "\\\\%");
    List< User> test = userMapper.findUserByLikeName3(name);
    System.out.println(test.size());
}
②使用ESCAPE
< select id="findUserByLikeName4" parameterType="java.lang.String" resultMap="user">
select * from t_user where name like concat('%',#{name,jdbcType=VARCHAR},'%') ESCAPE '/'
< /select></pre>
          <h3>关于MyBatis的分页方式</h3>
          <pre>一、Limit分页
语法：
limit ${startPos},${pageSize}
在实际项目中我们一般会加上为空为null判断，如下：
< if test="startPos!=null and pageSize!=null">
    limit ${startPos},${pageSize}
< /if>
业务层代码：
< select id="getUserInfo" parameterType="map" resultType="dayu">
    select * from user
    < if test="startPos!=null and pageSize!=null">
        limit ${startPos},${pageSize}
    < /if>
< /select>

List< User> getUserInfo(Map< String,Object> map);

public void selectUser() {
      Map< String,Object> parms = new HashMap<>();
      parms.put("startPos","0");
      parms.put("pageSize","5");
     List< User> users = mapper.getUserInfo(parms);
     for (User map: users){
         System.out.println(map);
    }
}
这些内容其实就时MySQL中的内容，不作再详细讲解了。

二、Mybatis_PageHelper分页插件

1. 引入依赖jar包：
< dependency>
   < groupId>com.github.pagehelper< /groupId>
   < artifactId>pagehelper< /artifactId>
   < version>5.1.7< /version>
< /dependency>
一种是在mybatis的配置文件中配置

2. 但数据配置分页拦截器
下面是但数据源的配置
1）在application.properties或application.yml添加
pagehelper:
  helperDialect: mysql
  offsetAsPageNum: true
  rowBoundsWithCount: true
  reasonable: false

2）在mybatis-config.xml文件中配置：
plugins在配置文件中的位置必须符合要求，否则会报错，顺序如下: properties?, settings?, typeAliases?,
typeHandlers?, objectFactory?,objectWrapperFactory?, plugins?, environments?,
databaseIdProvider?, mappers?
< plugins>
   // com.github.pagehelper为PageHelper类所在包名
   < plugin interceptor="com.github.pagehelper.PageHelper">
        < property name="dialect" value="mysql" />
        // 该参数默认为false
        // 设置为true时，会将RowBounds第一个参数offset当成pageNum页码使用
        // 和startPage中的pageNum效果一样
        < property name="offsetAsPageNum" value="true" />
        // 该参数默认为false
        // 设置为true时，使用RowBounds分页会进行count查询
        < property name="rowBoundsWithCount" value="true" />
        // 设置为true时，如果pageSize=0或者RowBounds.limit = 0就会查询出全部的结果
        // （相当于没有执行分页查询，但是返回结果仍然是Page类型）
        < property name="pageSizeZero" value="true" />
        // 3.3.0版本可用 - 分页参数合理化，默认false禁用
        // 启用合理化时，如果pageNum<1会查询第一页，如果pageNum>pages会查询最后一页
        // 禁用合理化时，如果pageNum<1或pageNum>pages会返回空数据
        < property name="reasonable" value="true" />
	< /plugin>
< /plugins>

3）如果mybatis没有mybatis-config.xml文件，那么就只能直接在spring的配置文件中配置了：
< bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
  < property name="dataSource" ref="dataSource"/>
  < property name="mapperLocations">
    < array>
      < value>classpath:config/mapper/*.xml< /value>
    < /array>
  < /property>
  < property name="typeAliasesPackage" value="com.test.pojo"/>
  < property name="plugins">
    < array>
      < bean class="com.github.pagehelper.PageHelper">
        < property name="properties">
          < value>
                helperDialect=mysql
                offsetAsPageNum=true
                rowBoundsWithCount=true
                reasonable=false
          < /value>
        < /property>
      < /bean>
    < /array>
  < /property>
< /bean>
如果使用的是多数据源，所以这里的配置稍微有些不同，我们需要在sessionFactory这里配置
@Bean(name = "masterSqlSessionFactory")
@Primary
public SqlSessionFactory masterSqlSessionFactory(@Qualifier("masterDataSource") DataSource masterDataSource) throws Exception {
    final SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
    sessionFactory.setDataSource(masterDataSource);
    sessionFactory.setMapperLocations(new PathMatchingResourcePatternResolver().getResources(MasterDataSourceConfig.MAPPER_LOCATION));
    //分页插件
    Interceptor interceptor = new PageInterceptor();
    Properties properties = new Properties();
    //数据库
    properties.setProperty("helperDialect", "mysql");
    //是否将参数offset作为PageNum使用
    properties.setProperty("offsetAsPageNum", "true");
    //是否进行count查询
    properties.setProperty("rowBoundsWithCount", "true");
    //是否分页合理化
    properties.setProperty("reasonable", "false");
    interceptor.setProperties(properties);
    sessionFactory.setPlugins(new Interceptor[] {interceptor});
    return sessionFactory.getObject();
}

设置完PageHelper 之后，使用的话，只需要在查询的sql前面添加PageHelper.startPage(pageNum,pageSize);如果是想知道总数的话，在查询的sql语句后买呢添加getTotal()就可以了。
public  PageInfo< PcOffer>  getOfferList(){
    // 分页插件，设置起始位置和每页大小
    PageHelper.startPage(Integer.parseInt(currentPage), Integer.parseInt(pageSize));
    // 查询出所有商品列表
    List< PcOffer> pcOfferList = pcOfferDao.getOfferList(companyNum, categoryNum, offerNameOrNum, offerNum, status, bindFlag, isSort);
    // 分页工具分页
    PageInfo< PcOffer> pageInfo = new PageInfo< PcOffer>(pcOfferList);
    return pageInfo;
}
在查询的sql语句执行之前，添加一行代码PageHelper.startPage(1, 10);第一个参数表示第几页，第二个参数表示每页显示的记录数
而且在项目中我们可以根据自己项目的情况，定义一个PageBean，来保存分页之后的结果，需要哪些属性，就加入哪些属性，具体可以参考源代码中的PageInfo类的定义</pre>
          <h3>generator自动生成代码</h3>
          <pre>在pom.xml中添加plugin
< plugin>
  < groupId>org.mybatis.generator< /groupId>
  < artifactId>mybatis-generator-maven-plugin< /artifactId>
  < version>1.3.2< /version>
  < dependencies>
      < dependency>
          < groupId>mysql< /groupId>
          < artifactId>mysql-connector-java< /artifactId>
          < version>5.1.35< /version>
      < /dependency>
  < /dependencies>
  < configuration>
      // 配置文件的路径
      < configurationFile>${basedir}/src/main/resources/generatorConfig.xml< /configurationFile>
      < overwrite>true< /overwrite>
  < /configuration>
< /plugin>
${basedir}，该属性的用途就如字面意思根目录，就是获取项目根目录路径的一个属性。

generatorConfig.properties 因为我我项目是多数据源，就写了两套
shparm.driver=com.mysql.jdbc.Driver
shparm.url= jdbc:mysql://10.248.64.132=3307/abs_shparm
shparm.username= root
shparm.password= !2#4%6&8
shparm.pojoPackage= com.example.springdemo.pojo.shparm
shparm.pojoProject= src/main/java
shparm.mapPackage= shparm
shparm.mapProject= src/main/resources/mapper
shparm.daoPackage= com.example.springdemo.dao.shparm
shparm.daoProject= src/main/java

omss.driver= com.mysql.jdbc.Driver
omss.url= jdbc:mysql://10.248.64.132:3307/omss_rds
omss.username= root
omss.password= !2#4%6&8
omss.pojoPackage= com.example.springdemo.pojo.omss
omss.pojoProject= src/main/java
omss.mapPackage= omss
omss.mapProject= src/main/resources/mapper
omss.daoPackage= com.example.springdemo.dao.omss
omss.daoProject= src/main/java


generatorConfig.xml  配置我这里是写死的没走generatorConfig.properties配置
< ?xml version="1.0" encoding="UTF-8"?>
< !DOCTYPE generatorConfiguration PUBLIC "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN" "http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd">
< generatorConfiguration>
    // < properties resource="generatorConfig.properties"/>  根据properties进行配置${omss.driver}
    < context id="test" targetRuntime="MyBatis3">
        < plugin type="org.mybatis.generator.plugins.EqualsHashCodePlugin">< /plugin>
        < plugin type="org.mybatis.generator.plugins.SerializablePlugin">< /plugin>
        < plugin type="org.mybatis.generator.plugins.ToStringPlugin">< /plugin>
        < commentGenerator>
            //这个元素用来去除指定生成的注释中是否包含生成的日期 false:表示保护
            //如果生成日期，会造成即使修改一个字段，整个实体类所有属性都会发生变化，不利于版本控制，所以设置为true
            < property name="suppressDate" value="true" />
            //是否去除自动生成的注释 true：是 ： false:否
            < property name="suppressAllComments" value="true" />
        < /commentGenerator>
           //  数据库链接URL，用户名、密码
        < jdbcConnection driverClass="com.mysql.jdbc.Driver"
                        connectionURL="jdbc:mysql://10.248.64.132:3307/abs_shparm"
                        userId="root" password="!2#4%6&amp;8">
        < /jdbcConnection>

        < javaTypeResolver>
            < property name="forceBigDecimals" value="false" />
        < /javaTypeResolver>
        // 生成pojo模型的包名和位置
        < javaModelGenerator targetPackage="com.example.springdemo.pojo.shparm"
                             targetProject="src/main/java">
            < property name="enableSubPackages" value="true" />
            < property name="trimStrings" value="true" />
        < /javaModelGenerator>
         //生成映射文件的包名和位置
        < sqlMapGenerator targetPackage="shparm"
                          targetProject="src/main/resources/mapper">
            < property name="enableSubPackages" value="true" />
        < /sqlMapGenerator>
        // 生成DAO的包名和位置
        < javaClientGenerator type="XMLMAPPER"
                             targetPackage="com.example.springdemo.dao.shparm"
                             implementationPackage="src/main/java/"
                             targetProject="src/main/java">
            < property name="enableSubPackages" value="true" />
        < /javaClientGenerator>

        // 要生成哪些表,一次生成多个表时 复制下面这段即可
        < table tableName="shparm_nation" domainObjectName="ShparmNation"
               enableCountByExample="false" enableUpdateByExample="false"
               enableDeleteByExample="false" enableSelectByExample="false"
               selectByExampleQueryId="false">< /table>
    < /context>
< /generatorConfiguration>

generator逆向工程出现**WithBLOBs解决办法
原因：
表中有text的字段， 当表中有Text类型的字段时，generator会生成WithBLOBS.java文件并继承entity，同时具有带有text等类型字段的属性
解决办法：
在generator.xml配置文件中加上
< table ....
    < columnOverride column="operation_info" javaType="java.lang.String" jdbcType="VARCHAR"/>
< /table>
          </pre>
          <img src="../../img/crm/mybaits-generator.jpg" width="1000px" height="600px">
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
<style scoped>

</style>
