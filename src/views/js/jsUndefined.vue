<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
        <pre>
1、变量声明且没有赋值；

2、获取对象中不存在的属性时；

3、函数需要实参，但是调用时没有传值，形参是undefined；

4、函数调用没有返回值或者return后没有数据，接收函数返回的变量是undefined。</pre>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'jsRealizeTab',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    mounted(){
      this.$nextTick(function(){

        function tab (id,event){
          var box=document.getElementById(id);
          var oLI=box.getElementsByTagName("li");
          var oDiv=box.getElementsByTagName("div")
          for(var i=0;i<oLI.length;i++){
            oLI[i].index=i
            oLI[i][event]=function(){
              for(var i=0;i<oLI.length;i++){
                oLI[i].className="";
                oDiv[i].className="";
              }
              this.className="active";
              oDiv[this.index].className="show"
            }
          }
        }

        tab ("box1","onmouseover")
        tab ("box2","onclick")
      })
    },
    methods: {
      toggle(){

      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  li {
    list-style: none;
  }
  .box{
    width: 500px;
    margin: 0 auto;
    margin-top: 10px;
  }

  .box ul {
    height: 30px;
  }
  .box ul li{
    float: left;
    width: 100px;
    text-align: center;
    line-height: 30px;
    height: 30px;
    cursor: pointer;
  }
  .box>div{
    border: 2px yellowgreen solid;
    background-color: #bce8f1;
    height: 150px;
    width: 496px;
    display: none;

  }
  .active {
    background-color:silver;
  }
  .box .show{
    display: block;
  }
</style>
