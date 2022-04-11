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
其它特性 – Redis还支持 publish/subscribe, 通知, key 过期等等特性。</pre>
          <h3>Redis 使用场景</h3>
          <pre>微服务以及分布式被广泛使用后，Redis 的使用场景就越来越多了，这里我罗列了主要的几种场景。
1、分布式缓存：在分布式的系统架构中，将缓存存储在内存中显然不当，因为缓存需要与其他机器共享，这时 Redis 便挺身而出了，缓存也是 Redis 使用最多的场景。
2、分布式锁：在高并发的情况下，我们需要一个锁来防止并发带来的脏数据，Java 自带的锁机制显然对进程间的并发并不好使，此时可以利用 Redis 单线程的特性来实现我们的分布式锁，如何实现，可以参考这篇文章。
3、Session 存储/共享：Redis 可以将 Session 持久化到存储中，这样可以避免由于机器宕机而丢失用户会话信息。（个人认为更重要的是因为服务集群的出现，需要一个分布式Session来作为统一的会话）
4、发布/订阅：Redis 还有一个发布/订阅的功能，您可以设定对某一个 key 值进行消息发布及消息订阅，当一个 key 值上进行了消息发布后，所有订阅它的客户端都会收到相应的消息。这一功能最明显的用法就是用作实时消息系统。
5、任务队列：Redis 的 lpush+brpop 命令组合即可实现阻塞队列，生产者客户端使用 lrpush 从列表左侧插入元素，多个消费者客户端使用 brpop 命令阻塞式的”抢”列表尾部的元素，多个客户端保证了消费的负载均衡和高可用性。
6、限速，接口访问频率限制：比如发送短信验证码的接口，通常为了防止别人恶意频刷，会限制用户每分钟获取验证码的频率，例如一分钟不能超过 5 次。</pre>
          <h3>Redis命令</h3>
          <pre>
key值操作
keys *                   #获取所有键  *表示通配符，表示任意字符，会遍历所有键显示所有的键列表，在生产环境不建议使用
exists key               #查询键是否存在
exists [key]             #查询多个键，返回个数
type key                 #查询键类型
object encoding key      #查看value的编码格式
move key db              #移动键
ttl key                  #查询key的有效期 秒语法
pttl key                 #查询key的有效期 毫秒语法
expire key seconds       #设置过期时间秒语法
pexpore key seconds      #设置过期时间毫秒语法
persist key              #设置永不过期
rename key newkey        #更改键名称
flush db                 #清除指定的库

String类型操作
set key value            #存放键值对
setex key secound value  #如果不存在，插入
del key                  #删除键值
get key                  #获取键值对
getset key newvalue      #设置值，返回旧值
#值递增，递减（如果字符串中的值是数字类型，可以使用incr命令每次递增，不是数字类型的则报错）
incr key                 #递增
decr key                 #递减
mset key value [key value...]                #批量存放键值
mset key1 value1 key2 value2 key3 value3     #批量存放键值
mget key[key...]                             #批量获取键值
mget key1 key2 key3                          #批量获取键值
strlen key                                   #获取长度
append key value                             #追加内容(向键值尾部添加)
getrange key start end                       #获取部分字符

hash类型操作
Redis hash 是一个 string 类型的 field（字段） 和 value（值） 的映射表，hash 特别适合用于存储对象
Redis 中每个 hash 可以存储 232 - 1 键值对（40多亿）
HSET key field value                      #将哈希表 key 中的字段 field 的值设为 value 。
HMSET key field1 value1 [field2 value2]   #同时将多个 field-value (域-值)对设置到哈希表 key 中。
HMGET key field1 [field2]                 #获取所有给定字段的值
hlen key                                  #获取哈希表中的数量
hkeys key                                 #获取哈希表中的键值
HVALS key                                 #获取哈希表中所有的值
HEXISTS key field                         #判断哈希表中是否存在字段
hdel key field1[field2...]                #删除一个或者多个哈希表中的字段
HGETALL key                               #获取在哈希表中指定 key 的所有字段和值
HSETNX key field value                    #只有在字段 field 不存在时，设置哈希表字段的值
HINCRBY key field increment               #为哈希表key中的指定字段的整数值加上增量 increment

list类型操作
lpush key value                           #将一个元素值插入列表头部
LPUSH key value [value...]                #将一个或者多个元素值插入列表头部
rpush key value[value...]                 #右插入
lrange key start end                      #获取列表指定范围内的元素
lpop key                                  #移出并获取列表的第一个元素
rpop key                                  #移除列表的最后一个元素，返回值为移除的元素
llen key                                  #获取list数量
lrem key count value                      #移出元素
##count>0 从表开始向结尾搜索，移除与value相等的元素，数量为count
##count<0 从表结尾向表头搜索，移除与value相等的元素，数量为count的绝对值
##count=0 移除表中所有与value相等的值
#通过索引设置索引位置的值
lset key index value
ltrem key start stop                       #对一个列表进行修剪(trim)，就是说，让列表只保留指定区间内的元素，不在指定区间之内的元素都将被删除
LINSERT key BEFORE pivot value             #在列表的元素前插入元素
LINSERT key AFTER pivot value              #在列表的元素后插入元素
rpoplpush list list2                       #移除列表的最后一个元素，并将该元素添加到另一个列表并返回
BRPOPLPUSH source destination timeout      #从列表中弹出一个值，将弹出的元素插入到另外一个列表中并返回它； 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止
blpop key [key...] timeout                 #移出并获取列表中的第一个元素，如果列表没有元素会阻塞直到等待超时或者发现元素弹出为止

