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
为什么react不适合大型项目，而angular适合?
为什么angular不适合小型项目，而vue适合?
为什么react适合各类型型项目，而vue, angular不适合?

1、什么是大型项目
    这个所谓的大项目应该是指多部门，多项目协作。而并不是页面量和工作日，对于大公司，协作所带来的成本，效率问题才是问题。项目维护的难易度，大型项目维护的难易度，与框架无关，与语言无关，与编程范式也无关，只与人有关。
    任何时代，任何框架都存在过容易维护的项目和大量不容易维护的项目，重要的是哪拨人写的，牛逼点的人制定了严格的代码规范，项目内的人执行力也强，都很好的遵守了一套标准，并且这拨人也都明白什么是好的标准，项目自然就很好维护，风格统一思想统一嘛。
    难就难在这个项目经历了无数人的手，并且这些人水平参差不齐，又没有严格的代码规范，因此越到后面维护的人越想骂娘了，特么的写的都是屎，维护不下去了，而这样的项目在现实业务中不要太多啊！所以与其讨论框架的优越性，不如努力提升自己的能力，知道什么是好，怎么写好，不被接手你代码的人喷你才是正事啊

2、三大框架做应用的项目
    React：蚂蚁数据可视化、爱彼迎、飞猪、阿里大于、虾米音乐、口碑开放平台、猫途鹰、喜马拉雅FM、斗鱼、知乎、豆瓣、美团外卖H5、房多多、石墨文档、墨刀、、拼多多（APP内嵌H5）、滴滴出行、Sentry、途牛、优酷、京东服饰+生鲜+旅行+赚钱H5、瓜子金融H5、算力矩阵、链家H5、阿里云管理后台、Coding、CodePen、树莓派、...
    Vue：饿了么、爱奇艺、中国平安H5、简书、途虎养车、小红书、乐视商城、手机搜狐、优酷、土豆、掘金、微博H5、大麦网H5、唯品会H5、小米商城H5、芒果TV移动版、哔哩哔哩、OneAPM、阿拉丁小程序统计、网易云信+手机网易+网易邮箱H5登录页、今日头条+西瓜视频网页版、贝店（APP内嵌H5）、大搜车、滴滴开源、高德开放平台、京东拼购+领券+新人频道H5+京东云、...
    Angular：百度脑图、eolinker、海致BDP、极光、Worktile、锤子科技官网、微信网页版、iTunes Connect、阿里云管理后台、鲸准对接平台、华为云软件开发平台、红帽的openshift
    Vue做前台展示居多，React、Angular偏后台管理居多。Angular在小程序上是个短板啊，不过16年angular.js配ionic 写移动端也是很简单的，ionic可以说是移动端UI组件的先驱

3、三大框架的理解
    大型项目的庞大带来的是代码优化以及性能优化，说react提倡的更细粒度的封装，带来的组件的复用性提高。其实vue、react、和angular都有组件化的概念，谁都可以组件化。现在流行的TypeScript，2020年之前React和angular就已经支持了，但是vue3.0再2020年底才支持，不过现在Vue3.0和React的编译思想越来越像，也不知道是谁抄的谁，18年之前可以说是vue几乎是在模仿angular和react走路，16年angular.js妥妥的主流框架霸主，等到angular2.0就开始三足鼎立了，吐槽一下angular API文档对中国人真的不是很友好，查个问题git上全是英文，vue2.0好在学习成本低，新出的Vue3.0如果之前有过react的学习经验，可能会吐槽一句，我操，你俩谁抄的谁，
    父子关系是组件之间相互连接的最常用方法之一，但这在某些情况下可能不是最佳选择。想象一下，当你在一个父组件中拥有大量的子组件时，你将不得不使用大量的 props 和 emit 事件来处理这些子组件，这将在短时间内变得一团糟。这正是你在大型项目中会面临的情况，而Vue.js对这个问题也有一个很到位的解决方案
    父组件中拥有大量的子组件时angular就不必有那么多的 props 和 emit，子组件直接接受父组件的值，子组件发生改变自动同步告诉父组件，这么的玩法有一点不好就是，当一个变量发生改变，全部组件都会更新，这里就需要判断，React玩法差不多是vue和angular结合
    react中数据都是进行手动更改达到视图更新，而vue是响应式的进行更改。Angular是数据驱动视图
    Vue2.0可能太自由太容易上手，你让一些新手去做大型项目，多数情况下可能就没法维护了，没有规章制度的约束还是不行的，这不是框架或库的锅，是人的问题。大型项目毕竟不是靠三两个人整出来的，人越多，规范越严格才行，不然都有个性，谁爱看谁的代码呀？

4、书写习惯上
    Angular 一直是html css js三者分开的模式，这种方式我用着很舒服，互不影响，文件看起来也干净写
    React html和js 是放一起了，上面是逻辑，下面是html，css可以单独提出来了再引入，这种方式不太习惯，因为一开始学习前端，都是将js的逻辑放到html的下面，还有一个弊端就是页面代码逻辑多了，得上下滚动，代码越多，滚动的越长
    Vue html，js ，css 三者是放一起了，上面html 中间js下面css，代码多了是真不好用，原有vue2的Vue OptionsAPI 分了data，method，watch，computed实际开发中还要滚动条反复上下移动，说vue3.0的Composition API的setup解决了这个问题，但是我实际用起来感觉还是和一起一样，还是把业务逻辑都放一起了

5、社区的活跃性
    Vue在中国的曝光度可以说是最高的，之后是react，angular，个人感觉主要原因是开课吧，拉钩教育，这帮机构拼了命的给你推销，其次是React，因为销售课程中讲师会用Vue和react做个对比，垫底的可以说是angular了，前面说过了，angular的中文文档实在是不太友好，而且angular对小白来说上手难，如果有java基础的学起来可能会快点，所以教育机构现在不太爱推他，也就再一些前端进阶的课程能看到angular的身影，而且现在大漠老师也不怎么直播了，但是16年之前北京的教育机构教的可都是angular.js，17年年中就开始换成vue了，不过react好像一直不是教育结构主推的课程，毕竟教育机构教的都是一堆小白，肯定是那个上手快学那个，这也说明了为啥面试的时候，简历上多半都是vue项目经验，其次是react最后是angular，当我看到简历通篇是vue的我就得考虑考虑了，看到有angular经验的，嗯，差不多是16年就从事前端了

6、版本更新速度
    版本更新速度上，angular和react远远快于vue，2020年angular到的11，react也到了16，vue出了3.0版本，Vue3.0有点类似angular.js跨越到angular2.0不过就是变化没那没大，angular是彻底改头换面，vue3.0算是vue2.0的升级版本也考虑了向下兼容

7、对于第三方支持
    就拿打包来说，angular的打包是基于webpack的封装，react和vue是直接用webpack打包，关于打包的配置还是react和vue在网上比较好找到打包相关的配置信息，不过angular也支持自己单端配置webpack的打包，就是工程有点大还要测试，我是直接放弃了。
    对于表单，按钮，日期，弹窗之类的功能蚂蚁金服对这三个都支持，版本上angular有9个迭代了，react  8个迭代，vue就两个vue2.0 和 vue3.0
    移动端产品， vue出现了uniapp，和Vant 这两个比较风行的框架，angular，react现在貌似是没什么特别火的ui组件</pre>
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
