<script src="../../../../../modal/ng-zorro-antd-modal.d.ts"></script>
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
            <li v-for="(items,index) in catalogue"  :key="index" ><a @click="jump(index)">{{index+1}}、{{items.name}}</a></li>
          </ul>
          <h3>ES6简介</h3>
          <pre>1、ES5 是一个泛型名称（泛指 6.0 大版本以前的 JavaScript 标准的统称，概念范围基本等同于ECMAScript5.1版）
2、ES6 是一个泛型名称（泛指 6.0 版以后的 JavaScript 的下一代标准的统称，概念范围涵盖了 ES2015、ES2016、ES2017... 等等）
3、ES2015 则是正式版本名称，特指2015年发布的正式版本的语言标准（概念范围等同于ES6.0版）
https://www.cnblogs.com/izengbin/p/7061039.html  (ES6、ES2015)新特性详解API
https://www.2cto.com/kf/201712/708311.html  特性详解API</pre>
          <h3>Babel 转码器</h3>
          <pre>
该转码器可以吧ES6语法转码为ES5语法，意味着，可以借助于Babel转码器提高ES6的兼容性</pre>
          <h3>let const 关键字</h3>
          <pre>
<span>let 关键字</span>
1）用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效
<p class="pre-cmd">{
  let a = 10;
  var b = 1;
}
console.log(a) // ReferenceError: a is not defined.
console.log(b) // 1</p>
2）for循环的计数器，就很合适使用let命令
<p class="pre-cmd">for (let i = 0; i < 10; i++) {}
console.log(i);
//ReferenceError: i is not defined</p>
使用var声明的循环变量在循环结束后仍然可以访问到。 使用let声明的循环变量，在循环结束之后会立即销毁。
3）不允许重复声明
<p class="pre-cmd">let a = 100;
let a = 200; //报错
let b = 100;
b = 200; //正确</p>
4）不存在变量提升
<p class="pre-cmd">// var 的情况
console.log(foo); // 输出undefined
var foo = 2;
// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;</p>
5)利用if()判断增加新的块级
注意 let 声明在下面两种函数入参的对比：
<p class="pre-cmd">function funA(x) {
  let x = 100;    // 报错，x已经在函数入参声明
}
// 增加了判断条件组成的新的块级作用域
function funB(condition, x) {
  if(condition) {      //利用if构成新的块级作用域
      let x = 100;     // 运行正常
      return x;
  }
  return x;
}
funB(false, 0);    // 返回 0
funB(true, 0);    // 返回 100</p>
<span>const 关键字</span>
const 声明的是常量也可以理解为恒量，常量不能被重新赋值，可以理解为是定义的变量的内存地址是不可以改变的。如果定义的常量是对象，对象里的属性值是可以被重新赋值的，因为相当于内存地址没有改变，改变的是内存地址里的值
<p class="pre-cmd">const num = 9;
const object = {
    name: 'kitty',
    age: CAT_AGE
}
num = 10;      // 错误
object = {     // 错误
    name: 'Danie',
    age: CAT_AGE
}
object.name = "Jason";    // 正确</p>
</pre>
          <h3>字符串新增功能</h3>
          <pre>
<span>ES6新增了三个方法来查找字符串</span>
在以前在字符串中查找字符串的时候，都是使用indexOf方法。
includes()   如果给定文本存在于字符串中的任意位置时返回 true，否则返回 false  IE不支持这个方法
startsWith() 如果在给定文本出现在字符串开头时返回 true，否则返回 false
endsWith()   如果给定文本出现在字符串末尾时返回 true，否则返回 false
上述的三个方法返回的都是Boolean值
<p class="pre-cmd">var msg = "Hello world!";
console.log(msg.startsWith("h"));        // false
console.log(msg.endsWith("e"));          // false
console.log(msg.includes("H"));          // true

console.log(msg.startsWith("world"));    // false
console.log(msg.endsWith("Hello!"));     // false
console.log(msg.includes("llo"));        // true

