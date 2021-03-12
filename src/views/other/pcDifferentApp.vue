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
1）首先考虑的就是布局问题，手机和电脑显示器的宽度都都不一样，现在pc端最小显示器也到1200px宽，移动端320px宽 到 750px宽

2）其次就是交互效果的考虑，日期，下拉框，附件上传再pc端和移动端展现在的效果是不同的，而且再技术方面触发控件的操作也不同，pc端多事通过鼠标触发，移动端都是指尖触发，要考虑兼容键鼠、触摸设备

3）还有大数据量时的考虑，pc端数据量过大展示不全通过分页控件展示是很常见，移动端可没分页操作，全是滑动到底部数据加载的效果，这样pc端调用的分页接口，移动端就没法用

4）图片展示问题，若图片资源为公用的一套，部分图片在移动端显示可能无问题到PC端就会失真，

5）网速问题，pc端和移动端都可连接WiFi的可以不考虑流量问题，但是手机端有时是通过流量访问的，为了提高查询效率，好多不用缓存到redis的接口，在移动端就要考虑数据缓存了

有人问过我用bootstrap响应式布局h5应该是可以解决pc和app端的适配性吧
回复，是可以但是对项目限制比较大，只能坐写简单的详情页面或个人博客，涉及到表单提交，图表展，大数据量请求和复杂场景的情况下就无能为力了，当前访问的我这个网站就是响应式布局，当时再考虑pc端展示和移动端展示风格的时候差点没烦死我</pre>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'colresizable',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    mounted() {
      this.$nextTick(function () {
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

</style>
