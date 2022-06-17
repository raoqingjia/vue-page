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
问题：
在IE中，使用 location.href = "xxx.html" ，window.open("xxx.html") 这样的方式跳转页面时，在目标页面中 document.referer的值会是空 ， 后台无法获取获取HTTP_REFERER。

解决办法：模拟a标签
if (CommonUtil.IEVersion !== -1) {
   const gotoLink = document.createElement('a');
   gotoLink.setAttribute('class', 'toSettlement');
   gotoLink.setAttribute('href', url);
   gotoLink.setAttribute('target', '_blank');
   document.body.appendChild(gotoLink);
   gotoLink.click();
   document.removeChild(gotoLink);
 }else {
    window.open(url);
 }</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'colresizable',
        data() {
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
            toggle() {

            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
