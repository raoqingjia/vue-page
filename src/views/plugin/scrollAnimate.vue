<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <ul class="catalogue clearfix">
            <li v-for="(items,index) in catalogue"  :key="index" ><a @click="jump(index)">{{index+1}}、{{items.name}}</a></li>
          </ul>
          <h3>WOW.js</h3>
          <pre>WOW.js 依赖 animate.css，所以它支持 animate.css 多达 60 多种的动画效果，能满足您的各种需求
使用方法
1、引入文件
< link rel="stylesheet" href="css/animate.min.css">

2.引入wow.js并且初始化
< script src="js/wow.min.js">< /script>
< script>
new WOW().init();
如果需要自定义配置，可如下使用：
var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
});
wow.init();
< /script>

3、HTML
< div class="wow slideInLeft">< /div>
< div class="wow slideInRight">< /div>
可以加入 data-wow-duration（动画持续时间）和 data-wow-delay（动画延迟时间）属性，如：
< div class="wow slideInLeft" data-wow-duration="2s" data-wow-delay="5s">< /div>
< div class="wow slideInRight" data-wow-offset="10"  data-wow-iteration="10">< /div>

配置
属性/方法	类型	默认值	说明
boxClass	字符串	‘wow’	需要执行动画的元素的 class
animateClass	字符串	‘animated’	animation.css 动画的 class
offset	整数	0	距离可视区域多少开始执行动画
mobile	布尔值	true	是否在移动设备上执行动画
live	布尔值	true	异步加载的内容是否有效</pre>
          <h3>scrollReveal.js</h3>
          <pre>不同的是 WOW.js 的动画只播放一次，而 scrollReveal.js 的动画可以播放一次或无限次；WOW.js 依赖 animate.css，而 scrollReveal.js 不依赖其他任何文件。
虽然 scrollReveal.js 不依赖 animate.css，但它的动画也是用 CSS3 创建的，所以它不支持 IE10 以下的浏览器。
1、引入文件
< script src="js/scrollReveal.js">< /script>
2、HTML
< div data-scroll-reveal>dowebok.com< /div>
必须给元素加上 data-scroll-reveal 属性，加上之后会执行默认的动画效果，你也可以自定义改属性以显示不同的动画效果，如：
< div data-scroll-reveal="enter left and move 50px over 1.33s">dowebok.com< /div>
< div data-scroll-reveal="enter from the bottom after 1s">Hello world!< /div>
< div data-scroll-reveal="wait 2.5s and then ease-in-out 100px">iPhone 6< /div>
3、JavaScript
window.scrollReveal = new scrollReveal();
//或者，elem 为动画元素的任何级别的父元素
window.scrollReveal2 = new scrollReveal({elem: document.getElementById('srcontainer')});
data-scroll-reveal属性
上面说了可以自定义 data-scroll-reveal 属性，下面来看看该属性的关键词和值（可选）。

enter
说明: 动画起始方向
值: top | right | bottom | left
move
说明: 动画执行距离
值: 数字，以 px 为单位
over
说明: 动画持续时间
值: 数字，以秒为单位
after/wait
说明: 动画延迟时间
值: 数字，以秒为单位
填充（可选）
可以在 data-scroll-reveal 属性里填充（添加）一些类似编程的“语句”，使其更有可读性，scrollReveal.js 支持以下“语句”：
from、the、and、then、but、with
也就是可以像这样写 HTML：
< div data-scroll-reveal="wait 0.3s, then enter left and move 40px over 2s">dowebok.com< /div>
< div data-scroll-reveal="enter from the left after 0.3s, move 40px, over 2s">Hello world!< /div>
< div data-scroll-reveal="enter left move 40px over 2s after 0.3s">iPhone 6< /div>
< div data-scroll-reveal="enter left, move 40px, over 2s, wait 0.3s">I love you< /div>
高级用法
自定义默认值
可以更改 scrollReveal.js 的默认配置，如：
var config = {
    after: '0s',
    enter: 'bottom',
    move: '24px',
    over: '0.66s',
    easing: 'ease-in-out',
    viewportFactor: 0.33,
    reset: false,
    init: true
};
window.scrollReveal = new scrollReveal(config);
动态HTML
scrollReveal.init() 方法可以检测所有含有 data-scroll-reveal 属性的元素，并进行初始化，所以对于动态加载的元素，可以这样操作：
var config = {
    enter: 'bottom',
    move: '40px',
    over: '0.16s',
    reset: true,
    init: false
};
window.scrollReveal = new scrollReveal(config);
var data = {newElementHtml: '< div data-scroll-reveal>dowebok.com< /div>'};
var container = document.getElementById('#container');
container.innerHTML(data.newElementHTML);
scrollReveal.init();</pre>
          <h3>aos.js</h3>
          <pre>安装
