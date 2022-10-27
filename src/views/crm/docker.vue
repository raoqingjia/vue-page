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
            <li v-for="(items,index) in catalogue"  :key="index" ><a @click="jump(index)">{{items.name}}</a></li>
          </ul>
          <h3>docker常用命令</h3>
          <pre>docker images | grep vueweb     查找vueweb开头的镜像名称
docker image rmi  -f 镜像id   根据id删除镜像
docker image  build -f  dockerfile.web  -t  vueweb.image .

docker run  -it   vueweb.image  bash（或/bin/bash、sh）  // 不加bash运行一次就退出结束了，而且exit 后直接停止容器了
docker run  -d  --name  nginx01 -p 3344:80 nginx   公网的3344访问我的80Nginx
-d 后台运行  --name 给容器命名  -p宿主机端口，容器内部端口
curl localhost:3344

docker exec -it containerId  bash    进入容器开启一个新终端交互

退出 容器的方式
exit / Ctrl+D     退出后，这个容器也就停止了，再次启动需要docker start
ctrl+p  ctrl + q  退出后容器仍在后台运行

docker container ls -n 5  查看最近5个新起的镜像
docker container rm  -f  容器id  删除容器

宿主机和容器内的文件相互拷贝命令
docker cp gbss-node:/GridWeb/node_modules.tar  /opt   将gbss-node容器内的node_modules.tar赋值到opt目录下
docker cp /opt/test.js testtomcat：/usr/local/tomcat/webapps/test/js  将宿主机opt文件拷贝到容器中</pre>
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
Dockerfile: 类似于“package.json”  -> Image: 类似于“Win7纯净版.rar” ->Container: 一个完整操作系统</pre>
          <h3>docker基本命令</h3>
          <pre>docker version   显示版本信息
docker info  显示docker的系统信息，镜像和容器的数量
docker 命令  --help   帮助命令查看详情
日志、元数据、进程的查看
docker logs -tf  --tail 10  容器id
docker top  容器id    查看容器中运行的进程信息，支持 ps 命令参数
docker inspect [OPTIONS] NAME|ID   获取容器/镜像的元数据。</pre>
        <h3>docker之image镜像</h3>
        <pre>镜像社区也叫做Image registry（镜像登记处），是拉取和下载镜像的网站，类似简单版GitHub
dockerhub：网址- https://hub.docker.com/ ,Docker官方社区，在使用Docker时默认的拉取网站。
Quay：网址-https://quay.io/ ，这个是Liunx Red Hat （红帽）的旗下一个第三方Docker 社区。

当在PowerShell里输入docker image 命令后，会出现对于Image操作的所有命令和提示，算帮助信息吧。
docker search  搜索镜像
docker image pull   下载镜像，默认下载最新版本
docker image pull  mysql:5.7   指定下载版本
docker image  ls  查看所有本地主机上的镜像
docker image  inspect < IMAGE ID> 查看具体镜像信息
docker image rmi  -f 镜像id1 镜像id2 镜像id3     删除多个指定镜像
docker image rmi  -f $(docker images -aq)   删除全部镜像
docker image prune -a    删除没有使用的所有镜像
docker images|grep < imageName> 根据镜像名称筛选镜像信息

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
docker system prune -f            批量删除不再使用的容器 , 这个是批量删除已经退出的容器
docker port    < name or ID>     查看当前容器的端口号，必须运行时单独映射端口了，不然看不到
docker container inspect < name or ID>       查看所有详细信息
docker container inspect --format '{ {.Config.ExposedPorts}}' < name or ID>

退出 容器的方式
exit / Ctrl+D     退出后，这个容器也就停止了，再次启动需要docker start
ctrl+p  ctrl + q  退出后容器仍在后台运行

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
这种模式的优点是，再使用exit退出后，服务并不会停止，而只是退出了交互模式。可以自己尝试一下退出，然后使用docker container ls -a来查看一下容器的状态，你会发现依然是 up状态。</pre>
          <h3>docker之Dockerfile文件</h3>
        <pre>通过Dockerfile构建镜像虽然比较麻烦，这是最常使用的一种方式
什么是Dockerfile
Dockerfile是一个包含用于组合映像的命令的文本文档。可以使用在命令行中调用任何命令。 Docker通过读取Dockerfile中的指令自动生成映像。
可以简单总结为下面三点：
Dockerfile是用于构建docker镜像的文件
Dockerfile里包含了构建镜像所需的"指令"
Dockerfile有其特定的语法规则（重要学习）

