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
在@keyframes中，我们定义动画关键帧
然后animation会按照keyframes关键帧里我们指定的帧状态进行过渡执行
0% - 100% 就代表动画的时间过渡
规则中的0%和100%，
可以替换成from和to关键字

@keyframes xxx {
    from {
        ......
    }
    to {
        ......
    }
}
1）定义动画
@keyframes 动画名称（英文/或是中文名）{
      0%{ ...... }
      50%{ ...... }    <-- 这里千万别加分号
      100%{ ...... }
  }
2）应用动画
#box{ animation：动画名称 执行时间 动画类型 延迟时间  循环 }
循环 - n（整数，循环次数）  infinite (无限循环)
3）animation-delay 动画延迟时间</pre>
          <div id="box">
            <div class="ball_1"></div>
            <div class="ball_2"></div>
          </div>
          <pre>
html结构
&#60div id="box">
 &#60div class="ball_1">&#60/div>
 &#60div class="ball_2">&#60/div>
&#60/div>
css结构
#box {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  margin-top: 80px;
  position: relative;
  border: 1px blue dotted;
  border-radius: 10px;
}
#box>div{
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 10px;
  position: absolute;
  left: 0;
  top: 0;
}
#box .ball_1 {
  animation: run 4s infinite;
}
#box .ball_2 {
  animation: run 4s infinite;
  animation-delay: 0.5s;  /* 只是延迟了0.5s*/
}
@keyframes run {   /* run是动画名称*/
  0%  {  left: 0;      top: 0;  }
  25% {  left: 180px;  top: 0;  }
  50% {  left: 180px;  top: 180px;  }
  75% {  left: 0;      top: 180px;  }
  100% { left: 0;      top: 0;  }
}</pre>
          <div class="run"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'key-frames',
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
#box {
  width: 200px;
  height: 200px;
  position: relative;
  border: 1px #CCCCCC dotted;
  border-radius: 10px;
}
#box>div{
  width: 20px;
  height: 20px;
  background-color: #8b94c5;
  border-radius: 10px;
  position: absolute;
  left: 0;
  top: 0;
}
#box .ball_1 {
  animation: run 4s infinite;
}
#box .ball_2 {
  animation: box 4s infinite;
  animation-delay: 0.5s;  /* 只是延迟了0.5s*/
}
@keyframes box {   /* box是动画名称*/
  0%  {  left: 0;      top: 0;  }
  25% {  left: 180px;  top: 0;  }
  50% {  left: 180px;  top: 180px;  }
  75% {  left: 0;      top: 180px;  }
  100% { left: 0;      top: 0;  }
}

.run{
  width:140px;
  height:140px;
  background: url("../../img/keyFrames.png") no-repeat left center ;
  background-size: cover;
  cursor: pointer;

}
.run:hover{
  animation:rotating 2s linear  5;  ;

}
@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>
