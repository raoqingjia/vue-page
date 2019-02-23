<template>
  <div class="base inner">
    <div class="content">
      <h2>软件工具</h2>
      <ul class="clearfix software">
        <li v-for="(items,index) in softwareAry">
          <a :href="items.link" target="_blank">
            <img :src="items.img">
            <div class="text">
              <h3 v-html="items.text"></h3>
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
    name: 'software',
    data (){
      return {
        routes:routes,
        onerror:'this.src="' + require('@/img/404.jpg') + '"',
        softwareAry:this.$store.state.softwareNav
      }
    },
    mounted() {
      this.$nextTick(function () {
      })
    },
    computed: {
    },
    created(){

    },
    methods:{
      urlFun(code){
        this.$router.push({path:"/list"});
        this.$store.commit('listTabFun_m',code)
      },
      noteUrlFun(code){
        this.$router.push({path:code});
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
