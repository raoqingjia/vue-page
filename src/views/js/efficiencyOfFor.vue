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
问题场景

我用当前的时间戳为唯一id，for循环里只有3个if判断和一个 for循环长度为4的嵌套，这时候每次循环出来的groupNum有好几次是一样的，但是我以为是for循环每循环一次当时时间戳生成的groupNum都是唯一的，通过测试发现之所以这样是for循环的长度太小造成某几个索引下的groupNum是一样的，我尝试了一下当for循环的长度为10000次左右每次生产的groupNum才不一样
var a = new Date().getTime();
for(let a =0;a<100;a++){
  for(let b =0;b<4;b++){
    // let groupNum = new Date().getTime().toString();
    // groupNum = groupNum.substr(groupNum.length - 4);
    //  this.dicItemPopup[b].groupNum = groupNum;  //  dicItemPopup地址指向的是dicGroupItemPopup[0]
  }
}
var b = new Date().getTime();
结果  a = b  为  1616032421205

解决办法

let  groupNum=Math.random().toString(36).slice(2)
groupNum = groupNum.substr(groupNum.length - 4);
更改生产以为id的方法，不通过当时时间戳获取了
          </pre>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'getDate',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    methods: {
      toggle(){

      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
