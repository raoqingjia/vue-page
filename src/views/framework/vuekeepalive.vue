<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>概念</h3>
          <pre>
keep-alive是Vue提供的一个抽象组件，用来对组件进行缓存，从而节省性能，由于是一个抽象组件，所以在页面渲染完毕后不会被渲染成一个DOM元素
< keep-alive>
    < router-view>< /router-view>
< /keep-laive>
被包裹在keep-alive中的组件的状态将会被保留，例如我们将某个列表类组件内容滑动到第100条位置，那么我们在切换到一个组件后再次切换回到该组件，该组件的位置状态依旧会保持在第100条列表处

有的产品可能会要求在每一次进入一个组件时页面的初始位置都是保持在顶部的，这里可以利用Vue中的滚动行为，但是前提是你是HTML5 history模式
我们在创建一个router实例的时候，可以提供一个scrollBehavior方法，该方法会在用户切换路由时触发
const router=new VueRouter({
        routes:[
            {
                path:"/",
                component:Home
            }
        ],
        scrollBehavior(to,form,savedPosition){
        //scrollBehavior方法接收to，form路由对象
        //第三个参数savedPosition当且仅当在浏览器前进后退按钮触发时才可用
        //该方法会返回滚动位置的对象信息，如果返回false，或者是一个空的对象，那么不会发生滚动
        //我们可以在该方法中设置返回值来指定页面的滚动位置，例如：
         return {x:0,y:0}
        //表示在用户切换路由时让是所有页面都返回到顶部位置
        //如果返回savedPosition,那么在点击后退按钮时就会表现的像原生浏览器一样，返回的页面会滚动过到之前按钮点击跳转的位置，大概写法如下：
         if(savedPosition){
            return savedPosition
         }else{
           return {x:0,y:0}
         }
         //如果想要模拟滚动到锚点的行为:
         if(to.hash){
           return {
             selector:to.hash
           }
         }
     }
})
还有一个方法就是利用我们上面说过的，在keep-alive激活会触发activated钩子函数，那么在该函数内设置scrollTop为0
被keep-alive包裹的动态组件或router-view会缓存不活动的实例，再次被调用这些被缓存的实例会被再次复用，对于我们的某些不是需要实时更新的页面来说大大减少了性能上的消耗，不需要再次发送HTTP请求，但是同样也存在一个问题就是被keep-alive包裹的组件我们请求获取的数据不会再重新渲染页面，这也就出现了例如我们使用动态路由做匹配的话页面只会保持第一次请求数据的渲染结果，所以需要我们在特定的情况下强制刷新某些组件，
那假设切换组件时需要数据请求呢？缓存的组件应该不会重新请求了,因为mounted钩子不会再执行，所以在使用 keep-alive 的时候，Vue 会给你额外提供两个钩子，activated 和 deactivated</pre>
          <h3>利用include、exclude属性</h3>
          <pre>
< keep-alive include="bookLists,bookLists">
   < router-view>< /router-view>
< /keep-alive>
< keep-alive exclude="indexLists">
   < router-view>< /router-view>
< /keep-alive>
include属性表示只有name属性为bookLists，bookLists的组件会被缓存，（注意是组件的名字，不是路由的名字）其它组件不会被缓存exclude属性表示除了name属性为indexLists的组件不会被缓存，其它组件都会被缓存</pre>
          <h3>利用meta属性</h3>
          <pre>
export default[
 {
  path:'/',
  name:'home',
  components:Home,
  meta:{
    keepAlive:true //需要被缓存的组件
 },
 {
  path:'/book',
  name:'book',
  components:Book,
  meta:{
     keepAlive:false //不需要被缓存的组件
 }
]
< keep-alive>
  < router-view v-if="this.$route.meat.keepAlive">< /router-view>
   <!--这里是会被缓存的组件-->
< /keep-alive>
< keep-alive v-if="!this.$router.meta.keepAlive">< /keep-alive>
   <!--这里是不会被缓存的组件-->         </pre>
          <h3>activated,deactivated生命周期</h3>
          <pre>
< keep-alive> 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 < transition> 相似，< keep-alive> 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中。
当组件在 < keep-alive> 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行
  deactivated() {
    // 离开页面触发
    this.listLoading = false // 离开页面关闭遮罩
  },
  activated() {
    // 使用keep-alive时才会生效，在进入页面时触发
    if (!this.data.length) {
      // 进入页面判断是否有数据，没有数据发起请求
      this.getList()
    }
  }
使用keep-alive可以方便使用这两个钩子函数，减少mounted等钩子的使用，方便页面切换</pre>
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
