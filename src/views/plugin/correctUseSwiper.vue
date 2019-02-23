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
            1.因为是动态宽高使用swiper出现bug
          </h3>
          <pre>
当我在jquery mobile下使用如下的方式初始化时
$(document).on('pagebeforecreate', '#index-page', function(){
    var moreProductSwiper = new Swiper('#more-product-block', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    loopedSlides: 4,
    autoHeight: true,
    autoplay: 2000,
    pagination: '.swiper-pagination'
});
无奈地发现，产生的轮播图时而正常运行，时而不行，无规律可言，无法排查错误。后来得知，swiper只有在已知宽高的情况下才能正常正常，而jquery mobile只有pageshow事件才能确保宽高。所以修改如下：
$(document).on('pageshow', '#index-page', function(){
    var moreProductSwiper = new Swiper('#more-product-block', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    loopedSlides: 4,
    autoHeight: true,
    autoplay: 2000,
    pagination: '.swiper-pagination'
});
</pre>
          <h3>
            2、动态生成dom内容造成swiper出现bug
          </h3>
          <pre>
swiper的机制是：初始化的时候自动扫描swiper-wrapper类下有多少个swiper-slide类块，则允许滑动多少个块。而数据在swiper初始化之后才异步请求到，swiper则无法正确scan有多少个slide（实际上找到一个待循环模板），所以划不动。找到原因后，只须对症下药。在查阅Swiper的API时发现，有这样两个参数：observer和observeParents，前者启动动态检查器，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。后者原理和前者一样，只是将observe应用于Swiper的父元素。两者默认值都为false。所以在原来的swiper初始化代码中加上这两行即可。
var swiper = new Swiper('.swiper-container', {
pagination: '.swiper-pagination',
paginationClickable: true,
observer:true,//修改swiper自己或子元素时，自动初始化swiper
observeParents:true,//修改swiper的父元素时，自动初始化swipe
});</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'correctUseSwiper',
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
