<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>1、前言</h3>
          <pre>
FileReader是一种异步文件读取机制，结合input:file可以很方便的读取本地文件。
在介绍FileReader之前，先简单介绍input的file类型。
< input type="file" id="inputBox">
input的file类型会渲染为一个按钮和一段文字。点击按钮可打开文件选择窗口，文字表示对文件的描述（大部分情况下为文件名）；file类型的input会有files属性，保存着文件的相关信息。
点击按钮上传一个文件后，在控制台打印input.files会有如下发现
可以发现input.files是一个数组，由传入的file对象组成。每个file对象包含以下属性：
lastModified：数值，表示最近一次修改时间的毫秒数；
lastModifiedDate：对象，表示最后一次表示最近一次修改时间的Date对象（高程中说是字符串，根据上图可看出应该为对象，为了层级清晰未对其展开，大家可自行查看，其可调用Date对象的有关方法，例如getDay方法）；
name：本地文件系统中的文件名；
size：文件的字节大小；
type：字符串，文件的MIME类型；
weblitRelativePath：此处为空；当在input上加上webkitdirectory属性时，用户可选择文件夹，此时weblitRelativePath表示文件夹中文件的相对路径。比如：
< input type="file" id="inputBox" webkitdirectory></pre>
          <h3>2、readAsText转换为文本内容</h3>
          <pre>
readAsText 方法可以将 Blob 或者 File 对象转根据特殊的编码格式转化为内容(字符串形式)
var reader=new FileReader;
reader.readAsText(item,'utf8');  // encoding默utf8或设置gb2312类型  item 这里是input中file的 file对象
reader.onload=function(evt){
    var data=evt.target.result;
    console.log(data);
    console.log("加载成功");  //  这里是最终的加载成功的效果
};
reader.onloadstart = function(){
    console.log("开始加载")
  }
  reader.onloadend= function(){
    console.log("加载结束")
  }
  reader.onprogress = function(){
    count++;
    console.log("加载中"+count)
  }
</pre>
          <h3>3、ReadAsDataURL(file)直接展示图片</h3>
          <pre>
ReadAsDataURL(file)：readAsDataURL会将文件内容进行base64编码后输出，读取文件并将内容的数据URL保存在result中。
读取到的结果可以直接用于img标签的src属性：
< body>
    上传文件：< input type="file" id="file">
    <!-- 用于预览的img标签 -->
    < img id="show-img" src="" alt="">
< /body>
< script>
    let file = document.getElementById("file")
    file.onchange = function (e) {
      let reader = new FileReader();  //
      reader.readAsDataURL(e.target.files[0])
      reader.onload = (res) => {
        console.log("文件读取内容", res);
        let img = document.getElementById("show-img")
        img.src = res.target.result
      }
    }
< /script>
还要另外一种方法是file是一个Blob类型的实例。实际上，更准确地说，file是继承自Blob类型的File类型的实例。我们拿到这个file实例之后，可以通过URL.createObjectURL()将它转换为URL并加载到图片中去，这样我们就实现了图片的本地加载和预览。
</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'getDate',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
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
