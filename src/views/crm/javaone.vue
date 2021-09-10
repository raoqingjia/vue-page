<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <ul class="catalogue">
            <li v-for="(items,index) in catalogue"><a @click="jump(index)">{{items.name}}</a></li>
          </ul>
          <h3>写在前面</h3>
          <pre>
软件是模拟现实生活的
程序=算法+数据结构
算法：解决步骤的流程/步骤
数据结构：将数据按照某种特定的结构保存
良好的数据结构会导致到的算法
编译错误---只检查语法</pre>
          <h3>Java的编译运行过程（面试题）</h3>
          <pre>
<span>java的编译过程（常见面试题）</span>
1）编译期: .java的源文件，经过编译先生成.class字节码文件    此时只检查语法是否错误
2）运行期:  JVM加载.class并运行.class（0和1）
解释编译期和运行期
例如用记事本写一个 helloworld.java的JAVA小程序，用命令来执行程序
根据java的运行机制
1. javac helloworld.java  编译生成一个helloworld.class
2.java  helloworld   对.class文件中的程序进行解释执行
<span>跨平台</span>
一次编程到处使用,JVM与.class配合使用
JVM是安装在操作系统上的一个小软件，为字节码提供运行服务，只要是标准的.class文件，就可以在不同的JVM上运行，而且运行效果相同，这样就实行了所谓的跨平台，一次编程到处使用</pre>
          <h3>Java的中的JDK</h3>
          <pre>
<span>名称解释</span>
JVM：java虚拟机加载.class并运行.class
JRE：java 运行 环境    （重点是运行）
      除了包含JVM以外还包含了运行java程序所必须的环境
      JRE=JVM+系统类库（前人总结的插件库）
JDK：java 开发 工具包  （重点是开发）
      除了包含JRE以外还包含了开发java程序所必须的命令工具
      JDK=JRE+编译、运行等命令工具
运行一个java程序的最小环境为 JRE
开发一个java程序的最小环境为 JDK
安装了JDK就相当于有了JRE和JVM，既然你是开发人员一定要安装JDK
<span>JDK的安装</span>
下载地址 http://www.oracle.com/technetwork/java/javase/downloads/index.html
下载安装是，要注意操作系统（OS）版本和JDK版本直接的对应关系
为什么下载JDK要注意各版本之间的关系，主要是在装不同的JVM
JDK安装后系统变量后就会出现，如果没有手动配置，而且可能还要配置path环境变量
JAVA_HOME    C:\Program Files\Java\jdk1.8.0_91
<span>JDK安装目录</span>
JDK安装完成后，在JDK安装路径下可以看到如下内容：
bin目录：用于存放JDK工具命令，比如用于编译Java程序的javac命令、用于启动JVM运行Java程序的java命令、用于生成文档的javadoc命令和用于打包的jar命令等等；
jre目录：用于存放JDK所包含的JRE，其中包含有JVM和核心类库；
lib目录：用于存放JDK工具命令所对应的工具包（Tool APIs）；
demo目录：用于存放一些示例程序；
src.zip文件：用于存放核心类库的Java源代码。
select a workspace 工作空间：所创建的java项目的默认的保存路径
其中：“src”文件夹用于存放用户编写的Java源文件；“bin”文件夹用于存放Eclipse自动编译生成的class文件。Eclipse具备自动编译的功能，当用户在编写Java源文件的同时，Eclipse会自动的调用系统的Java编译器编译该文件，并将编译好的class文件存放在bin目录中。另外，“.classpath”和“.project”两个文件以及“.settings”文件夹中的内容是Eclipse用来维护工程信息的，一般可以不去理会。
其中，bin中的javac命令和java命令是我们很快要用到的命令。如果想用到这些命令，需要让操作系统可以找到这些命令文件所在的路径。在Windows操作系统中，可以通过配置Path环境变量来实现。Path环境变量是一串用分号（；）分隔开的目录，在通过控制台运行一个命令时，Windows会依次在Path环境变量中的每一个目录中查找该命令，如果找到就可以执行，否则就会报错
          </pre>
          <h3>配置环境变量</h3>
          <pre>
 环境变量就是个PATH
 PATH:C:c/a;b/a;d/a; 从c盘开始给你找编译、运行命令，找到了运行，找不不到报错
 1） JAVA_HOME : 指向jdk的安装路径
 2） CLASSPATH : 表示类的搜索路径，一般简写为.
 3） PATH:指向jdk下的bin目录
在Windows系统中通过“控制面板”→“系统”→“高级系统设置”单击→“环境变量”按钮，并在弹出的对话框中双击系统变量Path，并对其进行编辑。在Path变量值的末尾追加JDK开发工具路径（“JDK安装路径\bin”），假设JDK的安装路径为：“D:\Program Files\Java\ jdk1.6.0_24”则需追加的Path路径为：“;D:\Program Files\Java\jdk1.6.0_24\bin”。注意，路径之间需要用分号隔开。
环境变量设置完成后，通过“附件”→“命令提示符”（或者运行cmd命令）打开控制台，键入java或javac命令，看到输出正常的提示信息就表示环境变量配置成功了
需要注意的是，如果在安装JDK时选择安装了公共JRE，则不需要配置Path环境变量也可以运行java命令，这是由于公共JRE路径写入了注册表的缘故。          </pre>
          <h3>Eclipse</h3>
          <pre>
