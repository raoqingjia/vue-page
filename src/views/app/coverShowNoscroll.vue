<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="cover" v-if="coverShow">
          <div class="box">
            <h3 style="text-align: center">点击隐藏</h3>
            <label style="text-align: center">
              <button type="button" @click="setCoverHide()">确定</button>
            </label>
          </div>
        </div>
        <div class="art-content">
          <h3>1、如果弹框上面的内容不需要滚动 removeEventListener</h3>
           <pre>
document.body.addEventListener(&#39;touchmove&#39;,function(){}, false);关掉的话document.body.removeEventListener("touchmove", myFunction); 这样不是更粗暴
this.onTouchMove(true);//启用
this.onTouchMove(false); //禁用
onTouchMove(inFlag) {
  if (inFlag) {
    document.addEventListener('touchmove', this.onHandler, false);
  } else {
    document.removeEventListener('touchmove', this.onHandler, false);
  }
}
onHandler(e) {
  e.preventDefault();
}
测试结果</pre>
          <input type="text" value="点击显示弹出层" @click="setCoverShow()">
          <h3>2、单纯的css样式设置</h3>
          <pre>
html,body{
  overflow: hidden;
  height: 100%;
}
$("body").css("overflow","hidden");
$("body").css("height","100%");
$("html").css("overflow","hidden");
$("html").css("height","100%");
但是这种设置方式有个bug就是：如果滚动条已经滑动到一定的位置，这样设置之后滚动条会返回到顶部</pre>
          <h3>3、滚动条在点击的位置静止，之后滑动滚动无效</h3>
          <pre>
.fixed {
    position: fixed;
}
弹出显示时
top=$(document).scrollTop()||$("body").scrollTop();;//获取页面的scrollTop；
$('body').css("top",-top+"px");//给body一个负的top值；
$('body').addClass('fixed');//给body增加一个类，position:fixed;
弹出隐藏时
$(document).scrollTop(top)
$('body').removeClass('fixed')
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'coverShowNoscroll',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name,
        coverShow:false
      }
    },
    mounted(){
      this.$nextTick(function(){

      })
    },
    methods: {
      setCoverHide(){
        this.coverShow=false;
        document.addEventListener('touchmove', this.onHandler, false);
      },
      setCoverShow(){
        this.coverShow=true;
        document.removeEventListener('touchmove', this.onHandler, false);
      },
      onHandler(){
        e.preventDefault();
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cover{
    background-color: rgba(0, 0, 0, 0.3)
  }
  .cover > .box{
    width: 320px;
    margin-left: -160px;
  }
  input{
    padding: 8px;
    margin:8px 0;
    border: 1px solid #CCCCCC;
    border-radius: 4px;
  }
</style>
