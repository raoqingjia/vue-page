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
            1.利用了面相对象的思维去解决
          </h3>
          <pre>
//去除掉文字中间的空格，为下面的表单验证做准备
String.prototype.NoSpace = function(){return this.replace(/\s+/g, "");};
//这是用法
var str="df dfdf f ff ";
 alert(str.NoSpace());</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'trim',
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
