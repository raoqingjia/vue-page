<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">

          <h3>1、利用border做出锯齿状其实就是利用css样式</h3>
           <pre>
&#60div class="content">
  &#60div class="box">
  &#60/div>
&#60/div>
关键是子级的border颜色与父级的背景色一致
.content{
    padding: 10px 20px;
    background-color: #d9eef2;   //这里
}
.box{
    color:#1f4c7a;
    background-color: #FFFFFF;
    border:2px dashed  #d9eef2;   //这里
    width: 200px;
    height: 80px;
}
</pre>
<div class="border-content">
   <div class="box">
   </div>
</div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'borderCreateZigzag',
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
  .border-content{
    padding: 10px 20px;
    background-color: #d9eef2;
  }
  .box{
     color:#1f4c7a;
     background-color: #FFFFFF;
     border:5px dotted  #d9eef2;
     width: 300px;
     height: 80px;
  }

</style>
