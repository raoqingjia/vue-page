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
          <h3>node和npm的关联</h3>
          <pre>我们安装了node之后可以发现：node -v 或者npm -v可以查看到node和npm的两个版本，这是为什么呢？二者又有什么关系
一、npm是什么
当一个网站依赖的js代码越来越多，程序员发现这是一件很麻烦的事情：
去 jQuery 官网下载 jQuery
去 BootStrap 官网下载 BootStrap
……
有些程序员就受不鸟了，于是npm就出来了，全称是 Node Package Manager 包管理工具。
这一点和maven、gradle十分相似，只不过maven、gradle是用来管理java jar包的，而npm是用来管理js的。

NPM 的实现思路和maven、gradle是一样的：
1、有一个远程代码仓库（registry），在里面存放所有需要被共享的js代码，每个js文件都有自己唯一标识。
2、用户想使用某个js的时候，只需引用对应的标识，js文件会自动下载下来。

二、Node.js是什么
Node.js是一个Javascript运行环境(runtime environment)，不是一个js文件，实质是对Chrome V8引擎进行了封装。Node.js 是一个让 JavaScript 运行在服务端的开发平台，它让 JavaScript 成为与PHP、Python 等服务端语言平起平坐的脚本语言。
[1]Node.js提供替代的API，使得V8在非浏览器环境下运行得更好。V8引擎执行Javascript的速度非常快，性能非常好。
[2]Node.js是一个基于Chrome JavaScript运行时建立的平台， 用于方便地搭建响应速度快、易于扩展的网络应用。
chrome浏览器和Node.js在解析javascript都使用了v8引擎：

三、npm和Node.js的发展
npm作者已经将npm开发完成，于是发邮件通知 jQuery、Bootstrap、Underscore 作者，希望他们把 jquery、bootstrap 、 underscore 放到npm远程仓库，但是没有收到回应，于是npm的发展遇到了瓶颈。
Node.js作者也将Node.js开发完成，但是 Node.js 缺少一个包管理器，于是他和 npm 的作者一拍即合、抱团取暖，最终 Node.js 内置了 npm。
后来的事情大家都知道，Node.js 火了。随着 Node.js 的火爆，大家开始用 npm 来共享 JS 代码了，于是 jQuery 作者也将 jQuery 发布到 npm 了。所以现在，你可以使用 npm install jquery 来下载 jQuery 代码。现在用 npm 来分享代码已经成了前端的标配。

四、node.js和npm的安装
node.js的安装这里就不再多说了。npm由于内置在node.js中，所以就一并安装了。有时候我们只想单独安装npm，不想安装node.js，这是不行的</pre>
          <h3>npm 安装及nvm版本管理</h3>
<pre>npm install --registry=https://registry.npm.taobao.org
安装 nvm 管理多个node环境
nvm ls-remote  查看有哪些 node 版本
nvm list 查看本机node版本
nvm use 使用指定版本
nvm install  安装指定版本
nvm uninstall  卸载指定版本
nvm version 显示当前nvm 版本，别名 v
window安装nvm  https://github.com/coreybutler/nvm-windows/releases 直接下载nvm-setup.exe安装就行
mac安装nvm
1、 进入家目录 cd ~
2、使用git安装 git clone https://github.com/nvm-sh/nvm.git
3、进入nvm目录 cd nvm
4、执行编译文件 ./install.sh
5、在家目录编辑 .bash_profile ，默认不存在，可以使用命令 vim ~/.bash_profile
6、在文件内写入
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
7、最后执行命令 source ~/.bash_profile

查看nodejs安装路径的两种方法：
在打开的cmd命令行窗口中，输入“where node”，回车，此时会出现nodejs的安装路径</pre>
          <h3>win7安装高版本的node解决办法</h3>
          <pre>Win7 支持的 NodeJs 最高版本为 13.14.0
