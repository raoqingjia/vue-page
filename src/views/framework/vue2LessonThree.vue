<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          https://blog.csdn.net/qq_51386142/article/details/125397773
          <h3>1、export和export default 的区别</h3>
          <pre>作用：export是用于导出常量、函数、模块等，在其他文件引入时可以直接import
可用数量不同：一个文件里export和import可以有很多个，但export default只能有1个
代码格式规范不同：
export function output() { ... }  // 导出
import {output} from './example'  // 引入

export default function output() { ... }   // 导出
import output from './example'  // 引入
即export default 在导入时可以不加{}，换言之，其实只是语法糖不一样

说白了，它其实是别名的语法糖：as取一个别名
export default function() {}
// 等效于：
function a() {};
export {a as default};

import a from './d';
// 等效于，或者说就是下面这种写法的简写，是同一个意思
import {default as a} from './d'</pre>
          <h3>2、$refs</h3>
          <pre>使用场景：
1、调用组件：
原因：由于vue中尽量不使用dom元素，因此在不得不使用是就采用ref
方法：先将需要获取的目标元素绑定ref属性，使用时直接this.$refs.ref的属性值
2、父组件调用子组件:
方法：this.$refs.子组件的ref的属性值
          </pre>
          <h3>3、props</h3>
          <pre></pre>
          <h3></h3>
          <pre></pre>
          <h3></h3>
          <pre></pre>
          <h3></h3>
          <pre></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'vue2LessonThree',
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
