<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>linux简介</h3>
          <pre>
基本操作命令
#    超级管理员登录
$    普通用户登录
~    你所在的目录
pwd  查看当前所在的目录
i  编辑
在 vi 编辑器里,先 按一下 ESC 退出，然后 按 : 键，然后输入 wq 保存并退出的意思，再打回车，即可退出编辑状态。
cd   切换目录
cd /   切换到根目录  linux是没有系统盘符的，都是从根开始
cd home   切换到home目录
cd  .   表示当前目录
cd  ..  返回上一层目录

打包命令
zip -r mydata.zip mydata

zip [选项] 压缩包名 源文件或源目录列表
选项说明
1 -r：递归压缩目录，及将指定目录下的所有文件以及子目录全部压缩。
2 -m：将文件压缩之后，删除原始文件，相当于把文件移到压缩文件中。
3 -v：显示详细的压缩过程信息。
4 -q：在压缩的时候不显示命令的执行过程。
5 -压缩级别：压缩级别是从1~9的数字，-1代表压缩速度更快，-9代表压缩效果更好。
6 -u：更新压缩文件，即往压缩文件中添加新文件

 unzip [选项] 压缩包名
选项说明
1 -d 目录名：将压缩文件解压到指定目录下。
2 -n：解压时并不覆盖已经存在的文件。
3 -o：解压时覆盖已经存在的文件，并且无需用户确认。
4 -v：查看压缩文件的详细信息，包括压缩文件中包含的文件大小、文件名以及压缩比等，但并不做解压操作。
5 -t：测试压缩文件有无损坏，但并不解压。
6 -x 文件列表：解压文件，但不包含文件列表中指定的文件。

查看日志方法
cat abs-svc-urbac-tv895-20201026.log | grep 'WebSearchConfigService' | grep 120
tail -10f  当前日志文件中最后10条数据

文件上传下载功能
sz fileName  下载
rz fileName  上传
在SecureCRT中设置上传下载目录
选项--->会话选项--->终端--->X/Y/Zmodem--->目录--->上传--->下载
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'linux',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    mounted(){
      this.$nextTick(function(){

      })
    },
    computed:{

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
