<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <ul class="catalogue clearfix">
            <li v-for="(items,index) in catalogue"  :key="index"><a @click="jump(index)">{{items.name}}</a></li>
          </ul>
          <h3>1、利用angular-cli搭建项目</h3>
          <pre>
如果你之前安装angular-cli失败过，最好在安装angular-cli之前先卸载干净，用以下两句：
卸载旧版本
npm uninstall -g angular-cli
npm cache clean或npm cache verify
如果上面卸载执行失败，则执行卸载新版本
npm uninstall @angular/cli
安装 Angular CLI
指定版本安装  如果npm不行就缓存cnpm
npm install -g @angular/cli@1.4.1    angular-cli的版本是1.4.1  安装后的angular是4.0版本
安装最新版本
npm install -g @angular/cli@latest    angular-cli的版本是最新版本  安装后的angular是的最新版本，现在angular最新版本是5.0
本地安装
npm install --save-dev @angular/cli@latest
检测 Angular CLI 是否安装成功
ng --version
创建新的项目
ng new project-name -routing (-routing可加可不加，加上就会自动生成路由配置文件)
切换到项目下
cd project-name
启动本地服务器
ng serve  或者  npm run start
使用–-open（或-o）参数可以自动打开浏览器并访问http://localhost:4200/
单元测试
test build

ng serve 与 npm start 的区别


命令行修改端口号
ng server --port 4201
(ng serve --host localhost --port 4201)

console.log(`${this.name} has been notified.`);

我认为最简洁的Angular4 中文文档  http://www.520jiu.com/2018/01/31/angular4-%E4%B8%AD%E6%96%87%E6%96%87%E6%A1%A3/
  </pre>
          <h3>
            2、命令行创建模块,服务,指令
          </h3>
          <pre>
通过命令创建自定义模块，自定义服务命令
在app下面通过 ng g component 去创建新的组件
ng g component  components/side（components是创建的目录，side是组件名称）
创建服务
ng g service   services/myservice
创建指令
ng g directive  directives/mydirective
创建pipe
ng g pipe pipe/mypipe       </pre>
          <h3>
            3、内置指令属性
          </h3>
          <pre>
① 绑定属性attr
&#60input class="select-input"  [attr.imgUrl]="imgUrl" readonly>
② 数据渲染
[innerHTML]='&#60h2>123456&#60/h2>' 这样可解析h2标签
③ 双向数据绑定
&#60input type='text' [(ngModel)]='val'>
&#60input [(ngModel)]="tel" (ngModelChange)="modelChagne($event.target.value)">
④ 数据循环
&#60li *ngFor='let items of list;let key =index' >{ {items}}--{ {key }}&#60/li>
⑤ 条件判断
&#60span *ngIf='flag=true'>&#/span>
⑥ 绑定函数事件
<p class="pre-cmd">&#60button type='button' (click)='getClick()'>&#60/button>
&#60button type='button' (click)='flag=!flag'>&#60/button>
&#60input type='text' (keyup)='keyFun($event)'>  //$event事件对象
keyFun(e){
  console.log(e)
  if(e.keyCode==13){
    alert(''回车键)
  }
}</p>
⑦ 绑定多个样式用，号隔开
<p class="pre-cmd">&#60div [ngStyle]="{'visibility':menuTitleShow?'visible':'hidden','top':menuTitleTop+'px'}">&#60/div>
&#60div [ngStyle]="{'background-color':username === 'zxc' ? 'green' : 'red' }">&#60/div>
一个点 .和 css 样式的属性名组成,如下:
&#60button [style.color]="isSpecial ? 'red': 'green'">Red&#60/button>
&#60button [style.font-size.em]="isSpecial ? 3 : 1" >Big&#60/button>
&#60button [style.font-size.%]="!isSpecial ? 150 : 50" >Small&#60/button>
//同时设置多个内联样式，用NgStyle指令
&#60div [ngStyle]="currentStyles">&#60/div>
currentStyles: {};
setCurrentStyles() {
  this.currentStyles = {
    'font-style': this.canSave ? 'italic' : 'normal',
    'font-weight': !this.isUnchanged ? 'bold' : 'normal',
    'font-size': this.isSpecial ? '24px' : '12px'
  };
}</p>
⑧ 类名绑定
<p class="pre-cmd">&#60div [ngClass]="{'first': true, 'second': true, 'third': showFlag}">类名绑定&#60/div>
&#60div [ngClass]="{'first second third': classFlag}">类名绑定&#60/div>
&#60div [class.first]="classFlag">类名绑定&#60/div>  //.first{color:red} 适合用于active的绑定
&#60div [ngClass]="classArray">类名绑定&#60/div>
 classArray: String[] = [    数组来添加多个类。
    "first",
    "second",
    "third"
  ]</p>
⑨ [hidden] 属性
<p class="pre-cmd">&#60div [hidden]="!false">
  Hello, there!
&#60/div></p>
上面的代码在通常情况下，都能正常工作。但当在对应的 DOM 元素上设置 display: flex 属性时，尽管[hidden] 对应的表达式为 true，但元素却能正常显示。对于这种特殊情况，则推荐使用 *ngIf。</pre>
          <h3>
            4、自定义指令属性
          </h3>
          <pre>
属性型指令(自定义指令)：修改宿主元素的样式或行为等
结构型指令(内置指令)，比如`*ngIf`，`*ngFor`：修改DOM结构
组件也是可以理解为一个指令的类似于angular1.X中的directive
文档链接 http://ghmagical.com/article/page/id/RgIvn9Pai3ks
① 创建指令
ng g directive  directives/mydirective

② 一个创建之定义指令的案例
// xxx.directive.ts
<p class="pre-cmd">import { Directive, HostListener,HostBinding ,ElementRef,Input, AfterViewInit, Renderer2 } from '@angular/core';
declare var $:any;
@Directive({
  selector: '[appMyScroll]'   //指令的名称
})
export class MyScrollDirective {
// 使用注意 目标dom元素 css中一定要设置 height 高度
constructor(private element: ElementRef, private renderer2: Renderer2) { }
public niceScroll;  //声明一个变量名
@Input('appMyScroll')
type: string; // 滚动条只有两种状态  hidden  scroll
@HostListener('click')  // click使用的函数类型
  onClick($event) {     // 监听宿主元素的点击事件  onClick是声明的函数名称
  console.log(this.borderStyle);
  event.stopPropagation();  //防止一个页面绑定多个指令，出现冒泡事件
}
@HostBinding('style.border') borderStyle = '1px green solid'; //初始的设置
ngOnInit() {
    this.element.nativeElement.style.overflow = 'hidden';  //另一种初始的设置
    // this.element.nativeElement.style.border = '1px green solid';
    // 初始化
    setTimeout(() => {
      if(this.type==""){
        this.type="hidden"
      }
      this.niceScroll=$(this.element.nativeElement).niceScroll({
          cursorcolor: "#cccccc",
          cursoropacitymax: 1,
          touchbehavior: false,
          cursorwidth: "3px",
          cursorborder: "0",
          cursorborderradius: "5px",
          autohidemode:this.type,
          horizrailenabled: false,
          preventmultitouchscrolling: true
       });
    }, 20);
  }
}</p>
对于指令，selector一般使用方括号属性方式；
在上面的代码中，利用@Input()可以设置别名
将ElementRef和Renderer2注入构造函数，前者得到添加了appButton属性的元素，后者是Angular提供的DOM API操作
利用了@HostBinding()给指令的宿主元素添加属性；
@HostListener()里是事件名称，后面跟着一个监听函数，名称可以是任意合法的字符；
使用方法：
&#60button appButton="额外名称">指令按钮&#60/button>

