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
          <h3>1、基于xml配置bean</h3>
          <pre>
<span>① 基于xml配置解析</span>
id=""            唯一标识
class=""         bean对象的全路径
factory-bean：   用于实例化工厂类；
factory-method  用于调用工厂类方法

<span>factory-bean配置bean案例</span>
&#60bean id="carFactory" class="com.baobaotao.ditype.CarFactory" />
&#60bean id="car5" factory-bean="carFactory" factory-method="createCar">

<span>factory-method 通过静态方法构建类的对象</span>
Calendar 类的静态方法getInstance
factory-method="getInstance"通过静态方法获取对象
&#60bean id="a" class="java.util.Calendar" factory-method="getInstance"/>

<span>scope作用域</span>
scope="singleton"
singleton和prototype两种
1）singleton （单例）
此取值时表明容器中创建时只存在一个实例，所有引用此bean都是单一实例。

2）prototype （多例）
每次都重新生成一个新的对象给请求方，之后就任由这个对象“自生自灭”

<span>bean对象初始化之后/销毁之前的操作方法</span>
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

<span>Bean 对象的延迟加载</span>
通过bean元素中lazy-init属性或beans元素的default-lazy-init="true"属性进行设置.两者应用的不同点：
1)	lazy-init: 应用在bean标签中用于指定这个bean的加载策略。
2)	default-lazy-init：应用在beans标签中用于指定所有bean的加载策略

<span>xml给属性注入值</span>
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
<span>list、set、map用property给属性注入值</span>
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
<span>Properties 只能用 property和prop配置默认值，还要配置 util:properties</span>
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
<span>autowire 只适合自动注入引用类型值</span>
autowire="constructor"   根据有参构造器中属性类型给属性赋值，属性类型对应的是bean对象中的class，与id和name无关
autowire="byType"        根据Set方法中形参属性类型给属性赋值，属性类型对应的是bean对象中的class，与id和name无关如果此时有多个bean对象是同样的class属性，此时就会报错
autowire="byName"        根据Set方法中形参属性类型给属性赋值，属性类型对应的是bean对象中的id或name如果此时有这个bean对象是的class与属性类型不匹配则报错
          </pre>
          <h3>2、Spring基于注解的注入</h3>
          <pre>
如果不想在xml文件中配置bean，我们可以给我们的类加上spring组件注解，只需再配置下spring的扫描器就可以实现bean的自动载入&#60context:component-scan base-package="com.bboss.**">&#60/context:component-scan>
<span>常用注解</span>
@Component   该注解的value属性用于指定该bean的id值。
@Repository  用于对DAO实现类进行注解
@Service     用于对Service实现类进行注解
@Controller  用于对Controller实现类进行注解
@Scope("prototype") 或 @Scope("singleton")
@Lazy指定单例bean的加载时机
@Lazy(true) 或 @Lazy(false)
如果@Scope是prototype的话，lazy不起作用
@PostConstruct和@PreDestroy实例 实现初始化方法和销毁方法
<span>属性值自动注入</span>
<span>@Autowired</span>
@Autowired放在成员变量上，或者放在构造方法上，可以和@Qualifier配置使用，根据名称指定bean对象
1)放在成员变量上
@Qualifier("userDaoImpl")
@Autowired
private UserDao  userDao;
2)放在构造方法
@Autowired
public UserServiceImpl( @Qualifier("userDaoImpl") UserDao userDao) {
  super();
  this.userDao = userDao;
}
@Autowired 默认通过反射按类类型注入，当实体类中存在有参构造函数则会根据有参构造其中参数类性注入，这就类似byType和construct，配合上了@Qualifier 实现了 byName注入
<span>@Resource </span>
@Resource 放在成员变量上，或者放在set方法上，可以直接指定bean对象名称
1)放在成员变量上
@Resource(name="userDaoImpl")
private UserDao  userDao;
2)放在构造方法
@Resource(name="userDaoImpl")
public void setUserDao(UserDao userDao) {
  this.userDao = userDao;
}
@Resource 默认通过反射按类类型注入，如果实体类存在set方法则根据set方法中的参数类型依赖注入，如果有name存在，则根据bean对象名称注入
          </pre>
          <h3>3、动态代理</h3>
          <pre>
<span>通过JDK实现动态代理，前提是目标对象实现了接口</span>
package com.bboss.util;
import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;
import java.util.Calendar;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.bboss.service.UserService;
import com.bboss.service.impl.UserServiceImpl;

//  实现handler类，为动态代理做准备
class ServiceHandler implements InvocationHandler {
    // target是目标对象
    private Object target;
    // 有参构造中
    ServiceHandler(Object target) {
      this.target = target;
    }
    // proxy是动态代理对象
    // method目标对象的执行的方法对象，包含当前执行方法信息
    // args当前方法的相关参数
    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
      Object result = null;
      // 制定方法名去增加额外逻辑
      if (method.getName() == "saveMsg") {
        System.out.println("jdk动态代理开始");
        result = method.invoke(target, args);
        System.out.println("jdk动态代理结束");
      }
      return result;
    }

}
//  测试类
public class TestDemo {