<span>Eclipse介绍</span>
Eclipse是目前主流的IDE集成开发环境，应用率90%以上，IBM打造开源项目，基于插件的可扩展，不需安装，仅需解压即可。
Eclipse本质也是java语言编写的，要先装jdk在运行eclipse；
<span>Eclipse创建项目</span>
Eclipse第一次的打开是没有配置jdk的，创建项目前需要配置本地的jdk，否则用的就是Eclipse中默认的jre，以后我们开发都要用自己本地的jdk
Window  ->  preference -> java -> Installed JRES -> add -> Standard VM （标准虚拟机的意思） ->Add JRE (选择jdk的安装路径)  finish之后回到-> Installed JRES 界面勾选jdk后点击apply应用
开发java程序的步骤:
1）新建java的项目------ 小区
2) 新建java的包--------楼+单元
3）新建java的类-------房子 601
new -- project -- java project -- project name （一定要选择本地的jdk） -- finish
src 下 new -- package -- name  -- finish
指定的package 下 new -- class -- name / public static void main (String[]args)-- finish
<p class="pre-cmd">package day01;  //声明包叫day01
public class HelloWorld {  // 声明一个类叫HelloWorld
  //主方法，为程序的入口，程序的执行从main开始，main结束则程序结束
  public static void main(String[] args) {
    //1）java是严格区分大小写的
    //2）java的所有符号必须是英文模式的
    //3）每句话必须以分号结尾，出现红色底线就说明错误
    //4）println():输出并换行
    //   println():输出不换行
    //输出结果
    System.out.print("HelloWorld");
    System.out.println("HelloWorld");
    System.out.println("天气不错");
  }
}</p></pre>
          <h3>Java的变量</h3>
          <pre>
变量就是指在内存中开辟的储存空间，用于去存放运算过程中要用的数据
<span>① 变量的声明</span>
int a=5； 用int去声明变量，int就是一个基本数据类型，int是整数类型
如果多个变量的类型一样，可以在一条语句中声明，中间用逗号隔开
<p class="pre-cmd">public static void main (Stirng[] args){
  int a=1,b=2;
  int c,d=3;  //此处只是声明了，没有赋值初始化
}</p>
<span>② 变量的初始化</span>
可以理解为是变量的第一次声明
变量类型 变量名称 = 初始值
初始化有两种：1.声明同时并初始化 2.先声明后初始化
<p class="pre-cmd">public static void main (Stirng[] args){
  int sum;
  sum=0;
  //等同于  int sum = 0;
}</p>
<span>③ 变量的使用</span>
变量的使用可理解为：使用变量运算，其实是在利用变量中你存的数值进行运算
变量的使用必须与数据类型匹配
<p class="pre-cmd">int a=25.78;  //编译错误，数据类型不匹配</p>
java语法规定变量使用前必须声明，否则会有编译错误
<span>④ 变量的命名规范</span>
1) 只能由字母、数字、"_"和"$"符组成
2) 不能以数字开头
3) java大小写敏感，命名变量时要注意
4) 不能使用java的关键字，如：int if for break
5) 中文可以作为变量名，但是不提倡使用
6) 建议用驼峰命名法
<span>⑤ 数据溢出</span>
1）如果是在给变量赋直接量时，直接量溢出，会报错
2）如果是在运算过程中溢出，那么不会报错
<span>⑥ Scanner的用法</span>
接收用户输入值 ,分三个步骤
第一步 在package的下引入包
  import java.util.Scanner;
第二步 在main方法中：声明对象scan
  Scanner scan = new Scanner(System.in); //scan是自己定义的
第三步 提醒输入
  System.out.println("请输入年龄");
  int age = scan.nextInt();
第四部 关闭输入
   scan.close;
  </pre>
          <h3>变量的作用范围</h3>
          <pre>
1）成员变量
   定义在类中，在整个类中都有效
   成员变量可以只声明就使用，因为成员变量会默认初始化String 为 null  int 为 0
2）局部变量
   定义在方法中，仅在方法中起作用
   局部变量使用前必须初始化
          </pre>
          <h3>Java的基本类型</h3>
          <pre>