② 自定义 [click.stop] 指令
第一步
<p class="pre-cmd">import { Directive, Output, EventEmitter, Renderer2, ElementRef } from '@angular/core';
@Directive({
    selector: '[click.stop]'
})
export class StopPropagationDirective {
    @Output("click.stop") stopPropEvent = new EventEmitter();
    unsubscribe: () => void;
    constructor(
        private renderer: Renderer2, // Angular 2.x导入Renderer
        private element: ElementRef) {
    }
    ngOnInit() {
        this.unsubscribe = this.renderer.listen(
            this.element.nativeElement, 'click', event => {
                event.stopPropagation();
                this.stopPropEvent.emit(event);
            });
    }
    ngOnDestroy() {
        this.unsubscribe();
    }
}</p>
第二步
app.module.ts文件中
<p class="pre-cmd">import { StopPropagationDirective } from './directives/stop-propagation.directive';
@NgModule({
  declarations: [
    StopPropagationDirective    //全局引入指令
  ],
  imports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }</p>
第三步
[click.stop] 指令应用
<p class="pre-cmd">
import { Component } from '@angular/core';
@Component({
  selector: 'exe-app',
  template:'
    &#60div class="parent" (click)="fromParent()">
        &#60button class="child" (click.stop)="fromChild()">Click me&#60/button>
    &#60/div>'
})
export class AppComponent {
  fromChild() {
    console.log('I am Child');
  }
  fromParent() {
    console.log('I am Parent');
  }
}
</p>
以上代码成功运行后，当用户点击 Click me 按钮时，浏览器控制台只会输出 I am Child。若把 (click.stop) 改为 (click) ，当用户再次点击 Click me 按钮时，控制台就会输出两条信息。          </pre>
          <h3>5、Angular事件大集合</h3>
          <pre>
用法(click)="clickFun()";    (mouseenter)="enterFun()"
click ( 适用标签 ：所有，触发事件：单击)；
dblclick（ 适用标签 ：所有，触发事件：双击）；
blur（适用标签 : a,input,select,textarea，触发事件：失去焦点）；
focus（适用标签 : a,input,select,textarea，触发事件：获取焦点）；
change（适用标签 : a,input,select,textarea，触发事件：model更新）；
keydown（适用标签 : 所有，触发事件：键盘按键按下，要把$event传过去）；
keyup（适用标签 :大部分用在input、textarea， 但适用所有标签，触发事件：键盘按键按下并松开，但要把$event 传过去）；
keypress（同上）；
mousedown（适用标签 : 所有，触发事件：鼠标按下，左右中间都会触发）；
mouseup（适用标签 : a,input,select,textarea，触发事件：鼠标按下弹起，左右中间都会触发）；
mouseenter（适用标签 :所有，触发事件：鼠标进入）；
mouseleave（适用标签 :所有，触发事件：鼠标离开）；
mousemove（适用标签 :所有，触发事件：鼠标移动）；
mouseover（适用标签 :所有，触发事件：鼠标进入）；
$event.stopPropagation()-阻止当前事件在 DOM 树上冒泡;
$event.preventDefault()所有默认动作都不会发生;</pre>
            <h3>6、app.module.ts 根模块配置解释</h3>
            <pre>
import { BrowserModule } from '@angular/platform-browser';    // 浏览器解析模块
import { NgModule } from '@angular/core';        // angular 核心模块
import { FormsModule } from '@angular/forms';    //表单模块 引入双向数据绑定
import { HttpModule ,JsonpModule } from '@angular/http';   //数据请求模块  跟模块引入写法跟组件引入方法不通
import { AppRoutingModule } from './app-routing.module'   //引入路由模块 app-routing.module是已经自己手动配置好的
// 引入自定义模块
import { AppComponent } from './app.component';   //根模块
import { SideComponent } from './components/side/side.component'   //自定义模块
@NgModule({
  declarations: [             //自义组件都要在这里引入，并且定义
   AppComponent,
   SideComponent
  ],
  imports: [              //当前项目依赖哪些模块 依赖注入的地方
    BrowserModule，
    FormsModule,
    HttpModule ,
    JsonpModule，
    AppRoutingModule
  ],
  providers:[],   //定义的服务
  bootstrap: [AppComponent]    //默认启动那个组件
})
export class AppModule { }    //暴露模块，一版不必去管</pre>
          <h3>
            7、app.component.ts配置参数
          </h3>
          <pre>
@Component({
  selector: 'side-nav',   //在html中引入标签的名称
  templateUrl: './side.nav.html',
  styleUrls: ['']  //错误写法   正确写法为 styleUrls: []
})
export class SideComponent implements OnInit { }
styleUrls: [] 这里引入的css文件有这样一个好处，它只会对当前@Component组件中的样式起作用，不会影响到其他组件样式
注意：配置组件中如果不需要引入相应的css文件，styleUrls: []应为空，而不是styleUrls: ['']这样写，这样会报找不到css文件路径，会报错的
selector 就像是控制器，命名是唯一的，用于定义组件在HTML代码中匹配的标签
template 就是引入html文件名称，定义组件内嵌视图
selector的名字不必与export class 一样，但是export class首字母要大小用驼峰命名法 eg SideComponent
export class  类中的参数配置
export class SideComponent implements OnInit {}中声明变量不需要用var，否则会报错
声明变量可以为 title=any; any表示任何类型，可以使数组，对象，字符串
可以定义属性添加修饰符
public     共有类型   类似var  可以在类内使用 或类 外使用
protected  保护类型，只能在当前类和它的子类里访问
private    私有类型  只能在当前类使用
public student:string="这是一个字符串的学生属性"
public id="123"
constructor() { } //构造函数，初始化之后就会调用
ngOnInit() {  }   //生命周期函数，一初始化就会调用 </pre>
          <h3>
            8、angular 4.0 router 路由配置
          </h3>
          <pre>
路由的本质是:根据不同地址，加载不同组件,一个地址配一个组件，地址切换，组件改变
创建路由有两种方式：
第一种是 初始创建项目时ng new angular-demo（项目名称） --routing  加上--routing参数即可
第二种是 手动创建app-routing.module.ts

在app-routing.module.ts下的配置
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeadersComponent } from './components/headers/headers.component';
const routes: Routes = [
  {path:'home',component:HeadersComponent },   //HeadersComponent这里是属于在app-routing.module.ts引入的组件，但要先在app.module.ts引入组件之后才能使用，不然会报错
  { path: '', redirectTo: 'home/:id'，pathMatch:'full' },//如果当前是空路由则redirectTo重新指向，适用于页面刚一加载时，没有路由指向的时候，当path: ''一定要跟着pathMatch:'full'这个参数，不然会报错
  { path: '**', redirectTo: 'home' }  //path: '**',适用于错误路由，匹配不到路由， 显示404页面的状态
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

之后配置app.module.ts
import { AppRoutingModule } from './app-routing.module'  //引入手动创建的app-routing.module
import { HeadersComponent } from './components/headers/headers.component'; //在路由中引入的组件，在跟模块中还是要引入的
@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent
  ],
  imports: [AppRoutingModule],   //注入路由模块
  providers:[],
  bootstrap: [AppComponent]
})

