<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>javaScript的组成</h3>
          <pre>
由三部分组成ECMAscript DOM BOM
1. ECMAscript(语言核心功能基于ES规范)、定义变量，条件的判定，数组，循环
2. DOM— js需要支持对DOM的维护,通过document,element对象实现.这些都是在ES中没有的.
3. BOM— js需要支持对BOM的维护,通过window对象实现.这些都是在ES中没有的.
</pre>
          <h3>javaScript执行的原理</h3>
          <pre>https://blog.csdn.net/GY_U_YG/article/details/72869315</pre>
          <h3>javascript处理引擎</h3>
          <pre>
能解析并且运行js代码的解释器。
浏览器通常会有js引擎，js刚出来时就是运行在浏览器中,作为客户端语言使用。常见的js引擎有：
Chrome ：  webkit/blink ： V8
FireFox：  Gecko        :  SpiderMonkey
Safari ：  webkit       ： JavaScriptCore
IE     ：  Trident      ： Chakra
js不一定非要在浏览器中运行，只要有JS引擎即可，最典型的比如NodeJS，采用了谷歌的v8引擎，使得JS完全脱离浏览器运行
Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。 Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。
上文提到V8引擎是用来解析执行JS，并且V8是基于ECMAscirpt标准实现的.换个角度说,nodejs里头没有DOM和bom的操作,只保留的javascript的语法核心(ES)
nodejs作为服务运行在linux,mac,window,把javascipt的角色从前台开发,转移到了后台开发</pre>
          <h3>常用的输出</h3>
          <pre>
1）document.write('要输出的内容')
2）alert('要输出的内容')
3）console.log('要输出的内容\n hello world');
\n 表是字符串中文职换行
&#60br> 是html中的换行 </pre>
          <h3>定义标识符的规则</h3>
          <pre>
1)js中是区分大小写的
2)变量，对象，函数的名称组成：
  a.大小写字母、数字、下划线、$ 所组成，但是首字母不能是数字 ，
  b.见名知义，尽量用英文单词
  c.使用驼峰命名法，第一个单词的首字母小写，其它单词的首字母都大写，或者单次间用_下滑先分开
3)每条语句的后面都加上分号</pre>
          <h3>循环语句</h3>
          <pre>
<span>while循环的使用</span>
while循环的三步骤
            1）定义循环变量并给循环变量赋初始值
          </pre>
          <h3>JS正则匹配规则</h3>
          <pre>js正则修饰符
修饰符(没有先后顺序)
i 忽略大小写
g 全局匹配（查找所有匹配而非在找到第一个匹配后停止）
m 换行匹配

正则的方法
test方法(重点记忆)
格式：正则.test(字符串);
功能：在字符串中匹配正则是否存在
返回值：如果存在返回true； 如果不存在就返回false
var str = "how aRe you";
var box = /are/i;
alert(box.test(str));

exec 方法
格式：正则.exec(字符串)
功能：在字符串中匹配正则是否存在
返回值：如果存在返回一个数组，数组里面存放着匹配的内容
如果不存在，返回null
var str = "how aRe you";
var box = /are/i;
alert(box.exec(str));

match
格式：字符串.match(正则)
功能：在字符串中匹配这个正则是否存在
返回值：如果存在，返回一个数组，数组放着，匹配到的子串
如果不存在，返回null
var str = "how are Are ARE you";
var box = /arex/ig;
alert(str.match(box)); //are,Are,ARE

search
格式：字符串.search(正则)
功能：在字符串中，查找正则表达式，第一次出现的位置
返回值：如果查找到，返回，查找到的下标
查找不到，返回-1
var str = "how ARE are you";
var box = /are/i;
alert(str.search(box)); //4

replace
格式：字符串.replace(正则, newStr);
功能：在字符串中找到正则，并且将他替换成新字符串。
返回值：替换成功的新字符串
***注：此方法在编程生活中较为常用哦***
var str = "how are Are ARE you";
var box = /are/ig;
var newStr = str.replace(box, "two");
alert(newStr); //how two two two you

split
格式：字符串.split(正则)
功能：使用正则对字符串进行字符串分割
返回值：分割完的子串组成的数组。
var str = "how are Are ARE you";
var box = /are/i;
var arr = str.split(box);
alert(arr); //how , , , you

字符 含意
\ 做为转意，即通常在"\"后面的字符不按原来意义解释，如/b/匹配字符"b"，当b前面加了反斜杆后/\b/，转意为匹配一个单词的边界。
对正则表达式功能字符的还原，如"*"匹配它前面元字符0次或多次，/a*/将匹配a,aa,aaa，加了"\"后，/a\*/将只匹配"a*"。
^  行首匹配 必须以这个正则开头，/^a/匹配"an A"，而不匹配"An a"
$  行尾匹配 必须以这个正则结尾，/a$/匹配"An a"，而不匹配"an A"
(x) 匹配x保存x在名为$1...$9的变量中
x|y 匹配x或y
{n} 精确匹配n次
{n,} 匹配n次以上
{n,m} 匹配n-m次
? 匹配前一项0次或1次,也就是说前一项是可选的. 等价于 {0, 1}
+ 匹配前一项1次或多次,等价于{1,}
* 匹配前一项0次或多次.等价于{0,}
[xyz] 字符集(character set)，匹配这个集合中的任一一个字符(或元字符)
[^xyz] 不匹配这个集合中的任何一个字符
[\b] 匹配一个退格符
\b 匹配一个单词的边界
\B 匹配一个单词的非边界
\cX 这儿，X是一个控制符，/\cM/匹配Ctrl-M
\d 匹配一个字数字符，/\d/ = /[0-9]/
\D 匹配一个非字数字符，/\D/ = /[^0-9]/
\n 匹配一个换行符
\r 匹配一个回车符
\s 匹配一个空白字符，包括\n,\r,\f,\t,\v等
\S 匹配一个非空白字符，等于/[^\n\f\r\t\v]/
\t 匹配一个制表符
\v 匹配一个重直制表符
\w 匹配一个可以组成单词的字符(alphanumeric，这是我的意译，含数字)，包括下划线，如[\w]匹配"$5.98"中的5，等于[a-zA-Z0-9]
\W 匹配一个不可以组成单词的字符，如[\W]匹配"$5.98"中的$，等于[^a-zA-Z0-9]。

