<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>
            1、判断是否含有大写字母
          </h3>
          <pre>
function hasCapital(str){
  var result = str.match(/^.*[A-Z]+.*$/);
  if(result==null) return false;
  return true;
}</pre>
          <h3>
            2、判断是否含有小写字母
          </h3>
          <pre>
function hasLowercase(str){
  var result = str.match(/^.*[a-z]+.*$/);
  if(result==null) return false;
  return true;
}</pre>
          <h3>
            3、判断是否含有数字
          </h3>
          <pre>
function hasNumber(str){
  var result = str.match(/^.*[0-9]+.*$/);
  if(result==null) return false;
  return true;
}</pre>
          <h3>
            4、 判断是否含有其他字符
          </h3>
          <pre>
function hasOther(str){
  var result = str.match(/^.*[^0-9A-Za-z]+.*$/);
  if(result==null) return false;
  return true;
}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'loginCheckOut',
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
