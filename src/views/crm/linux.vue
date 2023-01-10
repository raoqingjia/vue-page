<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <ul class="catalogue clearfix">
            <li v-for="(items,index) in catalogue"  :key="index" ><a @click="jump(index)">{{items.name}}</a></li>
          </ul>
          <h3>linux命令简介</h3>
          <pre>基本操作命令
#    超级管理员登录
$    普通用户登录
~    你所在的目录

cd /   切换到根目录  linux是没有系统盘符的，都是从根开始
cd home   切换到home目录
cd  ..  返回上一层目录
cd  ~   返回家目录
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
          </pre>
          <h3>vi 命令使用</h3>
          <pre>
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
Ctrl+E 向下滚动一行，保持当前光标不动  Ctrl+Y 向上滚动一行，保持当前光标不动</pre>
          <h3>查看日志方法</h3>
          <pre>
cat abs-svc-urbac-tv895-20201026.log | grep 'WebSearchConfigService' | grep 120
less app.log | grep '发货成功' | grep '不存在'
grep -i tree /var/log/yum.log  找含有关键字tree的grep是区分大小写，让grep不区分大小写可以加上参数-i

tail命令
命令格式: tail[必要参数][选择参数][文件]
-f 循环读取
-q 不显示处理信息
-v 显示详细的处理信息
-c< 数目> 显示的字节数
-n< 行数> 显示行数
-q, --quiet, --silent 从不输出给出文件名的首部
-s, --sleep-interval=S 与-f合用,表示在每次反复的间隔休眠S秒
Ctrl+c 是退出tail命令

tail用法用例
tail  -n  10   test.log   ## 查询日志尾部最后10行的日志;
tail  -n +10   test.log   ## 查询10行之后的所有日志;
tail  -fn 1000 test.log   ## 循环实时查看最后1000行记录(最常用的)
## 可配合grep使用
tail -fn 1000 test.log | grep '关键字'
## 如果一次性查询的数据量太大,可以进行翻页查看
tail -n 4000  test.log |more -1000 ## 可以进行多屏显示(ctrl + f 或者 空格键可以快捷键)
## 把test.txt文件扔进垃圾箱，赋空值test.txt
cat /dev/null > /etc/test.txt

head命令
跟tail是相反的head是看前多少行日志，head其他参数参考tail
head -n  10  test.log   ## 查询日志文件中的头10行日志;
head -n -10  test.log   ## 查询日志文件除了最后10行的其他所有日志;

cat搜索关键字附近的日志
最常用的：
cat -n filename |grep "关键字"
其他情况：
cat app.log | grep -C 5 '关键字' 　　(显示日志里匹配字串那行以及前后5行)
cat app.log | grep -B 5 '关键字' 　　(显示匹配字串及前5行)
cat app.log | grep -A 5 '关键字' 　　(显示匹配字串及后5行)

cat filename  一次显示整个文件
cat > filename  创建一个文件
cat file1 file2 > file ## 只能创建新文件,不能编辑已有文件  将几个文件合并为一个文件
cat -n textfile1 >> textfile2   将一个日志文件的内容追加到另外一个
cat : >textfile2    清空一个日志文件
注意：
> 是创建,将两个或多个文件连接到另一个新文件;
>> 是追加,运算符将输出附加到指定文件，或者如果它不存在则创建指定文件

less
less命令在查询日志时，一般流程如下
常用命令参数
## less与more类似，使用less可以随意浏览文件，而more仅能向前移动，不能向后移动，而且 less 在查看之前不会加载整个文件。
less log2013.log 查看文件
ps -ef | less   ps查看进程信息并通过less分页显示
history | less   查看命令历史使用记录并通过less分页显示
less log2013.log log2014.log   浏览多个文件
常用命令参数：
-b < 缓冲区大小> 设置缓冲区的大小
-g 只标志最后搜索的关键词
-i 忽略搜索时的大小写
-m 显示类似more命令的百分比
-N 显示每行的行号
-o < 文件名> 将less 输出的内容在指定文件中保存起来
-Q 不使用警告音
-s 显示连续空行为一行
/字符串：向下搜索"字符串"的功能
?字符串：向上搜索"字符串"的功能
n：重复前一个搜索（与 / 或 ? 有关）
N：反向重复前一个搜索（与 / 或 ? 有关）
b 向后翻一页
h 显示帮助界面
q 退出less 命令

