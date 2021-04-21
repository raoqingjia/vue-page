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
一、Rxjs介绍
RxJS是ReactiveX编程理念的JavaScript 版本，和React没啥关系。ReactiveX来自微软，它是一种针对异步数据流的编程。简单来说，它将一切数据，包括 HTTP 请求，DOM 事件或者普通数据等包装成流的形式，然后用强大丰富的操作符对流进行处理，使你能以同步编程的方式处理异步数据，并组合不同的操作符来轻松优雅的实现你所需要的功能。
RxJS是一种针对异步数据流编程工具，或者叫响应式扩展编程；可不管如何解释 RxJS 其目标就是异步编程，Angular 引入 RxJS 为了就是让异步可控、更简单。

目前常见的异步编程的几种方法：
1、回调函数
2、事件监听/发布订阅
3、Promise
4、Rxjs

二、Promise和RxJS处理异步对比

Promise 处理异步:
let promise = new Promise(resolve => { setTimeout(() => {
        resolve('---promise timeout---');
    }, 2000);
});
promise.then(value => console.log(value));

RxJS 处理异步:
import { Observable } from 'rxjs';
// Observable异步获取数据
let stream = new Observable((observer) => {
  setInterval(function () {  //  setTimeout 只发布一次，setInterval发布多次
    observer.next({
      name: 'huangbiao',
      age: 30
    });
  }, 3000);
});
stream.subscribe(function(data){
  console.dir(data); // 打印的是 {name: 'huangbiao',age: 30}
});

RxJS 和 Promise的基本用法非常类似，除了一些关键词不同。Promise里面用的是 then()和resolve()，而 RxJS里面用的是next()和subscribe();Rxjs相比Promise 要强大很多。比如 Rxjs 中可以中途撤回、Rxjs 可以发射多个值、Rxjs 提供了多种工具函数等等。Rxjs中observer就是信息发布，subscribe是消息订阅

三、Rxjs unsubscribe 取消订阅

Rxjs 可以通过 unsubscribe() 可以撤回 subscribe 的动作
let stream = new Observable(observer => {
    let timeout = setTimeout(() => {
	clearTimeout(timeout);
	observer.next('observable timeout'); }, 2000);
});

let disposable = stream.subscribe(value => console.log(value));

disposable.unsubscribe();  //取消执行

四、Rxjs 的工具函数

Angular6 以后使用以前的 rxjs 方法，必须安装 rxjs-compat 模块才可以使用 map、filter 方法，同时RXJS6 改变了包的结构，主要变化在 import 方式和 operator 上面以及使用 pipe()

import {map,filter,throttleTime} from 'rxjs/operators';
let stream= new Observable< any>(observer => {
	let count = 0;
	setInterval(() => {
		observer.next(count++);
	}, 1000);
});
stream.pipe(filter(val=>val%2==0)).subscribe((value) => console.log("filter>"+value));
filter之后只有满足条件的才会执行后续逻辑

stream.pipe(filter(val=>val%2==0), map(value => { return value * value })).subscribe(value => console.log("map>"+value));
map可以把next()传给的值按一定逻辑处理后，把处理后的值传给subscribe

var button = document.querySelector('button');
fromEvent(button, 'click').pipe(throttleTime(2000)).subscribe(() => console.log(`Clicked`));
throttleTime(2000) 2秒中才会执行一次click事件

五、 next 、 error 和 complete 处理逻辑
next 可以多次传值给Observable执行，  error（表示错误执行）、complete（表示没有可执行逻辑） 会中断Observable的执行，而且只能发生其中的一个

import { Observable } from 'rxjs';
const fruitObservable = Observable.create( observer =>{
   observer.next("apple");
   observer.next("banana");
   observer.error( new Error("someone took my fruit"));
   observer.complete();
   observer.next("watermelon");
})
const fruitsObserver = {
  next: data => console.log(data),
  error:error=> console.log(error.message),
  complete:()= console.log("done!")
}
fruitObservable.subscribe(fruitsObserver);
————————
输出结果
apple
banana
someone took my fruit

六、RXJS里面Subject

