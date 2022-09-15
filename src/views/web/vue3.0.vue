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
          <h3>ref与reactive的用法与区别</h3>
          <pre>什么是reactive
Vue3.0中还为我们提供了一个对象式响应的reactive函数 。
Reactive函数创建一个响应式对象。其实，在我看来，reactive函数 就是VUE3.0为我们提供的替代VUE2.0中data的一个函数，因此，在这里，我不建议将方法也写到reactive函数中。reactive函数 中只写数据即可。

Vue2.x vs Vue3.x
Vue2中响应式是通过defineProperty实现的
Vue3中响应式是通过ES6的Proxy实现的
Vue3中实现响应式数据的方法是ref和reactive

特点
reactive的参数一般是对象或者数组,他能够将复杂数据类型变为响应式数据。
reactive的响应式是深层次的，底层本质是将传入的数据转换为Proxy对象
使用方法
< div>
   < h2>{ { data.name}}< /h2>
   < p>{ { data.age}}< /p>
< /div>
import { reactive } from 'vue'
export default {
  name: 'App',
  setup () {
    const data  = reactive({
      name: 'frank',
      age: 18
    })
    const handleChange = () => {
      data.name = 'mike';
      data.age = 20;
    }
    return { data , handleChange }
  }
}
主要有这几个区别：
1：在js中调用需要使用data.属性来赋值使用。
2：在VUE模板语法中，也需要使用data.属性来赋值使用。

引申提前说一下toRefs函数
模板语法中需要使用data.属性来调用属性显示，相对来说就比较麻烦。
其实我们可以使用ES6中的扩展运算符来对其进行解构处理，但是，这样吧解构之后，便不再具有响应式的属性，这个不行。
VUE3.0为我们提供了toRefs函数可以解决这个问题。
import {ref,reactive,toRefs} from "vue";
< template>
  < h1>{ { msg }}< /h1>
  < button @click="count++">count is: { { count }}< /button>
  < button @click="clickMe()">点我弹窗< /button>
< /template>
< script lang='ts'>
import {
  ref,
  reactive,
  toRefs
} from "vue";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  // 使用setup 代替 data
  // 因为我这里使用的是typescript，因此需要给参数指定类型
  setup(props:any,context:any){
    // ref 定义响应式数据
    // let count = ref(0);

    // reactive 创建响应式对象
    let data = reactive({
      // 定义响应式数据
      count:0,
    });

    const clickMe = () => {
      // 使用ref关键字绑定的变量，赋值 的时候必须使用.value
      // count.value++;
      // 调用reactive 定义对象的参数的时候需要使用对象.来调用
      data.count++;
    }
    // 使用toRefs函数对data对象进行包装，确保使用扩展运算符进行解构之后，仍具有响应式
    let param = toRefs(data);
    return {
      // data,
      ...param,
      clickMe
    }
  },
}
< /script>

Proxy vs defineProperty
reactive方法内部是利用ES6的Proxy API来实现的，这里与Vue2中的defineProperty方法有本质的区别。
defineProperty只能单一地监听已有属性的修改或者变化，无法检测到对象属性的新增或删除，而Proxy可以轻松实现
defineProperty无法监听属性值是数组类型的变化，而Proxy可以轻松实现

ref
特点
ref的参数一般是基本数据类型，也可以是对象类型
如果参数是对象类型，其实底层的本质还是reactive，系统会自动将ref转换为reactive，例如
ref(1) ===> reactive({value:1})
在模板中访问ref中的数据，系统会自动帮我们添加.value,在JS中访问ref中的数据，需要手动添加.value
ref的底层原理同reactive一样，都是Proxy

使用方法
< template>
	< h1>{ { name }}< /h1>
	< h1>{ { age }}< /h1>
< /template>
< script>
import { ref} from 'vue'
export default {
  name: 'App',
  setup () {
    const name = ref('frank')
    const age = ref(18)
    const handleChange = () => {
      name.value = 'mike'
      age.value = 20
    }
    return { name, age, handleChange }
  }
}
< /script>

reactive vs ref
reactive参数一般接受对象或数组，是深层次的响应式。ref参数一般接收简单数据类型，若ref接收对象为参数，本质上会转变为reactive方法
在JS中访问ref的值需要手动添加.value，访问reactive不需要
响应式的底层原理都是Proxy</pre>
          <h3>shallowRef、shallowReactive 递归监听</h3>
          <pre>其实这两个函数并不是很常用，在开发过程中基本上用不到，‘这里笔记可以跳过’。
无论 ref 函数还是 reactive 函数都是深度监听。
如果数据量过大，超级超级消耗性能。
如果我们不需要对数据进行深度监听的时候，就可以使用 shallowRef 函数和 shallowReactive 函数。

