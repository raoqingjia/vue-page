<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>1. 前言</h3>
          <pre>__proto__属性的两边是各由两个下划线构成（这里为了方便大家看清，在两下划线之间加入了一个空格：_ _proto_ _，读作“dunder proto”，“double underscore proto”的缩写），实际上，该属性在ES标准定义中的名字应该是[[Prototype]]，具体实现是由浏览器代理自己实现，谷歌浏览器的实现就是将[[Prototype]]命名为__proto__，大家清楚这个标准定义与具体实现的区别即可（名字有所差异，功能是一样的），可以通过该方式检测引擎是否支持这个属性：Object.getPrototypeOf({__proto__: null}) === null。

__proto__和constructor属性是对象所独有的；prototype属性是函数所独有的。但是由于JS中函数也是一种对象，所以函数也拥有__proto__和constructor属性

__proto__（隐式原型）与prototype（显式原型）</pre>
          <h3>__proto__</h3>
          <pre>__proto__ 属性，它是对象所独有的，可以看到__proto__属性都是由一个对象指向一个对象，即指向它们的原型对象（也可以理解为父对象），那么这个属性的作用是什么呢？它的作用就是当访问一个对象的属性时，如果该对象内部不存在这个属性，那么就会去它的__proto__属性所指向的那个对象（可以理解为父对象）里找，如果父对象也不存在这个属性，则继续往父对象的__proto__属性所指向的那个对象（可以理解为爷爷对象）里找，如果还没找到，则继续往上找…直到原型链顶端null（可以理解为原始人。。。），再往上找就相当于在null上取值，会报错（可以理解为，再往上就已经不是“人”的范畴了，找不到了，到此结束，null为原型链的终点），由以上这种通过__proto__属性来连接对象直到null的一条链即为我们所谓的原型链。
其实我们平时调用的字符串方法、数组方法、对象方法、函数方法等都是靠__proto__继承而来的
系统不推荐通过f1.__proto__ 即 实例.__proto__ 去访问原型
es6新增了Object.getPrototypeOf(f1)去访问  通过实例去拿原型
或者通过prototype去拿原型</pre>
          <h3>prototype</h3>
          <pre>prototype属性它是函数所独有的，它是从一个函数指向一个对象。它的含义是函数的原型对象，也就是这个函数（其实所有函数都可以作为构造函数）所创建的实例的原型对象，由此可知：f1.__proto__ === Foo.prototype，它们两个完全一样。那prototype属性的作用又是什么呢？它的作用就是包含可以由特定类型的所有实例共享的属性和方法，也就是让该函数所实例化的对象们都可以找到公用的属性和方法。任何函数在创建的时候，其实会默认同时创建该函数的prototype对象
function Mother(name) {
  this.name = name;
}
var son = new Mother('liming');
console.log(son.__proto__ === Mother.prototype);  // true
console.log(Object.getPrototypeOf(son) === Mother.prototype); // true
实例的__proto__  等于 构造函数的prototype（重点）</pre>
          <h3>constructor</h3>
          <pre>constructor属性也是对象才拥有的，它是从一个对象指向一个函数，含义就是指向该对象的构造函数，每个对象都有构造函数，从上图中可以看出Function这个对象比较特殊，它的构造函数就是它自己（因为Function可以看成是一个函数，也可以是一个对象），所有函数和对象最终都是由Function构造函数得来，所以constructor属性的终点就是Function这个函数
function Foo(){
  this.a = 1;
}
Foo.prototype = {
  b:function(){
    console.log(b)
  },
  constructor:Foo  //  关键点
}
var f1 = new Foo();
console.log(Foo.prototype.constructor === Foo); // true
console.log(f1.constructor === Foo); // true
上面的逻辑前提是Foo.prototype没被重写</pre>
          <h3>总结</h3>
          <pre>我们需要牢记：
__proto__和constructor属性是对象所独有的；
prototype属性是函数所独有的，因为函数也是一种对象，所以函数也拥有__proto__和constructor属性。
__proto__属性的作用就是当访问一个对象的属性时，如果该对象内部不存在这个属性，那么就会去它的__proto__属性所指向的那个对象（父对象）里找，一直找，直到__proto__属性的终点null，再往上找就相当于在null上取值，会报错。通过__proto__属性将对象连接起来的这条链路即我们所谓的原型链。
prototype属性的作用就是让该函数所实例化的对象们都可以找到公用的属性和方法，即f1.__proto__ === Foo.prototype。
constructor属性的含义就是指向该对象的构造函数，所有函数（此时看成对象了）最终的构造函数都指向Function。</pre>
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
                title: this.$route.query.name
            }
        },
        mounted() {
            this.$nextTick(function () {
            })
        },
        methods: {
            toggle() {

            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
