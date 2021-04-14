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
angular5升级到6比5版本升级到4版本费事，因为6版本和之前算是一个大的跨越，有些写法改变了

1、升级全局Angular-Cli
npm uninstall -g @angular/cli      卸载旧版本cli。
npm cache clean –-force            清除缓存，确保卸载干净
npm install -g @angular/cli@6.1.0    这里我指定的是6.1.0
完成之后 ng version 看一下版本 确保没有问题。

2、升级项目中的angular-cli
npm uninstall --save-dev angular-cli
npm install --save-dev @angular/cli@6.1.0
ng update @angular/cli --migrate-only --from=1.7.3 之前5版本用的是1.7.3，要更新cli生成angular.json文件
ps:需要删除当前项目中的package-lock.json，否则下载cli会报错，我是没遇到

3、ng update @angular/core  更新angular framework
ng update @angular/material  更新Angular Material
ng update	 更新其他package
我只执行第3步骤的命令好多没成功，我最后是直接去package.json直接吧对应插件的版本直接改成了6.1.0，之后执行npm install重新下载依赖，最简单的是去网上找一份人家升级好的package.josn文件，照着改一下

4、使用rxjs-tslint自动更新规则删除已弃用的RxJS 6功能
对于大多数应用程序，这将意味着运行以下两行命令：
npm install -g rxjs-tslint
rxjs-5-to-6-migrate -p src/tsconfig.app.json

我执行完之后运行报的修改rxjs的文件
E:\project_work\abs-web>rxjs-5-to-6-migrate -p src/tsconfig.app.json
Running the automatic migrations. Please, be patient and wait until the execution completes.
Found and fixed the following deprecations:

Fixed 1 error(s) in E:/project_work/abs-web/src/app/services/http.service.ts
Fixed 1 error(s) in E:/project_work/abs-web/src/app/components/header-menu/header-menu.component.ts
Fixed 1 error(s) in E:/project_work/abs-web/src/app/services/variable-subscribe.service.ts
Fixed 2 error(s) in E:/project_work/abs-web/src/app/components/navbar/navbar.component.ts
上面是一些被修正的文件

后来有又执行以下命令删除旧版本的rxjs-compat：
npm uninstall rxjs-compat
npm install rxjs@6.1.0 rxjs-compat@6.1.0 --save    之后安装对应的版本

5、把其他的组件升级，例如蚂蚁金服之前是0.7版本的，现在应该改成1.8版本
"ng-zorro-antd": "^1.8.1",

6、升级过程中可能用到的命令
ng  version  查看当前的Angular-Cli 版本
npm view   @angular/core  versions  查看所有版本
npm update  更新node_module
ng serve  --host 127.0.0.1 --port 4200

7、升级之后的打包指令
"start": "ng serve",
"dev": "ng serve --open  --host 127.0.0.1 --port 4200",
"build": "node --max_old_space_size=4096 ./node_modules/@angular/cli/bin/ng build --prod --configuration=production --stats-json",

8、升级过程中遇到的报错
控制台报 @angular/compiler-cli@6.1.10 requires typescript@'>=2.7.0 <2.8.0' but 2.9.2 was found instead.  Angular编译器需要TypeScript> = 2.7.2和< 2.8.0但2.8.3 被发现代替
别直接粘贴控制台给的提示命令会报错的，npm install typescript@">=2.7.2 <2.8.0"  注意这里要用双引号，单引号报错

rxjs 6升级所导致：
Property 'subscribe' does not exist on type 'MonoTypeOperatorFunction<{}>'.
Property 'filter' does not exist on type 'Observable< Event>'.
Property 'fromEvent' does not exist on type 'typeof Observable'
上边这些报错都是写法发生改变了，百度一搜就有解答，下面的错误是一些百度上不好搜到的

src/app/views/home/car/car.component.ts(25,8): error TS2339: Property 'subscribe' does not exist on type 'MonoTypeOperatorFunction<{}>'.
这两个文件我改了监听路由方法
// rxjs 6升级监听路由变化 改为如下
this.router.events.subscribe((event) => {
  if (event instanceof NavigationEnd) {
  }
});

Property 'catch' does not exist on type 'Observable< HttpEvent< any>>'
如下解决
import { catchError } from 'rxjs/operators';
return next.handle(request).pipe(catchError(error => {}));

Property 'empty' does not exist on type 'Observable< HttpEvent< any>>'
如下解决
import { empty } from 'rxjs';
Observable.empty()  替换为 empty();

Property 'onmessage' does not exist on type 'never'.
如下解决
window.onmessage = function (e) { } 替换为  (window as any).onmessage = function (e) {}

index.js:2 Uncaught ReferenceError: global is not defined
at Object../node_modules/intl/index.js (index.js:2)
如下解决
polyfills.ts 添加   (window as any).global = window;   删除import 'intl' 插件，这个国际化插件我也没怎么用;
          </pre>
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
