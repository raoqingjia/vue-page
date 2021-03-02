<template>
  <div class="layout" >
    <headernav></headernav>
    <section class="section-content">
       <router-view></router-view>
    </section>
    <footernav v-if="footerShow"></footernav>
  </div>
</template>

<script>
  import Headernav from '@/views/component/headernav'
  import Footernav from '@/views/component/footernav'
  import { mapGetters } from 'vuex'
  export default {
    name: 'layout',
    components:{Headernav,Footernav},
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

    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
