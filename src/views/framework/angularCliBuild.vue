<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>
1）ng build之后会看见dist里面有这些文件:
inline.bundle.js 这是webpack的运行时.
main.bundle.js 就是程序代码.
pollyfills.bundle.js 就是浏览器的Pollyfills.
styles.bundle.js 样式
vendor.bundle.js 是angular和第三方库

2）ng build常用参数
--sourcemap -sm 生成source map
--aot Ahead of Time编译
--watch -w Watch并rebuild
--environment -e Build环境
--target -t Build target
--dev 表示dev env和target
--prod 表示prod env和target   取消console等显示，尽可能合并相同功能代码，代码体积最小，--prod 默认 开启了--aot
--output-hashing	定义输出文件名缓存消除哈希模式
注解
1、JIT（Just in time，即时编译，边运行边编译）、AOT（Ahead Of Time，运行前编译），是两种程序的编译方式
2、ng build --environment=prod
构建时会加载angular-cli.json指定的环境配置文件：
"environments": {
  "dev": "environments/environment.ts",
  "prod": "environments/environment.prod.ts"
}

举例
"build": "node --max_old_space_size=4096 ./node_modules/@angular/cli/bin/ng build --environment=test --prod   --base-href=/"

node --max_old_space_size=4096  防止打包提交过大内存溢出
 ./node_modules/@angular/cli/bin/ng build  指定构建命令位置
--environment=test  使用测试配置
base-href可以设置服务器上的某个子路径，使用 ng build --base-href=/mypath/  指定站点的起始路径，如果你希望你的站点根路径为www.abc.com/mypath/，需要这样设置：ng build --base-href /mypath/。

引申
如果想要手动配置webpack来打包项目：(非必要)
使用ng new my-app初始化的项目并不包含webpack配置文件，需要ng eject命令来加入webpack.config.js配置文件。
注意此时不能再用 ng build 之类的命令了，开发环境是npm start，打包命令是npm run build。
https://www.cnblogs.com/jehorn/p/8568109.html 这片文章里有介绍

3）ng serve  运行angular项目, 下面看看它常用的参数:
--open -o 打开默认浏览器
--port -p 端口
--live-reload -lr 发生变化时重新加载网页(默认开启的)
--ssl 使用https
--proxy-config -pc 代理配置
--prod 在内存中serve 生产模式build的文件

ng serve --proxy-config proxy.conf.json
指定后台转发地址，即nginx的proxy_pass代理功能。开发时为避免ajax跨域，需要指定后台接口的转发地址。
proxy.config.json文件示例如下：
{
  "/api": { // 匹配前缀
    "target": "http://localhost:3000", // 转发地址
    "secure": false
  }
}

          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'colresizable',
    data () {
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
      toggle(){

      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