  public static void main(String[] args) {

    // 1) 创建 目标对象
    UserService userserviceimpl = new UserServiceImpl();
    // 2) 获取loader目标对象加载器 interfaces目标对象实现接口数组 serviceHandler是继承了handler对象
    ClassLoader loader = userserviceimpl.getClass().getClassLoader();
    Class<?>[] interfaces = userserviceimpl.getClass().getInterfaces();
    ServiceHandler serviceHandler = new ServiceHandler(userserviceimpl);
    // 3) 创建代理对象
    UserService proxy = (UserService) Proxy.newProxyInstance(loader, interfaces, serviceHandler);
    // 4 执行目标方法
    proxy.saveMsg("hello world");

  }
}
<span>通过CGLIB实现动态代理，确定需要引入外部依赖包，有点目标对象实现接口，不实现接口都可使用</span>
package com.bboss.util;
import java.lang.reflect.Method;
import java.util.logging.Logger;
import org.aspectj.lang.annotation.Before;
import org.junit.Test;
import com.bboss.service.UserService;
import com.bboss.service.impl.UserServiceImpl;
import net.sf.cglib.proxy.Enhancer;
import net.sf.cglib.proxy.InvocationHandler;

public class TestJunitDemo {
    private Logger log=Logger.getLogger("TestJunitDemo");
    //  先定义CGLIB，代理对象变量
    private Enhancer enhancer;
    private UserServiceImpl proxy;

    //  执行testJunit前执行的代码
    @org.junit.Before
    public void init() {
       //  创建目标对象
      final UserServiceImpl userService=new UserServiceImpl();
      // 声明CGLIB代理增强器
      enhancer=new Enhancer();
      enhancer.setClassLoader(userService.getClass().getClassLoader());
       //  如果目标对象实现了接口使用setInterfaces   如果没实现接口使用setSuperclass
        // enhancer.setInterfaces(userService.getClass().getInterfaces());
      enhancer.setSuperclass(userService.getClass());
      enhancer.setCallback(new InvocationHandler() {
      public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        // TODO Auto-generated method stub
        Object result = method.invoke(userService, args);
        System.out.println(result);
        return result;
      }
    });
    }

    @Test
    public void testJunit() {
      log.info("test begin");
      proxy=(UserServiceImpl) enhancer.create();
      proxy.saveMes("CGLIB动态代理");
    }
    @After
    public void destory() {
     context.close();
     context=null;
    }
}
          </pre>
          <h3>4、Spring Aop(面向切面编程)</h3>
          <pre>
<span>aop基于xml进行的配置</span>
&#60context:component-scan base-package="com.bboss.**">&#60/context:component-scan>
&#60bean id="logAspectImpl" class="com.bboss.aspect.impl.LogAspectImpl" />
&#60bean id="userServiceImpl" class="com.bboss.service.impl.UserServiceImpl" />
&#60aop:config>
  &#60aop:pointcut id="helloPointcut" expression="bean(userServiceImpl)" />
  &#60aop:aspect ref="logAspectImpl" order="1">
  &#60aop:before pointcut-ref="helloPointcut" method="initMethod" />
  &#60aop:after pointcut-ref="helloPointcut" method="destoryMethod" />
  &#60/aop:aspect>
&#60/aop:config>
<span>基于注解实现aop</span>
启动AspectJ支持   只对扫描过的bean有效
&#60aop:aspectj-autoproxy proxy-target-class="true" />
@Aspect     声明一个切面类
@Order(1)   切面排序
<span>@Pointcut</span>
@Pointcut   定义切点
@Pointcut("execution(* com.savage.aop.MessageSender.*(..))")
//Point签名
private void log(){}
//表示匹配所有方法
execution(* *(..))
//表示匹配com.savage.server.UserService中所有的公有方法
execution(public * com. savage.service.UserService.*(..))
//表示匹配com.savage.server包及其子包下的所有方法
execution(* com.savage.server..*.*(..))
// 匹配指定包中的所有的方法
execution(* com.xys.service.*(..))
// 匹配当前包中的指定类的所有方法
execution(* UserService.*(..))
// 匹配指定包中的所有 public 方法
execution(public * com.xys.service.*(..))
// 匹配指定包中的所有 public 方法, 并且返回值是 int 类型的方法
execution(public int com.xys.service.*(..))
// 匹配指定包中的所有 public 方法, 并且第一个参数是 String, 返回值是 int 类型的方法
execution(public int com.xys.service.*(String name, ..))
匹配类型签名
// 匹配指定包中的所有的方法, 但不包括子包
within(com.xys.service.*)
// 匹配指定包中的所有的方法, 包括子包
within(com.xys.service..*)
// 匹配当前包中的指定类中的方法
within(UserService)
// 匹配一个接口的所有实现类中的实现的方法
within(UserDao+)
匹配 Bean 名字
// 匹配以指定名字结尾的 Bean 中的所有方法
bean(*Service)
切点表达式组合
// 匹配以 Service 或 ServiceImpl 结尾的 bean
bean(*Service || *ServiceImpl)
// 匹配名字以 Service 开头, 并且在包 com.xys.service 中的 bean
bean(*Service) && within(com.xys.service.*)
<span>通知(Advice)</span>
通知定义了切面是什么以及何时调用，何时调用包含以下几种
Before 在方法被调用之前调用通知
After 在方法完成之后调用通知，无论方法执行是否成功
After-returning 在方法成功执行之后调用通知
After-throwing 在方法抛出异常后调用通知
Around 通知包裹了被通知的方法，在被通知的方法调用之前和调用之后执行自定义的行为
用法
@Before("aspect()")   配置前置通知
@After("aspect()")    配置后置通知,使用在方法aspect()上注册的切入点
@Around("aspect()")   配置环绕通知
@Around("@annotation(cacheAble)")
@AfterReturning("aspect()")  配置后置返回通知
//配置抛出异常后通知,使用在方法aspect()上注册的切入点
@AfterThrowing(pointcut="aspect()", throwing="ex")
public void afterThrow(JoinPoint joinPoint, Exception ex){
  if(log.isInfoEnabled()){
    log.info("afterThrow " + joinPoint + "\t" + ex.getMessage());
  }
}
//配置前置通知,拦截含有long类型参数的方法,并将参数值注入到当前方法的形参id中
@Before("aspect()&&args(id)")
public void beforeArgId(JoinPoint joinPoint, long id){
  if(log.isInfoEnabled()){
    log.info("beforeArgId " + joinPoint + "\tID:" + id);
  }
}
<span>基于注解的案例</span>
//  声明一个切面
package com.bboss.aspect.impl;
import java.lang.reflect.Method;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.Signature;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;
import com.bboss.annotation.Permission;
import com.bboss.aspect.LogAspect;

