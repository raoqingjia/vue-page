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
function Mother(lastName) {
  this.lastName = lastName;
}
var son = new Mother('liming');

1、创建一个新对象son
2、新对象会被执行[[prototype]]连接
son.__proto__ === Mother.prototype
3、新对象和函数的this会绑定起来 Mother.call(son,'liming')
4、执行构造函数中的代码son.lastName
5、如果函数没有返回值，那么就会自动返回这个新对象 return this；

解释序号5的案例
function Mother(lastName) {
  this.lastName = lastName;
  // return this;
}
var son = Mother('liming');  // 这里这没有加new 关键字
console.log(son.lastName); //  如果没有return this;   报错
          </pre>
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