切换路由的方法  &#60a routerLink='home'>&#60/a>   home没必要带上/
&#60router-outlet>&#60/router-outlet> 这就是html中切换组件的位置
routerLinkActive='active' 选中路由加载的class
&#60a routerLink="/detail/1" routerLinkActive="active">detail&#60/a>

路由动态传参
1.先配置路由代参
{path:'home/:arg',component:HeadersComponent }
2.在切换路由的位置
&#60a [routerLink]="home/传递的参数">
&#60a [routerLink]="['/home', username]">  （待验证）
&#60a [routerLink]="['/product']" [queryParams]="{id:1}"> （待验证）
3.在获取页面参数路由中配置，重点是ActivateRoute参数
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';    //引入获取参数的配置
@Component({
  selector: 'app-content01',
  templateUrl: './content01.component.html',
  styleUrls: ['./content01.component.css']
  })
export class Content01Component implements OnInit {
   public  productId:any;
   constructor(private route:ActivatedRoute) { }
   ngOnInit() {
     this.route.params.subscribe(function(data){   //第一种获取参数的方式
         console.log(data)
      });
      this.productId=this.route.snapshot.params['id']   //第二种获取参数的方式
    }
}
this.route.params.value.arg  // 错误写法，这样写会报错


通过js实现页面跳转
import { Router  } from '@angular/router';   //js跳转，一定要引入 Router
constructor(private router:Router) { }
clickFun(){
    this.router.navigate(['home/createsku','123']);   //http://localhost:4200/#/home/createsku/123
    this.router.navigate(['home/createsku'],{ queryParams:{ name:1} });  //http://localhost:4200/#/home/createsku?name=1
}

通过路由的Get传值和获取传值
1.get传输参数
import { NavigationExtras  } from '@angular/router';   //NavigationExtras 是关键
getFun(){
     let navigationExtras:NavigationExtras={ queryParams:{id:11111} }
     this.router.navigate(['side/content02'],navigationExtras);    //navigationExtras是传输的参数
}
2.接收get传值参数
import { ActivatedRoute } from '@angular/router';    //引入获取参数的配置
 ngOnInit() {
    this.route.queryParams.subscribe(function(data){   //第一种获取参数的方式 queryParams是get接收参数跟动态接收参数的不同点
    console.log(data)
    });
    console.log(this.route.snapshot.queryParams)  //第二种获取参数的方式
 }
动态传参可能是死参数，如果是get传值可以写成函数调用形参的方式动态传值
this.router 页面跳转带参
this.route 是页面中接收参数</pre>
          <h3>
            9、路由守卫
          </h3>
          <pre>
路由守卫总共分为5个
1)CanActivate：处理导航到某路由的情况，根据一定的条件判断是否导航到某路由
2)CanActivateChild： 等同 canActivate，只不过针对是所有子路由。
3)CanDeactivate:处理从当前路由离开的情况
4)Resolve：在路由激活之前获取路由情况
5)CanLoad： 控制是否允许延迟加载整个模块
<span>① CanActivate</span>
CanActivate ：创建一个守卫，将要是否允许页面跳转逻辑写入守卫里，将守卫注入到使用的页面，并且在app-routing.module.ts路由里面引用这个守卫
login.guard.ts
<p class="pre-cmd">import { Injectable } from '@angular/core';
import { CanActivate ,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { StorageService } from '../services/storage.service';
@Injectable()
export class LoginGuard implements CanActivate{
  constructor( private LoginState: LoginService) { }
  canActivate(){
    console.log("CanActivate");
    if(LoginState.state){
       return true;  // 返回 true 就能页面跳转 返回false就不能跳转
    }else{
       alert('登录失效')
       return false;  // 返回 true 就能页面跳转 返回false就不能跳转
    }
  }
}</p>
storage.service.ts  储存是否登录的参数
<p class="pre-cmd">import { Injectable } from '@angular/core';
@Injectable()
export class StorageService {
  constructor() { }
  storage=window.sessionStorage;
  setItem(key,value){
     this.storage.setItem(key,JSON.stringify(value))
  }
  getItem(key){
    return  JSON.parse(this.storage.getItem(key))
  }
  removeItem(key){
    this.storage.removeItem(key)
  }
}</p>
app-routing.module.ts 路由配置
<p class="pre-cmd">import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutGuard } from './guards/logout.guard';  //引入LogoutGuard守卫
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  { path: 'home', component: HomeComponent, children: [
     {path: 'createSku', component: CreateSkuComponent},
     {path: 'skuList', component: SkuListComponent}
   ],canActivate:[LoginGuard]  //只有进home下的路由时，才会触发LogoutGuard路由守卫
  },
  {path: 'upload', component: UploadComponent},
  {path: 'download', component: DownloadComponent},
];</p>
app.module.ts 根模块
<p class="pre-cmd">import { LoginGuard } from './guards/login.guard';
@NgModule({
  imports: [
  RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [LoginGuard]  //依赖注入来实现这个类
})
export class AppRoutingModule { }
</p>
<span>② CanDeactivate</span>
这种守卫是指用户如果不能满足当前守卫的要求就不能离开此页面，要接受一个参数，这个参数是当前保护的组件的参数信息；用这些信息来判断满足什么样的条件方可离开此组件页面
unSave.guard.ts
<p class="pre-cmd">import {CanDeactivate} from "@angular/router";
import {ProductComponent} from "app/product/product.component";
export  class  UnsaveGuard implements CanDeactivate{
  canDeactivate(component: ProductComponent){
  //如果用户点否就继续返回true，点击否返回false
  return window.confirm("您还没有保存确定要离开吗")
　　if (component.isFoucs()){
  　　　　return true;
　　　　}else {
  　　　　return false;
　　　　}　　
  }
}</p>
app-routing.module.ts 路由配置
<p class="pre-cmd">import { NgModule } from '@angular/core';
  import { Routes, RouterModule } from '@angular/router';
  import { UnSaveGuard } from './guards/unSave.guard.ts;  //引入UnSaveGuard守卫
  const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  { path: 'product', component: ProductComponent,
    canDeactivate:[UnSaveGuard]  //依赖注入来实现这个类,只有当前这个路由地址才能触发canDeactivate
  },
  {path: 'upload', component: UploadComponent},
  {path: 'download', component: DownloadComponent},
  ];</p>
