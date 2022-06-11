<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <img src="../../img/other/postmanBody-icon.png" height="280px" width="100%">
          <pre>
在PostMan中用Post方式，Body有form-data,x-www-form-urlencoded,raw,binary四种

1、 multipart/form-data
既可以上传键值对，也可以上传文件。当上传的字段是文件时，会有 Content-Type 来说明文件类型；Content-Disposition 来说明字段的一些信息；由于有 boundary 隔离，所以可以上传多个文件。

2、application/x-www-form-urlencoded
是浏览器默认的编码格式
用于键值对参数，参数之间用&间隔；
当 form 的 action 为 GET 时，会转成 url?name1=value1&name2=value2。
当 form 的 action 为 POST 时，浏览器将 form 数据封装到 http body 中，然后发送到 server。

理解 -> 数据转换为键值对 这句话，之前就因为post相传json数据结果用的是x-www-form-urlencoded格式，@RequestBody JSONObject 取key，怎么都拿不到

3、raw
可以上传任意格式的文本，可以上传 text、json、xml、html、javascript等。

4、binary等同于
Content-Type: application/octet-stream	只可上传二进制数据，通常用来上传文件，由于没有键值，所以一次只能上传一个文件。</pre>
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
