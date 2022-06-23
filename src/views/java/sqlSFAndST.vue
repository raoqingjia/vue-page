<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>简单概述</h3>
          <pre>
SqlSession：用于执行持久化操作的对象，类似于jdbc中的Connection。
SqlSessionFactory：创建SqlSession实例的工厂。
SqlSessionFactoryBuilder：build方法创建SqlSessionFactory实例。
SqlSessionTemplate：MyBatis提供的持久层访问模板化的工具，线程安全，可通过构造参数或依赖注入SqlSessionFactory实例。
Hibernate是与MyBatis类似的orm框架，这里与Hibernate进行一下对比，Hibernate中对于connection的管理，是通过以下几个重要的类：
  SessionFactory：创建Session实例的工厂，类似于MyBatis中的SqlSessionFactory。
  Session：用来执行持久化操作的对象，类似于jdbc中的Connection。
  HibernateTemplate：Hibernate提供的持久层访问模板化的工具，线程安全，可通过构造参数或依赖注入SessionFactory实例。</pre>
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
                title: this.$route.query.name
            }
        },
        mounted() {
            this.$nextTick(function () {
            })
        },
        methods: {
            toggle() {

            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