app.module.ts 根模块依赖注入canDeactivate
<span>③ Resolve</span>
          </pre>
          <h3>10、生命周期</h3>
          <table>
            <thead>
            <tr>
              <th>名称</th>
              <th>调用时机</th>
              <th>接口名称</th>
              <th>范围</th>
            </tr>
            </thead>
            <tbody><tr>
              <td>ngOnChanges</td>
              <td>当被绑定的输入属性的值发生变化时调用，首次调用一定会发生在 ngOnInit之前。</td>
              <td>OnChanges</td>
              <td>指令和组件</td>
            </tr>
            <tr>
              <td>ngOnInit</td>
              <td>在第一轮 ngOnChanges 完成之后调用。( 译注：也就是说当每个输入属性的值都被触发了一次 ngOnChanges 之后才会调用 ngOnInit ，此时所有输入属性都已经有了正确的初始绑定值 )</td>
              <td>OnInit</td>
              <td>指令和组件</td>
            </tr>
            <tr>
              <td>ngDoCheck</td>
              <td>在每个 Angular 变更检测周期中调用。</td>
              <td>DoCheck</td>
              <td>指令和组件</td>
            </tr>
            <tr>
              <td>ngAfterContentInit</td>
              <td>当把内容投影进组件之后调用。</td>
              <td>AfterContentInit</td>
              <td>组件</td>
            </tr>
            <tr>
              <td>ngAfterContentChecked</td>
              <td>每次完成被投影组件内容的变更检测之后调用。</td>
              <td>AfterContentChecked</td>
              <td>组件</td>
            </tr>
            <tr>
              <td>ngAfterViewInit</td>
              <td>初始化完组件视图及其子视图之后调用。</td>
              <td>AfterViewInit</td>
              <td>组件</td>
            </tr>
            <tr>
              <td>ngAfterViewChecked</td>
              <td>每次做完组件视图和子视图的变更检测之后调用。</td>
              <td>AfterViewChecked</td>
              <td>组件</td>
            </tr>
            <tr>
              <td>ngOnDestroy</td>
              <td>当 Angular 每次销毁指令 / 组件之前调用。</td>
              <td>OnDestroy</td>
              <td>指令和组件</td>
            </tr>
            </tbody></table>
          <pre>
https://blog.csdn.net/kuangshp128/article/details/71194188
变化检测的钩子函数有ngOnChanges、ngDocheck、ngAfterContentChecked、ngAfterViewChecked
其中带check字眼的都是实时的变更检测
ngAfterContentInit() 监听当前组件静态dom加载完毕，但是数据还没加载，ngFor跟ngIf还没执行
ngAfterViewInit()    可以用来监听ngFor遍历数据之后，调取数据
          </pre>
          <h3>11、constructor和ngOnInit分析</h3>
          <pre>
① 差异
constructor是ES6引入类的概念后新出现的东东，是类的自身属性，并不属于Angular的范畴，会在类生成实例时调用；ngOnInit属于Angular生命周期的一部分，其在第一轮ngOnChanges完成之后调用，并且只调用一次。
② 适用场景
constructor其主要作用是注入依赖，特别是在TypeScript开发Angular工程时,例如：
constructor(private elementRef: ElementRef) {
        // 在类中就可以使用this.elementRef了
    }
在constructor中注入的依赖，就可以作为类的属性被使用了。
ngOnInit纯粹是通知开发者组件/指令已经被初始化完成了，此时组件/指令上的属性绑定操作以及输入操作已经完成，所以我们可以在ngOnInit中做一些初始化操作
③ 总结
constructor 一般用于依赖注入或执行简单的数据初始化操作，而不是进行真正的业务操作。ngOnInit 钩子主要用于执行组件的其它初始化操作或获取组件输入的属性值</pre>
          <h3>12、pipe管道</h3>
          <pre>
angular中的pipe管道，其功能求相当于angular1.0中的过滤器
<span>① 先说一下内置过滤器</span>
1) 大小写转换管道
uppercase将字符串转换为大写
lowercase将字符串转换为小写
2) 日期管道
date日期管道符可以接受参数，用来规定输出日期的格式。
&#60p>{ {today | date:'yyyy-MM-dd HH:mm:ss'}}&#60/p>
3) 小数管道
number管道用来将数字处理为我们需要的小数格式
接收的参数格式为{最少整数位数}.{最少小数位数}-{最多小数位数}
其中最少整数位数默认为1
最少小数位数默认为0
最多小数位数默认为3
当小数位数少于规定的{最少小数位数}时，会自动补0
当小数位数多于规定的{最多小数位数}时，会四舍五入
pi:number = 3.14159;
&#60p>圆周率是{ {pi | number:'2.2-4'}}&#60/p>
页面上会显示 圆周率是03.1416
4) 货币管道
currency管道用来将数字转换为货币格式
&#60p>{ {a | currency:'USD':false}}&#60/p>
&#60p>{ {b | currency:'USD':true:'4.2-2'}}&#60/p>
a:number = 8.2515
b:number = 156.548
页面上将显示
USD8.25
0156.55这里的′USD′是美元UnitedStatesdollar的缩写，当为false时不显示符，当为true时，则显示$符。后面的规定小数位数的参数和上面介绍的一样。
5) JavaScript 对象序列化
&#60p>{ { { name: 'semlinker' } | json }}&#60/p>   Output: { "name": "semlinker" }
6) slice
&#60p>{ { 'semlinker' | slice:0:3 }}&#60/p>        Output: sem
7) 管道链
&#60p>{ { 'semlinker' | slice:0:3 | uppercase }}&#60/p>   Output: SEM
<span>② 自定义管道</span>
1) 创建pipe的命令行 ng g pipe pipe/test
使用 @Pipe 装饰器定义 Pipe 的 metadata 信息，如 Pipe 的名称 - 即 name 属性
实现 PipeTransform 接口中定义的 transform 方法
2) pipe的编写
<p class="pre-cmd">import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'test'  //过滤器名称
})
export class TestPipe implements PipeTransform {
  //初始化的原始结构
  //transform(value: any, args?: any): any {   //value 代表你过滤的目标  args?是选添，是你过滤添加的参数
  //  return null;
  //}
  transform(value: string, times: number) {    //这是我自己编写的pipe
    return value.repeat(times);  //repeat() ES6新增方法 重复目标对象的作用
  }
}</p>
3) pipe的使用
<p class="pre-cmd">&#60div>
  &#60p>{ { 'lo' | test:3 }}&#60/p> <!-- Output: lololo -->
&#60/div></p></pre>
          <h3>12、创建服务Service</h3>
          <pre>
利用命令行创建服务
ng g service  services/storage
① storage.service.ts文件
<p class="pre-cmd">import { Injectable } from '@angular/core';
@Injectable()  //装饰器
export class StorageService {
  constructor() { }
  setItem(key,value){
     sessionStorage.setItem(key,JSON.stringify(value))
  }
  getItem(key){
    return  JSON.parse(sessionStorage.getItem(key))
  }
  removeItem(key){
    sessionStorage.removeItem(key)
  }
}</p>
② 之后在app.modules.ts里面引入创建的服务 （全局注册）
<p class="pre-cmd">//StorageService这里的名称要跟服务中的类名相同
import {StorageService} from  './service/storage.service'
//在@NgModule里面注入到providers中
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [],
  providers:[StorageService],  //注入服务模块
  bootstrap: [AppComponent]
})</p>
③ 单独在组件里引入(局部注册)
先引入服务，之后在类里面调用服务
<p class="pre-cmd">import {StorageService} from  './service/storage.service'
第一种调用方法(官方不推荐)
public storage=new StorageService()
constructor() {
  this.storage.setItem(key,1234)
}
第二种调用方法（使用这种方法）
constructor(private storage:StorageService) {
  this.storage.setItem(key,1234)
}</p></pre>
          <h3>13、http请求数据</h3>
          <pre>
