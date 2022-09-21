<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>1、先认识一下什么是json
JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式，或者叫数据描述格式，跟jsonp没半毛钱关系
特点：轻量级数据格式，占用字符量少，特别适合互联网传递
2、JSON的格式
JSON只有两种数据类型，描述符：{} 和 [] ；{}是对象 [] 是数组
JSON内部数据类型就是： 字符串、数字、布尔、日期、null这几个
例如:
var json='{
   "名称":"字符串值",
   "名称":数字值,
   "名称":false,
   "名称":null
            }'
注意的是key值也是加""双引号或是引号的，这点是跟object类型不同的。
3、JSON的序列化

① JSON序列化
序列化：就是将js对象转为json格式的字符串
使用js内置的一个对象JSON。这个对象有一个方法stringfy()，用来实现这个序列化操作
JSON.stringify(对象名)
// js对象
  var activity = {
  activity: "Ajax讲座",
  date: "2016-3-1",
  address:"火星大厦1115",
  pnum: 30
  };
  // 转换 js对象=>json
  var jsonObj = JSON.stringify(activity);
  // 输出
  console.info(jsonObj);

② JSON反序列化
反序列化：就是将json格式字符串转换为js对象，然后就可以使用“对象.属性”方式获取值
JSON.parse(json格式代码) 将json转换成对象格式
// 声明一个json格式的字符串
var jsonStr = '{
  "activity":"Ajax讲座",
  "date":"2016-3-1",
  "address":"火星大厦1115",
  "pnum":30
  }';
// 将json格式的字符串转为js对象
var jsObj = JSON.parse(jsonStr);
// 应用“对象.属性”方式获取值，并输出
console.info(jsObj.activity + "," + jsObj.date + "," + jsObj.address + "," + jsObj.pnum);</pre>
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