less test.log
shift+G : 	命令到文件尾部  然后输入 ？加上你要搜索的关键字例如 ？1213
按n :  	 	向上查找关键字
shift+n :	反向查找关键字
## less与more类似，使用less可以随意浏览文件，而more仅能向前移动，不能向后移动，而且 less 在查看之前不会加载整个文件。
less log2013.log 	## 查看文件
ps -ef | less   	## ps查看进程信息并通过less分页显示
history | less   	## 查看命令历史使用记录并通过less分页显示
less test1.log test2.log   ## 浏览多个文件

more查看所有关键字相关的日志
more的语法：more [文件名]
more app.log 默认打开所有的，从前往后
more app.log | grep '关键字'
Enter: 	向下n行，需要定义，默认为1行
Ctrl+f: 向下滚动一屏
空格键:	向下滚动一屏
Ctrl+b: 返回上一屏
= :		输出当前行的行号
:f :	输出文件名和当前行的行号
v :		调用vi编辑器
!命令 : 	调用Shell，并执行命令
q : 	退出more

vi(vim) 进入编辑查找：
1、进入vim编辑模式：vi app.log
2、输入“/关键字”,按enter键查找
3、查找下一个，按“n”即可（ n 查找上一处错误日志  N 查找下一处错误日志）
4、ctrl+f: 下翻一屏。
ctrl+b: 上翻一屏。
ctrl+d: 下翻半屏。
ctrl+u: 上翻半屏。
ctrl+e: 向下滚动一行。
ctrl+y: 向上滚动一行。
5、ctrl+o回到搜索的地方
退出：按ESC键后，接着再输入:号时，vi会在屏幕的最下方等待我们输入命令
wq! 保存退出；
q! 不保存退出；
其他情况：
/关键字  　　注：正向查找，按n键把光标移动到下一个符合条件的地方
?关键字  　　注：反向查找，按shift+n 键，把光标移动到下一个符合条件的

sed根据时间查看
这个命令可以查找日志文件特定的一段 , 根据时间的一个范围查询，可以按照行号和时间范围查询。
cat xxx.log |sed -n '/2020-10-24 22:16:21/,/2020-10-24 22:16:59/p' abc.log
sed -n '5,10p' filename  只查看文件的第5行到第10行
sed -n '/2014-12-17 16:17:20/,/2014-12-17 16:17:36/p'  test.log        按照时间段查看日志
          </pre>
          <h3>文件上传下载功能</h3>
          <pre>
sz fileName  下载
rz fileName  上传
在SecureCRT中设置上传下载目录
选项--->会话选项--->终端--->X/Y/Zmodem--->目录--->上传--->下载</pre>
          <h3>打包命令</h3>
          <pre>tar -cvf dist.tar  dist   仅打包，不压缩
tar -zcvf dist.tar dist   打包后，以 gzip 压缩
tar -jcvf dist.tar dist   打包后，以 bzip2 压缩
tar xvf dist.tar  解包

zip -r mydata.zip mydata   压缩为mydata.zip
unzip -d  mydata.zip  mydatabak  mydata.zip解压到mydatabak目录里面</pre>
             <h3>sed脚本命令</h3>
          <pre>命令的基本格式
[root@localhost ~]# sed [选项] [脚本命令] 文件名
选项
-e ：直接在命令行模式上进行sed动作编辑，此为默认选项;
-f ：将sed的动作写在一个文件内，用–f filename 执行filename内的sed动作;
-i ：直接修改文件内容;
-n ：只打印模式匹配的行；
-r ：支持扩展表达式;
-h或--help：显示帮助；
-V或--version：显示版本信息