注意 根模块引入http模块跟组件引入的写法不同
在根组件下引入方式
import { HttpModule ,JsonpModule } from '@angular/http';
@NgModule({
  declarations: [
   AppComponent
  ],
  imports: [
    HttpModule ,      //注入http模块
    JsonpModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})

在模块中引入
import { Component, OnInit } from '@angular/core';
import { Http ,Jsonp,Headers } from '@angular/http';
@Component({
  selector: 'app-https',
  templateUrl: './https.component.html',
  styleUrls: ['./https.component.css']
})
export class HttpsComponent implements OnInit {
  text:any
  private headers=new Headers({'Content-Type':'application/json'}); //配置头文件参数
  constructor(private http:Http,private jsonp:Jsonp) { }     //参数私有注入
  ngOnInit() { }
  //利用get请求数据
  requestData(){
    var _this=this;
    var url='http://wthrcdn.etouch.cn/weather_mini?citykey=101071201';
    this.http.get(url).subscribe(function(data){
       _this.text=JSON.parse(data['_body'])
        console.log(_this.text)
    },function(error){
      console.log(error)
    });
  }
  //解决跨域问题   url的路径上必须加上&callback=JSONP_CALLBACK';
  requestJsonp(){
    var _this=this;
    var jsonpUrl='http://www.b.com/test.php&callback=JSONP_CALLBACK';
    this.jsonp.get(jsonpUrl).subscribe(function(data){
      _this.text=JSON.parse(data['_body'])
      console.log(_this.text)
    },function(error){
      console.log(error)
    })
  }
  //post请求方式   headers 定义请求头文件信息
  requestPost(){
    var _this=this;
    var postUrl='http://www.b.com/test.php&callback=JSONP_CALLBACK';
    this.http.post(postUrl,
       JSON.stringify({'username':'admin'}),{headers:this.headers})
       .subscribe(function(data){
       console.log(this.text)
     },function(error){
       console.log(error)
     })
  }
}</pre>
          <h3>14、RxJS</h3>
          <pre>
<span>① RxJS含义</span>
观察者模式又叫发布订阅模式，它定义了一种一对多的关系，让多个观察者对象同时监听某一个主题对象，当主题对象的状态发生变化时就会通知所有的观察者对象，使得它们能够自动更新自己。
什么是Observable
Observable只是一个普通函数，要想让他有所作为，就需要跟observer一起使用；前者是受后者是攻。而这个observer只是一个带有 next、error、complete 的简单对象而已。最后，还需要通过 subscribe 订阅来启动Observable；否则它是不会有任何反应；而订阅也会返回一个可用于取消操作（在RxJS里叫 unsubscribe）。
我理解为Observe和subscribe的作用就是用来监听数据的,Observable是被监听的主题，Observe是监听者，subscribe是辅助监听者的解析方式。
https://segmentfault.com/p/1210000009729228
https://segmentfault.com/a/1190000012252368
https://www.jianshu.com/p/36d85f8cafdd
http://xgrommx.github.io/rx-book/content/observable/observable_methods/fromevent.html
<span>② 使用RxJS中map()请求数据</span>
<p class="pre-cmd">先引入Rxjs，之后在http请求中使用map()调取数据  .map(res=>res.json())
import { Http ,Jsonp,Headers } from '@angular/http';
import { Observable } from 'rxjs'   //重点
import 'rxjs/Rx';                   //重点
export class HttpsComponent implements OnInit {
  constructor(private http:Http,private jsonp:Jsonp) { }     //参数私有注入
  ngOnInit() { }
  var  url='http://wthrcdn.etouch.cn/weather_mini?citykey=101071201';
    this.http.get(url).map(res=>res.json()).subscribe(function(data){
       console.log(data);
    },function(error){
    })
 }</p>
<span>③ 利用Observable将http请求封装</span>
http.service.ts
<p class="pre-cmd">import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-blacklist 不能删
import {Observable} from 'rxjs/Rx'; // 必须替换成Rx的Observable
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable()
export class HttpService {
  request(method, url, options?: any ) {
    if (method === ('get' || 'GET')) {
      return this.get(url, options);
    }
    if (method === ('post' || 'POST')) {
      return this.post(url, options);
    }
  }
  // post请求
  post(url, options?: any): Observable&#60any> {  //相当于你返回的是个Observable
  // const headers = new HttpHeaders();
    let headers = new HttpHeaders();
    let body;
    if (options && options['headers']) {
      const header = options['headers'];
      // tslint:disable-next-line:forin
      for (const key in header) {
        headers = headers.set(key, header[key]);
      }
    }
    if (options && options['params']) {
      body = options['params'];
    }
    return this.http.post(url, body, {headers});
  }
  // get请求
  get(url, options?: any): Observable&#60any> {
    let params = new HttpParams();
    let headers = new HttpHeaders();
    if (options && options['params']) {
      const param = options['params'];
      // tslint:disable-next-line:forin
      for (const key in param) {
        params = params.set(key, param[key]);
      }
    }
    if (options && options['headers']) {
      const header = options['headers'];
      // tslint:disable-next-line:forin
      for (const key in header) {
        headers = headers.set(key, header[key]);
      }
    }
    return this.http.get(url, {params, headers});
  }
  constructor( private http: HttpClient) { }
}</p>
login.component.ts
<p class="pre-cmd">
import { HttpService } from '../../../services/http.service';
@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private https: HttpService) {};
  this.https.request('post', '/auth/smscode', {params: loginData}).subscribe(
  (data) => { console.error(data); },
  (fail) => { console.error(fail); } //报错时的信息
  );
}</p></pre>
          <h3>14、配置proxy.config.json进行跨域</h3>
          <pre>
1）首先我们创建代理配置文件proxy.conf.json
假如你的后端服务的访问地址为“10.4.60.200:8080”,以下为proxy.conf.json的例子：
{
  "/api": {
    "target": "http://10.4.60.200:8080", // 指向需要代理的api地址
    "secure": false
  },
   "/OrderService": {
    "target": "192.168.199.185:8778",
    "changeOrigin": true,
    "secure": false,
    "pathRewrite": {
      "^/OrderService": "/OrderService"
    }
  }
}
  // 页面初始化请求
