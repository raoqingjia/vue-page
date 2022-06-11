<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3> rem是什么？</h3>
          <pre>
rem（font size of the root element）是指相对于根元素的字体大小的单位。简单的说它就是一个相对单位。看到rem大家一定会想起em单位，em（font size of the element）是指相对于父元素的字体大小的单位。它们之间其实很相似，只不过一个计算的规则是依赖根元素一个是依赖父元素计算。
rem是通过根元素进行适配的，网页中的根元素指的是html我们通过设置html的字体大小就可以控制rem的大小。
举个例子
html{
    font-size:20px;
}
.btn {
    width: 6rem;
    height: 3rem;
    line-height: 3rem;
    font-size: 1.2rem;
    background: #06c;
    color: #fff;
    border-radius: .5rem;
}
按钮最后呈现为宽度120px，高度60px，字体24px，圆角10px，呈现出这种效果是因为
10px  = 1rem  在根元素为font-size = 10px的时候；
20px  = 1rem  在根元素为font-size = 20px的时候；
 </pre>
          <pre>
列举一下现在设计稿的参考依据，现在多以iPhoneX尺寸为准，用二倍图尺寸设计稿
机型       一倍图     二倍图      逻辑分辨率(point)   物理分辨率(pixel)  缩放因子
iphone5   320*568   640*1136   320*568            1136*640          2x
iPhoneX   375*812   750*1624   375*812            2436*1125         3x
物理分辨率是硬件所支持的，逻辑分辨率是软件可以达到的。
https://blog.csdn.net/a18339063397/article/details/81482073  苹果手机各种尺寸详细表

16年的时候一般移动端设计稿为640*1136（px）,假设我们设置html的font-size为10px即1rem=10px;我们以iphone5为浏览设备为标准制作，那么我们在切图写页面的时候，rem和px这个关系是怎样处理的呢？（注：iphone5逻辑分辨率(point)为320*568px）
答：假定我们从设计稿上切一张480px的图，我们的rem计算过程为：
320/640=1/2； //应该设置的尺寸占设计稿尺寸多少比例
480*（1/2）/10=480/20=24rem
总结公式：设计稿任意尺寸px*（设备屏幕px/设计稿尺寸px）/(font-size)；

上面是简单的叙述，下面来点详细的

rem布局非常使用你只需在页面引入下面这段原生js代码就可以了
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=640){
                docEl.style.fontSize = '100px';
            }else{
                docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

这是rem布局的核心代码，这段代码的大意是：
如果页面的宽度超过了640px，那么页面中html的font-size恒为100px，否则，页面中html的font-size的大小为： 100 * (当前页面宽度 / 640) 于是，问题来了，为什么要这样？别急，我先来一一回答

为什么是640px？
对于手机屏幕来说，640px的页面宽度是一个安全的最大宽度，保证了移动端页面两边不会留白。注意这里的px是css逻辑像素，与设备的物理像素是有区别的。如iPhone 5使用的是Retina视网膜屏幕，使用2px x 2px的 device pixel 代表 1px x 1px 的 css pixel，所以设备像素数为640 x 1136px，而它的CSS逻辑像素数为320 x 568px。 如果要切移动端页面，你可以先把效果图宽度等比例缩放到640px，很好用。

为什么要设置html的font-size？
rem就是根元素（即：html）的字体大小。html中的所有标签样式凡是涉及到尺寸的（如： height,width,padding,margin,font-size。甚至，left,top等）你都可以放心大胆的用rem作单位。 如果你把html的font-size设为20px，前面说过，rem就是html的字体大小，那么1rem = 20px。 此时，此时宽60px，高40px的元素样式就这样设置如下 ↓
width: 3rem;
height: 2rem;
那要是宽55px，高37px呢？然后经过换算，设置如下 ↓
width: 2.75rem;
height: 1.85rem;
如果我们一开始把html的font-size设为100px呢？此时1rem = 100px，那么上面的宽55px，高37px的元素样式就可以这么设置 ↓
width: 0.55rem;
height: 0.37rem;
这样是不是换算起来简单多了？但是浏览器一般都有最小字体限制，比如谷歌浏览器，最小中文字体就是12px，所以实际上没有办法让1rem=1px。根据上面的js代码，如果页面宽度低于640px,那么页面中html的font-size也会按照（当前页面宽度/640）的比例变化。这样，页面中凡是应用了rem的作尺寸单位的元素都会随着页面变化而等比例缩放了！

都哪些情况可以用rem布局？
大部分情况下都可以用rem布局这个方法，当然具体还要看情况而定。拿我们公司项目举例，只有底部的导航不用rem，而是用的flex布局。因为导航点击最多，所以给它一个固定的大小（其实就是高度固定，宽度自适应的方案）。大家可以看看淘宝的这个手机页面 淘宝手机站，基本就是这种感觉，底部导航和顶部搜索框用的高固定，宽自适应的方案，其余的部分基本都是随着浏览器宽度变化在等比例缩放。

通过JS去动态计算根元素的font-size，这样的好处是所有设备分辨率都能兼容适配，淘宝首页目前就是用的JS计算。但其实不用JS我们也可以做适配，一般我们在做web app都会先统计自己网站有哪些主流的屏幕设备，然后去针对那些设备去做media query设置也可以实现适配，例如下面这样：
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
</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'rem',
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
