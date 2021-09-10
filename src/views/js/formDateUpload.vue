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
< body>
< div class="wrap">
    < input type="file" id="fileId">
    < button id="btnId">上传< /button>
    < script>
     var fileId = document.getElementById('fileId');
     var btnId = document.getElementById('btnId');
     btnId.onclick=function () {
       var item = fileId.files[0];  //  这里是一个数组格式
       if(item === undefined){
         alert('请上传文件！');
         return false;
       }
       if (item.size === 0) {
         alert('禁止空文件上传');
         return false;
       }
       var fileType= item.name.substr(item.name.lastIndexOf('.')+1);
       console.log('fileType',fileType);
       var fileTypeList = ["doc","docx","gif","jpg","pdf","png","ppt","pptx","rar","txt","xls","xlsm","xlsx","zip"];
       if(fileTypeList.indexOf(fileType) === -1){
         alert("该文件类型不允许上传！");
         return false;
       }
       if (item.size === 0) {
         alert('禁止空文件上传');
         return false;
       }
       if (Math.round(item.size * 10000 / (1024 * 1024)) / 10000 > 50) {
         alert('禁止单个文件大于50MB！');
         return false;
       }
       var baseStr
       let reader = new FileReader();
       reader.readAsDataURL(item)
       reader.onload = (res) => {
         console.log("文件读取内容", res);
         baseStr = res.target.result;
         var formDate = new FormData();
         console.log("baseStr", baseStr);
         formDate.append('file', baseStr);
         formDate.append('fileName', item.name);
         console.log("baseStr", formDate);
         $.ajax({
           url:"https://sscpre.boe.com/v1/medical-console/medical/file/upload",
           type:"post",
           data:formDate,
           cache: false,
           processData: false,
           contentType: false,
           success:function(res){
           },
           error:function(err){
             alert("网络连接失败,稍后重试!");
           }
         })
       }
     }
参数说明：
1、processData设置为false。因为data值是FormData对象，不需要对数据做处理。数据处理由于是object类型，jquery在处理是会无法处理报错 ;
2、cache设置为false，上传文件不需要缓存。
3、contentType设置为false。因为是由表单构造的FormData对象，且已经声明了属性enctype=”multipart/form-data”，所以这里设置为false。
但是这个FormData对象只是在高版本的IE中支持，在低版本的IE中是不支持FormData对象的，下面这个方法可以实现低版本IE和高版本IE上传附件的兼容问题
使用form.ajaxSubmit提交请求，这个方法需要引用jquery.Form.js这个类库才可以，否则ajaxsubmit是无法使用的
    < /script>
< /div>
< /body>
</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'formDateUpload',
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
