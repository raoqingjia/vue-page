<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>概况Promise</h3>
          <pre>
Promise用于解决异步中的流程控制问题。
比如只有完成1和2的调用后，才能做3，1和2都是异步调用，不知道1和2谁先谁后返回，那么Promise就能很好的解决这个问题

Promise 的优点在于，让回调函数变成了规范的链式写法，程序流程可以看得很清楚。它有一整套接口，可以实现许多强大的功能，比如同时执行多个异步操作，等到它们的状态都改变以后，再执行一个回调函数；再比如，为多个回调函数中抛出的错误，统一指定处理方法等等。

而且，Promise 还有一个传统写法没有的好处：它的状态一旦改变，无论何时查询，都能得到这个状态。这意味着，无论何时为 Promise 实例添加回调函数，该函数都能正确执行。所以，你不用担心是否错过了某个事件或信号。如果是传统写法，通过监听事件来执行回调函数，一旦错过了事件，再添加回调函数是不会执行的。

Promise 的缺点是，编写的难度比传统写法高，而且阅读代码也不是一眼可以看懂。你只会看到一堆then，必须自己在then的回调函数里面理清逻辑。
</pre>
          <h3>Promise运行基本顺序</h3>
          <pre>
1. 首先Promise构造函数会立即执行，而Promise.then()内部的代码在当次事件循环的结尾立即执行(微任务)。
2. promise的状态一旦由等待pending变为成功fulfilled或者失败rejected。那么当前promise被标记为完成，后面则不会再次改变该状态。
3. resolve函数和reject函数都将当前Promise状态改为完成，并将异步结果，或者错误结果当做参数返回。
4. Promise.resolve(value)返回一个状态由给定 value 决定的 Promise 对象。如果该值是 thenable(即，带有 then 方法的对象)，返回的 Promise 对象的最终状态由 then 方法执行决定；否则的话(该 value 为空，基本类型或者不带 then 方法的对象),返回的 Promise 对象状态为 fulfilled，并且将该 value 传递给对应的 then 方法。通常而言，如果你不知道一个值是否是 Promise 对象，使用 Promise.resolve(value) 来返回一个 Promise 对象,这样就能将该 value 以 Promise 对象形式使用。
5. Promise.all(iterable)/Promise.race(iterable)简单理解，这2个函数，是将接收到的promise列表的结果返回，区别是，all是等待所有的promise都触发成功了，才会返回，而arce有一个成功了就会返回结果。其中任何一个promise执行失败了，都会直接返回失败的结果。
6. promise对象的构造函数只会调用一次，then方法和catch方法都能多次调用，但一旦有了确定的结果，再次调用就会直接返回结果。
文章链接  https://www.cnblogs.com/zhujieblog/articles/13161364.html</pre>
          <h3>Promise 对象的状态</h3>
          <pre>
Promise 对象通过自身的状态，来控制异步操作。Promise 实例具有三种状态。
异步操作未完成(pending)
异步操作成功(fulfilled)
异步操作失败(rejected)
上面三种状态里面，fulfilled和rejected合在一起称为resolved(已定型)。

这三种的状态的变化途径只有两种。
从“未完成”到“成功”
从“未完成”到“失败”
一旦状态发生变化，就凝固了，不会再有新的状态变化。这也是 Promise 这个名字的由来，它的英语意思是“承诺”，一旦承诺成效，就不得再改变了。这也意味着，Promise 实例的状态变化只可能发生一次

因此，Promise 的最终结果只有两种。
异步操作成功，Promise 实例传回一个值(value)，状态变为fulfilled。
异步操作失败，Promise 实例抛出一个错误(error)，状态变为rejected。

promise有一个then方法，then方法可以接受3个函数作为参数。前两个函数对应promise的两种状态fulfilled, rejected的回调函数。第三个函数用于处理进度信息。
new Promise().then(function(fulfilled){
		//当promise状态变成fulfilled时，调用此函数
	},function(rejected){
		//当promise状态变成rejected时，调用此函数
	},function(progress){
		//当返回进度信息时，调用此函数
	});</pre>
          <h3>Promise 构造函数</h3>
          <pre>JavaScript 提供原生的Promise构造函数，用来生成 Promise 实例
 var promise = new Promise(function (resolve, reject) {
                if (){    /* 异步操作成功 */
                  resolve(value);    /* 返回成功值 */
                } else {   /* 异步操作失败 */
                  reject(new Error());  /* 返回异常信息 */
                }
            });
上面代码中，Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由 JavaScript 引擎提供，不用自己实现。

resolve函数的作用是，将Promise实例的状态从“未完成”变为“成功”(即从pending变为fulfilled)，在异步操作成功时调用，并将异步操作的结果，作为参数传递出去。reject函数的作用是，将Promise实例的状态从“未完成”变为“失败”(即从pending变为rejected)，在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
      </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'learnPromise',
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
