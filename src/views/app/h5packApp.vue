<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">

          <h3>1、将H5项目封装成ios版app的原理</h3>
           <pre>
 ios版的h5版本的app是相当于将H5嵌入到webview中，也就是相当于app中放了一个似浏览器的webview，所有的页面都是webview显示。一般来说H5的项目中只有js交互效果和html、css等样式。一般不会利用到webview中的代码去实现交互。如果每次版本更新时只修改h5、css、js的话就不需要重新打包了，如果是利用js跟webview中的代码进行交叉调用实现交互效果的话就要重新打包了。
 </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'h5packApp',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    methods: {
      forbidKeyboard(){
         document.activeElement.blur();
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input{
    padding: 8px;
    margin:8px 0;
    border: 1px solid #CCCCCC;
    border-radius: 4px;
  }
  p{
    margin: 10px 0;
  }
</style>
