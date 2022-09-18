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
docker version   显示版本信息
docker info  显示docker的系统信息，镜像和容器的数量
docker 命令  --help   帮助命令查看详情
日志、元数据、进程的查看
docker logs -tf  --tail 10  容器id
docker top  容器id    查看容器中运行的进程信息，支持 ps 命令参数
docker inspect [OPTIONS] NAME|ID   获取容器/镜像的元数据。</pre>
        <h3>docker之image镜像</h3>
        <pre>
镜像社区也叫做Image registry（镜像登记处），是拉取和下载镜像的网站，类似简单版GitHub
dockerhub：网址- https://hub.docker.com/ ,Docker官方社区，在使用Docker时默认的拉取网站。
Quay：网址-https://quay.io/ ，这个是Liunx Red Hat （红帽）的旗下一个第三方Docker 社区。

当在PowerShell里输入docker image 命令后，会出现对于Image操作的所有命令和提示，算帮助信息吧。
docker search  搜索镜像
docker image pull   下载镜像，默认下载最新版本
docker image pull  mysql:5.7   指定下载版本
docker image  ls  查看所有本地主机上的镜像
docker image  inspect < IMAGE ID> 查看具体镜像信息
docker image rmi  -f 容器id 容器id 容器id     删除多个指定镜像
docker image rmi  -f $(docker images -aq)   删除全部镜像

Docker镜像的导入导出
在工作中经常使用。比如公司来了一个新同事，也会Docker，你正好自己制作了一个公司内部的镜像，就可以把你机器上的镜像导出给他。他拿到镜像之后直接导入，就可以进行开发了，好处是你们的开发环境基本统一了。
还有一种情况，就是生产环境中的服务器是不允许随便上网的，这时候你就需要在一台能上网的电脑上，做好镜像后，直接把镜像导出，供服务器使用。
导出镜像
docker image save
在导出之前，你最好到一个好找的路径下面
docker image save busybox:latest -o mybusybox.image
解读上面的命令，save是导出/保存的意思，busybox:latest是镜像名称+版本号， -o代表输出，mybusybox.image是导出后镜像的名字。
命令执行完成后，可以看到在执行命令所在的目录下就会多出一个mybusybox.image的文件，这就是刚才导出的镜像了。

导入镜像
docker image load -i .\mybusybox.image
执行完命令之后，再使用docker image ls命令查看，busybox镜像已经回来了。</pre>
        <h3>docker之container容器</h3>
        <pre>有了镜像才可以创建容器,下面的命令都是缩写，全写应该都是docker container ...缩写了container
docker container run < image name >  创建容器，系统中没有这个镜像，Docker会自动去Docker Hub上拉取

docker container ls 命令用于列出所有容器
CONTAINER ID : 容器对应的ID，这个是唯一的
IMAGE : 使用的镜像名称，显示不同
COMMAND : 执行的相关命令
CREATED: 创建的时间
STATUS: 目前镜像的状态，一般会有两种状态Up和Exited.
PORTS: 协议和端口
NAMES: 容器的名称，名字是Docker随机生成的
要查看你所有容器，包含已经停止的容器，可以加一个-a， docker container ls -a

docker container run时可以加以下参数
--name="name"  给容器起名字
-d     后台方式运行
-it    使用交互方式运行，进入容器查看内容
-p     端口映射比如你想把Docker的80端口，映射到服务器的90端口 
  -p 主机端口：容器端口
docker container run -p 90:80 nginx

docker start    < name or ID>     启动容器运行
docker restart  < name or ID>     重启容器运行
docker stop     < name or ID>     停止正在运行的容器
docker stop     < ID1  ID2  ID3>  停止多个运行容器
docker kill     < name or ID>     强制停止正在运行容器
docker rm       < name or ID>     删除容器    -f 运行中容器也可删除
docker rm  -f $(docker ps -aq)    删除所有容器  

