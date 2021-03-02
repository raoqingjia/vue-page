<template>
  <div class="article inner">
    <div class="content">
      < class="wrap">
      <h2 class="art-title" v-html="title"></h2>
      <p class="art-time">
        <span v-html="created"></span>
      </p>
      < class="art-content">
        <ul class="catalogue">
          <li v-for="(items,index) in catalogue"><a @click="jump(index)">{{items.name}}</a></li>
        </ul>
        <h3>jdbc</h3>
        <pre>
JDBC(java database connectivity)利用java语言连接数据库并操作数据库
JDBC连接数据库的5步骤：注册数据库、连接数据库、建立传输器执行sql语句、操作结果集、关闭资源
<span>① DriverManager注册数据库</span>
DriverManager.registerDriver(new Driver()); // 低级方法
真实开发中不会用上述用方式注册数据库：他会注册两次数据库，且导致程序与具体数据库绑定耦合度太高
常用Class.forName()反射的方法注册数据库
例如Class.forName("com.mysql.jdbc.Driver");
getConnection(url, user, password)  返回Connection对象连接数据库
DriverManager.getConnection(url, user, password)  三个参数分别是数据库地址，用户名，用户密码
DriverManager.getConnection("jdbc:mysql://localhost:3306/jt_ds", "root", "root");
<span>② Connection连接对象</span>
Connection对象用来连接访问数据库，并返回传输器对象来操作sql语句
createStatement()       返回能够向数据库发送sql的传输器对象,返回Statement类型
prepareStatement(sql)   返回能够发送预编译SQL的传输器，返回PrepareStatement类型，sql表示SQL语句
<span>③ Statement传输器</span>
传输器就是用来执行sql搬取数据库信息
executeQuery()    执行查询类的SQL语句
executeUpdate()   执行增加、删除、修改类型的SQL语句
execute()         执行任意的SQL语句,语法复杂些
<span>④ ResultSet结果集对象</span>
ResultSet用来表示SQL语句执行的结果
next()       将指向数据行记录的索引，有数据则返回true
preview()    将指向数据行记录的索引，类似next
获取数据行中某一列数据的方法，根据数据表中的列下标，列名称来获取对应数据
getString()
getInt()
getDouble()
getObject()
<span>⑤ 关闭资源</span>
为避免代码中抛出异常中断后续代码无法释放资源，应将释放资源的代码放到try..catch中的finally中
Statement stat=null;
try{
}catch{
}finally{
  if(stat!=null){   //防止try..catch中抛出异常中断代码执行未给stat赋值
    try {
      stat.close();
    } catch (SQLException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    }finally{
      stat=null;   // 利用java垃圾回收机制自动清除
    }
  }
}
案例一，建立一个简单的与数据库连接并操作数据的代码
<p class="pre-cmd">package com.jdbcTest;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import com.mysql.jdbc.Driver;
public class JdbcDemo01 {
	public static void main(String[] args) throws SQLException {
    Connection connect=null;  // 如果这里提前设置为null，当connect.close()时会报错
    Statement stat=null;
    ResultSet result=null;
    try {
        // 1）注册数据库
        Class.forName("com.mysql.jdbc.Driver");
        // 2）连接数据库
         connect=DriverManager.getConnection("jdbc:mysql://localhost:3306/jt_ds", "root", "root");
        // 3）与数据库建立传输器,创建传输器对象
         stat=connect.createStatement();
        // 4）利用传输器发送sql语句到数据库，获取数据表
        String sql="select * from user;";
         result= stat.executeQuery(sql);
        // 5）遍历结果，打印信息
        while(result.next()){
          // 遍历获取每一行数据
          int id=result.getInt(1);    // 根据列下标，获取第一列数据
          String name=result.getString("name");  // 根据列title名，获取数据
          double money=result.getDouble("money");
          System.out.println(id+" : "+name+" : "+money);
        }
      } catch (Exception e) {
      // TODO: handle exception
      e.getMessage();
      e.printStackTrace();
    }finally{
      // 6）释放资源 释放资源是有顺序的，最后释放最先开启的
      if(result!=null){   // 避免resul还未被复制就抛异常终止了
         try {
            result.close();
          } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
          }finally{
            result=null;   // 变量为null会被java垃圾回收机制清除
          }
      }
      if(stat!=null){
        try {
          stat.close();
        } catch (SQLException e) {
          e.printStackTrace();
        }finally{
          stat=null;
        }
      }
      if(connect!=null){
        try {
          connect.close();
        } catch (SQLException e) {
          e.printStackTrace();
        }finally{
          connect=null;
        }
      }
    }
    /*
     * 注意
     * 1. 只有new Driver()是jdbc下的包，其他都是java.sql的包
     * 2. main上不能抛出异常，但是这里暂时忽略
     * 3.DriverManager.registerDriver(new Driver());
     *   真实开发中不会用这用方式注册数据库：他会注册两次数据库，且导致程序与具体数据库绑定耦合度太高
     *   推荐用 Class.forName("");
     * 4. DriverManager.getConnection(url, user, password)  三个参数分别是数据库地址，用户名，用户密码
     * 5. jdbc:mysql://localhost:3306/jt_ds
     *    jdbc:mysql: 是协议名   localhost:3306 主机加端口号  jt_ds 数据库的名字
     * 6. 用到的实例方法
     *  Connection类
     *  createStatement();  建立传输器
     *  Statement类
     *  stat.executeQuery(sql) 执行sql查询
     *  ResultSet类
     *  .next()遍历ResultSet类的对象，返回boolean，为true表示存在数据
     *  getString()    根据数据表中的列下标，列名称获取对应数据
     *  getInt()
     *  getDouble()
     */
	}
  }</p></pre>
        <h3>JDBCUtils工具类实现</h3>
        <pre>
