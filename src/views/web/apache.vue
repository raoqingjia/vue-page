<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>1、安装apache  <a class="download" href="https://pan.baidu.com/s/1WeWc_nESVsg96MIUxoO6vg" target="_blank">下载地址</a></h3>
          <article>
            <p>从网下载下来的应该是一个压缩包，解压后把它放到你想放的那个目录中</p>
            <p>通过cmd命令行下进入到apache下面的bin目录</p>
            <p>输入httpd.exe -k install 把apache安装成windows后台服务</p>
            <p>如果是这样写httpd.exe -k install -n MyServiceName  （指定要安装的服务的名称（适用于电脑上有几个不同的Apache服务设施）</p>
            <p>例如我是直接放在到了C盘下</p>
            <p>C:\Apache24\bin>httpd -k install  安装成功后如下面般显示</p>
            <p class="cmd-bg">C:\Apache24\bin>httpd -k install</p>
            <p class="cmd-bg">[Wed Mar 14 10:37:29.933731 2018] [mpm_winnt:error] [pid 8096:tid 144] AH00433: Apache2.4: Service is already installed.</p>
            <p>Apache2.4: Service is already installed 说明apache已经安装好，服务名称叫Apache2.4</p>
          </article>
          <h3>
            2、查看apache的版本及安装信息
          </h3>
          <article>
            <p>找到Apache的安装目录，进入bin目录。在命令提示符窗口下输入：httpd -v</p>
            <p class="cmd-bg">C:\Apache24\bin>httpd -v</p>
            <p class="cmd-bg">Server version: Apache/2.4.25 (Win64) </p>
            <p class="cmd-bg">Server built:   Jan 27 2017 11:34:32  </p>
          </article>
          <h3>
           3、卸载apache
          </h3>
          <article>
            <p>想要卸载Apache服务，需要确保apache服务已经停止，如果直接删除Apache文件夹，会有残存文件无法删除，会对之后造成很多麻烦。</p>
            <p>运行CMD窗口，在窗口中输入sc delete apache(apache服务的名称)。回车后会告知Apache服务已经被删除，这时就可以手动删除Apache目录了。</p>
            <p class="cmd-bg">C:\>sc delete Apache2.4</p>
            <p class="cmd-bg">[SC] DeleteService 成功</p>
            <p>或是通过另一种命令方式卸载：”E:\apache\Apache24\bin\httpd.exe” -k uninstall -n apache</p>
          </article>
          <h3>
            4、启动、停止apache
          </h3>
          <article>
            <p>C:\Apache24\bin 运行 ApacheMonitor.exe 执行启动，停止，重启apache</p>
            <p>或用命令行启动执行</p>
            <p>启动apache命令 httpd.exe -k start</p>
            <p>停止apache命令 httpd.exe -k stop || httpd.exe -k shutdown</p>
            <p>重启apache服务(使服务重读配置文件，适用于修改配置文件后) httpd.exe -k restart</p>
            <p class="cmd-bg">C:\>C:\Apache24\bin>httpd.exe -k start</p>
            <p class="cmd-bg">C:\>C:\Apache24\bin>httpd.exe -k stop</p>
            <p class="cmd-bg">The 'Apache2.4' service is stopping.</p>
            <p class="cmd-bg">The 'Apache2.4' service has stopped.</p>
            <p>测试安装结果 http://localhost</p>
            <p>在浏览器中输入http://localhost，会显示一个关于apache信息（title显示为Apache Haus Distribution Installation Test）的页面则说明服务已经开启</p>
            <p>localhost 拒绝了我们的连接请求。则说明服务已经停止</p>

           </article>
          <h3>
            5、修改apache配置文件
          </h3>
          <article>
            <p>编辑文件：&#60安装目录&#62\conf\httpd.conf</p>
            <p>如何改变端口,Listen后的数字就是端口号，默认状态下为“Listen 80”</p>
            <p>配置Apache首页文件名：例如当输入http://localhost时，Apache会默认打开index.html文件，
              如果想修改首页文件或者增加首页文件时，则打开httpd.conf，找到DirectoryIndex index.html，
              修改index.html为你想要文件名即可，比如main.php。如果你想添加多个首页文件，可以用空格隔开，
              文件的前后顺序就是首页文件读取的优先度。重起Apache服务。</p>
            <p> 更改Apache的默认网站根目录地址</p>
            <p> DocumentRoot "${SRVROOT}/htdocs"</p>
            <p>&#60Directory "${SRVROOT}/htdocs"&#62</p>
            <p>将上面${SRVROOT}/htdocs的改为你自己项目的文件路径</p>
            <p> DocumentRoot "C:\Apache24\web"</p>
            <p> &#60Directory "C:\Apache24\web"&#62</p>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import JSZip from 'jszip'
  import FileSaver from 'file-saver'
  export default {
    name: 'apache',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name,
        catalogue:[]
      }
    },
    methods: {
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.download{
  color: #000;
  float: right;
  text-decoration:underline;
  cursor: pointer;
}
</style>
