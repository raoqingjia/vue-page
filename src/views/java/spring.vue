<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>基于xml的注入</h3>
          <pre>
<span>① 什么是面向对象/过程</span>
id=""  唯一标识
class="" bean对象的全路径


factory-bean：用于实例化工厂类；
factory-method：用于调用工厂类方法。

factory-bean配置bean
&#60bean id="carFactory" class="com.baobaotao.ditype.CarFactory" />
&#60bean id="car5" factory-bean="carFactory" factory-method="createCar">

factory-method

通过静态方法构建类的对象 ，
Calendar 类的静态方法getInstance
factory-method="getInstance"通过静态方法获取对象
&#60bean id="a" class="java.util.Calendar" factory-method="getInstance"/>


scope作用域
singleton和prototype两种
1）singleton （单例）
此取值时表明容器中创建时只存在一个实例，所有引用此bean都是单一实例。

2）prototype （多例）
每次都重新生成一个新的对象给请求方，之后就任由这个对象“自生自灭”


init-method="born"
destroy-method="over">&#60/bean>
//控制生命周期born
	public void born(){
		System.out.println("HelloService.born()");
	}

	//控制生命周期over
	public void over(){
		System.out.println("HelloService.over()");
	}


Bean 对象的延迟加载
通过bean元素中lazy-init属性或beans元素的default-lazy-init="true"属性进行设置.两者应用的不同点：
1)	lazy-init: 应用在bean标签中用于指定这个bean的加载策略。
2)	default-lazy-init：应用在beans标签中用于指定所有bean的加载策略



测试类
@Test的使用:该方法可以不用main方法调用就可以测试出运行结果，是一种测试方法,一般函数都需要有main方法调用才能执行，注意被测试的方法必须是public修
饰的,@Test注解是JUnit测试的基础

@Before//执行@Test之前执行@Before
	public void init(){
//		 * 1，初始化容器
		context=new ClassPathXmlApplicationContext(
				"applicationContext.xml");
	}

	@After//执行@Test之后执行@After
	public void close(){
		context.close();
	}

	//静态工厂产生bean对象
	@Test
	public void StaticFactory(){
		//获取bean对象







给属性注入值

	&#60bean id="dataSource" class="com.bboss.DataSource">
                &#60constructor-arg value='admin'>&#60/constructor-arg>
		&#60constructor-arg value='123'>&#60/constructor-arg>
		&#60constructor-arg value='3306'>&#60/constructor-arg>
		&#60constructor-arg ref='jdbcDemo'>&#60/constructor-arg>
        &#60/bean>

	&#60bean id="dataSource" class="com.bboss.DataSource">
		&#60property name="userName" value="admin">&#60/property>
		&#60property name="passWord" value="123">&#60/property>
		&#60property name="host" value="3306">&#60/property>
		&#60property name="jdbcDemo" ref="jdbcDemo">&#60/property>
	&#60/bean>


list  set  map  只能用 property 依赖注入
	&#60bean id="dataSource" class="com.bboss.DataSource">
		&#60property  name="classRoom">
		   &#60list>
		      &#60value>初一三班&#60/value>
		      &#60value>初二五班&#60/value>
		      &#60value>初三二班&#60/value>
		   &#60/list>
		&#60/property>
		&#60property  name="studentInfo">
		   &#60map>
		      &#60entry key="name" value="李明">&#60/entry>
		      &#60entry key="age" value="17">&#60/entry>
		      &#60entry key="gender" value="boy">&#60/entry>
		   &#60/map>
		&#60/property>
	&#60/bean>

Properties 只能用 property 依赖注入 还要配置 util:properties
	&#60bean id="dataSource" class="com.bboss.DataSource">
		&#60property name="config">
		  &#60props>
		     &#60prop key="location">#{cfg.location}&#60/prop>
		     &#60prop key="host">#{cfg.host}&#60/prop>
		  &#60/props>
		&#60/property>
	&#60/bean>

&#60util:properties id="cfg" location="classpath:config.properties">&#60/util:properties>
使用 &#60util:properties> 标签

在xml配置文件中要引入xmlns:util="http://www.springframework.org/schema/util"

.properties 文件中是 key=value 使用=号 不用：冒号


autowire 只适合自动注入引用类型值

autowire="constructor"  根据有参构造器中属性类型给属性赋值，属性类型对应的是bean对象中的class，与id和name无关

autowire="byType"      根据Set方法中形参属性类型给属性赋值，属性类型对应的是bean对象中的class，与id和name无关
                        如果此时有多个bean对象是同样的class属性，此时就会报错

autowire="byName"       根据Set方法中形参属性类型给属性赋值，属性类型对应的是bean对象中的id或name
                        如果此时有这个bean对象是的class与属性类型不匹配则报错

          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'linux',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    mounted(){
      this.$nextTick(function(){

      })
    },
    computed:{

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
