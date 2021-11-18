<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>ie浏览器中调试出错位置</pre>
          <img src="../../img/vueIeSCRIPT.png" alt="报错信息" height="250px" width="800px">
          <pre>
问题原因，我新增了引入了crypto-js用来做加密处理，但是引入完之后在ie11中宝报
报错SCRIPT1006: 缺少 ')'
SCRIPT5007: 无法获取未定义或 null 引用的属性call
点击报错信息的连接发现定位到上图的地方./node_modules/_crypto-js@4.1.1@crypto-js/enc-base64url.js
原因是这里有部分的ES6代码没有被转换，把这个报错位置前提示的这个报错路径拷贝下来node_modules/_crypto-js@4.1.1@crypto-js
在 webpack.base.conf.js 中，下图位置
module: {
  rules: [
    {
      test: /\.vue$/,
      loader: "vue-loader",
      options: vueLoaderConfig
    },
    {
      test: /\.js$/,
      loader: "babel-loader",
      include: [
        resolve("src"),
        resolve("test"),
        resolve("node_modules/_crypto-js@4.1.1@crypto-js"),   <-- 这个位置
        resolve("node_modules/webpack-dev-server/client")
      ]
    },</pre>
          <h3>项目中安装babel-polyfill，进行配置</h3>
          <pre>
1、安装: npm instatll babel-polyfill --save
2、在 webpack.base.conf.js 中找到 入口 entry,
module.exports = {
  // ...
  entry: {
    app: './src/main.js'
  },
  // ...
替换为
module.exports = {
  // ...
  entry: {
    app: ["babel-polyfill", "./src/main.js"],
  },
  // ...
3、如果引入 babel-polyfill还有一些高级语法没有被编译，在项目根目录下配置.babelrc文件（没有该文件就创建一个），官网如下： https://www.babeljs.cn/ 根据项目选择引入什么插件，以及如何配置，详情查看官网。
新建的 .babelrc 可以添加如下配置代码
{
  "presets": [
    ["env", {
      "modules": false,
      "useBuiltIns": "entry"
    }],
    "stage-2"
  ]
}
配置代码解读:
(1) modules该参数的含义是：启用将ES6模块语法转换为另一种模块类型。将该设置为false就不会转换模块。默认为 ‘commonjs’.
这样做的目的是：以前我们需要使用babel来将ES6的模块语法转换为AMD, CommonJS，UMD之类的模块化标准语法，但是现在webpack都帮我做了这件事了，所以我们不需要babel来做，因此需要在babel配置项中设置modules为false，因为它默认值是commonjs, 否则的话，会产生冲突。
(2)useBuiltIns是指定哪些内容需要被 polyfill(兼容) 的设置，有三个设置选项
false - 不做任何操作
entry - 根据浏览器版本的支持，将 polyfill 需求拆分引入，仅引入有浏览器不支持的polyfill
usage - 检测代码中 ES6/7/8 等的使用情况，仅仅加载代码中用到的 polyfill
(3) stage-2官方预设(preset), 有两种，一个是按年份(babel-preset-es2017)，一个是按阶段(babel-preset-stage-0)。 这主要是根据TC39 委员会ECMASCRPIT 发布流程来制定的。
因此到目前为止 有4个不同的阶段预设：stage-0,1,2,3以上每种预设都依赖于紧随的后期阶段预设，也就是说stage-0是包括stage-1的，以此类推。
因此 stage-0包含stage-1/2/3的内容。所以如果我们不知道需要哪个stage-x的话，直接引入stage-0就好了。
目前一般是使用stage2 (https://babeljs.io/docs/en/babel-preset-stage-2) 该特性规范己经被起草，将会被纳入标准里.</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
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
