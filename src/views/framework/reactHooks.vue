<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <ul class="catalogue clearfix">
            <li v-for="(items,index) in catalogue" :key="index"><a @click="jump(index)">{{index+1}}、{{items.name}}</a>
            </li>
          </ul>
          <h3>初步介绍hooks</h3>
          <pre>React 16.8 新出来的Hooks可以让React 函数组件具有状态，并提供类似 componentDidMount和componentDidUpdate等生命周期方法。
Hook 这个单词的意思是"钩子"。
React Hooks 的意思是，组件尽量写成纯函数，如果需要外部功能和副作用，就用钩子把外部代码"钩"进来。 React Hooks 就是那些钩子。
你需要什么功能，就使用什么钩子。React 默认提供了一些常用钩子，你也可以封装自己的钩子。
所有的钩子都是为函数引入外部功能，所以 React 约定，钩子一律使用use前缀命名，便于识别。你要使用 xxx 功能，钩子就命名为 usexxx。
下面是React提供的四个最常用的钩子。
useState()
useContext()
useReducer()
useEffect()
使用说明：
只能在「函数最顶层」调用 Hook，不要在循环、条件判断或者子函数中调用；
只能在 「React 的函数组件」中调用 Hook，不能是普通函数 也不能是 class 组件。          </pre>
          <h3>useState()</h3>
          <pre>用于定义函数组件的 State。
useState 接受唯一的参数作为 state 的初始值，不设置则为 undefined。
useState 调用后返回一个数组，包含两个元素，第一个值为 state 读取值，第二个值为改变 state 的函数</pre>
          <pre><code class="language-js line-numbers">----------------使用 Hook 的函数组件-------------------
import { useState } from 'react';
function Example() {
  const [count, setCount] = useState(0);
  return (
    < div>
      < p>You clicked {count} times< /p>
      < button onClick={() => setCount(count + 1)}> Click me < /button>
    < /div>
  );
}</code></pre>
          <pre>
<code class="language-js line-numbers">----------------等价的 class 组件-------------------
  class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      < div>
        < p>You clicked {this.state.count} times< /p>
        < button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        < /button>
      < /div>
    );
  }
  }</code>
          </pre>
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
  import Prism from "prismjs";

  export default {
    name: 'reactHooks',
    data() {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name,
        catalogue: []
      }
    },
    mounted() {
      Prism.highlightAll();
      this.$nextTick(function () {
        this.createCatalogue();
      })
    },
    methods: {
      jump(index) {
        let jump = document.getElementsByTagName('h3');
        let total = jump[index].offsetTop;  // 获取目标位置滚动的距离
        let distance = document.documentElement.scrollTop || document.body.scrollTop; //获取当前滚动轴的位置
        // 平滑滚动，时长500ms，每10ms一跳，共50跳
        let step = total / 50;
        if (total > distance) {
          smoothDown()
        } else {
          let newTotal = distance - total;  //防止total，let step=total/50太小，移动缓慢
          step = newTotal / 50;
          smoothUp()
        }

        function smoothDown() {
          if (total > distance) {
            distance += step;
            document.body.scrollTop = distance;
            document.documentElement.scrollTop = distance;
            setTimeout(smoothDown, 10)
          } else {
            document.body.scrollTop = total;
            document.documentElement.scrollTop = total
          }
        }

        function smoothUp() {
          if (total < distance) {
            distance -= step;
            document.body.scrollTop = distance;
            document.documentElement.scrollTop = distance;
            setTimeout(smoothUp, 10)
          } else {
            document.body.scrollTop = total;
            document.documentElement.scrollTop = total
          }
        }
      },
      //创建目录函数
      createCatalogue() {
        let object = document.getElementsByTagName('h3');
        var flag = [];
        for (var i = 0; i < object.length; i++) {
          var o = {name: object[i].innerHTML};
          flag.push(o);
          object[i].innerHTML = (i+1) +'、'+ object[i].innerHTML;
        }
        this.catalogue = flag;
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  pre.language-js {
    background: #000 !important;
  }
</style>
