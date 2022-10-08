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
            1.关于这个插件
          </h3>
          <pre>
Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。
相关网址
https://www.lodashjs.com/
http://lodash.net/
lodash 教程
https://cloud.tencent.com/developer/doc/1138</pre>
          <h3>2.常用的命令</h3>
        <pre>
var array = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 34 }
];
import lodash from 'lodash'

实现深拷贝
const flag lodash.cloneDeep(array)

返回移除元素组成的新数组
const evens = lodash.remove(array, function(n) {
  return n % 2 == 0;
});

.map和forEach，数组遍历。（相似）
如果不明白map和forEach有什么相似的可以百度一下，简单说一下不同点就是，map的回调函数中是支持return返回值的。不过二者都不改变原来的数组。
const flag = lodash.map(array,item => {x.age+1})</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'colresizable',
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
