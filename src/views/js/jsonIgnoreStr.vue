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
            1、json在传输数据时会自动把0给忽略掉
          </h3>
          <pre>
当我使用json传送数据到后台时，后台读取json的数据，如果键值以0开头，那么0就会被自动的忽略掉。导致我在使用一串数字时，如果以0开头，查找就会出现错误，找不到对应的数字机构代码。解决的办法是在0之前加入特殊字符再做字符串的操作。使其还原为本来的数值;
待测试
一个\表示转义。如果和后面的字符不构成转义，则会忽略该\,解决办法是用 \\ 或者 /
是转意字符，他和后边的一个字符组合成一个被转意的字符
你应该写 2个\ 这样结果就是一个\了
在程序语言中 \ 反斜杠是json数据 中的转义符，用来标识”，/ 等等这些特殊符号的，js读取的时候当然会去掉咯。
\的转义字符是\\。两个\就是\\\
将空字符串用\转义（\'+变量+\'）
扩展一下：
js将0开头的数字认成八进制了；解决办法加一个空字符串，js就默认取字符串，容易忽略的是要将空字符串用\转义（\'+变量+\'）</pre>
          <h3>2、json书写格式一定要注意</h3>
          <pre>
注意问题：（所有符号为英文符号）
①、键值都应该有引号 " 包含
②、键和值之间用冒号 : 分开
③、每对键值对间用逗号 , 分割
④、一个键对应多个值则用中括号包含值，各值之间用逗号 , 分割 默认索引从0开始</pre>
          <h3>3、json数据含有中文，传输过程编码不一致导致乱码</h3>
          <pre>
很多情况下，我们是因为在不同的编码环境下（不同系统或者编程环境下）进行传输数据，中文会导致json串乱码，这样json解析函数无法解析json串。因为json穿的格式已经被乱码的符号所破坏。</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'jsonIgnoreStr',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    created(){},
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
