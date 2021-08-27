<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>1、function中用return跳出</h3>
          <pre>
var a = [1,2,3,4,5,6,7,8]; // 8个数
var b = [11,12,13,14,15,3,16,17]; //8个数
testFor();
function testFor() {
    for(var i=0;i< a.length;i++){
      for(var j=0;j< b.length;j++){
        if( a[i]==b[j] ){
          return false;
        }
      }
    }
}</pre>
          <h3>2、给for循环起名字，break指定跳出</h3>
          <pre>
var a = [1,2,3,4,5,6,7,8]; // 8个数
var b = [11,12,13,14,15,3,16,17]; //8个数
aaa:for(var i=0;i< a.length;i++){
  bbb:for(var j=0;j< b.length;j++){
    if( a[i]==b[j] ){
      console.log(i,j);
      break aaa;
    }
  }
}</pre>
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
