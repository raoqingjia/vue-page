<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <div class="tri-up"></div>
          <div class="tri-left"></div>
          <div class="tri-right"></div>
          <div class="tri-down"></div>
          <pre>
&#60div class="tri-up">&#60/div>
&#60div class="tri-left">&#60/div>
&#60div class="tri-right">&#60/div>
&#60div class="tri-down">&#60/div>
.tri-up{width: 0;height:0;border-left:20px solid transparent;border-right: 20px solid transparent;border-bottom: 20px solid red;  }
.tri-left{width: 0;height:0;border-top:20px solid transparent;border-bottom: 20px solid transparent;border-left: 20px solid red;}
.tri-right{width: 0;height:0;border-top:20px solid transparent;border-bottom: 20px solid transparent;border-right: 20px solid red;}
.tri-down{width: 0;height:0;border-left:20px solid transparent;border-right: 20px solid transparent;border-top: 20px solid red; }</pre>
          <div class="box"></div>
          <pre>
&#60div class="box">&#60/div>
.box{
  width: 100px;
  height:100px;
  background-color: #c4e3f3;
  border-radius: 3px;
  border: 1px solid #6a92d3;
  position: relative;   /*为了给after定位用的*/
  z-index: 10;
}
.box:after{
   content: "";
   position: absolute;   /*这里要注意*/
   top: -20px;
   left: 50%;
   margin-left: -5px;
   width: 0;
   height: 0;
   border-top: 10px solid transparent;    /*这里是关键所在啊 边角的宽度设置的太小看不清的*/
   border-bottom: 10px solid red;
   border-right: 10px solid transparent;
   border-left: 10px solid transparent;
}</pre>
          <div id="demo"></div>
          <pre>
/*方框的样式*/
#demo {
  width: 100px;
  height: 100px;
  background-color: #fff;
  position: relative;
  border: 2px solid #333;
}
#demo:after, #demo:before {
  border: solid transparent;
  content: ' ';
  height: 0;
  width: 0;
  left: 100%;     /*根据三角形的位置，可以随意更改。*/
  position: absolute;
}
/*此处是一个白色的三角*/
#demo:after {
  border-width: 10px;
  border-left-color: #fff;
  top: 20px; /*根据三角的位置改变*/
}
/*此处是一个黑色的三角*/
 #demo:before {
   border-width: 12px;
   border-left-color: #000;
   top: 18px;
 }
/*此处的三角边框 是利用#demo:after和#demo:before的样式重合进行的叠加效果。*/</pre>



        </div>



      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
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
.box{
  width: 100px;
  height:100px;
  background-color: #c4e3f3;
  border-radius: 3px;
  border: 1px solid #6a92d3;
  position: relative;   /*为了给after定位用的*/
  z-index: 10;
}
.box:after{
   content: "";
   position: absolute;   /*这里是关键啊*/
   top: -20px;
   left: 50%;
   margin-left: -5px;
   width: 0;
   height: 0;
   border-top: 10px solid transparent;
   border-bottom: 10px solid #6a92d3;
   border-right: 10px solid transparent;
   border-left: 10px solid transparent;
}
.tri-up{width: 0;height:0;border-left:20px solid transparent;border-right: 20px solid transparent;border-bottom: 20px solid red;  }
.tri-left{width: 0;height:0;border-top:20px solid transparent;border-bottom: 20px solid transparent;border-left: 20px solid red;}
.tri-right{width: 0;height:0;border-top:20px solid transparent;border-bottom: 20px solid transparent;border-right: 20px solid red;}
.tri-down{width: 0;height:0;border-left:20px solid transparent;border-right: 20px solid transparent;border-top: 20px solid red; }

/*方框的样式*/
#demo {
  width: 100px;
  height: 100px;
  background-color: #fff;
  position: relative;
  border: 2px solid #333;
}
#demo:after, #demo:before {
  border: solid transparent;
  content: ' ';
  height: 0;
  width: 0;
  left: 100%;     /*根据三角形的位置，可以随意更改。*/
  position: absolute;
}
/*此处是一个白色的三角*/
#demo:after {
  border-width: 10px;
  border-left-color: #fff;
  top: 20px; /*根据三角的位置改变*/
}
/*此处是一个黑色的三角*/
 #demo:before {
   border-width: 12px;
   border-left-color: #000;
   top: 18px;
 }
/*此处的三角边框 是利用#demo:after和#demo:before的样式重合进行的叠加效果。*/

</style>
