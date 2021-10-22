<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <img src="../../img/createObjectURL.jpg" style="width: 500px">
          <pre>
上图为案例展示
html为
< input type="file" id="fileDemo">
< input type="button" value="预览" onclick="doIt();"/>
< button type="button" onclick="downImg();">下载< /button>
< img id="uploadPreview">
js为
//获取文件对象
  var newfile;
  function doIt() {
    var btn = document.getElementById('btn');
    var file = document.querySelector("#fileDemo").files[0];
    //创建新文件对象
    newfile = new File([file], new Date().getTime() + ".jpg", {type: "image/jpeg"});
    console.log(newfile); // 此处打印的是 File 类型
    //以下为预览图片代码
    var reader = new FileReader();
    reader.readAsDataURL(newfile);
    console.log(reader);  //  // 此处打印的是 newfile 类型
    reader.onload = function (oFREvent) {
      console.log(oFREvent.target.result);  //  此处打印的是data:image/jpeg;base64
      document.querySelector("#uploadPreview").src = oFREvent.target.result;
    };
  }
   // 文件下载
  function downImg() {
    if (window.navigator.msSaveOrOpenBlob) {
      navigator.msSaveBlob(newfile, '上传附件下载'+new Date());
    } else {
      var link = document.createElement('a');
      var body = document.querySelector('body');
      link.href = window.URL.createObjectURL(newfile);  // 重点 objectURL = URL.createObjectURL(blob || file); File对象或者Blob对象
      link.download = '上传附件下载'+new Date();   // 重命名下载文件内容
      // fix Firefox
      link.style.display = 'none';
      body.appendChild(link);
      link.click();
      body.removeChild(link);
      window.URL.revokeObjectURL(link.href);
    }
  }</pre>
          <h3>解析createObjectURL</h3>
          <pre>
URL.createObjectURL() 静态方法会创建一个 DOMString，其中包含一个表示参数中给出的对象的URL。这个 URL 的生命周期和创建它的窗口中的 document 绑定。这个新的URL 对象表示指定的 File 对象或 Blob 对象。
URL.createObjectURL() 静态方法会创建一个生成 BlobURL，即创建从 URL 到 Blob 对象的映射关系
如：blob:http://eg.com/550e8400-e29b-41d4-a716-446655440000
let blobURL = URL.createObjectURL(object)  // object 创建 URL 的 File 对象、Blob 对象或者 MediaSource 对象
如下，revokeObjectURL 方法撤消 blobURL 与 Blob 的映射关系，有助于浏览器垃圾回收，提升性能。
URL.revokeObjectURL(blobURL)
*DOMString，BlobURL下两篇文章会详解*

URL.createObjectURL(blob)和FileReader.readAsDataURL(file)很相似，下面是一些整理的区别
主要区别
通过FileReader.readAsDataURL(file)可以获取一段data:base64的字符串
通过URL.createObjectURL(blob)可以获取当前文件的一个内存URL

执行时机：
createObjectURL是同步执行（立即的）
FileReader.readAsDataURL是异步执行（过一段时间）

内存使用：
createObjectURL返回一段带hash的url，并且一直存储在内存中，直到document触发了unload事件（例如：document close）或者执行revokeObjectURL来释放。
FileReader.readAsDataURL则返回包含很多字符的base64，并会比blob url消耗更多内存，但是在不用的时候会自动从内存中清除（通过垃圾回收机制）
兼容性方面两个属性都兼容ie10以上的浏览器。

优劣对比：
使用createObjectURL可以节省性能并更快速，只不过需要在不使用的情况下手动释放内存
如果不太在意设备性能问题，并想获取图片的base64，则推荐使用FileReader.readAsDataURL
          </pre>
          <h3>解析revokeObjectURL</h3>
          <pre></pre>
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
