<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>背景
需要实现文件下载的功能，有如下两种情况：
1、如果符合条件，返回文件流
2、如果不符合条件，则后端返回JSON，附上失败的msg，前端需要将msg的内容展示给用户
在请求接口时，设置responseType: 'blob',返回Blob对象后进行处理下载，可是忽略了失败的情况，导致接收不到返回的json对象

解决方法都是通过new FileReader把blob转成，只不过判断方式不一样，方法一用的result.type，但是有的http请求方法获取不到result.type就用方法二
1、 getQuaDownload(this.applyId,this.id).then(result=>{
   if(result.type=='application/json'){
     const reader = new FileReader()
     reader.readAsText(result)
     reader.onload = function () {
       const { msg } = JSON.parse(reader.result)//此处的msg就是后端返回的msg内容
       alert(msg)
     }
   }else{
     let url = window.URL.createObjectURL(result);
     this.url=url;
   }
})
2、 接口拿到数据之后的判断，注意这里得用 async 和 await 搞成异步等待
async export(res){
    const resInfo: any = await this.blobToObj(res.data)
    if(resInfo.code != 200) {
      this.$message.error(resInfo.message)
      return false;
    }
    const blob = new Blob([res.data]);
    const blobUrl = window.URL.createObjectURL(blob);
    if (navigator.msSaveBlob) {
      return navigator.msSaveBlob(blob, fileName);
    } else {
      this.downloadMethod(blobUrl, fileName);
    }
}
// 转换方法
blobToObj(data: any) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.readAsText(data, 'utf-8');
    reader.onload = function() {
      try {
        resolve(JSON.parse(reader.result as string))
      } catch (error) {
        resolve({
          code: 200,
          message: '获取文件信息成功'
        })
      }
    }
  })
}
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'blob2json',
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
