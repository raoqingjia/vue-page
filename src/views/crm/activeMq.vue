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
< /bean>

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
