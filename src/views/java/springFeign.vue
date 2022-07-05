<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>什么是Feign基本使用</h3>
          <pre>一、什么是Feign
Feign是Netflix开发的声明式、模板化的HTTP客户端， Feign可以帮助我们更快捷、优雅地调用HTTP API
Feign 是⼀个 HTTP 请求的轻量级客户端框架。通过 接口 + 注解的方式发起 HTTP 请求调用，面向接口编程，而不是像 Java 中通过封装 HTTP 请求报文的方式直接调用。服务消费方拿到服务提供方的接⼝，然后像调⽤本地接⼝⽅法⼀样去调⽤，实际发出的是远程的请求。让我们更加便捷和优雅的去调⽤基于 HTTP 的 API，被⼴泛应⽤在 Spring Cloud 的解决⽅案中

结合 Spring Cloud 使用方式
第一步： 引入相关依赖
< dependency>
    < groupId>org.springframework.cloud< /groupId>
    < artifactId>spring-cloud-starter-openfeign< /artifactId>
< /dependency>

第二步： 在项目的启动类上添加 @EnableFeignClients 注解启用 Feign 客户端功能
@EnableEurekaClient
@SpringBootApplication
@EnableFeignClients
public class LoginStart {
	public static void main(String[] args) {
		SpringApplication.run(LoginStart.class, args);
	}
}

第三步： 创建 HTTP 调用接口，并添加声明 @FeignClient 注解
首先是对FeignClient里的常用属性
1. contextId ，当有多个服务调用方法不想写在一个接口里，就要使用到
2. name：指定FeignClient的名称，如果项目使用了Ribbon，name属性会作为微服务的名称，用于服务发现
3. url:  一般用于调试，可以手动指定@FeignClient调用的地址
4. fallback: 定义容错的处理类，当调用远程接口失败或超时时，会调用对应接口的容错逻辑，fallback指定的类必须实现@FeignClient标记的接口
5. fallbackFactory: 工厂类，用于生成fallback类示例，通过这个属性我们可以实现每个接口通用的容错逻辑，减少重复的代码
6. path: 定义当前FeignClient的统一前缀
7. configuration: Feign配置类，可以自定义Feign的Encoder、Decoder、LogLevel、Contract
8. decode404:当发生http 404错误时，如果该字段位true，会调用decoder进行解码，否则抛出FeignException

@FeignClient(name="custorm",fallback=Hysitx.class)
public interface ComputeClient {
    @RequestMapping(value="/custorm/getTest",method = RequestMethod.POST,
		headers = {"Content-Type=application/json;charset=UTF-8"})
    Integer add(@RequestParam(value = "a") Integer a, @RequestParam(value = "b") Integer b);
}
编写熔断类，发生错误时回调：
import java.util.List;
import org.springframework.stereotype.Component;
@Component
public class Hysitx implements IRemoteCallService{
	@Override
	public List< String> test(String[] names) {
		System.out.println("接口调用失败");
		return null;
	}
}

设置多个属性时，可以使用Map
@FeignClient(name="custorm",fallback=Hysitx.class)
public interface IRemoteCallService {
	@RequestMapping(value="/custorm/getTest",method = RequestMethod.POST)
  List< String> test(@RequestParam("names") String[] names, @RequestHeader MultiValueMap< String, String> headers);
}
@Header注解
@FeignClient(name="custorm",fallback=Hysitx.class)
public interface IRemoteCallService {
	@RequestMapping(value="/custorm/getTest",method = RequestMethod.POST)
	@Headers({"Content-Type: application/json;charset=UTF-8"})
    List< String> test(@RequestParam("names") String[] names);
}</pre>
          <h3>Feign请求超时问题</h3>
          <pre>一、先了解一下Fegin、Hystrix、Ribbon三个组件来说它们之间是什么样的关系