sed常用命令
a\ 在当前行下面插入文本;
i\ 在当前行上面插入文本;
c\ 把选定的行改为新的文本;
d 删除，删除选择的行;
D 删除模板块的第一行;
s 替换指定字符;
h 拷贝模板块的内容到内存中的缓冲区;
H 追加模板块的内容到内存中的缓冲区;
g 获得内存缓冲区的内容，并替代当前模板块中的文本;
G 获得内存缓冲区的内容，并追加到当前模板块文本的后面;
l 列表不能打印字符的清单;
n 读取下一个输入行，用下一个命令处理新的行而不是用第一个命令;
N 追加下一个输入行到模板块后面并在二者间嵌入一个新行，改变当前行号码;
p 打印模板块的行。 P(大写) 打印模板块的第一行;
q 退出Sed;
b lable 分支到脚本中带有标记的地方，如果分支不存在则分支到脚本的末尾;
r file 从file中读行;
t label if分支，从最后一行开始，条件一旦满足或者T，t命令，将导致分支到带有标号的命令处，或者到脚本的末尾;
T label 错误分支，从最后一行开始，一旦发生错误或者T，t命令，将导致分支到带有标号的命令处，或者到脚本的末尾;
w file 写并追加模板块到file末尾;
W file 写并追加模板块的第一行到file末尾;
! 表示后面的命令对所有没有被选定的行发生作用;
= 打印当前行号;
# 把注释扩展到下一个换行符以前;

sed替换标记
g 表示行内全面替换;
p 表示打印行;
w 表示把行写入一个文件;
x 表示互换模板块中的文本和缓冲区中的文本;
y 表示把一个字符翻译为另外的字符（但是不用于正则表达式）;
\1 子串匹配标记;
& 已匹配字符串标记;

sed元字符集
^ 匹配行开始，如：/^sed/匹配所有以sed开头的行;
$ 匹配行结束，如：/sed$/匹配所有以sed结尾的行;
. 匹配一个非换行符的任意字符，如：/s.d/匹配s后接一个任意字符，最后是d;
* 匹配0个或多个字符，如：/*sed/匹配所有模板是一个或多个空格后紧跟sed的行;
[] 匹配一个指定范围内的字符，如/[ss]ed/匹配sed和Sed;
[^] 匹配一个不在指定范围内的字符，如：/[^A-RT-Z]ed/匹配不包含A-R和T-Z的一个字母开头，紧跟ed的行;
\(..\) 匹配子串，保存匹配的字符，如s/\(love\)able/\1rs，loveable被替换成lovers;
& 保存搜索字符用来替换其他字符，如s/love/**&**/，love这成**love**;
\< 匹配单词的开始，如:/\
\> 匹配单词的结束，如/love\>/匹配包含以love结尾的单词的行;
x\{m\} 重复字符x，m次，如：/0\{5\}/匹配包含5个0的行;
x\{m,\} 重复字符x，至少m次，如：/0\{5,\}/匹配至少有5个0的行;
x\{m,n\} 重复字符x，至少m次，不多于n次，如：/0\{5,10\}/匹配5~10个0的行;

sed用户实例
1、替换操作：s命令
替换文本中的字符串：
sed 's/book/books/' file
-n选项和p命令一起使用表示只打印那些发生替换的行：
sed -n 's/test/TEST/p' file
直接编辑文件选项-i，会匹配file文件中每一行的第一个book替换为books
sed -i 's/book/books/g' file

2、全面替换标记g
使用后缀 /g 标记会替换每一行中的所有匹配：
sed 's/book/books/g' file
当需要从第N处匹配开始替换时，可以使用 /Ng：
echo sksksksksksk | sed 's/sk/SK/2g'
skSKSKSKSKSK
echo sksksksksksk | sed 's/sk/SK/3g'
skskSKSKSKSK
echo sksksksksksk | sed 's/sk/SK/4g'
skskskSKSKSK

