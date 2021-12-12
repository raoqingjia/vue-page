<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <ul class="catalogue">
            <li v-for="(items,index) in catalogue"><a @click="jump(index)">{{index+1}}、{{items.name}}</a></li>
          </ul>
          <h3>相关资料及链接</h3>
          <pre>
响应式编程（Reactive Programming），顾名思义，指通过声明式的设计指定数据依赖关系，并且仅以最小成本应对外界依赖的变化进行相应的数据处理。一个不是十分恰当的简单版本是，非响应式编程是基于拉取（Pull），而响应式编程是基于推送（Push）。
3.0 新加入了 TypeScript 以及 PWA 的支持
部分命令发生了变化：
下载安装 npm install -g vue@cli
删除了vue list
创建项目 vue create
启动项目 npm run serve
默认项目目录结构也发生了变化：
移除了配置文件目录，config 和 build 文件夹
移除了 static 文件夹，新增 public 文件夹，并且 index.html 移动到 public 中
在 src 文件夹中新增了 views 文件夹，用于分类 视图组件 和 公共组件
.LifeCycle(Hooks) 3.0当中的生命周期与2.0的生命周期出现了很大的不同：

https://vue-next-template-explorer.netlify.app/   VUE3 代码底层代码展示
https://www.yuque.com/along-n3gko/ezt5z9  雀云前端技术栈
https://dxmo.gitee.io/  李南江vue3笔记讲解</pre>
          <h3>Vue3是如何变快的</h3>
          <pre>
1）静态标记
vue2.0 diff 算法是全量比对，vue3.0 的diff算法是会再创建虚拟DOM的时候回根据DOM中的内容会不会变化，添加静态标记(PatchFlag)，类似写死的文本和样式就不会添加静态标记，动态变化的东西反而叫静态标记，通过新增静态标记（PatchFlag），只比对带有 PF 的节点并且通过 Flag 的信息得知当前节点要比对的具体内容

2）hoistStatic静态提升
vue2无论原始是否参与更新，每次都会重新创建，然后再渲染，vue3 对于不参与更新的元素，会做静态提升，只会被创建一次，以后每次进行render的时候，就不会重复创建这些静态的内容，而是直接从一开始就创建好的常量中取就行了

3）事件侦听器缓存
默认情况下onClick会被视为动态绑定，所以每次都会去追踪它的变化，但是因为是同一个函数，所以没必要去追踪它的变化，想办法将它直接缓存起来复用就会提升性能，vue3中的 cacheHandler 会将方法标记，在使用中如果能在缓存中找到这个方法，那么它将直接被使用。如果找不到，那么将这个方法注入缓存。总之，就是把方法给缓存了
</pre>
          <h3>Composition API</h3>
          <pre>
因为原有vue2的Vue OptionsAPI 分了data ， method ，watch  ， computed 实际开发中还要滚动条反复上下移动，业务数据逻辑分散，不利于管理和维护,在新版vue3的生命周期函数，可以按需导入到组件中，且只能在setup()函数中使用

生命周期2.x与Composition之间的映射关系
• beforeCreate -> use setup()
• created -> use setup()
• beforeMount -> onBeforeMount
• mounted -> onMounted
• beforeUpdate -> onBeforeUpdate
• updated -> onUpdated
• beforeDestroy -> onBeforeUnmount
• destroyed -> onUnmounted
• errorCaptured -> onErrorCaptured

setup注意点：
setup()函数是vue3中专门新增的方法，可以理解为Composition Api的入口.
setup的执行时机是在beforeCreate钩子之前完成的
beforeCreate：表示组件刚刚创建，组件的data和methods还没有初始化
Created： 表示组件刚刚被创建出来，并且组件的data和methods已经初始化好
由于执行setup函数的时候，还没有执行beforeCreate生命周期方法，所以setup函数中是除了 props 之外，无法使用data和methods的，由于setup函数
无法使用data和methods，vue3中直接将setup中的this更改为了undefined，setup只能是同步的不能是异步的， async setup(){} 这种写法无用