getInitDataFun(){
   var postUrl='/OrderService/car/queryShoppingCar';  //注意这里
   this.http.post(
       postUrl,
       {'userNumber':'1234567890'},
       {headers:this.headers}
      ).map(res=>res.json()).subscribe(function(data){
         console.log(data.bizDesc)
       },function(error){
          console.log(error)
      })
}
2）改写package.json
修改启动命令，默认使用npm start时使用代理文件配置的代理
"start": "ng serve --proxy-config proxy.conf.json",
重要说明:启动服务的时候必须用npm run start启动，代理才生效，如果用ng serve启动代理不生效</pre>
          <h3>15、dom事件</h3>
          <pre>
① 属性绑定
&#60img src="{ {imgUrl}}">
&#60img [src]="imgUrl">
② dom属性和html属性不一样  (了解就好，不常用)
<p class="pre-cmd">&#60input value="请输入姓名" (input)="change($event)">
  change(event) {
  console.log(event.target.value);   // dom属性，即输入属性
  console.log(event.target.getAttribute('value'));  // html属性，也就是初始化的属性
  //HTML属性指定了初始值，DOM属性表示当前值；DOM属性的值可以改变，HTML的值不能改变
}
// 打印结果
consult.component.ts:24 请输入姓
consult.component.ts:25 请输入姓名
consult.component.ts:24 请输入
consult.component.ts:25 请输入姓名
consult.component.ts:24 请输
consult.component.ts:25 请输入姓名</p>
总结：
1：随着我不断的删除一些字，dom属性一直在变化，然而html属性并没变化。dom属性代表当前的值，html属性代表的是初始的值。
2：dom属性的值可以改变，html属性的值不能改变。
3：angular模板绑定是通过dom属性和事件来工作的，而不是html属性

③ 利用ElementRef获取dom，Renderer2修改样式  （常用）
我认为ElementRef的作用是获取页面中的dom元素，Renderer2则是操作dom元素
通过 ElementRef 我们就可以封装不同平台下视图层中的 native 元素 (在浏览器环境中，native 元素通常是指 DOM 元素)
<p class="pre-cmd">import { ElementRef } from '@angular/core';
constructor(public element: ElementRef) {}
ngOnInit(){
   this.element.nativeElement.querySelector('#musicPlayer')
   this.element.nativeElement.getElementsByTagName("div")[0].style.color="red"
   this.element.nativeElement.querySelector('.select-option').style.display='block';
    //style.display取的是dom中style的值而不是 css的样式
   this.renderer.setStyle(this.element.nativeElement.querySelector('.select-option'), 'display', 'block');
   //推荐用this.renderer这种写法，也就是用Renderer2修改样式
}</p>
注意：利用 this.element.nativeElement获取到的都是当前组件中的dom元素，不包含其他组件中的dom。
我理解this.element.nativeElement就相当于document，只不过这个document只限定于当前组件内
但是如果我想要获得当前组件外的元素呢？我下面是这么写的但是不知道对不对
<p class="pre-cmd">import { Component, OnInit, ElementRef , Renderer2} from '@angular/core';
constructor(public element: ElementRef ,private renderer: Renderer2) { }
ngOnInit(){
  var _this=this;
  document.body.addEventListener("click",clickFun);
  function clickFun () {  //点击空白区域选项框隐藏
    var option_ary=document.querySelectorAll('.select-option');
    for(var i=0;i< option_ary.length;i++){
       _this.renderer.setStyle(option_ary[i], 'display', 'none');
      //关键是这里用了renderer，因为我用.style.display就报错了，
      //我不太明白this.element.nativeElement就能.style.display，而外部的document就要用this.renderer
      //怀疑1、是我编辑器报错  2、是因为我获取的是该组件外部的dom元素
    }
  }
}</p>
Angular 4.x+ 版本是使用 Renderer2 替代 Renderer (Angular V2)。
Renderer2 API 还有哪些常用的方法
<p class="pre-cmd">1. createElement(), createText(), appendChild()
2. insertBefore()
3. removeChild()
4. selectRootElement()
5. setAttribute() and removeAttribute()
6. setProperty()
7. addClass() and removeClass()
8. setStyle() and removeStyle()
9. parentNode()
10. createComment()
11. listen()
this.renderer.createElement(name: string, namespace?: string|null): any;
this.renderer.createComment(value: string): any;
this.renderer.createText(value: string): any;
this.renderer.setAttribute(el: any, name: string, value: string,namespace?: string|null): void;
this.renderer.removeAttribute(el: any, name: string, namespace?: string|null): void;
this.renderer.addClass(el: any, name: string): void;
this.renderer.removeClass(el: any, name: string): void;
this.renderer.setStyle(el: any, style: string, value: any,flags?: RendererStyleFlags2): void;
this.renderer.removeStyle(el: any, style: string, flags?: RendererStyleFlags2): void;
this.renderer.setProperty(el: any, name: string, value: any): void;
this.renderer.setValue(node: any, value: string): void;
this.renderer.listen(target: 'window'|'document'|'body'|any, eventName: string,callback: (event: any) => boolean | void): () => void;</p>
详细用法 https://www.concretepage.com/angular-2/angular-4-renderer2-example
还有一种绑定事件的写法
<p class="pre-cmd">@Component({
  selector: 'my-comp',
  template:
  `&#60input #myInput type="text" />
   &#60div> Some other content &#60/div>`
})
export class MyComp implements AfterViewInit {
  @ViewChild('myInput') input: ElementRef;
  constructor(private renderer: Renderer) {}
  ngAfterViewInit() {
    this.renderer.invokeElementMethod(  //  this.renderer.invokeElementMethod();
  this.input.nativeElement, 'focus');   //input是上边定义好的 input: ElementRef;
    }
}</p>
另外值得注意的是，@ViewChild() 属性装饰器，还支持设置返回对象的类型，具体使用方式如下：
<p class="pre-cmd">@ViewChild('myInput') myInput1: ElementRef;
@ViewChild('myInput', {read: ViewContainerRef}) myInput2: ViewContainerRef;</p>
若未设置 read 属性，则默认返回的是 ElementRef 对象实例。
https://blog.csdn.net/qq_36279445/article/details/78561118
https://blog.csdn.net/xuehu837769474/article/details/79912626</pre>
          <h3>16、组件之间的传值</h3>
          <pre>