console.log(msg.startsWith("e", 1));        // true
console.log(msg.endsWith("!",12));          // true
console.log(msg.includes("o", 7));          // true</p>
注意：每个方法都接收两个参数：需要搜索的文本和可选的起始索引值。当提供第二个参数后，includes() 和 startsWith() 会以该索引为起始点进行匹配，而 endsWith() 将字符串的长度与参数值相减并将得到的值作为检索的起始点。若第二个参数未提供，includes() 和 startsWith() 会从字符串的起始中开始检索，endsWith() 则是从字符串的末尾。实际上，第二个参数减少了需要检索的字符串的总量。
<span>repeat() 方法</span>
接受一个数字参数作为字符串的重复次数。该方法返回一个重复包含初始字符串的新字符串，重复次数等于参数。
<p class="pre-cmd">console.log("x".repeat(3));         // "xxx"
console.log("hello".repeat(2));     // "hellohello"
console.log("abc".repeat(4));       // "abcabcabcabc"</p>
<span>ES6支持多行字符串</span>
ES5中 利用 \
<p class="pre-cmd">var s = "abc\
    aaaaad\
    fadfja";
    console.log(s); //但是输出的结果中不换行但是换行位置有空格，是用引号设置字符串</p>
ES6中利用 ``反引号 不是 '' "" 引号
<p class="pre-cmd">var s = `abc
    aaaaa
    dsalfja
    dfadfja`;
    console.log(s);  //打印出的结果也是换行的</p>
