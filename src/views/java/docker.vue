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
          <h3>docker的常用命令</h3>
          <pre>
帮助命令
docker version   显示版本信息
docker info  显示docker的系统信息，镜像和容器的数量
docker  命令  --help   帮助命令
            
镜像命令
docker images  查看所有本地主机上的镜像
docker images|grep node1  查看叫node1的镜像
docker search  搜索镜像
docker pull   下载镜像，默认下载最新版本
docker  pull  mysql:5.7   指定下载版本
docker rmi  -f 容器id 容器id 容器id    删除多个指定镜像
docker rmi  -f $(docker images -aq)   删除全部镜像

容器命令
有了录镜像才可以创建容器
docker run  [可选参数]  image  新建容器并启动
--name="name"  容器名字
-d     后台方式运行
-it    使用交互方式运行，进入容器查看内容
-p     指定容器的端口
    -p ip：主机端口：容器端口
    -p 主机端口：容器端口（常用）
    -p 容器端口
docker start  容器id  启动容器运行
docker restart  容器id   重启容器运行
docker stop  容器id    停止正在运行的容器
docker kill   容器id   强制停止正在运行容器
exit   停止容器中退出主机
ctrl+P+Q 容器不停止退出
docker ps 查看当前运行的容器
  -a 查看所有运行中，停止运行的容器
  -n=2 查看最新运行的两个容器
  -q   只显示容器id
docker rm 容器id   删除容器    -f 运行中容器也可删除
docker rm  -f $(docker ps -aq)  删除所有容器

举例
docker pull centos      下载centos镜像
docker run -it centos /bin/bash   运行容器
exit

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
