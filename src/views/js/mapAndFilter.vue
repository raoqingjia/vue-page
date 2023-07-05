<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>1、 场景：数组的处理 例如： [' 按时 ', '说是否 ', '', ' 大声地 ', ' 说', '收到', ' 好样的', '',undefined,null]

2、 目的：该数组中有 空字符串、null、 undefined，还有的字符串前后有空格。目前想要把字符串的前后空格去掉，空字符串、undefined、null 都去掉

3、 构思：一开始的想法，通过filter 过略掉undefined、null，并通过trim 去掉字符串的前后空格，想的很美，于是就开干了，下面是我实现的代码，但是结果不尽人意呢
const ary = [' 按时 ', '说是否 ', '', ' 大声地 ', ' 说', '收到', ' 好样的', '',undefined,null];
const res = ary.filter(function (s) {return s && s.trim()});
console.log(res); // [ ' 按时 ', '说是否 ', ' 大声地 ', ' 说', '收到', ' 好样的' ]

4、 结果：undefined、null、空字符串这些内容都可以通过filter过略掉，但是字符串的前后空格怎么没有去掉，明明已经用了trim()，
最后怀疑到filter身上了，这个家伙是不是只对数据做过滤，不能加工数据呀？找度娘吧，找到了一句话：filter是满足条件的留下，是对原数组的过滤

5、 解决方案： 先map 后 filter
const ary = [' 按时 ', '说是否 ', '', ' 大声地 ', ' 说', '收到', ' 好样的', '',undefined,null];
const res = ary.map(function (s) {return s && s.trim()}).filter(function (s) {return s && s});
console.log(res); // [ '按时', '说是否', '大声地', '说', '收到', '好样的' ]

6、 经验总结：filter 和 map 都是对数组的操作，均返回一个新的数组，但是 filter是满足条件的留下，是对原数组的过滤；map则是对原数组的加工，映射成一对一的新数组
filter 和 map 可以链式拼接</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'mapAndFilter',
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
