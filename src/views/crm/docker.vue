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
          <h3>前言</h3>
          <pre>为了更好的理解 Docker 是什么，我们先来讲个故事：
我需要盖一个房子，于是我搬石头、砍木头、画图纸、盖房子。一顿操作，终于把这个房子盖好了。
结果，住了一段时间，心血来潮想搬到海边去。这时候按以往的办法，我只能去海边，再次搬石头、砍木头、画图纸、盖房子。
烦恼之际，跑来一个魔法师教会我一种魔法。这种魔法可以把我盖好的房子复制一份，做成「镜像」，放在我的背包里。
等我到了海边，就用这个「镜像」，复制一套房子，拎包入住。
对应到我们的项目中来，房子就是项目本身，镜像就是项目的复制，背包就是镜像仓库。如果要动态扩容，从仓库中取出项目镜像，随便复制就可以了。Build once，Run anywhere!
不用再关注版本、兼容、部署等问题，彻底解决了「上线即崩，无休止构建」的尴尬。
通过abs-web举例就是，devops构建一个项目版本镜像，之后这个项目版本镜像可以部署到224、225，构建一次版本就可以适应两个环境</pre>
          <h3>Docker概念</h3>
          <pre>Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口。
Docker 本身并不是容器，它是创建容器的工具，是应用容器引擎；
Docker 技术的三大核心概念，分别是：镜像 Image、容器 Container、仓库 Repository
镜像（Image）：镜像是一个文件，它是用来创建容器的。镜像是一个可执行包，其包含运行应用程序所需的代码、运行时、库、环境变量和配置文件，容器是镜像的运行时实例。如果你有装过 Windows 操作系统，那么 Docker 镜像特别像“Win7纯净版.rar”文件
容器（Container）：容器特别像一个虚拟机，容器中运行着一个完整的操作系统。可以在容器中装 Nodejs，可以执行npm install，可以做一切你当前操作系统能做的事情
Dockerfile: 类似于“package.json”  -> Image: 类似于“Win7纯净版.rar” ->Container: 一个完整操作系统
          </pre>
          <h3>docker的常用命令</h3>
          <pre>
帮助命令
docker version   显示版本信息
docker info  显示docker的系统信息，镜像和容器的数量
docker  命令  --help   帮助命令

            docker container ls 命令用于列出所有容器。

镜像命令
docker images  查看所有本地主机上的镜像
docker images|grep node1  查看叫node1的镜像
docker search  搜索镜像
docker pull   下载镜像，默认下载最新版本
docker  pull  mysql:5.7   指定下载版本
docker rmi  -f 容器id 容器id 容器id    删除多个指定镜像
docker rmi  -f $(docker images -aq)   删除全部镜像

容器命令
有了镜像才可以创建容器,下面的命令都是缩写，全写应该都是docker container ...缩写了container
docker run  [可选参数]  image 建容启动容器并进入容器
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

日志、元数据、进程的查看
docker logs -tf  --tail 10 容器id
docker top  容器id   查看容器中运行的进程信息，支持 ps 命令参数
docker inspect [OPTIONS] NAME|ID   获取容器/镜像的元数据。

进入容器
docker exec -it containerId  bash    进入容器开启一个新终端交互
docker attach 容器id                 进入容器正在执行的终端，不会中断进程

宿主机和容器内的文件相互拷贝命令
docker cp gbss-node:/GridWeb/node_modules.tar  /opt   将gbss-node容器内的node_modules.tar赋值到opt目录下
docker cp /opt/test.js testtomcat：/usr/local/tomcat/webapps/test/js  将宿主机opt文件拷贝到容器中

docker run -d --name nginx01 -p 3344:80 nginx  公网的3344访问我的80Nginx
-d 后台运行  --name 给容器命名  -p宿主机端口，容器内部端口
curl localhost:3344


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
