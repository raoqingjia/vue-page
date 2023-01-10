<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>什么是Rxjs</h3>
          <pre> www.rxjs.dev  官网
https://rxjs-cn.github.io/learn-rxjs-operators/
一组可用来处理非同步或事件的JavaScript函式库
非同步
Ajax/XHR/fetch API
Service Worker / Node Stream
setTimeout / setInterval
Promise
事件
格式DOM事件(click,dblclick,keyup,mousemove)
CSS动画事件(CSS3 transitionEnd event)
HTML5 Geolocation / WebSockets / Server Send Event</pre>
          <h3>Rxjs的核心概念</h3>
          <pre>Observable   可观察的物件
代表一组未来即将产生的时间资料(被观察的物件)
Observer  观察者物件
代表一个用来接收观察结果的物件(收到的就是事件资料)
观察者物件就是一个物件包含3个还有回呼函数的属性(next,error,complete)

Subscription   订阅物件
代表正在执行observable/observer的执行个体(可用来取消订阅)

Operators  运算子
必须拥有函数编程中所定义的纯函数的特性
主要用来处理一系列的时间资料集合
常见的运算子包含map,filter,concat,flatMap,switchMap...

Subject  主体物件
如同EventEmitter一样，主要用来广播收到的事件资料给多为Observer(观察者)
Schedulers 排程控制器
用来集中管理与调度多重事件之间的资料，控制时间并发情况(control concurrency)

---------------------------下面来点白话文-------------------------------
observer观察者
什么是观察者？观察者是可观察对象所发送数据的消费者，观察者简单而言是一组回调函数，分别对应一种被可观察对象发送的通知的类型:next, error和complete
const Observable = require("rxjs/Observable").Observable;
const numberObservable = new Observable(observer => {
  observer.next(5);
  observer.next(10);
});
numberObservable.subscribe(value => console.log(value));
// 输出 5 10

Subscription订阅
订阅对象也可以被放置在一起，因此对一个订阅对象的unsubscribe()进行调用，可以对多个订阅进行取消。做法是:把一个订阅"加"进另一个订阅。
subscribe也可以直接接受函数作为参数，第一个如果是函数类型，就会被认为是next、第二个函数参数被认为是error，第三个则是complete。
subscribe 第一个回调函数  next  第二个回调函数 error  第三个回调函数  complete

什么是subject
subject是一种特殊的Observable，而且是多播的。
既然Observable，就可以被subscribe，只不过每个observer都会存一份list，一旦有值发出，每个observer都会同时收到值
subject还是observer,可以执行next(),error(),complete()的方法
有了subject之后，我们可以直接把subject传到subscribe中
调用next(theValue)方法后，Subject会向所有已经在其上注册的Observer多路推送theValue。
next —— 每当 Subject 对象接收到新值的时候，next 方法会被调用。
error —— 当处理事件中出现异常时，通过try-catch捕获异常，Observer 提供 error 方法来接收错误进行统一处理。
complete —— Subject 订阅的 Observable 对象结束后，complete 方法会被调用。
subscribe —— 添加观察者。
unsubscribe —— 取消订阅（设置终止标识符、清空观察者列表）

下面的例子中，我们在Subject上注册了两个Observer，并且多路推送了一些数值：
var subject = new Rx.Subject();
subject.subscribe({
  next: (v) => console.log('observerA: ' + v)
});
subject.subscribe({
  next: (v) => console.log('observerB: ' + v)
});
subject.next(1);
subject.next(2);
控制台输出结果如下：
observerA: 1
observerB: 1
observerA: 2
observerB: 2</pre>
          <h3>示范Rxjs的运作方式</h3>
          <pre>1、快速示范Rxjs运作方式
建立可观察的Observable的物件
var clicks$ = rxjs.fromEvent(document,'click');
建立观察者无线 Observer
var observer = { next :(x) => console.log(x)};
建立订阅物件(订阅Observable物件，并传入Observer观察者物件)
var subs$ = clicks$.subscribe(observer);
取消订阅Subscription物件
subs$.unsubscribe();

2、下面是简化Observer的写法
建立可观察的Observable的物件
var clicks$ = rxjs.fromEvent(document,'click');
建立订阅物件(订阅Observable物件并自动建立观察者物件)
var subs$ = clicks$.subscribe(x => console.log(x));   //  就是这里把observer的函数方法直接写到subscribe里了
取消订阅Subscription物件
subs$.unsubscribe();

3、示例Rxjs如何透过运算子过滤资料
建立可观察的Observable的物件
var clicks$ = rxjs.fromEvent(document,'click');
套用filter运算子
const { filter } = rxjs.operators;
clicks$ = clicks$.pipe(filter(x => x.clientX < 100));
建立订阅物件(订阅Observable物件并自动建立观察者物件)
var subs$ = clicks$.subscribe(x => console.log(x));
取消订阅Subscription物件
subs$.unsubscribe();

4、示例Rxjs主体物件Subject的用法
建立主体物件Subject(之后要靠这个主体物件进行广播)
var subject = new rxjs.Subject();
建立可观察的Observable的物件
var clicks$ = rxjs.fromEvent(document,'click');
设定最多取得两个事件资料就将Observable物件设为完成
clicks$ = clicks$.pipe(take(2));
设定将click$全部交由subject主体物件进行广播
click$.subscribe(subject);
最后再由subject去建立Observer观察者物件
var  subs1$ = subject.subscribe((x) => console.log(x.client));
var  subs2$ = subject.subscribe((x) => console.log(x.client));
取消订阅Subscription物件
subs1$.unsubscribe();     subs2$.unsubscribe();

5、rxjs操作符
rxjs有八种类型的操作符，分别是：组合、条件、创建、错误处理、多播、过滤、转换、工具
tips:通常情况下，我们是不会通过new Observable()形式去创建一个可观察对象的，都是使用操作符来创建</pre>
          <img src="../../img/framework/rxjs-img01.png">
          <h3>下面是项目中实际案例</h3>
          <pre>1、angular中ngAfterViewInit函数对dome层绑定keyup同时实现了防抖和对象指定功能
 ngAfterViewInit(): void {
    fromEvent(this.ele.nativeElement , 'keyup').pipe(
      debounceTime(1000),
      map(evt=>{
             return evt['target']['value']
      }),
     switchMap(value=>{
        console.log(value);
        return this.createObservable(value);
      }),
      distinctUntilChanged()
    ).subscribe() ;
  }
2、取消 http 调用的最简单方法是取消订阅。
const subscription: Subscription = this.http.post(...).subscribe(...);
subscription.unsubscribe();
3、单独说一下asObservable，之前我再项目里就用乱了
asObservable的目的是为了防止主体的“观察者端”从API中泄漏出来。当你不希望人们能够“下一步”进入最终的可观察对象时，基本上是为了防止泄漏的抽象。这话说的有点绕哈，看下面代码
const myS = new Subject();
const myO= myS.asObservable();
this.myO.subscribe((x) => console.log(x));
this.myO.next('hello');     // 这里再用next就报错了
myS还是Subject，依然保留Observable & Observer双重身份
myO是myS通过asObservable创造出来单纯的Observable，抛弃了Observer的特征
说白了只要用了asObservable就不能用next()这个方法了</pre>
          <img src="../../img/framework/rxjs-img02.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'rxjs',
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