反引号中的所有空格和缩进都是有效字符。
<span>字符串置换</span>
置换允许将 JavaScript 表达式嵌入到模板字面量中并将其结果作为输出字符串中的一部分。
语法：${变量名、表达式、任意运算、方法调用等}可以嵌入任何有效的JavaScript代码
<p class="pre-cmd">var name = "李四";
var msg = `欢迎你${name}同学`;
console.log(msg)</p>
<span>模板标签</span>
一个模板标签可以被转换为模板字面量并作为最终值返回，模板标签支持换行空格，其中的${}就是变量。
标签在模板的头部，即左 ` 字符之前指定如下所示：
let message = myTag`Hello world`;
myTag就是模板标签，myTag其实是一个函数，这个函数会被调用来处理这个模板字符串（这种用法使用场景不大）。
<p class="pre-cmd">let name = '张三',
age = 20,
message = show`我来给大家介绍${name}的年龄是${age}.`;
/*
应该定义一个函数show:
参数1：一个字符串数组,在本例中包含三个元素。
0:"我来给大家介绍"
1:"的年龄是"
2:"."
参数2和参数3：表示需要置换的字符串的值。
*/
function show(stringArr, value1, value2) {
  console.log(stringArr); // ["我来给大家介绍", "的年龄是", ".", raw: Array(3)]
  console.log(value1);  // 张三
  console.log(value2);  // 20
  return "abc";
}
console.log(message); //abc</p>
重点记住模板标签的首个参数是个字符串的数组，余下的参数为每次置换的对应值。
为了简化书写，一般把Value1和Value2写成剩余字符串的形式
function show(stringArr, ...values){
}</pre>
          <h3>对象的简化</h3>
          <pre>
<span>1、属性的简化写法</span>
<p class="pre-cmd">var foo = 'name1';
var bar = 'name2';
var obj = {foo,bar};
//等同于
var obj = {foo:foo, bar:bar} // 这种写法ie11下不支持需要转换</p>
<span>2、 方法的简化写法</span>
<p class="pre-cmd">{
    fn:function(){
    }
}
//可简化为
{
    fn(){
    }
}</p>
<span>3、在字面量中动态计算属性名</span>
在ES5之前，如果属性名是个变量或者需要动态计算，则只能通过 对象.[变量名] 的方式去访问。而且这种动态计算属性名的方式 在字面量中 是无法使用的。
<p class="pre-cmd">var p = {
  name : '李四',
  age : 20
}
var attName = 'name';
console.log(p[attName]) //打印结果 李四  attName表示的是一个变量名
console.log(p[name])  // undefined
console.log(p['name']) //打印结果 李四
</p>
在ES6中，把属性名用[ ]括起来，则括号中就可以引用提前定义的变量。
<p class="pre-cmd">var attName = 'name';  //先定义好attName
var p = {
[attName] : '李四',  // 引用了变量attName。相当于添加了一个属性名为name的属性
age : 20
}
console.log(p[attName])  // 李四</p>
但是感觉在这里ES6的写法有点鸡肋，也没感觉有多好用
<span>4、对象解构</span>
<p class="pre-cmd">1、变量名与属性名对应，次序不一样，可以正常解构
let {name, age} = {age: 11, name: 'bob'} // name->bob age->11  如果找不到相应的属性名，则值为undefined
2、变量名和属性名不一样需要通过：冒号重命名
let {n: name, a: age} = {n: 'bob', a: 11} // name->bob age->11
3、默认值
let {age = 111} = {age: 2222} // age->2222  如果age没有定义输出结果就是111了
let {message: msg = 'this is message'} = {} // msg->this is message
4、解构嵌套解构的对象
let {p: [x, {a}]} = {p: [1111, {a: 2222}]} // x->1111  a->2222
let {p, p: [x, {a}]} = {p: [1111, {a: 2222}]} // p-> {p: [1111, {a: 2222}]}    x->1111      a->2222</p></pre>
          <h3>数组解构</h3>
          <pre>
数据解构的语法和对象解构看起来类似，只是将对象字面量替换成了数组字面量，而且解构操作的是数组内部的位置（索引）而不是对象中的命名属性
<span>基本写法</span>
<p class="pre-cmd">let colors = [ "red", "green", "blue" ];
let [ firstColor, secondColor ] = colors;
console.log(firstColor);    // "red"
console.log(secondColor);   // "green"</p>
<span>如果只想取数组中的某一项，则可以不用命名</span>
<p class="pre-cmd">let colors = [ "red", "green", "blue" ];
let [ , , thirdColor ] = colors;  //只取数组中的第三项。
console.log(thirdColor);          // "blue"</p>
<span>在变量已被赋值的情况下，取数组中的某一项</span>
<p class="pre-cmd">let colors = [ "red", "green", "blue" ];
let firstColor = "black";
let secondColor = "purple";
[ firstColor, secondColor ] = colors;  //可以不用加括号。当然添加也不犯法
console.log(firstColor);        // "red"
console.log(secondColor);       // "green"</p>
<span>第三方变量进行交换</span>
ES5的写法
<p class="pre-cmd">let a = 3 ,b = 4 ,temp;
temp = a;
a = b;
b = temp;
console.log(a);
console.log(b);</p>
ES6中完全可以抛弃第三方变量这种方式，使用我们的数组解构表达式
<p class="pre-cmd">let a = 3, b = 4;
//左侧和前面的案例是一样的，右侧是一个新创建的数组字面量。
[a, b] = [b, a];  //这样的写法太方便了，交叉互换
console.log(a);
console.log(b)</p></pre>
          <h3>函数function(){}</h3>
          <pre>
<span>① 设置默认参数的函数</span>
这个函数如果只传入第一个参数，后面两个不传入，则会使用默认值。如果后面两个也传入了参数，则不会使用默认值。
注意：有多个形参的场景，只能给最后一个形参设置默认值，如果可以少用设置默认值，因为设置默认值后如果后续形参扩展了就不好维护了
<p class="pre-cmd">function getValue() {
   return 5;
}
function add(first, second = getValue()) { //表示使用getValue这个函数的返回值作为second的默认值。
   return first + second;
}
console.log(add(1, 1));     // 2.  调用add函数的时候，传入了第二个参数，则以传入的参数为准。
console.log(add(1));        // 6。 调用add函数的时候，没有传入第二个参数，则会调用getValue函数</p>
<span>② 剩余参数(Rest Parameters)</span>
剩余参数使用三个点( … )
<p class="pre-cmd">function foo(a,...b) {
    console.log(a);   //2
    console.log(b);   //[3, 4, 6]
    console.log(b instanceof Array);  //true  .多余的参数都被放入了b中。b其实就是一个数组。
}
foo(2, 3, 4, 6);</p>
1)函数最多只能有一个剩余参数。而且这个剩余参数必须位于参数列表的最后位置。
2)虽然有了剩余参数，但是arguments仍然存在，但是arguments完全无视了剩余参数的存在。
3)剩余参数是在函数声明的时候，充当形参出现的。
<span>③ 扩展运算符</span>
let values = [25, 50, 75, 100]
console.log(Math.max(...values));  //使用扩展运算符。相当于拆解了数组了。
console.log(Math.max(...values, 200));  //也可以使用扩展运算符和参数的混用，则这个时候就有 5 个数参与比较了。
注意：剩余参数和扩展运算符都是 使用三个点作为前缀。但是他们使用的位置是不一样的
剩余参数是用在函数形参数中，而且必须在形参数列表的最后面
扩展运算符是作为实参来传递的，在实参中的位置没有限制。
<span>④ 箭头函数</span>
基本语法如下：
(形参列表)=>{
  //函数体
}
<p class="pre-cmd">function(arg){} 缩写为   (arg) => {}
setTimeout( () => {
   array.forEach((item, key) => {   //这里照常放了item key 参数
    if (item.code === cod) {
    }
  });
}, 0);</p>
箭头函数作为一个使用完就扔的函数，不能作为构造函数使用。也就是不能使用new的方式来使用箭头函数。
由于箭头函数中的this与函数的作用域相关，所以不能使用call、apply、bind来重新绑定this。但是虽然this不能重新绑定，但是还是可以使用call和apply方法去执行箭头函数的。
<span>⑤ 函数的简写</span>
1) 如果函数体内只有一行代码，则包裹函数体的大括号({ })完全可以省略，return关键字也可以省略。如果函数体内有多条语句，则 {} 不能省略。
<p class="pre-cmd">var sum = (num1, num2) => num1 + num2;
console.log(sum(5, 4));
//前面的箭头函数等同于下面的传统函数
var add = function (num1, num2) {
    return num1 + num2;
}
console.log(add(2, 4));
//如果这一行代码是没有返回值的，则方法的返回自也是undefined
var foo = (num1, num2) => console.log("aaa");
console.log(foo(3,4));  //这个地方的返回值就是undefined</p>
2) 如果箭头函数只有一个参数，则包裹参数的小括号可以省略。其余情况下都不可以省略。当然如果不传入参数也不可以省略
<p class="pre-cmd">var foo = a=> a+3; //因为只有一个参数，所以()可以省略
console.log(foo(4)); // 7</p>
3) 如果想直接返回一个js对象，而且还不想添加传统的大括号和return，则必须给整个对象添加一个小括号 ()
<p class="pre-cmd">var foo = ()=>({name:"lisi", age:30});  //这里加的小括号
console.log(foo());
//等同于下面的；
var foo1 = ()=>{
    return {
        name:"lisi",
        age : 30
       };
}</p>
4) 使用箭头函数实现函数自执行
<p class="pre-cmd">var person = (name => {
      return {
          name: name,
          age: 30
      }
  })("zs");
console.log(person);</p>   //返回的是个对象
</pre>
          <h3>export，export default，import </h3>
          <pre>
<span>① ES6模块主要有两个功能：export和import</span>
export用于对外输出本模块（一个文件可以理解为一个模块）变量的接口
import用于在一个模块中加载另一个含有export接口的模块。
也就是说使用export命令定义了模块的对外接口以后，其他JS文件就可以通过import命令加载这个模块（文件）。这几个都是ES6的语法。
简单的说export是导入，import是导出
import来的变量，因为是别人家的变量，所以只能读，不能写
<span>② export与export default</span>
在一个文件或模块中，export、import可以有多个，export default仅有一个
通过export方式导出，在import导入时要加{ }，export default则不需要，export default命令，为模块指定默认输出
<p class="pre-cmd">var name="李四";
var age="12岁";
function add(x,y){
  alert(x*y)
}
export { name, age, add}
//import { name ,age ,add} from "/.a.js"
//alert(add(2,3))
或可以写成：
var name="李四";
export default name
//import name from "/.a.js" 这里name不需要大括号</p>
导出一个类：
<p class="pre-cmd">// MyClass.js
class MyClass{
  constructor() {}
}
export default MyClass;
// 或者
export { MyClass as default, … };
// index.js
import MyClass from 'MyClass';</p></pre>
          <h3>import()</h3>
          <pre>es2020 的提案，import('./a')可以在需要的时候加载某个模块，比如点击按钮的时候加载等等，一种懒加载的机制。
webpack 已经实现了，所以在vue-router里可以使用这样懒加载一个页面。
{
  path: "/m",
  name: "m",
  component: () => import(/* webpackChunkName: "m" */ "../views/M.vue")
}</pre>
          <h3>import * as 是什么</h3>
          <pre>
1.import 在导入模块中的变量的时候 需要 import { a, b, c, d } from ‘./api.js’ 这样一个一个的导入。
2.如果你想一次性全部导入模块的所有变量就可以使用  * as 代表全部
示例一 (常用)
<p class="pre-cmd">// methods.js文件
export const abc = () => {
    console.log(' abc ')
}
export const ced = () => {
    console.log(' ced ')
}
import * as means from '@/method.js'
means.abc();    // abc
means.ced();    // ced</p>
示例二
<p class="pre-cmd">重命名export和import，如果导入的多个文件中，变量名字相同，即会产生命名冲突的问题，为了解决该问题，ES6为提供了重命名的方法。
//  test1.文件
export let myName = "我来自test1.js";
//  test2.文件
export let myName = "我来自test2.js";
// index.js 文件
import {myName as name1} from "./test1.js";
import {myName as name2} from "./test2.js";
console.log(name1); //我来自test1.js
console.log(name2); //我来自test2.js</p>
示例三
<p class="pre-cmd">let myName = "Jon";
let myAge = 18;
let myfn = function(){
    return "我是"+myName+"！今年"+myAge+"岁了"
}
export {
    myName as name,  // 实际项目很少这么写
    myAge as age,
    myfn as fn
}
接收的代码
import {fn,age,name} from "./test.js";
console.log(fn()); //我是Jon！今年19岁了
console.log(age); //19
console.log(name); //Jon
或者写成
import * as info from "./test.js"; //通过*来批量接收，as 来指定接收的名字
info.fn();  //  我是Jon！今年18岁了
info.age;   //  18
info.nam;   //  Jon</p></pre>
          <h3>es6中export和as的用法</h3>
          <pre>有些时候我们并不想暴露模块里边的变量名称，而给模块起一个更语义话的名称，这时候我们就可以使用as来操作。
<p class="pre-cmd">let myAge = 18;
let myfn = function(){
    return "我是"+myName+"！今年"+myAge+"岁了"
}
export {
    myName as name,  // 实际项目很少这么写
    myAge as age,
    myfn as fn
}    </p>
延伸
export {a} from './a'这句相当于import {a} from './a';export {a}
相当于引入再导出，单独看这一句话可能有些懵逼，来我们继续看下面，下面是关键是项目中http请求接口常用方式
先说应用场景
项目里请求的接口很多，放在一个文件里太长，也难以维护，一般会以功能模块划分。
现在有个api的文件夹，index.js是将所有的接口转出去，还有project.js task.js。
<p class="pre-cmd">// project.js
export const add = () => axios.post(...)
export const remove = () => axios.post(...)

// task.js
export const add = () => axios.post(...)
export const remove = () => axios.post(...)

// api的文件夹下的index.js
export * as project from 'project';
export * as task from 'task';

// 在组件使用的时候
import api from './api'
api.project.add()

// 当然一般为了方便使用会在main.js那边将其挂载在全局
// main.js
import api from './api'
Vue.prototype.$api = api
// 组件使用的时候
this.$api.project.add()</p></pre>


          <h3>Object对象新增的方法</h3>
          <pre>
<span>Object.is()</span>
ES5中比较操作符（==）或严格比较操作符（===）在一些场景下是存在bug的，例如它认为 +0 和 -0 是相等的， NaN === NaN 会返回 false，所以必须使用 isNaN() 函数才能判断 NaN。
很多情况下 Object.is() 的表现和 === 是相同的，何时选择 Object.is() 与 == 或 === 取决于代码的实际情况。
<p class="pre-cmd">console.log(5 === "5");             // false
console.log(Object.is(5, 5));       // true
console.log(Object.is(5, "5"));     // false</p>
<span>Object.assign()</span>
assign可以把一个对象的属性和访问完整的转copy到另外一个对象中,我认为相当于引用了该对象的地址值
<p class="pre-cmd">let source = { a: 1 };
let target = Object.assign({}, source);
console.log(target)  // { a: 1 }
source.a = 2;
console.log(source)  // { a: 2 }
console.log(target)  // { a: 1 }
target的值并没有随着source的变化而变化，到这里有人会说，这一看就是深拷贝嘛，来再举个例子
let source = { a: { b : 1 }, c: 1 };
let target = Object.assign({}, source);
console.log(target)  // { a: { b: 1 }, c: 1 }
source.a.b = 2;
source.c = 3
console.log(source)  // { a: { b: 2 }, c: 3 }
console.log(target)  // { a: { b: 2 }, c: 1 }
对于Object.assign()而言，如果对象的属性值为简单类型（string，number），通过Object.assign({},srcobj)，得到的新对象为深拷贝；如果属性值是对象或其他引用类型，那对于这个引用数据类型而言是浅拷贝的。</p>
<span>Object.keys()、Object.values()、Object.entries()</span>
Object.keys()方法，返回一个数组，属性的键名数组。
Object.values()方法返回一个数组，属性的键值数组。
Object.entries()方法返回一个数组，属性的键值对数组。
<p class="pre-cmd">let obj = {name:"winne",age:22};
let objKeys = Object.keys(obj);
let objValues = Object.values(obj);
let objItem = Object.entries(obj);
console.log(objKeys);   //["name","age"]
console.log(objValues); //["winne",22]
console.log(objItem);   //[["name","winne"],["age",22]]</p>
<span>Object.freeze()</span>
Object.freeze() 方法可以冻结一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。freeze() 返回和传入的参数相同的对象。
<span>Object.hasOwn()</span>
如果指定的对象自身有指定的属性，则静态方法 Object.hasOwn() 返回 true。如果属性是继承的或者不存在，该方法返回 false。
备注： Object.hasOwn() 旨在取代 Object.hasOwnProperty()。
<p class="pre-cmd">const object1 = {
  prop: 'exists'
};
console.log(Object.hasOwn(object1, 'prop'));
// Expected output: true
console.log(Object.hasOwn(object1, 'toString'));
// Expected output: false</p>
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn
          </pre>
          <h3>新的基本类型：Symbol</h3>
          <pre>
以前我们有5种基本数据类型：Number、String、Boolean、Null、Undefined
ES6新增了一种新的数据类型：Symbol
在ES5之前我们都没办法创建私有变量，只能想办法去封装,symbol 来创建私有成员
<span>① 识别Symbol</span>
可以使用 typeof 操作符来判断变量是否为 symbol 。ECMAScript 6 拓展了 typeof 使其操作 symbol 时返回 “symbol”。
let symbol = Symbol();
console.log(typeof symbol);   // "symbol"
          </pre>
          <h3>迭代器 Iterator</h3>
          <pre>目前实际项目没用到过 https://www.cnblogs.com/anjingdian/p/16907361.html</pre>
          <h3>生成器 Generator</h3>
          <pre>生成器是ES6中新增的一种函数控制、使用的方案，它可以让我们更加灵活的控制函数什么时候继续执行、暂停执行等。平时我们会编写很多的函数，这些函数终止的条件通常是返回值或者发生了异常。
生成器函数也是一个函数，生成器事实上是一种特殊的迭代器，但是和普通的函数有一些区别：
A、生成器函数需要在function的后面加一个符号：*
B、生成器函数可以通过yield关键字来控制函数的执行流程
C、生成器函数的返回值是一个Generator（生成器）
个人总结：
1、yield就类似于按下了暂停键，next()就是开始键，代码书写顺序是先声明Generator，之后按下next()开始键，执行程序后碰到yield就类似于按下了暂停键
2、一定是先执行next()，后执行一个yield，next()执行循序在yield之前，这个注意理解,不然到next()传参就容易记混淆，还有就是第一个起始的next()肯定是没有入参的，next()里的入参从第二个开始加
3、generator.next()返回的格式是{ value: undefined, done: false }，next()里没值返回的value就是undefined，如果后续还有yield的话done就是false，done: true说明函数执行完毕
4、return函数生成器提前结束，return传值后这个生成器函数就会结束，之后调用next不会继续生成值了。

下面着端代码可以解释个人总结的序号2
<p class="pre-cmd">function* foo(num) {
  console.log("函数开始执行~");
  const value1 = 100 * num;
  console.log("第一段代码:", value1 ,num);
  const n = yield value1;
  const value2 = 200 * n;
  console.log("第二段代码:", value2 , n);
  const count = yield value2;
  const value3 = 300 * count;
  console.log("第三段代码:", value3 , count);
  yield value3;
  console.log("函数执行结束~");
  return "123";
}
// 生成器上的next方法可以传递参数
const generator = foo(5);   //  这里的5对应的是 function* foo(num) 的num
generator.next(); // 注意这里next没形参
generator.next(10);  //  入参10对应第一个yield
generator.next(25);  //  入参25对应第二个yield</p>

下面着端代码可以解释个人总结的序号3
<p class="pre-cmd">function* foo(num) {
  console.log("函数开始执行~");
  const value1 = 100 * num;
  console.log("第一段代码:", value1);
  const n = yield value1;
  const value2 = 200 * n;
  console.log("第二段代码:", value2);
  const count = yield value2;
  console.log("函数执行结束~");
  return "123"
}
const generator = foo(10);
console.log(generator.next());
// 第二段代码的执行, 使用了return
// 那么就意味着相当于在第一段代码的后面加上return, 就会提前终端生成器函数代码继续执行
console.log(generator.return(15));
console.log(generator.next());
console.log(generator.next());</p>

生成器抛出异常 – throw函数
除了给生成器函数内部传递参数之外，也可以给生成器函数内部抛出异常：
抛出异常后我们可以在生成器函数中捕获异常；
但是在catch语句中不能继续yield新的值了，但是可以在catch语句外使用yield继续中断函数的执行；
<p class="pre-cmd">function* foo() {
  console.log("代码开始执行~");
  const value1 = 100;
  try {
    yield value1
  } catch (error) {
    console.log("捕获到异常情况:", error);
    yield "abc";
  }
  console.log("第二段代码继续执行");
  const value2 = 200;
  yield value2;
  console.log("代码执行结束~");
}
const generator = foo();
const result = generator.next();
generator.throw("error message");</p>

这是一个利用promise同步等待的代码，利用了promise的then等待结果继续执行，代码嵌套有些费事
<p class="pre-cmd">function requestData(url) {
  // 异步请求的代码会被放入到executor中
  return new Promise((resolve, reject) => {
    // 模拟网络请求
    setTimeout(() => {
      // 拿到请求的结果
      resolve(url)
    }, 2000);
  })
}
function* getData() {
  const res1 = yield requestData("fuyou");
  console.log(res1);  //打印 params
  const res2 = yield requestData(res1 + "aaa");
  const res3 = yield requestData(res2 + "bbb");
  const res4 = yield requestData(res3 + "ccc");
}
const generator = getData();
const result = generator.next();
console.log(result.value);  // 打印Promise { < pending> }
result.value.then(data =>{  // .then是接收正确返回的信息
  console.log(data); // 打印fuyou
  if(data){
   const res = generator.next('params');
   console.log(res);   // 打印{ value: Promise { < pending> }, done: false }
  }
});
// 打印顺序  1、Promise { < pending> }   2、fuyou   3、params   4、{ value: Promise { < pending> }, done: false }
</p>
下面也是同步等待的代码，用了一个iterator全局变量取执行
<p class="pre-cmd">// 模拟获取，用户数据，订单数据，商品数据
function getUsers() {
    setTimeout(() => {
        let data = '用户数据';
        iterator.next(data)
    }, 3000)
}
function getOrders(users) {
    setTimeout(() => {
        let data = users + '订单数据';
        iterator.next(data)
    }, 3000)
}
function getGoods(orders) {
    setTimeout(() => {
        let data = orders + '商品数据';
        iterator.next(data)
    }, 3000)
}
function* gen() {
    let users = yield getUsers()
    console.log(users) // '用户数据'
    let orders = yield getOrders(users)
    console.log(orders) // '用户数据订单数据'
    let goods = yield getGoods(orders)
    console.log(goods) // '用户数据订单数据商品数据'
}
let iterator = gen();
iterator.next();</p>
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ES6',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name,
        catalogue:[]
      }
    },
    mounted:function(){
      this.$nextTick(function(){
        this.createCatalogue();
      })
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
          var o={name:object[i].innerHTML};
          flag.push(o)
        }
        this.catalogue=flag;
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
