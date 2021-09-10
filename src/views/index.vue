<template>
  <div class="base inner">
      <div class="content">
          <h2>前端案例</h2>
          <ul class="clearfix">
            <li v-for="items in caseNav">
              <a href="javascript:;" @click="urlFun(items.code)" >
                <div class="img">
                  <img :src="items.img">
                </div>
                <div class="text">
                  <h3 v-html="items.text"></h3>
                  <p v-html="items.description"></p>
                  <p>共计<span>{{case_count(items.code)}}</span>个案例</p>
                </div>
              </a>
            </li>
          </ul>
        <h2>前端笔记</h2>
        <ul class="clearfix">
          <li v-for="items in webNav">
            <a href="javascript:;" @click="noteUrlFun(items)">
              <div class="img">
                <img :src="items.img">
              </div>
              <div class="text">
                <h3 v-html="items.name"></h3>
                <p v-html="items.description"></p>
              </div>
            </a>
          </li>
        </ul>
        <h2>后端笔记</h2>
        <ul class="clearfix">
          <li v-for="items in javaNav">
            <a href="javascript:;" @click="noteUrlFun(items)">
              <div class="img">
                <img :src="items.img">
              </div>
              <div class="text">
                <h3 v-html="items.name"></h3>
                <p v-html="items.description"></p>
              </div>
            </a>
          </li>
        </ul>
      </div>
  </div>
</template>
<script>
  import {routes} from "@/router"
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  export default {
    name: 'index',
    data (){
      return {
        routes:routes,
        onerror:'this.src="' + require('@/img/404.jpg') + '"',
        caseNav:this.$store.state.caseNav
      }
    },
    mounted() {
      this.$nextTick(function () {
      })
    },
    computed: {
      webNav(){
        var routes=this.routes[0].children;
        var flag=[];
        for(var i=0;i<routes.length;i++){
          if(routes[i].type=='web'){
            flag.push(routes[i])
          }
        }
        return flag
      },
      javaNav(){
        var routes=this.routes[0].children;
        var flag=[];
        for(var i=0;i<routes.length;i++){
          if(routes[i].type=='crm'){
            flag.push(routes[i])
          }
        }
        return flag
      }
    },
    created(){

    },
    methods:{
      urlFun(code){
        this.$router.push({path:"/list"});
        this.$store.commit('listTabFun_m',code)
      },
      case_count(type){
        var list=this.routes[0].children;
        var flag=[];
        if(type=="all"){
          for(var i=0;i<list.length;i++){
            if(list[i].type=="h5"||list[i].type=="css"||list[i].type=="js"||list[i].type=="jq"||list[i].type=="app"||list[i].type=="plugin"){
              flag.push(list[i])
            }
          }
        }else{
          for(var i=0;i<list.length;i++){
            if(list[i].type==type){
              flag.push(list[i])
            }
          }
        }
        return flag.length
      },
      noteUrlFun(items){
        this.$router.push({path:items.path,query:{name:items.name,created:items.created}});
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