java基本数据类型一共是8种基本类型
整数类型 byte(1个字节 占8位 范围-128~127) short int long
浮点类型 float(4个字节) double
字符类型 char
布尔类型 boolean
常用的是5种int、long、double、boolean、char
int     整型 4个字节，范围是-21个多亿到21个多亿
long    长整型，8个字节，很大很大，能用int就不用long
double  浮点型，8个字节，很大很大
boolean 布尔型，1个字节
char    字符型，2个字节
<span>① int类型</span>
int可以是 8进制  10进制  16进制
1）整数的直接量是int类型
所谓的整数直接量就是直接写出的整数，但是不能超范围，如果直接写出的整除超出了int的表达范围，将会出现编译错误
2）两个整数相除，结果还是整数，小数的部分会被舍弃，不会四舍五入，结果也是整数
看下面的例子:
<p class="pre-cmd">int percent=23/87*100;
System.out.println(percent);</p>
输出结果是0；因为先整除了结果是0，0乘以100还是0,这里就说明了java中求百分比不能先除后乘，要先乘100后触发运算
3）运算防止溢出
整数运算的溢出：两个整数进行运算，其结果可能会超过整数的范围而溢出
int a=2147483647;  //int的最大值
int b=-2147483648: //int的最小值
a=a+1;   //溢出，不会报错
b=b-1;   //溢出，不会报错
为了避免溢出就不能用int了，要用long了
PS区分
int a =一百亿 //直接量编译错误
int b=十亿*10  //溢出
<span>② long类型</span>
如果int整数范围不够，那就用long
1) 表示long的直接量，结尾需要加 L 或 l
long a=1000000000 ;//编译错误
long b=1000000000;
2) 运算若有可能溢出，建议在第1个数字后加L
long a=1000000000*2*10L
System.out.println(a);  //不是200亿，因为显示int运算，都已经溢出流量，之后再是long的运算
long b=1000000000L*3*10;
System.out.println(b); //是300亿
所以以后整数型运算时，要先考虑是int还是long
3) JDK提供System.currentTimeMillis()方法，返回了1970年1月1日零点到此时此刻所经历的毫秒数，其返回类型是long，该方法经常用于计时操作
long time=System.currentTimeMillis();
System.out.println(time);
<span>③浮点类型</span>
1) 浮点数就是小数，
包括float单精度浮点数和double双精度字节数，精度指的是他们所能保存到计算机中的有效数字，并是不是保留的小数点数
double类型的精确度是float类型的两倍
double大多数场合使用表示小数，
2）默认的浮点直接量为double，如果想表示float类型的直接量需要加f和F后缀;
通常写法 3.14、314.、0.5
float fl=10.25;  //写法错误，没有加f和F后缀;
3)在运算时有可能出现数据误差
double是无法准确显示一些二进制和十进制的运算的
double a=3,b=2.9;
System.out.println(a-b); //0.10000000009;显示结果就不是精确运算
所以精确运算的场合是不能用double和float的，尤其是跟钱有关的场景，要用<span>BigDecimal</span>
double和int运算，按照大类型转换，结果一定是小数类型
System.out.println(5/2.0);  //2.5
<span>④ boolean布尔型</span>
只能赋值为true和false，逻辑成立为true不成立为false
<span>⑤ char字符类型</span>
1）字符类型事实上是一个16位无符号整数，这个值对应的是字符的Unicode编码，范围0~65535,一个字符char对应一个码，表现形式是字符char，实质上是int码
   ASCII码"0"---48 "A"---65  "a"---97
   Java字符类型采用Unicode字符集编码
   char str1='中';
   char str2='\u4e2d';  //打印结果也是中
   System.out.println(str1);
   System.out.println(str2);
2）字符必须放在单引号中，只能有一个字符
  char c1='A';    //正确
  char c1=' ';    //正确
  char c1='';    //错误,必须有字符
  char c1='adsf'; //错误，必须一个字符
  但是有特殊情况，要区分开
  char c3='\u0041';  //正确
  char c2=65;        //正确0到65535之间，超出范围也会报错
  char c3='65';      //错误
3）char型变量赋值
  a）字符直接量
  b）整型直接量
  c）Unicode形式
  char c1='A';
  char c2=65;
  char c3='\u0041';
  System.out.println(c1);
  System.out.println(c2);
  System.out.println(c3);
  打印的都是A
4）特殊符号要使用 \ 反斜杠转译
 char c1='\'';  利用\加单引号 输出结果是’
 char c1='\\';  输出\
对于不方便输出的字符采用转义字符表示
转译字符      含义
 '\n'        表示换行符 new line
 '\r'        表示回车符 return
 '\\'        表示反斜杠（\）
 '\'         表示单引号（'）
 '\"'        表示双引号（"）</pre>
          <h3>基本类型间的转换</h3>
          <pre>
基本类型间的转换,不考虑Boolean的转换，因为boolean类型和其他基本类型不兼容
两种方式:自动类型转换、强制转换
<span>① 自动类型转换;从小类型到大类型</span>
类型从小到大排列  byte short int long float double
                             &#8593
                             char （计算机认为char是个int是个整数，char小于int）

int a=5;
long b=a;     //自动类型转换
int c=b;      //报错
int c=(int)b; //强制类型转换
long=5;       //此处没有加L，但是系统自动转换了，int转成long了
double=5      //同上，系统自动转换，int转换成double
<span>② 强制转换;从大类型到小类型</span>
强转的注意事项：
1）有可能出现溢出
例如 long转成int
long f=100亿;
int a=(int)f; //溢出了
2）有可能丢失精度
例如 double转成int
double a=51.23;
int b=(int)a; //输出51丢失精度
double pi=3.141592653589
float p=(float)pi //3.1415927丢失精度
3）byte short char之间转换需要强转
<span>③ 数字运算时自动转换</span>
多种基本类型参与的表达式运算中，运算结果会自动的向大类型转换
如：System.out.println(5/2.0); //2.5
<span>④ 直接赋值给byte，short，char</span>
1)整数直接量可以直接赋值给byte，short，char，但是不能超范围
byte b1 = 5 ; //按理说5是个int类型，但是直接量可以赋值但是不能超范围
byte b2=500 ; //500超了byte的范围
<span>⑤ 不同类型间的数据运算</span>

