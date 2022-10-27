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
          <h3>API</h3>
          <pre>
包下包含类
language包Java语言包，Java的核心API，相当于是Java语法，lang包是自动导入
<span>文档注释</span>
1）格式
以/** 开头  以*/结尾
2）作用
   通过javadoc视图查看
   将整个项目的api文档导出
3）用法
放到类前/** 回车自动生成 @后显示一些作者信息，或描述类@param @return @version @author @date @see （参考文件） @since JDK1.0
window- showview -javadoc 查看本类中详细解释信息
Export-java-javadoc-next-bowrse存放目录-finish-yes to all  生成一个index.html API描述
4）解决：
生成api文档出现的编码GBK的不可映射字符的问题
打开myeclipse，project -> Generate javadoc ->next ->next -> Configure Javadoc arguments.
在Extra Javadoc options(path names with white spaces must be enclosed in quotes)一栏填入如下代码：
<em>-encoding utf-8 -charset utf-8   //重点</em>
这次就可以生成api文档了
          </pre>
          <h3>String字符串</h3>
          <pre>
String创建后内容，长度不可变，是不可变的对象，本质是字符数组
String被final修饰不可被继承，才用Unicode
<span>① 创建方式</span>
1）new关键字
String str =new String();  //无参-空字符串
String str =new String('123'); //有参-此对象的值
存贮在堆中
2) 直接量
String str ="hello";   //创建了String对象  ""内容成字符串直接量
直接量赋值存储在字符串常量池中为了优化内存，直接量赋值时，会先去常量池里查找是否存在，如果存在则复用此地址的值，不存在则创建地址
<span>② 字符串</span>
str1.equals(str2)    equals()比较的是字符串内容  == 比较的是对象地址
1）== 如果边放的是数值类型，比较的是数值类型的值,如果方的是引用类型，此时比较的是两个引用是否指向同一个对象
<p class="pre-cmd">String str1 ="hello";
String str2 ="hello";
System.out.println(str1==str2);   // true</p>
2）字符串的拼接，如果是两个字符串直接量进行拼接，那么在编译期进行优化，将拼接的结果直接赋个变量
<p class="pre-cmd">String str1 ="helloworld";
String str2 ="hello"+"world";      //保存在常量池
System.out.println(str1==str2);    // true   编译期优化</p>
3）字符串编译期优化是针对+两边是字符串直接量的情况，不是引用变量，因为在编译期不知道你引用变量的内容
<p class="pre-cmd">String str1 ="hello";
String str2 ="world";
String str3 ="helloworld";
String str4 =str1+str2;           //保存在对
System.out.println(str3==str4);   // false   运行期引用</p>
4）一个在堆，一个在常量池间的对比
<p class="pre-cmd">String str1 =new String("abc");
String str2 ="abc";
System.out.println(str1==str2);   //false   一个在堆，一个在常量池</p>
<span>③ String方法</span>
因为String创建后内容，长度不可变，是不可变的对象，所以下面都是查找识别功能，没有怎删改的功能呢，最多就一个截取的功能
<p class="pre-cmd">length()  返回字符串个数，空格算一个字符
indexOf(str,index) 返回指定字符在字符串中第一次出现的下标,找不到返回-1
str 指定字符串  index从此下标开始向后找
lastIndexOf()  从末尾开始找，及最后一次出现位置的下标
substring(begin,end);  无end参数从指定下标开始截取到末尾；有end参数截取到到指定位置结束，且截取的范围包头不包尾
trim()   去除前后空白字符
charAt()  返回指定下标的字符，是个char值
startsWith();   测试此字符串是否以指定前缀开始 返回Boolean值
endsWith();     测试此字符串是否以指定后缀结尾
toUpperCase();  全部英文转大写
toLowerCase();  全转小写
  valueOf();      静态方法，返回指定类型的字符串，我理解为将其他类型变量转换成字符串类型</p>
<p class="pre-cmd">boolean b=true;
PersonObject obj=new PersonObject();
String str=String.valueOf(b);
  String str=String.valueOf(PersonObject);  //显示对象创建地址</p>
 <span>练习</span>
 1） 统计一个子串在字符串中can出现的次数
<p class="pre-cmd"> String str="you can you up,I can i do, no can no say anything";
 int count=0;
 int fromIndex=0;
 int index=0;
 String subStr="can";
 while(index!=-1){
     index=str.indexOf(subStr,fromIndex);
      if(index!=-1){
          count++;
          fromIndex= index+ subStr.length();
      }
 }
  System.out.println(count);</p>
2） 截取域名
<p class="pre-cmd">String str="wwww.baidu.com";
int beginIndex=str.indexOf(".");
int endIndex=str.indexOf(".",beginIndex);
  String name=str.substring(indexOf+1,end);</p>
3） 回文(对称字符串)判断
<p class="pre-cmd">String str1= 上海自来水来自海上  9   可奇可偶
String str2= 上海自来来自海上   8
public void check(String dest){
      for(int i=0;i< dest.length()/2;i++){
          char c1=dest.chart(i);
          char c2=dest.chart(dest.length()-1-i);
            if(){
              System.out.println("不是回文");
               return ;  //方法终结
          }
      }
       System.out.println("不是回文");
  }</p>
</pre>
          <h3> StringBuilder字符拼接</h3>
          <pre>
StringBuilder出现的目的就是因为String对象不可变，不可进行增删改操作
StringBuilder提供一个可变的字符数组，做出的修改都是在原数值上操作的，防止字符串拼接创建一个新对象过度消耗内存
StringBuilder(): 无参构造，默认空字符串，初始容量为16个字符
StringBuilder(String str): 有参构造，创建一个字符串生成器，初始值str
<span>① 常用方法</span>
<p class="pre-cmd">.append(String str);    用于字符拼接
.toString();    将StringBuilder实例的值转换为String类型
.insert(int offset, String str)  在offset指定位置之前插入str字符(串)
.delete(int startIndex,int endIndex)   删除起始位置（含）到结尾位置（不含）之间的字符串
.replace(int start, int end, String str)  用给定的字符串替换掉重指定位置开始，到指定位置结束期间的字符串，两个边界值包头不包尾
.reverse();  将字符串逆序排列</p>
<span>② 案例测试</span>
//在str的基础上拼接新的内容
<p class="pre-cmd">String str="hello";
StringBuilder builder=new StringBuilder(str);
System.out.println(builder); //"hello"
StringBuilder builder2= builder.append("world");
System.out.println(builder2==builder); //true
System.out.println(builder);          //helloworld
String str1=builder.append("world").append("-test-").append("append").toString();
System.out.println(str1);
System.out.println(builder);
System.out.println(str1.getClass());
System.out.println(builder.getClass());</p>
<span>③ 与StringBuffer的不同</span>
StringBuilder和StringBuffer作用一样，方法也一样，api也一样
StringBuilder是线程安全的，StringBuffer是线程不安全的</pre>
          <h3>日期操作</h3>
          <pre>
java.util包中，别导错包
<span>① 日期类方法</span>
Date()  创建一个date对象，此对象表示当前时间  Fri Dec 01 12:03:05  CST  2018
Date(long ms) 得到ms毫秒数所代表的的时间
getTime();    long类型,返回自1970-1-1 00:00:00 GMT到现在的毫秒数
setTime(long ms)  让date对象指向ms毫秒表示具体的时间,，等同于 Date(long ms);
System.currentTimeMillis();  与 date.getTime() 效果一样，都是得到long类型毫秒数
<span>② 案例测试</span>
<p class="pre-cmd">Date date=new Date();
long currentMill=date.getTime();
long tomorrow=currentMill+24*60*60*1000;
Date toDate=new Date(tomorrow);   //得到明天的日期
System.out.println(date);
System.out.println(toDate);
System.out.println(System.currentTimeMillis());
date.setTime(currentMill-24*60*60*1000);
System.out.println(date);</p>
          </pre>
          <h3>SimpleDateFormat类</h3>
          <pre>
java.text.SimpleDateFormat
日期转换类，字符串日期和日期对象之间进行转换,
最大的作用就是format(Date对象)输出字符串类型的dd/MM/yyyy等格式
SimpleDateFormat对象一旦创建，此对象只能做预定义格式的转换，如果格式错误运行期报异常
<span>① 创建对象</span>
SimpleDateFormat sdf=new SimpleDateFormat("字符串日期格式");
SimpleDateFormat sdf=new SimpleDateFormat("字符串日期格式");
<span>② 日期格式关键字符</span>
只有M表示月是大写，H表示24小时制,h表示12小时制  E是星期  a是上下午
"yyyy-MM-dd HH:mm:ss"  2017-12-09 09:11:11
"dd/MM/yyyy"
"yy-MM-d H:m"
"yyyy年MM月dd日"
<span>③ SimpleDateFormat实例方法</span>
1）.format()
Date   --> String
format(Date)
2）.parse()
String --> Date
.parse(String)
此时转换时防止抛异常，用throw
<p class="pre-cmd">SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
Date date1=new Date();
String str=sdf.format(date1);
String str1="2018-09-16 13:55:23";
Date date1=sdf.parse(str1)   //这里要做throw抛出异常的处理
System.out.println(str1);
System.out.println(date1);</p></pre>
          <h3>Calendar类</h3>
          <pre>
Calendar类是Java中日历类
<span>① 获取日历的实现类</span>
//创建子类对象
Calendar calendar = new GregorianCalendar();
//调用静态方法
Calendar calendar =Calendar.getInstance();  //常用方式
<span>② get()获得年份、月份、小时等信息</span>
get(Calendar.Month) 这样的方法 0表示一月，1表示二月
get(Calendar.DAY_OF_MONTH)获得这个月的第几天
get(Calendar.DAY_OF_WEEK)获得这个星期的第几天
get(Calendar.DAY_OF_YEAR)获得这个年的第几天
getTimeMillis()获得当前时间的毫秒表示
/**
 * 获取当前时间的年  月   日   星期几
 *  get (int Field)
 *  YEAR   MONTH  DATE  DAY_OF_WEEK
 *  MONTH月份从0开始    DAY_OF_WEEK一星期中某一天，1位星期日
 */
int year= calendar.get(Calendar.YEAR);
int moth= calendar.get(Calendar.MONTH)+1;
int date= calendar.get(Calendar.DATE);
int week= calendar.get(Calendar.DAY_OF_WEEK);
System.out.println(year);
System.out.println(moth);
System.out.println(date);
System.out.println(week);
<span>③ getTime()</span>
Calendar转化为Date
Calendar cal=Calendar.getInstance();
Date date=cal.getTime();
<span>④ setTime(date)</span>
Date转化为Calendar
Date date=new Date();
Calendar cal=Calendar.getInstance();
cal.setTime(date);
<span>⑤ set(int field, int value)</span>
set(int field, int value) 设置给定值的日历字段
set()方法设置后并没有马上去计算，只有调用get方法才重计算，所以set()后一定紧跟get方法，否则set多了容易被后边的代码逻辑覆盖带
Calendar cal=Calendar.getInstance();
cal.set(Calendar.YEAR, 2006);
cal.set(Calendar.WEEK_OF_YEAR, 1);
cal.set(Calendar.DAY_OF_WEEK, Calendar.MONDAY);
System.out.println(cal.getTime());
Mon Jan 02 23:15:28 CST 2006      23:15:28 是我运行时的时间
<span>⑥ add(int field, int amount)</span>
根据日历的规则，为给定的日历字段添加或减去指定的时间量,amount可正可负
不调取get方法就会计算，这个set()与add()的区别
Calendar cal=Calendar.getInstance();
cal.add(Calendar.DATE, 4);  //造成日期向后推4天
Date date=cal.getTime();
System.out.println(date);
<span>⑦ 日历字段的最低、最大值</span>
getActualMaximum(int field)给定此 Calendar 的时间值，返回指定日历字段可能拥有的最大值。
getActualMinimum(int field)给定此 Calendar 的时间值，返回指定日历字段可能拥有的最小值
计算某一月份的最大天数
Calendar time=Calendar.getInstance();
time.set(Calendar.YEAR,2018);
time.set(Calendar.MONTH,1); //注意,Calendar对象默认一月为0
int day=time.getActualMaximum(Calendar.DAY_OF_MONTH);//本月份的天数
System.out.println(day);
<span>⑧ 总结</span>
如果想获得指定某段时间日期的天数，星期数，有多少天
都是先add(),set()设置之后
在调用get...()取值
http://outofmemory.cn/code-snippet/979/Java-Calendar-Date-usage-summary</pre>
          <h3>Object</h3>
          <pre>
Java所有类的顶层父类
一个类，如果不继承其他类，默认继承Object
class A /*extends Object*/{}
<span>① toString()</span>
在没有重写时Object中toString()的默认实现："类型@地址"也就是"day0903.Point@8afc92"
java建议在子类中，重写toString()方法，返回自定义格式字符串
例如System.out.println(object);默认调用了重写的toString()方向，返回object[arg=null]
重写后的toString()主要的作用是调试工具
<span>② equals(Object obj)</span>
equals(Object obj)作用是当前对象与参数对象 obj 比较是否相等,返回类型Boolean值
Object中没有重写默认是比较内存地址是否相等，并不比较值
在子类中重写equals()方法，则用来比较两个对象的属性数据是否相等，可通过eclipse快速重写
<span>③ Object类中== 和equals比较</span>
equals的作用等同于==
== 如果两边是基本数据的数值类型，则直接进行比较
如果两边是引用类型，此时比较的两个引用是否执行同一对象，此时和object中的equals作用相同
<span>④ String类中== 和equals比较</span>
String类中的equals()方法类似于重写了equals()方法
String str1 = new String("java");
String str2 = new String("java");
String str3 = "java";
String str4 = "java";
System.out.println(str1 == str2);       //false
System.out.println(str1.equals(str2));  //true
System.out.println(str1 == str3);       //false
System.out.println(str1.equals(str3));  //true
System.out.println(str3 == str4);       //true
对于字符串变量来说，使用“==”和“equals()”方法比较字符串时，其比较方法不同。
“==”比较两个变量本身的值，即两个对象在内存中的首地址。
“equals()”比较字符串中所包含的内容是否相同。
https://blog.csdn.net/andyzhaojianhui/article/details/75176807 具体说明案例</pre>
          <h3>包装类wrapper</h3>
          <pre>
