<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>
书面语中，实例是实际的例子。
在计算机语言中，“类”在实例化之后叫做一个“实例”。 “类”是静态的，不占进程内存，而“实例”拥有动态内存。在数据库中，代表一些程序的集合。如Oracle中，实例就是一些能支撑数据库运行的数据库程序

简单来说实例就是你new了一个对象，或者new了一个class类，常见的创建实例有下面两种方式
//constructor
function Car(color, title){
   this.color = color;
   this.title = title;
   this.start = start;
}
var person1 = new Object();   var car = new Car("red", "BMW");   方式一
var person2 = {};            方式二
car 、person1、person2 这些个都是实例。实例简单的理解就是成品。比如说蛋糕。Car就是构造函数，可以理解为做蛋糕的模具。
JS 是基于原型的面向对象语言, 所有数据都可以当作对象处理，所以person1是对象,也可以把它当作是Object的实例，方式二采用对象字面量的方式生成的person2也是如此，然而它内部没有调用new Object()，而是采用JSON的初始化方式：将现有的引用指向person

实例和对象的区别，从定义上来讲：
1、实例是类的具象化产品，
2、而对象是一个具有多种属性的内容结构

实例都是对象，而对象不全是实例，例如
动物          ---  对象
一只狗        ---  实例

对于function函数:
函数实际上就是对象,每个函数都是Function类型的实例,由于函数是对象,因此函数名也是指向函数对象的一个指针,并不会和函数绑定</pre>
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
