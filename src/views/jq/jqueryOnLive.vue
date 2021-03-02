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
jquery中绑定事件一般使用bind，或者click，但是这只能是对已经加载好的元素定义事件，那些后来添加插入的元素则需要另行绑定。在1.7版本以前使用live。但是在1.8版本以后推荐使用on。

$("#testdiv ul li").live("click",function(){  alert("live")   });
$("#testdiv ul").on("click","li",function(){  alert("on")   });
          </pre>
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
