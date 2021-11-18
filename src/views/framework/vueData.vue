<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>Object是引用数据类型，如果不用function返回，每个组件的data都是内存的同一个地址，一个数据改变了其他也改变了；

JavaScript只有函数构成作用域(注意理解作用域，只有函数 {} 构成作用域,对象的 {} 以及 if(){}都不构成作用域) ,data是一个函数时，每个组件实例都有自己的作用域，每个实例相互独立，不会相互影响。

组件是可复用的vue实例，一个组件被创建好之后，就可能被用在各个地方，而组件不管被复用了多少次，组件中的data数据都应该是相互隔离，互不影响的，基于这一理念，组件每复用一次，data数据就应该被复制一次，之后，当某一处复用的地方组件内data数据被改变时，其他复用地方组件的data数据不受影响

因为同一个组件可能被复用引入多次，如果是一个对象的话，对象是一个堆内存空间地址，如一个组件被复用了三次，那么当其中一个组件中的data被修改了，另外两个也会跟着发生变化。因为他们指向同一块内存空间。

解决办法就是变成一个函数呀，因为函数执行形成一个私有作用域，也就是可以开辟一块独立的内存空间，有自己的Prototype原型。就互不影响了。

组件中的data写成一个函数，数据以函数返回值形式定义，这样每复用一次组件，就会返回一份新的data，类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据。而单纯的写成对象形式，就使得所有组件实例共用了一份data，就会造成一个变了全都会变的结果。</pre>
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
