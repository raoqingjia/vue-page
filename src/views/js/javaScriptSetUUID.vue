<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>1、获取当前时间戳Date.now
注意：使用当前的时间戳的话，如果是同一次执行或者放到for循环里生产，如下就会重复，所以时间戳生成id有局限性
var  ran01 = new Date().getTime();
var  ran012= new Date().getTime();
//  ran01 和 ran02 是相同的值

2、随机数字版本 例如 810839 格式
function setIdForNumber(n) {
  let uuid = ""+Math.random().toString();  //  Math.random().toString()生成一个类似 0.1283460319177394的ID
  uuid = uuid.substr(uuid.length - n);
  return uuid;
}
function setIdForNumber(n) {
  var rnd="";
  for(var i=0;i< n;i++)
  rnd+=Math.floor(Math.random()*10);
  return rnd;
}

3、随机数字版本  生成id是oya6pd 字母数字混合的
export function setIdForChar(val) {
  let uuid = Math.random().toString(36).slice(2);  //  关键是折行代码，具体看下面样例解释
  uuid = uuid.substr(uuid.length - val);
  return uuid;
}
随机数版本16进制版本
Math.random().toString(16)  生成类似 0.c1615913fa915 的ID
随机数版本36进制版本
Math.random().toString(36)  生成类似 0.hefy7uw6ddzwidkwcmxkzkt9 的ID

4、上面几种方式的结合体，应该是永远不重复
function getUuiD(randomLength){
 return Number(Math.random().toString().substr(2,randomLength) + Date.now()).toString(36)
}
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'javaScriptSetUUID',
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