非深度监听
shallowReactive 是监听第一层数据是否发生变化，如果发生变化则从新渲染整个界面，如果是第二层数据发生变化则不渲染界面
shallowRef 中的最外层是 value ，所以我们只能改变整个 value 值来提醒变化，shallowRef的本质是监听.value的值

代码示例说明一下 shallowReactive
假设我们页面有一个个人信息展示，有名字、有年龄需要展示，我们数据是存在 boy 对象里面，然后 age 是在 boy 对象的 news 属性下面，也就是深层，但是 name 是在 boy 对象下面，也就是第一层，我们有两个按钮，分别修改 name 和 age，看一下会有什么效果。
template>
  < div>
    < h1>姓名：{ {name}}< /h1>
    < h1>年龄：{ {news.age}}< /h1>
    < button @click="btn">修改name< /button>
    < button @click="btn2">修改age< /button>
  < /div>
< /template>
< script>
import { shallowReactive, toRefs } from "vue";
export default {
  name: "App",
  setup() {
    const boy = shallowReactive({
      name: "我是𝒆𝒅.",
      news: {
        birthday: "2012-10-14",
        age: 10
      }
    });
    const btn = () => {
      boy.name = "𝒆𝒅.";
    };
    const btn2 = () => {
      boy.news.age++;
    };
    return { ...toRefs(boy), btn, btn2 };
  }
};
< /script>
点击btn页面发生变化，点击btn2页面不变化
shallowReactive 是监听第一层数据是否发生变化，如果是第二层数据发生变化则不渲染界面

我们还可以通过triggerRef()手动去触发 ref 的变化监听事件来实现界面的改变，但是确没有triggerReactive这种方法，当ref的底层数据发生变化，可通过triggerRef()令整个界面变化
shallowRef 和 triggerRef() 不单独细讲了上网搜吧，工作中几乎用不着</pre>
          <h3>customRef 用于自定义 ref</h3>
          <pre> 了解就行，工作中用处不大
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
}</pre>
          <h3>toRef 、toRefs 地址指向问题</h3>
          <pre>正常写法
< template>
    < div>
        < h2> 人的信息< /h2>
        < p>姓名 { {person.name}}< /p>
        < p>年龄 { {person.age}}< /p>
        < p>性别 { {person.sex}}< /p>
        < p>工作详情  内容{ {person.job.position}} 薪资{ {person.job.salary}}< /p>
    < /div>
< /template>
script>
export default {
  setup() {
    let person = reactive({
      name:'张三',
      age:18,
      sex:'男',
      job:{
        position:'UI开发',
        salary:'20K'
      }
    })
    return {
      person,
    }
  },
};
< /script>
运用toRef的写法
< template>
  < div>
      < h2> 人的信息< /h2>
      < p>姓名 { {name}}< /p>
      < p>年龄 { {age}}< /p>
      < p>性别 { {sex}}< /p>
      < p>工作详情  内容{ {position}} 薪资{ {salary}}< /p>
  < /div>
< /template>
< script>
import { reactive,toRef} from 'vue';
export default {
  setup() {
    let person = reactive({
      name:'张三',
      age:18,
      sex:'男',
      job:{
        name:'UI开发',
        salary:'20K'
      }
    })
    return {
      name:toRef(person,'name'),
      age:toRef(person,'age'),
      sex:toRef(person,'sex'),
      position:toRef(person.job,'position'),
      salary:toRef(person.job,'salary'),
    }
  },
};
< /script>

运用toRefs的写法
< template>
  < div>
      < h2> 人的信息< /h2>
      < p>姓名 { {name}}< /p>
      < p>年龄 { {age}}< /p>
      < p>性别 { {sex}}< /p>
      < p>工作{ {job.position}} 薪资{ {job.salary}}< /p>
  < /div>
< /template>
< script>
import { reactive,toRefs } from 'vue';
export default {
  setup() {
    let person = reactive({
      name:'张三',
      age:18,
      sex:'男',
      job:{
        position:'UI开发',
        salary:'20K'
      }
    })
    return {
      ...toRefs(person)
    }
  },
};
< /script>
总结:toRef是智能一个转换，toRefs是全部转换。类似于前端的深拷贝和浅拷贝。toRefs拷贝出来的是一个对象，所以要用解构语法解构他。并且toRefs拷贝出来的外面那一层，遇到复杂的还要慢慢找到他这个变量</pre>
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
    data() {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name,
        catalogue: []
      }
    },
    created() {

    },
    mounted: function () {
      this.$nextTick(function () {
        this.createCatalogue();

      })
    },
    computed: {},
    methods: {
      jump(index) {
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
          flag.push(o)
        }
        this.catalogue = flag;
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
