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
根据MDN（https://developer.mozilla.org/zh-CN/）的说法：sessionStorage 属性允许你访问一个，对应当前源的 session Storage 对象。它与 localStorage 相似，不同之处在于 localStorage 里面存储的数据没有过期时间设置，而存储在 sessionStorage 里面的数据在页面会话结束时会被清除，也就是浏览器关闭是结束。
1、页面会话在浏览器打开期间一直保持，并且重新加载或恢复页面仍会保持原来的页面会话。
2、在新标签或窗口打开一个页面时会复制顶级浏览会话的上下文作为新会话的上下文， 这点和 session cookies 的运行方式不同。
3、打开多个相同的 URL 的 Tabs 页面，会创建各自的 sessionStorage。
4、关闭对应浏览器标签或窗口，会清除对应的 sessionStorage。
对于上面的说法，第134点相信都是符合大家认知的，那第二点是啥意思呢？

如果从本页面以新开页签的方式打开一个同域下的新页面，新开的页面会和之前的页面 ‘共享’ sessionStorage。
举个实际一点的例子：现有页面A，在页面A中执行
window.sessionStorage.setItem("pageA_1","123")
在页面中有个button按钮，点击按钮触发 window.open("同源页面")，现得到新开的页面B，在B中执行
window.sessionStorage.getItem("pageA_1") //拿到的结果是 "123"
这里的B页面是能拿到值的

接下来我们继续测试，在页面A中继续执行
window.sessionStorage.setItem("pageA_1","456") (之前的pageA_1设置的值是 ‘123’ )
window.sessionStorage.setItem("pageA_2","789")
在页面B中再次尝试获取：
window.sessionStorage.getItem("pageA_1") //拿到的结果还是 "123" !!!
window.sessionStorage.getItem("pageA_2") //拿到的结果是 null !!!

理解一下MDN的说法：在该标签或窗口打开一个新页面时会复制顶级浏览会话的上下文作为新会话的上下文
原来只有在本页面中以新页签或窗口打开的同源页面会‘临时共享’之前页面的sessionStorage。
而且共享这个词似乎也并不怎么准确，准确来说应该叫复制更加专业！
多窗口之间sessionStorage不可以共享状态，但是在某些特定场景下新开的页面会复制之前页面的sessionStorage

总结
者通过location.href、window.open、或者通过带target="_blank"的a标签打开新标签，之前的sessionStorage还在，但是如果你是主动打开一个新窗口或者新标签，对不起，打开F12你会发现，sessionStorage空空如也。
也就是说，sessionStorage的session仅限当前标签页或者当前标签页打开的新标签页，通过其它方式新开的窗口或标签不认为是同一个session。
总之，在处理sessionStorage时，只要打开新窗口就要特别注意了，新旧窗口数据不会互相同步。          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'sessionStorageShare',
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