通过Dockerfile构建镜像
制作一个简单镜像案例,镜像的操作系统是Ubuntu最新版，然后在系统上运行jspang.py程序。Python程序的内容非常简单，只要打印出Hello JSPang
我们把Dockerfile文件和jspang.py文件放在一起个文件夹下
FROM ubuntu:latest
RUN  apt-get update && \
     DEBIAN_FRONTEND=noninteractive apt-get install --no-install-recommends -y python3.9 python3-pip python3.9-dev
ADD jspang.py   /
CMD ["python3","jspang.py"]

当有了Dockerfile和jspang.py文件以后，通过PowerShell进入到两个文件的文件夹。通过Docker命令就可以完成构建。
docker image build -t < Name:tag> < file path>
例如现在要通过已经写好的Dockerfile，构建一个jspang的镜像，就可以使用下面的命令构建。
docker image build -t jspang .
注意命令最后是有一个.的，如果你是第一次执行打包，这个过程还是需要2-3分钟的，当出现FINISHED后，说明打包完成了

FROM语法
在上面的案例中，Dockerfile文件第一句就是FROM ubuntu:latest , 它的意思是选择一个基础镜像，我这里选择的是ubuntu系统的最新版。
选择镜像的三个基本原则。
1、官方镜像优于非官方的镜像；
2、固定版本的Tag，而不是每次都使用latest;
3、功能满足，选择体积小的镜像；

RUN执行指令使用技巧
新建一个Dockerfile.bad文件
如果用RUN命令来编写，直接可以写成下面的样子。
FROM ubuntu:latest
RUN apt-get update
RUN apt-get install -y wget
RUN wget https://github.com/ipinfo/cli/releases/download/ipinfo-2.0.1/ipinfo_2.0.1_linux_amd64.tar.gz
RUN tar zxf ipinfo_2.0.1_linux_amd64.tar.gz
但这样写的问题是，镜像的分层会变的很多，每一个RUN都是一个分层，打出来的镜像包也会变大。
把上面的文件写到Dockerfile里，并个文件命名为Dockerfile.bad。执行下面的命令进行打包。
docker image build -f Dockerfile.bad -t ipinfo-bad .
-f为指定打包的名称。 这个过程会很长。打包完成后，
docker image ls    用查看命令，看一下包的基本信息
具体的分层情况，使用下面的命令查看。
docker image history < Image ID>

正确的Dockerfile写法是把所有执行命令放到一个RUN里，并用&& \进行连接。就可以把很多命令写到一个RUN里边了。
FROM ubuntu:latest
RUN apt-get update && \
    apt-get install -y wget && \
    wget https://github.com/ipinfo/cli/releases/download/ipinfo-2.0.1/ipinfo_2.0.1_linux_amd64.tar.gz && \
    tar zxf ipinfo_2.0.1_linux_amd64.tar.gz && \
    mv ipinfo_2.0.1_linux_amd64 /usr/bin/ipinfo && \
    rm -rf ipinfo_2.0.1_linux_amd64.tar.gz
镜像的分层会变的很多，每一个RUN都是一个分层，打出来的镜像包也会变大。

Dockerfile中的文件操作
制作镜像的时候，经常需要向镜像里添加文件。在Dockerfile中有两个命令可以向镜像中添加文件COPY和ADD

用COPY命令构建镜像
COPY和ADD命令，在复制普通文件的时候，并没有什么太大的不同，两个命令都可以把本地文件，复制到镜像里。如果复制的路径不存在，则会自动创建。

写一个Dockerfile，里边的内容是用基础Node镜像，然后拷贝一个index.js文件进去。
Dockerfile.copy内容如下.
FROM node:alpine3.14
COPY index.js  /app/index.js
引用node3.13版本，然后把index.js文件，拷贝到app目录下面。
index.js文件如下。代码是我们在3000端口上，开启了一个最简单web服务，然后返回了Hello Nodejs两个单词。
//1. 导入 http 模块
const http = require('http');
//2. 创建服务器对象
const server = http.createServer();
//3. 开启服务器
server.listen(3000, () => {
    console.log('Server is running...');
});
//4. 监听浏览器请求并进行处理
server.on('request', (req, res) => {
    // end方法能够将数据返回给浏览器，浏览器会显示该字符串
    res.end('Hello Nodejs');
});
两个文件准备好以后，用build命令进行构建。
docker image build -f Dockerfile.copy -t hello-copy .
构建完成后，可以使用docerk image ls命令进行查询。生成成功后，可以启用交互模式，再加上映射端口的形式，运行容器。
docker container run -it -p 3000:3000 hello-copy sh
这里映射了3000端口，这样我们就可以用127.0.0.1:3000进行访问了。

