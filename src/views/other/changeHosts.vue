<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>一、如何编辑hosts文件
hosts文件的位置：C:\windows\system32\drivers\etc，文件夹中找到Hosts文件并用记事本打开。
按照 ip地址 域名 的格式添加单独的一行记录。例：
220.78.11.34 www.server01.com
注： IP地址前面 没有 空格，ip地址和域名之间，要有且至少1个空格。
修改后，一定要记得保存文件。
查看域名的IP地址是否已经生效
操作：
点击“开始”
点击“运行”
输入“cmd”
输入“ping 域名”，回车
显示结果类似 210.26.230.200 的回复: bytes=32 time=83ms TTL=48
中间的 210.26.230.200 就是域名的IP地址

二、修改Hosts的作用
1. 加快域名解析
对于要经常访问的网站，我们可以通过在Hosts中配置域名和IP的映射关系，这样当我们输入域名计算机就能很快解析出IP，而不用请求网络上的DNS服务器。
2. 方便局域网用户
在很多单位的局域网中，会有服务器提供给用户使用。但由于局域网中一般很少架设DNS服务器，访问这些服务要输入难记的IP地址，对不少人来说相当麻烦。现在可以分别给这些服务器取个容易记住的名字，然后在Hosts中建立IP映射，这样以后访问的时候我们输入这个服务器的名字就行了。
3. 屏蔽网站
现在有很多网站不经过用户同意就将各种各样的插件安装到你的计算机中，其中可能包含木马or病毒。对于这些网站我们可以利用Hosts把该网站的域名映射到错误的IP或自己计算机的IP，这样就不用访问了。比如不想访问www.XXXX.com，那我们在Hosts写上以下内容：
127.0.0.1 www.XXXX.com #屏蔽的网站
0.0.0.0 www.XXXX.com #屏蔽的网站
这样计算机解析域名就解析到本机或错误的IP，达到了屏蔽的目的。
4. 顺利连接系统
对于Lotus的服务器和一些数据库服务器，在访问时如果直接输入IP地址那是不能访问的，只能输入服务器名才能访问。那么我们配置好Hosts文件，这样输入服务器名就能顺利连接了。
最后要指出的是，Hosts文件配置的映射是静态的，如果网络上的计算机更改了请及时更新IP地址，否则将不能访问。
5. 强制指定某域名对应某IP地址
新建的网站已经上传到服务器需要调试但是还不想外布访问，或者不想被蜘蛛抓取到时，可以修改本地hosts文件，这样只有自己的电脑能通过域名来访问网站。</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'changeHosts',
        data() {
            return {
                created: this.$route.query.created,
                title: this.$route.query.name
            }
        },
        mounted() {
            this.$nextTick(function () {
            })
        },
        methods: {
            toggle() {

            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
