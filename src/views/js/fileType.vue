<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3></h3>
          <pre>
File继承Blob。
File的来源：
可以是来自用户在一个input元素上选择文件后返回的FileList对象
可以是来自拖放操作生成的 DataTransfer对象
可以是来自在一个HTMLCanvasElement上执行mozGetAsFile()方法后返回结果
支持File API的浏览器有IE10+,Firefox3.5+，Opera10.6+，Safari5+,Chrome。

1.在表单元素上< input type="fiel" name="file" id="file" />，可以选择一个或多个文件，通过获取文件元素对象的集合files，来操作每一个对象files[i]；
用法：DOM操作
var files=document.getElementById("file");
var file=files.files;//每一个file对象对应一个文件。
file.name//获取本地文件系统的文件名。
file.size//文件的字节大小。
file.type//字符串类型,文件的MIME类型。
file.lastModifiedDate//文件的最后修改时间。(只使用于Chrome浏览器)

2.通过FileReader类型读取文件中的数据（异步文件读取）
FileReader有一下几种读取文件数据的方法
1）.readAsText(file,encoding);以纯文本的形式读取文件，将读取到的文件保存到result属性。encoding参数用于指定编码类型，是可选的。
2）.readAsDataURL(file);读取文件并将文件数据以URL形式保存到result属性中。（读取图像文件常用方法）
3）.readAsBinaryString(file);读取文件并将一个字符串保存在result属性中，字符串中的每个字符表示一字节。
4）.readAsArrayBuffer(file);读取文件并将一个包含文件内容的ArrayBuffer保存在result属性中。

3.FileReader提供了几个事件最有用的三个事件，progress,error,load,分别表示是否又读取了新数据，是否发生了错误，是否已经读完整个文件。
使用方法：
var reader=new FileReader();
if(/image/.test(file[0].type)){//操作图像
　　reader.readAsDataURL(file[0]);
　　var type='image';
}else{//操作文本
　　read.readAsText(file[0]);
　　var type='text';
}
reader.onerror=function(){
　　//出错时执行
}
reder.onprogress=function(){
   //有加载新数据时执行
}
reder.onload=function(){
　　if（type=='image'）{
　　　　var html="< img src=\" "+reader.result+" \">";//已经加载完了执行
　　}else if(type='text')
　　　　var html=reader.result
　　}
　　Obj.innerHTML=html;//显示在指定元素对象上
}</pre>
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