3、定界符
以上命令中字符 / 在sed中作为定界符使用，也可以使用任意的定界符
sed 's:test:TEXT:g'
sed 's|test|TEXT|g'
定界符出现在样式内部时，需要进行转义：
sed 's/\/bin/\/usr\/local\/bin/g'

4、删除操作：d命令
删除空白行：
sed '/^$/d' file
删除文件的第2行：
sed '2d' file
删除文件的第2行到末尾所有行：
sed '2,$d' file
删除文件最后一行：
sed '$d' file
删除文件中所有开头是test的行：
sed '/^test/'d file

5、已匹配字符串标记&
正则表达式 \w+ 匹配每一个单词，使用 [&] 替换它，& 对应于之前所匹配到的单词：
echo this is a test line | sed 's/\w\+/[&]/g'
[this] [is] [a] [test] [line]
所有以192.168.0.1开头的行都会被替换成它自已加localhost：
sed 's/^192.168.0.1/&localhost/' file 192.168.0.1localhost

6、子串匹配标记\1
匹配给定样式的其中一部分：
echo this is digit 7 in a number | sed 's/digit \([0-9]\)/\1/'
this is 7 in a number
命令中 digit 7，被替换成了 7。样式匹配到的子串是 7，(..) 用于匹配子串，对于匹配到的第一个子串就标记为 \1，依此类推匹配到的第二个结果就是 \2，例如：
echo aaa BBB | sed 's/\([a-z]\+\) \([A-Z]\+\)/\2 \1/'
BBB aaa
love被标记为1，所有loveable会被替换成lovers，并打印出来：
sed -n 's/\(love\)able/\1rs/p' file

7、组合多个表达式
sed '表达式' | sed '表达式'  等价于：
sed '表达式; 表达式'

8、引用
sed表达式可以使用单引号来引用，但是如果表达式内部包含变量字符串，就需要使用双引号。
test=hello
echo hello WORLD | sed "s/$test/HELLO"
HELLO WORLD

9、选定行的范围：,（逗号）
所有在模板test和check所确定的范围内的行都被打印：
sed -n '/test/,/check/p' file
打印从第5行开始到第一个包含以test开始的行之间的所有行：
sed -n '5,/^test/p' file
对于模板test和west之间的行，每行的末尾用字符串aaa bbb替换：
sed '/test/,/west/s/$/aaa bbb/' file

10、多点编辑：e命令
-e选项允许在同一行里执行多条命令：
sed -e '1,5d' -e 's/test/check/' file
上面sed表达式的第一条命令删除1至5行，第二条命令用check替换test。命令的执行顺序对结果有影响。如果两个命令都是替换命令，那么第一个替换命令将影响第二个替换命令的结果。

和 -e 等价的命令是 --expression：
sed --expression='s/test/check/' --expression='/love/d' file

11、从文件读入：r命令
file里的内容被读进来，显示在与test匹配的行后面，如果匹配多行，则file的内容将显示在所有匹配行的下面：
sed '/test/r file' filename

12、写入文件：w命令
在example中所有包含test的行都被写入file里：
sed -n '/test/w file' example

13、追加（行下）：a\命令
将 this is a test line 追加到 以test 开头的行后面：
sed '/^test/a\this is a test line' file
在 test.conf 文件第2行之后插入 this is a test line：
sed -i '2a\this is a test line' test.conf

14、插入（行上）：
i\命令 将 this is a test line 追加到以test开头的行前面：
sed '/^test/i\this is a test line' file
在test.conf文件第5行之前插入this is a test line：
sed -i '5i\this is a test line' test.conf

15、下一个：n命令
如果test被匹配，则移动到匹配行的下一行，替换这一行的aa，变为bb，并打印该行，然后继续：
sed '/test/{ n; s/aa/bb/; }' file

16、变形：y命令
把1~10行内所有abcde转变为大写，注意，正则表达式元字符不能使用这个命令：
sed '1,10y/abcde/ABCDE/' file

