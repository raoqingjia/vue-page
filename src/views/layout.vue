<template>
  <div class="layout" >
    <headernav></headernav>
    <section class="section-content">
       <router-view></router-view>
    </section>
    <ul class="fast-link">
      <li @click="fastLink('/index')"><a>首页</a></li>
      <li @click="fastLink('/onlineEdit')"><a>文本</a></li>
      <li @click="setShowTranslation()"><a>翻译</a></li>
    </ul>
    <footernav v-if="footerShow"></footernav>
    <translation  ref="translationItem"></translation>
  </div>
</template>

<script>
  import Headernav from '@/views/component/headernav'
  import Footernav from '@/views/component/footernav'
  import { mapGetters } from 'vuex'
  import Translation from "./component/translation";
  export default {
    name: 'layout',
    components:{Translation, Headernav,Footernav},
    created () {
      // this.$route.path 当前路由对象的路径
      if(this.$route.path==="/"){
        this.$router.push({path:"/index"});  //初始进入当前页面就跳到index首页
      }else{
        this.$router.push({path:this.$route.fullPath});
      }
    },
    mounted() {
      this.$nextTick(function () {

      })
    },
    data () {
      return {
        nav_show:true,
      }
    },
    computed:{
      ...mapGetters([
        'footerShow',
      ]),
    },
    methods:{
        fastLink(path) {
            this.$router.push({path: path});
        },
        setShowTranslation(){
          this.$refs.translationItem.showWindow = true //修改子组件data
       }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  ul.fast-link {
    position: fixed;
    top: 350px;
    right: 30px;

    li {
      line-height: 30px;
      padding: 0 8px;
      text-align: center;
      border-radius: 15px;
      border: 1px solid #c3c3c3;
      margin-bottom: 20px;
      cursor: pointer;
      background: #fff;
    }
  }
</style>
