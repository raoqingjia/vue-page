<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>现象说明：
项目使用的是若依VUE框架前后端分离，前端部署的命令是 npm run build:stage 之后点击菜单报Cannot find module ‘@/views/.....‘,
解决办法：
我就是将打包命令更换为npm run build:prod就解决了，但是我这办法和网上解决办法还不一样
问题解析：
export const loadView = (view) => {
  if (process.env.NODE_ENV === 'development') {
    return (resolve) => require([`@/views/${view}`], resolve)
  } else {
    // 使用 import 实现生产环境的路由懒加载
    return () => import(`@/views/${view}`)
  }
}
这段代码的含义就是导入views文件夹下的文件。在开发环境使用的是require导入，其他环境用的是import，那么这里就涉及到了这两个导入的区别了。

require/import区别
ES6 之前制定了一些模块加载方案中包括CommonJS，而ES6也实现了模块功能，而且相当简单。
require/exports 是运行时加载，import/export 是编译时加载
ES6 模块不是对象，而是通过export命令显式指定输出的代码，再通过import命令输入，在静态资源编译时就加载，称为“编译时加载”或者静态加载。
CommonJS 模块就是对象（即 module.exports 属性），输入时必须查找对象属性,该对象只有在脚本运行完才会生成，称为“运行时加载”。

网上解决方法：
找到/src/store/modules/permission.js文件
改了router路由模式修改成懒加载的模式的代码逻辑
export const loadView = (view) => {
  // if (process.env.NODE_ENV === "development") {
  //   return (resolve) => require([`@/views/${view}`], resolve);
  // } else {
  //   // 使用 import 实现生产环境的路由懒加载
  //   return () => import(`@/views/${view}`);
  // }
  return (resolve) => require([`@/views/${view}`], resolve);
};
原因：webpack4 不支持变量方式的动态 import ，新版本的使用 require() 来解决此问题。
通过研究之后发现，在node_modules里边webpack打包配置中，似乎对production生产环境进行了特殊的处理，而现在使用的test打包，会和production打包环境下的不一样，从而导致了一些特殊情况的发生
        </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: '',
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
