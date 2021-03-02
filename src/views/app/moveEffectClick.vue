<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">

          <h3>1、当手指触摸滚动页面时，很可能触发到绑定的点击事件，此时就该加个变量判断</h3>
           <pre>
//当父级元素滚动触发touchmove时，禁止子级元素的touchend点击事件
var move=true;  //这个就是判断变量
$("body").on("touchmove",function(e){
    move=false                //body处于滚动时，禁止点击事件
    e.preventDefault();       //阻止事件冒泡
});
 $("body").on("touchend",function(e){
    move=false               //body处于点击，允许其他元素点击
    e.stopPropagation();     //阻止事件冒泡
});
$("#box").on("touchend",function(){
    if(move){
       alert(1)
    }
})
----------------------------------------------------------
window.addEventListener('touchmove', function(e){
    move=false
    e.preventDefault();
})
window.addEventListener('touchend', function(e){
    if(move){
       alert(1)
    }
    e.preventDefault();
})
window.addEventListener('touchend', function(e){
    if(move){
       alert(1)
    }
    e.preventDefault();
})
</pre>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'returnReload',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    mounted(){
      this.$nextTick(function(){

      })
    },
    methods: {

    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input{
    padding: 8px;
    margin:8px 0;
    border: 1px solid #CCCCCC;
    border-radius: 4px;
  }
  p{
    margin: 10px 0;
  }
</style>
