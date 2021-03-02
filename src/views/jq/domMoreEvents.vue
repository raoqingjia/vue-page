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
            1.多个元素绑定同一个事件
          </h3>
          <pre>
$(".close , .cancel").click(function(){
    alert("你好");
});
// .pro-select , .mobileSelect 多个元素之间用逗号隔开
$("body").on("touchmove",".pro-select , .mobileSelect",function(e){
	e.stopPropagation();
});</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'domMoreEvents',
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
