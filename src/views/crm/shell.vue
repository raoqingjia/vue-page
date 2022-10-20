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
          <h3>Shell运算</h3>
          <pre>算术运算：Bash 原生不支持数学运算，可以使用 awk 和 expr
注意乘号需要加上转义：\*，而且运算符两侧必须空格
#!/bin/bash
a=10
b=3
val=`expr $a + $b`    # 加
echo "a + b : $val"
val=`expr $a - $b`    # 减
echo "a - b : $val"
val=`expr $a \* $b`   # 乘
echo "a * b : $val"
val=`expr $b / $a`    # 除
echo "b / a : $val"
val=`expr $b % $a`    # 取余
echo "b % a : $val"

除了上面书写方式还可以改为
$((运算式))” 或 “$[运算式]”
例如S=$[(2+3)*4]	计算（2+3）* 4 的值</pre>
          <h3>条件判断</h3>
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

按照文件权限进行判断
-r 有读的权限（read）
-w 有写的权限（write）
-x 有执行的权限（execute）

按照文件类型进行判断
-e 文件存在（existence）
-f 文件存在并且是一个常规的文件（file）
-d 文件存在并且是一个目录（directory）</pre>
          <img src="../../img/crm/shell02.png">
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
解释一下脚本思路：请用户输入 yes 或 no，如果输入的是 yes，则输出"Your choose is yes!"；如果输入的是 no，则输出"Your choose is no!"；如果输入的是其他字符，则输出"Your choose is error!"

for循环
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
echo $var

https://blog.csdn.net/mr__sun__/article/details/124223003?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-124223003-blog-126511823.pc_relevant_multi_platform_whitelistv4&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-124223003-blog-126511823.pc_relevant_multi_platform_whitelistv4
https://blog.csdn.net/qq_58168493/article/details/126511823

</pre>
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
