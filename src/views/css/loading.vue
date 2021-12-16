<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>1、添加loading图片（兼容性不错，但是图片要压缩）</h3>
          <pre>
/*loading遮罩层的效果*/
.loading-div .discover {
  z-index:2000;
  width:100%;
  height:100%;
  position:fixed;
  top:0;
  left:0;
  background:#444;
  background:rgba(4,4,4,0.8);
  filter:alpha(opacity=80);
  clear:both;
}
.loading-div  .Loading{
  left: 47%;
  top: 45%;
  position: fixed;
  z-index: 2001;
  font-size: 24px;
  color: #ffffff;
}
&#60div class="loading-div" ng-show="loading">
  &#60div class="discover">&#60/div>
  &#60div class="Loading">
    <!--<strong>Loading...</strong>-->
  &#60img src="images/loadingPic.gif">
&#60/div></pre>
          <h3>2、利用css样式添加loading动画效果（兼容性差点）</h3>
          <pre>
效果展示：
<img src="../../img/css/css-loading02.jpg" style="width: 150px">
/*loading遮罩层的效果*/
.loading-box .discover {
  z-index:2000;
  width:100%;
  height:100%;
  position:fixed;
  top:0;
  left:0;
  background:#444;
  background:rgba(4,4,4,0.5);
  filter:alpha(opacity=80);
  clear:both;
}
.loading-box  .loading{
  width: 70px;
  height: 70px;
  margin: 200px auto;
  position: relative;
  z-index: 2001;
  border: 5px solid #0099e6;
  border-left-color: #ddd;
  border-radius: 50px;
  animation: load-animate 1s linear infinite;
  -webkit-animation:load-animate 1s linear infinite;
  -ms-animation: load-animate 1s linear infinite;
}
// @keyframes是实现动画的关键
@keyframes load-animate{
  from{
    transform:rotate(0deg) ;
  }
  to{
    transform: rotate(360deg);
  }
}
@-webkit-keyframes load-animate{
  from{
    transform:rotate(0deg) ;
  }
  to{
    transform: rotate(360deg);
  }
}
@-ms-keyframes load-animate{
  from{
    transform:rotate(0deg) ;
  }
  to{
    transform: rotate(360deg);
  }
}
&#60div class="loading-box">
  &#60div class="discover">&#60/div>
  &#60div class="loading">
&#60/div>

PS：
animation: load-animate 1s linear infinite;
inear为匀速运动
ease：动画以低速开始，然后加快，在结束前变慢。
ease-in：动画以低速开始
ease-out：动画以低速结束</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'loading',
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
