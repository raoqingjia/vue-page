<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>
            一、prototype和__proto__的区别
          </h3>
          <pre>
prototype是函数才具有的属性 ，__proto__是每个对象都有的属性
var a = {};
console.log(a.prototype);  //undefined
console.log(a.__proto__);  //Object {}
var b = function(){}
console.log(b.prototype);  //b {}
console.log(b.__proto__);  //function() {}

var A = function(){};
var a = new A();
console.log(a.__proto__); //A {}（即构造器function A 的原型对象）
console.log(a.__proto__.__proto__); //Object {}（即构造器function Object 的原型对象）
console.log(a.__proto__.__proto__.__proto__); //null</pre>
          <h3>
            二、构造函数，与实例
          </h3>
          <pre>
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function() { alert(this.name) }
}
var person1 = new Person('Zaxlct', 28, 'Software Engineer');
var person2 = new Person('Mick', 23, 'Doctor');
console.log(person1);  //Person {name: "Zaxlct", age: 28, job: "Software Engineer", sayName: ƒ}
console.log(person2);  //Person {name: "Mick", age: 23, job: "Doctor", sayName: ƒ}
上面的例子中 person1 和 person2 都是 Person 的实例。这两个实例都有一个 constructor （构造函数）属性，该属性（是一个指针）指向 Person。 即：
console.log(person1.constructor == Person); //true
console.log(person2.constructor == Person); //true
我们要记住两个概念（构造函数，实例）：
person1 和 person2 都是 构造函数 Person 的实例
一个公式：
实例的构造函数属性（constructor）指向构造函数。</pre>
          <h3>
            三、原型对象 Person.prototype （var A = Person.prototype）
          </h3>
          <pre>
在JavaScript每个函数对象都有一个prototype 属性，这个属性指向函数的原型对象。
先看这么一个案例
function Person() {}
Person.prototype.name = 'Zaxlct';
Person.prototype.age  = 28;
Person.prototype.job  = 'Software Engineer';
Person.prototype.sayName = function() {
  alert(this.name);
}
var person1 = new Person();
person1.sayName(); // 'Zaxlct'
var person2 = new Person();
person2.sayName(); // 'Zaxlct'
console.log(person1.sayName == person2.sayName); //true  注意这里是true，也就是说二者是相等的
那什么是原型对象呢？
我们把上面的例子改一改你就会明白了：
Person.prototype = {    //注意这里，是不是很像一个构造函数
   name:  'Zaxlct',
   age: 28,
   job: 'Software Engineer',
   sayName: function() {
     alert(this.name);
   }
}
原型对象，顾名思义，它就是一个普通对象（废话 = =!）。从现在开始你要牢牢记住原型对象就是 Person.prototype ，如果你还是害怕它，那就把它想想成一个字母 A：var A = Person.prototype

具体说明API https://www.jianshu.com/p/dee9f8b14771</pre>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'jsPrototype',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
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
