<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <ul class="catalogue clearfix">
            <li v-for="(items,index) in catalogue"><a @click="jump(index)">{{items.name}}</a></li>
          </ul>
          <h3>linux下activemq安装与配置</h3>
          <pre>
官方下载
官网地址： http://activemq.apache.org/

bin 目录，执行
./activemq  start  是否开启
./activemq  status   是不是启动的状态
./activemq  stop  停止

查看程序启动是否成功的3种方式
ps -ef|grep activemq     查看进程
netstat  -anp|grep  61616      查看端口是否被占用
lsof -i:61616                  查看端口是否被占用

ActiveMQ控制台
访问activemq管理页面地址：http://IP地址:8161/
账户admin  密码admin


Linux中的ActiveMQ启动但是8161端口本机无法访问解决方案

1. 在Linux环境下，第一点需要注意的就是查看端口是否开放
注意CentOS的版本，版本不同，设置防火墙的shell语句可能不同，本人使用的语句对应的时ContOS7的firewall
firewall-cmd --list-port #查看开放的端口，如果不包括8161/tcp，则继续执行以下语句
firewall-cmd --zone=public --add-port=8161/tcp --permanent #将端口8161设置为永久生效的公共端口
firewall-cmd --reload #重新加载，使端口生效
ActiveMQ启动加载的配置文件是activemq.xml，该文件在ActiveMQ的conf目录下。但是需要修改的文件不是activemq.xml，因为文件引用了该目录下的jetty.xml，需要修改该文件中配置的端口，将其设置为0.0.0.0。
&lt; bean id="jettyPort" class="org.apache.activemq.web.WebConsolePort" init-method="start">
  &lt; property name="host" value="0.0.0.0"/>
  < property name="port" value="8161"/>
< /bean></pre>
          <h3>消息中间件</h3>
          <pre>
消息中间件概述
消息队列中间件是分布式系统中重要的组件，主要解决应用解耦，异步消息，流量消峰等问题，实现高性能，高可用，可伸缩和最终一直性架构。
应用解耦
以电商应用为例，应用中有订单系统、库存系统、物流系统、支付系统。用户创建订单后，如果耦合调用库存系统、物流系统、支付系统，任何一个子系统出了故障，都会造成下单操作异常。
当转变成基于消息队列的方式后，系统间调用的问题会减少很多，比如物流系统因为发生故障，需要几分钟来修复。在这几分钟的时间里，物流系统要处理的内存被缓存在消息队列中，用户的下单操作可以正常完成。当物流系统恢复后，继续处理订单信息即可，中单用户感受不到物流系统的故障。提升系统的可用性。
两种消息模式，消息队列、发布订阅
对象简介
连接工厂（ConnectionFactory)
客户端使用连接工厂对象(ConnectionFactory)创建连接。
连接（Connection）
连接对象 (Connection) 表示客户端与代理之间的活动连接。创建连接时会分配通信资源并对客户端进行验证。这是一个相当重要的对象，大多数客户端均使用一个连接来完成所有的消息传送。连接支持并发使用：一个连接可由任意数量的生成方和使用方共享。
会话（Session）
如果连接代表客户端与代理之间的通信渠道，则会话标记客户端与代理之间的单次对话。会话对象主要用于创建消息、消息生成方和消息使用方。
消息（Message）
消息封装一次通信的内容。消息由三部分组成：消息头、属性和主体。
消息生成方（MessageProducer）
由Session创建，负责发送Message到目的地。
消息使用方（MessageConsumer）
由Session创建，负责从目的地中消费Message。
目的地（Destination）
JMS Provider负责维护，用于对Message进行管理的对象。MessageProducer需要指定Destination才能发送消息，MessageReceiver需要指定Destination才能接收消息。      </pre>
          <h3>消息可靠保证机制</h3>
          <pre>