接收props数据
export default {
  props: {
    msg: {
      type: String,
      default: () => {}
    }
  },
  setup(props) {
  	console.log(props);
  }
}</pre>
          <h3>什么是reactive</h3>
          <pre>
reactive是vue3中提供的实现响应式数据（“响应式”，是指当数据改变后，Vue 会通知到使用该数据的代码。例如，视图渲染中使用了数据，数据改变后，视图也会自动更新。）的方法
vue2中的响应式数据是通过defineProperty来实现的,而vue3中响应式数据是通过ES6的Proxy来实现的（本质就是将传入的数据包装成一个Proxy对象）

reactive的注意点
reactive参数必须是对象（object.array）,如果给reactive传递了其他对象（例如new Date()日期对象）默认情况下修改对象界面不会自动更新，如果想更新可以通过重新赋值的方式,（即不允许直接操作数据，需要放个新的数据来替代原数据）</pre>
          <h3>什么是ref </h3>
          <pre>
由于 reactive 必须传递一个对象，如果我们只想让某个变量实现响应式的时候会非常麻烦，而ref就能实现对简单值的监听,也就是说ref函数只能监听简单类型的变化，不能监听复杂类型的变化（对象和数组），reactive可以监听数组和对象的

ref的本质
ref的底层本质还是reactive，系统会自动根据我们给ref传入的值将它转换成ref(xx) -> reactive({value:xx});
ref的注意点
html中使用ref的值不用通过value获取，在js中使用ref的值必须通过value获取

ref和reactive的区别
再template中使用ref类型数据Vue会自动添加.value，但是reactive数据类型Vue不会自动添加.value
Vue是通过当前数据是否存在__V_ref节点来判断的，如果有这个私有属性并且取值为true那么就代表是一个ref类型
Vue3中提供了import {isRef，isReactive} from 'vue' 的方式来判断当前类型是是否为ref和reactive</pre>
          <h3>shallowRef、shallowReactive 递归监听</h3>
          <pre>
默认情况下，Vue3 中的 ref 和 reactive 都是递归监听的，即能实时监听对象的底层变化。只要我们对 ref 和 reactive 中的内容进行更改，在默认情况下，只要更改的对象不是类似 new Date() 的类型，都是能察觉到并且进行双向数据绑定的。在默认情况下，递归监听肯定是好的，它让数据的变化能被实时监测到。然而它也带来了性能消耗的问题。

非递归监听
Vue3 提供了 import  {shallowRef ,shallowReactive}  from 'vue' 方案，以防止进行递归式的监听。
shallowRef 中的最外层是 value ，所以我们只能改变整个 value 值来提醒变化，shallowRef的本质是监听.value的值
shallowReactive 是监听第一层数据是否发生变化，如果发生变化则从新渲染整个界面，如果是第二层数据发生变化则不渲染界面
我们还可以通过triggerRef()手动去触发 ref 的变化监听事件来实现界面的改变，但是确没有triggerReactive这种方法，当ref的底层数据发生变化，可通过triggerRef()令整个界面变化</pre>
          <h3>toRaw、markRaw 是否更新UI界面</h3>
          <pre>
ref/reactiv数据类型的特点
每次修改都会被追踪，都会更新UI界面，但是这样其实是非常消耗性能的，所以如果我们有一些操作
不需要更新UI界面，那么这个时候我们就可以通过toRaw方法拿到它的原始数据，对原始数据进行修改，这样就不会更新UI界面了，提高了页面性能

reactive的toRaw没什么可注意的，直接toRaw(对应变量名)就
但是ref 的 toRaw需要注意：如果想通过toRaw拿到ref类型的原始数据（创建时传入的那个数据）那么就必须明确告诉toRaw方法，要获取的是.value的值，
因为必须经过Vue处理之后.value中保存的才是当初创建是传入的那个原始数据  let raw = toRaw(msg.value);

