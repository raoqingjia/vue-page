<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>1、前言</h3>
          <pre>
apply和call 都是调用一个对象的一个方法，用另一个对象替换当前对象
B.apply(A, [args1,args2]);   B.call(A, args1,args2);   即A对象调用B对象的方法。
相同点：
方法功能是一样的；
第一个参数的作用是一样的；
不同点
call可以传入多个参数；
apply只能传入两个参数，所以其第二个参数往往是作为数组形式传入
网上说参数超过3个建议用call</pre>
          <h3>2、用法</h3>
          <pre>
1、"劫持"别人的方法
案例一
此时foo中的logName方法将被bar引用 ，this指向了bar
var foo = {
  name:"mingming",
  logName:function(){
    console.log(this.name);
  }
}
var bar={
  name:"xiaowang"
};
foo.logName.call(bar); // xiaowang
案例二
function sum(num1, num2){
    return num1 + num2;
}
function callSum1(num1, num2){
    return sum.apply(this, arguments);        // 传入arguments对象
}
function callSum2(num1, num2){
    return sum.apply(this, [num1, num2]);    // 传入数组
}
alert(callSum1(10,10));   //20
alert(callSum2(10,10));   //20

2、实现继承
function Animal(name){
  this.name = name;
  this.showName = function(){
    console.log(this.name);
  }
}
function Cat(name){
  Animal.call(this, name);
}
var cat = new Cat("Black Cat");
cat.showName(); // Black Cat

3、作用域
window.color = "red";
var o = { color: "blue" };

function sayColor(){
    alert(this.color);
}

sayColor();                //red

sayColor.call(this);       //red
sayColor.call(window);     //red
sayColor.call(o);          //blue</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'getDate',
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
