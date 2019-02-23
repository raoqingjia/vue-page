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
            1.querySelector()/querySelectorAll()用法
          </h3>
          <pre>
获取文档中 id="demo" 的第一个元素：document.querySelector("#demo");
获取文档中 class="example" 的第一个元素:document.querySelector(".example");
获取文档中 class="example" 的第一个 &#60p> 元素:document.querySelector("p.example");
querySelector() 方法仅仅返回匹配指定选择器的第一个元素。如果你需要返回所有的元素，请使用 querySelectorAll() 方法替代。
querySelector按css规范实现，即css标识符也不能以数字开头。
document.querySelector("#02E503E2A1");这样的id是获取不到的</pre>
        <h3>
          2.getElement()用法
        </h3>
        <pre>
getElementById()方法可返回对拥有指定 ID 的第一个对象的引用。
如果没有指定 ID 的元素返回 null
如果存在多个指定ID的元素则返回 undefined。
getElementsByTagName方法返回一个对象数组（准确的说是HTMLCollection集合）,
返回元素的顺序是它们在文档中的顺序,传递给 getElementsByTagName() 方法的字符串可以不区分大小写；
getElementsByClassName方法来获取指定class名的元素,该方法返回文档中所有指定类名的元素集合，
作为 NodeList 对象。NodeList 对象代表一个有顺序的节点列表。NodeList 对象我们可通过节点列表中的
节点索引号来访问列表中的节点(索引号由0开始), 所以有时使用时要指定下标，
 使用方法如下:document.getElementsByClassName('className');</pre>
          <h3>
            3.querySelector和getElementById方法的区别
          </h3>
        <pre>
querySelectorAll 已被 IE 8+、FF 3.5+、Safari 3.1+、Chrome 和 Opera 10+ 良好支持。
getElementsBy 系列，以最迟添加到规范中的 getElementsByClassName 为例，IE 9+、FF 3 +、Safari 3.1+、Chrome 和 Opera 9+ 都已经支持该方法了。
query选择符选出来的元素及元素数组是静态的,如果是动态生成的则不会被选出来，而getElement这种方法选出的元素静态，动态的都可以被选出来。
但是速率上还是getElement快的多。       </pre>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'queryAndById',
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