<span>包装类的抽象父类</span>
数字包装类的抽象父类
Java会为每一个基础数据类型都提供一个相应包装类的目的，在于将Java的所有东西都抽象成对象，可以更方便的控制和使用。这就是面向对象！
然后对于包装类，主要作用是：
1.作为和基本数据类型对应的类类型存在，方便涉及到对象的操作。
2.包含每种基本数据类型的相关属性如最大值、最小值等，以及相关的操作方法。
<span>① 8中基本类型与包装类对应关系</span>
<p class="pre-cmd">基本数值  ----> 包装类对象
boolean           Boolean
byte              Byte
short             Short
int               Integer
long              Long
float             Float
double            Double
char              Char
Byte              Bute
数字              Number数值的父类</p>
<span>② 实例方法</span>
<p class="pre-cmd">Integer.MAX_VALUE
Integer.MIN_VALUE
byteValue()
shortValue()
intValue()
longValue()
floatValue()
doubleValue()</p>
由上述可看书个基本行是有相同逻辑的方法的，只是方法的名称不同，但是功能是一样的
<span>1) intValue()</span>
实例方法，返回 int 类型  将integer对象中的值转换成int类型
<p class="pre-cmd">Integer integer=new Integer(30);
System.out.println(integer.getClass());
System.out.println(integer);
int i =integer.intValue();
System.out.println(i);
返回值
class java.lang.Integer
30
30</p>
<span>2) toString()</span>
实例方法，返回 String 类型  将integer对象中的值转换成String类型
<p class="pre-cmd">Integer integer=new Integer(123465);
System.out.println(integer.getClass());
System.out.println(integer.intValue());
String str=integer.toString();
System.out.println(str.getClass());
System.out.println(str);
返回值
class java.lang.Integer
123465
class java.lang.String
123465</p>
<span>③ 静态方法</span>
静态方法可通过Integer.方法() 直接调用，结果都是将int，String类型变量转换成Integer Double等包装类型变量
<span>1）valueOf(int)</span>
静态方法，可通过Integer类直接调用，将int类型转换成Integer对象类型
<p class="pre-cmd">int a=5;
Integer integer=Integer.valueOf(a);
System.out.println(integer.getClass());
System.out.println(integer);
返回值
class java.lang.Integer
5</p>
<span>2）parseInt(str)</span>
<p class="pre-cmd">将String类型转换成Integer对象类型
String str="123456";
System.out.println(str.getClass());
Integer integer=Integer.parseInt(str);
System.out.println(integer.getClass());
System.out.println(integer);
返回值
class java.lang.String
class java.lang.Integer
123456</p>
parseInt(str) str中的值如果不是阿拉伯数字，运行就会报错NumberFormatException;
<span>④ 关于Number</span>
记住下面的使用方法就行
<p class="pre-cmd">Number n=32;
double n1=n.doubleValue();
System.out.println(n1);
Number n2=12.32;
int n3=n2.intValue();
System.out.println(n3);</p>
<span>⑤ 自动装箱和拆箱</span>
JDK自从1.5版本以后，就引入了自动拆装箱的语法，也就是在进行基本数据类型和对应的包装类转换时，系统将自动进行，这将大大方便程序员的代码书写。
自动装箱：将 基本数据类型 封装为对象类型，来符合java的面向对象的思想。
自动拆箱：将对象重新转化为基本数据类型
自动装箱、拆箱都是在编译期进行的“预处理”优化工作
<span>1）自动装箱</span>
int n=45;
Integer n1=n;
System.out.println(n1);
//自动装箱，实际上执行了 Integer n1 = Integer.valueOf(n);
<span>2）自动拆箱</span>
Integer i=5;
int i1=i;
System.out.println(i1)
//自动拆箱，实际上执行了 int iii2 = iii.intValue()
<span>3）数值计算中存在拆箱，装箱，运算的先后顺序</span>
1）先拆箱后运算
Integer a1=4;
Integer a2=4;
int a3=a1+a2;
2）先拆箱，后装箱
Integer a1=4;
Integer a2=4;
integer a3=a1+a2;</pre>
          <h3>正则表达式</h3>
          <pre></pre>
          <h3>集合</h3>
          <pre>
数组应用是有它的局限性的，例如数组定长，插入数据还需扩容，删除元素也不便捷，所以Collection集合应用生
Collection是一个接口，定义了集合相关的操作方法，他有两个子接口List可重复集和Set不可重复集
Collection集合不需设置长度，不是定长，所以可以实时添加元素
集合中储存的都是<strong>引用类型元素</strong>，并且集合只保存每个元素对象的地址，并非将元素对象本身存入集合，所以当对象改变之后，集合中该对象元素也会发生改变
Collection是个接口，所以他有ArrayList、LinkedList、HashSet 三个实现类，前两个供List使用，最后的HashSet供Set使用
<span>Collection集合的操作</span>

<span>add（Object obj）- boolean</span>
向集合中添加新元素，成功添加返回true，失败则返回false
<p class="pre-cmd">import java.util.Collection;
//创建集合对象
Collection collection =new ArrayList();
//向集合中添加元素，只能放object类型
collection.add(2); //不能放int类型，但是此时自动装箱 ，成为integer类
boolean f=collection.add("abc");
System.out.println(collection);
System.out.println(f);
//此时出书的元素都变成了object类型</p>
<span>addAll(collection)</span>
将一个集合，添加到另一个集合中，添加成功返回true
<p class="pre-cmd">//简单测试
Collection collection =new ArrayList();
collection.add("java");
collection.add("c++");
Collection collection1 =new ArrayList();
collection1.add("angular");
collection1.add("vue");
boolean flag=collection1.addAll(collection);
System.out.println(flag);
System.out.println(collection1);</p>
<span>contains（Object obj）- boolean</span>
判断集合中是否存在指定元素,实际是通过equals判断的，通常要重写equals指定一个判断属性，作为判断依据来判断元素是否存在！！！
<p class="pre-cmd">//简单测试
Collection collection =new ArrayList();
collection.add("java");
collection.add("c++");
collection.add("js");
collection.add("js");
String str="js";
boolean flag=collection.contains(str);
System.out.println(flag);
System.out.println(collection);
//对于equals的思考
Student stus1=new Student("李明",123,"男");
Student stus2=new Student("李明",123,"男");
collection.add(stus1);
boolean flag2=collection.contains(stus2);
boolean flag3=collection.contains(stus1);
System.out.println(flag2);  //没有重写equals为false，比较的是对象地址；重写equals为true
System.out.println(flag3);  //一直是true，因为不重写equals比较对象地址，重写也对</p>
<span>containsAll(collection)</span>
判断给定集合，是否被本集合包含，添加成功返回true
<p class="pre-cmd">//简单测试
Collection collection =new ArrayList();
collection.add("java");
collection.add("c++");
collection.add("angular");
collection.add("vue");
collection.add("react");
Collection collection1 =new ArrayList();
collection1.add("java");
collection1.add("vue");
collection1.add("react");
boolean flag=collection.containsAll(collection);
System.out.println(flag)
</p>
<span>size()</span>
返回集合元素个数,返回int类型
 <p class="pre-cmd">	//简单测试
Collection collection =new ArrayList();
collection.add("java");
collection.add("c++");
System.out.println(collection.size());</p>
<span>clear()</span>
 清空集合中所有元素
 <p class="pre-cmd">	//简单测试
 Collection collection =new ArrayList();
collection.add("java");
collection.add("c++");
collection.clear();
System.out.println(collection.size());</p>
<span>isEmpty()</span>
 判断集合是否为空,返回boolean类型,为空返回true
 <p class="pre-cmd">	//简单测试
Collection collection =new ArrayList();
collection.add("java");
collection.add("c++");
System.out.println(collection.isEmpty());
collection.clear();
System.out.println(collection.isEmpty());</p>
<span>remove()</span>
只删除集合中一个元素，如果集合中有多个重复元素，这时候删除只能删除其中最靠前的一个元素，所有要用iterator遍历删除
<span>removeAll()</span>
删除两个集合之间的交集元素</pre>
          <h3>泛型</h3>
          <pre>定义：泛型本质是参数化类型,对集合中元素类型做了限定,< E>泛型表示符号
作用：方便对集合中元素统一处理，使用定义数据类型中的方法
格式：< 数据类型>，数据类型一定是引用数据类型，基本数据类型不行
Collection< String>  collection =new ArrayList< String>();
泛型只存在于编译期，就是为了规范写法，在运行期没有泛型的概念
</pre>
          <h3>Iterator迭代器</h3>
          <pre>
迭代器用于遍历集合元素，因为for遍历一定要知道数组长度，有局限性，所以迭代器应用而出
迭代器Iterator是一个接口，集合在重写Collection的iterator()方法时利用内部类提供了迭代器的实现
如果删除遍历的某个元素一定要用迭代器的remove，不能用集合的remove()删除,也不能用集合的add()添加元素
<span>① 迭代器遍历遵循三步骤</span>
问 取 删
问 .hasNext()
取 .next()   此时如果Iterator没有设置泛型就要强转
删 .remove() 删不是必须操作
<p class="pre-cmd">public static void main(String[] args) {
  Collection< String> col=new ArrayList< String>();
  col.add("java");
  col.add("web");
  col.add(".net");
  col.add("js");
  for(String str:col){
    System.out.println(str);
  }
  Iterator< String> its=col.iterator();
  while(its.hasNext()){
     System.out.println(its.next());
     String str=ites.next();
     //判断1
     if(str.indexOf("j")!=-1){
       ites.remove();
     }
     //判断2
     if("js".equals(str)){
       ites.remove();
     }
     //"js".equals(str)中的"js"属于直接声明字面量 类似于 nen object().get..();
     //str.equals("js")这样写如果str是null就会出现空指针异常，所以推荐上面写法
  }
}</p>
<span>② 增强for循环</span>
jdk5之后推出了一个新特征增强for循环，也称forEach，新循环；
增强for循环底层就是采用了迭代器，编译器会在编译器将增强for循环改为迭代器，所以循环式不要使用集合方法的增删元素
注意for()括号里的遍历数据类型的声明
<p class="pre-cmd">Collection< String> col=new ArrayList< String>();
col.add("java");
col.add("web");
col.add(".net");
col.add("js");
for(String str:col){
  System.out.println(str);
}</p></pre>
          <h3>List集合</h3>
          <pre>Collection 算是集合的终极父接口 List是个接口，是Collection的子接口
