<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>通过new Object创建对象</h3>
          <pre>var person = new Object();
person.name='黎明';
person.age='55';
person.hobby = '唱歌';
person.address=function (value) {
  console.log(value);
}
这种创建数据量大了就是个麻烦，记得我再OpenShift那个项目中就这么写过一大串的对象，得有十几行的字段命名</pre>
          <h3>通过字面量命名</h3>
          <pre>var person ={
   name:'黎明',
   age:'55',
   hobby : '唱歌',
   address:function (value) {
     console.log(value)
   }
 }
 简单明了，现在实际中多使用这种写法，但是不适合创建多个相同的person对象</pre>
          <h3>通过工程模式</h3>
          <pre>function car(name,color,address) {
  var obj = new  Object();
  obj.name = name;
  obj.color = color;
  obj.address = address;
  return obj;
}
var car1 = car('大众', 'red','china');
console.log(car1 instanceof car);  // false</pre>
          <h3>构造函数的写法</h3>
          <pre>function Person(name,age,hobby) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
  this.address = function (value) {
    console.log(value)
  }
}
var person1 = new Person('李明',22,'踢球');
console.log(person1 instanceof person);  // true
注意写法哈，person的构造函数写法 instanceof是true，car的工程模式写法就是false</pre>
          <h3>Object.create()</h3>
          <pre>var a = { rep: 'apple',color:['red','yellow']}
var b = Object.create(a)；
b.rep = 'banana';
b.color.push('green');
console.log(b.rep);  // banana
console.log(a.rep);  // apple  源对象不改变
console.log(b.color);  // [ 'red', 'yellow', 'green' ]
console.log(a.color);  // [ 'red', 'yellow', 'green' ]  源对象也跟着改变了
个人感觉Object.create()就是当前的b实例对象继承了a对象里值，b.__proto__ ===a 就是写法上块，var b = Object.create(a)一行代码就搞定了，但是也得注意修改了对象上的引用数据类型属性，原型对象属性也跟着变</pre>
          <h3>es6的class创建</h3>
          <pre>class Person {
  constructor(name,age,hobby){
    this.name = name;
    this.age = age;
    this.hobby = hobby;
    this.address = function (value) {
      console.log(value)
    }
  }
}
var person1 = new Person('李明',22,'踢球');
console.log(person1);</pre>
          <h3>理解</h3>
          <pre>创建对象方式一大堆，比较主流的就是构造方法、class、字面量、Object.create()，个人感觉使用的时候注意场景，别修改实例对象的值会改变源数据的原型值就行</pre>
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
