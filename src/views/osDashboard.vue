<template>
  <div class="list inner" style = "border:1px solid red;height: 100%">

  </div>
</template>

<script>
  import {routes} from '@/router'
  import { mapGetters } from 'vuex'
  import pagination from '@/views/component/pagination'
  export default {
    name: 'osDashboard',
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
            if(["h5","css","js","jq","app","other","plugin","java","framework"].indexOf(list[i].type)!==-1){
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
           console.log(list[i].type);
           if(['other','h5','css','js','jq','app','plugin','java',"framework"].indexOf(list[i].type)!==-1){
             flag.push(list[i]);
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
