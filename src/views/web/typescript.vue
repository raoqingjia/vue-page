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
            <li v-for="(items,index) in catalogue"><a @click="jump(index)">{{index+1}}、{{items.name}}</a></li>
          </ul>
          <h3>先认识一下</h3>
          <pre>
<span>① 什么是 TypeScript？</span>
TypeScript 是一种由微软开发的自由和开源的编程语言，它是JavaScript的一个超集，扩展了JavaScript的语法。其次，2016年9月底发布的Angular2框架，这个框架本身是由TypeScript编写的。Angular框架，大家都知道，它是由谷歌公司开发的，非常流行的框架。也就是说，现在TS这门语言是由微软和谷歌这两大公司在背后支持。因此我们有理由相信，在未来一段时间内，TS有可能成为前端开发语言中的主流。
TypeScript文件的扩展名为”.ts”,你可以使用很多工具编写.ts文件，比如visualstudiocode。
官网还提供了一个在线编写测试.ts文件的环境http://www.typescriptlang.org/Playground/
<span>② 为什么要用TypeScript</span>
TypeScript的设计目的应该是解决JavaScript的“痛点”：弱类型和没有命名空间，导致很难模块化，不适合开发大型程序。另外它还提供了一些语法糖来帮助大家更方便地实践面向对象的编程，可以申明变量的类型，那么任何其他类型的赋值将会引起编译错误。
例如：
var foo: string;
foo = true; //error: Cannot convert 'boolean' to string  报错提醒
现在的Javascript遵循ECMA5的规范，TypeScript是语法上对ECMA6（ECMAScript 6.0（简称 ES6）是 JavaScript 语言的下一代标准）的实现。但现在的TypeScript需要编译（不是真正的编译，其实就是语法处理）后转换成Javascript才能执行。
TypeScript不是语法上的ECMA6实现，而是以JavaScript为目标语言的，一种编译语言，并且提供向原生JavaScript转换的编译器；
<span>③ 搭建TypeScript开发环境</span>
其实也就安装TypeScript的compiler;
什么是compiler? 为什么需要compiler?
compiler(编译器)的作用是把TS代码转换成JS代码;
ES6规范是在2015年发布的，而目前所有主流的浏览器并没有完全支持ES6规范，所以用ES6写的东西并不能直接放在浏览器中去跑。
使用本地compiler开发
首先、安装TS编译器，其实就是安装TS的一个过程；
安装教程  http://www.typescriptlang.org/
npm install typescript -g</pre>
          <h3>TypeScript 常用类型</h3>
          <pre>
<span>① 基础类型</span>
<p class="pre-cmd">1)boolean为布尔值类型  let isDone: Boolean = false
2)number为数值类型     let decimal: number = 6;
3)string为字符串类型   let color: string = 'blue'
4)数组类型             let list: number[] = [1,2,3];
                       let list: Array&#60number> = [1,2,3];
5)any为任意类型        let notSure: any = 4;
6)void为空类型,        let unusable: void = undefined
声明一个 void 类型的变量没有什么作用，因为它的值只能为 undefined 或 null
当一个函数没有返回值时，你通常会见到其返回值类型是 void：
function warnUser(): void {
  console.log("This is my warning message");
  // return a  //报错,有返回值不为空
}
7)Tuple元组类型       let x: [ string, number ] = [ "hello", 10 ]
                      let f: [ number, string ] = [1,"a"] ;
元祖类型本质上是一个可以指定类型的数组
let x: [string, number];
x = ['semlinker', 10]; // 正常赋值
x = [10, 'semlinker']; // 类型不匹配
当访问一个已知索引的元素，会得到正确的类型：
console.log(x[0].substr(1)); // OK
// Error, 'number' does not have 'substr' method
console.log(x[1].substr(1));
当访问一个越界的元素，会使用联合类型替代：
x[3] = 'world'; // OK, 字符串可以赋值给(string | number) 类型
console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString 方法
x[6] = true; // Error, 布尔不是(string | number) 类型
8)枚举类型
enum Color { Red, Green, Blue }; let c: Color = Color.Green
9)never表示没有值的类型，如function error(message: string): never { throw new Error(message); }</p>
<span>② 类型断言</span>
类型断言好比其他语言里的类型转换，但是不进行特殊的数据检查和解构。它没有运行时的影响，只是在编译阶段起作用。了解就好，感觉就是个鸡肋
1)"尖括号"语法
<p class="pre-cmd">let someValue: any = "this is a string";
let strLength: number = (&#60string>someValue).length;
//其实跟 let strL: number = someValue.length; 效果一样</p>
2)as 语法
<p class="pre-cmd">let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;</p>
<span>③ 类型别名</span>
多种类型可以用|隔开，比如number | string表示可以是number或string类型
type Message = string | string[];
let greet = (message: Message) => {
  // ...
};</pre>
          <h3>类型解构</h3>
          <pre>
