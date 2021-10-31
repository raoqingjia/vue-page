<template>
  <div class="base inner">
    <vue-waterfall-easy  :imgsArr="imgsArr" @scrollLoadImg="fetchImgsData">
      <template slot-scope="props">
        <h3>{{props.value.title}}</h3>
        <p>{{props.value.info}}</p>
      </template>
    </vue-waterfall-easy>
    <div class="content" v-if="false">
      <h2>模板</h2>
      <ul class="clearfix template">
        <li>
          <a href="../../static/ecWebTest/src/app/index.html" target="_blank">
            <img src="../../static/img/ecweb.jpg">
            <div class="text">
              <h3>基于angular-1.2.9搭建</h3>
              <p>
                兼容IE8、利用Bootstrap实现响应式、BootstrapDatepicker日期插件、Echart图表、
                DataTables表单排序、kkpager页面排序功能
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="../img/activemq-icon.jpg">
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
  import vueWaterfallEasy from 'vue-waterfall-easy'

  export default {
    name: 'project',
    components:{vueWaterfallEasy},
    data (){
      return {
        onerror: 'this.src="' + require('@/img/404.jpg') + '"',
        imgsArr: [   //数组数量小于5个也就是小于一行的数量，会报Cannot read property 'style' of undefined错误
          {src:'./static/img/ecweb.jpg',link:"http://www.raoqingjia.online/ecWebTest/src/app/index.html",title:"angular1.0项目",info:"基于angular-1.2.9搭建，兼容IE8、利用Bootstrap实现响应式、BootstrapDatepicker日期插件、Echart图表、DataTables表单排序、kkpager页面排序功能"},
          {src:'./static/img/salss-app.jpg',link:"http://www.raoqingjia.online/salssVue/index.html",title:"H5移动端项目",info:"基于Vue2.0,利用vue全家桶,未使用UI框架，利用rem换算比例适应各移动平台,mobileSelect筛选插件,swiper3.0滑屏,Echart图表"},
          {src:'./static/img/bpm_web_new.jpg',link:"http://www.raoqingjia.online/bpm_web_new/flow.html",title:"流程图",info:"设计流程图（raphael）源码myflow.js，修改了删除方式，自定义了流程步骤，保存绘画流程图时进行相关验证。"},
          {src:'./static/img/examineAndPpprove.jpg',link:"http://www.raoqingjia.online/examineAndPpprove/index.html",title:"h5嵌套页面",info:"web-view嵌套h5页面"},
          {src:'./static/img/osh5.jpg',link:"https://www.raoqingjia.online/osh5/index.html",title:"h5宣传页面",info:"利用rem换算比例适应各移动平台，使用annimate.css实现动画"},
        ],
        fetchImgsData:[]
      }
    },
    mounted() {
      this.$nextTick(function () {
         setTimeout(function(){
             $(".img-wraper").css("width","100%");
             $(".img-wraper").css("height","100%");

         },50)
      })
    },
    computed: {
      caseNav(){
        return this.$store.state.caseNav
      }
    },
    created(){
      // this.caseNav=this.$store.state.state;
    },
    methods: {
      urlFun(code){
        this.$router.push({path: "/list"});
        this.$store.commit('listTabFun_m', code)
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .vue-waterfall-easy .img-box .img-inner-box img{
    padding: 5px;
    box-sizing: border-box;
  }
  .img-info h3{
    font-size: 16px;
    text-align: left;
    color: #000000;
    word-break:break-all; /*只对英文起作用，以字母作为换行依据*/
    word-wrap:break-word; /*只对英文起作用，以单词作为换行依据*/
    white-space:pre-wrap; /*只对中文起作用，强制换行*/
  }
  .img-info p{
    text-align: left;
    color: #000000;
    word-break:break-all; /*只对英文起作用，以字母作为换行依据*/
    word-wrap:break-word; /*只对英文起作用，以单词作为换行依据*/
    white-space:pre-wrap; /*只对中文起作用，强制换行*/
  }
</style>
