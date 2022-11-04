<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
          <a href="static/document/shell.mht" class="a-download">shell笔记下载</a>
        </p>
        <div class="art-content">
          <ul class="catalogue clearfix">
            <li v-for="(items,index) in catalogue"  :key="index" ><a @click="jump(index)">{{items.name}}</a></li>
          </ul>
          <h3>脚本的调用形式</h3>
          <pre>打开终端时系统自动调用：/etc/profile 或 ~/.bashrc
/etc/profile
此文件为系统的每个用户设置环境信息,当用户第一次登录时,该文件被执行，系统的公共环境变量在这里设置
开始自启动的程序，一般也在这里设置
~/.bashrc
用户自己的家目录中的.bashrc
登录时会自动调用，打开任意终端时也会自动调用
这个文件一般设置与个人用户有关的环境变量，如交叉编译器的路径等等
用户手动调用：用户实现的脚本

source命令用法:
source FileName
作用:在当前bash环境下读取并执行FileName中的命令。
注:该命令通常用命令“.”来替代。
如:source .bash_rc 与 . .bash_rc 是等效的。
注意:source命令与shell scripts的区别是，
source在当前bash环境下执行命令，而scripts是启动一个子shell来执行命令。这样如果把设置环境变量(或alias等等)的命令写进scripts中，就只会影响子shell,无法改变当前的BASH,所以通过文件(命令列)设置环境变量时，要用source 命令。</pre>
          <h3>脚本的初步编写</h3>
          <pre>脚本以 #!/bin/bash开头
#!用来声明脚本由什么shell解释，否则使用默认shell
如：创建第一个shell程序，输出hello world!
#!/bin/bash
echo “hello world!”
执行方式
1、输入脚本的绝对路径或相对路径（此方法要赋予该脚本可执行权限），如./hello.sh 或/home/hello.sh
2、sh + 脚本名，可以直接执行
          </pre>
          <h3>Shell的变量</h3>
          <pre>Linux Shell的变量分为系统变量和用户自定义变量。
系统变量：$HOME、$SHELL、$USER等等，可用echo输出查看，如echo $HOME。（输入set 可以查看所有的系统变量）

Shell变量的定义
1、定义变量：变量名=值 （不可加空格）
2、撤销变量：unset 变量名（注意：声明静态变量readonly变量不可用unset撤销）
3、使用 $变量名
4、查看环境变量：env
如：定义一个变量A，使之等于100，声明静态变量B=200
#!/bin/bash
A=100
echo A=$A (或echo "A=$A"，这两种写法都输出A=100，而echo $A则直接输出100)
readonly B=200
echo B=$B
注意：变量名规范为大写，不能带有系数，不能随意加空格
将命令的返回值赋给变量
1、A=`date`，即可将date命令的结果赋给A(必须要加反引号，否则是将文本赋给A)
2、A=$(date) 等价与反引号

注意事项：
1、变量名只能包含英文字母下划线，不能以数字开头
1_num=10 错误
num_1=20 正确
2、等号两边不能直接接空格符，若变量中本身就包含了空格，则整个字符串都要用双引号、或单引号括起来
3、双引号 单引号的区别
双引号：可以解析变量的值
单引号：不能解析变量的值
4、变量的值如果有空格，需要使用双引号或单引号括起来
5、变量的值如果有空格，需要使用双引号或单引号括起来

设置环境变量
export 变量名=变量值 （将shell变量输出为环境变量或全局变量）
source 配置文件 (刷新配置文件，让修改后的配置信息立刻生效)
echo $变量名   (查询环境变量的值)</pre>
          <img src="../../img/crm/shell01.png">
          <h3>shell传递参数</h3>
          <pre>我们可以在执行 Shell 脚本时，向脚本传递参数，脚本内获取参数的格式为：$n。n 代表一个数字，其中$0为执行的文件名，1 为执行脚本的第一个参数，2 为执行脚本的第二个参数，以此类推……
举例：
以下实例我们向脚本传递三个参数，并分别输出
#!/bin/bash
echo "Shell 传递参数实例！";
echo "执行的文件名：$0";
echo "第一个参数为：$1";
echo "第二个参数为：$2";
echo "第三个参数为：$3";
为脚本设置可执行权限，并执行脚本，输出结果如下所示：
$ chmod +x test1.sh
$ ./test.sh 1 2 3

