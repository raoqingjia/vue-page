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
            1、IE浏览器在Js处理数组对象时出现数组个数不正确
          </h3>
          <pre>
现象：
定义如下Javascript数组对象：
var arr = [
    {id: "1000001",nick: "鸿基梦"},
    {id: "1000002",nick: "爱梦梦"},
    {id: "1000003",nick: "除去巫山就是雨"},
    {id: "1000004",nick: "爱梦梦"},
    {id: "1000005",nick: "鸿基梦"},
];
console.log(arr.length);
for (var  i = 0; i < arr.length; i++) {
    var flag=arr[i]
    console.log(flag.id)
}
// 在IE 9 10 11 下打印  长度为 5   id依次是 1000001  1000002  1000003  1000004  1000005
//在IE 8下  打印  长度为 6   id依次是 1000001  1000002  1000003  1000004  1000005   最后还报错
//SCRIPT5007: 无法获取未定义或 null 引用的属性“id”   console.log(flag.id)就是报错点
//之所以会报错是因为 id: "1000005"对象元素后多了个 , 逗号; 此时去处理该数组的话会出现数组越界访问异常
//其他浏览器Firefox 38,Chrome 43, Safari 5.1.7 不存在该问题。</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ieGetArrayLength.',
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