ActiveMQ持久化机制
为了避免意外宕机以后丢失信息，需要做到重启后可以恢复消息队列，消息系统一般都会采用持久化机制。就是在发送者将消息发送出去后，消息中心首先将消息存储到本地数据文件、内存数据库或者远程数据库等，然后试图将消息发送给接收者，发送成功则将消息从存储中删除，失败则继续尝试。
消息中心启动以后首先要检查指定的存储位置，如果有未发送成功的消息，则需要把消息发送出去。
Mq有持久化机制，把消息存放在硬盘中
MessageProducer producer = session.createProducer(queue); // 生产者生产的消息 是放在这个queue里面的
producer.setDeliveryMode(DeliveryMode.PERSISTENT);  // 持久化消息，当MQ关闭后，消息会保存成文件（在acitvemq的data目录中）

AUTO_ACKNOWLEDGE = 1 自动确认
CLIENT_ACKNOWLEDGE = 2 客户端手动确认
DUPS_OK_ACKNOWLEDGE = 3 自动批量确认
SESSION_TRANSACTED = 0 事务提交并确认

自动签收
Session session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);
就是一般的收到数据，自动签收了。
手动签收
Session session = connection.createSession(false, Session.CLIENT_ACKNOWLEDGE);
还需要消息这配合 message.acknowledge()方法去手动接手数据，主要是在consumer中收取数据后手动签收数据，使用message.acknowledge();一般常用手动签收
Session事务签收
Session session = connection.createSession(true, Session.SESSION_TRANSACTED);
接受数据后还需要consumer使用session.commit()保证数据发送和接收，事务签收不常用</pre>
          <h3>消息队列模式Queue</h3>
          <pre>
消息队列就是基础数据结构中的“先进先出”的一种数据机构。想一下，生活中买东西，需要排队，先排的人先买消费，就是典型的“先进先出
点对点模式，如果生产者产生了100条消息，那么两个消费同时在的话，会分工合作来接收这100条消息。就是每个消费者接收到50条来处理。</pre>
          <h3>发布订阅topic</h3>
          <pre>
消费者只有在订阅了某个主题消息之后，生产者产生的消息 才会被接收处理。
一对多，topic主题模式，如果生产者产生了100条消息，消费者在还没有订阅这个主题之前，是不会接收到这100条消息的。
如果又两个消费者同时订阅了这个主题消息，生产者在产生100条消息时，两个消费者会同时分别接收到这100条消息。</pre>
          <h3>ActiveMQ测试</h3>
          <pre>
编写一个测试类对ActiveMQ进行测试，首先得向pom文件中添加ActiveMQ相关的jar包：
< dependency>
     < groupId>org.apache.activemq< /groupId>
     < artifactId>activemq-all< /artifactId>
< /dependency>

