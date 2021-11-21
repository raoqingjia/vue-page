<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>什么是构造函数</h3>
          <pre>
构造函数（Constructor）的创建方式和普通函数一样。但通常首字母进行大写，用于和普通函数区分。
但是当一个函数创建好以后，我们并不知道它是不是构造函数（即使函数名的首字母为大写）。只有当它以 new 操作符来调用的时候，我们才能说它是一个构造函数。

// 这是一个通用的默认构造函数类 Car
function Car(make, model, year) {
  this.make = make
  this.model = model
  this.year = year
}

// 分配给 beetle 的一个新的 Car 对象引用
let beetle = new Car('Volkswagen', 'Beetle', 1938)
console.log(beetle.model) // expected output: "Beetle"</pre>
          <h3>构造函数属于被实例化的特定类对象</h3>
          <pre>构造函数属于被实例化的特定类对象，所以它的函数名同时也是它的类名。
上面代码中的 Car() 是一个构造函数，Car 既是它的函数名，也是它的类名。
将构造函数 Car 转换为类声明如下：
class Car {
  constructor(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
  }
}</pre>
          <h3>构造函数的作用</h3>
          <pre>构造函数的作用是新建实例对象，并且给实例对象内的成员（属性或方法）赋值。
在我们需要创建大量同一类型的对象时，这些对象都具有某些属性或方法，如果我们直接通过变量加字面量的形式进行赋值，会产生很多重复的代码。而当我们将这些对象抽象为一个类时，创建一个构造函数，就可以实现代码复用。

// 通过变量加字面量的形式依次进行赋值
let beetle = { make: 'Volkswagen', model: 'Beetle', year: '1938' }
let porsche911 = { make: 'Porsche', model: 'Porsche 911', year: '1963' }
let accord = { make: 'Accord', model: 'Honda', year: '1976' }

// 通过构造函数的形式进行赋值
let beetle = new Car('Volkswagen', 'Beetle', 1938)
let porsche911 = new Car('Porsche', 'Porsche 911', 1963)
let accord = new Car('Accord', 'Honda', 1976)</pre>
          <h3>用 this 来设置对象内的属性或方法</h3>
          <pre>function Car(make, model, year) {
  this.make = make
  this.model = model
  this.year = year
  this.introduce = function () {
    alert(`I'm the ${model}. I'm from ${make}. I was made in ${year}.`)
  }
}</pre>
          <h3>通过 new 操作符进行调用</h3>
          <pre>要调用构造函数，请使用 new 操作符将新的对象引用分配给一个变量/常量。
let beetle = new Car('Volkswagen', 'Beetle', 1938)</pre>
          <h3>构造函数的执行过程</h3>
          <pre>当以 new 操作符调用某一个构造函数时，构造函数会立刻在堆内存中创建一个新的内存空间，并将这个内存空间的地址赋值给 this。
执行函数体内的代码，当构造函数执行完毕，会将 this 赋值给一个新的实例 instance，并返回 instance。
当调用结束时，instance 就是我们所需要的新的对象。</pre>
          <h3>构造函数的返回值</h3>
          <pre>默认情况下，构造函数的返回值是 this，即新创建的对象。
// 这是一个通用的默认构造函数类 Car
function Car(make, model, year) {
  this.make = make
  this.model = model
  this.year = year
}
// 分配给 beetle 的一个新的 Car 对象引用
let beetle = new Car('Volkswagen', 'Beetle', 1938)
console.log(beetle) // expected output: { make: 'Volkswagen', model: 'Beetle', year: '19}

特殊情况下，构造函数可以返回一个指定的值。
function Car(make, model, year) {
  this.make = make
  this.model = model
  this.year = year
  return {
    name: `${make} ${model} ${year}`,
  }
}
let beetle = new Car('Volkswagen', 'Beetle', 1938)
console.log(beetle) // expected output: { name: 'Volkswagen Beetle 1938' }</pre>
          <h3>构造函数的继承</h3>
          <pre>通过 call 或 apply 方法
function Car(make, model, year) {
  this.make = make
  this.model = model
  this.year = year
}
function Wheel(make, model, year) {
  Car.call(this, make, model, year)
  this.wheels = 4
}
let beetle = new Wheel('Volkswagen', 'Beetle', 1938)
console.log(beetle.wheels) // expected output: 4

通过 prototype 属性
function Car(make, model, year) {
  this.make = make
  this.model = model
  this.year = year
}
function Wheel() {
  this.wheels = 4
}
// 将 Wheel 的原型对象赋值给 Car 的原型对象
Car.prototype = new Wheel()
// 纠正继承链
Car.prototype.constructor = Car
let beetle = new Car('Volkswagen', 'Beetle', 1938)
console.log(beetle.wheels) // expected output: 4</pre>
          <h3>构造函数（Constructor）和类（Class）的区别</h3>
          <pre>构造函数是一个普通的函数。在 ES6 之前，我们习惯用构造函数去创建一个类。不过后来 ES6 定义了 Class 关键字，它可以理解为是构造函数的一个语法糖，可以让我们更加方便地创建一个类。
类只能使用 new 操作符调用，否则会报错。
class 可以通过 extends 关键字很方便的实现继承
class Car {
  constructor(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
  }
}
class Beetle extends Car {
  constructor(make, model, year) {
    // super 用于访问和调用一个对象的父对象上的函数
    // 传递给 super 的参数会被传递给父类的构造函数
    super(make, model, year)
    // super() 只能在使用 this 之前调用
    this.wheels = 4
  }
}
let myBeetle = new Beetle('volkswagen', 'beetle', 1967)
console.log(myBeetle) // expected output: Beetle {make: "volkswagen", model: "beetle", year: 1967, wheels: 4}</pre>
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