另外，还有几个特殊字符用来处理参数：
$#  传递到脚本的参数个数
$*  以一个单字符串显示所有向脚本传递的参数。如"$*"用「"」括起来的情况、以"$1 $2 … $n"的形式输出所有参数。
$$  脚本运行的当前进程ID号
$!  后台运行的最后一个进程的ID号
$@  与$*相同，但是使用时加引号，并在引号中返回每个参数。 如"$@"用「"」括起来的情况、以"$1" "$2" … "$n" 的形式输出所有参数。
$?  显示最后命令的退出状态。0表示没有错误，其他任何值表明有错误。

#!/bin/bash
echo "Shell 传递参数实例！";
echo "第一个参数为：$1";
echo "参数个数为：$#";
echo "传递的参数作为一个字符串显示：$*";

read 读取控制台输
基本语法: read (选项) (参数)
选项：
-p：指定读取值时的提示符；
-t：指定读取值时等待的时间（秒）如果-t 不加表示一直等待
参数
变量：指定读取值的变量名
提示7秒内，读取控制台输入的变量，并输出
#!/bin/bash
read -p "在七秒内输入一个变量" -t 7 var
echo $var</pre>
          <h3>test条件判断</h3>
          <pre>基本语法：
1）test 判断表达式
2）[ 判断表达式 ]（注意 condition 前后要有空格）
注意：条件非空即为 true，[ atguigu ]返回 true，[   ] 返回 false

两个整数之间比较
-eq 等于（equal）
-ne 不等于（not equal）
-lt 小于（less than）
-le 小于等于（less equal）
-gt 大于（greater than）
-ge 大于等于（greater equal） 注：如果是字符串之间的比较 ，用等号“=”判断相等；用“!=”判断不等。

文件测试
参数	说明
-e 文件名	如果文件存在则为真
-r 文件名	如果文件存在且可读则为真
-w 文件名	如果文件存在且可写则为真
-x 文件名	如果文件存在且可执行则为真
-s 文件名	如果文件存在且至少有一个字符则为真
-d 文件名	如果文件存在且为目录则为真
-f 文件名	如果文件存在且为普通文件则为真
-c 文件名	如果文件存在且为字符型特殊文件则为真
-b 文件名	如果文件存在且为块特殊文件则为真

字符串测试
下表列出了常用的字符串运算符，假定变量 a 为 "abc"，变量 b 为 "efg"：
运算符    说明       举例
=    检测两个字符串是否相等，相等返回 true。   [ $a = $b ] 返回 false。
!=   检测两个字符串是否相等，不相等返回 true。 [ $a != $b ] 返回 true。
-z   检测字符串长度是否为0，为0返回 true。     [ -z $a ] 返回 false。
-n   检测字符串长度是否为0，不为0返回 true。  [ -n "$a" ] 返回 true。
$    检测字符串是否为空，不为空返回 true。     [ $a ] 返回 true。

另外，Shell还提供了与( -a )、或( -o )、非( ! )三个逻辑操作符用于将测试条件连接起来，其优先级为："!"最高，"-a"次之，"-o"最低。例如：
#!/bin/bash
cd /bin
if test -e ./notFile -o -e ./bash
then
    echo '至少有一个文件存在!'
else
    echo '两个文件都不存在'
fi

案例1
num1=100
num2=100
if test $[num1] -eq $[num2]
then
    echo '两个数相等！'
else
    echo '两个数不相等！'
fi
输出结果：两个数相等！

案例2
cd /bin
if test -e ./bash
then
    echo '文件已存在!'
else
    echo '文件不存在!'
fi</pre>
          <img src="../../img/crm/shell02.png">
          <h3>Shell运算</h3>
          <pre>算术运算：Bash 原生不支持数学运算，可以使用 awk 和 expr
注意乘号需要加上转义：\*，而且运算符两侧必须空格
下表列出了常用的算术运算符，假定变量 a 为 10，变量 b 为 20：
算术运算符
+    加法 `expr $a + $b` 结果为 30。
-    减法 `expr $a - $b` 结果为 -10。
*    乘法 `expr $a \* $b` 结果为  200。
/    除法 `expr $b / $a` 结果为 2。
%    取余 `expr $b % $a` 结果为 0。
=    赋值 a=$b 将把变量 b 的值赋给 a。
==   相等。用于比较两个数字，相同则返回 true。 [ $a == $b ] 返回 false。
!=   不相等。用于比较两个数字，不相同则返回 true。  [ $a != $b ] 返回 true。

案例
#!/bin/bash
a=10
b=20
val=`expr $a + $b`
echo "a + b : $val"
val=`expr $a \* $b`
echo "a * b : $val"
if [ $a == $b ]
then
   echo "a 等于 b"