https://nodejs.org/zh-cn/download/releases/   node以往的版本
win7不可以直接在node官网下载node.js 14.14.0等高版本，要通过解压的方式来安装
起初为了安装node, 安装的是node.js 13.14.0版本
但是现在react / Vue不支持低版本的node,怎么解决呢？
第一步：下载WIN7支持的node 14版本下载地址：Index of /download/release/v14.14.0/，记住一定要下载zip结尾的。
第二步：解压压缩包，覆盖替换到旧的安装目录。我的是 C:\Program Files\nodejs
第三步：打开命令行，输入set NODE_SKIP_PLATFORM_CHECK=1，执行它，其作用是忽略平台审查。
最后 node -v14版本的node就安装好了~~
要注意的是:每次关闭cmd之后都要重新输入，并且如果已经用nvm控制node版本此法案不可用
set NODE_SKIP_PLATFORM_CHECK=1, 可以配置系统变量：
操作步骤：
1.打开 计算机->属性->高级系统设置->环境变量->系统变量，把node的安装路径增加到Path里面： D:\Program Files\nodejs\
2.系统变量新增一个变量名：NODE_SKIP_PLATFORM_CHECK
变量值：1
就可以不用每次关闭之后启动cmd都要设置了</pre>
          <h3>Node.js 版本知多少</h3>
          <pre>上面说了nvm这里我们再了解一下node安装版本
先清楚的几个术语
CURRENT：指代最新的 Node.js 版本系列（单数）。
Active：指正在积极维护和升级的版本系列，包括向后移植非破坏性功能和改进，解决错误以及修补安全漏洞。
Maintenance：这是一个维护的 LTS 版本系列，直到它的生命周期终止，只会在短时间内收到错误修复和安全补丁。
LTS：是 Long-Term Support 的缩写，代表 Node.js 长期支持的版本（版本号为复数）。
EOL：EOL 是 End of Life 的首字母缩写，进入到 EOL 时间线的版本，将不在维护。

版本的生命周期
让我们看下 Node.js 版本的生命周期是怎么样的？首先要知道每年的 4 月、10 月分别发布偶数、奇数版本，下面是过程说明：
最近的一个偶数版本在 4 月份发布之后会持续 6 个月。
待 10 月份会发布一个奇数版本，最近的偶数版本会进入 Active LTS 版本持续时间为 18 个月，这期间几乎不会有不兼容的大功能更新，开发者也可以放心升级到 Active LTS 版本。
18 个月的 Active LTS 版本到期后，会进入 Maintenance LTS 版本，也就是进入维护期，时间为 12 个月，在这期间仅进行安全、Bug 更新。
一旦 Maintenance LTS 版本 12 个月的时间已到就会进入 EOL 版本，正式退出历史舞台。

npm是围绕着语义版本控制（semver）的思想而设计的，下面是从他们的网站摘抄过来的：
给定一个版本号：主版本号.次版本号.补丁版本号， 以下这三种情况需要增加相应的版本号:
主版本号： 当API发生改变，并与之前的版本不兼容的时候
次版本号： 当增加了功能，但是向后兼容的时候
补丁版本号： 当做了向后兼容的缺陷修复的时候
npm使用一个名为package.json的文件，用户可以通过npm install --save命令把项目里所有的依赖项保存在这个文件里。
例如，运行npm install --save lodash会将以下几行添加到package.json文件中。
"dependencies": {
    "lodash": "^4.17.4"
}
请注意，在版本号lodash之前有个^字符。这个字符告诉npm，安装主版本等于4的任意一个版本即可。所以如果我现在运行npm进行安装，npm将安装lodash的主版本为4的最新版，可能是 lodash@4.25.5（@是npm约定用来确定包名的指定版本的）。你可以在此处查看所有支持的字符：https://docs.npmjs.com/misc/semver。
理论上，次版本号的变化并不会影响向后兼容性。因此，安装最新版的依赖库应该是能正常工作的，而且能引入自4.17.4版本以后的重要错误和安全方面的修复。
但是，另一方面，即使不同的开发人员使用了相同的package.json文件，在他们自己的机器上也可能会安装同一个库的不同种版本，这样就会存在潜在的难以调试的错误和“在我的电脑上…”的情形。</pre>
          <h3>npm参数配置</h3>
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
          <h3>yarn的安装及使用教程</h3>
          <pre>yarn 是由 Facebook、Google、Exponent 和 Tilde 联合推出了一个新的 JS 包管理工具，yarn 是为了弥补 npm 的一些缺陷而出现的。
