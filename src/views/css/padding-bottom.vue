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
            在ie和firefox中在元素使用overflow并且可以滑动后，发现之前设置的padding-bottom失效了,但是在firefox显示的盒模型中却还是显示有padding-bottom，而且是在谷歌下就是正常显示的
          </h3>
          <pre>
*方法1:
//原有的父元素取消padding-bottom
padding-bottom:0;
//子元素的最后一个设置margin-bottom
 div>div:last-child{
        margin-bottom: 20px;
        color:white;
    }
如果有个新的元素插入的话，这个伪元素也会重新刷新

方法2：
使用:after 伪元素实现，这个在有元素动态增加的时候也可以保持稳定
//:after实现,在你需要设置padding-bottom元素上设置此伪元素
body>div:after{
     content:"";
     height:20px;//等于之前padding-bottom的高度，也就是你需要的高度
     display:block;
  }

          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'padding-bottom',
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