可以通过bower来安装aos动画库插件
bower install aos --save
要使用aos动画库，你需要做的就是在需要动画的元素上添加aos属性，例如：
< div aos="animation_name">
aos脚本将会在页面滚动时，在该元素上触发相应的动画。
在元素上还可以添加以下一些属性：
属性	属性	属性	默认值
aos-offset	是立刻触发动画还是在指定时间之后触发动画	200	120
aos-duration	动画持续时间	600	400
aos-easing	动画的easing动画效果	ease-in-sine	ease
aos-delay	动画的延迟时间	300	0
aos-anchor	锚元素。使用它的偏移来取代实际元素的偏移来触发动画	#selector	null
aos-anchor-placement	锚位置，触发动画时元素位于屏幕的位置	top-center	top-bottom
aos-once	动画是否只会触发一次，或者每次上下滚动都会触发	true	false
注意，aos-duration的动画持续时间的范围从50-3000毫秒，如果你想设置更大的值，可以在页面中添加下面的CSS代码：
body[aos-duration='4000'] [aos], [aos][aos][aos-duration='4000']{
  transition-duration: 4000ms;
}
上面的代码将动画的持续时间修改为4000毫秒。
示例代码：
< div aos="fade-zoom-in" aos-offset="200" aos-easing="ease-in-sine" aos-duration="600">
< div aos="flip-left" aos-delay="100" aos-anchor=".example-selector">
< div aos="fade-up" aos-anchor-placement="top-center">
如果你担心HTML5校验的问题，可以为上面的属性添加data-前缀。
< div data-aos="animation_name" data-aos-offset="200" data-aos-easing="ease-in-sine">
全局配置
如果你不想单独每个元素做一个动画配置，你可以通过init()方法来统一配置所有元素的动画效果。
AOS.init({
  offset: 200,
  duration: 600,
  easing: 'ease-in-sine',
  delay: 100,
});</pre>
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
        title: this.$route.query.name,
        catalogue:[]
      }
    },
    mounted:function(){
      this.$nextTick(function(){
        this.createCatalogue();
      })
    },
    computed:{},
    methods: {
      jump (index) {
//        let jump = document.getElementsByTagName('h3');
//       // 获取需要滚动的距离
//        let total = jump[index].offsetTop;
//        // Chrome
//        document.body.scrollTop = total;
//        // Firefox
//        document.documentElement.scrollTop = total;
//       // Safari
//        window.pageYOffset = total
//        https://www.cnblogs.com/wisewrong/p/6495726.html  参考网站
        let jump = document.getElementsByTagName('h3');
        let total = jump[index].offsetTop;  // 获取目标位置滚动的距离
        let distance = document.documentElement.scrollTop || document.body.scrollTop; //获取当前滚动轴的位置
        // 平滑滚动，时长500ms，每10ms一跳，共50跳
        let step = total / 50;
        if (total > distance) {
          smoothDown()
        } else {
          let newTotal = distance - total;  //防止total，let step=total/50太小，移动缓慢
          step = newTotal / 50;
          smoothUp()
        }

        function smoothDown () {
          if (total>distance ) {
            distance += step;
            document.body.scrollTop = distance;
            document.documentElement.scrollTop = distance;
            setTimeout(smoothDown, 10)
          } else {
            document.body.scrollTop = total;
            document.documentElement.scrollTop = total
          }
        }
        function smoothUp () {
          if ( total<distance) {
            distance -= step;
            document.body.scrollTop = distance;
            document.documentElement.scrollTop = distance;
            setTimeout(smoothUp, 10)
          } else {
            document.body.scrollTop = total;
            document.documentElement.scrollTop = total
          }
        }
      },
      //创建目录函数
      createCatalogue(){
        let object = document.getElementsByTagName('h3');
        var flag=[];
        for(var i=0;i<object.length;i++){
          var o={name:object[i].innerHTML};
          flag.push(o)
        }
        this.catalogue=flag;
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