http://www.cnblogs.com/SLchuck/p/5904000.html  组件间时时监听
<span>① 父传子-利用@Input  意味着[]</span>
app-headers是子组件,在app-headers的父级组件中已定义好 msg fun()  getSonData()等数据和函数，之后是利用 [] 的方式传到app-headers这个子组件中,同时可以用生命周期函数ngOnChanges可以时时监听传输数据的变化
<p class="pre-cmd">父组件中的传入写法
&#60app-headers [msg]="msg" [fun]="fun" [getSonData]="getSonData">&#60/app-headers>  利用的是[]
子组件中的写法
import { Component, OnInit ,Input,OnChanges, SimpleChanges } from '@angular/core';   //关键是引入Input
@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  @Input()  msg:string;        //注意引入的写法@Input
  @Input()  fun:any;
  @Input()  getSonData;
  public sonMsg="这是子组件的数据";
  sonDataFun(){                     // 这个是子组件中的函数调取父级组件中的函数并传参
    var _this=this;
    this.getSonData(_this.sonMsg)
  }
  constructor() { }
  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
     console.log('ngOnChanges', this.msg);  //时时监听msg是否发生改变
  }
}</p>
<span>② 子组件触发父组件函数,也可以说是子组件传值给父组件  利用 Output,EventEmitter ()</span>
父组件中
<p class="pre-cmd">html中
&#60app-headers (toparent)="fatherRequest(msg)" (onClick)="onCli($event)">&#60/app-headers> //这里用的是()
fatherRequest(msg){
  alert(msg)
}
onCli(isClick: boolean) { //父组件的方法，更换title的值
  if(isClick){ //如果子组件弹射出来的变量为true
      this.title="你点击了按钮"; //那么就更改title
  }
}
</p>
子组件的类里调取
<p class="pre-cmd">import { Component, OnInit ,Output,EventEmitter} from '@angular/core';  //重点 Output EventEmitter
@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  //重点是通过EventEmitter实例化一个自定义的toparent，好可以调取父级函数
  @Output() toparent=new EventEmitter();
   sonRequest(){
     //调用父组件的方法,广播数据
      this.toparent.emit('这是子组件的值');
   }
  //or
  @Output() helloEvent:EventEmitter&#60string>=new EventEmitter&#60string>();
  //or
  @Output() onClick = new EventEmitter&#60boolean>();//暴露自定义事件onClick 而且是个布尔值
    click(isClick: boolean) { //click()只是一个普通的方法
    this.onClick.emit(isClick);//向父组件弹射isClick变量，这个变量在button被点击的时候触发
    }
  constructor() { }
  ngOnInit() {}
}</p>
<span>③ 父组件调取子组件的实例 @ViewChild()</span>
@ViewChild的作用是声明对子组件元素的实例引用，意思是通过注入的方式将子组件注入到@ViewChild容器中，你可以想象成依赖注入的方式注入，只不过@ViewChild不能在构造器constructor中注入，因为@ViewChild会在ngAfterViewInit()回调函数之前执行。
@VIewChild提供了一个参数来选择将要引入的组件元素，可以是一个子组件实例引用， 也可以是一个字符串,下面是使用的区别
@ViewChild(ChildenComponent) child: ChildenComponent;//子组件实例引用
@ViewChild("child") child2; //字符串
1、当传入的是一个子组件实例引用
<p class="pre-cmd">childenConponetn.ts（子组件）
import {Component} from @angular/core';
@Component({
  selector: 'app-childen',
  templateUrl: './childen.component.html',
  styleUrls: ['./childen.component.css']
})
export class ChildenComponent {
  fun1() {      //定义了一个类方法fun1()，提供给父组件调用
    alert('子组件方法');
  }
}
parentComponent.ts（父组件）
import {Component, ViewChild} from '@angular/core';
import {ChildenComponent} from './childen/childen.component'  //①因为是子组件实例，所以要引入组件
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  @ViewChild(ChildenComponent) child: ChildenComponent;  //②定义一个变量child接收
  OnClick() {
     this.child.fun1();  //③调用子组件中的方法
  }
}
</p>
2、当传入的是一个字符串
<p class="pre-cmd">&#60p class="parent_p">
 &#60p>父组件&#60/p>
 &#60input type="button" value="调用子组件方法" (click)="OnClick()">
 &#60app-childen #myChild>&#60/app-childen>   //① 注意这里加了个#myChild
&#60/p>
parentComponent.ts（父组件）
@Component({
selector: 'app-parent',
templateUrl: './parent.component.html',
styleUrls: ['./parent.component.css']
})
export class ParentComponent {
@ViewChild('myChild') child;  //② @ViewChild传入一个字符串myChild，变量child接收。其它不变
  OnClick() {
      this.child.fun1();
  }
}</p>
<span>④ 父组件和子组件通过服务来通讯</span>
这时候就要利用服务文件Service.ts来帮忙了
1.Service.ts定义一个你想用的服务
<p class="pre-cmd">import {Injectable} from "@angular/core"
@Injectable()
export class Service {
  title='service';//公共变量
  getData() {//公共方法
    return this.title;
  }
} </p>
2.app.component.html 父组件
<p class="pre-cmd">&#60p>{{title}}利用服务文件Service.ts实现组件通信&#60/p>
&#60button (click)="onclick()">点击&#60/button>
&#60child>&#60/child>
2.app.component.ts
import { Component } from '@angular/core';
import { Service } from './Service';//导入服务
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title='app';
    constructor(public pService: Service) { }  //① 原来的写法是这样的pService = new Service()不推荐这种写法;
    onclick(){
        this.title = this.pService.getData();
        console.log(this.title);
    }
}</p>
3.child.component.ts
<p class="pre-cmd">import { Component } from '@angular/core';
  import { Service } from '../Service';
@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent{
title = 'child';
constructor(public pService: Service) {}  //② 与父组件一样的服务注入
onclick(){
  this.title = this.pService.getData();   //③ 这里只是一个简单的字段调用，也可以写为数据的存储
  }
}</p>
记得要将父子组件，服务组件注入到app.module.ts中</pre>
          <h3>17、ng-template，ng-container，ng-content的区别</h3>
          <pre>
https://www.imooc.com/article/details/id/24837
1）ng-template
&#60ng-template #temp>  测试文本&#60/ng-template>
除了&#60!----> 证明它的痕迹以外什么都没有
&#60ng-template>的功能与&#60template>元素类似，都是一个默认隐藏的元素

          </pre>
          <h3>17、使用各UI框架分析</h3>
          <pre>
1.使用element-ui
安装element插件 ，现在element for angular 才到 0.6.4坑爹啊，IE下全是错误，果断换掉
使用 npm 的方式安装
npm i --save element-angular
将 element-angular 引入app.module.ts根模块后，可以在任意组件中使用。
import { ElModule } from 'element-angular'   引入模块
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ElModule.forRoot(),       //声明组件中使用模块
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

2.Ant Design of Angular
安装使用插件 Ant Design of Angular  ，官网API https://ng.ant.design/version/0.5.x/#/docs/angular/introduce
现在Ant Design of Angular  才到 0.6.15
使用 npm 的方式安装   npm install ng-zorro-antd --save
在IE9下报 SCRIPT5011: 不能执行已释放 Script 的代码  一堆错误，pass</pre>
          <h3>18、模块、装饰器功能单独解析</h3>
          <pre>
