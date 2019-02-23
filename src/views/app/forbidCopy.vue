<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">

          <h3>1、利用css代码设置h5页面不可复制文字</h3>
           <pre>
*{
    -webkit-touch-callout:none;  /*系统默认菜单被禁用*/
    -webkit-user-select:none; /*webkit浏览器*/
    -khtml-user-select:none; /*早期浏览器*/
    -moz-user-select:none;/*火狐*/
    -ms-user-select:none; /*IE10*/
    user-select:none;
}
/*设置IOS页面长按不可复制粘贴，但是IOS上出现input、textarea不能输入，造成这个原因就是 -webkit-user-select:none; 这个属性造成的,因此将使用-webkit-user-select:auto;*/
input,textarea {
    -webkit-user-select:auto; /*webkit浏览器*/
}
下面代码待测试
01
* {
    -webkit-touch-callout:none; /*系统默认菜单被禁用*/
    -webkit-user-select:none; /*禁用文本复制*/
    -webkit-tap-highlight-color:transparent; /*取消点击链接或者JavaScript可点击元素赋给的高亮背景色*/
}
02
如何禁止input粘贴输入和页面拖动输入
onpaste是粘贴事件，ondragenter是拖拽事件
&#60input type="text" name="name" onpaste="return false" ondragenter="return false" >
</pre>
          <p>禁止input粘贴输入和页面拖动输:<input type="text" name="name" onpaste="return false" ondragenter="return false" >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'forbidCopy',
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