Ribbon介绍
Ribbon最常听到的一个名词就是客户端负载均衡，就是说将服务端的负载均衡放到了客户端来实现。对于服务端来说可以启动多个不同端口的实例，通过客户端负载均衡来去调用这些实例，Ribbon会通过对应的策略（轮询、权重、随机等）来去连接这些机器。
Ribbon的工作原理，Ribbon工作时分为两步：
第一步 先选择 Eureka Server, 它优先选择在同一个Zone且负载较少的Server；
第二步 再根据用户指定的策略，在从Server取到的服务注册列表中选择一个地址。Ribbon提供了多种策略，例如轮询、随机、根据响应时间加权等
Hystrix介绍
Hystrix作为熔断流量控制在客户端实现，使用的时候，在方法上进行注解，当请求出错时可以调用注解中的方法返回。
Hystrix具备了服务降级、服务熔断、线程隔离、请求缓存、请求合并以及服务监控等功能。
三者关系
在开发过程中，如果微服务项目加上了spring-cloud-starter-netflix-hystrix依赖，那么，feign会通过代理模式， 自动将所有的方法用 hystrix 进行包装。在对Feign进行包装的时候也提到过动态代理。
在Spring Cloud技术体系之下Feign可以提供声明式的服务调用。在这个服务调用的过程中会通过Ribbon从Eureka注册中获取到对应的服务器列表出来，在后续的网络请求调用的过程中Ribbon的作用就是负责整体的负载均衡。将调用通过负载的形式调用到不同的实例上。这也就是实现了Spring Cloud的服务发现以及负载均衡的内容。
那么在这个过程中好像没有Hystrix的作用。下面就来看看Hystrix的作用，在服务调用的过程中，为了防止因为某些故障而消耗整个服务调用资源，从而导致服务雪崩。所以在服务调用的过程中需要对整个的调用机制有一个熔断的逻辑。整个时候Hystrix就会排上用场。
调用方会针对被调用微服务设置调用超时时间，一旦超时就会进入熔断逻辑，而这个故障指标信息也会返回给Hystrix组件，Hystrix组件会根据熔断情况判断被调微服务的故障情况从而打开熔断器，之后所有针对该微服务的请求就会直接进入熔断逻辑，直到被调微服务故障恢复，Hystrix断路器关闭为止。
通过上面的描述就形成了如下的这样一个调用关系图</pre>
          <img src="../../img/java/feign01.png">
          <pre>
如何配置
Feign配置说明
在之前的分享中其实我们知道Feign并不是就简单的实现了一种HttpClient，它提供了很多HttpClient方式，其中最为轻量级的就是OKHTTP的配置。下面这种方式是基于Apache HttpClient的方式来实现的。
feign:
  httpclient:  # 替换掉JDK默认HttpURLConnection实现的 Http Client
    enabled: true
  hystrix:
    enabled: true
  client:
    config:
      default:
        connectTimeout: 5000  # 连接超时时间
        readTimeout: 5000     # 读取超时时间
Hystrix配置说明
基于整个的Spring Cloud 微服务架构，Hystrix主要的功能是实现微服务之间网络调用故障的熔断、过载保护及资源隔离等。所以提供的配置说明也是关于这些内容的。如果单独使用的话还有其他的配置可以进行自定义。
hystrix:
  propagate:
    request-attribute:
      enabled: true
  command:
    default:  # 全局默认配置
      execution:  # 线程隔离相关
        timeout:
          enabled: true  # 是否给方法执行设置超时时间，默认为true。一般我们不要改。
        isolation:
          strategy: threadPool # 配置请求隔离的方式，这里是默认的线程池方式。还有一种信号量的方式semaphore，使用比较少。
          thread:
            timeoutInMilliseconds: 10000  # 方式执行的超时时间，默认为1000毫秒，在实际场景中需要根据情况设置
            interruptOnTimeout: true  # 发生超时时是否中断方法的执行，默认值为true。不要改。
            interruptOnCancel: false   # 是否在方法执行被取消时中断方法，默认值为false。没有实际意义，默认就好！
  circuitBreaker:   # 熔断器相关配置
    enabled: true   # 是否启动熔断器，默认为true，false表示不要引入Hystrix。
    requestVolumeThreshold: 20     # 启用熔断器功能窗口时间内的最小请求数，假设我们设置的窗口时间为10秒，
    sleepWindowInMilliseconds: 5000    # 所以此配置的作用是指定熔断器打开后多长时间内允许一次请求尝试执行，官方默认配置为5秒。
    errorThresholdPercentage: 50   # 窗口时间内超过50%的请求失败后就会打开熔断器将后续请求快速失败掉,默认配置为50

