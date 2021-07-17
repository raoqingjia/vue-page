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
对象遍历的几种方法
for in    Object.key  Object.getOwnPropertyNames   后三种不推荐用,IE不支持  Reflect.ownKeys  Object.values   Object.entries,但是未再babel下试过

let obj = {
  id: 1001,
  name: 'wang',
  age: 18,
  gender: 'man',
  address:'American'
}
1）for in方式  循环遍历对象自身的和继承的可枚举属性(不含Symbol属性)
console.time("forin");
for (var key in obj){
  console.log(key+'--'+obj[key]);
}
console.timeEnd("forin");

for in会遍历到原型链上的属性例如，如果仅仅是遍历后台返回的数据足够用了，毕竟接口返回的数据哪有原型链啊
var s = {a:1}
s.__proto__ = {b:2}
for(var i in s) {console.log(i)}

2）使用Object.keys()遍历  返回的是key值的数组 ,包括对象自身的(不含继承的)所有可枚举属性(不含Symbol属性).
console.time("Object.keys");
Object.keys(obj).forEach(function(key){
  console.log(key,obj[key]);
});
console.timeEnd("Object.keys");

3）使用Object.getOwnPropertyNames(obj)遍历 返回的是key值的数组,包含对象自身的所有属性(不含Symbol属性,但是包括不可枚举属性).
console.time("getOwnPropertyNames");
Object.getOwnPropertyNames(obj).forEach(function(key){
  console.log(key,obj[key]);
});
console.timeEnd("getOwnPropertyNames");

4）Object.values() 返回一个数组，返回的是value值的数组,得不到key值, [1001, "wang", 18, "man", "American"] IE 下不支持
console.time("Object.values");
Object.values(obj).forEach(function(key){
    console.log(key);
});
console.timeEnd("Object.values");

5）Object.entries() 返回一个数组，返回的是key value 的数组 , IE 下不支持
console.time("Object.entries");
Object.entries(obj).forEach(function(key){
    console.log(key);
});
console.timeEnd("Object.entries");

//IE不支持，不推荐  使用Reflect.ownKeys(obj)未介绍   Object.values(obj)  Object.entries(obj)</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'indexOf',
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
