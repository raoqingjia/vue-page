<template>
  <div class="base waterfall-wrap inner">
    <vue-waterfall-easy v-if="imgsArr.length" :imgsArr="imgsArr" :maxCols="4" @scrollLoadImg="fetchImgsData"  @click="clickFn" :height="'100vh'">
      <template slot-scope="props">
        <div class="img-info">
          <h3>{{props.value.title}}</h3>
          <p>{{props.value.info}}</p>
        </div>
      </template>
    </vue-waterfall-easy>
  </div>
</template>
<script>
  import vueWaterfallEasy from 'vue-waterfall-easy'

  export default {
    name: 'project',
    components:{vueWaterfallEasy},
    data (){
      return {
        onerror: 'this.src="' + require('@/img/404.jpg') + '"',
        imgsArr: [],
        fetchImgsData:[]
      }
    },
    mounted() {
      this.imgsArr = [   //数组数量小于5个也就是小于一行的数量，会报Cannot read property 'style' of undefined错误
        {src:'./static/img/ecweb.jpg',link:"/ecWebTest/src/app/index.html",title:"angular1.0项目",info:"基于angular-1.2.9搭建，兼容IE8、利用Bootstrap实现响应式、BootstrapDatepicker日期插件、Echart图表、DataTables表单排序、kkpager页面排序功能"},
        {src:'./static/img/salss-app.jpg',link:"/salssVue/index.html",title:"H5移动端项目",info:"基于Vue2.0,利用vue全家桶,未使用UI框架，利用rem换算比例适应各移动平台,mobileSelect筛选插件,swiper3.0滑屏,Echart图表"},
        {src:'./static/img/bpm_web_new.jpg',link:"/bpm_web_new/flow.html",title:"流程图",info:"设计流程图（raphael）源码myflow.js，修改了删除方式，自定义了流程步骤，保存绘画流程图时进行相关验证。"},
        {src:'./static/img/examineAndPpprove.jpg',link:"/examineAndPpprove/index.html",title:"h5嵌套页面",info:"web-view嵌套h5页面"},
        {src:'./static/img/osh5.jpg',link:"/osh5/index.html",title:"h5宣传页面",info:"利用rem换算比例适应各移动平台，使用annimate.css实现动画"},
        {src:'./static/img/osweb.png',link:"/osDemo/index.html",title:"vue3.0项目",info:"vue3.0项目搭建，使用ant design vue的UI框架，利用mockjs创建临时数据调取，使用了dayjs、lodash、qrcanvas等三方库，利用封装了axios请求方式，将数据请求模块化，实现了前后台数据整体加密"},
        {src:'./static/img/absweb.png',link:"/absweb/index.html",title:"Angular8项目",info:"Angular8项目搭建，引用ng-zorro-antdUI框架、echarts图例、typescript等搭建的大数据量B端项目"},
      ]
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
        this.$router.push({path: "/list"});n
        this.$store.commit('listTabFun_m', code)
      },
      clickFn(event, { index, value }){
        // 只有当点击到图片时才进行操作
        if (event.target.tagName.toLowerCase() == 'img') {
          console.log(window.location)
          window.open(window.location.origin + value.link);
        }
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
  .img-info{
     background-color: #FFFFFF;
    /*padding: 10px;*/
  }
  .img-info h3{
    font-size: 16px;
    line-height: 26px;
    text-align: left;
    color: #000000;
    word-break:break-all; /*只对英文起作用，以字母作为换行依据*/
    word-wrap:break-word; /*只对英文起作用，以单词作为换行依据*/
    white-space:pre-wrap; /*只对中文起作用，强制换行*/
  }
  .img-info p{
    text-align: left;
    line-height: 22px;
    color: #000000;
    word-break:break-all; /*只对英文起作用，以字母作为换行依据*/
    word-wrap:break-word; /*只对英文起作用，以单词作为换行依据*/
    white-space:pre-wrap; /*只对中文起作用，强制换行*/
  }
</style>