1) byte，short，char型数据参数运算时，系统会先一律转换成int再运算
byte b1= 5 ;
byte b2= 6 ;
byte b3=b1+b2; //编译错误，这里系统自动将  b1，b2强转成inte
byte b3=(byte)b1+b2;  // 仅是将b1强转，还是错误
byte b3=(byte)(b1+b2);  //正确

2）直接赋值运算，和变量运算的不同
char c1= 97;
char c2= 90;
char c3= c1+c2; //编译错误
char c4= 97+90;
原因
c3右边的运算过程是在 运行期完成的，不会优化结果，所以报错
c4右边的运算过程是在编译期完成的，编译器会进行优化，先转成把int类型强转成char类型

3）其他类型间运算，如果类型不同，那么先提升类型，后进行运算
System.out.println('2'+'2'); //输出100  '2'的码转换成int后为50再相加
System.out.println(2+'2'); //输出52

4）两个变量进行运算，如果类型不同，那么首先范围小的类转换成范围大的类型，再运算，运算的结果一定是和范围大的类型保存一致
int i=4;
long l=45L;
L=i+L
System.out.println(L)    //最后是long类型

long a1=1000*365*24*299792458L; =号右边的类型是long类型
long a2=1000*365*24*299792458;  =号右边的类型是int类型，但是此时溢出了，但是不会报错
System.out.println(a1);   输出 26261819320800000
System.out.println(a2);   输出 1271239424
          </pre>
          <h3>DecimalFormat优化double计算</h3>
          <pre>
java中涉及到金额的时候用double是不精确的所以
java中保留小数的做法用DecimalFormat(数字转换类)，对double变量优化
import java.text.DecimalFormat;
DecimalFormat df=new DecimalFormat("#0.00");
<span>如何定义格式</span>
# 0：代表一位数字，但是#在个位表示1-9；
#.00  输出  .13  ， .3423
##.00 输出  .13  ， .3423
#0.00 输出  0.13  ，1234.345   //常用写法
00.00 输出  00.13 ，02.35
<span>具体做法</span>
<p class="pre-cmd">import java.text.DecimalFormat;  //引入包
public static void main(String[] args) {
    double total=123.347;
    DecimalFormat df=new DecimalFormat("#0.00");  //四舍五入保留两位小数
    String totalStr=df.format(total);  //format后得到的数值是字符串类型的
    System.out.println(totalStr);
}</p>
 <span>注意</span>
偶尔会出现四舍五入的时候碰到5不会进位；</pre>
          <h3>运算符和表达式</h3>
          <pre>
<span>① 算数运算符</span>
1）* 乘法注意溢出
2）/ 除法注意结果是整数
3）% 取余，适用于整数，浮点，char
  5%2=1;
  8%2=0; 余数是0，我们说为是整除
  2%8=2;这里是要注意的，是小数除以大数，一定是余小数
  8.4567%2=0.4567; 这里是有个规律的，小数点前整除为0,小数点后保留即可
4） ++/--
单独使用时,在前在后无差别；
int a=5,b=5;
a++; //相当于 a=a+1;
++b; // 相当 b=b+1;
被使用时,在前在后又差别
a++的值为a
++a的值为a+1
<p class="pre-cmd">int a=5,b=5;
int c=a++;   //先赋值，后加加
int d=++b;   //先加加，后赋值
System.out.println(a); //6
System.out.println(b); //6
System.out.println(c); //5
System.out.println(d); //6</p>
或者
<p class="pre-cmd">int a=5,b=5;
System.out.println(a++); //5
System.out.println(a);   //6
System.out.println(++b); //6
System.out.println(b);   //6</p>
结论：只要++ 原值都加一，但是被赋值的变量可能是原值，也可能原值基础上加一，主要看++是在变量前还是变量后；
<span>② 关系运算符</span>
 > 大于  ，  < 小于
>= 大于等于 ， <= 小于等于
== de等于 ， ！=不等于
<span>③ 逻辑运算符</span>
&& 逻辑与  并且的关系
|| 逻辑或  或者
!  逻辑非  取反
int i=100，j=200
boolean b1=(i>j)&&(i++>100);  false;
boolean b1=(i>j)&&(++i>100);  true;
<span>④ 赋值、字符串连接</span>
1）利用=赋值
int a,b,c;
a=b=c=100;
2）扩展赋值运算符
 += -= *= /=  %=
a%= 2 // 相当于 a=a%2;
3）字符串连接 就是用 + 拼接
如果两边都是数字，则是家法运算
如果两边出现字符串，则做字符串拼接
""双引号里的内容就叫字符串，别跟char字符类型混淆
数字+字符串类型，最后结果变成字符串类型
System.out.println(10+20+""+30) //"3030"
System.out.println(10+20+30+"") //60"
4）三目运算符
语法 Boolean？数1：数2
为true  是数1
为false 是数2
三目运算符的嵌套，及在三目套三目的判断
Boolean？数1：(Boolean？数2：数3 )  //不推荐多层嵌套，一次嵌套就够了
5）闰年的判断公式
a.能被4整除，并且不能被100整除
b.能被400整除
if((year%4==0&&year%100!=0)||(year%400==0)){}</pre>
          <h3>分支结构</h3>
          <pre>
