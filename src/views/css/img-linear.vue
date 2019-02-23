<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">

          <h3>1、主要是利用background实现双色</h3>
           <pre>
background: url("../../img/arrow-down.png")  220px center no-repeat ,linear-gradient( 0deg, rgb(241,243,247) 0%, rgb(255,255,255) 100%)!important;</pre>
           <input class="input" type="text">
          <h3>2、css3设置多张背景图片,主要是逗号隔开</h3>
          <pre>
可以如下写：
<p class="pre-cmd">background:url("haoroomsCSS1_s.jpg") 0 0 no-repeat,
url("haoroomsCSS2_s.jpg") 200px 0 no-repeat,
url("haorooms.jpg") 400px 201px no-repeat;
</p>
也可以这么写：
<p class="pre-cmd">background-image:url("1.jpg"),url("2.jpg"),url("3.jpg");
background-repeat: no-repeat, no-repeat, no-repeat;
background-position: 0 0, 200px 0, 400px 201px;
</p>          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'img-linear',
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
  .input {
    line-height: 34px;
    width: 220px;
    padding: 0 5px;
    font-size: 12px;
    color: #a9adb3;
    cursor: pointer;
    border: 1px solid #ced0da;
    border-radius: 3px;;
    background: url("../../img/arrow-down.png")  200px center no-repeat ,linear-gradient( 0deg, rgb(241,243,247) 0%, rgb(255,255,255) 100%)!important;
  }
</style>
