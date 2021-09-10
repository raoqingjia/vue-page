<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>1、async/await总结</h3>
          <pre>
1.async/await是一个用同步思维解决异步问题的方案（等结果出来之后，代码才会继续往下执行）
2.可以通过多层 async function 的同步写法代替传统的callback嵌套
3.await后面接一个会return new promise的函数，或者其他表达式，等方法返回值之后在执行它
4.await只能放在async函数里
5.在async函数里，无论是Promise reject的数据还是逻辑报错，都会被默默吞掉,所以最好把await放入try{}catch{}中，catch能够捕捉到Promise对象rejected的数据或者抛出的异常
6.不要在 forEach 里执行异步任务，可能不起作用，达不到预期效果，还是用forof、for
7.参考文档
https://www.jianshu.com/p/1e75bd387aa0
https://segmentfault.com/a/1190000007535316</pre>
          <h3>2、async/await案例</h3>
     <pre>
案例1   单一http接口请求效果
// setMath 模拟http接口请求等待
function setMath() {
  return new Promise((resolve, reject) => {
    let sino = "{code:'success',data:[]}";
    setTimeout(() => {
      resolve(sino)
    }, 3000)
  })
}
// async 接口请求后进行路逻辑处理
async function test() {
  let result = await setMath(); //  等到n有值之后才继续执行console了
  console.log('setMath等了3秒执行完了=》result:'+result)
  // 可以进行后续逻辑拼接之类的代码...
}
// async里的await调用promise
console.log('test执行了')
test();
// 这里直接调用 Promise
setMath().then((data) => {
   console.log(data);  // 这里打印信息的时间和test()中打印的信息时间同步
}, (fail) => {
    console.log(fail);
});
---------------------------------------------------
案例2   多个异步效果
// 等待时间很短的业务逻辑处理
function testAsync01() {
  let flag = 0;
  for (let i = 0; i < 10000; i++) {
    if (i === 9999) {
      flag = i;
    }
  }
  console.log('testAsync01几乎未等待就执行完了' + flag);
  return flag;
}
// setMath 模拟http接口请求等待
function setMath() {
  return new Promise((resolve, reject) => {
    let sino = "{code:'success',data:[]}";
    setTimeout(() => {
      resolve(sino)
    }, 3000)
  })
}
async function testAwait() {
  const a = await testAsync01(); //  普通业务逻辑方法
  const b = await setMath();     //  promise模拟http方法
  console.log('普通业务逻辑=》'+a,'模拟http数据=》'+ b); // 等a 和 b都有结果的才打印
}
console.log('开始执行testAwait');
testAwait();

---------------------------------------------------
案例3   async不加await的效果
async function add(x) {
  let a = 1;
  return x + a;
}
console.log(add(9));   //  console打印的是Promise {< fulfilled>: 10}
add(12).then((data) => {
  console.log(data);
}, (fail) => {
  console.log(fail);
})
//async 如果方法中没有await它就会返回Promise.resolve(undefined),既然async返回的是个promise那就可以用then方法；同时Promise特点是无等待的
//所以再没有await的情况下，执行async函数他会立即执行返回一个promise对象不会阻塞后面的语句
//await后面接一个会return new promise的函数，或者其他表达式，等方法返回值之后在执行它 </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'getDate',
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
