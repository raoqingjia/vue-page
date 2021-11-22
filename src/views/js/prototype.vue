<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>javaScript 是面向对象的语言，JavaScript 基于 prototype 原型，而不是基于类的。即使在ES6中有了类的概念，但也只是语法糖而已。所有JS对象都会从它的原型对象中继承属性和方法，从而实现面向对象编程。
原型对象使用ObjectName.prototype.propertyName的语法访问和修改值、使用ObjectName.prototype.methodName语法调用和修改方法。原型对象的属性和方法被其原型链上的子对象继承。

prototype是原型对象，是所有实例的公共祖先，下面是举例说明（重点）
function Foo(){
  this.a = 1;
}
Foo.prototype.b = 10;
var foo = new Foo(); //新建一个foo实例
console.log(foo.b); // 打印10

举例原型链（重点）
例如城堡castle是通过那个桶创建的，castle.prototype === 桶
如果桶的有个 height ，比如： 桶.height= 20，那么 castle.height === 20 ,这里是原型链的原理
castle.prototype === 桶， 桶.prototype === 塑料。
也有点类似 小岳岳演的 祖宗十九代 ，找自己的属性： {样貌：丑}， 就是去 prototype 里面找，一代一代向前找。。
虽然 castle 自身没有定义 height, 但是依然可以用 height，就是因为原型链。

一句话总结：prototype 指向上一级,原型的重点是Object.prototype          </pre>
          <h3>构造器函数</h3>
          <pre>通过构造函数的new方法实例化对象
function Person(name,age){
    this.name = name;
    this.age = age;
}
var person = new Person("Jenny",18);//创建对象实例
var person2 = new Person("Maria",19);//创建对象实例

但是如果需要为构造函数添加属性，却无法直接通过类名添加。
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.propertypeName = "city";//已存在构造器的对象中是不能添加新的属性

要添加一个新的属性需要在在构造器函数中添加
function Person(name,age){
    this.name = name;
    this.age = age;
    this.city = "Shenzhen";
}
console.log(new Person().city);//Shenzhen</pre>
          <h3>prototype 继承</h3>
          <pre>
所有的JavaScript对象都会从一个原型对象中继承属性和方法。Date对象从Date.prototype中继承、Array对象从Array.prototype继承、Person对象从Person.prototype中继承。所有 JavaScript 中的对象都是位于原型链顶端的 Object 的实例。
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.city = "Guangzhou";
console.log(new Person().city);//Guangzhou

JavaScript 对象有一个指向一个原型对象的链。当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。原型链的末尾则指向Object.prototype。
如果原型对象的属性或方法在构造器或者实例对象中有了，则会讲原型对象的属性和方法覆盖。
function Person(name,age){
    this.name = name;
    this.age = age;
    this.city = "Shenzhen";
}
Person.prototype.city = "Guangzhou";
console.log(new Person().city);//Shenzhen

添加方法到原型对象的方式和添加属性也是如出一辙。
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function(){
    console.log(this.name+this.age);
}
new Person("Maria",19).greet();//Maria19</pre>
          <h3>案例引申</h3>
          <pre>
(function () {     //  避免变量污染
    var tree = function (id, name) {  // 构造函数
        this.id = id;
        this.name = name;
    };
    tree.prototype = {     //  原型链
        setId: function (id) {
            this.id = id;
        },
        setName: function (name) {
            this.name = name;
        }
    };
    window.tree = tree;  // 绑定为全局对象
}());

(function () {
    var tree = function (id, name) {
        this.id = id;
        this.name = name;
    };
    tree.prototype = {
        setId: function (id) {
            this.id = id;
        },
        setName: function (name) {
            this.name = name;
        }
    };
    window.treeOne = tree;
}());

var flag = new tree(1, "liming");
console.log(flag);
flag.setName("nidaye");
console.log(flag);
var object = new Object();
Object.prototype.nihao = '21321321321';
Object.prototype.toNidaye = function () {
};
console.log(object.nihao);
console.log(Object.getOwnPropertyNames(Object.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));</pre>
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
        title: this.$route.query.name
      }
    },
    mounted() {
      this.$nextTick(function () {
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
