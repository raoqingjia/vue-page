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
出现的问题是
当axios的get请求的参数是json字符串，例如："[123, 456]"  或者是入参是一些特殊字符的时候，自动给转译了结果后台收到的数据对不上
request是axios封装的方法query是对象类型的入参
request({
  url: OrderService + "/order/webEntry",
  method: "get",
  params: query    //  这里传的入参有特殊字符就被转译了
});

解决办法
1、在url 里面不让axios处理了，这样问题就解决了
request({
  url: OrderService + "/order/webEntry?tokenId=${query.tokenId}",
  method: "get",
});
2、encodeURIComponent() 能编码"; / ? : @ & = + $ , #"这些特殊字符。对应的解码函数是decodeURIComponent()。
3、 通过base64转个码给后端，后端拿到后在转码</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: '',
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
