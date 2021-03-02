<template>
  <div class="emotion inner">
    <div class="cover" v-if="!pageShow">
      <div class="box">
        <h3>请输入密码<i class="fa fa-remove"></i></h3>
        <label>
          <input type="text" v-model="password"/>
          <button type="button" @click="sureFun()">确定</button>
        </label>
      </div>
    </div>
    <div class="warp content" v-if="pageShow">
      <ul>
        <li class="clearfix" v-for="items in list_ary">
          <h3><a href="javascript:;" v-html="items.name" @click="urlFun(items.path,items.created)"></a><span>Created<time
            v-html="items.created"></time></span></h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {routes} from '@/router'
  export default {
    name: 'emotion',
    created(){

    },
    data () {
      return {
        routes: routes,
        pageShow: this.$store.state.emotionPassword,
        password: ""
      }
    },
    methods: {
      urlFun(url, created){
        this.$router.push({path: url, query: {"created": created}});
      },
      sureFun(){
        if (this.password == '1007804453') {
          this.pageShow = true;
          this.$store.commit('emotionPasswordFun', true)
        }
      }
    },
    computed: {
      list_ary(){
        var list = this.routes[0].children;
        var flag = []
        for (var i = 0; i < list.length; i++) {
          if (list[i].type == 'emotion') {
            flag.push(list[i])
          }
        }
        return flag.reverse()
      }

    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