ArrayList 和LinkedList是集合的两种实现类
ArrayList   以动态数组形式来保存数据，有下标存在，适合查询访问  首选实现类
LinkedList  链表式数据结构，有下标存在，插入删除非常快
<span>① List的实例方法</span>
类似增删改查的实例方法
get(int index) 通过下标得到集合中的元素
set(int index,E element) 在指定位置，插入新元素，并返回原位置的元素,类似替换的功能
add(int index,E element) 重载方法，在指定位置，插入新元素，原位置元素按顺序后移，插入新元素的功能
remove(int index)  重载方法，删除指定位置元素，并反回该元素
subList(fromIndex,toIndex);    返回指定位置区间list的子集，注意：对子集元素的操作就是对原集合对应元素的操作
<p class="pre-cmd">public  class IterateDemo {
  public static void main(String[] args) {
  List< String> list=new ArrayList< String>();

  list.add("java");
  list.add("web");
  list.add(".net");
  list.add("js");
  list.add("vue");

  System.out.println(list.get(0));
  System.out.println(list.set(0,"Angular"));
  System.out.println(list);
  list.add(1,"Angular");
  System.out.println(list);
  System.out.println(list.remove(1));
  System.out.println(list);
  }
}
输出内容
java
java
[Angular, web, .net, js, vue]
[Angular, Angular, web, .net, js, vue]
Angular
[Angular, web, .net, js, vue]</p>
<span>② List转换成数组</span>
List的toArray方法用于将集合转为数组,次方法也使用与Set集合
List.toArray(实参)  重点是()里的实参，实参是可以是数组类型[]，可以是对象，是引用变量，但不能只是个引用数据类型
<p class="pre-cmd">public static void main(String[] args) {
  List< String> list=new ArrayList< String>();
  list.add("java");
  list.add("web");
  list.add(".net");
  list.add("js");
  list.add("vue");

  String[] str=new String[]{};
  String[] str0=list.toArray(str);
  String[] str1=list.toArray(new String[]{}); //可以，且数组长度可变
  String[] str2=list.toArray(new String[0]);  //可以，只是数组太小，会出现null
  String[] str3=list.toArray(new String[list.size()]);  //可以，且数组长度是List集合长度
  //String[] str3=list.toArray(new String[]);   //报错，参数错误，参数只是个引用数据类型
  System.out.println(str0.getClass());
  System.out.println(Arrays.toString(str0));
  System.out.println(str1);
  System.out.println(str2);
  }
}</p>
<span>③ 数组转换成List</span>
Array.aslist(数组);
数组转换的集合还表示原数组，这意味着对该集合的元素修改，就是对原数组的操作
<p class="pre-cmd">public  class IterateDemo {
  public static void main(String[] args) {
  String[] str=new String[]{"a","b","c"};
  List< String> list=Arrays.asList(str);
  System.out.println(list.getClass());
  System.out.println(list);
}</p>
数组转换成集合后，不能对转换的集合进行增删add(),remove()修改，否则报不支持的异常错误，因为数组是定长的,可以使用set(),get()方法
如果想使用add(),remove()可以将转换得来的集合，赋值给一个额外创建的集合，例如下面的写法
  List< String> listNew=new ArrayList< String>(listOld);</pre>

          <h3>List排序功能</h3>
          <pre>
Collections是个工具类,在java.util.Collections包下;
Collections的静态方法sort方法是用来对List集合排序，默认升序，按照Unicode排序，但是无法对汉字排序时
<span>① Collections.sort(list)</span>
<p class="pre-cmd">public static void main(String[] args) {
  List< String> list = new ArrayList< String>();
  list.add("java");
  list.add("php");
  list.add("json");
  list.add("angular");
  list.add("js");
  list.add("web");
  System.out.println(list);  //[java, php, json, angular, js, web]
  Collections.sort(list);
  System.out.println(list);  //[angular, java, js, json, php, web]
}</p>
<span>② comparable内比较器</span>
comparable是个接口
Collections.sort()排序的集合元素都必须是Comparable接口的实现类，如果List的泛型是自定义的类，在用Collections.sort()排序前,
那么自定义的类一定要重写compareTo在此方法中将比较规则写出，之后才可以调用Collections.sort（list）排序
不推荐我们自定义的类取通过comparable内比较器去实现Comparable接口，因为这样做存在侵入性。
所谓侵入性：
当我们调用给某个方法，但是该方法要求我们为此添加很多额外的代码，添加的代码越多，侵入性越强，也可以理解为，侵入性就要给类添加很多额外的代码
<span>comparator外比较器</span>
如果java项目中实现了comparable接口，其比较逻辑就已经确定，如果希望在排序的操作中临时修改比较规则，
可以采用comparator接口回调的方法实现，这时利用的就是Collections.sort(list，new object())方法，要传输两个参数，new object()就是外比较器构成的代码了
comparator外比较器侵入性比较低，可以利用匿名内部类的方式去比较
<p class="pre-cmd">自定义类  ------- comparable内比较器 -----------
package comparableTest;
/**
 * 重写了有参构造器  无参构造器  equals方法
 * 我重写了toString为了方便打印
 * 因为我是对schoolId进行比较我还单独对schoolId 做了封装
 * 继承 Comparable< T>
 * compareTo(Student o)是我重写的方法，比较的是schoolID
 * this.schoolId  表示当前id
 * o.getSchoolId();  表示所传输的id
 * 而且还用的是getSchoolId()封装方法
 *
 */
public class Student implements Comparable< Student>{
  public int getSchoolId() {
    return schoolId;
  }

  public void setSchoolId(int schoolId) {
    this.schoolId = schoolId;
  }

  int schoolId;
  String name;
  int age;

  public Student(int schoolId, String name, int age) {
    super();
    this.schoolId = schoolId;
    this.name = name;
    this.age = age;
  }

  public Student() {
    super();
  }

  @Override
  public int hashCode() {
    final int prime = 31;
    int result = 1;
    result = prime * result + schoolId;
    return result;
  }

  @Override
  public boolean equals(Object obj) {
    if (this == obj)
      return true;
    if (obj == null)
      return false;
    if (getClass() != obj.getClass())
      return false;
    Student other = (Student) obj;
    if (schoolId != other.schoolId)
      return false;
    return true;
  }

  @Override
  public String toString() {
    return "Student [schoolId=" + schoolId + ", name=" + name + ", age=" + age + "]";
  }

  // 上面的都是辅助 ，这里才是重点！！！！！！
  public int compareTo(Student o) {
    return this.schoolId-o.getSchoolId();
    //return -（this.schoolId-o.getSchoolId()）;  降序 推荐
    //return o.getSchoolId()-this.schoolId-o.getSchoolId();  降序
  };

}
测试调用类
package comparableTest;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class StudentTest {

 public static void main(String[] args) {
    List< Student> list = new ArrayList< Student>();
    list.add(new Student(1002,"A",22));
    list.add(new Student(1005,"B",22));
    list.add(new Student(1001,"C",22));
    System.out.println(list);
    Collections.sort(list);
    System.out.println(list);
 }

}
输出结果
[Student [schoolId=1002, name=A, age=22], Student [schoolId=1005, name=B, age=22], Student [schoolId=1001, name=C, age=22]]
[Student [schoolId=1001, name=C, age=22], Student [schoolId=1002, name=A, age=22], Student [schoolId=1005, name=B, age=22]]

------------ comparator 外比较器 ------------------
package comparableTest;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class StudentTestComparator {

	public static void main(String[] args) {
    List< Student> list =new ArrayList< Student>();
    list.add(new Student(1002,"A",25));
    list.add(new Student(1005,"B",23));
    list.add(new Student(1001,"C",21));
    System.out.println(list);
    StudentTestComparator test=new StudentTestComparator();
    //test.new ComparaAge()注意这里 main方法中使用内部类 ，而且调用的是sort()两个参数的方法
    Collections.sort(list, test.new ComparaAge());
    System.out.println(list);
  }
  public class ComparaAge implements Comparator< Student> {
    @Override
    public int compare(Student o1, Student o2) {

      return o1.age-o2.age;
    }
  }
}</p>
comparator外比较器的匿内部类的写法，自定义排序功能，推荐用这种写法，侵入性低
<p class="pre-cmd">
public class SortListDemo3 {
	public static void main(String[] args) {
    /*
     * sort(List list,Comparator com)
     * 该方法要求我们额外传入一个比较器(单独定义的元素
     * 比较规则)，然后按照该比较器的比较规则对集合元素
     * 比较大小后进行自然排序。
     * 推荐用匿名内部类形式创建比较器
     * 为Point类提供一个比较规则，比较规则为点到原点距离远的大
     */
    // 案例一，自定义排序字符串
    //排序字符串，但是排序的是中文时，没规律
    List< String> list = new ArrayList< String>();
    list.add("韩梅梅");
    list.add("张三");
    list.add("诸葛孔明");
    System.out.println(list);
    //为字符串定义比较器,规则按照字符多少排序
    Collections.sort(list,new Comparator< String>(){
      public int compare(String o1, String o2) {
        return o1.length()-o2.length();
      }
    });
    System.out.println(list);
     // 案例二，排序自定义类 Point是一个自定义类
    List< Point> list1 = new ArrayList< Point>();
    list1.add(new Point(2,3));
    list1.add(new Point(8,7));
    list1.add(new Point(1,6));
    list1.add(new Point(4,3));
    System.out.println(list1);
    Collections.sort(list1,new Comparator< Point>(){
      /**
       * 该方法是用于定义两个参数的比较大小的规则。
       * 返回值表示比较结果，而返回的数字不关心具体取值，
       * 关注的是一个取值范围:
       * 当返回值>0时，表示o1是大于o2的
       * 当返回值<0时，表示o1是小于o2的
       * 当返回值=0时，表示它们相等
       */
      public int compare(Point o1, Point o2) {
        int len1 = o1.getX()*o1.getX()+o1.getY()*o1.getY();
        int len2 = o2.getX()*o2.getX()+o2.getY()*o2.getY();
        return len1-len2;
      }
    });
    System.out.println(list1);
	}
}</p>
<span>总结</span>
Comparable注意
1)implements  Comparable < T>
继承接口Comparable,且T用实现类对象表示
2）compareTo(Student o)
重写compareTo方法， Student表示实现类对象
Comparator注意
1）public class ComparaAge implements Comparator< Student> {}
在调用类中重写了一个内部类去实现Comparator，Student表示T
2）@Override
public int compare(Student o1, Student o2) {}
compare这里是两个参数了
3）Collections.sort(list, test.new ComparaAge());
test.new ComparaAge()注意这里 main方法中使用内部类 ，而且调用的是sort()两个参数的方法
compareTo中的return关注的是一个取值范围,而不是返回值,例如当返回值>0 时;o1>o2</pre>
          <h3>队列和栈</h3>
          <pre>
队列接口继承自Collection，也可以使用Collection中的实例方法，但是推荐使用队列的实例方法
队列可以保存一组元素，并且存取元素遵循一定的规则。
常见的实现类LinkedList
由于LinkedList链表式结构可以保存一组元素，并且根据首位增删元素效率好的特点（满足队列特点）使得其经常作为队列使用的实现类
<span>① Queue队列</span>
Queue队列是一种数据结构，存储数据原则，先进先出，从线性表的一端添加元素，从另一端取出元素
<span>1) 实例方法</span>
offer()  入队添加元素，添加成功返回ture
peek()   出队返回第一个元素，并不对原数组造成影响，如果数组为空，返回null，成功为true
poll()   出队返回第一个元素，并截取第一个元素，如果数组为空，返回null，成功为true
<p class="pre-cmd">package queueDemo;
import java.util.LinkedList;
import java.util.Queue;
public class QueueTest01 {
  public static void main(String[] args) {
    Queue< String> queue=new LinkedList< String>();
    queue.offer("a");
    queue.offer("b");
    queue.offer("c");
    System.out.println(queue);
    String str01=queue.peek();
    System.out.println(str01);
    System.out.println(queue);
    String str02=queue.poll();
    System.out.println(str02);
    System.out.println(queue);
  }
}</p>
<span>2) Queue的两种遍历方式</span>
<p class="pre-cmd">package queueDemo;
import java.util.LinkedList;
import java.util.Queue;
public class QueueTest01 {
	public static void main(String[] args) {
		Queue< String> queue=new LinkedList< String>();
		queue.offer("a");
		queue.offer("b");
		queue.offer("c");
		for(String s:queue){
			System.out.println(s);
		};
		System.out.println(queue);
		//队列的自行遍历，遍历后集合为空
		while(queue.size()>0){
			System.out.println(queue.poll());
		}
		System.out.println(queue);
	}
}</p>
<span>BlockingQueue阻塞队列</span>
阻塞队列，如果队列数据满了，后来的数据就会等待队列中出去一个数据后再存入一个数据
阻塞队列的核心就是生产者和消费着
当队列中没有数据的情况下，消费者端的所有线程都会被自动阻塞（挂起），直到有数据放入队列
队列中填满数据的情况下，生产者端的所有线程都会被自动阻塞（挂起），直到队列中有空的位置，线程被自动唤醒。
实例方法
LinkedBlockingQueue(int )  指定队列中放入元素数量
<span>1）BlockingQueue的实例方法</span>
put(anObject) 把元素加到BlockingQueue里,如果BlockQueue没有空间,则调用此方法的线程被阻断直到BlockingQueue里面有空间再继续.
take()        取走BlockingQueue里排在首位的对象,若BlockingQueue为空,阻断进入等待状态直到BlockingQueue有新的数据被加入;
take()，put() 都有阻塞效果
<span>Deque队列</span>
Deque队列是一种数据结构，是Queue的子接口，双端队列，两端都可入队出队，Deque是接口所以要用实现类LinkedList
<span>1）Deque的实例方法</span>
.size()
.offer()
.offerFirst()
.offerLast()
.poll()
.pollLast()
<p class="pre-cmd"> package queueDemo;
import java.util.Deque;
import java.util.LinkedList;

public class DequeTest {

public static void main(String[] args) {
  // TODO Auto-generated method stub
  Deque< String> deque=new LinkedList< String>();
  deque.offer("java");
  deque.offer("c++");
  deque.offerFirst("php");
  deque.offerLast("web");
  System.out.println(deque);
  System.out.println(deque.size());
  System.out.println("------------");
  String str01=deque.poll();
  System.out.println(str01);
  String str02=deque.pollLast();
  System.out.println(str02);
  String str03=deque.pollFirst();
  System.out.println(str03);
  System.out.println(deque);
}
}
打印
[php, java, c++, web]
4
------------
php
web
java
[c++]
</p>
<span>Deque之栈Stake</span>
如果将Deque限制为只能一端入队和出队，就实现了Stake栈数据结构，特点是先进后出，入栈是push出栈为pop
pop()从队首取第一个元素，并截取返回
push()将元素压入队首
<p class="pre-cmd">
package queueDemo;
import java.util.Deque;
import java.util.LinkedList;
public class StackTest {
public static void main(String[] args) {
  // TODO Auto-generated method stub
  Deque< String> stack=new LinkedList< String>();
  stack.push("a");
  stack.push("b");
  stack.push("c");
  System.out.println(stack);
  String str=stack.pop();
  System.out.println(str);
  System.out.println(stack);
 }
}
输出结果
[c, b, a]
c
[b, a]
</p>
</pre>
          <h3>Set集合</h3>
          <pre>
List集合可重复集合，因为有下标存在，通过下标确定唯一元素；Set不可重复集合，无下标存在，元素是无序的但不是随机的
Set添加元素时，通过equals判断是否添加成功，还要注意equals是否重写，这决定是否能添加成功，equals判断为true添加失败，object中equals没重写判断对象地址
Set实现类是HashSet
Set实例方法add()，remove();
Set遍历用forEach和Iterator都可
<p class="pre-cmd">package collectionDemo;
import java.util.HashSet;
import java.util.Set;
public class SetTest {
  public static void main(String[] args) {
    Set< String> set=new HashSet< String>();
    //添加元素
    set.add("a");
    set.add("g");
    set.add("v");
    //遍历，也可使用Iterator
    System.out.println(set);
    for(String s:set){
    System.out.println(s);
    }
    //删除元素，直接删除对应元素
    set.remove("g");
    System.out.println(set);
  }
  }</p></pre>
          <h3>Map</h3>
          <pre>
Map的特点是可以根据一个条件查找对应数据，而条件就作为key保存，要查询的数据作为value保存
Map总是以一组一组的键值对，也就是key和value的关系保存数据，其中key值唯一，value可重复,通过key值找value,其元素排列也是无序的，元素是不可重复的
Map< Key,Value> key和value都必须是引用类型
Map当今世界查询效率最快的数据类型
<span>1) 实现类</span>
HashMap()
扩展：还有一个LinkedHashMap()实现类，有序列表，底层维护一个双向循环链表，记录了迭代顺序），
<span>2) 实例方法</span>
.put(k,v) 将此key原value值返回,且当前value值将覆盖原value值;如果当前key之前不存在，那么返回null；
.get(k) 通过key取出value值，注意返回null的情况
.containesKey(k)   判断kye值是否存在于当前map集合中，如果存在返回true
.containesValue(v) 判断value值是否存在于当前map集合中，如果存在返回true
.size()  返回键值对数量
<p class="pre-cmd">package mapDemo;
import java.util.HashMap;
import java.util.Map;
public class mapTest {
  public static void main(String[] args) {
    Map< String, Integer> map=new HashMap< String,Integer>();
    map.put("数学", 90);
    map.put("语文", 90);
    Integer i=map.put("语文", 88);
    map.put("英语", 67);
    map.put("化学", 88);
    System.out.println(i);
    System.out.println(map);
    Integer a=map.get("数学");
    System.out.println(a);
    boolean b =map.containsKey("地理");
    boolean  c=map.containsKey("数学");
    System.out.println(b);
    System.out.println(c);
  }
}</p>
<span>3）map的遍历</span>
<span>1. keySet()</span>
得到Map中所有key值的Set()集合
eg: Set< 泛型> setAry=map.keySet()，之后利用forEach遍历
<span>2. entrySet()</span>
得到Map中所有键值对元素的Set()集合；
遍历时getKey()取key值,getValue()取value值
<span>3. values()</span>
得到Map中所有value值的Collection集合
<span>注意：</span>
keySet(),entrySet()都是返回一个Set()集合，注意设置Set()泛型时是那种引用类型
<p class="pre-cmd">//map的遍历  keySet() entrySet()
Map < String,Integer> mapAry=new HashMap< String,Integer>();
mapAry.put("小米", 1999);
mapAry.put("华为", 2999);
mapAry.put("三星", 3999);
mapAry.put("苹果", 8999);
Set< String> setKey=mapAry.keySet();
for(String key:setKey){
  System.out.println(key);
}
Set< Entry< String, Integer>> mapEntry=mapAry.entrySet(); //注意这里的< Entry< String, Integer>>泛型
for( Entry< String, Integer> e:mapEntry){
  System.out.println(e.getKey());
  System.out.println(e.getValue());
}</p>
<span>HashCode()与散列表</span>
map.put()操作时会先经过HashCode()计算，之后进行散列算法，之后存在Map内存中
<span>散列表之所以查询速度快是因为：</span>
散列表内部使用数组保存元素，例如map.put()操作保存数据时，是根据key.hashcode()计算后返回的数字来充当数组的下标值，然后将其存入对应的位置
在查询时再根据key.hashcode()计算出所对应的下标，去数组中直接找对应值，这样既避免了遍历数组的操作，从而查询效率不受数据多少的影响
<span>hashCode()</span>
hashCode()是object类中的一个将对象内存地址以整数形式返回的方法,java中所有的类都具备该方法
<span>hashcode的稳定性</span>
同一个对象在一个程序中，多次调用hashcode()生成的整数一定是相同的，但hashcode()生成值相同，并不代表是同一个对象，因为可能equals()不相同，
如果hashcode()相同，equals()不相同会出现链表结构，为了降低链表结构的出现需要重写hashcode()和equals()，eclipse自带这个操作</pre>
          <h3>文件操作File</h3>
          <pre>利用import java.io.File下的File类来用于"文件系统"操作，例如创建文件、文件夹，获取文件的属性
