
<template>
  <div class="base inner">
    <div class="content">
      <h2>模板下载</h2>
      <ul class="clearfix template">
        <li>
          <a href="../../static/ecWebTest/src/app/index.html" target="_blank">
            <img src="../../static/img/ecweb.png">
            <div class="text">
              <h3>基于angular-1.2.9搭建</h3>
              <p>
                兼容IE8、利用Bootstrap实现响应式、BootstrapDatepicker日期插件、Echart图表、DataTables表单排序、kkpager页面排序功能
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="../img/tempalte01.jpg">
            <div class="text">
              <h3>apache</h3>
              <p>apache安装、参数配置</p>
            </div>
          </a>
        </li>
        <!--<li v-for="items in caseNav"><a href="javascript:;"    @click="urlFun(items.code)" v-html="items.text"></a></li>-->
      </ul>
    </div>
  </div>
</template>
<script>
  import {routes} from "@/router"
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';


  export default {
    name: 'muban',
    data (){
      return {
        routes:routes,
        imageUrl:this.$store.state.swiperUrl,
        onerror:'this.src="' + require('@/img/404.jpg') + '"'
      }
    },
    mounted() {
      this.$nextTick(function () {
//        this.setSwiper();
//        this.setNavColor();
      })
    },
    computed: {
      caseNav(){
        return  this.$store.state.caseNav
      },
      noteNav(){
        var routes=this.routes[0].children;
        var flag=[];
        for(var i=0;i<routes.length;i++){
          if(routes[i].path.indexOf("/note")!=-1){
            flag.push(routes[i])
          }
        }
        return flag
      }
    },
    created(){
      // this.caseNav=this.$store.state.state;
    },
    methods:{
      urlFun(code){
        this.$router.push({path:"/list"});
        this.$store.commit('listTabFun_m',code)
      },
      noteUrlFun(code){
        this.$router.push({path:code});
      },
      setSwiper(){
        new Swiper ('.swiper-container', {
          direction: 'horizontal',
          loop: true,
          autoplay: 3000,  //可选选项，自动滑动
          // 如果需要分页器
          pagination: '.swiper-pagination',
          // 如果需要滚动条
          scrollbar: '.swiper-scrollbar',
          touchMoveStopPropagation : false  //阻止冒泡事件
        })

      },
      setNavColor(){
        for(var i=0;i<$(".case-li").length;i++){
          $(".case-li").eq(i).find("a").css("background-color",this.getRandomColor())
        }
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