一、同为包管理工具 npm和yarn的区别
1、并行安装：yarn安装包会同时执行多个任务，npm 需等待上一个任务安装完成才能运行下一个任务
2、离线模式：如果你已经安装过一个包，用 yarn 再次安装会从缓存中获取，而 npm 会从网络下载
3、版本锁定：yarn 默认有一个 yarn.lock 文件锁定版本，保证环境统一，而 npm 默认从网络下载最新的最稳定的，版本锁定可以解决包之间版本不兼容问题，npm 也可以通过命令实现版本锁定
4、更简洁的输出：yarn 安装包时输出的信息较少，npm 输出信息冗余
二、yarn的安装
1. nodejs下载安装：
在 node.js 官网里推荐选择 LTS (长期支持)版本，可在命令行用node -v 查看node的安装版本。顺便 npm -v 查看npm的版本号。
2. yarn的安装并查看版本:
npm install -g yarn
yarn --version
三、总结
npm存在的一些不足：
npm install 下载速度慢，即使是重新 install 时速度依旧慢
同一个项目，安装的无法保持一致性。原因是因为 package.json 文件中版本号的特点导致在安装的时候代表不同的含义。
使用 npm 安装多个 js 包时，包会在同一时间下载和安装。安装过程中，其中一个包抛出了一个异常，但 npm 会继续安装其他包，所以错误信息就会在一大堆提示信息中丢失掉，以至于直到执行前，都不会发现实际发生的错误。
四、查看 yarn 配置
yarn config get registry
或者
yarn config list
五、Yarn的优点：
安装速度快 (服务器速度快 , 并且是并行下载)
版本锁定，安装版本统一
缓存机制，如果之前已经安装过一个软件包，用Yarn再次安装时之间从缓存中获取，就不用像npm那样再从网络下载了
输出简洁并且多注册来源处理。安装包时，直观地打印出必要的信息；不管包被不同的库间接关联引用多少次，只会从一个注册来源去装，防止出现混乱不一致。
npm 与 yarn 常用命令对比
npm init                             ---- yarn init
npm install                          ---- yarn
npm install xxx@1.1.1 -g             ---- yarn global add xxx@1.1.1
npm install xxx@1.1.1 --save         ---- yarn add xxx@1.1.1
npm install xxx@1.1.1 --save-dev     ---- yarn add xxx@1.1.1 --dev
npm uninstall xxx --save(-dev)       ----yarn remove xxx
npm run xxx                          ---- yarn run xxxx</pre>
          <h3>Mac下安装npm无法使用出现command not found</h3>
          <pre>Mac下安装npm无法使用出现command not found
1.全局安装和安装到指定目录下的 package.json 是不一样的效果，输入npm list -g --depth 0中查看是否安装到了全局
2.建立文件夹 touch .bash_profile
3.打开文件夹 open .bash_profile
4.输入内容 export PATH=$PATH:/Users/zhangjunhua/.npm-global/bin，然后保存
5.更新配置 source .bash_profile</pre>
          <h3>错误积累及提示</h3>
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
2：重装本地依赖包：npm install

七、不同的node环境下经常报node-sass错误，多半是环境版本造成的
node-sass 对应的node版本连接
https://github.com/sass/node-sass/releases?page=1           </pre>
          <h3>nodejs全局安装和本地安装的区别</h3>
          <pre>
http://www.cnblogs.com/PeunZhang/p/5629329.html#install-global转载地址
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