windows中不区分大小写
Linux Mac中不区分大小写
在一个文件夹中不能存在相同的文件、文件夹
<span>① 构造方法</span>
File(String pathName)   只是指向了这个路径，而没有生成
File(File parent,String child)   已知父目录，在父目录下创建子文件，父级是个File类型
File(String parent,String child) 已知父目录，在父目录下创建子文件，父级是个String类型
已知一个父目录，在这个父目录下创建子文件
注意点：创建File只是指向了文件目录，但是并没有创建文件
File.separator  路径尽量用相对路径，并且目录的层级分割符不要直接写'/'和'\'，应该使用File.separator这个常量表示，以免不同系统带来的差异
理解相对路径，和绝对路径
<span>② File对文件操作</span>
.crateNewFile()创建文件，返回类型boolean，会抛一个异常，如果该文件存在创建失败，返回false
.isFile() 判断当前File对象是否是一个文件，而不是文件夹，返回类型boolean
.length() 获取文件内容占用的字节量，用long类型接受
.exists() 判断file指向的目录文件是否存在，返回类型boolean ，目录存在返回true
.delete()  删除file表示的目录或文件，删除成功返回true，如果删除的是一个目录，目录下有子文件则不可删除，只能删除最底层的文件后再删除目录
.createTempFile(String prefix, String suffix)  静态方法，在计算机默认目录创建一个临时文件.返回一个File类型,可用.delete()删除
prefix -- 前缀字符串定义的文件名;必须至少有三个字符长
suffix -- 后缀字符串定义文件的扩展名;如果为null后缀".tmp" 将被使用
.renameTo(File dest)   将文件从一个目录移动到另一个目录下并修改名称，移动后原文件不存在,dest指定文件的新抽象路径名,当重命名成功时返回true
PS:如果创建文件时，没有给File指定盘符目录，这是创建出的文件会出现在你当前的项目下，因为eclipse指定的相对路径是以当前项目为准
<p class="pre-cmd">public class FileTest {
  public static void main(String[] args) throws IOException {
    File file = new File("c:"+File.separator+"a.text");
    System.out.println(!file.exists());
    if(!file.exists()){
     boolean create_flag=file.createNewFile();
     System.out.println(create_flag);
    }
    System.out.println(file.length());
    System.out.println(file.isFile());
    System.out.println(file.isDirectory());
    System.out.println(file.delete());
    //下面是测试renameTo
    File dir=new File("/Users/mac/Documents"+File.separator+"canDelete");
    File target = new File(dir,"myfile.text");
    // UUID java中用于生产不重复字符串的api
    File copy=new File(dir+"/demo",UUID.randomUUID().toString()+".text");
    target.renameTo(copy);
    target.createNewFile();
    System.out.println(target.getName());
  }
}</p>
利用递归删除文件夹
<p class="pre-cmd">public class FileTest {
  public static void main(String[] args) throws IOException {
     File dist=new File("/Users/mac/Documents/demo");
     deleteFile(dist);
  }
  // 递归删除文件
  public static void deleteFile(File dir){
    File [] files=dir.listFiles();
      for(File f: files){
        // 如果是文件就直接删除，是文件夹就递归到下一层先删除所有文件后删除文件
        if(f.isFile()){
          System.out.println("删除："+f);
          f.delete();
        }else{
          // 其实关键就是这个else里的 再次调用本身方法的逻辑
          deleteFile(f);
        }
      }
      dir.delete();   // 说明该文件夹下面的文件都清空了，那就把自身也删除了
  }
}</p>
<span>③ File对文件目录的操作</span>
.mkdir()  仅创建一级目录，返回类型boolean，创建成功返回true，如果目录存在返回false
.mkdirs() 创建多级目录,只能创建目录，无法创建文件
.listFiles()获取指定目录下所有的子文件和子目录的路径，获取不到孙子级别的，返回一个File[]数组之后可以for(File f:files){} 去遍历
.list()获取指定目录下所有的子文件和子目录的名称，返回类型是个String类型
.isDirectory( )  判断file是否表示为一个目录，返回类型boolean ，是一个目录返回true
<span>④ 获取功能</span>
.getName()        -- String 获取File的文件名称或目录名
.getAbsolutePath  -- String 获取File的绝对路径
.getPath          -- String 获取File的相对路径
<span>⑤ FileFilter路径过滤器</span>
FileFilter是一个接口，用匿名内部类方式写，在.listFiles(Filter)中使用
FileNameFilter
例如查找某盘下以.jpg结尾的文件，是一个筛选功能
案例一: 利用listFiles()遍历后加条件判断
<p class="pre-cmd">File file = new File("c:"+File.separator+"a");
File[] files=file.listFiles();  //不用.list()因为我要判断是否为文件，因为.JPG结尾的还可能是文件夹
for(File f:files){
  //判断是不是文件
  if(f.isFile()){
  //判断是不是以jpg结尾
    if(f.endWith('.jpg')){   //重点是String endWith();
       System.out.println(f);
    }
  }
}</p>
案例二: 利用FileFilter路径过滤遍历
<p class="pre-cmd">public class FileFilterTest {
  public static void main(String[] args) {
    File files=new File("c:"+File.separator+"text");
    File[] fileAry=files.listFiles(new FileFilter() {
    @Override
    public boolean accept(File pathname) { //pathname是个路径地址
      boolean flag1=pathname.isFile(); //说明是个文件
      boolean flag2=pathname.getName().endsWith(".jpg"); //说明是以.jpg结尾
      return  flag1 && flag2;
    }
    });
    for(File f:fileAry){
      System.out.println(f);
    }
  }
}</p>
案例三: 利用FileNameFilter路径过滤遍历
<p class="pre-cmd">File file=new File("c:"+File.separator+"text");
File[] fileArys=file.listFiles(new FilenameFilter() {
    @Override
    public boolean accept(File dir, String name) {
      File fileFlag=new File(dir, name); //注意dir是父级目录 name是文件，文件目录的名称
      boolean flag1=fileFlag.isFile();
      boolean flag2=name.endsWith(".jpg");
      return false;
    }
  });
for(File f:fileArys){
  System.out.println(f);
}</p>  </pre>
          <h3>编码</h3>
          <pre>
互联网或文件都是按照byte（8位）进行数据传输的，所以字符数据在互联网传输过程中必须拆分为byte进行传输
将字符数据拆分为byte数据过程称为：编码
将byte字节数据重新合并为字符数据过程称为：解码
不管是读数据也好，取数据也好都是以字节为单位，
字符集：
utf-8 一个英文表示一个字节,\n换行占一个字节，一个中文占三个字节
gbk   一个中文占两个字节
通常我们利用String.getBytes()将字符数据拆分为字节数据
如果参数位置没有指定编码格式，采用平台默认编码格式，如果参数位置有指定编码格式，此时则采用指定编码格式进行转换
String.getBytes(String charset)  eg:String.getBytes("UTF-8")且数据写入时如果两次写入编码格式不同则会出现乱码情况
          </pre>
          <h3>操作文件内容-RandomAccessFile</h3>
          <pre>
FiLe仅仅是获取文件或文件夹目录，无法对文件进行操作
对文件的内容进行读写操作，该类名为RandomAccessFile，基于指针有偏移量存在，
RandomAccessFile是随机访问流，流就是用来读取数据的
RandomAccessFile，在构造方法中指定模式，java会抛出一个异常，需要注意
<span>操作模式</span>
RandomAccessFile(File file ,String mode)
RandomAccessFile(String name ,String mode)
File file和String name都表示路径，只不过一个是File类型一个是String类型
有两种模式，只读模式和读写模式mode ：r 为只读 rw 可读可写
<span>读写实例方法</span>
.write(int b) 向文件内写入一个字节，写的int值表示为Unicode字节，如果写数据时文件不存在，会自动创建文件
.write(byte[] bys) 向文件内写入多个字节 之后通过 String.getBytes()转换成一个字符串  .write("hello".getBytes());
.write(byte[] by,int offset, int len)  在offset处截取by中len字节  .write("hello".getBytes(),1,3); 文件内显示ell三个英文
.writeInt()   写入整数，占4个字节，文件指针移动4次
.writeLong()  写入整数，占8个字节，文件指针移动8次
.read() -int  一次读取一个字节数据，返回int类型正常返回数是0~255,read()返回-1时说明读到文件末尾了，读取文件时，这个文件必须存在不然报异常  i=raf.read()  System,out.println((char)i)
.read(byte[] b) -返回int类型表示读取数据的个数，按照先按设置的byte字节数组读取，如果设置的数组长度大于文件实际字节长度，则返回值为实际读取到的字节长度，.read(byte[] b)费事在要提前设置byte[]的长度，而且最后取得也是这个byte变量
.readInt()    读取整数将，4个8位拼接位一个32位整数
.readLong()   读取8个字节的整数
.close()  关闭流，以免消耗内存
<p class="pre-cmd">public class RandomAccessFilter {
   //这里RandomAccessFile会抛出异常
  public static void main(String[] args) throws IOException {
     RandomAccessFile file=new RandomAccessFile("c:/demo/a.text", "rw");
     file.write(97);  // 文件展示 a
     file.write("hello".getBytes()); // 文件展示 hello
     file.write("hello".getBytes(), 1, 3); // 文件展示 ell
     int i=file.read();  //只返回一个字节内容
     System.out.println((char)i);  //强转一下
     byte[] bys=new byte[5];
     int len=file.read(bys);   // bys参数要提前设置获取长度
     System.out.println(len);  // 看实际获取的长度
     System.out.println(new String(bys));  //看返回的内容
     file.close();
  }
}</p>
读取文件内所有的内容，重点是read(byte[] b) 和 new String(byte[],int offset, int len)
<p class="pre-cmd">
 public static void main(String[] args) throws IOException {  //注意这里RandomAccessFile会抛出异常
   RandomAccessFile file=new RandomAccessFile("c:"+File.separator+"a.text", "rw");
   file.write("hello!中国".getBytes()); // 文件展示 hello!中国
   byte[] bys=new byte[2];   //这里byte[2]以单位2遍历内容，碰到中文会出现乱码，但是设置为byte[1024] 就不会出现乱码byte[1024*8]效率最高
   int len=file.read(bys);
   while((len=file.read(bys))!=-1){   //file.read()返回的是实际读取字节个数，如果是-1说明为空
      System.out.println(new String(bys,0,len));  //len是重点，防止读到最后出现空格，因为file.read()返回的是实际读取字节个数
   }
   file.close();
}</p>
思考：读取数据时文件有中文会出现什么情况
如果单一大按照字节码读取数据，将字节数组长度byte[] bys设置为new byte[1]或 new byte[3](utf-8英文一个字节，汉字3个字节)，将会输出乱码，因为当读取中文，可能读取了中文一半的字节就转换成字符数据了
为了能够正确读取数据，将字节码数组的长度设置为new byte[1024*8]即可，但是偶尔还是会出现中文乱码
<span>如何实现随机访问</span>
.getFilePointer() 获取当前文件内容的偏移量，偏移量类似于下标,返回一个long类型，空文件返回文件指针为0
.seek() 设置偏移量
读取，写入一个字节都会令偏移量发生改变，而且读写内容也是根据偏移量发生改变，设置偏移量从而可以设置读写文件不同位置的内容
每一次运行eclipse时，偏移量都是从0开始
<span>如复制文件练习</span>
练习：复制文件操作，先读后写，可以采用单字节复制或多字节复制，都不会出现乱码，多字节复制效率最高
当读取中文，可能读取了中文一半的字节就转换成字符数据了，所以出现了乱码，但是复制文件却是读完之后直接以原字节的形式复制写入到文件里了，期间没有转换成字符数据
<p class="pre-cmd">public static void main(String[] args) throws IOException {  //注意这里RandomAccessFile会抛出异常
   RandomAccessFile raf=new RandomAccessFile("c:"+File.separator+"a.text", "r"); //只读
   RandomAccessFile raf1=new RandomAccessFile("c:"+File.separator+"b.text", "rw"); //写入
   int len=-1;
   while((len=file.read())!=-1){   //每次读取一个字节个数，如果是-1说明为空
      raf1.write();
   }
   raf.close();
   raf1.close();
}</p>
练习，在a.text文件的末尾插入b.text的文件内容，关键是定位到a.text的末尾偏移量
<p class="pre-cmd">public static void main(String[] args) throws IOException {  //注意这里RandomAccessFile会抛出异常
   RandomAccessFile raf=new RandomAccessFile("c:"+File.separator+"b.text", "r"); //只读
   RandomAccessFile raf1=new RandomAccessFile("c:"+File.separator+"a.text", "rw"); //写入
   File file=new File("c:"+File.separator+"a.text");
   raf1.seek(file.length())  //定位到a.text文件的末尾
   System.out.println(raf1.getFilePointer());
   int len=-1;
   //将b中内容复制到a中
   while((len=file.read())!=-1){   //每次读取一个字节个数，如果是-1说明为空
      raf1.write();
   }
   raf.close();
   raf1.close();
}</p>
练习 将b.text的文件内容插入到在a.text文件指定位置后
思路 1.先找到a文件中的偏移量位置，将偏移量后的文件内容复制到临时文件中，
     2.将b文件内容复制到a文件指定位置后中
     3.之后将临时文件内容插入到a文件的末尾
易错：读写的复制操作很简单，关键是.seek()偏移量定位问题，还有就是先close()关闭流，再delete()删除文件问题
<p class="pre-cmd">public static void main(String[] args) throws IOException {  //注意这里RandomAccessFile会抛出异常

   RandomAccessFile raf=new RandomAccessFile("c:"+File.separator+"a.text", "rw");
   RandomAccessFile raf1=new RandomAccessFile("c:"+File.separator+"b.text", "rw");
   File fileTemp=File.createTempFile("test",".temp");  //创建临时文件
   RandomAccessFile raf2=new RandomAccessFile(fileTemp); //为了后续可以对临时文件读取操作

   raf.seek(3)  //定位到a.text文件指定的偏移量位置
   int ch=-1;
   //将a指定位置后的内容复制到临时文件中
   while((ch=raf.read())!=-1){   //每次读取一个字节个数，如果是-1说明为空
      raf2.write(ch);
   }
   raf2.seek(0);  //指定临时文件的偏移量，下次操作从头开始读写，这个位置容易被忽略
  //将b中内容插入到a文件指定位置
  raf.seek(3)；
  int ch1=-1;
    while((ch1=raf1.read())!=-1){
      raf.write(ch1);
   }
  //将临时文件中内容插入到a文件末尾
  int ch2=-1;
    while((ch2=raf1.read())!=-1){
      raf.write(ch2);
   }

   raf.close();
   raf1.close();
   raf2.close();
   raf2.delete();
   //先关闭流，再清除临时文件
}</p>

          </pre>
          <h3>IO流简介</h3>
          <pre>