<span>① 数组</span>
1)数组解构
let x: number, let y: number ,let z: number;
let five_array = [0,1,2,3,4];
[x,y,z] = five_array;
2)数组展开运算符
let two_array = [0,1];
let five_array = [...two_array,2,3,4]; //这里是重点，加...就能赋值使用，用起来是挺方便的
3)数组循环
let colors: string[] = ["red", "green", "blue"];
for(let i in colors) {
console.log(i);
<span>② 对象</span>
1)对象解构
let person = {
  name: 'Semlinker',
  gender: 'male'
};
let {name, gender} = person;
console.log({name, gender})
{name: "Semlinker", gender: "male"} 可以认为就是person
2)组装对象
let person = {
  name: 'Semlinker',
  gender: 'male',
  address: 'Xiamen'
};
let personWithAge = {...person, age: 31};
console.log(personWithAge);
//{name: "Semlinker", gender: "male", address: "Xiamen", age: 31}
3)获取除了某些项外的其它项
let {name, ...d} = person;
console.log({name, ...d});
//{name: "Semlinker", gender: "male", address: "Xiamen"}
let {address, ...a} = person;   //key值address在前，...a是a是b无所谓
console.log({address, ...a});
//{address: "Xiamen", name: "Semlinker", gender: "male"}</pre>
          <h3>function(函数)</h3>
          <pre>
<span>① 参数和返回值可以限定类型，参数后面为返回值类型</span>
//ES5
function (name:string="老王"):string{
   retrun 'hello'+name;
}
consolo.log(hello()) //hello老王
//ES6
let hello=(name:string):string=>"Hello ${name}"
// 使用箭头函数
function Book() {
  this.publishDate = 2016;
  setInterval(() => {
    console.log(this.publishDate);
  }, 1000);
}
<span>② 参数可以设置默认值</span>
var myname:string="test"
function test(a:string,b:string,c:string="test"){
//c可以不传，a，b必须传
}
<span>③ 可选参数，参数后加?</span>
function test(a: string, b?: string, c: string="test"){}
test("xxx");   "xxx"代表的是形参a，b实现选填，c可以不传</pre>
          <h3>class(类)</h3>
          <pre>
利用class类你可以扩展其他的class，实现多个接口，添加构造函数，公开属性和方法。
export 关键字使类和接口在模块外部可见，实现接口使用implements关键字，继承类使用extends关键字，当你扩展一个类时，用super关键字调用基类的方法。用this关键字来调用当前类的属性和方法。
1）类和模块内部默认采用严格模式，不需要使用 use strict 指定运行模式。
2）constructor 方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有 constructor 方法，如果没有显式定义，一个空的 constructor 方法会被默认添加，这一点与Java的类一致。
3）必须使用 new 命令来调用 class ，否则将会报错。
4）类不存在变量提升，只有先声明类，才能使用类。
5）类的方法内部如果含有 this ，它默认指向类的实例。但是如果我们单独将其方法提取出来，this 值可能会指向当前运行的环境。为了防止这种事情的发生，我们可以使用箭头函数（箭头函数的 this 值指向初始化的函数）。
<span>① 属性可以定义私有或共有</span>
在TypeScript中，每个成员默认是"public"的
protected  只在自己的类里和子类可见
private    定义类的私有成员，只能在自己的类里可见，就是说不能在声明它的类的外部访问它，当然在实例里也不行。
static     类自身的成员，可以继承，但实例无法访问，一般多见于工具类，比如在jQuery时代最常见的 $.ajax ，ajax 便是 $ 的静态方法，使用方便，不需要再通过 new 或者函数调用的得到一个新实例。
abstract   定义抽象类，它们不会被实例化，仅提供继承
<p class="pre-cmd">class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}
new Animal("Cat").name; // Error: 'name' is private;  private声明的在实例里也不能调用</p>
<span>② 在类里面当某一个成员使用了"this"，意味着他访问的是这个类的成员</span>
<p class="pre-cmd">class testFun{
  name:string;
  constructor(arg:string){
    this.name=arg;  //构造函数入口
  };
  greet(){
    console.log(this.name);
    return this.name+'向你问哈马皮'
  }
}
let  test=new testFun("sfa");
console.log(test. greet())
test.name = "老王";
console.log(test. greet()) //"老王向你问哈马皮"</p>
<span>③ 继承</span>
通过extends关键字来继承  super来引用父类           ]
<p class="pre-cmd">class Animal {
  name:string;
  constructor(theName: string) {
     this.name = theName;
    }
  move(meters: number = 0) {
      alert(this.name + " moved " + meters + "m.");
  }
}
class Snake extends Animal {
  constructor(name: string) {
     super(name);
  }
  move(meters = 5) {
      alert("Slithering...");
      super.move(meters);
  }
}
class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(meters = 45) {
      alert("Galloping...");
      super.move(meters);
  }
}
var sam = new Snake("Sammy the Python");
var tom: Animal = new Horse("Tommy the Palomino");
sam.move();  //"Slithering..."   Sammy the Python moved 5 m.
tom.move(34); //"Galloping..."   Tommy the Palomino moved 34 m.</p></pre>
          <h3>interface 接口</h3>
          <pre>
