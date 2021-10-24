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
语法:
objectURL = window.URL.createObjectURL(blob || file);
File对象，就是一个文件，比如我用input type="file"标签来上传文件，那么里面的每个文件都是一个File对象。
Blob对象，就是二进制数据，比如通过new Blob()创建的对象就是Blob对象。
又比如，在XMLHttpRequest里，如果指定responseType为blob，那么得到的返回值也是一个blob对象。
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
如果不太在意设备性能问题，并想获取图片的base64，则推荐使用FileReader.readAsDataURL</pre>
          <h3>解析revokeObjectURL</h3>
          <pre>
每次调用createObjectURL时，即使你已经为同一个文件创建过一个URL，也会创建一个新的URL对象。
如果你不再需要这个对象，需要使用URL.revokeObjectURL()方法释放它。
虽然当页面被关闭，浏览器会自动释放它，但是为了最佳性能和内存使用，当确保不再用得到它时，就应该释放它。</pre>
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