流的定义：流是指一连串流动的字符,是以先进先出方式发送信息的通道。
流顺序的读写方式，只能顺序的向后进行读取货写出，而不能回退
流的写操作时覆盖性操作，会将之前内容覆盖掉
所有的流都是单一方向的，单一的一个流不可能即可读又可写
读写数据一定是建立在节点流的基础上进行的
高级流不能独立存在，一定是基于处理流链接数据源
流的传输是基于字节的传输，底层是以二进制传输，所以好多情况下要将传输内容转换成byte字节格式传输，且传输是还应设置对应的编码格式
流用完就要close()关闭
./  当前目录
读取文件三步骤
int len=-1;
byte[] bys= new byte[1024];
while((len=in.read(bys))!=-1){
  output.write(bys, 0, len);  //len表示读到了多少则写入多少
}
input.close();   //释放资源
<span>① IO流的分类</span>
1）IO流按流向分
输入流 InputStream 读数据
输出流 OutStream   写数据
2）按读写单位分
字节流：读写单位是字节  （中文容易出乱码）
字符流：读写单位是字符
3）按照流是否直接与特定的地方(如磁盘、内存、设备等)相连，分为节点流和处理流两类
节点流：低级流，可以从或向一个特定的地方（节点）读写数据，理解为两个节点间直来直往的交流传输
处理流：理解为两个节点间存在一定封装后进行交流传输，不能独立存在，必须链接在其他流上，目的是当数据流经过档期流时对其进行些加工处理，简化我们队数据的实际操作
io的流连接：高级流连接一个高级流，高级流最底层连接一个低级流，高级流一定是建立在低级流的基础上
例如PrintWriter建立在字符转换流上，字符转换流建立在文件字节流上
 <span>② 字节流</span>
1） 抽象基类（超类）
InputStream() 抽象类，字节输入流的父类
OutputStream() 抽象类，字节输出流的父类
上述两种流都是所有字节输入输出流的父类
2）字节流可以读取一切的数据，包括图片，音频，视频,复制文件的后缀一定要是兼容的
3）以哪种编码写入的数据，就以哪种编码读取数据
String.getBytes(String charset) 写数据
new String(byte[] by,int offset, int len ,String charset) 读数据
重点是String chart设置为"UTF-8"</pre>
          <h3> 字节流-文件流</h3>
          <pre>
<span>① FileOutputStream()</span>
文件流属于字节流，算是节点流（低级流），在节点中操作数据，所以他也有抽象基类（超类）InputStream()，OutputStream()；且FileOutputStream()是其派生类
FileOutputStream()输出流是个低级的节点流,与RandomAccessFile不同在它不是基于指针，无偏移量存在
<span>1）构造方法</span>
覆盖写模式
FileOutputStream(File file)；
FileOutputStream(String filename)；
追加写模式
FileOutputStream(File file，Boolean append)； append为true表示可以追加写内容，以防覆盖之前的内容
文件流实例化时也会抛出异常，以防文件不存在时抛出异常
<span>2）写入方法</span>
.write(int b) 向文件内写入一个字节，且覆盖之前的文件内容，如果写数据时文件不存在，会自动创建文件
.write(byte[] bys) 向文件内写入多个字节  .write("hello".getBytes());
.write(byte[] by,int offset, int len)
.close()关闭流
注意：如果创建输出流对象时，指定文件不存在，输出流会自动创建，但是输入流就不出创建，因为出入流属于读数据
<p class="pre-cmd">public class FileOutStreamTest {
  public static void main(String[] args) throws IOException {
    FileOutputStream fileOut=new FileOutputStream("c:"+File.separator);
    fileOut.write(97);  // 写入一个字节
    fileOut.write("hello".getBytes());  // 写入多个字节
    fileOut.close();   // 释放资源
  }
}
</p>
<span>② FileInputStream()</span>
FileInputStream()是字节流，文件流，节点流，低级流，读取数据功能
<span>1）构造方法</span>
FileInputStream(File file)；
FileInputStream(String filename)；
<span>2）读取方法</span>
.read()         -int 一次读取一个字节数据，返回int类型
.read(byte[] b) -int 按照先按设置的byte字节数组读取，如果设置的数组长度大于文件实际字节长度，则返回值为实际读取到的字节长度
<p class="pre-cmd">public class FileInputStreamTest {
 public static void main(String[] args) throws IOException {
  // 利用字节流，复制文件
  FileInputStream in=new FileInputStream("c:"+File.separator+"a.text");
  FileOutputStream out=new FileOutputStream("c:"+File.separator+"a.text", true);
    int len=-1;
    byte[] bys= new byte[1024];
    while((len=in.read(bys))!=-1){
      out.write(bys, 0, len);  //len表示读到了多少则写入多少
    }
    //释放资源
    in.close();
    out.close();
  }
}
</p></pre>
          <h3>字节流-缓冲流</h3>
          <pre>
<span>① BufferedOutputStream()</span>
缓冲流也是处理流（高级流）,缓冲流是在缓存区读取数据，可以加快读写效率
BufferedOutputStream()是字节缓冲流，继承于OutputStream，作用是为另一个输出流提供“缓冲功能”。
BufferedOutputStream类中将要写入到底层io流中的数据先凑个整，然后再一起写入底层io流中，这样就大大节省了io操作，大大提高了io利用率，写一次io是很费资源的。这样也出现了一个问题，假设向硬盘中写入一个文件，文件最后数据比默认值8192个字节小，则BufferOutputStream就不会将这些数据写入底层io流中，造成文件缺失，因此就需要在close()前调用flush（）方法，强制将还没有装满buf数组的数据写入底层io中。
其实BufferedOutputStream()与FileOutputStream()用法一致，只是高在了效率上
<span>1）构造方法</span>
BufferedOutputStream(OutputStream os)；
<span>2）实例方法</span>
.write(int b) 向文件内写入一个字节，如果写数据时文件不存在，会自动创建文件
.write(byte[] bys) 向文件内写入多个字节  .write("hello".getBytes());
.write(byte[] by,int offset, int len)
.flush() 刷出缓存中的输出流
.close() 在关闭流之前，先将缓存区中的数据一次性刷出
<p class="pre-cmd">public static void main(String[] args) throws IOException {
  FileOutputStream fos=new FileOutputStream("c:"+File.separator+"a.text");
  BufferedOutputStream bos=new BufferedOutputStream(fos);
  bos.write(97);   // 写入一个字节
  bos.write("hello".getBytes());  // 写入多个字节
  bos.close();  // 释放资源，fos不需关闭因为他没有读写操作
} </p>
<span>② BufferedInputStream()</span>
<span>1）构造方法</span>
BufferedInputStream(InputStream os)；
<span>2）实例方法</span>
.read() -int  一次读取一个字节数据，返回int类型
.read(byte[] b) -int 按照先按设置的byte字节数组读取，如果设置的数组长度大于文件实际字节长度，则返回值为实际读取到的字节长度
.close() 在关闭流之前，先将缓存区中的数据一次性刷出
<p class="pre-cmd">public static void main(String[] args) throws IOException {
  // 利用字节流，复制文件
  FileInputStream fis=new FileInputStream("c:"+File.separator+"a.text");
  BufferedInputStream bis=new BufferedInputStream(fis);
  int len=-1;
  byte[] bys= new byte[1024];   //我这里仅仅是打印输出严重，如果文档超过1kb是有乱码的，不想出现乱码最好通过复制文件去验证输出
  while((len=in.read(bys))!=-1){
    System.out.println(new String(bys, 0, len));
  }
  bis.close(); //释放资源
}
</p>
利用缓冲流复制图片
<p class="pre-cmd">public static void main(String[] args) throws IOException {
  //设置缓存输入流读取
  FileInputStream fis=new FileInputStream("c:"+File.separator+"text.jpg");
  BufferedInputStream bis=new BufferedInputStream(fis);
  //设置缓存输出流写入
  FileOutputStream fos=new FileOutputStream("c:"+File.separator+"textcopy.jpg");
  BufferedOutputStream bos=new BufferedOutputStream(fos);
  int len=-1;
  byte[] bys= new byte[1024];    //我是复制功能，字节长度我1024也不会出现乱码
  while((len=bis.read(bys))!=-1){
    bos.write(bys, 0, len);
    bos.flush();    //刷出缓存输出流
  }
  //释放资源
  bis.close();
  bos.close();
}</p></pre>
          <h3>对象流</h3>
          <pre>
对象流：先将java文件转换成一组字节，再将这组字节转换为java文件
对象流写出对象是时必须对该对象序列化，必须实现Serializable接口
例如将一个Person类利用对象流进行操作
1.先将person实例转换为一组字节
2.将这组字节写入到文件person.obj中
3.创建对象输出流（作用是将对象转换为一组字节，将一个对象按照其结构转换为一组字节的过程称为对象序列化）
  常见文件输入流（作用是将一组字节写入到文件，将一组字节写入文件（写入到磁盘做长久保存）这个过程称为数据持久化）
<span>① ObjectOutputStream()</span>
对象流也是处理流（高级流）
对象的输出流 : 主要的作用是用于写入对象信息
<span>构造方法</span>
ObjectOutputStream(OutputStream os)
<span>实例方法</span>
.writeObject(object) 此处需要object类中Serializable接口序列化
<span>② ObjectInputStream()</span>
对象的输入流 : 主要的作用是用于读取对象信息
<span>构造方法</span>
ObjectInputStream(InputStream os)
<span>实例方法</span>
.readObject(object)   这时返回的是object需要对象强转
<p class="pre-cmd">public class ObjectOutputStreamTest   {
  public static void main(String[] args) throws IOException,ClassNotFoundException {
    FileOutputStream fos=new FileOutputStream("a.text");
    ObjectOutputStream oos=new ObjectOutputStream(fos);
    Person person =new Person("liming", 123, "boy");
    oos.writeObject(person); //person一定要有Serializable接口
    oos.close();
    FileInputStream fis=new FileInputStream("a.text");
    ObjectInputStream ois=new ObjectInputStream(fis);
    Person person_i=(Person) ois.readObject();  //这里一定要强转，因为readObject()返回的是一个object类型
    System.out.println(person_i.age);
  }
}</p></pre>
          <h3>对象流序列化</h3>
          <pre>
对象是存于内存的，有时需要将对象从内存中保存到硬盘中，或传输到另一个计算机中，这时就需要对象序列化
<span>① 序列化与反序列化 - serialVersionUID</span>
序列化：将对象转换成一个字节序列
反序列化：将一个字节序列转换成对应的对象
序列化的操作
在ObjectOutputStream()写入对象流时要，引入的object中要利用serialVersionUID实现序列化，
Serializable接口中没有任何抽象方法，实现类也不需要重写任何方法，Serializable接口只是一个序列化标志
反序列化的操作
通过ObjectInputStream()对象输入流实现，前提是反序列化的对象要有Serializable接口，标志该结构序列化
序列化的应用场景
1.将对象存储到磁盘里 2.将对象用于网络传输
<span>② 序列化ID - serialVersionUID</span>
当没有人为给实体类中定义一个名为“serialVersionUID”、类型为long的变量时；
Java序列化机制会根据编译时的class自动生成一个serialVersionUID作为序列化版本比较，
这种情况下，只有同一次编译生成的class才会生成相同的serialVersionUID。譬如，当我们编写一个类时，
随着时间的推移，我们因为需求改动，需要在本地类中添加其他的字段，这个时候再反序列化时便会出现serialVersionUID不一致，
导致反序列化失败。那么如何解决呢？便是在本地类中添加一个“serialVersionUID”变量，值保持不变，便可以进行序列化和反序列化。
eclipse可以通过快捷方式生成serialVersionUID
一般来说serialVersionUID有两种生成方式：
一个是默认的1L，比如：private static final long serialVersionUID = 1L;
一个是根据类名、接口名、成员方法及属性等来生成一个64位的哈希字段，比如：private static final long serialVersionUID = -8940196742313994740L;之类的
一般来说在使用封装方法的类都要利用Serializable接口表示序列化，且都要自定义serialVersionUID，因为封装方法的类多半都是要进行网络数据传输的
<span>③ 序列化瘦身 - transient</span>
一个对象只要实现了Serilizable接口，这个对象就可以被序列化，只要这个类实现了Serilizable接口，这个类的所有属性和方法都会自动序列化，但在实际开发过程中，我们常常会遇到一个类的有些属性需要序列化，而其他属性不需要被序列化，打个比方，如果一个用户有一些敏感信息（如密码，银行卡号等），为了安全起见，不希望在网络操作（主要涉及到序列化操作，本地序列化缓存也适用）中被传输，这些信息对应的变量就可以加上transient关键字。换句话说，这个字段的生命周期仅存于调用者的内存中而不会写到磁盘里持久化。
总之，java 的transient关键字为我们提供了便利，你只需要实现Serilizable接口，将不需要序列化的属性前添加关键字transient，序列化对象的时候，这个属性就不会序列化到指定的目的地中。
1）一旦变量被transient修饰，变量将不再是对象持久化的一部分，该变量内容在序列化后无法获得访问。
2）transient关键字只能修饰变量，而不能修饰方法和类。注意，本地变量是不能被transient关键字修饰的。变量如果是用户自定义类变量，则该类需要实现Serializable接口。
3）被transient关键字修饰的变量不再能被序列化，一个静态变量不管是否被transient修饰，均不能被序列化。
<span>④ 序列化对象中的子对象也要序列化</span>
1）当一个父类实现序列化，子类自动实现序列化，不需要显式实现Serializable接口；
2）当一个对象的实例变量引用其他对象，序列化该对象时也把引用对象进行序列化；</pre>
          <h3>字符流</h3>
          <pre>
字符流：读写单位是字符（char），每次读写都是一个字符，字符流只能操作文本数据，不像字节流可以操作其他数据类型文件，效率比字节流高，字符流的底层仍然是基本的字节流，
字符流封装了字符的编码解码方法，用字符读数据时一定涉及到了字符数据与字节数据的相互转换，所以有时就要设置字符集类型是gbk还是utf-8
抽象基类
Reader：字符输入流的父类
Writer：字符输出流的父类
Reader和Writer的子类是OutputStreamReader和IntputStreamWriter
以Writer、Reader结尾的流都是字符流
          </pre>
          <h3>字符流-转换流</h3>
          <pre>
转换流最大的作用就是承上启下
由于java提供的高级流都只能连接字符流上，而不能直接连接到字节流上，而基本上低级流都是字节流，对此我们可以使用装换流来将字节流转换为字符流提供给其他高级流使用
<span>① OutputStreamWriter</span>
Writer的子类是OutputStreamWriter
<span>1) 构造方法</span>
OutputStreamWriter(OutputStream os);
OutputStreamWriter(OutputStream os , String charsetName);  // charsetName指定字符集，避免跨平台出现乱码
<span>2) 实例方法</span>
.write(int )        写入一个字符，如果写数据时文件不存在，会自动创建文件
.write(char[] chs)  将给定的字符数组中的所有字符写出
.write(String str)  将给定的字符串写出
.write(char[] by,int offset, int len)
.close() 关闭流释放资源
<p class="pre-cmd">public static void main(String[] args) throws IOException {
  OutputStreamWriter osw=new OutputStreamWriter(new FileOutputStream("osw.text"));
  osw.write("nihao");  // 省去了字节流中的.getBytes()操作
  osw.close();  //这里不关闭流，就会造成文件中无法写入内容
  }</p>