set类型操作
集合类型和列表类型相似，只不过是集合是无序且不可重复的
sadd key member[member...]                 #存储值
smembers key                               #获取元素
srandmember langs count                    #随机获取语法
sismember key member                       #判断元素在集合中是否存在
scard key                                  #获取集合元素个数
srem key member[member]                    #删除集合元素
#操作：集合间运算：差集 | 交集 | 并集
sdiff  key1 key2                           #取key1中存在，key2中不存在的值
sinter key1 key2                           #取key1和key2的交集
sunion key1 key2                           #取key1和key2的并集
spop key                                   #从集合中弹出一个元素(集合中的元素出栈)

排序
sort mylist                                #排序
sort mylist alpha desc limit 0 2           #字母排序
sort list by it:* desc                     #by命令
sort list by it:* desc get it:*            #get参数
sort list by it:* desc get it:* store sorc:result  #sort命令之store参数：表示把sort查询的结果集
          </pre>
          <h3>Spring Boot 中配置RedisTemplate</h3>
          <pre>
     https://blog.csdn.net/zxh_log4j/article/details/113785381?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ETopBlog-1.topblog&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ETopBlog-1.topblog&utm_relevant_index=1
            https://blog.csdn.net/li_habit/article/details/112685339

StringRedisTemplate和RedisTemplate在Redis中存储和读取数据。它们最重要的一个区别就是默认采用的序列化方式不同。StringRedisTemplate采用的是RedisSerializer.string()来序列化Redis中存储数据的Key ；RedisTemplate使用的序列化类为defaultSerializer，默认情况下为JdkSerializationRedisSerializer。如果未指定Key的序列化类，keySerializer与defaultSerializer采用相同的序列化类。

Spring Boot 中配置 Redis： application.properties
spring.redis.host=127.0.0.1
spring.redis.port=6379
# Redis 数据库索引（默认为 0）
spring.redis.database=0
# Redis 服务器连接端口
# Redis 服务器连接密码（默认为空）
spring.redis.password=123456
#连接池最大连接数（使用负值表示没有限制）
spring.redis.jedis.pool.max-active=8
# 连接池最大阻塞等待时间（使用负值表示没有限制）
spring.redis.jedis.pool.max-wait=-1
# 连接池中的最大空闲连接
spring.redis.jedis.pool.max-idle=8
# 连接池中的最小空闲连接
spring.redis.jedis.pool.min-idle=0
# 连接超时时间（毫秒） 如果连接超时时间不设置，这要注释掉配置而不能=0，否则会报连接超时错误：Command timed out after no timeout,，有超时时间最后设置为200以上
spring.redis.timeout=300

RedisTemplate 的配置
@Configuration
public class RedisConfig {

    /**
     * 默认是JDK的序列化策略，这里配置redisTemplate采用的是Jackson2JsonRedisSerializer的序列化策略
     * @param redisConnectionFactory
     * @return
     */
    @Bean
    public RedisTemplate< String,Object> redisTemplate(RedisConnectionFactory redisConnectionFactory){
        //使用Jackson2JsonRedisSerializer来序列化和反序列化redis的value值（默认使用JDK的序列化方式）
        Jackson2JsonRedisSerializer< Object> jackson2JsonRedisSerializer = new Jackson2JsonRedisSerializer<>(Object.class);
        ObjectMapper om = new ObjectMapper();
        // 指定要序列化的域，field,get和set,以及修饰符范围，ANY是都有包括private和public
        om.setVisibility(PropertyAccessor.ALL,JsonAutoDetect.Visibility.ANY);
        // 指定序列化输入的类型，类必须是非final修饰的，final修饰的类，比如String,Integer等会抛出异常
        //om.enableDefaultTyping(ObjectMapper.DefaultTyping.NON_FINAL);旧版本
        om.activateDefaultTyping(LaissezFaireSubTypeValidator.instance ,
                ObjectMapper.DefaultTyping.NON_FINAL, JsonTypeInfo.As.PROPERTY);
        jackson2JsonRedisSerializer.setObjectMapper(om);
        RedisTemplate< String, Object> redisTemplate = new RedisTemplate<>();
        // 配置连接工厂
        redisTemplate.setConnectionFactory(redisConnectionFactory);
        //使用StringRedisSerializer来序列化和反序列化redis的key值
        //redisTemplate.setKeySerializer(new StringRedisSerializer());
        redisTemplate.setKeySerializer(jackson2JsonRedisSerializer);
        // 值采用json序列化
        redisTemplate.setValueSerializer(jackson2JsonRedisSerializer);
        redisTemplate.setHashKeySerializer(jackson2JsonRedisSerializer);
        redisTemplate.setHashValueSerializer(jackson2JsonRedisSerializer);
        redisTemplate.afterPropertiesSet();
        return redisTemplate;
    }

    /***
     * stringRedisTemplate默认采用的是String的序列化策略
     * @param redisConnectionFactory
     * @return
     */
    @Bean
    public StringRedisTemplate stringRedisTemplate(RedisConnectionFactory redisConnectionFactory){
        StringRedisTemplate stringRedisTemplate = new StringRedisTemplate();
        stringRedisTemplate.setConnectionFactory(redisConnectionFactory);
        return stringRedisTemplate;
    }
}

          </pre>
          <h3>spring-boot 集成redis哨兵模式</h3>
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
