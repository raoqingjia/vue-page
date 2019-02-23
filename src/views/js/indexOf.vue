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
            1.在使用indexOf方法前，验证一下是否存在该方法IndexOf方法，如果有调用；如果没有就添加一个：
          </h3>
          <pre>
//添加数组IndexOf方法
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
          <h3>
            1.jquery里面也有类似工具函数（jQuery.inArray()方法）
          </h3>
          <pre>
var arr = [ 4, "Pete", 8, "John" ];
jQuery.inArray("John", arr);  //3
jQuery.inArray(4, arr);  //0
jQuery.inArray("David", arr);  //-1
jQuery.inArray("Pete", arr, 2);  //-1</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'indexOf',
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
