<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">

          <h3>1、scrollTop()在Android跟IOS下的值是不同的</h3>
           <pre>
Android $(document).scrollTop()==0 的最小值是0
ios     $(document).scrollTop()<=0 的值是可以小于等于0的
当判断当前页面滚筒条是否处于顶部的位置就要看是Android还是IOS了</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'scrollTop',
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
      forbidKeyboard(){
         document.activeElement.blur();
      }
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
