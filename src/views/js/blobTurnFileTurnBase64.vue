<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>blob 转 base64</h3>
          <pre>
// 原理：利用fileReader的readAsDataURL，将blob转为base64
function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
            resolve(e.target.result);
        };
        fileReader.onerror = () => {
            reject(new Error('文件流异常'));
        };
    });
}
或者用下面的，不过原理是一样的
function blobToDataURL(blob, callback) {
    let a = new FileReader();
    a.onload = function (e) { callback(e.target.result); }
    a.readAsDataURL(blob);
}</pre>
          <h3>base64 转 blob</h3>
          <pre>
function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}</pre>
          <h3>blob转化为file</h3>
          <pre>
File() 构造器创建新的 File 对象实例
var myFile = new File(bits, name[, options]);
参数
bits
ArrayBuffer，ArrayBufferView，Blob，或者 DOMString 对象的 Array — 或者任何这些对象的组合。这是 UTF-8 编码的文件内容。
name
文件名称，或者文件路径
options 可选
选项对象，包含文件的可选属性。可用的选项如下：
type: DOMString，表示将要放到文件中的内容的 MIME 类型。默认值为 “” 。
lastModified: 数值，表示文件最后修改时间的 Unix 时间戳（毫秒）。默认值为 Date.now()。</pre>
          <h3>base64转为file</h3>
          <pre>
 function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
}
这种方式，低版本的浏览器是不支持,下面方式复杂点但是能支持低版本
//将base64转换为blob对象 解决低版本浏览器兼容问题
function dataURLtoBlob(dataurl) {
	var arr = dataurl.split(',');
	var bstr = atob(arr[1]);
	var n = bstr.length;
        var mime = arr[0].match(/:(.*?);/)[1],
	var u8arr = new Uint8Array(n);
	while(n--){
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new Blob([u8arr], {type: mime });
}
//将blob转换成file
function blobToFile(theBlob, fileName){
	theBlob.lastModifiedDate =new Date();
	theBlob.name = fileName;
	return theBlob;
}
// 调用 dataurl为base64字符串  filename为文件名字,自己自定义
var file = blobToFile(dataURLtoBlob(dataurl), fileName)
          </pre>
          <h3>url 转 base64</h3>
          <pre>
canvas有一个非常常用的方法canvas.toDataURL()，它会将canvas转化为data URL的格式。
通常情况下这个data URL的类型为image。
< canvas id="canvas" height="2" width="2">
var canvas = document.getElementById('canvas');
var dataURL = canvas.toDataURL();
console.log(dataURL);  // data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAADklEQVQYV2NkgAJGGAMAAC0AA03DhRMAAAAASUVORK5CYII

new FileReader()也可以转换
let reader = new FileReader();
reader.readAsDataURL(e.target.files[0])
reader.onload = (res) => {
  console.log("文件读取内容", res);
  let img = document.getElementById("show-img")
  img.src = res.target.result
}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'indexOf',
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
