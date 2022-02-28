<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <img src="../../img/java/jdbc01.png" width="400px" height="200px">
          <pre>
JDBC 全称 Java Database Connectivity
Java数据库连接是Java语言中用来规范客户端程序如何来访问数据库的应用程序接口，提供了诸如查询和更新数据库中数据的方法。JDBC也是Sun Microsystems的商标。我们通常说的JDBC是面向关系型数据库的。
这种类型的驱动把所有JDBC的调用传递给ODBC，再让后者调用数据库本地驱动代码（也就是数据库厂商提供的数据库操作二进制代码库，例如Oracle中的oci.dll）

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
