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
          <h3>Redis简介</h3>
          <pre>
1、缓存的需求
前端页面广告位数据无需每次查询后台系统的接口，可以在前台系统添加缓存，提高访问首页的速度。
电商网站首页左侧商品类目一栏的数据也可以缓存起来,不用每次打开首页都去数据库读取数据，读取数据库IO开销大。
解决方案：使用缓存。

2、Redis是Nosql数据
redis是Nosql数据库中使用较为广泛的非关系型内存数据库，redis内部是一个key-value存储系统。它支持存储的value类型相对更多，包括string(字符串)、list(链表)、set(集合)、zset(sorted set –有序集合)和hash（哈希类型，类似于Java中的map）。Redis基于内存运行并支持持久化的NoSQL数据库，是当前最热门的NoSql数据库之一，也被人们称为数据结构存储服务务器。

3、Redis特性：
性能极高 – Redis能读的速度是110000次/s,写的速度是81000次/s 。
丰富的数据类型 – Redis支持二进制案例的 Strings, Lists, Hashes, Sets 及 Ordered Sets 数据类型操作。
原子 – Redis的所有操作都是原子性的，同时Redis还支持对几个操作全并后的原子性执行。
其它特性 – Redis还支持 publish/subscribe, 通知, key 过期等等特性。
          </pre>
          <h3>集成redis</h3>
          <pre>
1、添加依赖
集成redis
spring-boot-starter-redis在springboot 1.4.7版本后 所以如果想集成redis,应该引用spring-boot-starter-data-redis,如果就是想用前者,那么就应该加上版本号1.4.7.RELEASE
< dependency>
    < groupId>org.springframework.boot< /groupId>
    < artifactId>spring-boot-starter-redis< /artifactId>
    < version>1.4.7.RELEASE< /version>
< /dependency>
< dependency>
   < groupId>org.springframework.boot< /groupId>
   < artifactId>spring-boot-starter-data-redis< /artifactId>
< /dependency>

2、在配置中心里添加redis配置
#Redis服务器连接地址
spring.redis.host=127.0.0.1
#Redis服务器连接端口
spring.redis.port=6379
#Redis服务器连接密码（默认为空）
spring.redis.password=
#连接池最大连接数（使用负值表示没有限制）
spring.redis.pool.max-active=8
#连接池最大阻塞等待时间（使用负值表示没有限制）
spring.redis.pool.max-wait=-1
#连接池中的最大空闲连接
spring.redis.pool.max-idle=8
#连接池中的最小空闲连接
spring.redis.pool.min-idle=0
#连接超时时间（毫秒）
spring.redis.timeout=30000

@Slf4j
@Configuration
public class RedisConfig {
    @Value("${spring.redis.password:please-check-your-config}")
    private String password;
    @Value("${spring.redis.database:0}")
    private Integer database;
    @Value("${spring.redis.sentinel.master:please-check-your-config}")
    private String master;
    @Value("${spring.redis.sentinel.nodes:please-check-your-config}")
    private String nodes;

    //  https://www.cnblogs.com/sev-night/p/Redis.html  类似文章
    //  创建哨兵配置
    @Bean(name = "RedisConfigurationSentinel")
    @Primary
    public RedisSentinelConfiguration redisConfigurationSentinel() {
        if(!"please-check-your-config".equals(master)){
            // Sentinel 哨兵模式
            // 当一个主服务器不能正常工作时， Sentinel 会开始一次自动故障迁移操作， 它会将失效主服务器的其中一个从服务器升级为新的主服务器， 并让失效主服务器的其他从服务器改为复制新的主服务器
            RedisSentinelConfiguration config = new RedisSentinelConfiguration();
            config.setMaster(master);
            config.setPassword(RedisPassword.of(password));
            config.setDatabase(database);
            String[] array = nodes.split(",");
            for (String hp : array) {
                String[] hostAndPort = hp.split(":");
                config.sentinel(hostAndPort[0], Integer.parseInt(hostAndPort[1]));
            }
            log.info("sentinel master: [{}]", config.getMaster().getName());
            config.getSentinels().forEach(r -> log.info("{}:{}", r.getHost(), r.getPort()));
            return config;
        }else{
            log.trace(" check your application.yml");
            return null;
        }
    }
    @Bean(name = "LettuceConnectionFactorySentinel")
    @Primary
    public LettuceConnectionFactory lettuceConnectionFactorySentinel() {
        if(!"please-check-your-config".equals(master)){
            // spring 2.x 默认使用的redisclient使用LettuceConnectionFactory，1.x使用的是JedisConnectionFactory。
            // Lettuce 和 jedis 的都是连接 Redis Server的客户端，Jedis 在实现上是直连 redis server，多线程环境下非线程安全，除非使用连接池，为每个 redis实例增加 物理连接。
            // Lettuce 是 一种可伸缩，线程安全，完全非阻塞的Redis客户端，多个线程可以共享一个RedisConnection,它利用Netty NIO 框架来高效地管理多个连接，从而提供了异步和同步数据访问方式，用于构建非阻塞的反应性应用程序
            LettuceConnectionFactory factory = new LettuceConnectionFactory(redisConfigurationSentinel());
            log.info("LettuceConnectionFactorySentinel bean created");
            return factory;
        }else{
            log.info(" check your application.yml");
            return null;
        }
    }
    // 配置RedisTemplate
    @Bean(name = "StringRedisTemplateSentinel")
    @Primary
    public StringRedisTemplate stringRedisTemplateSentinel() {
        if(!"please-check-your-config".equals(master)){
            // 1.创建 redisTemplate 模版
            StringRedisTemplate template = new StringRedisTemplate(lettuceConnectionFactorySentinel());
            log.info("StringRedisTemplateSentinel bean created");
            // 2.创建 序列化类
            GenericToStringSerializer genericToStringSerializer = new GenericToStringSerializer(Object.class);
            // 3.序列化类，对象映射设置
            // 4.设置 value 的转化格式和 key 的转化格式
            template.setValueSerializer(genericToStringSerializer);
            template.setKeySerializer(new StringRedisSerializer());
            template.afterPropertiesSet();
            return template;
        }else{
            log.info(" check your application.yml");
            return null;
        }
    }
}        </pre>

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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