<span>① 常用分支结构</span>
if 结构  1条路
if...else结构 2条路
if...else if 结构 多条路
switch...case
<p class="pre-cmd">   int num=2;  // byte short int char 类型都行，其他不行
    switch(num){   //switch(整型表达式或整型变量)
    case 1:  //相当于if(num==1)
      System.out.println("num==1");
      break ;  //逻辑执行后跳出，否则还会执行后续的case判断，这个很容易忘了加
    case 2:
      System.out.println("num==2");
      break ;
    case 3:
      System.out.println("num==3");
      break ;
    default:    //条件都不满足，走default，不用加break
      System.out.println("switch不匹配");
    }</p>
优点 ：效率高、结构清晰
缺点： 只能对int,char,byte,String ,enum枚举操作、小数不行，只能判断等于，大于小于，与或非不可用
能用switch...case实现的都可以用if...els if 来实现，反之则不行，要考虑场景
<span>② 注意事项</span>
有一个编写的bug
int a,b=5;
if(b>2){
  a=6;
}
System.out.println(a);    //这时候a是会报编译错误的，因为编译阶段eclipse是不会走你的if逻辑
System.out.println(b);    //但是b则不会
但时按照下面的写法
int a,b=5;
if(b>2){
  a=6;
}else{
  a=6;
}
System.out.println(a);    //编译正确
System.out.println(b);    //编译正确
因为走了一个完整的if...else的逻辑
eclipse挺傻的，他不会判断你的逻辑，他只认设定好的语法语句</pre>

          <h3>循环</h3>
          <pre>
循环：符合条件，则多次反复的执行一段相同或相似的代码
<span>① 循环三要素：</span>
  1）循环变量的初始化
  2）循环的条件（以循环变量为基础）
  3）循环变量发生改变（向着循环的结束改变，否则就是死循环）
循环变量：在整个循环过程中反复改变的那个值
<span>② 循环结构：</span>
一共三种：while 、do...while 、for
循环问题的使用场景
当....的时候用while
直到....的时候用do...while（要素一与要素三相同时）
循环固定次数的时候用for
1）while循环语句
<p class="pre-cmd">while（boolean表达式）{  //Boolean表达式结构为真时执行语句块，否则退出；
       语句块，并改变boolean表达式的变量；
       if(true){
        break ; 跳出while循环
       }
}</p>
注意：若果循环条件一直为true，否则将成为‘死循环’，一般while会搭配break使用，算是在while里加了一个第二次判断，第一次判断是while；
2）do...while循环语句
<p class="pre-cmd">do{
    语句块
 }while(boolean表达式)</p>
do...while是先执行后判断，至少走一次；while是先判断后执行，有可能一次都不执行；例如下面的例子
<p class="pre-cmd">int pwd
do{
  System.out.println("请输入密码");
  pwd=scan.nextInt();
}while(123!=pwd)</p>
do...while与while的区别就是，一开始不管Boolean表达式是对是错都先执行一次，之后再走Boolean表达式
3）for:固定次数循环，引用率最高
for(int i=0;i<5;i++){  //声明变量 是用int不是用var了，习惯不一样了
    语句块(循环体)
}
<span>③ for语句三个表达式特殊用法</span>
1）表达式1位置内容为空时
int sum=10;
int i=0;
for(;i<=10;i++){
    sum+=i;
}
就算表达式1的位置为空也要添加 ; 分号
2) 三个表达式都为空时，就成为了死循环，但是 ; 分号不能丢
for( ; ; ){

}
3) 表达式1位置和3位置内容的多样化
for(int i=1;j=6;i<=6;i+=2,j-=2){
  System.out.println("i,j="+i+","+j)
}
输出结果是
i,j=1,6
i,j=3,4
i,j=5,2
for语句的三个表达式1和表达式3可以使用逗号书写多个表达式
<span>④ 循环中使用break语句</span>
break可用于循环语句或switch语句中；
break用于循环,并且是跳出循环,只是跳出当前的循环语句，只跳一层循环语句,可使程序终止循环后面执行循环后面的语句，常常与条件语句一起使用
<p class="pre-cmd">int sum=0;
for(int i=1;i<=100;i++){
  if(sum>=4000){
    break;
  }
  sum+=i;
}</p>
<span>⑤ 循环中使用continue</span>
continue只能用于循环中，跳出循环体中剩余的语句，从而进入下一次循环，而不是像break一样跳出循环
continue有点鸡肋，因为他可以被if...else去替代,逻辑上是差不多的
<span>⑤ 循环中使用return</span>
循环中使用 return ; 跳出当前方法,结束方法
<span>⑥ 嵌套式循环</span>
\t 水平制表符 占8位
System.out.println();  //换行
嵌套书写9*9乘法表
<p class="pre-cmd">
 for(int num=1;num<=9;num++){
     for(int i=1;i<=num;i++){
        System.out.println(num+"*"+i+"="+(num*i)+"\t")
     }
  System.out.println();  //换行
  }</p>
