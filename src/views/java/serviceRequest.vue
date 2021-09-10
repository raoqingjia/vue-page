<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>
SpringCloud通过Eureka中已经注册的服务，再服务与服务直接的调取为什么要通过服务名调取，而不能通过ip调取，因为一个服务能有多集群的存在，一个服务对应多个ip的情况
在《spring Cloud 微服务实战》这本书上写的，一定要@loadBalance注解修饰的restTemplate才能实现服务名的调用，没有修饰的restTemplate是没有该功能的。
@loadBalance是Netflix的ribbon中的一个负载均衡的注解
至于为什么一定要该注解修饰，这里我大概讲一下。loadBalance这个注解加上之后，这个注解有3件事情要处理。
第一件就是从负载均衡器中选一个对应的服务实例，那有的人就会问为什么从负载均衡器中挑选，原因很明显就是，所有的服务名实例都放在负载均衡器中的serverlist。
第二件事情就是从第一件事情挑选的实例中去请求内容。
第三件事情就是由服务名转为真正使用的ip地址

服务直接调取的两种方式

1）restTemplate

启动类中配置
@Bean("restTemplate")
@LoadBalanced
RestTemplate restTemplate() {
	SimpleClientHttpRequestFactory requestFactory = new SimpleClientHttpRequestFactory();
	requestFactory.setConnectTimeout(100000);// 设置超时
	requestFactory.setReadTimeout(100000);
	RestTemplate restTemplate = new RestTemplate(requestFactory);
	restTemplate.getMessageConverters().add(0, new StringHttpMessageConverter(Charset.forName("UTF-8")));
	return restTemplate;
}

service中

@Autowired
RestTemplate restTemplate;

HttpHeaders headers = new HttpHeaders();
headers.setContentType(MediaType.APPLICATION_JSON);
HttpEntity< String> requestEntity = new HttpEntity< String>(requestParam, headers);  // 不加这个调取接口报415
String oldResultList = restTemplate.postForObject("http://"+serviceName+"/"+url , requestEntity, String.class);

或者
private static final String PAYMENT_URL =  "http://CLOUD-PAYMENT-SERVICE";      //集群配置
@Resource
private RestTemplate restTemplate;

@GetMapping(value="/consumer/payment/zipkin")
public String paymentZipkin() {
    return restTemplate.getForObject(PAYMENT_URL +  "/payment/zipkin",String.class);
}

2）Feign

启动类中配置
@EnableFeignClients(basePackages = { "com.svc.urbac.service.feign", "com.common.client.attach" })
basePackages中是对应扫描feign接口文件的包路径

feign接口文件写法
@FeignClient(name = "ABS-API-STAFF")
public interface ApiStaffFeign {
	@GetMapping(value = "/api/v2/staff/maintain/syncOrg4A", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	BaseRspsMsg< String> callSyncOrg4A(@RequestHeader("Authorization") String jwtStartWithBearer,
	@RequestParam("locationLevel") Integer locationLevel, @RequestParam("locationNumber") String locationNumber);
}

调取feign接口类写法
@Autowired
ApiStaffFeign apiStaffFeign;
BaseRspsMsg< String> echoMsg = apiStaffFeign.callSyncOrg4A("Bearer " + AppJwtRenewer.getAppJwtStr(),	locationLevel, locationNumber); </pre>

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
