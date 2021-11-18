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
angular4.0 升级到 angular5.0挺简单的，就是把对应的插件升级就行，改动并不大

1、npm install @angular/animations@^5.0.0 @angular/common@^5.0.0 @angular/compiler@^5.0.0 @angular/compiler-cli@^5.0.0 @angular/core@^5.0.0 @angular/forms@^5.0.0 @angular/http@^5.0.0 @angular/platform-browser@^5.0.0 @angular/platform-browser-dynamic@^5.0.0 @angular/platform-server@^5.0.0 @angular/router@^5.0.0 typescript@2.4.2 rxjs@^5.5.2

2 、npm install typescript@2.4.2 --save-exact

3、安装ng-zorro组件
npm install ng-zorro-antd@0.7.1 --save
在根 module 中需要使用 NgZorroAntdModule.forRoot()，在子 module 需要使用 NgZorroAntdModule。

4、引入样式
修改 .angular-cli.json 文件的 styles 列表

"styles": [
    "../node_modules/ng-zorro-antd/src/ng-zorro-antd.less"
  ]

5、升级本地的Angular-cli

npm uninstall @angular/cli    // 卸载旧版本cli。
npm cache verify   // 清除缓存，确保卸载干净

angular5项目最好安装angular/cli 1.7.4版本；
npm install -g @angular/cli@1.7.4
项目里执行
npm install --save-dev @angular/cli@1.7.4</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'colresizable',
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
