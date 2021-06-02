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
深拷贝和浅拷贝的区别是什么
区别：浅拷贝只是增加了一个指针指向已存在的内存地址，仅仅是指向被复制的内存地址，如果原地址发生改变，那么浅复制出来的对象也会相应的改变。深拷贝是增加了一个指针并且申请了一个新的内存，使这个增加的指针指向这个新的内存。

1.JSON.parse(JSON.stringify(object))  用 JSON.stringify 把对象转换成字符串，再用 JSON.parse 把字符串转换成新的对象但是需要注意的是可以转成 JSON 格式的对象才能使用这种方法，如果对象中包含 function 或 RegExp 这些就不能用这种方法了。

function deepClone(obj) {
  var _obj = JSON.stringify(obj),
    objClone = JSON.parse(_obj);
  return objClone;
}

2.Object.assign()拷贝

当对象中只有一级属性，没有二级属性的时候，此方法为深拷贝，但是对象中有对象的时候，此方法，在二级属性以后就是浅拷贝。

3.使用递归的方式实现深拷贝

此外，通过jQuery的extend方法实现深拷贝，lodash.cloneDeep()实现深拷贝。

var array = [1,2,3,4];
var newArray = $.extend(true,[],array);

lodash很热门的函数库，提供了 lodash.cloneDeep()实现深拷贝

4.手写深拷贝方法
  // 使用递归的方式实现数组、对象的深拷贝
  cloneDeep(source) {
    if (!this.isObject(source)) {
      return source; // 非对象返回自身
    }
    let target = Array.isArray(source) ? [] : {};
    for (let key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        if (this.isObject(source[key])) {
          target[key] = this.cloneDeep(source[key]); // 注意这里
        } else {
          target[key] = source[key];
        }
      }
    }
    return target;
}</pre>
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
