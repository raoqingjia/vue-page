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
          <h3>vue3.0里用vuex的写法</h3>
          <pre>
vue3.0的写法确实是比2.0写法简便，尤其是挂载store和声明store的时候，直接用createStore，useStore就搞定了

store.ts文件
import { createStore } from 'vuex'
import { getStorage } from '../api/storage'
export default createStore({
  state: {
     userInfo:getStorage('loginInfo'),
     roleId:getStorage('loginInfo')?getStorage('loginInfo').roleInfo[0].roleId:null,
     roleName:getStorage('loginInfo')?getStorage('loginInfo').roleInfo[0].roleName:null,
     projectName : 'os-demo',
     msgNum : 2
  },
  mutations: {
     setRoleInfo(state,data){
       state.roleId = data.roleId;
       state.roleName = data.roleName;
       state.msgNum ++;
     },
      setUserInfo(state,data){
          state.userInfo = data;
      }
  },
  actions: {
  },
  getters:{
    setMsgNum(state){
        return state.msgNum * state.msgNum;
    }
  },
  modules: {
  }
})

main.ts文件
import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App);
app.use(store).use(router).use(Antd).mount('#app')

组件
< template>
< span class="msgNum">{ {store.getters.setMsgNum}}< /span>
< /template>
< script>
  import { useStore } from "vuex";
  import { reactive,, computed } from "vue";
  const state = reactive({
        name: ''
      })
  const store = useStore();
  state.name = store.state.Name;
  const userName = computed(():any=>{ return store.state.userInfo.userName });
  function initMenu(loginInfo) {
      store.commit('setRoleInfo',loginInfo.roleInfo[index]);
  }< /script>
</pre>
          <img src="../../img/vuex01.png" width="500px" height="350px">
          <h3>看上图，理解下面的话</h3>
          <pre>
官方文档
https://vuex.vuejs.org/zh/#%E4%BB%80%E4%B9%88%E6%98%AF-%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E6%A8%A1%E5%BC%8F
比较不错的链接
https://blog.csdn.net/saber04/article/details/99292734 （先看一遍这个，理解的更清楚，比我写的详细）

vuex中有默认的五个核心概念：
state：存储状态（变量）
mutations：修改状态，并且是同步的。在组件中通过this.$store.commit(‘xxx’,params)使用。这个和我们组件中的自定义事件类似。
actions：提交 mutation，异步操作。在组件中通过this.$store.dispath(‘xxx’)使用
getters：对数据获取之前的再次编译，可以理解为state的计算属性。在组件中多在computed通过this.$store.getters.xxx使用
modules：store的子模块，为了开发大型项目，方便状态管理而使用的，即将store分割为模块，使store对象不会太臃肿。（官文示例 https://vuex.vuejs.org/zh/guide/modules.html）

白话文解释
state 相当于是data数据
action 接受vue组件的行为，它不能直接修改state数据，告诉mutation要修改数据，commit后确定是要修改数据，触发mutation
mutation用来修改数据，也就是修改state的数据
mapAction是类似把action中的方法关联到当前vue组件实例中（官方文档中还写到：在组件中也可以用this.$store.dispatch('xxx')分发action，或者使用mapAction辅助函数将组件的methods映射未store.dispatch调用）
mapState 是因为一个组件需要获取多个变量状态计算，如果将写到methods方法里，每次状态改变都要调取一遍methods定义的方法，这样有些重复多余，于是就可以用mapState来解决
个人理解：mapAction是要写在methods里，mapState要写在computed里面，mapAction方法里变量单一，不需要根据变量改变随时计算，mapState则是要根据变量更改重新触发计算
          </pre>
          <h3>vuex中this.$store.commit和this.$store.dispatch的用法</h3>
          <pre>前言
this.store.dispatch()与this.store.commit()方法的区别总的来说他们只是存取方式的不同,两个方法都是传值给vuex的mutation改变state
区别
commit()同步操作
this.$store.commit('方法名',值)  // 存储
this.$store.state.方法名  // 取值
dispatch()异步操作
this.$store.dispatch('方法名',值) // 存储
this.$store.getters.方法名  // 取值

当操作行为中含有异步操作:
比如向后台发送请求获取数据，就需要使用action的dispatch去完成了。
其他使用commit即可。
commit => mutations,用来触发同步操作的方法。
dispatch =>actions,用来触发异步操作的方法。
在store中注册了mutation和action，在组件中用dispatch调用action，然后action用commit调用mutation。