<span>②InputStreamReader</span>
Reader的子类是IntputStreamReader
<span>1) 构造方法</span>
inputStreamReader(InputStream is);
inputStreamReader(InputStream is , String charsetName); // charsetName指定字符集，避免跨平台出现乱码
<span>2) 实例方法</span>
.read(int )         读一个字符
.read(char[] chs)   读一个字符数组
.close() 关闭流释放资源
 案例一，利用字符流-转换流 读文件
<p class="pre-cmd">
public static void main(String[] args) throws IOException {
  // 我利用InputStreamReader读一个文件
  InputStreamReader isr=new InputStreamReader(new FileInputStream("osw.text"), "GBK");
  char[] chars =new char[1024];  //这里是1kb是有可能出现乱码
  int len=-1;
  while((len=isr.read(chars))!=-1){
     System.out.println(chars);
  }
}</p>
案例二，利用字符流-转换流 复制文件
<p class="pre-cmd">public static void main(String[] args) throws IOException  {
  InputStreamReader isr=new InputStreamReader(new FileInputStream("osw.text"),"GBK");
  OutputStreamWriter osw=new OutputStreamWriter(new FileOutputStream("osw_new.text"), "GBK");
  //注意创建字符转换流时是通过new FileInputStream()；确定了一个文件地址
  char[] chars1 =new char[1024];
  int len1=-1;
  while((len1=isr.read(chars1))!=-1){
    osw.write(chars1, 0, len1);
    //这里有一个规则，怎么读的怎么写 例如读一个字符写一个字符，读一个字符数组，写一个字符数组
  }
  //释放资源
  isr.close();
  osw.close();
 }</p></pre>
          <h3>字符流-缓存流</h3>
          <pre>
缓冲字符流：缓冲字符流由于内部有缓冲区读写字符效率很高，并且字符流的特点是可以按行读写字符串
缓冲字符流：BufferedWriter,BufferedReader
缓冲字符流的优点是它可以写入一行数据，也可以读出一行数据
<span>① PrintWriter</span>
PrintWriter也是缓冲字符流，它内部总是链接BufferedWriter，除此之外PW还提供了自动刷新功能，所以更常用
<span>1) 构造方法</span>
PrintWriter(File file)
PrintWriter(String fileName)
PrintWriter(File file ，String charset)    //指定字符集
PrintWriter(String fileName ，String charset)  //指定字符集
当PrintWriter构造方法中第一个参数为流(字节流或字符流)，那么它支持的另一个重载方法可以加入boolean值，若该值为true，
则当前的PrintWriter具有自动刷新功能，及每次调用println()方法写出一行字符串后会自动调用flush将数据刷出，但print()方法不会调用flush()
PrintWriter(OutputStream out);
PrintWriter(Writer out);
PrintWriter(OutputStream out , boolean autoFlush);  // OutputStream 字节流
PrintWriter(Writer out , boolean autoFlush);  // Writer 字符流
<span>2) 实例方法</span>
print()    写入内容不换行
println()  写入内容后自动换行
<p class="pre-cmd">public static void main(String[] args) throws FileNotFoundException, UnsupportedEncodingException {
  // 流参数，及调用flush刷出每一行数据
  PrintWriter pw= new PrintWriter(new FileOutputStream("pw2.text"),true);
  pw.print("File流第一行数据：");
  pw.println("我该换行了");
  // 流参数，且在流参数中设置字符集，及调用flush刷出每一行数据
  PrintWriter pw1= new PrintWriter(new OutputStreamWriter(new FileOutputStream("pw3.text"), "GBK"), true);
  pw1.print("（Writer）流第一行数据：");
  pw1.println("我该换行了");
}</p>
<span>② BufferedReader</span>
缓冲字符输入流：缓冲字符流由于内部有缓冲区读写字符效率很高
<span>1) 构造方法</span>
BufferedReader(Reader reader)  // Reader说明是字符流
<span>2) 实例方法</span>
.read(int )          读一个字符
.read(char[] chs)    读一个字符数组，读到末尾返回-1
.readLine()          一次读取一行数据，返回类型String，读不到返回null，因为它是根据换行符来判断是否读到末尾，所以是不会返回换行符的
.close() 关闭流释放资源
<p class="pre-cmd">public static void main(String[] args) throws IOException {
  BufferedReader bf=new BufferedReader(new InputStreamReader(new FileInputStream("pw3.text"),"GBK"));
  char[] chars=new char[1024];
  int len=-1;
  while((len=bf.read(chars))!=-1){
   System.out.println(new String(chars,0,len));
  }
  String str=null;  // readLine()读取不到换行符返回null 不返回-1
  System.out.println(bf.readLine());
  while((str=bf.readLine())!=null){
   System.out.println(str);
  }
}</p></pre>
          <h3>异常处理</h3>
          <pre>
<span>① Throwable的两个子类</span>
Error      java运行环境出现的错误  你解决不了的
Exception  设备故障，文件损坏异常   你能解决的
<span>② Exception异常的分类</span>
可检测异常   不检测这个异常，编译器就不允许进行，也就是在编译期编译器可以解决的异样，处理方式必须在编译其给出
非检测异常   在运行期出现的异常，编译期没有识别出这个异常
<span>③ RuntimeException类属于非检测异常</span>
常见的RuntimeException
NullPointerException空指针异常类，当应用程序试图在需要对象的地方使用 null 时，抛出异常
ClassCastException类型强制转换异常，当试图将对象强制转换为不是实例的子类时，抛出该异常
ClassNotFoundException  类没找到时，抛出该异常
NoSuchMethodException 在类中无法找到某一特定方法时，抛出该异常
NoSuchElementException,	方法未找到异常
IndexOutOfBoundsException, 下标越界异常
<span>④ 异常处理方法</span>
在开发中，如果去调用别人写的方法时，是否能知道别人写的方法是否会发生异常？这是很难判断的。针对这种情况，Java总允许在方法的后面使用throws关键字对外声明该方法有可能发生异常，
这样调用者在调用方法时，就明确地知道该方法有异常，并且必须在程序中对异常进行处理，否则编译无法通过。还有一种就是开发着在书写代码时，在发生异常的时候就已经获取到异常并提供了
解决方法；这就是抛出异常和捕获异常
<span>1) 抛出异常</span>
如果在定义声明某个方法式出现异常，在方法声明的后面 throws异常类型
throws 在方法名的后面声明抛出异常类型，可以抛出多个异常类型
throw  在方法体内部抛出异常对象（异常对象的类就是throws中的异常类型），在异常对象中可以给出异常提醒信息，一个方法可以有多个throw
eg: throw new RuntimeException("这里报错了")
通常方法内部利用throw抛出什么异常了，就要在方法上用throws声明该异常，这样在运行该方法时才会提醒要利用try..catch捕获异常，只有RuntimeException的抛出不强制要求，RuntimeException为常识性异常
永远不要在main方法上使用throws，main方法是java虚拟机调用的程序可能被杀掉
<span>2) 捕获异常</span>
try{
 可能出现的异常
}catch(...Exception e){   //判断是否符合要捕获的异常类型
  当try中代码出错，在这里错误信息提示
  System.out.print(e.getMessage()); 输出异常详细信息
  e.printStackTrace();              输出错误的堆栈信息
}catch(...Exception e){   //catch可以有多个，判断多个异常类型
  e.printStackTrace();
}catch(Exception e){   //写Exception避免出现考虑不到的异常类型

}finally{
   不管是否出现异常，都会执行finally，通常用来释放资源，
}
1）当try中代码异常就会进入到catch中
2）有多个catch捕获异常则常与throw来指定异常类型来配合一起使用
3）仅有一个catch()时括号里直接写为Exception不错所有异常，或者有多个catch时最后一个catch括号里直接写为Exception，因为存在多个catch，那么一定是子类异常在前，父类异常在后，应该在最后一个catch中写入Exception捕获所有的异常。
4）就算try中出现return当前方法结束了，依旧会执行finally中的代码逻辑
<span>3) 注意：</span>
1）如果一个方法内部抛出异常，程序执行到异常代码时，会从方法体中跳出，后面的代码不会执行
2）如果捕获异常，解决方案给出，视为异常解决掉了，异常后面的代码还会执行
3）如果子类继承一个父类，子类重写父类抛出异常的方法方时，子类抛出异常有几点注意
  子类可以不抛出异常
  子类可以抛出父类一部分异常
  子类抛出的异常类，不可是父类抛出异常的父类
  子类抛出的异常类，可以是父类异常类的子类
  子类不可以抛出父类没有的异常类
<span>④ final、finally、finalize的区别</span>
final：一个修饰符，用来修饰变量、方法、类
finally：和try..catch配合使用,通常用来释放资源
finalize()：是GC回收时调取的一个方法，是object类中的一个方法，通常会被子类重写
public class Person{
   public void finalize(){
      //在对象被回收之前，调用此方法，
      //此方法通常用在对象回收前做最后的资源释放操作
   }
}</pre>
          <h3>自定义异常</h3>
          <pre>
自己根据业务场景写非检测异常类,通常也是为了描述业务逻辑是否合法，自定义类名称一定要见名知意
实现
1）自定义类继承Exception/RuntimeException
eg:UserNotFoundException extends Exception/RuntimeException（常用）
2）在自定义类中根据eclipse生成所有构造方法，同时声明序列化版本号
<p class="pre-cmd">// 自定义异常类
package ExceptionDemo;
public class UserNotFoundException extends RuntimeException {
	/**
	 *  查不到用户则返回null，如果用户是null的话就报自定义异样UserNotException
	 */
	private static final long serialVersionUID = -953769186664293269L;

	public UserNotFoundException() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserNotFoundException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
		// TODO Auto-generated constructor stub
	}

	public UserNotFoundException(String message, Throwable cause) {
		super(message, cause);
		// TODO Auto-generated constructor stub
	}
	public UserNotFoundException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}

	public UserNotFoundException(Throwable cause) {
		super(cause);
		// TODO Auto-generated constructor stub
	}
}
// 抛出异常类
public class UserService {
	public Users findUser(){
		Users user=new Users();
		user=null;
	    if(user==null){
	       throw new UserNotFoundException("没有查到用户");  // throw抛出异常
	    }
		return user;
	}
}
// 获取异常类
public class UserTest {
	public static void main(String[] args) {
       UserService us=new UserService();
       try {
    	   us.findUser();
    	   System.out.println("run");
	   } catch (UserNotFoundException e) {   //try..catch 捕获异常信息
		   System.out.println(e.getMessage());
		   e.printStackTrace();
	   }
	}
}
</p>
          </pre>
          <h3>多线程</h3>
          <pre>
<span>① 进程和线程</span>
进程:一个程序运行起来之后就是进程，或正在内存中运行的程序，占用独立的内存空间
进程内部单位是线程，线程是进程的执行单位
一个线程是一个进程的顺序执行流
系统会为每个进程分配独立的内存空间，线程都在进程的空间里公用同一块资源
在同一个进程中，如果有多个任务同时执行，那么我们把这种情况叫线程的并发执行。
<span>② 线程的并发执行原理：</span>
线程运行是需要时间片，时间片是cpu分配给各个线程的时间，每个线程被分配的时间段称作它的时间片
线程的并发执行并不是真正的同时进行中，某一时刻只能有一个线程在执行，多个线程直接进行抢占时间片的快速切换，从而看起来像在同时进行
<span>③ 线程的特点和优点</span>
当系统运行一个进程后，该进程会自动申请一个主线程运行或首要线程，main就是一个主线程
线程可以复用处理器资源，可以充分利用计算资源避免浪费，可以'同时（并发）'执行多个任务
<span>④ 线程的生命状态</span>
新建状态： new 创建一个线程
就绪状态： Runnable 此线程具备除了时间片外的所有资源
运行状态： Runing抢占到时间片后进入运行状态
阻塞状态： Block 由运行状态被阻塞
死亡状态： Dead 线程结束，死亡线程只能垃圾回收，线程结束后不能重新启动
<span>⑤ 线程的创建方式</span>
<span>1）继承Thread类</span>
Thread是一个抽象类，子类继承Thread后重写run()方法，run()就是你要启动的线程代码，之后调用start()将线程提交到操作系统由操作系统进一步调用执行线程；启动线程时调用线程的start()方法而非直接调用run()方法，start()会将当前线程纳入到线程调度中（线程调度是抢占式的），进入就绪状态，之后开始抢占时间片，抢到之后开始执行run()方法里的代码
Thread.currentThread();   获取当前线程对象
thread.getName();         获取线程名称
<p>public class ThreadOne extends Thread{  //继承Thread抽象类
  @Override
  public void run() {  // 重写run方法
  super.run();
  for(int i=0;i<=9;i++){
    System.out.println(Thread.currentThread().getName()+"--"+i);
  }
 }
}
public class ThreadTest {
  public static void main(String[] args) {
  ThreadOne thread1=new ThreadOne();
  ThreadOne thread2=new ThreadOne();
  thread1.run();
  thread2.run();
  // start() 方法是在启动线程  run()只是启动了一个主线程main方法
  }
}</p>
<span>2）实现Runnable</span>
Runnable是一个接口，在实现类重写run()方法，之后在其他类中利用Thread(Runnable target)调用实现Runnable接口类中的方法,也就是说Runnable只有run方法，没有线程执行机制
Runnbale可运行、就绪状态，java已经将线程提交到os，但是没有获得执行机会，在操作系统中等待执行机会
<p class="pre-cmd">public class RunnablTest implements Runnable {
  @Override
    public void run() {
    for(int i=0;i<=9;i++){
      System.out.println(Thread.currentThread().getName()+"--"+i);
    }
  }
}
public class ThreadTest {
  public static void main(String[] args) {
    RunnablTest run=new RunnablTest();
    Thread thread1=new Thread(run);
    Thread thread2=new Thread(run);
    thread1.start();
    thread2.start();
  }
}</p>
上述两种方法比较
1.继承Thread，在类中将任务写出，任务和线程类是绑定的耦合度较高，
2.实现Runnable接口，实现类中将任务写出，此线程和任务是分离的
实现Runnable接口使用起来比较灵活，线程和任务是分离的，Thread继承调取任务方便
ps理解为：Thread是未启动线程对象且包含了任务   Runnable仅仅是任务对象没有执行机制
注意：run方法下不可以抛出异常
<span>3）匿名内部类创建线程对象</span>
通过使用匿名内部类创建线程对象，可以简化代码的复制程度，当一个线程仅需要一个实例任务时，我们通常使用该方法
<p class="pre-cmd">public class ThreadOne {
  public static void main(String[] args) {
    //1) Thread的匿名内部类
    Thread thread=new Thread(){
      @Override
      public void run() {
        System.out.println("Thread的匿名内部类");
      }
     };
     thread.start();

    //2) Runnable的匿名内部类
     Runnable run=new Runnable() {
      @Override
      public void run() {
        System.out.println("Runnable的匿名内部类");
      }
    };
    Thread thread2=new Thread(run);
    thread2.start();
  }
}</p>
4）线程的复用案例，重点在于理解这个复用的思想，其他代码可以借鉴
<p class="pre-cmd">// Thread继承的复用
public class Demo {
  public static void main(String[] args) {
     // 利用new在内存中创建了两个对象地址,这两个对象互不影响
    DemoThread t1=new DemoThread();
    DemoThread t2=new DemoThread();
    t1.str="A";
    t2.str="B";
    t1.start();  //没有start()线程不会启动
    t2.start();
  }
}
class DemoThread extends Thread{
  String str;
  @Override
  public void run() {
    // TODO Auto-generated method stub
    super.run();
    for(int i=0;i<100;i++){
      System.out.println(this.getId()+","+str);
      // Thread.currentThread().getId() = this.getId()
    }
  }
}
// Runnable接口实现方法
public class Demo {
  public static void main(String[] args) {
     // 利用new在内存中创建了两个对象地址,这两个对象互不影响
    DemoThread run1=new DemoThread();
    DemoThread run2=new DemoThread();
    run1.str="A";
    run2.str="B";
    Thread t1=new Thread(run1);
    Thread t2=new Thread(run2);
    t1.start();
    t2.start();
  }
}
class DemoThread implements Runnable{
  String str;
  @Override
  public void run() {
    for(int i=0;i<100;i++){
      //在方法中获取正在执行方法的当前线程
      Thread t=Thread.currentThread();
      System.out.println(t.getId()+","+str);
      // 这里就不能用this了，Runnable没有继承线程方法
    }
  }
}
</p>
<span>⑥ 线程API</span>
.currentThread();   静态方法，返回thread类型，获取当前线程对象
.sleep(long ms);    静态方法，在指定的毫秒值内，让线程进入阻塞状态，释放时间片，阻塞过后进入就绪状态，需要抛出中断异常，sleep不是中断的功能，是休眠延迟
.yield()            静态方法，礼让其他线程一部分时间，让其他线程运行，让当前线程进入就绪状态，准备抢占时间片
.join()             实例方法，当a线程运行到某个时刻通过join将b线程加入尽力，等b线程运行完毕后再运行a线程剩余部分，通常鞋套多个线程同步问题,要添加try..catch异常捕获
给线程起名字
.setName(String name)      实例方法，
new Thread(Runnable target，String name)
 获取线程相关信息方法