1)一般是多行多列使用嵌套循环,外层是控制行，内层是控制列
2）执行规则：外层循环走一次时，内层循环走所有次
3）嵌套层次是越少越好，嵌套过多逻辑太重，如果需求嵌套超过三层以上，说明设计逻辑有错误
4）break只能跳出一层，如果某种条件跳出多层循环，一定是逻辑出问题
<span>⑦ 生成随机数</span>
1) Math.random()
例如 (int)(Math.random()*100+1);
0=< 随机数 < 1
1=< 随机数*1000+1 <10001
记得用int转换成整数
2） random类
Random random=new Random();
int m=random.nextInt(1000);  生成大于0的正整数
System.out.println(m);
 </pre>

          <h3>数组</h3>
          <pre>
数组是相同类型的数据集合,是一组数据类型（引用类型）
通过 Arrays.toString(数组名) 将数组转换成字符串直接打印输出
<span>① 数组的定义</span>
3）数组的定义
  int[] arr=new int [10];
  int a;  //声明整型变量a
  int[] a; //声明整型数量变量a,只能装整数
  double[] c ; //声明浮点类型变量c,
  int[] a=5; //错误因为5是int基本类型 int[] a 是整数类型数组，是基本类型
  int[] a=new int[5];  //声明整型数组变量a,能装5个数,并且每个元素都要是整数类型，只要new int()了默认值为0
  double[] b=new double[5];
  boolean[] c=new boolean[5];  //默认值是false
  String [] str =new String [2]  //默认是null
<span>数组的初始化</span>
  动态初始化
  int[] arr=new int[4];  //默认4个0；
  静态初始化2种
  int[] arr={1，4，5，9};  //1 4 5 9
  int[] arr=new int[]{1，4，5，9}; //1 4 5 9 ，int[]中不能写个数
  注意：
  int[] arr;
  arr={1，4，5，9};  //编译错误，此方法只能声明的同时赋值，如果分开写报错
  arr=new int[]{1，4，5，9} //正确，推荐写法
<span> 数组的访问：</span>
1) 通过(数组名.length)来获取数组的长度
  int[] arr=new int[4];
  System.out.println(arr.length);
2) 通过下标索引值修改元素
  int[] arr=new int[]{2,4,6,7};
  arr[0] 代表第一个元素
  arr[1]=10; //给第二个元素赋值，但是要注意赋值类型，要跟数组元素类型一致
  arr[10]=100; //数组下标越界异常
<span>数组的遍历：</span>
1) for循环利用下标访问
  int[] arr=new int[]{2,4,6,7};
  for(int i=0;i<=arr.length;i++){
  }
  OR
    for(int i=arr.length ;i>=0;i--){
  }
2）forEach访问
  foreach格式: for(数据类型 遍历到的元素 ：目标数组){ }
  int[] ary=new int[]{2,4,6,7};
  for(int i:ary){
     System.out.println(i);
     输出的i就是遍历到的元素
   }
3）区别
for循环需要知道数组的长度；
foreach不需要知道数组的长度，但需要知道数组的类型
<span> 求数组元素的最大值：</span>
<p class="pre-cmd">int[] ary=new int[10];
  for(int i=0;i< arr.length;i++){
    ary[i]=(int)(Math.random()*100); //注意这里的int，是给整型数组赋值
  }
  System.ou.println(ary);
  int max=arr[0];
  for(int j=1;j< arr.length;j++){
     if(max< arr[j]){
       max=arr[j];
     }
  }</p>

<span> 数组的复制</span>
1)System.arraycopy(src,srcPos,dest,destPos,length)
src      表示为原数组
srcPos    原数组的起始下标
dest      表示目标数组
destPos   表示目标数组复制起始下标
length    表示复制的个数
System.arraycopy()数组的复制不是很方便，因为要提前声明两个数组再复制，但是功能上比较全面，复制方式灵活
案例
int[] ary1=new int[]{10,20,30,40,50};
int[] ary2=new int[6];
System.arraycopy(ary1, 1, ary2, 1, 4);
//输出结果  0	20	30	40	50	0
2)Arrays.copyOf()
java.util.Arrays类的copyOf方法实现数组的复制
类型 [] ArrayName=Arrays.copyOf(原数组名称，newLength截取长度)
特点:生成的新数组是元数组的副本
newLength小于原数组长度，则进行截取
newLength大于原数组长度，则用0或null进行填充
所以产生的新数组可以大于原数组的长度
int[] a={10,20,30,40,50}
int[] b=Arrays.copyOf(a,6);
b数组元素为：10 20 30 40 50 0
<p class="pre-cmd">package ary;
import java.util.Arrays;
public class ArrayDemo{
    public static void main(String[] args){
        int[] a={10,20,30,40,50}
        int[] b=Arrays.copyOf(a,6);
    }
}</p>
Arrays.copyOf()可以实现扩容,只是现象上的扩容
数组的长度在创建后是不可改变的，所谓扩容是指创建一个更大的新数组并将原有数组的内容复制到其中
int[] a={1,2,3,4,5}
a=Arrays.copyOf(a,a.length+1); //扩容
a=Arrays.copyOf(a,a.length-1); //缩容

<span>数组的排序</span>
1）Arrays.sort(数组名)
 Arrays.sort()是最快的排序，但是只提供升序排序
