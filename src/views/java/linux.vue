<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>linux命令简介</h3>

          <pre>
<strong>想做测试  tmp 临时文件随便搞</strong>
1）目录
cd ~   回根目录
cd ~ /dev  按Tab键自动补全功能  /dev/task 是绝对路径
cd..   到上一层
cd -   返回上一次工作目录
pwd  查看当前路径

2）显示当前目录文件
ll      表格壮展示
ls      平铺展示
ls -rt  按时间排序
-l  查看长文件
-a 查看所有文件  .文件是隐藏文件
-h 人性化操作，显示kb

3）创建文件夹、文件
mkdir fileName   新建fileName文件夹
mkdir -p  fileName/d1/d2/d3   一次建立多个文件夹
-p  是逐层创建多级目录

4）touch  创建文件
touch  a/b.text

5）删除文件
rmdir  删除空目录
rm     删除文件或目录
rm -r  -r或-R或–recursive递归处理，将指定目录下的所有文件及子目录一并处理
rm -f  强制删除文件或目录无需确认

6）改名或移动
mv common.css index.css             将common.css文件名改为index.css文件名
mv css/test.css  css/common.css     将common.css文件名改为index.css文件名
mv css/common.css   html/common.css  将common.css从css文件夹移入到html中
mv css/common.css   html             将common.css从css文件夹移入到html中

7）复制文件
cp      复制文件
cp -r   复制目录
cp index.css  /home/css       将本目录下的index.css放入到制定css文件夹中
cp -r css  /home/project/web  将css目录复制到web文件夹中

8）cat grep快速查找内容
cat log.txt | grep 'return' -A 5   查找ERROR字符，并显示ERROR所在行的之后5行
cat log.txt | grep 'return' -B 5   之前5行
cat log.txt | grep 'return' -C 5   前后5行
cat log.txt | grep 'return' -v     排除ERROR所在的行
cat abs-business-vipline*201905*   | grep  000A190507004036

9） grep （查找范围） 文件内容查找、过滤功能
-i 忽略大小写
-v   排除
ls -l /etc  | grep ^d   d表示文件夹 查找所有文件夹，grep支持正则表达式
grep的时候提示Binary file standard input matches/匹配到二进制文件 (标准输入)
加个 -a 参数，让grep把二进制文件等同文本文件处理

10）vi搜索
vi -R  只读模式
vi -R  abs-business-vipline-9dlfz-20190527.log
/ 查找内容
vi 进入后  n 下一个搜索目标  N  上一个搜索目标
shift + $ 到下一行
shift + % 返回上一行
:q！  退出

vi的命令
文件保存与退出：
：q  在文件未作任何修改的情况下退出。
：q! 强制退出，不保存对文件所作的修改。
：wq 保存对文件所作的修改并退出。
：w 保存文件。

将报文捞出查看的办法
yy              复制鼠标所在行
:n /tmp/a.txt   新建a.txt
p               粘贴
:w              写入
：q!            退出
cd -            返回上一次工作目录
ll  /tmp        跳转 临时文件
less  /temp/x.txt

11）查找文件
find （查找范围）
-name    搜索文件名， 通配符* 或 ？
-iname  忽略大小写
-size  按文件大小查找
-size +20800  大于20800*512字节  例如2m   2*1024
find  /etc -name init* -a  -type f
find  ./   -name src       在本目录查找名为src的目录
find   /   -name src       在根目下查找名为src的目录

12）打包
tar cvpf dist.tar dist  将dist文件夹打成dist.tar包

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
