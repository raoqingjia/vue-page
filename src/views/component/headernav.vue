<template>
      <header class="clearfix">
        <div class="inner clearfix">
          <div class="fl logo">
            <a href="javascript:;"><span>DO</span> MY SELF</a>
          </div>
          <ul class="fr clearfix nav" v-if="titleShow">
            <li v-for="items in headerNav">
              <a href="javascript:;" @click="urlFun(items)" v-bind:class="{active: items.active}">{{items.name}}</a>
            </li>
          </ul>
          <div class="btn" @click="toggle()">
            <i class="fa"  v-bind:class="[titleShow ? 'fa-remove': 'fa-align-justify']"></i>
          </div>
        </div>
      </header>
</template>

<script>

  import Vue from 'vue'
  export default {
    name: 'headernav',
    created () {

    },
    mounted() {
      this.$nextTick(function () {
         if($(window).width()<=415){
           this.titleShow=false;
         }else{
           this.titleShow=true;
         }
      })
    },
    data () {
      return {
        titleShow:false,
        headerNav:this.$store.state.headerNav
      }
    },
    methods:{
      toggle(){
        if(this.titleShow){
          this.titleShow=false
        }else{
          this.titleShow=true
        }
      },
      urlFun(item){
        this.headerNav.forEach(function (item) {
           Vue.set(item,'active',false);
        });
         Vue.set(item,'active',true);

        this.$router.push({path:item.path});
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