fi
if [ $a != $b ]
then
   echo "a 不等于 b"
fi
注意：条件表达式要放在方括号之间，并且要有空格，例如: [$a==$b] 是错误的，必须写成 [ $a == $b ]。
乘号(*)前边必须加反斜杠(\)才能实现乘法运算；`expr $a + $b`等于$(($a+$b))
除了上面书写方式还可以改为
$((运算式))” 或 “$[运算式]”
例如S=$[(2+3)*4]	计算（2+3）* 4 的值

关系运算符
关系运算符只支持数字，不支持字符串，除非字符串的值是数字。
下表列出了常用的关系运算符，假定变量 a 为 10，变量 b 为 20：
-eq  检测两个数是否相等，相等返回 true。                  [ $a -eq $b ] 返回 false。
-ne  检测两个数是否不相等，不相等返回 true。               [ $a -ne $b ] 返回 true。
-gt  检测左边的数是否大于右边的，如果是，则返回 true。     [ $a -gt $b ] 返回 false。
-lt  检测左边的数是否小于右边的，如果是，则返回 true。     [ $a -lt $b ] 返回 true。
-ge  检测左边的数是否大于等于右边的，如果是，则返回 true。 [ $a -ge $b ] 返回 false。
-le  检测左边的数是否小于等于右边的，如果是，则返回 true。 [ $a -le $b ] 返回 true。

案例
#!/bin/bash
a=10
b=20
if [ $a -eq $b ]
then
   echo " a 等于 b"
else
   echo " a 不等于 b"
fi
if [ $a -gt $b ]
then
   echo "a 大于 b"
else
   echo "a 不大于 b"
fi
if [ $a -lt $b ]
then
   echo "a 小于 b"
else
   echo "a 不小于 b"
fi</pre>
          <h3>流程控制</h3>
          <pre>if单分支判断
if [ 条件判断 ] ; then
   程序
fi
或者
if [ 条件判断 ]
then
   程序
fi

if多分支判断
if [ 条件判断 ]
then
   程序
elif[ 条件判断 ]
then
   程序
else
   程序
fi
注意事项：
[ 条件判断式 ]，中括号和条件判断式之间必须有空格
if 后要有空格

case语句
case $变量名 in
"值 1")
;;
如果变量的值等于值1，则执行程序1，值
2")
如果变量的值等于值2，则执行程序2
…省略其他分支…
*)
如果变量的值都不是以上的值，则执行此程序
;;
esac

注意事项：
case 语句以"case"开头，以"esac"结尾。
case 行尾必须为单词“in”，每一个模式匹配必须以右括号“）”结束。
双分号“;;”表示命令序列结束，相当于 java 中的 break。
最后的“*）”表示默认模式，相当于 java 中的 default

[root@localhost ~]# vi sh/case.sh
#!/bin/bash
#判断用户输入
read -p "Please choose yes/no: " -t 30 cho
#在屏幕上输出"请选择yes/no"，然后把用户选择赋予变量cho
case $cho in
#判断变量cho的值
    "yes")
    #如果是yes
        echo "Your choose is yes!"
        #则执行程序1
        ;;
    "no")
    #如果是no
        echo "Your choose is no!"
        #则执行程序2
        ;;
    *)
    #如果既不是yes,也不是no
    echo "Your choose is error!"
    #则执行此程序
    ;;
esac
解释一下脚本思路：请用户输入 yes 或 no，如果输入的是 yes，则输出"Your choose is yes!"；如果输入的是 no，则输出"Your choose is no!"；如果输入的是其他字符，则输出"Your choose is error!"</pre>
          <h3>循环语句</h3>
          <pre>for循环
写法一
for 变量名 in 取值列表
do
  命令
done
案例1
for i in {1..5};do echo $i;done
{1..5}为取值范围1到5；echo $i 输出当前的取值
案例2
for i in `seq 5`;do echo $i;done
seq 5 与{1..5}效果一样

写法二
for ((初始值;循环控制条件;变量变化))
do
  命令
done
案例3
for((i=1;i<=5;i++));do echo $i;done
使用（（））双括号，可以支持C语言的一些命令；i=1;i<=5;i++ #i初始值为1，如果i小于等于5时执行循环，每次循环后+1

案例4
利用for循环，打印99乘法表
#!/bin/bash
for ((i=1;i<=9;i++))     #此处也可以写  for i in {1..9}
do
    for ((j=1;j<=i;j++))  #此处也可写 for j in `seq $i`
    do echo -n -e "$j*$i=$[j*i]\t" #-n不换行输出；-e使用\转义符；\t横向制表；若不用-e，则\t为普通字符
    done
  echo