JDBC在增删改查程序中，有大量重复代码，可将重复代码提取到JDBCUtils工具类中的方法中，需要时调取方法
<span>① 创建JDBCUtils类</span>
实现步骤
1、创建一个类com.utils.JDBCUtils
2、将JDBCUtils类中的构造方法私有化，防止别人创建该类的实例
3、提供一个getConnection()方法，用于获取数据库连接对象
4、提供一个close方法，用于释放资源
5、利用conf.properties配置文件修改JDBCUtils类中参数
<p class="pre-cmd">
package com.Utils;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;
public class JDBCUtils {
  // private私有构造器，保证该类不会被重写修改
	private JDBCUtils() {}
	private static Properties prop;
	// 保证项目启动时读取文件中配置信息，而不是每次加载都读取配置信息浪费资源
	static{
		 prop=new Properties();
		// path是conf.properties配置文件的路径
		String path="conf.properties";
		try {
			prop.load(new FileInputStream(path));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	public static Connection getConnection() {
		try {
			// 注册数据库，并连接数据库
			Class.forName(prop.getProperty("driverClass"));
			Connection connect=DriverManager.getConnection(
					prop.getProperty("jdbcUrl"),
					prop.getProperty("user"),
					prop.getProperty("password"));

			return  connect;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return  null;
	}
	// 将释放资源代码提出
	public static void close(Connection connect,Statement stat,ResultSet result){
		 if(result!=null){
			 try {
				result.close();
			} catch (SQLException e) {
				result=null;
				e.printStackTrace();
			}
		 }
		 if(stat!=null){
			 try {
				 stat.close();
			 } catch (SQLException e) {
				 stat=null;
				 e.printStackTrace();
			 }
		 }
		 if(connect!=null){
			 try {
				 connect.close();
			 } catch (SQLException e) {
				 connect=null;
				 e.printStackTrace();
			 }
		 }
	}
}
</p>
<span>② conf.properties配置文件</span>
该配置文件是以键值对存在的，且该文件配置中不需要分号结尾避免末尾有空格,例如下面配置内容
<p class="pre-cmd">driverClass=com.mysql.jdbc.Driver
jdbcUrl=jdbc:mysql://localhost/jt_ds
user=root
password=root</p>
通过java.util.Properties包Properties类获取conf.properties中配置信息
为保证项目启动时读取文件中配置信息，而不是每次加载都读取配置信息浪费资源，将调用conf.properties配置文件代码放入静态代码块中
<p class="pre-cmd">private static Properties prop;
static{
   prop=new Properties();
  // path是conf.properties配置文件的路径
  String path="conf.properties";
  try {
    prop.load(new FileInputStream(path));
  } catch (IOException e) {
    // TODO Auto-generated catch block
    e.printStackTrace();
  }
}
调用方法
prop.getProperty("jdbcUrl")
prop.getProperty("user")
  prop.getProperty("password")</p></pre>
        <h3>SQL注入攻击</h3>
        <pre>
<span>① 什么是SQL注入攻击</span>
所谓SQL注入，就是通过把SQL命令插入到Web表单提交或输入域名或页面请求的查询字符串，最终达到欺骗服务器执行恶意的SQL命令
例如下面的案例
<p class="pre-cmd">stat=connect.createStatement();
String sql="select * from userlogin where name='"+user+"' and password='"+password+"';";
result=stat.executeQuery(sql);
当输入的select * from userlogin where name='zhangshan' #' and password='';也会执行sql语句，因为#是sql的注释语句，后面的where语句未执行</p>
解决方法就是用PrepareStatement代替Statement，PrepareStatement是Statement的子接口
<span>② PrepareStatement类</span>
PrepareStatement采用预编译机制，提前将SQL语句的骨架发送给数据库编译并确定下来，传输的只能是sql参数，且省去了拼接SQL参数的麻烦
如果参数值中包含SQL关键字或者特殊符号，也只能通过文本来处理，防止了sql注入攻击
PrepareStatement对象发送的SQL语句到数据库编译后就被缓冲下来，执行时如果和缓冲中相同就不需要编译而是直接执行，能够尽最大的可能提高执行效率
<p class="pre-cmd">PreparedStatement prestat=null;
//先定义好SQL语句，注意？是你传参位置
String sql="select * from userlogin where name= ? and password= ?;";
prestat=connect.prepareStatement(sql);  //这里要注入sql语句
// 千万要记住设置参数的值  第一个值是？的位置，第二个参数是传输的值
prestat.setString(1 , user);
prestat.setString(2 , password);
result = prestat.executeQuery();</p>
setString(1,userName)  为sql语句中的第一个 ？参数设置String类型userName的值
小知识点：PrepareStatement是Statement的子类，当Statement.close()关闭了就相当于PrepareStatement也关闭了</pre>
<h3>批量处理</h3>
<pre>
<span>① 什么事批处理</span>
批处理：能够将大量的SQL一次性发给数据库服务器的一门技术
如果有大量的SQL语句一条一条的发送给数据库执行，效率低下，可用批处理解决，将这些大量的SQL语句打成一批，一次性放给数据库，服务器收到之后，依次执行其中SQL语句
批量处理可以利用Statement和PreparedStatement两个类来执行
批量处理主要应用的两个方法
addBatch();
executeBatch();
通常是通过先使用addBatch()来缓存数据，将多条sql语句缓存起来，再通过executeBatch()方法一次性发给数据库，提高执行效率，如果所有命令都成功运行，则返回一个更新计数数组
注意：
使用addBatch()缓存数据时要在循环中设置条件，当循环达到指定次数后执行executeBatch()，将缓存中的sql全部发给数据库，然后执行clearBatch()清楚缓存，否则数据过大是会出现OutOfMemory(内存不足)。
提高批处理的效率可以关闭事务，如果开启了事务，默认sql语句执行一条就提交一句
<span>② PreparedStatement批处理优点</span>
优点：
防止SQL语句注入攻击
运行效率更高
当执行的SQL语句的骨架相同时，PreparedStatement的SQL语句骨架只需要写一次，
缺点：
在一次批处理中只能执行结构相同的SQL语句,Statement类正好相反
<span>③ PreparedStatement实现批处理案例</span>
<p class="pre-cmd">package com.batch;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import com.Utils.JDBCUtils;
public class PrepareStatementBatch {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// TODO Auto-generated method stub
				Connection connect=null;
				PreparedStatement prestat=null;
				ResultSet result=null;
				try {
					System.out.println("批量处理开始");
					connect=JDBCUtils.getConnection();
					//如果开启了事务，默认sql语句执行一条就提交一句
					connect.setAutoCommit(false);  // 关闭事务
					String sql="insert into statement_batch values (null,?)";
					prestat=connect.prepareStatement(sql);
					long start=System.currentTimeMillis();
					for(int a=0;a<1000;a++){
						prestat.setString(1, "emily"+a);
						prestat.addBatch();  //加入到批处理中
					}
					// 将批处理发给服务器
					prestat.executeBatch();
					//因为关闭了事务，当1000条sql执行完毕，commit()提交一次
					connect.commit();
					long end=System.currentTimeMillis();
					System.out.println("批量处理完毕耗时="+(end-start));
				} catch (Exception e) {
					// TODO: handle exception
				}finally{
					JDBCUtils.close(connect, prestat, result);
				}
	}
}
</p>
          </pre>
      <h3>连接池</h3>
      <pre>
<span>为什么使用连接池</span>
在开发中频繁的开关连接是一件非常消耗资源和时间的操作，会导致程序执行效率低下，因此可以在程序中创建一个连接池容器，在程序启动时就初始化一批连接放在连接池中，当用户需要时就从连接池中获取一个连接，用完连接之后再还回到连接池中，这样可以减少连接开关的次数，提高程序效率
简单来说就是避免connection连接时的先建桥，之后过河又拆桥，创建连接池后直接用连接池中的连接就行
连接池是有好多封装插件的，可以从网上查找，例如C3P0连接池
<span>如何实现连接池</span>
利用java.sql.DataSource包下的DataSource接口创建连接池，连接池也称数据源
开发步骤
1.创建连接池MyPool类，实现DataSource接口,重写所有方法；
2.创建LinkedList容器泛型为Connection，当做连接池用于存放数据库连接
3.提供一个静态代码块，在程序启动时初始化一批连接放在连接池中共享
4.实现getConnection重写方法，用来获取连接池中的连接
5.提供一个方法returnConn方法，用来将连接还回到连接池中
6.创建TestMyPool类测试连接池
<p class="pre-cmd">编写连接池类
package com.pool;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.SQLFeatureNotSupportedException;
import java.util.LinkedList;
import java.util.List;
import java.util.logging.Logger;
import javax.sql.DataSource;
import com.Utils.JDBCUtils;
    //1 实现DataSource接口,重写所有方法；
public class MyPool implements DataSource {
	// 2 创建容器LinkedList，当做连接池会用用于存放数据库连接
	private static List< Connection> list=new LinkedList< Connection>();
 	// 3 提供一个静态代码块，在程序启动时初始化一批连接放在连接池中共享
	static{
		if(list.size()==0){
			// 初始化建立连接，和当连接池中的连接耗尽时，再建立三个连接放到连接池中共享
			// 连接池连接数量可以写为配置文件
			for(int a=0;a<5;a++){
				Connection connect=JDBCUtils.getConnection();
				list.add(connect);
			}
		}
	}
	// 4 实现getConnection重写方法，用来获取连接池中的连接
	@Override
	public Connection getConnection() throws SQLException {
		// remove()返回获取指定下标元素并删除，此处是在拿连接
		Connection conn =list.remove(0);
		System.out.println("成功获取一个连接，连接池中还剩"+list.size()+"个连接");
		return conn;
	}
	// 5 提供一个方法returnConn方法，用来将连接还回到连接池中
	public void  returnConn(Connection conn){
		// 判断conn是否为一个正常的连接
		try {
			if(conn!=null && !conn.isClosed()){
				list.add(conn);
				System.out.println("成功还回一个连接，连接池中还剩"+list.size()+"个连接");
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			System.out.println("捕获isClosed的异常");
			e.printStackTrace();
		}
	}
	@Override
	public PrintWriter getLogWriter() throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public void setLogWriter(PrintWriter out) throws SQLException {
		// TODO Auto-generated method stub
	}

	@Override
	public void setLoginTimeout(int seconds) throws SQLException {
		// TODO Auto-generated method stub
	}
	@Override
	public int getLoginTimeout() throws SQLException {
		// TODO Auto-generated method stub
		return 0;
	}
	@Override
	public Logger getParentLogger() throws SQLFeatureNotSupportedException {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public < T> T unwrap(Class< T> iface) throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public boolean isWrapperFor(Class<?> iface) throws SQLException {
		// TODO Auto-generated method stub
		return false;
	}
	public Connection getConnection(String username, String password) throws SQLException {
		return null;
	}
}
// 测试自定义连接池
package com.pool;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import com.Utils.JDBCUtils;
public class TestMyPool {
	public static void main(String[] args) {
		Connection connect =null;
		Statement stat=null;
		ResultSet result=null;
		// 创建连接池实例，用于连接
		MyPool pool=new MyPool();
		try {
			// 从连接池中获取一个连接
			connect=pool.getConnection();
			stat=connect.createStatement();
			String sql="select * from  userlogin where id = 1;";
			result=stat.executeQuery(sql);
			if(result.next()){
				System.out.println(result.getString("name")+"  "+result.getString("password"));
			}
		} catch (Exception e) {
			e.printStackTrace();
			// TODO: handle exception
		}finally{
			// 千万记住用完连接不是关闭操作，而是还回到连接池中,第一个参数设为null即可，其他参数close关闭
			JDBCUtils.close(null, stat, result);
			// 将连接还回到连接池中
			pool.returnConn(connect);
		}
	}

}</p>

<span>装饰者模式</span>
装饰者模式又叫作包装者模式，这是一种对已有对象进行包装来扩张来扩张对象功能的一种模式
如果想对已有对象方上的方法进行改造，可以先写一个装饰类，提供一个构造方法将被装饰者传入其中，并保存到类的内部，基于已有对象的功能提供更强的功能
<span>利用装饰者模式将Connection对象close方法的改造</span>
需求：将close方法改造，该造为将连接还回到连接池中而不是直接关闭，这样方便释放资源
通过装饰者 模式对Connection中的close方法进行改造
1.写一个装饰类，要求装饰类必须要和被装饰者所属的类实现同一个接口或者继承同一个父类
2.装饰类提供构造方法，将被装饰者传入，并保存在装饰类的内容中
3.对于想要改造的方法直接进行改造，对于不想改造的方法，利用生成代理方法source - generate delegate methods，直接调用原有对象上的方法
decorator
<p class="pre-cmd">// 1、創建装饰类  
public class ConnDecorator implements Connection {
	// 保存被装饰着
	private Connection conn;
	private MyPool pool;
	// 2.提供一个接受被装饰者的构造方法，并保存被装饰着
	public ConnDecorator(Connection conn, MyPool pool) {
		this.conn = conn;
		this.pool = pool;
	}
   // 3、改造close方法为还连接，还到连接池中

	@Override
	public void close() throws SQLException {
		pool.returnConn(conn);
	}
  public < T> T unwrap(Class< T> iface) throws SQLException {
		return conn.unwrap(iface);
	}
  其他的重载方法........
}
被装饰者,
主要看第四部实现getConnection重写方法，调用ConnDecorator装饰类
  //1 实现DataSource接口,重写所有方法；
public class MyPool implements DataSource {
	// 2 创建容器LinkedList，当做连接池会用用于存放数据库连接
	private static List< Connection> list=new LinkedList< Connection>();
 	// 3 提供一个静态代码块，在程序启动时初始化一批连接放在连接池中共享
	static{
		if(list.size()==0){
			// 初始化建立连接，和当连接池中的连接耗尽时，再建立三个连接放到连接池中共享
			// 连接池连接数量可以写为配置文件
			for(int a=0;a<5;a++){
				Connection connect=JDBCUtils.getConnection();
				list.add(connect);
			}
		}
	}
	// 4 实现getConnection重写方法，用来获取连接池中的连接
	@Override
	public Connection getConnection() throws SQLException {
		// remove()返回获取指定下标元素并删除，此处是在拿连接
		Connection conn =list.remove(0);
		System.out.println("成功获取一个连接，连接池中还剩"+list.size()+"个连接");
		//return返回的conn是Connection类型，Connection类中的close()方法是关闭资源效果；
		// 我要通过ConnDecorator包装类，将close改造成还连接到资源池的效果，而不是直接关闭资源
		// 1.直接 return conn； close()是关闭资源效果
		// return conn;
		// 2，调用ConnDecorator装饰类，close()还连接到连接池的效果  下面的this表示MyPool点睛之笔啊
		ConnDecorator decorator=new ConnDecorator(conn,this);
		return decorator;
	}
	// 5 提供一个方法returnConn方法，用来将连接还回到连接池中
	public void  returnConn(Connection conn){
		// 判断conn是否为一个正常的连接
		try {
			if(conn!=null && !conn.isClosed()){
				list.add(conn);
				System.out.println("成功还回一个连接，连接池中还剩"+list.size()+"个连接");
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			System.out.println("捕获isClosed的异常");
			e.printStackTrace();
		}
	}
   ........
}</p>
<span>C3P0连接池</span>
利用C3P0连接池就不必自定义连接池，C3P0连接池中的close()方法会自动还连接到连接池中，不必将自定义连接池中的connection的close()方法通过装饰类修改为还连接到连接池中，而不是直接关闭资源
<span>如何调用C3P0连接池</span>
1.导入c3p0开发包
2.创建连接池实例
3.设置连接数据库的基本信息
4.通过连接池实例调用getConnection方法获取连接
5.调用close方法将连接还到连接池中
<p class="pre-cmd">package com.c3p0;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import com.Utils.JDBCUtils;
import com.mchange.v2.c3p0.ComboPooledDataSource;
public class TestC3P0 {
   // 利用c3p0连接池，他的close方法是还连接到连接池中，而不是关闭资源
	public static void main(String[] args) {
		Connection connect =null;
		Statement stat=null;
		ResultSet result=null;
		// 利用c3p0创建连接池实例，用于连接
		ComboPooledDataSource pool = new ComboPooledDataSource();
		try {
			//1. 对c3p0设置数据库连接的基本信息
			//pool.setDriverClass("com.mysql.jdbc.Driver");
			//pool.setJdbcUrl("jdbc:mysql://localhost/jt_ds");
			//pool.setUser("root");
			//pool.setPassword("root");
			//2.利用src下的c3p0-config.xml的配置
			//3.利用src下的c3p0.properties的配置
			// 从连接池中获取一个连接
			connect=pool.getConnection();
			stat=connect.createStatement();
			String sql="select * from  userlogin where id = 1;";
			result=stat.executeQuery(sql);
			if(result.next()){
				System.out.println(result.getString("name")+"  "+result.getString("password"));
			}
		} catch (Exception e) {
			e.printStackTrace();
			// TODO: handle exception
		}finally{
			   JDBCUtils.close(connect, stat, result);
		}
	}
}</p>
<span>设置连接数据库的基本信息三种方式</span>
第一种方式：利用set方法配置信息
ComboPooledDataSource pool = new ComboPooledDataSource();
pool.setDriverClass("com.mysql.jdbc.Driver");
pool.setJdbcUrl("jdbc:mysql://localhost/jt_ds");
pool.setUser("root");
pool.setPassword("root");
第二种方式：xml配置
在src目录下或和src平级的目录下增加c3p0-config.xml
< ?xml version="1.0" encoding="UTF-8"?>
< c3p0-config>
  < default-config>
    < property name="driverClass">com.mysql.jdbc.Driver< /property>
    < property name="jdbcUrl">jdbc:mysql://localhost/jt_ds< /property>
    < property name="user">root< /property>
    < property name="password">root< /property>
  < /default-config>
< /c3p0-config>
第三种方式：properties配置
在src目录下或和src平级的目录下增加c3p0.properties文件，配置如下
c3p0.driverClass=com.mysql.jdbc.Driver
c3p0.jdbcUrl=jdbc:mysql://localhost/jt_ds
c3p0.user=root
c3p0.password=root
推荐使用第二种
      </pre>

      <h3>WebServer概述</h3>
      <pre>
1.开发需求
利用之前学过的javase的基础知识，实现一个基于HTTP协议的web服务器程序，能够接受客户端的请求并处理，且响应后将结果发送给客户端

<span>http协议</span>
http协议规定了浏览器客户端和服务器之间通信的规则，规定了浏览器发送请求信息时该符合什么样的格式，也规定了服务器在相应数据时该符合什么样的内容
http信息包含两部分：http请求信息，及浏览器向服务器发送的请求信息，和http响应信息，即服务器向浏览器做出的响应信息
 <span> HTTP请求</span>
1）请求行(重点关注: GET  /index.html HTTP/1.1
 GET : 请求方式
 / index.html： 请求资源的路径
 HTTP/1.1 请求所遵循的协议及版本
2）若干请求头
  Accept ： 浏览器能够接收的数据格式
  Accept-Language ： 浏览器能够接收的语音环境
  ...

3）请求实体内容
 如果请求方式为get提交，请求实体中没有任何数据
 如果请求方式为post提交，并且在发送请求时，懈怠了数据

 <span> HTTP响应</span>
1) 状态行：响应遵循的协议及版本、状态码（200）、描述信息
HTTP/1.1 ：遵循的协议及版本
200/404/500：状态码，一个三位数字，表示请求处理的结果
2）若干响应头：定义服务器响应信息相关的信息
Content-Type：text/html  响应的是一个html格式的网页
Content-Type：image/jpeg  响应的是一个jpg格式的图片
Content-Type：text/ico  响应的是一个ico格式的图片
Content-Length:
(此处有一个空行，表示上面的响应头结束了，下面为响应实体内容)
3）响应实体内容，在浏览器中实际显示的内容
发送实体内容一定是用PrintStream 的write()方法，书写http格式用println()方法
<span>一个简单的http响应</span>
PrintStream ps=new PrintStream(socket.getOutputStream());
ps.println("HTTP/1.1 200 OK");
ps.println("Content-Type:text/html");
ps.println("Content-Length:"+ps.length());
ps.println("");  //单独发送一个空格
ps.write(data.getBytes());


</pre>
1）1 copy qualified name 来复制完整的类全名，注意光标别放在对象上，要放在类上
2）my.ini 配置mysql连接开发工具的编码格式 latin1 改为 gbk或utf8
3）control+shift+o 导入包快捷键
4）control + 1 try..catch
5）可以有多个类，但只能有一个public的类，并且public的类名必须与文件名相一致。一个文件中可以只有非public类，如果只有一个非public类，此类可以跟文件名不同。
6）递归：一个方法执行期间直接或间接调用方法自身的现象较递归
7）使用C3P0报错：java.lang.NoClassDefFoundError: com/mchange/v2/ser/Indirector
c3p0数据库连接池的辅助包，没有这个包系统启动的时候会报classnotfoundexception，这是c3p0-0.9.2版本后分离出来的包，0.9.1的时候还是一个包就搞定的
解决办法：
加上mchange-commons-java-0.2.3.4.jar包
8）有的时候导包可能造成导包错误，这时候当前项目回出现差号或感叹号，此时选中项目右键build path - config build path - 删除错误导包路径即可，
或者你导入的包可能不是jar包，导的包有问题
9）java的key：value格式是映射关系，而且java中很重视映射关系，利用map设置对应的映射
而且java中很少有if...else if 和 switch 这种判断，java多是把这种多条件判断放在一个map映射中，通过key获取value

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
