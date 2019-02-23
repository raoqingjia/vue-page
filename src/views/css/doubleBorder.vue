<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <div class="box clearfix">
            <h2>1、关键是利用before after伪元素选择器</h2>
          </div>
           <pre>
*{
    margin: 0;
    padding: 0;
}
.box{
  margin-top: 10px;
  width: 500px;
  border-bottom: green 1px solid;
}

.box h2{
  float: left;   //防止宽度100%占满整个box
  line-height: 40px;
  position: relative;
  text-align: left;
}
.box h2:before{
  content: "";
  width: 100%;
  height: 1px;
  background-color: red;
  position: absolute;
  left: 0;
  bottom: -1px;
}
/*这个得关键就是before，这里为了让红色线与h标签的宽度一致，给了h标签一个浮动，*/
/*绿色的底线给了box，让他长度100%；*/</pre>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'doubleBorder',
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
  .box{
    margin-top: 10px;
    width: 500px;
    border-bottom: green 1px solid;
  }

  .box h2{
    float: left;
    line-height: 40px;
    position: relative;
    text-align: left;
  }
  .box h2:before{
    content: "";
    width: 100%;
    height: 1px;
    background-color: red;
    position: absolute;
    left: 0;
    bottom: -1px;
  }
</style>