在RXJS官方文档Subject的介绍
Subject既是Observable，也是观察者（可以多个）,Subject 也有 next，error，complete 三种状态。
observable的每个订阅者之间，是独立的，完整的享受observable流动下来的数据的。
subject的订阅者之间，是共享一个留下来的数据的。
Subject是一种广播机制，多人可以订阅一个Subject，然后Subject发布一条信息，全体订阅者都可以接收到，或者你可以理解成微信公众号(subject)和用户(subscribe)的关系，在微信公众号发布一条消息，全体用户都可以接收到，这就是Subject要实现的事情。
Subject和Observable最大的不同之处在于，Observable只能玩一对一，而Subject是一对多。
Observable是发布者和订阅者必须配对，订阅者无论何时订阅发布者都可以执行到；而Subject不是，一旦发布了消息，如果你延时接收，那对不住，一旦错过就接收不到了。

案例1
import { Subject } from 'rxjs';
let subject1: Subject< number> = new Subject< number>();
subject1.next(100);
subject1.subscribe(res=>{
      console.log('SubjectA:'+res);
 })
subject1.subscribe(res=>{
      console.log('SubjectB:'+res);
 })
subject1.next(200);
subject1.next(300);
————————————————
执行结果：
SubjectA:200
SubjectB:200
SubjectA:300
SubjectB:300
Subject只有在订阅之后，才能收到数据源发出的值。 subject1.next(100)的时候，还没有被订阅，因此不会打印结果。

Subject还有三个比较常用的子类：AsyncSubject,ReplaySubject,BehaviorSubject,PublishSubject。就感觉AsyncSubject可能用得上，其余不介绍了。

AsyncSubject
AsyncSubject 只有当 Observable 执行完成时(执行complete())，它才会将执行的最后一个值发送给观察者。也就是说，它只会保存流里的最后一条数据，而且只会在数据流complete时候才会发送。

let subject4: AsyncSubject< number> = new AsyncSubject< number>();
subject4.next(100);
subject4.subscribe(res => {
    console.log('Async-SubjectA:' + res);
});
subject4.next(200);
subject4.subscribe(res => {
    console.log('Async-SubjectB:' + res);
});
subject4.next(300);
subject4.subscribe(res => {
    console.log('Async-SubjectC:' + res);
});
subject4.complete();
subject4.next(400);
————————————————
执行结果：
Async-SubjectA:300
Async-SubjectB:300
Async-SubjectC:300

可见，数据流在complete之前，有100，200，300。最后一条是300。所有订阅者都只会收到最后一条300。而complete之后，自然不会再发送值了。

asObservable()让subject它只能接收数据，而不能直接更新存储，看下面的案例

@Injectable()
export class MessageService {
    private subject = new Subject< any>();
    sendMessage(message: string) {
        this.subject.next({ text: message });
    }
    clearMessage() {
        this.subject.next();
    }
    getMessage(): Observable< any> {
        return this.subject.asObservable();  //  asObservable()接收数据，而不能直接next()
    }
}
AppComponent 组件中
export class AppComponent implements OnDestroy {
    message: any;
    subscription: Subscription;
    constructor(private messageService: MessageService) {
        this.subscription = this.messageService.getMessage().subscribe( message => { this.message = message;  });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}

七、理解RxJS里面的Observable 、Observer 、Subject

observable是数据源头，是生产者，是待订阅者，通过subscribe方法可以被订阅，而observer 是观察者，数据使用者，数据消费者。或者理解为observable是一个订阅对象，subscribe代表着一个订阅的发生，observer一个订阅的过程；observer有三个回调函数的对象（next，error，complete），回调函数不必每次都提供三个。如果我们只提供了一个回调函数作为参数，subscribe会将我们提供的函数参数作为next的回调处理函数。

一个比喻可以很好的理解这种订阅关系：现在有一家牛奶生产商，所有人都可以打电话订奶。这个时候牛奶商就是Observable，市民就是Observer。如果市民打电话（subscribe）给牛奶商，它们就会在牛奶商送奶（next）成功的时候收到牛奶，至于怎么喝就是自己的事情了，而市民是不关心牛奶是怎么生产和如何送过来的（比如数据库，HTTP过程的TCP/IP协议，握手过程等）。送奶过程可能会遇到意外导致送奶失败（error），而成功之后，牛奶商会把这次送奶标记为已送达（complete）。
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