在TypeScript里，接口扮演了一个定义数据结构的角色，它在TypeScript的类型检查中起到很重要的作用。
class类主要的用法是利用实例，interface主要用法是构建参数类型和类型检测
接口重要的意义是对值所具有的结构进行类型检查 (重点是结构，类型检测)
接口只声明成员方法，不做实现，不涉及逻辑运算
接口根据属性划分，可以划分成三类，一种是必选属性，另一种是可选属性，还有一种就是只读属性。
<span>① 必选属性</span>
必选属性就是函数必须要有的属性。
<p class="pre-cmd">interface PersonVaule{
    name:string;
    age:number;
}
function Person(person:PersonVaule){  PersonVaule在这里作为函数形参类型，等同于string，number
    this.name=person.name;
    this.age=person.age;
}
//创建实例
var xiaoming=new Person({name:"xiaoming",age:18})</p>
类型检查器并不会检查属性的顺序，但是必须要必选属性。
var xiaoming2=new Person({age:18,name:"xiaoming"})//没有问题
var xiaoming3=new Person({name:"xiaoming"})
 //提示属性缺失:Property 'age' is missing in type '{ name: string; }'.
<span>② 可选属性</span>
接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个?符号。
<p class="pre-cmd">interface AnimalVaule{
    name?:string;
    eat:string;
    lifestyle?:string;
}
function Animal(animal:AnimalVaule){
    this.name=animal.name;
    this.eat=animal.eat;
    this.lifestyle=animal.lifestyle;
}
let cat=new Animal({eat:"食肉动物",lifestyle:"昼伏夜出"});</p>
可选属性好处有二：
1. 可以对可能存在的属性进行预定义
2. 可以捕获引用了不存在的属性时的错误。
let dog=new Animal({eat:"适应性的肉食类动物",lifestle:"昼行夜伏"})
//'lifestle' does not exist in type 'AnimalVaule'.
<span>③ 只读属性</span>
一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用readonly来指定只读属性:
interface Point {
    readonly x: number;
    readonly y: number;
}
你可以通过赋值一个对象字面量来构造一个Point。 赋值后，x和y再也不能被改变了。
let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
4)interface除了定义函数参数类型，还可以用在angular中定义@Input类型
// 先定义绑定输入属性的类型格式
<p class="pre-cmd">export interface Bindpro {
  id: string;
  width?: string;
  height?: string;
  placeholder?: '';
  edit?: boolean;
  options: any[];
  style?: {}
}
@Input()bindpro: Bindpro= {
  id: '',
  width: 0 + 'px',
  height: 0 + 'px',
  placeholder: '',
  edit: true,
  options: [],
  style: {},
};</p> </pre>
          <h3>关键字 implements</h3>
          <pre>
接口使用关键字 interface 来定义，并使用关键字 implements 来实现接口中的方法，且必须完全实现。
相当在class类中用implement引入接口，使用接口中的相关函数
 //定义接口