markRaw：有的时候，我们希望某些数据是无法被改变的。markRaw显式标记一个 对象 （不能是简单类型） 为“永远不会转为响应式代理”，函数返回这个对象本身。
const foo = markRaw({})
console.log(isReactive(reactive(foo))) // false
如果被 markRaw 标记了，即使在响应式对象中作属性，也依然不是响应式的</pre>
          <h3>customRef 用于自定义 ref</h3>
          <pre>
有的 ref 可以与视图层实现双向数据绑定，而有的则不能。假如我们需要自定义一个 ref ，当这个 ref 监听的数据变化时，执行我们自己定义的方法，就像是 watchfEffect 一样去检测一个数据，则可以使用 customRef

#示例
import { customRef } from 'vue';

function myRef(value) {
    // customer 需要提供一个函数作为参数该函数默认带参数 track 和 trigger ，都是方法。
    return customRef((track, trigger) => {
      return {
        // customer 需要提供一个对象 作为返回值,该对象需要包含 get 和 set 方法。
        get() {
          track();   // 用于提示vue这个数据是需要追踪变化的
          console.log('get', value);  // get 方法需要返回值，一般就是 value，当然也可以自定义。
          return value;
        },
        // set 传入一个值作为新值，通常用于取代 value
        set(newValue) {
          console.log('set', newValue);
          value = newValue;
          trigger();        //  告诉vue触发界面更新
        }
      }
    })
}

export default {
  name: 'App',
  setup() {
    // 应用上面的自定义 ref ，使用方案和之前的 ref 是类似的。
    const obj = myRef(123);
    return {
      obj
    };
  }
}
          </pre>
          <h3>toRef 、toRefs 地址指向问题</h3>
          <pre>
let obj = { name：'liming' , age:'12'};
let state = ref(obj.name);     ref->复制
let flag = toRef(obj,'name');   toRef-> 引用

ref和toRef区别
ref创建出来的数据和以前无关(复制关系)，我们修改当ref响应式数据变量不会影响到原数据，界面会更新
toRef创建出来的数据和以前的有关(引用关系)，我们修改当toRef响应式数据变量会影响到原数据，界面不会更新，这里是有前提的toRefs引用的是普通对象，如果是reactive对象就是另一种效果了，;
toRefs 用于将响应式对象转换为结果对象，其中结果对象的每个属性都是指向原始对象相应属性的ref，toRefs()函数可以将reactive()创建出来的响应式对象，转换为普通对象，只不过这个对象上的每个属性节点，都是ref()类型的响应式数据，当数据发生改变，界面会更新，解释一些这里有点绕，上面说了toRefs是引用，当数据改变会影响到原数据，但是原数据是reactive类型的，reactive类型的数据改变了，界面不也就更新了吗，
toRefs
为了将多个数据都设置监听，或者对整个对象的所有数据发起监听</pre>
          <h3>父组件与子组件之间的数据传递</h3>
          <pre>
1、父组件向子组件传输数据方式一
provide和inject可以实现嵌套组件共享数据.这两个函数只能在setup()函数中使用。父级组件中使用provide()函数向下传递数据；子级组件使用inject()获取上层传递的数据.这个是可以无限向下层组件传递.
这个数据传递有个问题，如果有多个组件，传递的变量名字都叫一个名字，且结构体不一致就会出现问题
父组件
import { provide } from 'vue';
import Test from "./test2";
export default {
  components: { Test },
  setup () {
    provide('info', {
      name: 'along',
      age: 18,
      sex: '男'
    })
  }
};
子组件用inject接收传输参数
import { inject } from 'vue';
export default {
  setup () {
    const info = inject('info'); //{name: "along", age: 18, sex: "男"}
  }
};
2、父组件向子组件传输数据方式二
子组件Buttons定义props接收参数
export default defineComponent({
  name: "Buttons",
  props: {
      btnType: {
          type: Number,
          required: true,
          default() {
              return 1;
          }
      },
      style: {
          type: Object,
          required: false,
          default() {
              return {};
          }
      }
  },
  setup(props, context) {}
})
父组件向子组件传值
< template>
  < Buttons :btn-type='btnItem.btnType'  :style='btnItem.style'>< /Buttons>