.getId();        - long    返回该线程的标识
.getName();      - String  获取线程名称
.isAlive()       - boolean 测试线程是否处于活动状态
.isInterrupted() - boolean 测试线程是否中断
.interrupt()     - void 打断线程sleep()休眠期，sleep()进入catch异常
.getPriority()   - int     返回线程的优先级
<span>⑦ 线程的优先级</span>
线程的切换是由线程调度来控制的，我们无法代码来控制，但是我们可以通过提高线程的优先级来最大改善线程获取时间片的几率
线程的优先级分为10个级别，1级最低，10级最高，一般线程都是5级中间级
Thread.MIN_PRIORITY
Thread.MAX_PRIORITY
Thread.NORM_PRIORITY
<span>⑧ 设置优先级方法</span>
.setPriority(int priority)
.setPriority(Thread.MIN_PRIORITY)
.setPriority(10)
<p class="pre-cmd">public class ThreadApi {
 public static void main(String[] args) {
    System.out.println(Thread.currentThread());
    System.out.println(Thread.currentThread().getName());
    System.out.println(Thread.currentThread().getId());
    System.out.println(Thread.currentThread().getPriority());
    System.out.println(Thread.currentThread().isAlive());
    System.out.println(Thread.currentThread().isInterrupted());
    // join练习 同时启动下载线程和图片展示功能
    Thread downLoad=new Thread(){
      @Override
      public void run() {
        System.out.println("开始下载");
        for(int i=0;i<=10;i++){
          System.out.println("下载进度--:"+i+"0%");
        }
        System.out.println("下载完成");
      }
    };
    Runnable run=new Runnable() {
      @Override
      public void run() {
      System.out.println("图片准备");
        try {
          downLoad.join();
        } catch (InterruptedException e) {
          // TODO Auto-generated catch block
          System.out.println("图片下载失败");
          e.printStackTrace();
        }
            System.out.println("展示图片");
        }
    };
    Thread show=new Thread(run);
    show.start();
    downLoad.start();
  }
}</p>
<span>⑨ 守护线程</span>
守护线程又称后台线程，一般来说创建的线程都是前台线程，
守护线程与普通线程没有什么区别，只需要根据Thread提供的方法来设定即可，void setDaemon(boolean)设置true为后台线程
只有所有前台线程结束，后台线程才会结束，如果没有前台线程存在，后台线程会被强制结束，GC就是一个后台线程
.isDaemon()   - boolean 测试线程是否为守护线程(后台线程)
.setDaemon()  设置成后台线程
之所以设置后台线程，我理解为是业务逻辑需要，因为后台线程伴生于前台线程，当前台线程结束后，后台线程立即结束，就算后台线程还有未执行代码，后台线程也要结束，后续代码不再执行
<p class="pre-cmd">public class DaemonTest {
  public static void main(String[] args) {
   Thread one=new Thread(){
    @Override
    public void run() {
      for(int i=0;i<=10;i++){
        System.out.println("我开始了!!!---"+i);
        try {
          Thread.sleep(1000);
        } catch (InterruptedException e) {
          // TODO Auto-generated catch block
          e.printStackTrace();
        }
      }
    }
   };
   Thread two=new Thread(){
      @Override
      public void run() {
        while(true){   //这里是关键，加个判断以免前台线程结束后，后台线程还在运行
          System.out.println("我跟随着~~~");
          try {
           Thread.sleep(1000);
          } catch (InterruptedException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
          }
        }
      }
    };
    two.setDaemon(true);
    System.out.println(one.isDaemon());
    System.out.println(two.isDaemon());
    one.start();
    two.start();
  }
}</p>
<span>⑩ 线程同步</span>
当两个线程并发访问(读写)了同一个临界资源将会出现线程并发安全问题，如果只进行了读取操作，是没有并发安全问题的，为了解决多线程并发访问的安全问题，我们可以将异步访问操作变为同步访问操作
实现方法：加关键字 synchronized 同步锁
<span>1) 修饰方法</span>
方法体里的所有代码都变成同步的
public synchronized（this） void run{  }  给线程任务方法添加synchronized修饰符，注意修饰方法锁的是什么
如果用synchronized修饰方法，相当给调用这个方法的对象调用了同步锁，就好比我上一行synchronized后加的this
当多个线程同时调用了synchronized修饰的方法，只有当一个线程结束后，另一个线程才能调用这个方法
<span>2) 修饰代码块</span>
synchronized (同步监视器 --锁对象（this）){  }  //括号里this是关键
修饰代码块，仅仅是同步了代码块里的代码，可以缩小同步范围，提高代码并发执行效率，通常使用this来作为锁对象
修饰方法和修饰代码块不同在于修饰方法锁的是调用这个方法的对象，修饰代码块锁的是你指定锁的对象，
<span>3) 修饰静态方法</span>
此时静态方法的调用也是同步的，这里加锁是当前类.class  --Class
public  static synchronized void doSomething(){}
在static后添加 synchronized修饰词
<span>4）线程同步案例</span>
<span>a）修饰方法</span>
<p class="pre-cmd">public class SynchronizedTest implements Runnable {
  @Override
  public synchronized void run() {
    // TODO Auto-generated method stub
    for(int i=0;i<=9;i++){
      System.out.println(Thread.currentThread().getName()+"--"+i);
    }
  }
}</p>
<span>b）修饰代码块</span>
<p class="pre-cmd">public class SynchronizedShop implements Runnable {
  @Override
  public void run() {
    System.out.println(Thread.currentThread().getName()+"--选衣服");
    try {
      Thread.sleep(2000);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
    synchronized (this) {   //在这里是同步进程 ,重点是这里的synchronized (this)
      System.out.println(Thread.currentThread().getName()+"--在试衣服");
      try {
        Thread.sleep(2000);
      } catch (InterruptedException e) {
        e.printStackTrace();
      }
    }
  }
}
public class SynchronizedBuy {
  public static void main(String[] args) {
    // TODO Auto-generated method stub
    SynchronizedShop syn=new SynchronizedShop();
    Thread thread1=new Thread(syn, "莉莉");
    Thread thread2=new Thread(syn, "莎莎");
    thread1.start();
    thread2.start();
  }
}
</p>
<span>c）修饰静态方法</span>
<p class="pre-cmd">package threadDemo;
public class SynchronizedStatic  {
  public static void main(String[] args) {
    Thread thread1=new Thread(){
      public void run() {
        StaticDemo.doSomething();
      }
    };
    Thread thread2=new Thread(){
      public void run() {
        StaticDemo.doSomething();
      }
    };
    thread1.start();
    thread2.start();
  }
}
class  StaticDemo {
  public  static synchronized void doSomething(){
    System.out.println(Thread.currentThread().getName()+"--开始任务");
    try {
      Thread.sleep(2000);
    } catch (InterruptedException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    }  // 延迟两秒看的更直观
    System.out.println(Thread.currentThread().getName()+"--结束任务");
  }
}</p>
<span>5) synchronized互斥性</span>
如果同一个对象中多个方法都是同步的，且他们的同步监视器对象都是同一个对象，此时我们就说这些方法是互斥的，他们不能同时被多个线程调用
<p class="pre-cmd">synchronized互斥性案例
public class Synchronizedhuchi  {
  public static void main(String[] args) {
    methodTest method=new methodTest();
    Thread thread1=new Thread(){
      public void run() {
        method.methodA();
      }
    };
    Thread thread2=new Thread(){
      public void run() {
        method.methodB();
      }
    };
    thread1.start();
    thread2.start();
    // 只有A方法执行完，才能执行B方法
  }
}
class  methodTest {
 public synchronized void methodA(){
    System.out.println("方法A开始");
    try {
      Thread.sleep(2000);
    } catch (InterruptedException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    }
    System.out.println("方法A结束");
	}
	public  synchronized void methodB(){
    System.out.println("方法B开始");
    try {
      Thread.sleep(2000);
    } catch (InterruptedException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    }
    System.out.println("方法B结束");
  }
}
</p>
<span>6) 线程的安全性</span>
<p class="pre-cmd">非线程安全执行效率高，但容易出现脏数据，一般都应用在在单线程造作中
StringBuilder是非线程安全的，StringBuffer是线程安全的
对于集合而言，常用的实现类ArrayList，LinkedList，HashSet他们都不是线程安全的
Collections可以将现有的集合都转换成线程安全的
Collections.synchronizedList(List);
Collections.synchronizedSet(Set);
Collections.synchronizedMap(Map);
</p>
<span>7) 线程池</span>
若有大量的数据请求，频繁的创建销毁线程，或创建过多的线程都会给系统带来卡顿，内存溢出的风险，所以我们在处理大并发量的业务逻辑时，常常使用线程池来管理和调度线程
线程池控制目的：
控制线程数量，避免大量线程造成导致系统崩溃
重用线程，避免频繁创建销毁线程
线程池的概念：
首先先创建一些线程，他们的集合称为线程池，当服务器接受到一个客户请求后，就从线程池中取出一个空闲的线程为之服务，
服务完后不关闭该线程，而是将该线程还回到线程池当中继续等待下一次的分配。
Executor                      是 Java 线程池的核心接口，用来并发执行提交的任务
ExecutorService               是 Executor 接口的扩展，提供了异步执行和关闭线程池的方法
Executors.newFixedThreadPool(int)   创建一个定长线程池，可控制线程最大并发数，超出的线程会在队列中等待
.execute(Runnable command)    用来接收一个Runnable接口的对象，并启动线程运行
.shutdown()                   等所有任务执行完毕后，关闭当前线程池，关闭后不再接受新任务
.shutdownNow()                立即中断所有任务，将未执行完毕的任务返回为list集合
<p class="pre-cmd">Runnable 任务
public class Task implements Runnable{
	@Override
	public void run() {
		System.out.println(Thread.currentThread().getName()+"--开始");
		try {
			Thread.sleep(2000 );
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			System.out.println("线程执行失败");
			e.printStackTrace();
		}
		System.out.println(Thread.currentThread().getName()+"--结束");
	}
}
// 线程池
public class ExecuteDemo {
	public static void main(String[] args) {
		ExecutorService service=Executors.newFixedThreadPool(2);
		for(int i=0;i<7;i++){
			Task task=new Task();
			service.execute(task);
		}
//	service.shutdown();   等线程任务都执行完毕后，自动关闭线程池
		List< Runnable> list=service.shutdownNow();  //立即关闭线程，将未执行线程返回为list数组
	    System.out.println(list);
	}
}</p></pre>
          <h3>TCP-通信协议</h3>
          <pre>
<span>TCP 通信特点：</span>
TCP是面向连接的可靠通信协议
1.TCP通信需要先建立连接通道再进行通信，
2.通信过程中如果出现错误，会自动进行数据重发保证数据的可靠发送
3.TCP是双工(双向)通信协议，可以同时实现上下通信
<span>使用socket</span>
1.建立连接
2.进行数据通信，如果通信错误，socket底层会自动重发数据
3.利用socket可以建立双向的流，实现双工通信
4.socket都是建立在线程上实现流的双向通信
<span>网络通信三要素</span>
IP
port端口号，标识进程的逻辑地址，有效端口号0-65535，0-1024系统保留端口号
传输协议，通信的规则,常见的协议TCP
<span>InetAddress类</span>
InetAddress类是Java包装用来表示IP地址的高级表示
.getLocalHost()          静态方法，返回本地主机的InetAddress对象
.getHostName()           实例方法，获取此本机主机名，返回String类型
.getHostAddress()        实例方法，获取InetAdress对象所包含的IP地址
<p class="pre-cmd">public class InteAddressTest {
  public static void main(String[] args) throws UnknownHostException {
    InetAddress address=InetAddress.getLocalHost();   //这里不是new一个对象了
    System.out.println(address);
    System.out.println(address.getHostName());
    System.out.println(address.getHostAddress());
  }
}</p>
<span>socket类通信</span>
socket 用来写网络通讯程序的，也称套接字，简单来说在远程机器，和本地机器各建一个socket，然后进行连接通讯即可。
socket类封装的是TCP的通信协议
<span>socket原理机制</span>
通信两端都有socket
数据在两个socket通过I0流传输
socket <=> ServiceSocket  <=>  socket
socket用于客户端  ServerSocket用于服务器端
<span>socket构造方法</span>
Socket(InetAddress address, int port)  创建一个本地socket流套接字并将其连接到指定ServerSocket，address服务器ip ，port服务器端口
<span>socket实例方法</span>
close()               关闭此套接字
getOutputStream()     返回此套接字的输出流，即写入数据
getInputStream()      返回此套接字的输入流，即读取数据
getPort()             返回接受的port的端口
read()                和流的用法一致，但注意的是read方法是阻塞方法，接受不到内容，会阻塞后续程序运行
<span>ServerSocket构造方法</span>
ServerSocket(int port)       创建特定端口的ServerSocket服务器套接字，并制定端口
<span>ServerSocket实例方法</span>
accept()    返回Socket类型，接收客户端的链接请求，建立链接，accept有阻塞作用，没有接收到客户端socket不会向下执行
<span>传输数据使用TLD协议 </span>
传输数据使用TLD协议  type length data
Client客户端
1. 先向服务器发送一个type类型
2. 向服务器发送length
3. 向服务器发送Data数据
Server服务器
1.接收type值
2.接收length值
3.接收data值
主要是利用DateOutputStream和 DateIntputStream
<p class="pre-cmd">客户端
public class Client {
  public static void main(String[] args) throws UnknownHostException, IOException {
    Socket socket=new Socket("localhost", 10086);
    OutputStream os=socket.getOutputStream();
    DataOutputStream ds=new DataOutputStream(os);
    ds.writeInt(1);
    String str="socketServer你好，我是客户端！";
    byte[] by=str.getBytes("GBK");   // 主要这里，我经常忘记此方法
    long len=by.length;
    ds.writeLong(len);
    ds.write(by);
    ds.flush();   // 一定要flush刷出数据
    ds.close();    // 关闭流
    socket.close();     // 关闭服务端socket
  }
}
服务端
public class Service {
  public static void main(String[] args) throws IOException {
    ServerSocket  ss=new ServerSocket(10086);
    Socket client=ss.accept();
    System.out.println("接收到客户端请求");
    InputStream is=client.getInputStream();
    // 客户端传多少字段，服务端取多少字段
    DataInputStream dis=new DataInputStream(is);
    int i= dis.readInt();
    if(i==1){
     System.out.println("文本传输");
    }
    long len =dis.readLong();
    byte[] by=new byte[(int)len]; // 这里强转成int
    int length =dis.read(by);
    System.out.println(new String(by, 0, length,"GBK"));
    System.out.println("请求结束");
    dis.flush();
    dis.close();     // 关闭流
    client.close(); // 关闭服务端socket
  }
}</p>
</pre>
          <h3>反射</h3>
          <pre>