long a=System.currentTimeMillis();
Arrays.sort(arr);
long b=System.currentTimeMillis();
System.out.println(b-a); //Arrays.sort(arr);测试排序所消耗的毫秒数
int[] arr={34,23,65,61,85}
Arrays.sort(arr); //输出23 34 61 65 85
2）冒泡排序
   规则：元素两两比较，大的往后排，比较结束，最大值出现最后位置
   例如5个数冒4轮，8个数冒7轮
   每一轮都是从第一个元素开始冒，每一次都是和它的下一个元素比
   冒出来的元素就不用再进行比较了
<p class="pre-cmd">int[] arr={12,36,5,78,32}
for(var a=0;a< arr.length-1;i++){      //控制轮
   for(var b=0;b< arr.length-1-i;b++){ //控制次数
       if(arr[b]>arr[b+1]){   //和它的下一个元素比  > 是升序 < 是降序
           int flag=arr[b];
           arr[b]=arr[b+1];
           arr[b+1]=arr[b];;
        }
   }
}</p>
 3） 选择排序
从第一个元素开始，和后面每个元素依次比较，小的往前放，第一次比较完成，最小值出现在第一位
<p class="pre-cmd">int[] ary={23,25,58,45,10,5,68}
  for(int i=0;i< ary.length-1;i++){        //比较到倒数第二个元素即可
        for(int j=i+1;j< ary.length;j++){
           if(ary[i]>ary[j]){
               int tmp=0;
               tmp=ary[i];
               ary[i]=ary[j];
               ary[j]=ary[i];
            }
        }
   }</p>
<span>多维数组</span>
 java中并没有真正的多维数组，都是一维数组，多维数组只是数组中的数组
下面多维数组以二维数组为例
int [][] ary={ {1,2},{23,12}};
int [][] ary=new int[4][3];
多维数组的数据类型必须保持一致
1）如何访问二维数组
ary[0][1] 一维数组第一个元素下，二维数组的第二个元素



          </pre>
          <h3>方法</h3>
 <pre>1)封装一段特定的业务逻辑
2)尽可能独立，一个方法只干一件事
3)方法可以反复的使用
4)利用方法可以减少代码的复用，方便团队开发
5）方法之间是并列关系
<span>方法的定义</span>
方法的五要素 : 修饰词  返回类型  方法名  参数列表  方法体
public static int  sum  (int num1, int num2){
}
1）修饰词
public static 是修饰词  static还是方法体
2）返回类型
返回类型可以是 void 基本类型 引用类型
System.out.println("123");  //没有返回类型
System.arraycopy(a1,0,a2,0,4);     //没有返回类型
Arrays.sort(arr)         //没有返回值
int str=scan.nextint();   //有返回值
int b=Arrays.copyOf(arr);   //有返回值
方法可以有返回值也可以没有返回值
   没有返回值的---返回类型写成void
   有返回值的---返回值类型写成具体的数据类型
   若操作方法后，还需要用到方法中的某个数据----有返回值
   若操作方法后，不需用到方法中的数据---无返回值的
3）方法名
sum 是方法名，方法名要用驼峰命名法
4）参数列表
 (int num1, int num2) 括号里的是参数列表，可以有参可以无参，多个参数用逗号隔开
5）方法体
{} 里的逻辑程序就是方法体
<span>方法的调用</span>
 静态方法不可以直接调用非静态方法，创建对象后就可调用，或者将非静态转换成静态方法
 非static方法可以直接调用非static方法，可以直接调用静态方法
<p class="pre-cmd">package method;
public class methodDemo{
public static void main(String[] args){
   say();
   sayHi("李明")  //有参必须传参，类型必须匹配
}
public static void say(){
  System.out.println("just hellow");
}
public static void sayHi(String name){
  System.out.println("hellow:"+name);
}
}</p>
<span>方法中参数</span>
1）参数的声明周期
方法的参数可以理解为局部变量，当方法开始执行的时候局部变量开辟空间，方法的结束局部变量在内存中就会被销毁
2) 可变参数
  可变参数可以接受不同数量的某个类型的参数
  public void demo  (int...is){}  // int...is代表可以接受n个int类型参数
  注意：
  a.参数列表可以有多个参数，但是可变参数一定放在最后
  b.参数列表中只能有一个可变参数
  c.可变参数底层才用的是数组，通过Arrays.toString();打印，或者for循环遍历
  d. int...is  可以 is.length打印参数长度
  e.可变参数的实参可以传一个同类型的数组
<span>方法的返回值</span>
1）方法只要有返回值就要有return的存在，也就是说，只要返回类型不是void就要有return
2）且return后跟返回值时，必须返回对应类型的返回值
3）return也有结束方法执行的作用
4）如果有返回值，调用方法必须满足  类型 变量名=方法   (重点)
return的用法
return 值;
1）结束方法的执行
2）返回结果给调用方
return ;
1)结束方法的执行，类似于循环中的break
</pre>
          <h3>java中常用算法</h3>
          <pre>
<span>1 计数器概念</span>
  ary是0-9之间的数字，求每个数字出现的次数
  int [] ary={};
  int count=new int[10];
  for(int i:ary){
       count[i]++;
   }
   for(int i;i< count.length;i++){
     System.out.println("i出现了："+count[i]+"次");
   }
<span> 交换的概念</span>
   让数组中的0在前，1在后排序
   int[] arr={0,1,0,1,0,1,0,1,0}
  for(var i=0;i< arr.length;i++){
       if(arr[i]>arr[i+1]){   //和它的下一个元素比  > 是升序 < 是降序
           int flag=arr[i];
           arr[i]=arr[i+1];
           arr[i+1]=arr[i];
        }
   }

