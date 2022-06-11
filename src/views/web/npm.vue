<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>
            1、npm 安装及版本
          </h3>
<pre>npm install --registry=https://registry.npm.taobao.org
在v12.16.2以上版本就不在支持window7系统。
安装 nvm 管理多个node环境
nvm list 查看node版本
nvm use 使用指定版本
nvm install  安装指定版本
nvm uninstall  卸载指定版本</pre>
          <h3>
            2、npm参数配置
          </h3>
           <pre>
设置npm中的代理
npm config set proxy=http://10.1.57.56:8080

清除npm中的代理
npm config delete proxy
npm config delete https-proxy

其他配置
npm -v  //查看npm是否安装
npm config list //查看基本配置
npm config list -l //查看所有配置
npm install -g npm   npm就自动为我们更新到最新版本
如果npm install一直安装超时，可能是npm的版本过低需要更新

npm项目初始化
切换到项目目录，初始化了一个package.json文件
npm init

删除node_modules文件夹
利用rimraf模块删除node_modules文件夹里面的深层依赖
npm install -g rimraf  先安装rimraf模块
然后进入你的node_modules的上级目录，执行下面的命令
rimraf node_modules

npm模块所有的历史版本
npm view jquery versions

后缀 -alpha 内测版本，存在不稳定因素
后缀 -beta  公测版本，比内侧完善一版，依旧是存在不稳定因素的
后缀 -rc    发布正式版本前的预览版本

全局安装
npm install package-name -g || npm install package-name  -global  参数 -g代表安装到全局环境中
包安装在Node安装目录下的node_modules文件夹中，一般在 \Users\用户名\AppData\Roaming\ 目录下
可以使用npm root -g 查看全局安装目录

本地安装
npm install package-name || npm install package-name --save -dev  参数--save-dev的含义是代
表把你的安装包信息写入package.json文件的devDependencies字段中，包安装在指定项目的node_modules文件夹下

dependencies和devDependencies
devDependencies 里面的插件只用于开发环境，不用于生产环境，而 dependencies 是需要发布到生产环境的。

–-save和--save-dev
–-save 就是将要安装的依赖写到package.json的dependencies 对象中去
--save-dev是将要安装的依赖写到package.json的devDependencies 对象中去
           </pre>
          <h3>
            3、错误积累及提示
          </h3>
          <pre>
一、查看node模块或安装包下的所有版本号的方法：npm view 模块名\安装包名 versions
例如  npm view swiper versions  回车后就能看到所有swiper的版本号之后从这些版本号中挑选一个 npm install swiper@3.4.2 -S 安装了

二、npm install 错误 安装 chromedriver 失败的解决办法
npm install chromedriver --chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver

三、npm install报错-4048 operation not permitted解决
npm ERR! path C:\private_project\my_web\vue-pages\node_modules\fsevents\node_modules\rc\node_modules
npm ERR! code EPERM
npm ERR! errno -4048
npm ERR! syscall scandir
npm ERR! Error: EPERM: operation not permitted, scandir 'C:\private_project\my_web\vue-pages\node_modules\fsevents\node_modul
es\rc\node_modules'
出现这个情况是因为我直接本地安装了npm install pug --save-dev，我应该先全局安装npm install pug-cli -g之后在本地安装，这样问题就解决了
网上还有一种可能的解释是权限问题；如果以管理员身份运行cmd安装模块就好了

四、运行报Couldn't find preset "es2015" relative to directory问题
出现这个情况是因为我在vue的项目下安装vue-waterfall-easy，因为vue-waterfall-easy使用了ES标准，所以编译会报错，解决办法如下：
npm install babel-preset-es2015 --save-dev  安装之后问题解决

五、如果报cannot find module ‘rxjs/observable'错误怎么解决
其实这个错误并不是我没有安装rxjs-observable-subject这个模块，错误是我引入这个模块时引入的写法错了，应该是大写的Observable，让我写成了小写的observable

六、如果报cannot find module end-of-stream'错误怎么解决
Error: Cannot find module 'end-of-stream'
at Function.Module._resolveFilename (module.js:536:15)
at Function.Module._load (module.js:466:25)
at Module.require (module.js:579:17)
at require (internal/module.js:11:18)
at Object.&#60anonymous&#62 (C:\ecWebTest\node_modules\.0.3.8@orchestrator\lib\runTask.js:5:11)
        at Module._compile (module.js:635:30)
        at Object.Module._extensions..js (module.js:646:10)
        at Module.load (module.js:554:32)
        at tryModuleLoad (module.js:497:12)
        at Function.Module._load (module.js:489:3)
解决方法
1：将node_modules文件夹以及子文件全部删除；
2：重装本地依赖包：npm install</pre>
          <h3>
            4、nodejs全局安装和本地安装的区别 （http://www.cnblogs.com/PeunZhang/p/5629329.html#install-global转载地址）
          </h3>
          <pre>
什么是全局安装（global）
全局安装方式是键入命令：npm install gulp -g 或 npm install gulp --global，
其中参数-g的含义是代表安装到全局环境里面，包安装在Node安装目录下的node_modules文件夹中，
一般在 \Users\用户名\AppData\Roaming\ 目录下，可以使用npm root -g查看全局安装目录。

调用方式
全局安装后可以供命令行(command line)使用，用户可以在命令行中直接运行该组件包支持的命令，
全局安装gulp后的会有一个gulp.cmd文件

为什么全局安装后还要本地安装,仅全局安装足够吗

1.在js实例代码中，默认下node.js会在NODE_PATH和目前js所在项目下的node_modules文件夹下去寻找模块，
因此，如果只是全局安装，不能直接通过require()的方式去引用模块，需要手动解决包路径的配置问题，
当然你也可以复制全局安装的node_modules文件夹到项目下，还有办法可以选择将环境变量的NODE_PATH设置
为C:\Program Files\nodejs。
2.对于包的更新不好管理，可能你需要为每个包重新命名，如gulp@3.8.1、gulp@3.9.1...，为了区别不
同项目使用指定的包，保证模块之间的相互依赖（这块下面会介绍），区别每个项目正常运行。
因此，不推荐只全局安装。
3.在多人合作、发布模块到npmjs社区、上传到github给其他人使用时，保留模块的版本信息可用于下载指定
的版本号显得特别重要。
本地安装可以让每个项目拥有独立的包，不受全局包的影响，方便项目的移动、复制、打包等，保证不同版
本包之间的相互依赖，这些优点是全局安装难以做到的。
另外，据node团队介绍，本地安装包对于项目的加载会更快。
4.有优点也少不了缺点，如每次新项目都要本地安装所依赖的包，安装包时间相对较长，
一来是包太大导致下载慢；二是浪费了硬盘空间，不过现在电脑硬盘动不动就几个T，
你还会在意节省这点空间吗？</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'npm',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    methods: {
      toggle(){

      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
