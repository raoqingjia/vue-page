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
            1.这是我利用js代码封装了一个tab切换的函数，缺点是html的格式固定，优点是调取方便
          </h3>
          <pre>
&#60!DOCTYPE html>
&#60html lang="en">
&#60head>
  &#60meta charset="UTF-8">
  &#60title>Title&#60/title>
  &#60style>
    *{
      margin: 0;
      padding: 0;
      font-size: 20px;
      font-family: "Adobe 宋体 Std L";
    }
    li {
      list-style: none;
    }
    .box{
      width: 500px;
      margin: 0 auto;
    }

    .box ul {
      height: 30px;
    }
    .box ul li{
      float: left;
      width: 100px;
      text-align: center;
      line-height: 30px;
      height: 30px;
      cursor: pointer;
    }
    .box>div{
      border: 2px yellowgreen solid;
      background-color: #bce8f1;
      height: 300px;
      width: 496px;
      display: none;

    }
    .active {
      background-color:silver;
    }
    .box .show{
      display: block;
    }

  &#60/style>
  &#60script>
    function tab (id,event){
      var box=document.getElementById(id);
      var oLI=box.getElementsByTagName("li");
      var oDiv=box.getElementsByTagName("div")
      for(var i=0;i < oLI.length;i++){
        oLI[i].index=i
        oLI[i][event]=function(){
          for(var i=0;i < oLI.length;i++){
            oLI[i].className="";
            oDiv[i].className="";
          }
          this.className="active";
          oDiv[this.index].className="show"
        }
      }
    }
    window.onload=function(){
      tab ("box1","onmouseover")
      tab ("box2","onclick")
    }
  &#60/script>
&#60/head>
&#60body>
<!--body中的结构一定要这么写，才能对上上边的js行为-->
&#60div class="box" id="box1">
  &#60ul>
    &#60li class="active">娱乐&#60/li>
    &#60li>军事&#60/li>
    &#60li>八卦&#60/li>
    &#60li>新闻&#60/li>
    &#60li>财经&#60/li>
  &#60/ul>
  &#60div class="show">娱乐多看点&#60/div>
  &#60div>新型军事武器&#60/div>
  &#60div>狗仔八卦看点&#60/div>
  &#60div>最新新闻动态&#60/div>
  &#60div>新一轮炒股热潮&#60/div>
&#60/div>
&#60div class="box" id="box2">
  &#60ul>
    &#60li class="active">娱乐&#60/li>
    &#60li>军事&#60/li>
    &#60li>八卦&#60/li>
    &#60li>新闻&#60/li>
    &#60li>财经&#60/li>
  &#60/ul>
  &#60div class="show">娱乐多看点&#60/div>
  &#60div>新型军事武器&#60/div>
  &#60div>狗仔八卦看点&#60/div>
  &#60div>最新新闻动态&#60/div>
  &#60div>新一轮炒股热潮&#60/div>
&#60/div>
&#60/body>
&#60/html></pre>
<!--body中的结构一定要这么写，才能对上上边的js行为-->
<div class="box" id="box1">
  <ul>
    <li class="active">娱乐</li>
    <li>军事</li>
    <li>八卦</li>
    <li>新闻</li>
    <li>财经</li>
  </ul>
  <div class="show">娱乐多看点</div>
  <div>新型军事武器</div>
  <div>狗仔八卦看点</div>
  <div>最新新闻动态</div>
  <div>新一轮炒股热潮</div>
</div>
<div class="box" id="box2">
  <ul>
    <li class="active">娱乐</li>
    <li>军事</li>
    <li>八卦</li>
    <li>新闻</li>
    <li>财经</li>
  </ul>
  <div class="show">娱乐多看点</div>
  <div>新型军事武器</div>
  <div>狗仔八卦看点</div>
  <div>最新新闻动态</div>
  <div>新一轮炒股热潮</div>
</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'jsRealizeTab',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    mounted(){
      this.$nextTick(function(){

        function tab (id,event){
          var box=document.getElementById(id);
          var oLI=box.getElementsByTagName("li");
          var oDiv=box.getElementsByTagName("div")
          for(var i=0;i<oLI.length;i++){
            oLI[i].index=i
            oLI[i][event]=function(){
              for(var i=0;i<oLI.length;i++){
                oLI[i].className="";
                oDiv[i].className="";
              }
              this.className="active";
              oDiv[this.index].className="show"
            }
          }
        }

        tab ("box1","onmouseover")
        tab ("box2","onclick")
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

  li {
    list-style: none;
  }
  .box{
    width: 500px;
    margin: 0 auto;
    margin-top: 10px;
  }

  .box ul {
    height: 30px;
  }
  .box ul li{
    float: left;
    width: 100px;
    text-align: center;
    line-height: 30px;
    height: 30px;
    cursor: pointer;
  }
  .box>div{
    border: 2px yellowgreen solid;
    background-color: #bce8f1;
    height: 150px;
    width: 496px;
    display: none;

  }
  .active {
    background-color:silver;
  }
  .box .show{
    display: block;
  }
</style>