< /template>
export default defineComponent({
    setup(props, context) {
        const btnItem = {
           btnType:...,
           style :...
        }
        return{
            btnItem
        }
    }
})
2、子组件向父组件传值
< template>
    < button @click="search">查询< /button>
< /template>
 export default defineComponent({
    name: 'QueryConditions',
    emits: {
        "filterResult": null,
    },
    setup(props, {emit}) {
      const search = ()=>{
         emit("filterResult",{data:'传个父组件的值'});
      }
    },
    return{
      search
    }
   }
})
父组件内定义方法接收传值
< template>
 < QueryConditions @filterResult="setTableData">< /QueryConditions>
< /template>
export default defineComponent({
  setup(props, context) {
     const setTableData = (data: any) => {
        console.log(data); //  接收子组件的传值
     }
      return{
          btnItem
      }
  }
})
3、父组件触发子组件方法
定义子组件
< template>
    < button @click="sonFun">查询< /button>
< /template>
 export default defineComponent({
    name: 'QueryConditions',
    setup(props, {emit}) {
      const sonFun = ()=>{
        alert('可以被父组件触发');
      }
    },
    return{
      sonFun
    }
   }
})
父组件利用ref触发子组件的方法
< template>
 < QueryConditions ref="RefQueryConditions">< /QueryConditions>
 < button @click="clickFun">查询< /button>
< /template>
export default defineComponent({
  setup(props, context) {
     const RefQueryConditions = ref();
     const clickFun = (data: any) => {
        RefQueryConditions.value.sonFun('paginationSearch');  //  触发子组件方法
     }
      return{
          btnItem,
          clickFun
      }
  }
})</pre>
          <h3>过滤器</h3>
          <pre>
在3.x中，过滤器被删除，不再受支持。建议用方法调用或计算属性替换它们。
< template>
 < h1>filter - {{myFilter括号vals括号 }}< /h1>
< /template>
import {myFilter} from "@/utils/commonUtil";
export default defineComponent({
  setup(props, context) {
     const vals = '100';
      return{
          vals,
          myFilter
      }
  }
})
@/utils/commonUtil
function myFilter (data: string){   // 提到一个js文件里，变成全局过滤方法
   return  val + '元';
}
export {
   myFilter
}
        </pre>
          <h3>路由</h3>
          <pre>
vue2中的（*）不适用于vue3，vue3配置404页面改为如下
{
    path: '/:catchAll(.*)',
    name: '/404',
    component: noFind
}
//  页面跳转
const router = useRouter();
router.push('/newApplication?type=2');
        </pre>
          <h3>vuex的写法</h3>
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
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vue',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name,
        catalogue:[]
      }
    },
    created(){

    },
    mounted:function(){
      this.$nextTick(function(){
          this.createCatalogue();

     })
    },
    computed:{},
    methods: {
      jump (index) {
//        let jump = document.getElementsByTagName('h3');
//       // 获取需要滚动的距离
//        let total = jump[index].offsetTop;
//        // Chrome
//        document.body.scrollTop = total;
//        // Firefox
//        document.documentElement.scrollTop = total;
//       // Safari
//        window.pageYOffset = total
//        https://www.cnblogs.com/wisewrong/p/6495726.html  参考网站
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

        function smoothDown () {
          if (total>distance ) {
            distance += step;
            document.body.scrollTop = distance;
            document.documentElement.scrollTop = distance;
            setTimeout(smoothDown, 10)
          } else {
            document.body.scrollTop = total;
            document.documentElement.scrollTop = total
          }
        }
        function smoothUp () {
          if ( total<distance) {
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
      createCatalogue(){
        let object = document.getElementsByTagName('h3');
        var flag=[];
        for(var i=0;i<object.length;i++){
          var o={name:object[i].innerHTML};
          flag.push(o)
        }
       this.catalogue=flag;
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
