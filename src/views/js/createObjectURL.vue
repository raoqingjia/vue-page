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
          <h3>解析createObjectURL、revokeObjectURL</h3>
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