Ribbon配置说明
Ribbon在Spring Cloud中对于支持微服之间的通信，其主要功能包括客户端负载均衡器及用于中间层通信的客户端。在基于Feign的微服务通信中无论是否开启Hystrix，Ribbon都是必不可少的，Ribbon的配置参数主要如下：
ribbon:
  eager-load:
    enabled: true
  MaxAutoRetries: 1     # 同一台实例的最大自动重试次数，默认为1次，不包括首次
  MaxAutoRetriesNextServer: 1   # 要重试的下一个实例的最大数量，默认为1，不包括第一次被调用的实例
  OkToRetryOnAllOperations: true  # 是否所有的操作都重试，默认为true
  ServerListRefreshInterval: 2000  # 从注册中心刷新服务器列表信息的时间间隔，默认为2000毫秒，即2秒
  ConnectTimeout: 3000   # 使用Apache HttpClient连接超时时间，单位为毫秒
  ReadTimeout: 3000   # 使用Apache HttpClient读取的超时时间，单位为毫秒

注意 ：在Spring Cloud中使用Feign进行微服务调用分为两层：Hystrix的调用和Ribbon的调用，Feign自身的配置会被覆盖。
而如果开启了Hystrix，那么Ribbon的超时时间配置与Hystrix的超时时间配置则存在依赖关系，因为涉及到Ribbon的重试机制，所以一般情况下都是Ribbon的超时时间小于Hystrix的超时时间，否则会出现以下错误：
o.s.c.n.z.f.r.s.AbstractRibbonCommand - The Hystrix timeout of 10000ms   for the command operation is set lower than the combination of the Ribbon   read and connect timeout, 24000ms.

Ribbon和Hystrix的超时时间配置的关系
那么Ribbon和Hystrix的超时时间配置的关系具体是什么呢？如下：
Hystrix的超时时间=Ribbon的重试次数(包含首次) * (ribbon.ReadTimeout + ribbon.ConnectTimeout)

而Ribbon的重试次数的计算方式为：
Ribbon重试次数(包含首次)= 1 + ribbon.MaxAutoRetries  +  ribbon.MaxAutoRetriesNextServer  +  (ribbon.MaxAutoRetries * ribbon.MaxAutoRetriesNextServer)
整个关系可以通过上面那个图来得到。Ribbon的重试次数=1+(1+1+1)=4，所以Hystrix的超时配置应该>=4*(3000+3000)=24000毫秒。在Ribbon超时但Hystrix没有超时的情况下，Ribbon便会采取重试机制；而重试期间如果时间超过了Hystrix的超时配置则会立即被熔断（fallback）。

如果不配置Ribbon的重试次数，则Ribbon默认会重试一次，加上第一次调用Ribbon，总的的重试次数为2次，以上述配置参数为例，Hystrix超时时间配置为2*6000=12000，
由于很多情况下，大家一般不会主动配置Ribbon的重试次数，所以做简单说明，以上超时配置的值只是示范，超时配置有点大不太合适实际的线上场景，可以根据实际情况而定。
如果不启用Hystrix，Feign的超时时间则是Ribbon的超时时间，Feign自身的配置也会被覆盖。

如何配置好Hystrix和Ribbon的超时时间呢？
其实是有套路的,因为Feign的请求：其实是Hystrix+Ribbon。Hystrix在最外层，然后再到Ribbon，最后里面的是http请求。所以说。Hystrix的熔断时间必须大于Ribbon的 ( ConnectTimeout + ReadTimeout )。而如果Ribbon开启了重试机制，还需要乘以对应的重试次数，保证在Ribbon里的请求还没结束时，Hystrix的熔断时间不会超时。

feign:
  hystrix:
    enable:  # feign是否启用断路器，默认为false
  client:
    config:
      default:
        connectTimeout: 10000  #单位ms
        readTimeout: 10000     #单位ms

ribbon:
  OkToRetryOnAllOperations: false # 对所有操作请求都进行重试,默认false
  ReadTimeout: 60000    # 指的是建立连接后从服务器读取到可用资源所用的时间，默认值5000 单位ms
  ConnectTimeout: 3000  # 指的是建立连接所用的时间，适用于网络状况正常的情况下，两端连接所用的时间，默认值2000  单位ms
  MaxAutoRetries: 0     # 对当前实例的重试次数，默认0
  MaxAutoRetriesNextServer: 1 # 对切换实例的重试次数，默认1

hystrix:
  command:
    default:  #default全局有效，service id指定应用有效
      execution:
        timeout:
          enabled: true  # 如果enabled设置为false，则请求超时交给ribbon控制,为true,则超时作为熔断根据
        isolation:
          thread:
            timeoutInMilliseconds: 60000 # 断路器超时时间，默认1000ms

服务超时并不一定是坏事情，尤其是对于定时调用服务的情况，合理的设置超时时间，可以避免所有线程都消耗在服务调用上，而没有资源处理其他更重要的请求</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'springFeign',
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
