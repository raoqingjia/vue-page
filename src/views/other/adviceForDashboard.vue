<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>1、高度用rem，宽度用百分比，按设计稿的高度和使用者显示器的高度等比计算</h3>
          <pre>
const docEl = document.documentElement,
  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
  recalc = function recalc() {
    var clientHeight = docEl.clientHeight;
    console.log(docEl.clientHeight);
    if (!clientHeight) return;
    docEl.style.fontSize = 20 * (clientHeight / 1080) + 'px'; // 高度用rem，宽度用百分比
  };
recalc();
window.addEventListener(resizeEvt, recalc, false);
document.addEventListener('DOMContentLoaded', recalc, false);
这样布局和设计稿保持一直，也不会出现左右上下留白的效果，但是如果计算系数的比例过大的话，就容易比例失调
参考vue-page中osDashboard的写法</pre>
            <h3>2、统计自己网站有哪些主流的屏幕设备，然后去针对那些设备去做media query设置也可以实现适配</h3>
          <pre>
好处是不至于比例系数过大，页面比例失调，但是要统计主流屏幕设备，这个不太好统计
html {
    font-size : 20px;
}
@media only screen and (min-width: 401px){
    html {
        font-size: 25px !important;
    }
}
@media only screen and (min-width: 428px){
    html {
        font-size: 26.75px !important;
    }
}
@media only screen and (min-width: 481px){
    html {
        font-size: 30px !important;
    }
}
@media only screen and (min-width: 569px){
    html {
        font-size: 35px !important;
    }
}
@media only screen and (min-width: 641px){
    html {
        font-size: 40px !important;
    }
} </pre>
          <h3>3、根据设计稿等比例缩放</h3>
          <pre>
利用transform:scale 和 top、left 根据设计稿等比例缩放，原理就是以浏览器版心为中心点，等比例缩放
优点事是设计稿比例一比一还原，缺点是上下所有留有留白，参考os-web中StatisticsScreen文件的写法

Tools.js文件计算比例系数
let Tools = {};
Tools.fitScreen = (width, height) => {
    var fx = document.documentElement.clientWidth;
    var fy = document.documentElement.clientHeight;
    console.log(fx);
    console.log(fy);
    let zoom = 1; // 等比例缩放值
    let left = 0;
    let top = 0;
    if (fy / fx < height / width) {
        zoom = fy / height;
        left = (fx - fy / height * width) / 2 + 'px';
        top = '0px';
    } else {
        zoom = fx / width;
        top = (fy - fx / width * height) / 2 + 'px';
        left = '0px';
    }
    document.querySelector('.statistics-screen').setAttribute('style', "transform:scale(" + zoom + "," + zoom + ")" + ";" + "top:" + top + ";" + "left:" + left)
    window.onresize = () => {   //   window.onresize 中的内容可以和上边的代码合成一个方法
        var fx = document.documentElement.clientWidth;
        var fy = document.documentElement.clientHeight;
        let zoom = 1;
        let left = 0;
        let top = 0;
        if (fy / fx < height / width) {
            zoom = fy / height;
            left = (fx - fy / height * width) / 2 + 'px';
            top = '0px'
        } else {
            zoom = fx / width;
            top = (fy - fx / width * height) / 2 + 'px';
            left = '0px';
        }
        document.querySelector('.statistics-screen').setAttribute('style', "transform:scale(" + zoom + "," + zoom + ")" + ";" + "top:" + top + ";" + "left:" + left)
    }
};
export default Tools;

html
Tools.fitScreen(1920,1080); 设定涉及搞为1920*1080

.statistics-screen{
    width: 1920px;
    height: 1080px;
    background-size: 100% 100%;*/
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: 0 0;
}</pre>
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
