<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>1)在vue项目中动态设置img的src时，图片会加载失败。我们可以先看个例子。
< template>
  < div>
    < h1>动态设置图片< /h1>
    < img :src="imgUrl"/>
  < /div>
< /template>
data() {
  return {
    imgUrl: "../assets/vue-logo.png",
  };
}
由结果可以看出图片加载失败,查看elements之后会发现，src被当做静态资源处理了，并没有进行编译。
为了解决动态的src没有进行编译的问题，我们可以使用require引入图片。
data() {
  return {
    imgUrl: require("../assets/vue-logo.png"),
  };
}

2)import和require的区别
require是在运行时加载，而import是编译时加载；
如果希望使用import引入图片就需要提前导入图片。
< script>
import reactLogo from "../assets/react-logo.png";
export default {
  name: "ImgTest",
  data() {
    return {
      logoFlag: "vue",
      imgUrl:reactLogo,
    };
  }
}
另外require和import另外的区别：
require是CommonJs/AMD规范，而import是ESMAScript6+规范。</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'vueImgUseSrc',
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
