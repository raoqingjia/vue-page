<template>
      <header class="clearfix">
        <div class="inner clearfix">
          <div class="fl logo">
            <a href="javascript:;"><span>Always On The Road</span></a>
          </div>
          <ul class="fr clearfix nav" v-if="titleShow">
            <li v-for="items in headerNav">
              <a href="javascript:;" @click="urlFun(items)" v-bind:class="{active: items.active}">{{items.name}}</a>
            </li>
            <li><a href="javascript:;" class="skin" @click="setSkinFun()">{{setSkin.value}}</a></li>
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
        this.setSkinFun();
      })
    },
    data () {
      return {
        titleShow:false,
        headerNav:this.$store.state.headerNav,
        setSkin :{
          value:'',
          code:''
        }
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
      setSkinFun(){
        if(this.setSkin.code === 'light'){
          this.setSkin.code = 'dark';
          this.setSkin.value = '暗夜版';
          document.body.setAttribute('user-color-scheme', 'light');
        }else{
          this.setSkin.code = 'light';
          this.setSkin.value = '高亮版';
          document.body.setAttribute('user-color-scheme', 'dark');
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
<style scoped lang="less">
  .skin{
    font-size: 12px;
    padding: 0 8px;
    margin: 10px 0 0 15px;
    line-height: 28px;
    border: 1px solid #c3c3c3;
    border-radius: 20px;
  }
</style>