<span>① ViewChild和ViewChildren</span>
ViewChild 装饰器用于获取模板视图中的元素或直接调用其组件中的方法。它支持 Type 类型或 string 类型的选择器，同时支持设置 read 查询条件，以获取不同类型的实例。比如ElementRef和ViewContainerRef.
ViewChildren 装饰器是用来从模板视图中获取匹配的多个元素，返回的结果是一个 QueryList 集合。
child.component.ts
<p class="pre-cmd">@Component({
  selector: 'app-child',
  template: '&#60p>{ {name}}&#60/p>&#60div>&#60input value="xixi">&#60/div>',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
public name: string = 'childName';
  greeting(name:string) {
    console.log('hello' + name);
  }
}</p>
app.component.ts
<p class="pre-cmd">import {ChildComponent} from './child.component'
@Component({
  selector: 'app-root',
  template: '&#60app-child #childA>&#60/app-child>'
  &#60app-child #childB>&#60/app-child>
  &#60button (click)="clickMe()" >点我&#60/button>`,
})
export class AppComponent implements OnInit {
@ViewChild('childA') child1;
@ViewChild(ChildComponent) child2;
@ViewChild('childB', {read: ElementRef}) child3;
@ViewChild('childB', {read: ViewContainerRef}) child4;
@ViewChildren(ChildComponent) children;
clickMe() {
    this.child1.greeting('child1');
    this.child2.name = '我是child2';
    this.child3.nativeElement.lastElementChild.firstElementChild.value = '我是child3~';
    this.child4._data.componentView.component.greeting('child4');
    this.children._results[0].greeting('children');
  }
}</p>
https://segmentfault.com/a/1190000010300160
<span>② EventEmitter类</span>
主要是用来实现组件之间的通信
记住这两个参数就够了，emit(),subscribe()发射和接收；next()几乎等同于emit()，但是过时了
this.emitService.eventEmit.emit("userList");
this.emitService.eventEmit.subscribe((value: any) => {
     if(value == "userList") {
         // 这里就可以调取接口，刷新userList列表数据
         alert("收到了，我立马刷新列表");
     }
});
案例 https://segmentfault.com/a/1190000011425280
https://angular.cn/api/core/EventEmitter#eventemitter</pre>
          <h3>19、引入第三方插件库</h3>
          <pre>
① 引入jquery
index.html 直接引入路径，cdn路径或者assets文件下的jQuery文件都可以。例如：&#60script src="http://code.jquery.com/jquery-2.2.4.js"> &#60/script>
或者在.angular-cli.json文件中这样添加代码,又或者在assets静态文件中直接引入
"scripts": [
  "assets/js/jquery-1.9.1.min.js",
  "../node_modules/jquery/dist/jquery.min.js"
]
重要的部分来了；这个时候我们还不能直接使用jquery，因为Angular是使用TypeScript语言开发的，而jquery本质是javascript，TypeScript是不能直接使用的。我们需要先安装类型描述文件，让TypeScript认识jquery。
安装类型描述文件
通过命令：npm install @types/name –save-dev
之后在要调用ts文件中使用先定义$为“接口”，这样就可以使用$
declare var $: any;  //推荐
ngOnInit(){
   alert($("body").length)
}
还可以用下面的方式引入  //不推荐
app.component.ts需要使用，直接import
import * as $ from "jquery";

② 引入echarts图表
使用npm安装echarts
npm install echarts --save
npm install ngx-echarts --save
配置angular-cli.json文件
"scripts": [
        "../node_modules/echarts/dist/echarts.min.js"
      ]
在app.module.ts下配置
import { NgxEchartsModule } from 'ngx-echarts';
@NgModule({
  declarations: [],
  imports: [
    NgxEchartsModule
  ],
  providers:[],
  bootstrap: []
})
export class AppModule { }
html中
&#60div echarts [options]="chartOption" (chartInit)="onChartInit($event)" class="demo-chart">&#60/div>
export class EchartsComponent implements OnInit {
showloading:boolean = true;
constructor() {
  setTimeout(()=> {
    this.showloading = false;
  }, 3000);
}
ngOnInit() {
}
chartOption = {........}
onChartInit(ec) {
  this.echartsIntance = ec;
}
resizeChart() {
  if (this.echartsIntance) {
    this.echartsIntance.resize();
    this.echartsIntance.showLoading();
  }
}
chartOption就是option
[dataset]：您可以忽略“options”中的“data”属性，并用于dataset绑定系列数据。
[loading]：布尔属性。当您的数据未准备好时，使用它来切换加载动画的echarts。
theme：用它来初始化具有主题的echarts。你需要在主题文件.angular-cli.json或index.html。例如，如果我们要dark.js在Echarts主题页面中使用：&#60div echarts theme = "dark" class = "demo-chart" [options] = "chartOptions">&#60/div>这样我们就使用成功dark主题了。
(chartInit)它暴露了echartsInstance 'chartInit'事件。所以，你可以直接调用的API一样：resize()，showLoading()
事件方法
chartClick: It emits the same params of 'click' event
chartDblClick: It emits the same params of 'dblclick' event
chartMouseDown: It emits the same params of 'mousedown' event
chartMouseUp: It emits the same params of 'mouseup' event
chartMouseOver: It emits the same params of 'mouseover' event
chartMouseOut: It emits the same params of 'mouseout' event
chartGlobalOut: It emits the same params of 'globalout' event
chartContextMenu: It emits the same params of 'contextmenu' event (since v1.2.1)
chartDataZoom: It emits the same params of 'dataZoom' event (thanks to averhaegen)
          </pre>
          <h3>20、错误详解</h3>
          <pre>
问题01：如果webstom无法热更新
把这一行勾去掉就可以了。setting -> system settings -> "safe write"

问题02：报下面的错误
ERROR in ./node_modules/css-loader?{"sourceMap":false,"importLoaders":1}!./node_modules/postcss-loader?{"ident":"postcss"}!.
src/styles.css
Module build failed: Error: ENOENT: no such file or directory, open 'C:\work_project\esop-web\src\styles.css'
 @ ./src/styles.css 4:14-134
 @ multi ./src/styles.css ./src/common.css

说明在node_modules中并没有引入css-loader 跟postcss-loader 这两个模块
npm install --save-dev css-loader
npm i -D postcss-loader

问题03：在IE下报 SCRIPT5022: 引发了异常但未捕获
将src/polyfills.ts文件中，如图的代码块取消注释就可以了
 import 'core-js/es6/symbol';
 import 'core-js/es6/object';
 import 'core-js/es6/function';
 import 'core-js/es6/parse-int';
 import 'core-js/es6/parse-float';
 import 'core-js/es6/number';
 import 'core-js/es6/math';
 import 'core-js/es6/string';
 import 'core-js/es6/date';
 import 'core-js/es6/array';
 import 'core-js/es6/regexp';
 import 'core-js/es6/map';
 import 'core-js/es6/weak-map';
 import 'core-js/es6/set';

问题04：解决IE10 IE9出现异常SCRIPT5011:不能执行已释放Script的代码
在IE上调试切换 IE版本时出现这个问题， 如果定义好IE默认版本，不切换到其他版本就没事</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'angular',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name,
        catalogue:[]
      }
    },
    mounted:function(){
      this.$nextTick(function(){
         this.createCatalogue();
      })
    },
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
          flag.push({name:object[i].innerHTML})
        }
        this.catalogue=flag;
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table{
margin-top: 15px;
text-align: center;
border-collapse: collapse;
}
table tr {
  border: 0;
  background-color: #fff;
}

table thead tr{
  background-color: #eff3f5;
}
table tbody tr:nth-of-type(2n){
  background-color: #F7F7F7;
}

table thead th{
  min-width: 120px;
  padding: 10px;
  border: 1px solid #CCCCCC;
}
  table tbody td{
  min-width: 120px;
  padding: 15px 10px;
  border: 1px solid #CCCCCC;
}
</style>