<span>递归</span>
一个方法在其内部调用自己身
要使用递归，必须有结束点，避免死循环，因为递归很耗内存
<span>java中用数字表示某种状态很常见</span>
	 protected static final int LIFE=0;
	 protected static final int DEAD =1;
	 protected static final int REMOVE=2;

          </pre>
          <h3>猜字符游戏</h3>
          <pre>
猜字游戏规则
1）获取随机数组chs，输出数组的要求是5个不一样的字符
2）输出提示 猜吧！ 接受用户输入字符数组input
3）对比chs与input
  3.1）若猜对，则结束并计算得分， 猜对的条件是位置对，字符对
  3.2）若未猜对，则先提示，在重新执行第2步
<p class="pre-cmd">
package game;
import java.util.Arrays;
import java.util.Scanner;
public class guessString {
public static void main(String[] args) {
  Scanner scan=new Scanner(System.in);
  System.out.println("猜数游戏开始");
  char[] chs= generate(); //随机生成的字符
  System.out.println("随机生成的字符是:"+Arrays.toString(chs));
  int  score=100;
  while(true){  //自循环
     System.out.println("请输入五位字符");
     String str=scan.next().toUpperCase;   //java Scanner 输入没有提供输入数组的格式 ，但是能接受是个字符串,并将用户输入转换成大写字母
     if(str.equals("EXIT")){
       System.out.println("游戏退出");
       break;
     }
     char[] input =str.toCharArray();  //将用户输入字符串转换数组
     int[] result=check(chs,input);
     if(result[0]==chs.length){  //当字符位置都对上了,那就说明字符肯定都是存在的
         System.out.println("字符，位置你都猜对了，游戏结束,满分100，你的分数为： "+score);
         break;
      }else{
         System.out.println("没有猜对哦!位置对了: "+result[0]+"个  字符对了： "+result[1]+"个");
         score--;
    }
  }
}
  //生成随机字符数组
  public static char[] generate(){
    char[] chs= new char[5];  //先定义随机生成字符的数组
    char[] letter={'A','B','C','D','E','F','G','G','I','J','K','P','M','V','N','M','X','Z','Q','W'}; //随机字符的取值范围
    boolean[] falg=new boolean[letter.length];  //new boolean 的默认初始值是 false  这个充当开关数组
    for(int i=0;i< chs.length;i++){
       int num;
       do{
         num=(int)(Math.random()*letter.length);  //这个do...while语句是在跟  falg[num]=true; 这个开关数组配合使用
       }while(falg[num]);
        chs[i]=letter[num];
        falg[num]=true;
    };
    return chs;
  }
  //对比函数，生成的随机数与用户输入字符进行对比
  public static int[] check (char[] chs,char[] input){  //char[] chs为随机生成，char[] input是用户输入
    int[] resulte=new int[2]; //resulte存储对比结果   resulte[0] 位置对  resulte[1] 字符对
    for(int i=0;i< chs.length;i++){
      for(int j=0;j< chs.length;j++){
        if(chs[i]==input[j]){  //说明用户输入的字符在随机生成的字符数组中存在
          if(i==j){   //说明用户输入的字符位置跟随机生成的字符对，这个位置的逻辑要好好思考，这个逻辑不太显著
            resulte[0]++;
          }
            resulte[1]++;
          }
        }
    }
    return  resulte;
  }
}</p>
这个猜数游戏虽然是基础入户门，但是里面涉及了好多的经典逻辑判断
1) for循环的嵌套判断两个数组内是否存在相同元素
2）(int)(Math.random()*letter.length); 随机生成字符数组这个就相当于随机生成验证码
3) 开关数组的概念，尤其是do...while语句是在跟这个开关数组的配合
4）String s=scan.next();  //ABC  char[] input =s.toCharArray(); //将字符串转换数组
java Scanner 输入没有提供输入数组的格式 ，但是能接受个字符串
5）String str=scan.next().toUpperCase; //将用户接受的小写字母转换成大写
String str=scan.next().toLowerCase;
6）if(str=="EXIT"){} 错误
基本数据类型判断相等用 ==
String字符串不是基本类型，判断字符串相等不能用 == 要用equals
if(str.equals("EXIT")){}</pre>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: '',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name,
         catalogue:[]
      }
    },
    mounted(){
      this.$nextTick(function(){
        this.createCatalogue();
      })
    },
    computed:{

    },
    methods: {
      jump (index) {
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

        function smoothDown () {
          if (total>distance ) {
            distance += step;
            document.body.scrollTop = distance;
            document.documentElement.scrollTop = distance;
            setTimeout(smoothDown, 10)
          } else {
            document.body.scrollTop = total;
            document.documentElement.scrollTop = total
          }
        }
        function smoothUp () {
          if ( total<distance) {
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
      createCatalogue(){
        let object = document.getElementsByTagName('h3');
        var flag=[];
        for(var i=0;i<object.length;i++){
          object[i].innerHTML=((i+1)+". "+object[i].innerHTML);
          flag.push({name:object[i].innerHTML})
        }
        this.catalogue=flag;
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