用ADD构建镜像
ADD 构建镜像和COPY最直观的一点不同，是ADD命令可以直接解压gzip压缩文件，这当我们有很多文件要上传操作的时候，就会变的简单很多。

Dockerfile.add文件内容
FROM node:alpine3.14
ADD index.tar  /app/
用ADD命令进行打包镜像
docker image build -f Dockerfile.add -t hello-gzip .
打包好以后使用交互模式，开启容器。
docker container run -it -p 3000:3000 hello-gzip sh
再进入app路径下面，可以看到下面自动给我们解压了index.tar文件。

切换工作目录 WORKDIR
在写Dockerfile文件时，默认的操作目录，是镜像的根目录。但有时候需要拷贝很多内容到镜像里是二级目录，就可以使用WORKDIR命令。把工作目录切换到二级，WORKDIR命令像我们操作linux下的cd命令。
比如还是刚才的Dockerfile.add文件，我们可以使用WORKDIR命令，改成下面的形式。
FROM node:alpine3.14
WORKDIR /app
ADD index.tar  index.js
这时候进入系统后的工作目录，就是在/app下面了。

Dockerfile中的ARG和ENV
ARG 和ENV 是经常容易被混淆的两个Dockerfile语法，它们都可以用来设置一个"变量",但其实两个语法在细节上有很多不同
写了一个Docerkfile.good的文件，文件内容如下。
FROM ubuntu:latest
RUN apt-get update && \
    apt-get install -y wget && \
    wget https://github.com/ipinfo/cli/releases/download/ipinfo-2.0.1/ipinfo_2.0.1_linux_amd64.tar.gz && \
    tar zxf ipinfo_2.0.1_linux_amd64.tar.gz && \
    mv ipinfo_2.0.1_linux_amd64 /usr/bin/ipinfo && \
    rm -rf ipinfo_2.0.1_linux_amd64.tar.gz
这段文件里有ipinfo的版本是ipinfo-2.0.1,这个版本是有可能改变的。文件里一共出现了5次2.0.1，修改起来已经比较麻烦了，如果出现更多次，几乎变的不可维护。所以这时候就需要定义一个变量，方便日后的维护。
先用ENV的形式来修改变量，把上面的Dockerfile.good文件修改为下面的形式
新建一个Dockerfile.ENV的文件，拷贝Dockerfile.good的代码。
这里有个小坑就是注意在写变量时，值不要有任何的空格，否则在打包时会失败。
FROM ubuntu:latest
ENV VERSION=2.0.1
RUN apt-get update && \
    apt-get install -y wget && \
    wget https://github.com/ipinfo/cli/releases/download/ipinfo-${VERSION}/ipinfo_${VERSION}_linux_amd64.tar.gz && \
    tar zxf ipinfo_${VERSION}_linux_amd64.tar.gz && \
    mv ipinfo_${VERSION}_linux_amd64 /usr/bin/ipinfo && \
    rm -rf ipinfo_${VERSION}_linux_amd64.tar.gz
这样写之后，如果以后版本改变了，我们只要修改一处，就可以完成所有的修改了。
构建一下这个ENV的镜像。
docker image build -f Dockerfile.ENV -t ipinfo-env .

ARG定义变量
跟上面的方法一样用ARG定义变量效果是一样。只是把ENV换成了ARG。
这个文件是Dockerfile.ARG，内容如下。
FROM ubuntu:latest
ARG VERSION=2.0.1
RUN apt-get update && \
    apt-get install -y wget && \
    wget https://github.com/ipinfo/cli/releases/download/ipinfo-${VERSION}/ipinfo_${VERSION}_linux_amd64.tar.gz && \
    tar zxf ipinfo_${VERSION}_linux_amd64.tar.gz && \
    mv ipinfo_${VERSION}_linux_amd64 /usr/bin/ipinfo && \
    rm -rf ipinfo_${VERSION}_linux_amd64.tar.gz
我们可以通过命令来构建一下ARG的镜像。
docker image build -f Dockerfile.ARG -t ipinfo-arg .

ARG和ENV的不同点
总的来说ARG和ENV有两点不同，第一点是声明变量的作用域不同，第二点是ARG声明后，可以在构建时修改变量。

1.ARG是构建环境 ， ENV可带到镜像中
用交互模式进入到ipconfig-env镜像中，然后输入env可以看到当前镜像的信息。
docker container run -it ipinfo-env
然后输入env，可以看到里边是会有VERSION变量的。