@Component
@Aspect
public class LogAspectImpl{

	public LogAspectImpl() {
		// TODO Auto-generated constructor stub
	}
	@Pointcut("execution(* com.bboss.service..*.*.*(..))")
	public void aspect() {}

	@Before(value="aspect()")
    public void initMethod(JoinPoint joinPoint) {
		//获取连接点所在的目标对象；
		Class<?>  target=joinPoint.getTarget().getClass();
		//  获取连接点的方法签名对象
		Signature signature=joinPoint.getSignature();
		String methodName=signature.getName();
		//  获取连接点方法运行时的入参列表；
		Object []  args=joinPoint.getArgs();

		Class<?>[] parameterTypes=new Class<?> [args.length];
		for(int i=0;i < args.length;i++) {
			parameterTypes[i]=args[i].getClass();
		}

		Method  method =null;
		try {
			//name?-- 这是该方法的名称    parameterTypes?-- 这是参数数组
			  method = target.getDeclaredMethod(methodName, parameterTypes);
		} catch (Exception e) {
			e.getMessage();
			e.printStackTrace();
		}

		if(method.isAnnotationPresent(Permission.class)) {
			System.out.println("这个方法配置了Permission，需要权限检测！！！");
		}

    	System.out.println("aspect init");
    };
    @After(value="aspect()")
    public void destoryMethod() {
    	System.out.println("aspect destory");
    };
}

//  声明一个叫Permission的注解
package com.bboss.annotation;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

//  作用在方法上
@Target(ElementType.METHOD)
//  在运行期起作用
@Retention(RetentionPolicy.RUNTIME)
public @interface Permission {

}







          </pre>
          <h3>5、Junit单元测试</h3>
          <pre>
<span>pom.xml的配置</span>
&#60dependency>
   &#60groupId>junit&#60/groupId>
   &#60artifactId>junit&#60/artifactId>
   &#60version>4.12&#60/version>
   &#60scope>test&#60/scope>
&#60/dependency>
<span>简单案例</span>
@Test的使用:该方法可以不用main方法调用就可以测试出运行结果，是一种测试方法,一般函数都需要有main方法调用才能执行，注意被测试的方法必须是public修饰的,@Test注解是JUnit测试的基础
private  ClassPathXmlApplicationContext context;
//执行@Test之前执行@Before
@Before
public void init() {
  //1、初始化容器
 context=new ClassPathXmlApplicationContext("./bean.xml");
}
//静态工厂产生bean对象
@Test
public void TestMethod() {
 //获取bean对象
 UserService userService=(UserService) context.getBean("userServiceImpl");
 userService.saveMes("test aspect");
}
//执行@Test之后执行@After
@After
public void destory() {
 context.close();
 context=null;
}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'spring',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name,
        catalogue:[]
      }
    },
    mounted(){
      this.$nextTick(function(){
        this.createCatalogue();
      })
    },methods: {
        jump (index) {
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

          function smoothDown () {
            if (total>distance ) {
              distance += step;
              document.body.scrollTop = distance;
              document.documentElement.scrollTop = distance;
              setTimeout(smoothDown, 10)
            } else {
              document.body.scrollTop = total;
              document.documentElement.scrollTop = total
            }
          }
          function smoothUp () {
            if ( total<distance) {
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
        createCatalogue(){
          let object = document.getElementsByTagName('h3');
          var flag=[];
          for(var i=0;i<object.length;i++){
            flag.push({name:object[i].innerHTML})
          }
          this.catalogue=flag;
        }
      }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