17、退出：q命令
打印完第10行后，退出sed sed '10q' file 保持和获取：h命令和G命令 在sed处理文件的时候，每一行都被保存在一个叫模式空间的临时缓冲区中，除非行被删除或者输出被取消，否则所有被处理的行都将打印在屏幕上。接着模式空间被清空，并存入新的一行等待处理。
sed -e '/test/h' -e '$G' file
在这个例子里，匹配test的行被找到后，将存入模式空间，h命令将其复制并存入一个称为保持缓存区的特殊缓冲区内。第二条语句的意思是，当到达最后一行后，G命令取出保持缓冲区的行，然后把它放回模式空间中，且追加到现在已经存在于模式空间中的行的末尾。在这个例子中就是追加到最后一行。简单来说，任何包含test的行都被复制并追加到该文件的末尾。

18、保持和互换：h命令和x命令
互换模式空间和保持缓冲区的内容。也就是把包含test与check的行互换：
sed -e '/test/h' -e '/check/x' file

19、脚本scriptfile
sed脚本是一个sed的命令清单，启动Sed时以-f选项引导脚本文件名。Sed对于脚本中输入的命令非常挑剔，在命令的末尾不能有任何空白或文本，如果在一行中有多个命令，要用分号分隔。以#开头的行为注释行，且不能跨行。
sed [options] -f scriptfile file(s)

20、打印奇数行或偶数行
方法1：
sed -n 'p;n' test.txt  #奇数行 sed -n 'n;p' test.txt  #偶数行
方法2：
sed -n '1~2p' test.txt  #奇数行 sed -n '2~2p' test.txt  #偶数行

21、打印匹配字符串的下一行
grep -A 1 SCC URFILE
sed -n '/SCC/{n;p}' URFILE
awk '/SCC/{getline; print}' URFILE</pre>
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
        title: this.$route.query.name,
        catalogue: []
      }
    },
    mounted(){
      this.$nextTick(function () {
        this.createCatalogue();
      })
    },
    computed:{

    },
    methods: {
      jump(index) {
//        let jump = document.getElementsByTagName('h3');
//       // 获取需要滚动的距离
//        let total = jump[index].offsetTop;
//        // Chrome
//        document.body.scrollTop = total;
//        // Firefox
//        document.documentElement.scrollTop = total;
//       // Safari
//        window.pageYOffset = total
//        https://www.cnblogs.com/wisewrong/p/6495726.html  参考网站
        let jump = document.getElementsByTagName('h3');
        let total = jump[index].offsetTop;  // 获取目标位置滚动的距离
        let distance = document.documentElement.scrollTop || document.body.scrollTop; //获取当前滚动轴的位置
        // 平滑滚动，时长500ms，每10ms一跳，共50跳
        let step = total / 50;
        if (total > distance) {
          smoothDown()
        } else {
          let newTotal = distance - total;  //防止total，let step=total/50太小，移动缓慢
          step = newTotal / 50;
          smoothUp()
        }

        function smoothDown() {
          if (total > distance) {
            distance += step;
            document.body.scrollTop = distance;
            document.documentElement.scrollTop = distance;
            setTimeout(smoothDown, 10)
          } else {
            document.body.scrollTop = total;
            document.documentElement.scrollTop = total
          }
        }

        function smoothUp() {
          if (total < distance) {
            distance -= step;
            document.body.scrollTop = distance;
            document.documentElement.scrollTop = distance;
            setTimeout(smoothUp, 10)
          } else {
            document.body.scrollTop = total;
            document.documentElement.scrollTop = total
          }
        }
      },
      //创建目录函数
      createCatalogue() {
        let object = document.getElementsByTagName('h3');
        var flag = [];
        for (var i = 0; i < object.length; i++) {
          object[i].innerHTML = ((i + 1) + ". " + object[i].innerHTML);
          flag.push({name: object[i].innerHTML})
        }
        this.catalogue = flag;
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