2.ARG可以在构建镜像时改变变量值
在构建时，可以使用—build-arg 参数来更改变量的值，比如现在要把变量VERSION的值进行修改,就可以使用下面的命令。
docker image build -f Dockerfile.ARG -t ipinfo-arg-2.0.0 --build-arg VERSION=2.0.0 .
这时候我们再使用交互模式，开启ipinfo-arg-2.0.0容器。
docker container run -it ipinfo-arg-2.0.0
然后再通过shell命令，ipinfo verison查看ipinfo的版本，可以看到版本已经变成了2.0.0了。

CMD容器启动命令
当设置好基础环境，安装完对应软件，处理完文件后。有时候需要启动某个默认命令。CMD用来设置容器启动时默认会执行的命令。
CMD命令的三个基本特性
a.容器启动时默认执行的命令
b.如果docker container run启动容器时指定了其它命令，则CMD命令会被忽略
c.如果定义多个CMD，只有最后一个CMD执行

CMD < shell 命令>
CMD ["< 可执行文件>", "< 参数1>", "< 参数2>", ...] # 官方推荐格式
CMD ["< 参数1>", "< 参数2>", ...]  # 此种写法在指定了 ENTRYPOINT 指令后，用 CMD 指定具体的参数。
Docker 不是虚拟机，容器就是进程。既然是进程，那么在启动容器的时候，需要指定所运行的程序及参数。​​CMD​​ 指令就是用于指定默认的容器主进程的启动命令的。
在运行时可以指定新的命令来替代镜像设置中的这个默认命令，比如，​​ubuntu​​​ 镜像默认的 ​​CMD​​​ 是 ​​/bin/bash​​​，如果我们直接 ​​docker run -it ubuntu​​​ 的话，会直接进入 ​​bash​​​。我们也可以在运行时指定运行别的命令，如 ​​docker run -it ubuntu cat /etc/os-release​​​。这就是用 ​​cat /etc/os-release​​​ 命令替换了默认的 ​​/bin/bash​​ 命令了，输出了系统版本信息
官方更推荐使用第二种 exec 格式，此种格式在解析时会被解析成 JSON 数组，因此一定要使用双引号 " , 而不是单引号 '
如果你使用第一种 shell 格式，最终还是会转成第二种格式，实际命令会被包装成 sh -c 的参数进行执行，比如：
CMD echo $HOME
会被转成：
CMD [ "sh", "-c", "echo $HOME" ]

ENTRYPOINT
ENTRYPOINT指令与CMD指令非常类似，也很容易和CMD指令弄混。
该指令提供的命令不容易在启动容器的时候被覆盖，事实上，docker run 命令指定的任何参数都会被当做参数传递给ENTRYPOINT指令。

ENTRYPOINT和CMD的区别
CMD设置的命令，可以在 docker container run 时传入其它命令，覆盖掉 CMD 的命令，但是ENTRYPOINT所设置的命令时一定会被执行的。
ENTRYPOINT 和 CMD 可以联合使用， ENTRYPOINT 设置执行的命令，CMD传递参数。
了解CMD和ENTRYPOINT是如何交互的lm

CMD和ENTRYPOINT指令都定义了在运行容器时执行什么命令。很少有规则描述他们的合作。
Dockerfile应该指定至少一个CMD或ENTRYPOINT命令。
在将容器用作可执行文件时，应该定义ENTRYPOINT。
CMD应该用作定义ENTRYPOINT命令的默认参数或在容器中执行特别命令的方法。
当运行带有可选参数的容器时，CMD将被覆盖

EXPOSE
Dockerfile 里面的 expose，是标记信息，不能直接打开端口，方便运维人员在使用容器时，知道要打开哪些端口。使用时 docker run -itd -P xxx:xxx ，大写 -P，会映射在Dockerfile文件中使用EXPOSE定义的端口，不需要手动 -p : 这种形式。
EXPOSE只是一种文档表述方式，在dockerfile中让开发者可以更快读懂Image开放了哪些服务，没有实际作用意义。如果没有EXPOSE端口, Container之间服务也是可以互相访问的
我这边列出这这四种组合
A、既、有在Dockerfile里Expose，也没有run -p
B、只在Dockerfile里Expose了这个端口
C、同时在Dockerfile里Expose，又run -p
D、只有run －p
1）针对情况A，启动在这个container里的服务既不能被host主机和外网访问，也不能被link的container访问，只能在此容器内部使用
2）针对情况B，启动在这个container里的服务不能被docker外部世界（host和其他主机）访问，但是可以通过containerlink，被其他link的container访问到
3）针对情况C，启动的这个cotnainer既可以被docker外部世界访问，也可以被link的container访问
4）针对情况D，其实docker做了特殊的隐式转换，等价于情况C，既可以被外部世界访问，也可以被link的container访问到。针对这种情况，原因是docker认为，既然你都要把portopen到外部世界了，等价于其他的container肯定也能访问，所以docker做了自动的Expos</pre>
          <h3>docker简单运行应用</h3>
          <pre>node项目