反射：能够在运行期通过对象看到类的内部信息
反射用于检查类的信息，用于动态执行
一般在编译器操作对象是 ：找类，创建对象，调用方法 eg：Foo foo=new Foo() foo.demo()
反射一般是在运行期： 找类，加载类，创建对象,找方法,执行方法
反射里引入的包都是reflect包
<span>反射的动态执行</span>
动态加载类到方法区
Class.forName(classname) -记载类到方法区返回Class类型，通过该方法，客户手动指定调用那个类,classname表示类名，但是这个类名要从那个包下开始写起
动态创建对象
.newInstance()  Class的实例方法，返回Object类型,该方法实际是在调动类中的无参构造方法
检测对象类型
.getClass()      -- Class
检测类的属性
.getDeclaredFields()     -- Field[]
.getDeclaredField(name)  -- Field
检测类的方法
.getDeclaredMethods() -- Method[]
.getDeclaredMethod()  -- Method
.getName()  获取方法的名称
.invoke(obj,args)   该方法用来运行方法，obj表示该方法的对象，args表示传输方法参数，返回类型是Object类型，表示方法return返回数值
注意:反射获取类的两个重点方法是Class.forName(classname)和.getClass()
            <span>反射可以值行不可访问的方法</span>
不可访问的方法有
private修饰的方法和A包下的A类访问B包下B类的default方法
在利用反射执行不可访问的方法前是要使用setAccessible(true)，将不可访问的方法设置为可访问方法，下面是用法
.getDeclaredMethod(methodName).setAccessible(true);
下面是检测类中属性，方法的案例
<p class="pre-cmd">package classTest;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import sun.reflect.MethodAccessor;
public class Demo {
	public static void main(String[] args)  {
	  String str="aa";
	  test(str);
	}
	public static void test(Object obj){
		Class cla=obj.getClass();
		System.out.println(cla);
	    Field[] fields=cla.getDeclaredFields();
	    for(Field f:fields){
	    	System.out.println(f);
	    }
	    Method[] methods=cla.getDeclaredMethods();
	    for(Method m:methods){
	    	System.out.println(m);
        System.out.println(m.getName());
	    }
	}
}</p>
<span>Java单元测试</span>
下面是Uint4单元测试
import org.junit.Test;
@Test
public void test(){
   System.out.println("测试testA方法");
}
单元测试方法时，方法中不能有形参数；
类似于JUint3单元测试的案例，在运行期，输入类名 找某个类型以test开头的无参，方法并运行该方法
<p class="pre-cmd">public class Demo {
	public static void main(String[] args) throws ClassNotFoundException, InstantiationException, IllegalAccessException, IllegalArgumentException, InvocationTargetException  {
	    Scanner sc=new Scanner(System.in);
	    String str=sc.nextLine();
	    // 根据输入类名，获取该类
	    Class cls=Class.forName(str);
	    Object obj=cls.newInstance();
	    // 获取该类下的所有方法
	    Method[] methods=cls.getDeclaredMethods();
	    for(Method m:methods){
	    	// 获取方法名
	    	String name=m.getName();
	    	// 遍历所有方法，判断是否以test开头的方法
	    	if(name.startsWith("test")){
	    		// 执行此方法
	    		Object o=m.invoke(obj);
          System.out.println(o);
	    	}
	    }
	}
}
class Foo{
	 public void testA(){
		 System.out.println("测试testA方法");
	 }
	 public void methodB(){
		 System.out.println("测试testB方法");
	 }
	 public void testC(){
		 System.out.println("测试testC方法");
	 }
}</p>
案例通过某个类中的封装方法，获取该类的属性并复制到Map中，在运行期，输入类名 找某个类型以test开头的无参，方法并运行该方法
<p class="pre-cmd">public class Demo {
	public static void main(String[] args) throws IllegalAccessException, IllegalArgumentException, InvocationTargetException {
        Map< String,Object> maps=new HashMap<>();
        // 声明一个studnet对象
        Student student=new Student(23,"李明","男");
        // 调取方法
        getArgs(student,maps);
        System.out.println(maps);
	}
	// 下面是通过传输某个对象，获取该对象中的属性，并存储到map中
	public static void getArgs(Object obj, Map< String,Object> map) throws IllegalAccessException, IllegalArgumentException, InvocationTargetException{
		 // 通过传输对象获取该类
		 Class cls=obj.getClass();
		 // 获取该类下的所有方法
		 Method[] methods=cls.getDeclaredMethods();
		 for(Method m:methods){
			 // 通过遍历获取方法名称
			 String name=m.getName();
			 if(name.startsWith("get")){
				 // 应为get方法都是 getName等结构所以需要截取
				 name=name.substring(3);
				 String first=name.substring(0, 1);
				// 之所以将first单独提取不直接使用toLowerCase() 是为了防止有getNameUers这种两个大写字母的情况
				 first=first.toLowerCase();
				 String second=name.substring(1);
				 String key=first+second;
				 map.put(key, m.invoke(obj));
			 }
		 }
	}
}
class Student{
	// 设置属性
	int age;
	String name;
	String gender;
	// 设置构造方法
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Student(int age, String name, String gender) {
		super();
		this.age = age;
		this.name = name;
		this.gender = gender;
	}
	// 设置封装方法
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}

}

</p>
          </pre>

          <h3>Xml</h3>
          <pre>
XML 指可扩展标记语言（eXtensible Markup Language）。
XML 被设计用来传输和存储数据。
XML 的设计宗旨是传输数据，而不是显示数据。
XML 标签没有被预定义。您需要自行定义标签。
XML 被设计为具有自我描述性。
XML 是 W3C 的推荐标准。
XML 和 HTML 为不同的目的而设计：
XML 被设计用来传输和存储数据，其焦点是数据的内容。
HTML 被设计用来显示数据，其焦点是数据的外观。
HTML 旨在显示信息，而 XML 旨在传输信息。
<span>XML书写特性</span>
XML 文档只能有唯一的根元素
XML 的开始标签上可以定义多个属性，属性之间必须有空格，且属性是无序的
< ?xml version="1.0" encoding="UTF-8"?> 处理指令
<span>XML的扩展性</span>
标签名可以随意扩展，没有命名限制
标签的嵌套关系可以扩展
标签的属性可以扩展，但根元素只能有一个
<span>实体替换(转义)</span>
小于号  &lt；  大于号 &gt；   & 替换 &amp；
CDATA书写纯文本  < book><![CDATA[cdata是可以写纯文本的地方]]]>< /book>
<span>配置maven的setting文件</span>
XHL可以设置maven的镜像服务器配置
preference-maven-user setting -配置global settings 和users settings其中之一即可 之后upadte settings 点击apply
window - show views - other - maven repositories  检查maven仓库
maven的文件创建不成功，很可能是maven仓库配置有问题，无法和对应镜像仓库连接
建立maven project
在new maven project页下勾选
create a simple project (skip archetype selection) 创建一个简单的项目(跳过原型选择)
和Use default workspace location (翻译：使用默认的工作区间) 两项
Group Id（项目组织唯一的标识符，比如：com.****）
Artifact Id（项目的名称，根目录的名称）
Version（当前版本）
Package（默认包结构，这个可以不填）
然后点击Finish。
配置pom.xml后利用maven自动下载包
<p class="pre-cmd">< dependencies>
  <!-- maven组件的坐标 -->
< dependency>
< groupId>dom4j< /groupId>
< artifactId>dom4j< /artifactId>
< version>1.6.1< /version>
别倒错文件，倒错文件，maven就无法自动下载了
<  /dependency>
< /dependencies></p>
配置完文件后，maven就会自动下载包
我下载的是dom4j，是为了解析xml文件
<span>利用dom4j解析xml</span>
1）SAXReader类
利用dom4j包下的SAXReader类来获取xml文件流
SAXReader reader = new SAXReader();
.read(arg0)  实例方法，从流中读取byte并解析为Document对象
2）XMLWriter类
利用dom4j包下的XMLWriter类将byte字节内容转换成流生成为.xml文件
XMLWriter writer=new XMLWriter(out, format);
writer.write(Document doc);
writer.close();
3）Document对象的方法
.asXML()          实例方法打印Document对象
.getRootElement() 获取唯一的根元素
.elements()  返回list集合，返回父级下的所有子元素  返回list集合，
.elements(elementName)  返回list集合，返回父级下所有名叫elementName的元素
.element(elementName)   返回Element，返回父级下第一个叫elementName的元素，找到之后就不再继续找下去了
.elementText(elementName)   返回String，直接返回父级元素下第一名叫elementName元素的文本内容
.addElement(name)  返回Element，为父级元素下添加名叫name的子元素
.attributeValue(name)  返回String，返回元素下name属性的value值
.addAttribute(name,value)  为元素添加属性及属性值
.getText()   返回String，返回元素下文本内容
.addText()   为元素添加文本
DocumentHelper.createDocument()   静态方法，在内存中创建一个xml的document对象
OutputFormat.createPrettyPrint()  静态方法，格式化文本内容
案例一：获取xml文件并取出相关元素的属性，文本内容
<p class="pre-cmd">import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.List;
import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;
public class Demo01 {
public static void main(String[] args) throws FileNotFoundException, DocumentException {
// book.xml是我建立的一个xml的测试文件，与pom.xml平级,在该项目文件夹中
FileInputStream in =new FileInputStream("book.xml");
SAXReader reader = new SAXReader();
//SAXReader下的实例方法read()从流中读取byte并解析为Document对象，称为文档对象dom
Document dom = reader.read(in);
// 获取唯一的根元素
Element root =dom.getRootElement();
// 找到根元素下的所有book元素
List< Element> book=root.elements("book");
for(Element b: book){
// 读取book的id属性
String id = b.attributeValue("id");
System.out.println(id);
// 获取book元素下的name元素，并提取文本
Element name=b.element("name");
String text=name.getText();
System.out.println(text);
// 直接获取book元素下name元素中的文本内容
String str=b.elementText("name");
System.out.println(str);
}
}
}</p>
案例二：利用代码在项目中创建一个xml文件
<p class="pre-cmd">import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.io.OutputFormat;
import org.dom4j.io.XMLWriter;
public class Demo02 {
public static void main(String[] args) throws IOException {
// 创建一个document对象并存储于内存中
Document doc=DocumentHelper.createDocument();
Element root=doc.addElement("products");
Element product=root.addElement("product");
// 给product添加id属性
product.addAttribute("id", "0");
// 给product添加文本内容
product.addText("第一个产品");
// 创建文件流准备写入到products.xml文件中
FileOutputStream out=new FileOutputStream("products.xml");
// 利用OutputFormat的createPrettyPrint()静态方法美化文本内容
OutputFormat format=OutputFormat.createPrettyPrint();
//利用高级流XMLWriter，将doc写入到文件中
XMLWriter writer=new XMLWriter(out, format);
writer.write(doc);
writer.close();  // 关闭了最外层的流，其内其他流也将关闭
}
}</p>
</pre>
          <h3>Lambda表达式</h3>
          <pre>
Lambda表达式的本质只是一个"语法糖",由编译器推断并帮你转换包装为常规的代码,因此你可以使用更少的代码来实现同样的功能
Lambda表达式是Java SE 8中一个重要的新特性。lambda表达式允许你通过表达式来代替功能接口。
功能性接口，只有一个方法的接口叫功能性接口
interface Foo{ int test(int a,int b); }
Lambda表达式仅限于功能性接口使用,相当于类实现接口，类创建的对象去调用接口中的方法
<span>环境准备</span>
Lambda表达式是Java SE 8中一个重要的新特性,在编辑器中使用Lambda时要先配置相应的环境
  第一步：preference - java - compiler -  compiler compliance level  设置为1.8
  第二步：
<span>基本语法:</span>
1)基本语法
() ->{ }
(参数) ->{ 方法体； }
2） 如果java编译器能够猜到参数类型，则参数类型可以省略
Foo f1=(a,b)->{ return a+b;}
3）如果只有一个参数，()可以省略
Foo f3=a->{ return a+b;}
4）如果{}中只有一行语句{}可以省略，如果是return则一起省略return
Foo f3=a->a+b；
案例
interface Foo{ public void test(int a,int b); }
完整版本
Foo f1=(int a,int b)->{ return a+b;}
简化参数
Foo f2=(a,b)->{ return a+b;}
如果只有一个参数a
Foo f3=(a)->{ return a+b;}
Foo f3=a->{ return a+b;}
简化语句
Foo f3=a->a+b；
Java中也有功能性接口
Runnable r=()->System.out.println("hello world");
Thread t=new Thread(r);
t.start();
再简化
Thread t=new Thread(()->System.out.println("hello world"));
t.start();
再简化
Thread t=new Thread(()->System.out.println("  world")).start();
<span>@FunctionalInterface注释</span>
@FunctionalInterface
interface Foo{
  public int test(int a,int b);
}
@FunctionalInterface表示功能性接口，它下面的接口中只能有一个方法，该注解可加可不加
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
