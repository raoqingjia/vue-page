<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>JDBC介绍</h3>
          <img src="../../img/java/jdbc01.png" width="400px" height="200px">
          <pre>
JDBC 全称 Java Database Connectivity
JDBC（Java DataBase Connectivity）是Java和数据库（关系型数据库）之间的一个桥梁。
1.是一个规范而不是一个实现，能够执行SQL语句。
2.它由一组用Java语言编写的类和接口组成，各种不同类型的数据库都有相应的实现。
3.它不属于某一个数据库的接口，而是可以用于定义程序与数据库连接规范，通过一整套接口，由各个不同的数据库厂商去完成所对应的实现类，由sun公司提出</pre>
          <img src="../../img/java/jdbc02.png" width="650px" height="250px">
            <pre>
执行sql过程为：类加载-->获取连接-->书写SQL-->执行语句--->处理结果集。

为什么会有连接池的存在？
因为建立数据库连接是一个非常耗时、耗资源的行为，所以通过连接池预先同数据库建立一些连接，放在内存中，应用程序需要建立数据库连接时直接到连接池中申请一个就行，用完后再放回去，极大的提高了数据库连接的性能问题，节省了资源和时间。

什么是数据源
JDBC2.0 提供了javax.sql.DataSource接口，它负责建立与数据库的连接，当在应用程序中访问数据库时 不必编写连接数据库的代码，直接引用DataSource获取数据库的连接对象即可。用于获取操作数据Connection对象。

数据源与数据库连接池组件
数据源建立多个数据库连接，这些数据库连接会保存在数据库连接池中，当需要访问数据库时，只需要从数据库连接池中
获取空闲的数据库连接，当程序访问数据库结束时，数据库连接会放回数据库连接池中。

常用的数据库连接池技术：
这些连接技术都是在jdbc的规范之上建立完成的。有如下：C3P0、DBCP、Proxool和Druid

常见的数据库连接的URL写法
1、—oracle—
驱动：oracle.jdbc.driver.OracleDriver
URL：jdbc:oracle:thin:@machine_name:port:dbname
注：machine_name：数据库所在的机器的名称；
port：端口号，默认是1521

2、—mysql—
驱动：com.mysql.jdbc.Driver
URL：jdbc:mysql://machine_name:port/dbname
注：machine_name：数据库所在的机器的名称；
port：端口号，默认3306</pre>
          <h3>Druid简介</h3>
          <pre>
Druid连接池是阿里巴巴开源的数据库连接池项目。Druid连接池为监控而生，内置强大的监控功能，监控特性不影响性能。功能强大，能防SQL注入，内置Loging能诊断Hack应用行为。
Druid不仅仅是一个数据库连接池，它还包含一个ProxyDriver，一系列内置的JDBC组件库，一个SQL Parser。 支持所有JDBC兼容的数据库，包括Oracle、MySQL、Derby、Postgresql、SQL Server、H2等等。
Druid针对oracle和mysql做了特别优化，比如Oracle的PS Cache内存占用优化，MySql的ping检测优化。Druid提供了MySql、Oracle、Postgresql、SQL-92的SQL的完整支持，这是一个手写的高性能SQL Parser，支持Visitor模式，使得分析SQL的抽象语法树很方便。简单SQL语句用时10微秒以内，复杂SQL用时30微秒。
通过Druid提供的SQL Parser可以在JDBC层拦截SQL做相应处理，比如说分库分表、审计等。Druid防御SQL注入攻击的WallFilter就是通过Druid的SQL Parser分析语义实现</pre>
          <img src="../../img/java/jdbc03.png" width="580px" height="650px">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'colresizable',
    data () {
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
      toggle(){

      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