done

while循环基础语法
#当条件测试成立（条件测试为真），执行循环
while  条件测试
do
      循环体
done
案例1
#!/bin/bash
i=1
while [ $i -le 10 ]
do
    echo $i
    let i++
done

案例2
#用for循环实现
a=1
b=9
for i in {1..9}
do
     echo $a + $b = $[ $a + $b ]
     let a++
     let b--
done
#用while循环实现
a=1
b=9
while [ $a -le 9 ]
do
       echo $a + $b = $[ $a + $b ]
       let a++
       let b--
done

案例3
判断用户输入的数值是否大于0，如果大于0，则三秒输出一次大于
[root@manage while]# cat while-03.sh
#!/bin/bash
read -p "请输入数字：" num
while [ $num -gt 0 ]
do
      echo "大于0"
      sleep 3
done

break命令
break命令允许跳出所有循环（终止执行后面的所有循环）
下面的例子中，脚本进入死循环直至用户输入数字大于5。要跳出这个循环，返回到shell提示符下，需要使用break命令。
#!/bin/bash
while :
do
    echo -n "输入 1 到 5 之间的数字:"
    read num
    case $num in
        1|2|3|4|5) echo "你输入的数字为 $num!"
        ;;
        *) echo "你输入的数字不是 1 到 5 之间的数字! 游戏结束"
            break
        ;;
    esac
done

练习
练习1写一个脚本：
1.创建目录/tmp/scripts
2.切换工作目录至此目录中
3.复制/etc/pam.d目录至当前目录，并重命名为test
4.将当前目录test属主改为bin，属组改为adm
5.将test文件的权限改为用户可读可写可执行，用户组可读可写，其他人没有任何权限
#!/bin/bash
mkdir -p /tmp/scripts
cd /tmp/scripts
cp -r /etc/pam.d ./test
chown  bin:adm ./test
chmod  760 ./test

练习2：写一个脚本：
脚本生成一个 100 以内的随机数,提示用户猜数字,根据用户的输入,提示用户猜对了,
# 猜小了或猜大了,直至用户猜对脚本结束。
# RANDOM 为系统自带的系统变量,值为 0‐32767的随机
# 使用取余算法将随机数变为 1‐100 的随机数
#!/bin/bash
num=$[RANDOM%100+1]
echo "$num"
while :
do
  read -p "计算机生成了一个 1‐100 的随机数,你猜: "  cai
  if [ $cai -eq $num ]
  then
      echo "恭喜,猜对了"
      exit
      elif [ $cai -gt $num ]
      then
              echo "不好意思,猜大了"
      else
              echo "不好意思,猜小了"
      fi
done
          </pre>
          <h3>Shell 函数</h3>
          <pre>
linux shell 可以用户定义函数，然后在shell脚本中可以随便调用。
举例：
#!/bin/bash
sayHi(){
    echo "hello student"
}
sayHi

下面定义一个带有return语句的函数：
#!/bin/bash
funWithReturn(){
    echo "这个函数会对输入的两个数字进行相加运算..."
    echo "输入第一个数字: "
    read num1
    echo "输入第二个数字: "
    read num2
    echo "两个数字分别为 $num1 和 $num2 "
    return $(($num1+$num2))
}
funWithReturn
echo "输入的两个数字之和为 $? "

函数参数
在Shell中，调用函数时可以向其传递参数。在函数体内部，通过 $n 的形式来获取参数的值，例如，$1表示第一个参数，$2表示第二个参数...
带参数的函数示例：
#!/bin/bash
funWithParam(){
    echo "第一个参数为 $1 "
    echo "第二个参数为 $2 "
    echo "第十个参数为 $10 "
    echo "第十个参数为 ${10} "
    echo "第十一个参数为 ${11} "
    echo "参数总数有 $# 个"
    echo "作为一个字符串输出所有参数 $* "
}
funWithParam 1 2 3 4 5 6 7 8 9 34 73
注意：$10 不能获取第十个参数，获取第十个参数需要${10}。当n>=10时，需要使用${n}来获取参数。</pre>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: '',
        data() {
            return {
                created: this.$route.query.created,
                title: this.$route.query.name,
                catalogue: []
            }
        },
        mounted() {
            this.$nextTick(function () {
                this.createCatalogue();
            })
        },
        computed: {},
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
