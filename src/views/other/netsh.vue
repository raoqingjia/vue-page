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
            <li v-for="(items,index) in catalogue"  :key="index" ><a @click="jump(index)">{{index+1}}、{{items.name}}</a></li>
          </ul>
          <h3>netsh查看网络配置</h3>
          <pre>netsh interface ip show {选项}
{选项}可以是：
address-显示IP地址配置。
config-显示IP地址和更多信息。
dns-显示DNS服务器地址。
icmp-显示ICMP统计。
interface-显示IP接口统计。
ipaddress-显示当前IP地址。
ipnet-显示IP的网络到媒体的映射。
ipstats-显示IP统计。
joins-显示加入的多播组。
offload-显示卸载信息。
tcpconn-显示TCP连接。
tcpstats-显示TCP统计。
udpconn-显示UDP连接。
udpstats-显示UDP统计。
wins-显示WINS服务器地址。

https://blog.csdn.net/Fuel_Ming/article/details/123992944</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'netsh',
      data () {
        return {
          created: this.$route.query.created,
          title: this.$route.query.name,
          catalogue:[]
        }
      },
      mounted:function(){
        this.$nextTick(function(){
          this.createCatalogue();
        })
      },
      methods: {
        jump (index) {
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
            var o={name:object[i].innerHTML};
            flag.push(o)
          }
          this.catalogue=flag;
        }
      }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
