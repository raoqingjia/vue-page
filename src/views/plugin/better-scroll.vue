<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>1、better-scroll介绍</h3>
          <pre>
http://ustbhuangyi.github.io/better-scroll/doc/options.html API文档
Options 参数
<p class="pre-cmd">startX: 0 开始的X轴位置
startY: 0 开始的Y轴位置
scrollY: true 滚动方向为 Y 轴
scrollX: true 滚动方向为 X 轴
click: true 是否派发click事件，通常判断浏览器派发的click还是betterscroll派发的click，可以用event._constructed，若是bs派发的则为true
directionLockThreshold: 5
momentum: true 当快速滑动时是否开启滑动惯性
bounce: true 是否启用回弹动画效果
selectedIndex: 0 wheel 为 true 时有效，表示被选中的 wheel 索引
rotate: 25 wheel 为 true 时有效，表示被选中的 wheel 每一层的旋转角度
wheel: false 该属性是给 picker 组件使用的，普通的列表滚动不需要配置
snap: false 该属性是给 slider 组件使用的，普通的列表滚动不需要配置
snapLoop: false 是否可以无缝循环轮播
snapThreshold: 0.1 用手指滑动时页面可切换的阈值，大于这个阈值可以滑动的下一页
snapSpeed: 400, 轮播图切换的动画时间
swipeTime: 2500 swipe 持续时间
bounceTime: 700 弹力动画持续的毫秒数
adjustTime: 400 wheel 为 true 有用，调整停留位置的时间
swipeBounceTime: 1200 swipe 回弹 时间
deceleration: 0.001 滚动动量减速越大越快，建议不大于0.01
momentumLimitTime: 300 符合惯性拖动的最大时间
momentumLimitDistance: 15 符合惯性拖动的最小拖动距离
resizePolling: 60 重新调整窗口大小时，重新计算better-scroll的时间间隔
preventDefault: true 是否阻止默认事件
preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ } 阻止默认事件
HWCompositing: true 是否启用硬件加速
useTransition: true 是否使用CSS3的Transition属性
useTransform: true 是否使用CSS3的Transform属性
probeType: 1 滚动的时候会派发scroll事件，会截流。2滚动的时候实时派发scroll事件，不会截流。 3除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件</p>
Events 事件
<p class="pre-cmd">beforeScrollStart - 滚动开始之前触发
scrollStart - 滚动开始时触发
scroll - 滚动时触发
scrollCancel - 取消滚动时触发
scrollEnd - 滚动结束时触发
touchend - 手指移开屏幕时触发
flick - 触发了 fastclick 时的回调函数
refresh - 当 better-scroll 刷新时触发
destroy - 销毁 better-scroll 实例时触发
Example:

let scroll = new BScroll(document.getElementById('wrapper'),{
probeType: 3
})

scroll.on('scroll', (pos) => {
console.log(pos.x + '~' + pos.y)
  })</p>
函数列表
<p class="pre-cmd">scrollTo(x, y, time, easing)
滚动到某个位置，x,y 代表坐标，time 表示动画时间，easing 表示缓动函数
scroll.scrollTo(0, 500)
scrollToElement(el, time, offsetX, offsetY, easing)
滚动到某个元素，el（必填）表示 dom 元素，time 表示动画时间，offsetX 和 offsetY 表示坐标偏移量，easing 表示缓动函数
refresh()
强制 scroll 重新计算，当 better-scroll 中的元素发生变化的时候调用此方法
getCurrentPage()
snap 为 true 时，获取滚动的当前页，返回的对象结构为 {x, y, pageX, pageY}，其中 x,y 代表滚动横向和纵向的位置；pageX，pageY 表示横向和纵向的页面索引。用法如：getCurrentPage().pageX
goToPage(x, y, time, easing)
snap 为 true，滚动到对应的页面，x 表示横向页面索引，y 表示纵向页面索引， time 表示动画，easing 表示缓动函数（可省略不写）
enable()启用 better-scroll，默认开启
disable()  禁用 better-scroll
destroy() 销毁 better-scroll，解绑事件</p></pre>
          <h3>2、better-scroll填坑</h3>
          <pre>
1）注意结构体
&#60div class="wrapper">
  &#60div class="content">
    content...
  &#60/div>
&#60/div>
.wrapper元素一定添加
{
 overflow: hidden;
 height:"100%"; //一定要设置高度
}

2）一定要保证在DOM渲染完毕后初始化better-scroll，也就是添加延时执行，
setTimeout(() => {
this._initScroll()
}, 20)
或者
this.$nextTick(() => {
this._initScroll()
})
3）不知道大家做移动端的时候有没有遇到过一个问题，用了better-scroll了之后，设置了
this.scroll = new BScroll(this.$refs.cartcontent, {click: true});
然后在click事件中，做个判断
if (!e._constructed) {
  return;
}
然而，点击的时候，发现还是执行了两次，很抓狂有没有？想来想去，各种检查，还做了阻止事件冒泡，还是没啥用，于是我把click事件的那个按钮，把button标签改成了a标签，就好了。没错，就是把button标签改成a标签就好了！</pre>
          <h3>3、以Angular中使用better-scroll插件的方法</h3>
          <pre>
1)安装better-scroll
 1.npm install better-scroll --save
 2.安装types npm install better-scroll @types/better-scroll --save
2)在angular-cli里面引入
  "scripts": [
      "../node_modules/better-scroll/dist/bscroll.js"
   ]
3) 书写滚动组件
先ng g component list-scroll 创建滚动组件
list-scroll.ts
<p class="pre-cmd">import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
declare let BScroll;  //引入 better-scroll
@Component({
selector: 'app-list-scroll',
templateUrl: './list-scroll.component.html',
styleUrls: ['./list-scroll.component.css']
})
export class ListScrollComponent implements OnInit {

  @ViewChild('scroll') scrollEl: ElementRef;
  @Input()
  private height: number;
  public scroll;
  constructor() { }
  ngOnInit() {
    // 设置高度
    this.scrollEl.nativeElement.style.height = `${this.height}px`;
    // 初始化
    setTimeout(() => {
      this.scroll = new BScroll(this.scrollEl.nativeElement, {startY:true,click: true});
    }, 20);
  }
}</p>
list-scroll.html
<p class="pre-cmd">&#60div class="scroll" #scroll>
  &#60ng-content>&#60/ng-content>
&#60/div></p>
list-scroll.css
<p class="pre-cmd">.scroll{
  margin: 0;
  padding: 0;
  border: 1px solid red;
  overflow: hidden;
  }</p>
子其他组件的应用
<p class="pre-cmd">&#60app-list-scroll[height]="height">
 &#60ul>
   <&#60li class="item"*ngFor="let item of list; let num = index;">第{ {num}}个&#60/li>
 &#60/ul>
&#60/app-list-scroll></p></pre>
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

</style>
