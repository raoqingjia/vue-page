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

cd /   切换到根目录  linux是没有系统盘符的，都是从根开始
cd home   切换到home目录
cd  ..  返回上一层目录
cd  -   返回进入此目录之前所在目录
pwd  查看当前所在的目录

touch test.txt  新增test.txt文件
mkdir dir1  创建一个叫做 'dir1' 的目录
rm -rf  dir1  删除文件或者目录

cp file1 file2 复制一个文件
cp  dist.tar  /home/app  复制一个文件到指定目录里

mv test.log test1.txt     将文件test.log重命名为test1.txt
mv log1.txt  /test3  将文件log1.txt移动到根的test3目录中
mv * ../          移动当前文件夹下的所有文件到上一级目录

ls 查看目录中的文件
ls -l 显示文件和目录的详细资料
ls -S 以文件大小排序
ls -h 以易读大小显示

vi 命令使用
在 vi 编辑器里,先 i 编辑状态，输入内容后，按一下 ESC 退出，然后 按 : 键，然后输入 wq 保存并退出的意思，再打回车，即可退出编辑状态。
k、j、h、l——上、下、左、右光标移动命令
i 从目前光标所在处插入
a 从当前光标所在的下一个字符处开始插入
A 从光标所在行的最后一个字符处开始插入
r 只会替换光标所在的那一个字符一次
zz  保存并退出　 :q! 不保存文件，直接退出　:q　退出vi　　 :wq 保存后离开 :wq! 强制保存后离开
dd  删除一行
yy 复制光标所在的那一行
nyy  复制光标所在n行；其中n为1、2、3……
p为将已经复制的数据在光标下一行粘贴
P 大写为将已经复制的数据在光标上一行粘贴 取出剪贴板中内容的命令
同时编辑2个文件，拷贝一个文件中的文本并粘贴到另一个文件中
vi file1 file2 ->  yy 在文件1的光标处拷贝所在行 -> :n 切换到文件2 (n=next) ->p 在文件2的光标所在处粘贴所拷贝的行 -> :n 切换回文件1
Ctrl+F 向前滚动一屏  Ctrl+B 向后滚动一屏
Ctrl+D 向前滚动半屏  Ctrl+U 向后滚动半屏
Ctrl+E 向下滚动一行，保持当前光标不动  Ctrl+Y 向上滚动一行，保持当前光标不动

查看日志方法
cat abs-svc-urbac-tv895-20201026.log | grep 'WebSearchConfigService' | grep 120
tail -10f  当前日志文件中最后10条数据

文件上传下载功能
sz fileName  下载
rz fileName  上传
在SecureCRT中设置上传下载目录
选项--->会话选项--->终端--->X/Y/Zmodem--->目录--->上传--->下载

打包命令
tar -cvf dist.tar  dist   仅打包，不压缩
tar -zcvf dist.tar dist   打包后，以 gzip 压缩
tar -jcvf dist.tar dist   打包后，以 bzip2 压缩
tar xvf dist.tar  解包

zip -r mydata.zip mydata   压缩为mydata.zip
unzip -d  mydata.zip  mydatabak  mydata.zip解压到mydatabak目录里面</pre>
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
