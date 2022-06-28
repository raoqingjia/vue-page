<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>Eureka基本使用</h3>
          <pre>
spring:
  application:
    name: abs-business-web  # 应用名称，将会显示在Eureka界面的应用名称列
eureka:
  instance:
    appname: eureka-client  #  服务名，默认取 spring.application.name 配置值，如果没有则为 unknown
    hostname: localhost     #  主机名，不配置的时候将根据操作系统的主机名来获取
    preferIpAddress: true   #  是否优先使用 IP 地址作为主机名的标识 true 用你指定的IP去注册  false 不配置就是机器的主机名
    instanceId: ${server.ip}:${server.port}  # 本地程序运行ip端口  默认注册到服务中心显示的名称是 hostname+appname+port
  client:
    enabled: true             #  客户端是否使用
    registerWithEureka: true  #  是否向eureka server 注册自己 如果你不想自己的实例被发现，而只想发现其他实例，配置为 false 即可
    fetchRegistry: true       #  是否向eureka server 获取服务列表
    serviceUrl:   # defaultZone为Eureka注册服务注册中心地址
       defaultZone: http://${spring.security.user.name}:${spring.security.user.password}@10.248.50.224:9013/eureka/,http://${spring.security.user.name}:${spring.security.user.password}@10.248.50.224:9014/eureka/
    eurekaServerConnectTimeoutSeconds=5  #client连接eureka服务端的连接超时时间，默认为5秒
    eurekaServerReadTimeoutSeconds=8     #client对服务端的读超时时长

eureka.instance.preferIpAddress、eureka.instance.hostname、eureka.instance.ipAddress
在eureka.instance.preferIpAddress = true时，实例优先使用eureka.instance.ipAddress的值进行注册，如果没有配置eureka.instance.ipAddress则使用第一个非回环IP地址进行注册。
ipAddress这个配置含义为，当前的服务只暴露在 ip 119上 ，只有119里的服务才可以被访问 这样理解没错吧？ 例如： ip 120 向eureka 注册了 user ， 119 也向eureka 注册了user ，但是ribbon 轮询的时候 只能找到119 的user 找不到120的user
         </pre>
          <h3>Eureka集群：peer1、peer2、peer3 三个节点（2个节点也可正常提供高可用），对应端口7001、7002、7001</h3>
          <pre>Eureka server 服务端配置
pom.xml 关键依赖
< dependency>
    < groupId>org.springframework.cloud< /groupId>
    < artifactId>spring-cloud-starter-netflix-eureka-server< /artifactId>
< /dependency>
我这开启了认证，不需要可以注释
< dependency>
    < groupId>org.springframework.boot< /groupId>
    < artifactId>spring-boot-starter-security< /artifactId>
< /dependency></pre>
          <img src="../../img/java/eureka01.png" width="auto">
          <pre>记得启动类加上 @EnableEurekaServer

application.yml
spring:
  application:
    name: spc-eureka-service
  security:
    user:
      name: ${eureka.user}
      password: ${eureka.password}
  profiles:
    active: native
server:
  port: 7001
eureka:
  # eureka认证信息配置
  user: eureka
  password: eureka2021
  instance:
    hostname: localhost #eureka服务端的实例名称，单机版本
    prefer-ip-address: false
  client:
    register-with-eureka: false   # false表示不向注册中心注册自己
    fetch-registry: false     # false表示自己端就是注册中心，我的职责就是维护服务实例，并不需要去检索服务
    serviceUrl:
      defaultZone: http://${eureka.instance.hostname}:${server.port}/eureka/  # 设置与Eureka Server交互的地址查询服务和注册服务都需要依赖这个地址,单机模式
#  server:
#    关闭自我保护机制，保证不可用服务被及时剔除
#    enable-self-preservation: false
#    eviction-interval-timer-in-ms: 2000

application-peer1.yml
server:
  port: 7001
eureka:
  client:
    serviceUrl:
      defaultZone: "http://${eureka.user}:${eureka.password}@peer2:7002/eureka,http://${eureka.user}:${eureka.password}@peer3:7003/eureka"
    register-with-eureka: true
    fetch-registry: true
  instance:
    hostname: peer1

application-peer2.yml
server:
  port: 7002
eureka:
  client:
    serviceUrl:
      defaultZone: "http://${eureka.user}:${eureka.password}@peer1:7001/eureka,http://${eureka.user}:${eureka.password}@peer3:7003/eureka"
    register-with-eureka: true
    fetch-registry: true
  instance:
    hostname: peer2

application-peer3.yml
server:
  port: 7003
eureka:
  client:
    serviceUrl:
      defaultZone: "http://${eureka.user}:${eureka.password}@peer1:7001/eureka,http://${eureka.user}:${eureka.password}@peer2:7002/eureka"
    register-with-eureka: true
    fetch-registry: true
  instance:
    hostname: peer3

WebSecurityConfig 解决Eureka集群部署下且开启安全认证问题
@EnableWebSecurity
@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // 关闭csrf
        http.csrf().disable();
        // 开启认证
        super.configure(http);
    }
}
启动3个Eureka服务，分别带上参数
spring.profiles.active=peer1 spring.profiles.active=peer2 spring.profiles.active=peer3
分别进入http://127.0.0.1:7001/等3个Eureka面板，输入用户名密码，查看集群效果

Eureka client 服务端配置
< dependency>
    < groupId>org.springframework.cloud< /groupId>
    < artifactId>spring-cloud-starter-netflix-eureka-client< /artifactId>
< /dependency>
bootstrap.yaml
server:
  port: 8001
spring:
  application:
    name: spc-consumer-service
  profiles:
    active: local
eureka:
  #Eureka认证信息配置
  user: eureka
  password: eureka2021
  client:
    #表示是否将自己注册进EurekaServer默认为true
    register-with-eureka: true
    #是否从EurekaServer抓取已有的注册信息，默认为true。单节点无所谓，集群必须设置为true才能配合ribbon使用负载均衡
    fetch-registry: true
    service-url:
      #单机版
      #defaultZone: http://192.168.1.188:7001/eureka
      #集群版
      defaultZone: http://${eureka.user}:${eureka.password}@peer1:7001/eureka,http://${eureka.user}:${eureka.password}@peer2:7002/eureka,http://${eureka.user}:${eureka.password}@peer3:7003/eureka
  instance:
    #instance-id: consumer-order
    #访问路径可以显示IP地址
    prefer-ip-address: true
    #Eureka客户端向服务端发送心跳的时间间隔，单位为秒（默认是30秒）
    lease-renewal-interval-in-seconds: 1
    #Eurekaf服务端在收到最后一次心跳后等待时间上限，单位为秒（默认是90秒），超时将剔除服务
    lease-expiration-duration-in-seconds: 2</pre>
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
