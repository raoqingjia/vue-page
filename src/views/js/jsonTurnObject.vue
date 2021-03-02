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
            1、将json字符转换成对象  JSON.parse()
          </h3>
          <pre>
var str = '{"name":"huangxiaojian","age":"23"}';
str=JSON.parse(str);
console.log(str);</pre>
          <h3>
            2、将对象转换成json字符  JSON.stringify()
          </h3>
          <pre>
var a = {a:1,b:2};
var b=JSON.stringify(a);
console.log(b)</pre>
          <h3>3、JSON.stringify()参数的用法</h3>
          <pre>
①
var data_1 = [
    {name: "王尼玛", sex:1, age: 30},
    {name: "王尼美", sex:0, age: 20},
    {name: "王大锤", sex:1, age: 30}
];
var str_json_1=JSON.stringify(data_1, ["name", "sex"]);  //只要 key值是name sex两项
console.log(str_json_1);
//打印结果 [{"name":"王尼玛","sex":1},{"name":"王尼美","sex":0},{"name":"王大锤","sex":1}]
②
var data_2=[
    {name: "王尼玛", sex:1, age: 30},
    {name: "王尼美", sex:0, age: 20},
    {name: "王大锤", sex:1, age: 30}
];
var str_json_2= JSON.stringify(data_2, function (k, v) {
    if (k === "sex") {
        return ["女", "男"][v];  //这个判断写法很特别
    }
    return v;
});
console.log(str_json_2);
//打印结果  [{"name":"王尼玛","sex":"男","age":30},{"name":"王尼美","sex":"女","age":20},{"name":"王大锤","sex":"男","age":30}]</pre>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'jsonTurnObject',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    mounted(){
      this.$nextTick(function(){
        console.log("------------------ Json与Object的相互转换 ---------------------");
        //将json转换成对象
        var str = '{"name":"huangxiaojian","age":"23"}';
        str=JSON.parse(str);
        console.log("① 将json转换成对象");
        console.log(str);
        //将对象转换成json
        var a = {a:1,b:2};
        var b=JSON.stringify(a);
        console.log("② 将对象转换成json");
        console.log(b);
        //JSON.stringify()  参数的用法
        console.log("③ JSON.stringify() 参数的用法");
        var data_1 = [
          {name: "王尼玛", sex:1, age: 30},
          {name: "王尼美", sex:0, age: 20},
          {name: "王大锤", sex:1, age: 30}
        ];
        var str_json_1=JSON.stringify(data_1, ["name", "sex"]);  //只要 key值是name sex两项
        console.log(str_json_1);
        var data_2=[
          {name: "王尼玛", sex:1, age: 30},
          {name: "王尼美", sex:0, age: 20},
          {name: "王大锤", sex:1, age: 30}
        ];
        var str_json_2= JSON.stringify(data_2, function (k, v) {
          if (k === "sex") {
            return ["女", "男"][v];  //这个判断写法很特别
          }
          return v;
        });
        console.log(str_json_2);

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
