<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>1、水平渐变</h3>
           <pre>{
  width: 200px;
  height: 120px;
  background-image:linear-gradient(left, red 50px, yellow 100px);
             }</pre>
           <div class="linear01">
             水平渐变
           </div>
          <h3>2、左上角渐变</h3>
          <pre>
那从(50px, 50px)到(100px, 100px)应该就是从左上角开始，写法如下：
{
  width: 200px;
  height: 200px;
  background-image:linear-gradient(left top, red 50px, yellow 100px);
}
left, right, top, bottom, left top, left bottom, right top, right bottom
分别表示，从左往右，从右往左，从上往下，从下往上，从左上往右下，从……          </pre>
          <div class="linear02">
            左上角渐变
         </div>
          <h3>3、利用角度渐变</h3>
          <pre>
{
  width: 200px;
  height: 200px;
  background-image:-webkit-linear-gradient(-45deg, red, yellow)
}</pre>
          <div class="linear03">
            角度渐变
          </div>
          <h3>4、前缀兼容</h3>
          <pre>
background-image: -ms-linear-gradient(top, #fff, #dededc);
background-image: -moz-linear-gradient(top, #fff, #dededc);
background-image: -webkit-linear-gradient(top, #fff, #dededc);
background-image: -o-linear-gradient(top, #fff, #dededc);
background-image: linear-gradient(top, #fff, #dededc);</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'linear-gradient',
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

.linear01{
   width: 200px;
   height: 120px;
   background-image:linear-gradient(left, red 50px, yellow 100px);
   background-image:-webkit-linear-gradient(left, red 50px, yellow 100px);
 }
.linear02{
  width: 200px;
  height: 200px;
  background-image:linear-gradient(left top, red 50px, yellow 100px);
  background-image:-webkit-linear-gradient(left top, red 50px, yellow 100px);
}
.linear03{
  width: 200px;
  height: 200px;
  background-image:linear-gradient( 45deg , red, yellow);
  background-image:-webkit-linear-gradient( 45deg , red, yellow);

}
</style>
