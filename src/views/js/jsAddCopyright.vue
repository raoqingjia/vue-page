<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>1.直接复制下面代码就能使用</h3>
          <pre>function addLink() {
  var body_element = document.body;
  var selection;
  var blogName = 'raoqingjia 日常笔记';
  selection = window.getSelection() ? window.getSelection() : document.selection.createRange().text;
  if (window.clipboardData) {
    var pagelink ="< br/>---------------------< br/>本文来源："+blogName+"< br/>原文链接："+document.location.href+"";
    var copyText = selection + pagelink;
    window.clipboardData.setData ("Text", copyText);
    return false;
  } else {
    var pagelink = "< br/>---------------------< br/>本文来源："+blogName+"< br/>原文链接："+document.location.href+"";
    var copyText = selection + pagelink;
    var newDiv = document.createElement('div');
    newDiv.style.position ='absolute';
    newDiv.style.left ='-99999px';
    body_element.appendChild(newDiv);
    newDiv.innerHTML = copyText;
    selection.selectAllChildren(newDiv);
    window.setTimeout(function() {
      body_element.removeChild(newDiv);
    },0);
  }
}
document.oncopy = addLink;

我复制当前文章标题后粘贴到其他地方的效果
JS复制内容自动添加版权信息
---------------------
本文来源：raoqingjia 日常笔记
原文链接：http://127.0.0.1:8182/#/list
          </pre>
          <h3>2.几个关键语句解析</h3>
          <pre>window.getSelection()
getSelection() 方法可以返回一个 Selection 对象，表示用户选择的文本范围或光标的当前位置。
selection 是一个 Selection 对象。 如果想要将 selection 转换为字符串，可通过连接一个空字符串（""）或使用 String.toString() 方法。

window.clipboardData的作用是在页面上将需要的东西复制到剪贴板上，提供了对于预定义的剪贴板格式的访问，以便在编辑操作中使用。
三个方法
（1）clearData(sDataFormat) 删除剪贴板中指定格式的数据。sDataFormat:"text","url"
（2）getData(sDataFormat) 从剪贴板获取指定格式的数据。 sDataFormat:"text","url"
（3）setData(sDataFormat, sData) 给剪贴板赋予指定格式的数据。返回 true 表示操作成功。 sDataFormat:"text","url","file","html","image"，sData: 剪贴数据
但这个对象是只针对IE的。。如果是其它的浏览器呢，则会用不了
          </pre>
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