容器attached 和detached模式
attached模式
两种模式最简单的对比理解就是：attached模式在前台运行，detached模式在后台运行。
当你打开127.0.0.1网址的时候，PowerShell上打印出了相关的日志（log），平且每访问一次，都会增加一条日志。也就是说Docker容器的日志会实时的展现到窗口并且占用此端口。这种模式叫做attached模式。
这时候你按Ctrl+C,就会停止掉Docker服务，这个缺点就是很容易误操作，比如在公司的生产环境中，你直接一个Ctrl+C，整个服务就崩掉了。

detached模式
detached模式的开启方法，就是加一个参数-d或者--detach。
docker run -d -p 80:80 nginx
和attached模式不同的是，这次输入完命令后，只显示出了容器的编号，并且可以再输入任何命令。就算我们关掉窗口，容器依然运行，也就是他是在系统后台进行运行的。

detached模式转换attached模式
在运行之后，也有需要调试的时候，Docker提供了两个模式间的转换。比如现在要把detached模式的容器，改为attched模式。
docker  attach < ID or Image Name>

detached模式下查看logs
用detached模式开启一个nginx服务，并映射服务器的80端口。
docker container run -d -p 80:80 nginx
容器被运行起来了，是detached模式，也就是Docker的后台运行模式。这时候想要查看后台日志，可以使用下面的命令查看。
docker container logs < ID or Image name>
虽然日志在窗口中出现了，但只打印一次logs,如果想动态一直跟踪日志，可以在命令上加入一个-f。
docker container logs -f < ID or Image name>
输入完上面的命令，打开浏览器，在地址栏输入127.0.0.1，也就是访问本地的nginx服务。你会看到日志窗口就会跟踪到最新的日志。
如果想关闭日志跟踪模式，直接用快捷键Ctrl+C就可以结束掉了。

Docker的交互式模式
有时候容器的镜像不是简单的一个服务，而是需要交互的操作系统。例如创建一个Ubuntu系统，然后需要到系统里输入各种Shell命令和系统进行交互。这时候attached模式和detached模式就不能满足要求了。需要使用交互模式。
使用Ubuntu镜像并开启交互模式
docker container run -it ubuntu sh
-it代表启用交互模式，sh代表可以使用Shell脚本。当你输入玩这个脚本后，Docker就会进入到交互模式。可以使用ls来得到目录下的文件，也可以使用hostname来查看计算机名称。
这时候你想退出容器和交互模式可以输入exit命令。需要重点说明的是，随着命令退出后，容器也会跟着退出，变成Exited模式。

detached模式下的交互
如果我们想退出交互，但是并不想停止容器。可以先开启detached模式，然后通过命令进入交互模式。
用detached模式创建一个nginx镜像的容器。
docker container run -d -p 80:80 nginx
直接通过下面的命令就可以进入到交互模式下了。(这是我们以后要经常使用的一个命令)
docker exec -it < ID or Image name> sh 
exec是执行的意思，-it交互模式 ，sh交互的方式，用shell脚本进行交互整个命令的意思是：用shell脚本的方式执行交互模式。
这种模式的优点是，再使用exit退出后，服务并不会停止，而只是退出了交互模式。可以自己尝试一下退出，然后使用docker container ls -a来查看一下容器的状态，你会发现依然是 up状态。




exit   停止容器中退出主机
ctrl+P+Q 容器不停止退出


举例
docker pull centos      下载centos镜像
docker run -it centos  /bin/bash   运行容器
exit


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
          <h3>docker之Dockerfile文件</h3>
        <pre>通过Dockerfile构建镜像虽然比较麻烦，这是最常使用的一种方式
什么是Dockerfile
Dockerfile是一个包含用于组合映像的命令的文本文档。可以使用在命令行中调用任何命令。 Docker通过读取Dockerfile中的指令自动生成映像。
可以简单总结为下面三点：
Dockerfile是用于构建docker镜像的文件
Dockerfile里包含了构建镜像所需的”指令“
Dockerfile有其特定的语法规则（重要学习）

通过Dockerfile构建镜像



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