实战
this.$store.commit()
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export const store = new Vuex.Store({
    // state专门用来保存 共享的状态值
  state: {
    // 保存登录状态
    login: false
  },
    // mutations: 专门书写方法,用来更新 state 中的值
  mutations: {
    // 登录
    doLogin(state) {
      state.login = true;
    },
    // 退出
    doLogout(state) {
      state.login = false;
    }
  }
});
< script>
// 使用vux的 mapState需要引入
import { mapState } from "vuex";
export default {
  // 官方推荐: 给组件起个名字, 便于报错时的提示
  name: "Header",
  // 引入vuex 的 store 中的state值, 必须在计算属性中书写!
  computed: {
    // mapState辅助函数, 可以快速引入store中的值
    // 此处的login代表,  store文件中的 state 中的 login, 登录状态
    ...mapState(["login"])
  },
  methods: {
    logout() {
      this.$store.commit("doLogout");
    }
  }
};
< /script>
< script>
export default {
  name: "Login",
  data() {
    return {
      uname: "",
      upwd: ""
    };
  },
  methods: {
    doLogin() {
      console.log(this.uname, this.upwd);
      let data={
        uname:this.uname,
        upwd:this.upwd
      }
      this.axios
        .post("user_login.php", data)
        .then(res => {
          console.log(res);
          let code = res.data.code;
          if (code == 1) {
            alert("恭喜您, 登录成功! 即将跳转到首页");
            // 路由跳转指定页面
            this.$router.push({ path: "/" });
            //更新 vuex 的 state的值, 必须通过 mutations 提供的方法才可以
            // 通过 commit('方法名') 就可以出发 mutations 中的指定方法
            this.$store.commit("doLogin");
          } else {
            alert("很遗憾, 登陆失败!");
          }
        })
        .catch(err => {
          console.error(err);
        });
    }

  }
};
< /script>

this.$store.dispatch()
store/modules文件夹里的user.js,声明user并释放出来
const user = {
  state: {
    token: '',
    roles: null,
    isMasterAccount:true,
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token ="Bearer " +token
    },
  },
  actions: {
    // 登录
    Login({
      commit
    }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo.account, userInfo.password).then(x => {
          if(x.status==200){
            const tokenV = x.data.token.tokenValue
            commit('SET_TOKEN', tokenV)
            document.cookie=`AuthInfo=Bearer ${tokenV};path:/`;
            token="Bearer "+tokenV;
            //setToken("Bearer " +token)
            resolve();
          }

        }).catch(error => {
          console.log("登录失败")
          reject(error)
        })
      })
    },
  }
}
export default user
注：必须要用commit(‘SET_TOKEN’, tokenV)调用mutations里的方法，才能在store存储成功
handleLogin() {
  this.loading = true
  this.$store.dispatch('Login', this.loginForm).then(() => {
     this.$router.push({
         path: '/manage/merchant/account'
     }); //登录成功之后重定向到首页
     this.loading = false
     // this.$router.push({ path: this.redirect || '/' })
   }).catch(() => {
       this.loading = false
   })
}
this.$store.dispatch(‘Login’, this.loginForm)来调取store里的user.js的login方法，从而要更新</pre>
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
          <h3>刷新网页后vuex的state数据丢失的解决方案</h3>
          <pre>1. 产生原因
其实很简单，因为store里的数据是保存在运行内存中的,当页面刷新时，页面会重新加载vue实例，store里面的数据就会被重新赋值。

2. 解决思路
一种是state里的数据全部是通过请求来触发action或mutation来改变
一种是将state里的数据保存一份到本地存储(localStorage、sessionStorage、cookie）中
很显然，第一种方案基本不可行，除非项目很小或者vuex存储的数据很少。而第二种可以保证刷新页面数据不丢失且易于读取。

3. 解决过程
首先得选择合适的客户端存储
localStorage是永久存储在本地，除非你主动去删除;
sessionStorage是存储到当前页面关闭为止;
cookie则根据你设置的有效时间来存储，但缺点是不能储存大数据且不易读取。
我选择的是sessionStorage,选择的原因vue是单页面应用，操作都是在一个页面跳转路由，另一个原因是sessionStorage可以保证打开页面时sessionStorage的数据为空，而如果是localStorage则会读取上一次打开页面的数据。
然后是怎么用sessionStorage来保存state里的数据。

第一种方案
由于state里的数据是响应式，所以sessionStorage存储也要跟随变化。又由于vuex规定所有state里数据必须通过mutation方法来修改，所以第一种方案就是mutation修改state的同时修改sessionStorage对应存储的属性

第二种方案
第一种方案确实可以解决问题，但这种方法很明显让人觉得怪异，都这样了，那不如直接用sessionStorage来做状态管理。
那怎么才能不用每次修改state时同时也要修改sessionStorage呢？这时我们可以换一个思路，因为我们是只有在刷新页面时才会丢失state里的数据，那有没有办法在点击页面刷新时先将state数据保存到sessionStorage,然后才真正刷新页面?
当然有，beforeunload这个事件在页面刷新时先触发的。那这个事件应该在哪里触发呢？我们总不能每个页面都监听这个事件，所以我选择放在app.vue这个入口组件中，这样就可以保证每次刷新页面都可以触发。

在 App.vue 的 created 钩子函数里写下了如下代码
具体的代码如下：
export default {
  name: 'App',
  created () {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })
  }
}</pre>
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
