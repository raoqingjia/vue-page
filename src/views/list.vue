<template>
  <div class="list inner">
    <div class="content">
      <div class="warp-l">
        <ul>
          <li class="clearfix" v-for="items in  pageFilter(list_ary) ">
            <h3><a href="javascript:;" v-html="items.name"  @click="urlFun(items)"></a><span>Created<time v-html="items.created"></time></span></h3>
          </li>
        </ul>
      </div>
      <div class="warp-r">
        <ul>
          <li v-for="items in caseNav"><a href="javascript:;" :class="[items.code===$store.getters.listTab ? 'active':'']" @click="list_nav(items.code,items)" >{{items.text}}<i>{{list_count(items.code)}}</i></a></li>
        </ul>
      </div>
      <pagination :total="total" :current-page='current' @pagechange="pagechange" v-if="paginationShow"></pagination>
    </div>

  </div>
</template>

<script>
  import {routes} from '@/router'
  import { mapGetters } from 'vuex'
  import pagination from '@/views/component/pagination'
  export default {
    name: 'list',
    created(){

    },
    components: {
      'pagination': pagination
    },
    data () {
      return {
        paginationShow:this.$store.getters.listTab=="all"?false:true,
        routes:routes,
        total: 0,     // 记录总条数
        display: 15,   // 每页显示条数
        current: 1   // 当前的页数
      }
    },
    mounted() {

      this.$nextTick(function() {

      })
    },
    filters: {
      filterFun (value) {
         return value;
      }
    },
    methods:{
      pagechange(currentPage){  // 点击分页组件的设置
         this.current=currentPage;
      },
      pageFilter (value) {
        let numMin=(this.current-1)*this.display;
        let numMax=this.current*this.display-1;
        let ary=[];
        if(this.$store.getters.listTab=="all"){
          ary=value;
        }else{
          for(let i= 0;i<value.length;i++){
            if(numMin<=i&&i<=numMax){
              ary.push(value[i])
            }
          }
        }
        return ary
      },
      //右侧导航栏 选择切换
      list_nav(code,it){
        this.paginationShow=(code=="all")?false:true;
        this.current=1;
        this.$store.commit('listTabFun_m',code);
      },
      //右侧导航栏案例计数
      list_count(type){
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

      urlFun(items){
        this.$router.push({path:items.path,query:{name:items.name,created:items.created}});
      }
    },

    computed:{
      ...mapGetters([    //右侧导航栏的内容类型
        'listTab',
      ]),
    caseNav () {
      return  this.$store.state.caseNav
    },
     list_ary(){
       var list=this.routes[0].children;
       var flag=[];
       if(this.$store.getters.listTab=="all"){
         for(var i=0;i<list.length;i++){
           if(list[i].type=="h5"||list[i].type=="css"||list[i].type=="js"||list[i].type=="jq"||list[i].type=="app"||list[i].type=="plugin"){
             flag.push(list[i])
           }
         }
       }else{
         for(var i=0;i<list.length;i++){
           if(list[i].type==this.$store.getters.listTab){
             flag.push(list[i])
           }
         }
       }
       this.total=flag.length;
       return flag.reverse();
     }

  }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .list .warp-r li a.active{
      background-color: #f5f5f5;
  }
  .list .warp-r ul li a.active i{
    color: #fff;
    background-color: #da6426;
  }
  .warp-l{
    margin-bottom: 20px;
  }
</style>