描述字符范围
在正则表达式语法中，放括号表示字符范围。在方括号中可以包含多个字符，表示匹配其中任意一个字符。如果多个字符的编码顺序是连续的，可以仅指定开头和结尾字符，省略中间字符，仅使用-表示。如果在方括号内添加脱字符^前缀，还可以表示范围之外的字符。例如：
[abc]：查找方括号内任意一个字符。
[^abc]：查找不在方括号内的字符。
[0-9]：查找从 0 至 9 范围内的数字，即查找数字。
[a-z]：查找从小写 a 到小写 z 范围内的字符，即查找小写字母。
[A-Z]：查找从大写 A 到大写 Z 范围内的字符，即查找大写字母。
[A-z]：查找从大写 A 到小写 z 范围内的字符，即所有大小写的字母。

举例
[a-zA-Z0-9_] 匹配单个的数字、字母下划线
[^范围] 匹配任意一个除括号范围内的字符
[^0-9] 匹配任意一个非数字字符
\w 匹配单个的数字、字母下划线 等价于 [a-zA-Z0-9_]
\W 匹配单个非数字、字母下划线
\d 匹配单个数字 等价于 [0-9]
\D 匹配单个非数字 等价于 [^0-9]

示例
/[a-zA-Z0-9]/g;             匹配任意大小写字母和数字：
/[abce-z]/g;                字符a、b、c，以及从e~z之间的任意字符
/ab[c-g][1-7]/g;            前两个字符为ab，第三个字符为从c到g，第四个字符为1~7的任意数字
/^1[3456789]\d{9}$/         验证手机号，1开头第二位是3到9后续为9位数字
/^[a-zA-Z0-9_-]{4,16}$/     用户名正则，4到16位（字母，数字，下划线，减号）

常用正则：
// 验证整数
var regex = /^[-+]?\d*$/;

// 纯英文字母
var regex = /^[a-zA-Z]+$/;

// 纯大写英文字母
var regex = /^[A-Z]+$/;

// 纯小写英文字母组成
var regex = /^[a-z]+$/;

//纯数字
var regex =/^\d{1,}$/;

//是否由数字和字母组成
var regex = /^[A-Za-z0-9]+$/;

// 只包含中文和数字
var regex = /^(([\u4E00-\u9FA5])|(\d))+$/;

// 中文：
var regex = /^[\u0391-\uFFE5]+$/;

// 只能输入汉字：
var regex = /^[\u4e00-\u9fa5]{0,}$/;

// 纯中文/汉字
var regex = /^[\u4E00-\u9FA5]+$/;

// 中文姓名：
var regex = /^([\u4e00-\u9fa5·]{2,10})$/;

// 验证日期YYYY-MM-DD：
var regex = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;

// 验证日期格式YYYY-MM-DD hh:mm:ss：
var regex = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;

// 用户名正则，4到16位(字母，数字，下划线，减号)
var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;

// 匹配 16 进制颜色值
var color = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;
var cPattern = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;

// 中国邮政编码：(中国邮政编码为6位数字)
[1-9]\d{5}(?!\d)

// 匹配日期，如 yyyy-mm-dd 格式
var date = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

// 匹配 qq 号
var qq = /^[1-9][0-9]{4,10}$/g; //5到11位
var qq = /^[1-9][0-9]{4,}$/g; // //5位以上

// 微信号正则，6至20位，以字母开头，字母，数字，减号，下划线
var wx = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;

// 手机号码正则
var phone = /^1[34578]\d{9}$/g; //宽松
// 手机号(严谨), 根据工信部2019年最新公布的手机号段
var phone = /^1((3[\d])|(4[5,6,7,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[\d])|(9[1,8,9]))\d{8}$/;

// 座机号
var tel =/(^0\d{2}-8\d{7}$)|(^0\d{3}-3\d{6}$)/;

// 用户名正则
var username = /^[a-zA-Z\$][a-zA-Z0-9_\$]{4,16}$/;

// 银行卡号(16或19位)
var card = /^([1-9]{1})(\d{15}|\d{18})$/;

// Email正则
var email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
var email = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

// 身份证号(18位)正则
var cP = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
var cP = /(^\d{8}(0\d|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/;

// base64格式
var b64 = /^[\/]?([\da-zA-Z]+[\/+]+)*[\da-zA-Z]+([+=]{1,2}|[\/])?$/;

// URL正则
var urlP= /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

// ipv4地址正则
var ipP = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

// 新能源 长度为8
const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/

// 非新能源车牌号
const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;

// 车牌号正则
var cPattern = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;

//强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间)：
var pwd = /^(?=.\d)(?=.[a-z])(?=.[A-Z]).{8,10}$/

// 是否html标签
/<(.	)>. <\/\1>|<(.*) \/>/

// 英文特殊符号
const regEn = /[`~!@#$%^&*()_+<>?:"{},\\.\/;'[\]]/im

// 中文特殊符号
const regCn = /[·！#￥(——)：；“”‘、，|《。》？、【】[\]]/im</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'js',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    mounted(){
      this.$nextTick(function(){
        console.log('要输\n出的内容')
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
