<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <a href="static/demo/simulateReactiveFun.js" target="_blank" class="demo-link">案例连接地址js文件</a>
          <pre>
要求实现一个响应式函数，能对一个对象内的所有key添加响应式特性要求最终输出如下方代码所示
const data = {
   a : 1,
   b : 2,
   c : {
       c1: {
           af : 99
       },
       c2 : 4
   }
}
data.a = 5 // set key = a value = 5
data.b = 7 // set key = b value = 7
data.c.c2 = 4  //
data.c.c1.af = 121  //  set key = af value = 121


-------------------具体实现逻辑------------------

//  输出结果打印
function output(key,value) {
  console.log("set key = "+key + ", value = " + value);
}
//  利用Object.defineProperty实现响应监听
function defineProperty(obj,key,val) {
  reactive(val);  //  这里是能监听多维对象的关键点
  Object.defineProperty(obj,key,{   //  Object.defineProperty 入参关键是 原有对象，key值
     get(){
       return val;
     },
     set(newValue){
        if(val === newValue){
          return false;
        }
       val = newValue;
        output(key,newValue);
     }
  })
}
function reactive(obj) {
  if(typeof obj === "object") {   // 如果是对象类型才进行后续的逻辑判断
    for (const key in obj) {
      defineProperty(obj,key,obj[key]);
    }
  }
}
const data = {
  a : 1,
  b : 2,
  c : {
    c1: {
      af : 99
    },
    c2 : 4
  }
}
reactive(data);
data.a = 5;
data.b = 7;
data.c.c2 = 4;
data.c.c1.af = 121;          </pre>
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
