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
            1.Node.js引入方式
          </h3>
          <pre>
npm install moment
var moment = require('moment');
主要是的获取默认本地时间，进行格式化。默认是英文显示格式，可以加入其他国家语言解析。
moment.locale("zh-cn"); 设置成中文显示
moment.locale('en');    设置成英文显示  <!--可以根据这个网址的脚本地址设置文字显示方法  https://blog.csdn.net/weixin_41000111/article/details/78916987-->
2020年Moment.js 在官方文档中发布了项目状态，文中写道：Momentjs 正式进入维护期，不会再提供大版本更新，推荐使用其他时间处理库代替或使用
宣布 Moment 进入维护期，但并非消亡，只是完成了使命。
事实上，这意味着：
不再添加新功能。
不会将 API 变为 immutable。
不会解决 tree shaking 及包体积的问题。
不会进行任何重大更改（不会有 v3）。
可能选择不对 bug 进行修复，特别是长期存在的已知 bug。</pre>
          <h3>
            2.格式化
          </h3>
        <pre>
初始化
moment().format();   //2018-05-30T10:59:43+08:00
当前时间：
moment().format('YYYY-MM-DD HH:mm:ss'); //2014-09-24 23:36:09
今天是星期几：
moment().format('d'); //3
moment().format('dddd'); //Wednesday
7天后的日期：
moment().add('days',7).format('YYYY年MM月DD日'); //2014年10月01日
9小时后的时间：
moment().add('hours',9).format('HH:mm:ss');</pre>
          <h3>
            3.文档链接
          </h3>
        <pre>
moment.js官网  http://momentjs.com/
相关地址链接   https://www.cnblogs.com/easirm/p/4195134.html
               https://blog.csdn.net/weixin_41000111/article/details/78916987</pre>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  var moment = require('moment');
  export default {
    name: 'momentJs',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    mounted() {
      this.$nextTick(function () {
        moment.locale("zh-cn");
        console.log("moment().format():"+moment().format());
console.log(moment().format("dddd"));
console.log(moment().format("d"));
console.log(moment().format("Y"));
console.log(moment().format('X'));
console.log(moment().subtract(10, 'days').calendar());

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