interface User{
    function getDiscount();
    function getUserType();
}
//VIP用户 接口实现
class VipUser implements User{
    // VIP 用户折扣系数
    private discount = 0.8;
    function getDiscount() {
        return this.discount;
    }
    function getUserType() {
        return "VIP用户";
    }
}
 class 子类 extends 父类 implemtns 接口1, 接口2, ...
 {
    ......
 }
          </pre>
          <h3>d.ts介绍</h3>
          <pre>
https://blog.csdn.net/snsHL9db69ccu1aIKl9r/article/details/87870975
https://ts.xcatliu.com/basics/declaration-files#declare-var

d.ts大名叫TypeScript Declaration File
当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。
例如使用 jQuery，一种常见的方式是在 html 中通过script标签引入 jQuery，然后就可以使用全局变量 $ 或 jQuery 了
ts 中，编译器并不知道 $ 或 jQuery 是什么东西
我们需要使用 declare var 来定义它的类型
declare var jQuery: (selector: string) => any;  // 先声明
jQuery('#foo');  //  后使用
上例中，declare var 并没有真的定义一个变量，只是定义了全局变量 jQuery 的类型，仅仅会用于编译时的检查，在编译结果中会被删除。它编译结果是：jQuery('#foo');

全局变量的声明文件主要有以下几种语法：

declare var 声明全局变量
declare const 声明全局变量
declare function 声明全局方法
declare class 声明全局类
declare enum 声明全局枚举类型
declare namespace 声明（含有子属性的）全局对象
interface 和 type 声明全局类型
declare var 是最简单的，如之前所学，它能够用来定义一个全局变量的类型。与其类似的，还有 declare let 和 declare const，使用 let 与使用 var 没有什么区别，const 定义时，表示此时的全局变量是一个常量，不允许再去修改它的值了
declare var aaa:number|string //注意这里用的是一个竖线表示"或"的意思
如果是常量的话用关键字const表示：declare const max:200

在函数类型的声明语句中，函数重载也是支持的
declare function get(id: string | number): string
declare function get(name:string,age:number): string


declare class§
当全局变量是一个类的时候，我们用 declare class 来定义它的类型7：

// src/Animal.d.ts
declare class Animal {
    name: string;
    constructor(name: string);
    sayHi(): string;
}
// src/index.ts
let cat = new Animal('Tom');
同样的，declare class 语句也只能用来定义类型，不能用来定义具体的实现，比如定义 sayHi 方法的具体实现则会报错：
// src/Animal.d.ts
declare class Animal {
    name: string;
    constructor(name: string);
    sayHi() {
        return `My name is ${this.name}`;
    };
    // ERROR: An implementation cannot be declared in ambient contexts.
}


declare namespace§
namespace 是 ts 早期时为了解决模块化而创造的关键字，中文称为命名空间。
由于历史遗留原因，在早期还没有 ES6 的时候，ts 提供了一种模块化方案，使用 module 关键字表示内部模块。但由于后来 ES6 也使用了 module 关键字，ts 为了兼容 ES6，使用 namespace 替代了自己的 module，更名为命名空间。
随着 ES6 的广泛应用，现在已经不建议再使用 ts 中的 namespace，而推荐使用 ES6 的模块化方案了，故我们不再需要学习 namespace 的使用了。
namespace 被淘汰了，但是在声明文件中，declare namespace 还是比较常用的，它用来表示全局变量是一个对象，包含很多子属性。

interface 和 type§
除了全局变量之外，可能有一些类型我们也希望能暴露出来。在类型声明文件中，我们可以直接使用 interface 或 type 来声明一个全局的接口或类型12：
// src/jQuery.d.ts
interface AjaxSettings {
    method?: 'GET' | 'POST'
    data?: any;
}
declare namespace jQuery {
    function ajax(url: string, settings?: AjaxSettings): void;
}
这样的话，在其他文件中也可以使用这个接口或类型了：
// src/index.ts
let settings: AjaxSettings = {
    method: 'POST',
    data: {
        name: 'foo'
    }
};
jQuery.ajax('/api/post_something', settings);
type 与 interface 类似          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'typescript',
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
                    var o = {name: object[i].innerHTML};
                    flag.push(o)
                }
                this.catalogue = flag;
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