# 指定node版本为14
FROM node:14
# node环境变量
ENV NODE_ENV production
# 项目在docker里面的工作目录，/web只是随意指定的目录而已
WORKDIR /web
# 把当前目录下的所有文件添加到docker里面的/web目录
ADD . /web
# build docker镜像时运行npm命令,(这一步是在docker里面跑的命令)

RUN npm config set registry "https://registry.npm.taobao.org/"

RUN npm install
# build docker镜像时运行npm命令,根据实际情况，可能会有多个run
# RUN npm run build
# 因为我在nodejs项目里面写了 app.listen(3000),所以要暴露3000端口
EXPOSE 3000
# docker容器启动时执行的命令,这一步可能有些项目会用pm2来启动,那就需要改成pm2对应的指令
CMD node index.js

下面是abs运行文件
FROM 10.248.50.219:1179/nginx:latest
RUN /bin/cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
  && echo 'Asia/Shanghai' >/etc/timezone
#add file
ADD dist.tar    /opt/
RUN mkdir -p /usr/share/nginx/html/absweb/file
RUN cp -rf /opt/dist/support/* /usr/share/nginx/html/absweb/ && cp -rf /opt/dist /usr/share/nginx/html/absweb/ui
RUN mkdir -p   /usr/share/nginx/html/absweb/ui/soft
RUN cp -rf /usr/share/nginx/html/absweb/*exe  /usr/share/nginx/html/absweb/ui/soft/
RUN sed '22 a       client_max_body_size  3M;' -i /etc/nginx/nginx.conf
RUN sed '23 a large_client_header_buffers  4 64k;' -i /etc/nginx/nginx.conf
RUN sed -i '27a server_tokens off;' /etc/nginx/nginx.conf
RUN sed -i 's/nginx\/$nginx_version/nginx/g' /etc/nginx/fastcgi_params
RUN sed '11 a       proxy_next_upstream off;' -i /etc/nginx/conf.d/default.conf
RUN sed '12 a       location /absweb/OpPlatform_web { \n     proxy_pass  http://10.34.93.3:7882/absweb/omss-web/#/;  \n    proxy_set_header Host $host:$server_port; \n     proxy_set_header  X-Real-IP        $remote_addr; \n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; \n}' -i /etc/nginx/conf.d/default.conf
RUN sed '28 a       gzip on;\n gzip_min_length 10k;\n gzip_buffers 4 16k;\n gzip_comp_level 3;\n gzip_types application/json;\n' -i /etc/nginx/conf.d/default.conf
EXPOSE 80

os的dockfile
FROM nginx:v1
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
ADD dist.tar /opt/
RUN chmod -R 777 /opt
EXPOSE 80

Dockerfile 时区设置  /etc/localtime是用来描述本机时间，而 /etc/timezone是用来描述本机所属的时区
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
RUN echo 'Asia/Shanghai' >/etc/timezone
chmod命令可以改变权限目录和文件权限，-R是目录下所有文件，777是高权限(读、写、执行)，

omss的dockfile
FROM {{ ops_web_image }}
RUN /bin/cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
  && echo 'Asia/Shanghai' >/etc/timezone
#add file
ADD dist.tar    /opt/
RUN mkdir -p /usr/share/nginx/html/omss-web
RUN cp -rf /opt/bboss/omss-web/* /usr/share/nginx/html/omss-web/
RUN sed '22 a       client_max_body_size  3M;' -i /etc/nginx/nginx.conf
RUN sed -i '27a server_tokens off;' /etc/nginx/nginx.conf
RUN sed -i 's/nginx\/$nginx_version/nginx/g' /etc/nginx/fastcgi_params
RUN sed '11 a       location /absweb/zuul { \n     proxy_pass http://10.248.50.224; \n    proxy_set_header Host $host:$server_port; \n     proxy_set_header  X-Real-IP        $remote_addr; \n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; \n }' -i /etc/nginx/conf.d/default.conf
EXPOSE 80
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
