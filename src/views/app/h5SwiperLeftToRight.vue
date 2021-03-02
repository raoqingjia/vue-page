<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">

          <h3>1、在H5项目中利用jQueryMobile框架页中现实左右滑动手势翻页的功能</h3>
           <pre>
swipeleft    当用户从左划过元素超过 30px 时触发。
swiperight    当用户从右划过元素超过 30px 时触发
var swipeleftArray = ['index', 'pie', 'hightValue', 'search', 'scale'],
publicHref = '/salss/';
$(document).on("pageinit", "#pageone", function() {
	var swipeTag = parseInt($('body').attr('data-tag'));
	$(document).on("swipeleft", function() {
		if(swipeTag + 1 >= swipeleftArray.length) {  //说明向右滑到头
			return false;
		}else{
       window.location = swipeleftArray[swipeTag + 1] + '.html';
    }
	});
	$(document).on("swiperight", function() {
		if(swipeTag == 0) {  //说明向左滑到头
			return false;
		} else {
			window.location = swipeleftArray[swipeTag - 1] + '.html';
		}
	});
});
 </pre>
          <h3>2、在H5项目中现实上下滑动手势翻页的功能</h3>
          <pre>
$(document).on("touchstart", function(e) {
	startX = e.originalEvent.changedTouches[0].pageX,
	startY = e.originalEvent.changedTouches[0].pageY;
});
$(document).on("touchmove", function(e) {
moveEndX = e.originalEvent.changedTouches[0].pageX,
moveEndY = e.originalEvent.changedTouches[0].pageY,
X = moveEndX - startX,
Y = moveEndY - startY;
if ( Math.abs(Y) > Math.abs(X) && Y > 100) {
  window.location = 'index.html';
}
 //到达底部时跳转到下一个页面
if ( Math.abs(Y) > Math.abs(X) && Y < -100 ) {
  window.location = 'industryChanges.html';
}
});
          </pre>
          <h3>3、在H5项目中现实下滑加载（弊端如果没有scroll滚动条就无法实现）</h3>
          <pre>
$(document).on("pageshow","#mypage",function(){
///滑动到底部事件
$(document).unbind("scroll");
$(document).bind("scroll", function(event){
//if( $(document).scrollTop() >= $(document).height()-$(window).height() -50 ){
 if( $(document).scrollTop() >= $(document).height()-$(window).height() ){
  //do your work
    GetAjaxData();
     }
 });
});
$(document).on("pagehide","#mypage",function(){
 $(document).unbind("scroll");
});
          </pre>
          <h3>3、扩展jQueryMobile中的相关事件</h3>
          <pre>
事件            描述
hashchange    启用 bookmarkable #hash 历史记录。
navigate      针对 hashchange 和 popstate 的 wrapper 事件。
orientationchange    当用户垂直或水平旋转其移动设备时触发。
pagebeforechange    在页面变化周期内触发两次：任意页面加载或过渡之前触发一次，接下来在页面成功完成加载后，但是在浏览器历史记录被导航进程修改之前触发。
pagebeforecreate    当页面即将被初始化，但是在增强开始之前触发。
pagebeforehide    在过渡动画开始前，在“来源”页面上触发。
pagebeforeload    在作出任何加载请求之前触发。
pagebeforeshow    在过渡动画开始前，在“到达”页面上触发。
pagechange    在 changePage() 请求已完成将页面载入 DOM 并且所有页面过渡动画已完成后触发。
pagechangefailed    当 changePage() 请求对页面的加载失败时触发。
pagecreate    当页面已创建，但是增强完成之前触发。
pagehide    在过渡动画完成后，在“来源”页面触发。
pageinit    当页面已经初始化并且完成增强时触发。
pageload    在页面成功加载并插入 DOM 后触发。
pageloadfailed    如果页面加载请求失败，则触发。
pageremove    在窗口视图从 DOM 中移除外部页面之前触发。
pageshow    在过渡动画完成后，在“到达”页面触发。
scrollstart    当用户开始滚动页面时触发。
scrollstop    当用户停止滚动页面时触发。
swipe    当用户在元素上水平滑动时触发。
swipeleft    当用户从左划过元素超过 30px 时触发。
swiperight    当用户从右划过元素超过 30px 时触发。
tap    当用户敲击某元素时触发。
taphold    当元素敲击某元素并保持一秒时触发。
throttledresize    启用 bookmarkable #hash 历史记录
updatelayout    由动态显示/隐藏内容的 jQuery Mobile 组件触发。
vclick    虚拟化的 click 事件处理器
vmousecancel    虚拟化的 mousecancel 事件处理器
vmousedown    虚拟化的 mousedown 事件处理器
vmousemove    虚拟化的 mousemove 事件处理器
vmouseout    虚拟化的 mouseout 事件处理器
vmouseover    虚拟化的 mouseover 事件处理器
vmouseup    虚拟化的 mouseup 事件处理器
jquery mobile下正确地初始化swiper：
swiper只有在已知宽高的情况下才能正常正常，而jquery mobile只有pageshow事件才能确保宽高。所以修改如下：       </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'h5SwiperLeftToRight',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    methods: {
      forbidKeyboard(){
         document.activeElement.blur();
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input{
    padding: 8px;
    margin:8px 0;
    border: 1px solid #CCCCCC;
    border-radius: 4px;
  }
  p{
    margin: 10px 0;
  }
</style>