queue的发送代码如下:
public class QueueProducer {
    public static void main(String[] args) {
        try {
            // 创建连接工厂
            ActiveMQConnectionFactory connectionFactory = new ActiveMQConnectionFactory("tcp://127.0.0.1:61616");
            // 创建连接
            Connection connection = connectionFactory.createConnection();
            connection.start();
            // 创建会话(设置关闭事务，自动应答模式)
            Session session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);
            // 创建目的地 (主题 or 队列)
            Destination destination = session.createQueue("myQueue");
            // 创建消息生产者
            MessageProducer producer = session.createProducer(destination);
            // 不持久化消息(当MQ关闭后，消息将丢失)
            producer.setDeliveryMode(DeliveryMode.NON_PERSISTENT);
            // 创建要发送的消息
            String text = "Hello world!";
            TextMessage message = session.createTextMessage(text);
            // 发送消息
            System.out.println("客户端发送消息...");
            producer.send(message);
            // 关闭连接
            session.close();
            connection.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

接收代码：
public class QueueConsumer {
    public static void main(String[] args) {
        try {
            // 创建连接工厂
            ActiveMQConnectionFactory connectionFactory = new ActiveMQConnectionFactory("tcp://127.0.0.1:61616");
            // 创建连接
            Connection connection = connectionFactory.createConnection();
            //开启连接
            connection.start();
            // 创建会话(第一个参数：关闭事务；第二个参数：使用消息自动应答模式)
            Session session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);
            // 创建目的地 (主题 or 队列)
            Destination destination = session.createQueue("myQueue");
            // 创建消息消费者
            MessageConsumer consumer = session.createConsumer(destination);
            System.out.println("服务端开始监听消息。。。");
            // 同步接收消息(1000，即1秒，为消息接收的超时时间，设为0则不超时)
            Message message = consumer.receive(1000);
            if (message instanceof TextMessage) {
                TextMessage textMessage = (TextMessage) message;
                String text = textMessage.getText();
                System.out.println("接收到的text消息为: " + text);
            }else {
                System.out.println("接收到的message消息为: " + message);
            }
            //异步接收消息消息(需要服务端一直开启)
//            while(true){
//                consumer.setMessageListener(message -> {
//                if (message instanceof TextMessage) {
//                    TextMessage textMessage = (TextMessage) message;
//                    String text = null;
//                    try {
//                        text = textMessage.getText();
//                    } catch (JMSException e) {
//                        e.printStackTrace();
//                    }
//                    System.out.println("接收到的消息为: " + text);
//                } else {
//                    System.out.println("消息为空");
//                }
//            });
//            }
            //关闭连接(如果使用异步方式，则不需要关闭连接，因为要一直监听)
            consumer.close();
            session.close();
            connection.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}


topic发送代码如下
public class TopicProducer {
    public static void main(String[] args) {
        try {
            // 创建连接工厂
            ActiveMQConnectionFactory connectionFactory = new ActiveMQConnectionFactory("tcp://127.0.0.1:61616");
            // 创建连接
            Connection connection = connectionFactory.createConnection();
            connection.start();
            // 创建会话(设置关闭事务，自动应答模式)
            Session session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);
            // 创建目的地 (主题 or 队列)
            Destination destination = session.createTopic("myTopic");
            // 创建消息生产者
            MessageProducer producer = session.createProducer(destination);
            // 不持久化消息(当MQ关闭后，消息将丢失)
            producer.setDeliveryMode(DeliveryMode.NON_PERSISTENT);
            // 创建要发送的消息
            String text = "Hello world topic!";
            TextMessage message = session.createTextMessage(text);
            // 发送消息
            System.out.println("客户端发送消息。。。");
            producer.send(message);
            // 关闭连接
            session.close();
            connection.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

接收代码：
public class TopicConsumer1 {
    public static void main(String[] args) {
        try {
            // 创建连接工厂
            ActiveMQConnectionFactory connectionFactory = new ActiveMQConnectionFactory("tcp://127.0.0.1:61616");
            // 创建连接
            Connection connection = connectionFactory.createConnection();
            connection.start();
            // 创建会话
            Session session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);
            // 创建目的地 (主题 or 队列)
            Destination destination = session.createTopic("myTopic");
            // 创建消息消费者
            MessageConsumer consumer = session.createConsumer(destination);
            System.out.println("服务端开始监听消息。。。");
            while(true){
                // 等待消息到来(1000，即1秒，为消息接收的超时时间，设为0则不超时)
                Message message = consumer.receive(1000);
                if (message instanceof TextMessage) {
                    TextMessage textMessage = (TextMessage) message;
                    String text = textMessage.getText();
                    System.out.println("接收到的text消息为: " + text);
                }else {
                    System.out.println("接收到的message消息为: " + message);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
</pre>
          <h3>JMS简介</h3>
          <pre>
什么是JMS
JMS（Java Messaging Service）是Java平台上有关面向消息中间件的技术规范，它便于消息系统中的Java应用程序进行消息交换,并且通过提供标准的产生、发送、接收消息的接口简化企业应用的开发。
JMS本身只定义了一系列的接口规范，是一种与厂商无关的 API，用来访问消息收发系统。它类似于 JDBC(java Database Connectivity)：这里，JDBC 是可以用来访问许多不同关系数据库的 API，而 JMS 则提供同样与厂商无关的访问方法，以访问消息收发服务。许多厂商目前都支持 JMS，包括 IBM 的 MQSeries、BEA的 Weblogic JMS service和 Progress 的 SonicMQ，这只是几个例子。 JMS 使您能够通过消息收发服务（有时称为消息中介程序或路由器）从一个 JMS 客户机向另一个 JML 客户机发送消息。消息是 JMS 中的一种类型对象，由两部分组成：报头和消息主体。报头由路由信息以及有关该消息的元数据组成。消息主体则携带着应用程序的数据或有效负载。
JMS 定义了五种不同的消息正文格式，以及调用的消息类型，允许你发送并接收以一些不同形式的数据，提供现有消息格式的一些级别的兼容性。
TextMessage--一个字符串对象
MapMessage--一套名称-值对
ObjectMessage--一个序列化的 Java 对象
BytesMessage--一个字节的数据流
StreamMessage -- Java 原始值的数据流
JMS消息传递类型
对于消息的传递有两种类型：
一种是点对点的，即一个生产者和一个消费者一一对应</pre>
          <h3>JmsMessagingTemplate和JmsTemplate</h3>
          <pre>
使用Spring的JmsMessagingTemplate
JmsMessagingTemplate封装了JmsTemplate，两者皆可使用
在Spring框架中使用JMS传递消息有两种方式：JMS template和message listener container，前者用于同步收发消息，后者用于异步收发消息

JmsTemplate
必需的资源有：
javax.jms.ConnectionFactory
ConnectionFactory是客户端编程的开始，由它依次获取Connection、Session、Message、MessageProducer或MessageConsumer，从而做好了发送或接收的准备。
javax.jms.Destination
Destination是发送的目的地，或者接收的源
我们这样做是让JmsTemplate连接到Destination，从我们提供的ConnectionFactory中获取连接资源。

1.ConnectionFactory资源
我们如何提供ConnectionFactory给JmsTemplate？凭借JmsTemplete提供的构造器或setter方法：
public JmsTemplate(ConnectionFactory connectionFactory)
public void setConnectionFactory(ConnectionFactory connectionFactory)

2.Destination资源
我们如何提供Destination给JmsTemplate？
我们有两个机会做这件事，第一次是在初始化的时候提供一个默认的Destination，第二次是在发送的时候提供一个明确的Destination。相关的方法：
public void setDefaultDestination(Destination destination)
设置默认的Destination
public void send(Destination destination, MessageCreator messageCreator)
将消息发送到指定的Destination
MessageCreator接口用来提供创建消息的回调方法，后面再讲。

 https://www.cnblogs.com/zfblog/p/7371970.html

jmsMessagingTemplate
@Bean
ConnectionFactory connectionFactory() {
    return new ActiveMQConnectionFactory();
}

@Bean
JmsTemplate jmsTemplate(ConnectionFactory connectionFactory) {
    JmsTemplate jmsTemplate = new JmsTemplate(connectionFactory);
    jmsTemplate.setPriority(999);
    return jmsTemplate;
}

@Bean(value="jmsMessagingTemplate")
JmsMessagingTemplate jmsMessagingTemplate(JmsTemplate jmsTemplate) {
    JmsMessagingTemplate messagingTemplate = new JmsMessagingTemplate(jmsTemplate);
    return messagingTemplate;
}</pre>
          <h3>ActiveMQ整合spring及项目中运用</h3>
          <pre>
创建两个springboot项目，分别作为消息提供者（provider）和消费者（consumer），添加依赖
< dependency>
    < groupId>org.springframework.boot< /groupId>
    < artifactId>spring-boot-starter-activemq< /artifactId>
< /dependency>
消息队列连接池
使用springboot2.0+及以下版本时候，maven配置依赖
< dependency>
    < groupId>org.apache.activemq< /groupId>
    < artifactId>activemq-pool< /artifactId>
    < version>5.15.0< /version>
< /dependency>
使用springboot2.1+时候，maven配置依赖
< dependency>
    < groupId>org.messaginghub< /groupId>
    < artifactId>pooled-jms< /artifactId>
< /dependency>

server:
  port: 8081
spring:
  #那么此处默认应该是false是点对点（queue），如果发布订阅，那么一定设置为true
  jms:
    pub-sub-domain: true
  activemq:
    user: admin
    password: admin
    #定义ActivMQ的连接地址
    broker-url: tcp://127.0.0.1:61616
    #mq连接池
    pool:
      enabled: true
      max-connections: 8
      #空闲的连接过期时间，默认为30秒
      idle-timeout: 30000
    #定义队列名称
    queueName: myQueue
    #定义主题名称
    topicName: myTopic

编写控制器代码
@RestController
@RequestMapping("/Jms")
public class ProducerController {
    @Autowired
    private JmsProducerService jmsProducerService;
    @RequestMapping("/send")
    public void contextLoads() throws InterruptedException {
        Destination destination = new ActiveMQQueue("mytest.queue");
        for(int i=0; i<10; i++){
            jmsProducerService.sendMessage(destination, "我是超人啊");
        }
        System.out.println("发送成功");
    }
}
服务层代码
@Service
public class JmsProducerServiceImpl implements JmsProducerService {
    @Autowired
    private JmsTemplate jmsTemplate;
    @Override
    public void sendMessage(Destination destination, String message) {
        this.jmsTemplate.convertAndSend(destination,message);
    }
}
监听器类
@Component
public class Consumer {
    private Logger logger = LoggerFactory.getLogger(Consumer.class);

    @JmsListener(destination = "mytest.queue")   //  单方向监听
    public void receiveQueue(String text) {
        System.out.println("Message:"+text);
    }

    /**    双向
    * @param txt 报文
    * @return
    * @SendTo 消息接收完成之后，向 out.queue 发送消息，实现双向队列
    */
    @JmsListener(destination = "wjx_queue")
    @SendTo("out.queue")
    public String receiveQueue(String txt) {
        logger.info("MessageConsumeTwo 接收到的报文是:" + txt);
        logger.info("MessageConsumeTwo 发送出去的报文地址是: out.queue ");
        return txt;
    }
}
消息消费方发送的  out.queue 接收方
@Component
public class MessageConsumeReceive {
  private Logger logger = LoggerFactory.getLogger(MessageConsumeReceive.class);
  @JmsListener(destination = "out.queue")
  public void consumerQueue(String txt) {
      logger.info("从消费者接收到的消息 out.queue 报文是：" + txt);
  }
}

但是这样有另外一个问题：如果开启了订阅者和发布者模式则无法发送和接收queue消息
JavaConfig配置为
@Configuration
public class JmsConfig {
    public final static String TOPIC = "topic.test";
    public final static String QUEUE = "queue.test";
    @Bean
    public Queue queue() {
        return new ActiveMQQueue(QUEUE);
    }
    @Bean
    public Topic topic() {
        return new ActiveMQTopic(TOPIC);
    }
    // topic模式的ListenerContainer
    @Bean
    public JmsListenerContainerFactory< ?> jmsListenerContainerTopic(ConnectionFactory activeMQConnectionFactory) {
        DefaultJmsListenerContainerFactory bean = new DefaultJmsListenerContainerFactory();
        bean.setPubSubDomain(true);
        bean.setConnectionFactory(activeMQConnectionFactory);
        return bean;
    }
    // queue模式的ListenerContainer
    @Bean
    public JmsListenerContainerFactory< ?> jmsListenerContainerQueue(ConnectionFactory activeMQConnectionFactory) {
        DefaultJmsListenerContainerFactory bean = new DefaultJmsListenerContainerFactory();
        bean.setConnectionFactory(activeMQConnectionFactory);
        return bean;
    }
}
控制台代码为
@RestController
@RequestMapping("/Jms")
public class ProducerController {
    @Autowired
    private JmsProducerService jmsProducerService;
    @Autowired
    private Topic topic;
    @Autowired
    private Queue queue;

    @Autowired
    private Topic destinationTopic;
    @Autowired
    private Queue destinationQueue;

    @RequestMapping("/send3")
    public void testJms2() {
        for (int i=0;i<10;i++) {
            jmsProducerService.sendMessage(destinationQueue,"queue,world!" + i);
            jmsProducerService.sendMessage(destinationTopic, "topic,world!" + i);
        }
    }
    @RequestMapping("/send2")
    public void testJms() {
        for (int i=0;i<10;i++) {
            jmsProducerService.sendMessage(queue,"queue,world!" + i);
            jmsProducerService.sendMessage(topic, "topic,world!" + i);
        }
    }
    @RequestMapping("/send")
    public void contextLoads() throws InterruptedException {
        Destination destination = new ActiveMQQueue("mytest.queue");
        for(int i=0; i<10; i++){
            jmsProducerService.sendMessage(destination, "我是超人啊");
        }
        System.out.println("发送成功");
    }
}

最后的监听器类
@Component
public class Consumer {
    @JmsListener(destination = "mytest.queue")
    public void receiveQueue(String text) {
        System.out.println("Message:"+text);
    }
    @JmsListener(destination = JmsConfig.TOPIC,containerFactory = "jmsListenerContainerTopic")
    public void onTopicMessage(String msg) {
        System.out.println("topic:"+msg);
    }
    @JmsListener(destination = JmsConfig.QUEUE,containerFactory = "jmsListenerContainerQueue")
    public void onQueueMessage(String msg) {
        System.out.println("queue:"+msg);
    }
}

abs-mq-server 的jmsTemplate配置
@Configuration
@EnableJms
public class JmsReceiverConfig {
    @Value("${spring.activemq.broker-url}")
    private String brokerUrl;
    @Value("${spring.activemq.user}")
    private String user;
    @Value("${spring.activemq.password}")
    private String password;
    @Value("${spring.activemq.threadPoolSize}")
    private String threadPoolSize = "100";
    @Value("${spring.activemq.concurrency}")
    private String concurrency;
    private boolean isAutoStartup = true;
    private PlatformTransactionManager transactionManager = null;

    @Bean(name = "connectionFactory")
    @Primary
    public ActiveMQConnectionFactory activeMQConnectionFactory() {
        ActiveMQConnectionFactory activeMQConnectionFactory = null;
        if (StringUtils.isBlank(user) || StringUtils.isBlank(password)) {
            activeMQConnectionFactory = new ActiveMQConnectionFactory(brokerUrl);
        } else {
            activeMQConnectionFactory = new ActiveMQConnectionFactory(user, password, brokerUrl);
        }
        activeMQConnectionFactory.setMaxThreadPoolSize(Integer.parseInt(threadPoolSize));
        activeMQConnectionFactory.setBrokerURL(brokerUrl);
        ActiveMQPrefetchPolicy p = new ActiveMQPrefetchPolicy();
        p.setQueuePrefetch(1);
        activeMQConnectionFactory.setPrefetchPolicy(p);
        return activeMQConnectionFactory;
    }
    @Bean(name = "containerFactory")
    public DefaultJmsListenerContainerFactory jmsListenerContainerFactory(@Qualifier("connectionFactory") ActiveMQConnectionFactory activeMQConnectionFactory) {
        DefaultJmsListenerContainerFactory factory = new DefaultJmsListenerContainerFactory();
        factory.setConnectionFactory(activeMQConnectionFactory);
        factory.setPubSubDomain(false);
        if (this.transactionManager != null) {
            factory.setTransactionManager(transactionManager);
        } else {
            factory.setSessionTransacted(Boolean.valueOf(true));
        }
        factory.setAutoStartup(isAutoStartup);
        factory.setSessionAcknowledgeMode(1);
        if (concurrency != null) {
            factory.setConcurrency(concurrency);
        }

        return factory;
    }
    @Bean(name = "jmsTemplate")
    @Primary
    public JmsTemplate jmsTemplate(@Qualifier("connectionFactory") ActiveMQConnectionFactory connectionFactory) {
        JmsTemplate jmsTemplate = new JmsTemplate(connectionFactory);
        return jmsTemplate;
    }

}
          </pre>
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
