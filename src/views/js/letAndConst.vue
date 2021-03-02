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
            1、先说一下块级作用域
          </h3>
          <pre>
①　在ECMAScript6（以下简称ES6）之前，ECMAScript的作用域只有两种：
1.全局作用域；
2.函数作用域。
正是因为有这两种作用域，所以在JavaScript中出现一术语--“变量提升（hoisting）”。
如下：
function func(){
  console.log(test);
  var test = 1;
};
func();
在node环境执行上述代码，结果为：undefined
之所以为’undefined’，原因就在于‘变量提升’，在进入func函数时，将所有通过var声明的变量置前并赋予undefined的值。
②　ES6的到来，为我们提供了‘块级作用域’。且‘块级作用域’并不影响var声明的变量。
var声明变量的性质和原来一样，还具有‘变量提升’的特性。而‘块级作用域’通过新增命令let和const来体现。
注：由于let和const属于ES6，所以都必须使用严格模式，否则会报错。
          </pre>
          <h3>2、let命令</h3>
          <pre>
什么是let呢？
let和var差不多，都是用来声明变量的。区别就在于：
①　let声明的变量只在所处于的块级有效；
function func(args){
    if(true){
        //let声明i
        let i = 6;
        //在if内打印i值
        console.log('inside: ' + i);
    }
    //在if外，再次打印i值
    console.log('outside: ' + i);
};
func()
第二次（if外）打印i值时，是报错的 'outside: ' + i  i is not defind
这因为let声明的变量i是属于if内的块级作用域；而不是像var一样。
②　let没有‘变量提升’的特性，而是‘暂时性死区（temporal dead zone）’特性
var test = 1;
function func(){
    //打印test的值
    console.log(test);
    let test = 2;
};
func()
打印结果 test is not defined
ES6规定了在let声明变量前不能使用该变量；但是如果let声明的变量没有变量提升，应该打印’1’（func函数外的test）；而他却报错，说明它是提升了的，只是规定了不能在其声明之前使用而已。我们称这特性叫“暂时性死区（temporal dead zone）”。且这一特性，仅对遵循‘块级作用域’的命令有效（let、const）。
          </pre>
          <h3>
            1、let和const的相同点
          </h3>
          <pre>
①　只在声明所在的块级作用域内有效。
②　不提升，同时存在暂时性死区，只能在声明的位置后面使用。
③　不可重复声明</pre>
          <h3>2、let和const的不同点</h3>
          <pre>
①let声明的变量可以改变，值和类型都可以改变，没有限制。
②const声明的变量不得改变值
定义常量值，不可以重新赋值，但是如果值是一个对象或是数组，可以改变对象或数组里的属性值
定义为对象
const OBJ = {"a":1, "b":2};
OBJ.a = 3;
OBJ = {};// 重新赋值，报错！
console.log(OBJ.a);   // 3
定义为数组
const arr = [];
arr = [1,2,3];   // 报错，[1,2,3]与[]不是同一个地址
arr[0] = 1;     // 不报错，变量名arr指向的地址不变，只是数据改变
const扩展
若想让定义的对象或数组的数据也不能改变，可以使用object.freeze(arr)进行冻结。冻结指的是不能向这个对象或数组添加新的属性，不能修改已有属性的值，不能删除已有属性。
const arr = [];
Object.freeze(arr);
arr[0] = 1;  // 不报错，但数据改变无效
arr[1] = 2;
console.log(arr.length); // 输出：0        </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'letAndConst',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    created(){},
    mounted() {
      this.$nextTick(function () {
        var arr = [];
        for(var i = 0; i <6; i++){
          console.log(i);
          arr.push(function () {
            console.log(i);
          });
        }
        arr[0]();
        arr[1]();

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
