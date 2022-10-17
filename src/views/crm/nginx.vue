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
          <h3>简介</h3>
          <pre>Nginx是一个HTTP服务器、反向代理服务器、一个邮件代理服务器和一个通用的TCP/UDP代理服务器
Nginx 可以作为静态页面的 web 服务器，同时还支持 CGI 协议的动态语言，比如 perl、php 等。但是不支持 Java。Java 程序只能通过与 tomcat 配合完成。Nginx 专为性能优化而开发，性能是其最重要的考量，实现上非常注重效率，能经受高负载的考验，有报告表明能支持高达 50000 个并发连接数
Nginx官网
http://nginx.org/

Nginx下载
[root@caochenlei ~]# wget http://nginx.org/download/nginx-1.18.0.tar.gz          </pre>
          <h3>Nginx常用命令</h3>
          <pre>版本： nginx -v
普通启动服务：start nginx
配置文件启动：nginx -c /usr/local/nginx/conf/nginx.conf
暴力停止服务：nginx -s stop
优雅停止服务：nginx -s quit
重新加载配置：nginx -s reload
检查配置文件：nginx -t
查看相关进程：ps -ef | grep nginx</pre>
          <h3>Nginx常用命令</h3>
          <pre>每个指令必须有分号结束
events块：配置影响nginx服务器或与用户的网络连接。有每个进程的最大连接数，选取哪种事件驱动模型处理连接请求，是否允许同时接受多个网路连接，开启多个网络连接序列化等。
http块：可以嵌套多个server，配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置。如文件引入，mime-type定义，日志自定义，是否使用sendfile传输文件，连接超时时间，单连接请求数等。
server块：配置虚拟主机的相关参数，一个http中可以有多个server。
location块：配置请求的路由，以及各种页面的处理情况
error_log log/error.log debug;  #制定日志路径，级别。这个设置可以放入全局块，http块，server块，级别以此为：debug|info|notice|warn|error|crit|alert|emerg</pre>
          <h3>Nginx反向代理</h3>
          <pre>
正向代理：如果把局域网外的 Internet 想象成一个巨大的资源库，则局域网中的客户端要访问 Internet，则需要通过代理服务器来访问，这种代理服务就称为正向代理。
反向代理，客户端对代理是无感知的，因为客户端不需要任何配置就可以访问，我们只需要将请求发送到反向代理服务器，由反向代理服务器去选择目标服务器获取数据后，在返回给客户端，此时反向代理服务器和目标服务器对外就是一个服务器，暴露的是代理服务器地址，隐藏了真实服务器 IP 地址。
server {
    listen       80;               // 访问端口
    server_name  192.168.206.128;  // 访问ip
    location / {
        proxy_pass http:127.0.0.1:8080;  //  转发ip及端口
    }
}
反向代理小结
location /a {
        proxy_pass http://ip;
    }
location /b/ {
        proxy_pass http://ip;
    }
上述配置会导致
/a/x  ->  http://ip/a/x
/b/x  ->  http://ip/x</pre>
          <h3>负载均衡</h3>
          <pre>轮询的策略，一人一下，雨露均沾
那我们在server的同级写：
upstream 别名 {
  server 192.168.159.140:80;
  server 192.168.159.141:80;
}
在proxy_pass 后面写别名

下面是案例
upstream httpds {
  server 192.168.159.140:80;
  server 192.168.159.141:80;
}
server {
    listen       80;               // 访问端口
    server_name  192.168.206.128;  // 访问ip
    location / {
        proxy_pass http:httpds;  // 别名为httpds
    }
}

配置负载比重
负载均衡的几个配置：
权重：weight=10
停用：down
备用：backup
这几个配置都是加在upstream里的ip后面例如：
upstream httpds {
  server 192.168.159.140:80 weight=8;
  server 192.168.159.141:80 weight=2 down;
  server 192.168.159.141:80 weight=2 backup;
}
server {
    listen       80;               // 访问端口
    server_name  192.168.206.128;  // 访问ip
    location / {
        proxy_pass http:httpds;  // 别名为httpds
    }
}</pre>
          <h3>location 匹配规则</h3>
          <pre>通配符：
标识符	描述
=	  精确匹配，如果匹配成功，就停止匹配，立即执行该location里面的请求。
~	  正则匹配，并且区分大小写。
~*	正则匹配，不区分大小写。
^~	非正则匹配；。
无	普通匹配（最长字符匹配）；与location顺序无关，是按照匹配的长短来取匹配结果。若完全匹配，就停止匹配。

备注
1、如果uri里面包含正则表达式，就必须使用~或~*标识符；
2、针对~和~*匹配标识符，可以在前面加上!来取反，如下：
!~ 表示正则不匹配，区分大小写。
!~* 表示正则不匹配，不区分大小写。

案例
1、 “=”精准匹配案例
location  = /login {
  # 精确匹配 /login ，匹配成功后，立即结束
}

2、“~”区分大小写正则匹配案例
location ~ /images/ {
  #正则匹配，区分大小写，匹配成功后，立即结束
}

3、 “~*”不区分大小写正则匹配案例
location ~* /images/ {
  #正则匹配，不区分大小写，匹配成功后，立即结束
}

4、 “^~” 不进行正则匹配的标准匹配
location ^~ /images/ {
  # 匹配任何以 /images/ 开头的地址，匹配符合以后，停止往下搜索正则，采用这一条。
}

5、 普通匹配（最长字符匹配）
location  /blog/ {
  # 与location顺序无关
  # 若完全匹配成功，就不在继续匹配，否则还会进行正则匹配
}

优先级
同优先级的，匹配程度较高的优先匹配
匹配程度一样的，写在最前面的优先匹配</pre>
          <h3>常见错误积累</h3>
          <pre>1) 在下载了nginx后，cmd下运行nginx.exe文件时，出现错误nginx: [emerg] bind() to 0.0.0.0:80 failed (10013: An attempt was made to access a socket in a way forbidden by its access permissions)
意思是80端口被占用，只需要找到nginx 的配置文件conf文件，打开nginx.conf，把里面的
server {
        listen       80;
        server_name  localhost;
        #charset koi8-r;
        #access_log  logs/host.access.log  main;
        location / {
            root   html;
            index  index.html index.htm;
        }
listen 80 ；改成没有占用的端口就可以了，然后cmd下运行nginx.exe文件，重启。

2) 解决nginx: [emerg] unexpected “}“
可能某处多了或少了一个 “｝” , 或者是某一行未加 ；分号结尾 ，或者是存在特殊字符

3) nginx: [emerg] invalid URL prefix in URL/nginx.conf
意思是nginx配置的URL地址前缀不正确,可能是ip前面没加http

4) nginx: [warn] server name "http://127.0.0.1" has suspicious symbols in E:\nginx\ nginx-1.20.2/conf/n
错误原因:nginx要求  server_name 不能包含“/”
错误：server_name http://ip.com;
正确：server_name ip.com;</pre>
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
