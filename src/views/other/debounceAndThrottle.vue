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
前端性能优化经常会用到防抖和节流

一、抖动是什么？
在input输入框绑定input事件，每次输入内容是都会触发一次，而多次事件中只有一次是我们需要的，其他的称之为抖动。
由于抖动对性能消耗比较大，所以要解决这个问题需要用到防抖和节流

二、防抖和节流
1.常见的场景
常见的场景有
input框的input事件
浏览器窗口滚动事件
浏览器窗口大小改变事件
鼠标的移动事件
...
具体情况：
1.搜索框input事件实现联想搜索时，当用户输入间隔大于一定的时间（如500ms）时，或者每隔固定时间，发送请求获取数据
2.浏览器滚动事件，一定的时间内（如500ms）没有滚动了,获取滚动条位置，超过某个位置时，显示回到顶部
2.防抖(debounce)
持续触发的事件不立即执行
触发停止时，过一段时间在执行逻辑代码

// 封装防抖方法
function debounce(time, callback) {
    let timerId = null
    return function() {
        // 清除上一个定时器
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            callback()
        }, time)
    }
}
// 浏览器滚动事件调用
window.onscroll = debounce(1000, () => { console.log('防抖'); })

3.节流(throttle)
持续触发事件时，不会执行多次，每隔固定的时间执行一次
触发停止时，过一段时间在执行逻辑代码

//  封装节流方法
function throttle(time, callback) {
    // 定义一个开始事件戳
    let startTime = Date.now()
    // 定义一个定时器
    let timerId = null
    return function() {
        // 清除定时器
        clearTimeout(timerId)
        // 每隔固定的时间执行一次
        if (Date.now() - startTime > time) {
            callback()
            // 开始时间重新赋值
            startTime = Date.now()
        } else {
            // 触发停止时，过一段时间在执行逻辑代码
            timerId = setTimeout(() => {
                callback()
            }, time)
        }
    }
}
// 浏览器滚动事件调用
window.onscroll = throttle(1000, () => { console.log('节流'); })</pre>
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
