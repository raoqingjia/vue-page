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
colResizable是一个jQuery插件，用于调整表格列的大小以手动拖动它们。它兼容鼠标和触摸设备，并具有一些很好的功能，例如页面刷新或回发后的布局持久性。
官网 http://www.bacubacu.com/colresizable/</pre>
          <h3>2.代码bug修改</h3>
        <pre>
这个插件说是兼容主流浏览器（IE7 +，Firefox，Chrome和Opera）完全兼容。但是我在IE8以下就玩完了，因为IE8不支持数组的indexOf
//解决办法就是添加数组IndexOf方法
if (!Array.prototype.indexOf){
  Array.prototype.indexOf = function(elt /*, from*/){
    var len = this.length >>> 0;

    var from = Number(arguments[1]) || 0;
    from = (from < 0)
         ? Math.ceil(from)
         : Math.floor(from);
    if (from < 0)
      from += len;

    for (; from < len; from++){
      if (from in this && this[from] === elt)
        return from;
    }
    return -1;
  };
}</pre>
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
