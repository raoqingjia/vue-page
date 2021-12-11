<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>先简单说一下操作流程</h3>
          <pre>
1）安装vuex
npm install vuex --save

2）store/index.js 结构  (vue2.0和vue3.0写法有所不同，自己百度，不过字段含义都是一样的)
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count ： 1
  },
  mutations: {
     increment(state,msg){
        state.count ++;
     } ,
     decrement(state,msg){
        state.count --;
     }
  },
  actions: {
     increment({commit})=>{
        commit('increment')
     } ,
     decrement({commit})=>{
        commit('decrement')
     }
  },
  getters: {}
});
export default store

3）在main.js中引入store
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from '@/store'
new Vue({
  render：h => h(App),
  router,
  store,
}).$mount('#app')
这样就可以在整个vue项目中this.$store.state了

4）在demo.vue组件中使用
< template>
 vuex - { {$store.state.count}}}
< button type="button" @click="increment">增加< /button>
< button type="button" @click="decrement">减少< /button>
< /template>
< script>
  import { mapActions } from 'vuex';
  export default {
      name: '',
      data () {
       return {}
      },
      methods: {
          ...mapActions([  //  第一种写法
              'increment', // 映射 this.increment() 到 this.$store.dispatch('increment')
              'decrement'
          ]),
          ...mapActions({  //  第二种写法
			         add: 'increment' // 映射 this.add() to this.$store.dispatch('increment')
          }) ,
          toggle(){

          }
      }
  }
< /script></pre>
          <img src="../../img/vuex01.png" width="500px" height="350px">
          <h3>看上图，理解下面的话</h3>
          <pre>
官方文档
https://vuex.vuejs.org/zh/#%E4%BB%80%E4%B9%88%E6%98%AF-%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E6%A8%A1%E5%BC%8F

vuex中有默认的五个核心概念：
state：存储状态（变量）
mutations：修改状态，并且是同步的。在组件中通过this.$store.commit(‘xxx’,params)使用。这个和我们组件中的自定义事件类似。
actions：提交 mutation，异步操作。在组件中通过this.$store.dispath(‘xxx’)使用
getters：对数据获取之前的再次编译，可以理解为state的计算属性。在组件中通过 this.$store.getters.xxx使用
modules：store的子模块，为了开发大型项目，方便状态管理而使用的，即将store分割为模块，使store对象不会太臃肿。（官文示例 https://vuex.vuejs.org/zh/guide/modules.html）

白话文解释
state 相当于是data数据
action 接受vue组件的行为，它不能直接修改state数据，告诉mutation要修改数据，commit后确定是要修改数据，触发mutation
mutation用来修改数据，也就是修改state的数据
mapAction是类似把action中的方法关联到当前vue组件实例中（官方文档中还写到：在组件中也可以用this.$store.dispatch('xxx')分发action，或者使用mapAction辅助函数将组件的methods映射未store.dispatch调用）
mapState 是因为一个组件需要获取多个变量状态计算，如果将写到methods方法里，每次状态改变都要调取一遍methods定义的方法，这样有些重复多余，于是就可以用mapState来解决
个人理解：mapAction是要写在methods里，mapState要写在computed里面，mapAction方法里变量单一，不需要根据变量改变随时计算，mapState则是要根据变量更改重新触发计算
          </pre>
          <h3>vuex高级点的玩法就是分modules</h3>
          <pre>
目的是开发大型项目，方便状态管理而使用的，即将store分割为模块，使store对象不会太臃肿
vue2.0 和vue3.0 写法差异挺大的，自行百度，下面说的是2.0写法

1)modules/a.js
  const state= {
    num : 100
  }
  const mutations= {
     add(state,msg){
        state.num ++;
     } ,
     reduce(state,msg){
        state.num --;
     }
  }
  const actions= {
     add({commit})=>{
        commit('add')
     } ,
     reduce({commit})=>{
        commit('reduce')
     }
  }
export default {
            namespaced:true, // 开启命名空间
            state，
            mutations，
            actions
     }

2)store/index.js 结构
import Vue from 'vue'
import Vuex from 'vuex'
import money from './modules/a'
import count from './modules/b'

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
      name： 1
    },
    modules:{
      money,  // money和count 也都是 state，mutations，actions 的结构玩法
      count
    }
});
export default store

3)main.js 写法不变

4）在demo.vue组件中使用
< template>
 vuex - { {$store.state.money.num}}}    money 表示那个模块的
< button type="button" @click="add">增加< /button>
< button type="button" @click="reduce">减少< /button>
< /template>
< script>
  import { mapActions } from 'vuex';
  export default {
      name: '',
      data () {
       return {}
      },
      methods: mapActions('money',['add','reduce'])  //  区别点 money 表示那个模块的
  }
< /script></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
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
