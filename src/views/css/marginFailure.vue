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
css中margin-top是设置容器的外间距了距离了，div嵌套后，margin-top或者margin-bottom失效了，在网上打到下面的方法可以解决。

现象：
< body>
   < div class="homeNav">
      < div class="homeCategory  ">
      < /div>
   < /div>
< /body>
此时我设置子容器homeCategory的样式：
.homeCategory{
   margin-top:30px;
}
发现margin相对的父容器搞错了，找到body去了，成了相对于body来设置margin，此时设置了homeNav 的高度和宽度都没效果，div都不听话了，调试了半天终于找到了原因。

原因：
在两个嵌套的div，如果外层div的父容器padding值为0，
那么内层div的margin-top或者margin-bottom的值会”转移”给外层div，也就是父容器的父容器。

解决办法：
1：设置父容器的的样式加上：overflow:hidden。
2：把对父容器的margin-top外边距改成padding-top内边距。
3：给父容器div加样式， padding-top: 1px。
4：给父容器div加样式，position: absolute。
5：把父元素变成一个 block formating context ，下面是可选的方法
a、float: left/right
b、position: absolute
c、display: inline-block/table-cell
d、overflow: hidden/auto
建议方法1</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'marginFailure',
        data() {
            return {
                created: this.$route.query.created,
                title: this.$route.query.name
            }
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
