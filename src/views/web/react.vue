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
          <h3>React项目安装搭建</h3>
          <pre>
安装第三方脚手架工具create-react-app，使用其快速搭建项目并运行
npm install -g create-react-app 全局安装
create-react-app react-page 创建项目

react和vue异同
1、支持组件化概念
2、虚拟dom
3、数据流驱动dom，自动计算与上次dao的差异变化
不同
react是单向数据流绑定
vue是双向数据流绑定

常用安装命令
npm install -g  live-server 自动更新，热监听  启动命令 live-server --port=8082 默认ip

注意点
render方法的return后面紧跟div标签，标签不能换行，为了避免换行报错可以在return后加个（）
this.setState
class组件要素 render  方法  变量

下面是react项目初始化的目录
 </pre>
          <img src="../../img/web/react/react-directory.png">
          <h3>React项目目录文件介绍</h3>
          <p class="edit">├── public # 公共静态资源目录<br> │ &nbsp; ├── favicon.ico # 网站图标<br> │ &nbsp; ├── index.html #
            主页面<br> │ &nbsp;
            ├── logo192.png # app图标<br> │ &nbsp; ├── logo512.png # app图标<br> │ &nbsp; ├── manifest.json # app配置文件<br> │
            &nbsp; └── robots.txt # 网站跟爬虫间的协议<br> ├── src # 主目录<br> │ &nbsp; ├── api # 接口文件<br> │ &nbsp; ├── app #
            redux配置文件<br> │ &nbsp; ├── components # 公共组件<br> │ &nbsp; │ &nbsp; ├── Loading # loading组件<br> │ &nbsp; │
            &nbsp; ├── Redirect # 重定向组件<br> │ &nbsp; │ &nbsp; └── withAuthorization # 权限认证组件<br> │ &nbsp; ├── layouts #
            主要布局组件<br> │ &nbsp; ├── locales # i18n国际化配置<br> │ &nbsp; ├── pages # 路由组件<br> │ &nbsp; ├── routes # 路由配置<br>
            │ &nbsp; ├── styles # 全局/公共样式<br> │ &nbsp; ├── utils # 工具函数<br> │ &nbsp; │ &nbsp; └── http # 封装请求函数<br> │
            &nbsp; ├── App.tsx # App组件<br> │ &nbsp; ├── index.ts # 主入口<br> │ &nbsp; ├── react-app-env.d.ts # 类型文件，在编译时会引入额外文件<br> │ &nbsp; ├──
            reportWebVitals.ts # 基于Google的网站性能分析文件<br> │ &nbsp; └── setupTests.ts # 安装测试<br> ├── .env.development #
            开发环境加载的环境变量配置<br> ├── .env.production # 生产环境加载的环境变量配置<br> ├── .gitignore # git忽略文件<br> ├── craco.config.js #
            react脚手架配置文件<br> ├── package.json # 包文件<br> ├── README.MD # 项目说明文件<br> ├── tsconfig.extend.json #
            路径别名配置文件<br> ├── tsconfig.json # ts配置文件<br> └── yarn.lock # yarn下载包的缓存文件</p>
          <h3>React之代码书写</h3>
          <pre>
1、React.createClass()方法用于生成一个组件类

2、所有组件类都必须有自己的render方法，用于输出组件

3、假如生成一个组件类HelloMessage，模板插入< HelloMessage />时，会自动生成组件类HelloMessage的一个实例

4、组件类的第一个字母必须大写，否则会报错，比如HelloWorld，不能写成helloWorld

5、组件类里面只能包含一个顶层标签，否则会报错（组件类的render方法里面）

6、组件类对应的标签的用法和HTML标签的用法完全一致，可以加入任意的属性。假如生成一个组件类HelloMessage，其对应的组件标签就是< HelloMessage />，在这个标签里面可以加入普通的HTML标签的任意属性，例如：< HelloMessage name="小丸子"/>，就是给组件标签< HelloMessage />加入了一个name属性，值为“小丸子”

7、给组件标签添加属性时，需要注意两个地方，就是把class属性写成className，for属性写成htmlFor，这是因为class和for时JS里面的保留字

 jsx  JavaScript  XML         </pre>
          <h3>React的class组件及属性详解</h3>
          <pre>
            https://blog.csdn.net/fanlehai/article/details/121350042
          </pre>
          <h3>React生命周期函数</h3>
          <pre>
生命周期的概念
在组件创建、组件属性更新、组件被销毁的过程中，总是伴随着各种各样的函数执行，这些在组件特定时期，被触发执行的函数，统称为组件的生命周期函数。

组件生命周期三个阶段
加载阶段（Mounting）：在组件初始化时执行，有一个显著的特点：创建阶段生命周期函数在组件的一辈子中只执行一次；
更新阶段（Updating）：属性和状态改变时执行，根据组件的state和props的改变，有选择性的触发0次或多次；
卸载阶段（Unmounting）：在组件对象销毁时执行，一辈子只执行一次；

React16新的生命周期弃用了componentWillMount、componentWillReceiveProps，componentWillUpdate；
新增了getDerivedStateFromProps、getSnapshotBeforeUpdate来代替弃用的三个钩子函数（componentWillMount、componentWillReceivePorps，componentWillUpdate）
新增了对错误的处理（componentDidCatch）

React16之前旧的生命周期
1、Mounting（加载阶段：涉及6个钩子函数）
constructor()
加载的时候调用一次，可以初始化state

getDefaultProps()
设置默认的props，也可以用dufaultProps设置组件的默认属性。

getInitialState()
初始化state，可以直接在constructor中定义this.state

componentWillMount()
组件加载时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state

render()
react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行

componentDidMount()
组件渲染之后调用，只调用一次

2、Updating（更新阶段：涉及5个钩子函数)
componentWillReceivePorps(nextProps)
组件加载时不调用，组件接受新的props时调用

shouldComponentUpdate(nextProps, nextState)
组件接收到新的props或者state时调用，return true就会更新dom（使用diff算法更新），return false能阻止更新（不调用render）

componentWillUpdata(nextProps, nextState)
组件加载时不调用，只有在组件将要更新时才调用，此时可以修改state

render()
react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行

componentDidUpdate()
组件加载时不调用，组件更新完成后调用

3、Unmounting（卸载阶段：涉及1个钩子函数）
componentWillUnmount()
组件渲染之后调用，只调用一次

4、生命周期函数代码示例
import React, { Component } from 'react'
export default class OldReactComponent extends Component {
    constructor(props) {
        super(props)
        // getDefaultProps：接收初始props
        // getInitialState：初始化state
    }
    state = {
    }
    componentWillMount() { // 组件挂载前触发
    }
    render() {
        return (
            < h2>Old React.Component< /h2>
        )
    }
    componentDidMount() { // 组件挂载后触发
    }
    componentWillReceiveProps(nextProps) { // 接收到新的props时触发
    }
    shouldComponentUpdate(nextProps, nextState) { // 组件Props或者state改变时触发，true：更新，false：不更新
        return true
    }
    componentWillUpdate(nextProps, nextState) {  // 组件更新前触发
    }
    componentDidUpdate() {  // 组件更新后触发
    }
    componentWillUnmount() { // 组件卸载时触发
    }
}</pre>
          <img src="../../img/web/react/lifeCycle-old01.png">
          <pre>React16之后的生命周期
1、Mounting（加载阶段：涉及4个钩子函数）
constructor()
加载的时候调用一次，可以初始化state

static getDerivedStateFromProps(props, state)
组件每次被rerender的时候，包括在组件构建之后(虚拟dom之后，实际dom挂载之前)，每次获取新的props或state之后；每次接收新的props之后都会返回一个对象作为新的state，返回null则说明不需要更新state；配合componentDidUpdate，可以覆盖componentWillReceiveProps的所有用法

render()
react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行

componentDidMount()
组件渲染之后调用，只调用一次

2、Updating（更新阶段：涉及5个钩子函数)
static getDerivedStateFromProps(props, state)
组件每次被rerender的时候，包括在组件构建之后(虚拟dom之后，实际dom挂载之前)，每次获取新的props或state之后；每次接收新的props之后都会返回一个对象作为新的state，返回null则说明不需要更新state；配合componentDidUpdate，可以覆盖componentWillReceiveProps的所有用法

shouldComponentUpdate(nextProps, nextState)
组件接收到新的props或者state时调用，return true就会更新dom（使用diff算法更新），return false能阻止更新（不调用render）

render()
react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行

getSnapshotBeforeUpdate(prevProps, prevState)
触发时间: update发生的时候，在render之后，在组件dom渲染之前；返回一个值，作为componentDidUpdate的第三个参数；配合componentDidUpdate, 可以覆盖componentWillUpdate的所有用法

componentDidUpdate()
组件加载时不调用，组件更新完成后调用

3、Unmounting（卸载阶段：涉及1个钩子函数）
componentWillUnmount()
组件渲染之后调用，只调用一次

4、Error Handling(错误处理)
componentDidCatch(error，info)
任何一处的javascript报错会触发

5、新生命周期函数代码示例
import React, { Component } from 'react'
export default class NewReactComponent extends Component {
    constructor(props) {
        super(props)
        // getDefaultProps：接收初始props
        // getInitialState：初始化state
    }
    state = {
    }
    static getDerivedStateFromProps(props, state) { // 组件每次被rerender的时候，包括在组件构建之后(虚拟dom之后，实际dom挂载之前)，每次获取新的props或state之后；;每次接收新的props之后都会返回一个对象作为新的state，返回null则说明不需要更新state
        return state
    }
    componentDidCatch(error, info) { // 获取到javascript错误
    }
    render() {
        return (
            < h2>New React.Component< /h2>
        )
    }
    componentDidMount() { // 挂载后
    }
    shouldComponentUpdate(nextProps, nextState) { // 组件Props或者state改变时触发，true：更新，false：不更新
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) { // 组件更新前触发
    }
    componentDidUpdate() { // 组件更新后触发
    }
    componentWillUnmount() { // 组件卸载时触发
    }
}
下面是新旧生命周期对比图</pre>
          <img src="../../img/web/react/lifeCycle-old02.jpeg">
          <img src="../../img/web/react/lifeCycle-new.jpeg">
          <h3>React之style、className</h3>
          <pre>一种最基本的形式
return(< div style = { {border:'1px dashed #ccc', margin:'10px', padding:'10px'}}>
      < h1 style={ {fontSize:'14px'}}>评论人： {props.user}< /h1>
      < p style={ {fontSize:'12px'}}>评论内容：{props.content}< /p>
    < /div>)

1. 内联式(不推荐)
import React, { Fragment } from "react";
class Style extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const txtColor = {
        color: '#F00'
    }
    return (
     < Fragment>
         < h1 style={txtColor}>< /h1>
     < /Fragment>
    );
  }
}
export default Style;
这种写法不推荐使用,样式多了之后,会导致代码比较乱!

2. 使用className
import React, { Fragment } from "react";
import "./../../style.css";
class Style extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
     < Fragment>
         < h1 className="textColor">< /h1>
     < /Fragment>
    );
  }
}
export default Style;
新建一个.css文件,将文件引进来,标签中使用className=“textColor”,就可以使用引入.css文件中类为’textColor’的样式了.一般的项目用这个方式就可以了.

3. 使用classnames动态修改样式
import React, { Fragment } from "react";
import classNames from 'classnames'
class Style extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
     < Fragment>
         < h1 className={classNames('textColor', {'textContent': false} ,{'textTitle': true})}>< /h1>
     < /Fragment>
    );
  }
}
export default Style;
这种动态修改样式的方式,需要安装插件classnames.上面的代码中,h1标签的类有textColor和textTitle.项目中一般也会使用

4. 使用styled-components插件写标签样式
import React, { Fragment } from 'react'
import styled from 'styled-components'
const Title = styled.h1`
  color: #f00;
`
class Style extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      < Fragment>
        < Title>复习style< /Title>
      < /Fragment>
    )
  }
}
export default Style
使用styled-components给标签写样式,首先需要安装该插件.上面的代码是定义一个Title,通过styled给h1标签设置样式,然后在组件中使用的Title就相当于写过样式的h1标签.这种方式在大项目中比较常见

react 动态操作className
1、改变style
style={activeStoreId === item.id ? { background: '#f5f5f5' } : {}}

2、直接操纵className
className={activeStoreId === item.id ? "bgblue": "bgred"}

3、动态操作多个className
className={["text-24", activeStoreId === item.id?"h-300":"h-100"].join(' ')}</pre>
          <h3>React中的propTypes和defaultProps</h3>
          <pre>React 组件的默认状态（defaultProps）
defaultProps 可以为 Class 组件添加默认 props。这一般用于 props 未赋值，但又不能为 null 的情况

propTypes
什么是prop-types？prop代表父组件传递过来的值，types代表类型。简单来说就是用来校验父组件传递过来值的类型
propTypes用来规范props必须满足的类型，如果验证不通过将会有warn提示。
在React V15.5以前propTypes是集成在React中的，它使用的是react内置的类型检测，而不是第三方库
所以现在我们要用应该先引入第三方库：
//安装
npm install prop-types --save
//引入
import PropTypes from 'prop-types';
// propTypes可以检测的类型：
optionalArray: PropTypes.array
optionalBool: PropTypes.bool
optionalFunc: PropTypes.func
optionalNumber: PropTypes.number
optionalObject: PropTypes.object
optionalString: PropTypes.string
optionalSymbol: PropTypes.symbol
加上isRequired就是必填
PropTypes.any.isRequired  可以是任何格式，且必要。

defaultProps和propTypes二者在class定义中使用方法
class Greeting extends React.Component {
  render() {
    return (
      < h1>Hello, {this.props.name}< /h1>
    );
  }
}
//  定义类型
Greeting.propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.number
};
//  定义默认值
Greeting.defaultProps = {
  name: 'Stranger'
};

// 组件渲染
ReactDOM.render(
  < Greeting/>,
  document.getElementById('example')
);</pre>
          <h3>React 事件详解</h3>
          <pre>一、React事件机制是什么？
React的事件是合成事件(Synethic event)，不是原生事件。
demo1: < div onclick="handle()">ni< /div>
demo2: render() { return < div onClick={this.handle}>ni< /div> }
虽然两个例子都是通过标签内嵌的方式将click事件进行绑定，但其中的原理是不一样的，demo1是采用原生的事件处理，demo2是采用React的合成事件机制处理。

React事件机制步骤
React事件机制执行分为如下两个步骤。
事件绑定：当用户在为onClick添加函数时，React并没有将Click事件绑定在DOM上,而是在document处监听所有支持的事件；
事件触发：当事件发生，并冒泡至document处时，使用统一的分发函数dispatchEvent将指定函数执行。

合成事件和原生事件的区别
1. 写法不同。在原生事件中，事件名称使用小写，而 React 中使用驼峰命名。
如果采用 JSX 的语法，你需要传入一个函数作为事件处理函数，而不是一个字符串(DOM 元素的写法)。
// 原生事件
< button onclick="buttonClick()">
// React事件
< button onClick="buttonClick()">
2. 阻止默认行为不同。在 HTML 中，阻止事件的默认行为使用 return false，而 React 中必须调用 preventDefault。
// 原生
< button onclick="console.log('123'); return false">
// React
function buttonClick(e) {
   e.preventDefault()
}
3. 机制不同。原生事件是直接将事件绑定到当前元素，React 中的事件机制则分为两个阶段：事件注册、事件分发。所有的事件都会注册到 document 上，当触发时，会采用事件冒泡的形式冒泡到document上面，然后React将事件封装给正式的函数处理。

由此得出如下结论：
React的所有事件都挂载在document中；
当真实dom触发后，冒泡到document，才会对React事件进行处理；
所以原生的事件会先执行，然后执行React合成事件，最后执行真正在document上挂载的事件。

React事件和原生事件可以混用吗？
React事件和原生事件最好不要混用。
原生事件中如果执行了stopPropagation方法，会导致其他React事件失效。因为所有元素的事件将无法冒泡到document上。
由上面的执行机制不难得出：所有的React事件都将无法被注册。

总结
上面的介绍让我们了解到了React事件机制，以及React事件机制的意义所在：
对于原生浏览器事件来说，浏览器会给监听器创建一个事件对象。如果你有很多的事件监听，那么就需要分配很多的事件对象，造成高额的内存分配问题。但是对于合成事件来说，有一个事件池专门来管理它们的创建和销毁，当事件需要被使用时，就会从池子中复用对象，事件回调结束后，就会销毁事件对象上的属性，从而便于下次复用事件对象。
减少内存消耗，提升性能。不需要注册那么多的事件了，一种事件类型只在 document 上注册一次；
合成事件首先抹平了浏览器之间的兼容问题，另外这是一个跨浏览器原生事件包装器，赋予了跨浏览器开发的能力；统一规范，解决 ie 事件兼容问题，简化事件逻辑；

二、React 事件使用
特点
1、react事件使用驼峰命名法
2、事件需要用{}括起来，例如：onClick={show}

事件传参
react事件使用驼峰命名法
1、需要注意的是，如果直接在onClick={xxx}中直接传递函数的时候，需要用匿名函数，不然会报错
< button onClick={()=>{this.show({num:111})}}>点击< /button>
show = (e) => {
  console.log('show');
  console.log(e);
}
2、通过data-xxx进行传参
< button data-num="123456" onClick={this.show}>点击< /button>
show = (e) => {
  console.log('show');
  console.log(e);
  console.log(e.target.dataset.num);
}
需要注意的是，原生的js可以通过return false阻止默认事件，但是React不行，只能通过preventDefault函数
show = (e) => {
  console.log('show');
  console.log(e.preventDefault);
  e.preventDefault()
}

三、React事件中this指向
我们知道，在 react 中，事件处理函数中的this很容易丢失，如
class App extends React.Component {
  handleClick() {
    console.log(this);// undefined
  }
  render() {
    return < div onClick={this.handleClick} >点我< /div>;
  }
}
结合原生 JavaScript 的理解，我们有如下4种解决方案
1、箭头函数
2、构造函数中的 bind
3、事件绑定时的 bind
4、事件绑定时的匿名函数+箭头函数

下边我们分别给出它们的实现
1、箭头函数
写法上最简单
class App extends React.Component {
  // 修改为箭头函数
  handleClick = () => {
    console.log(this);// 正常
  }
  render() {
    return < div onClick={this.handleClick} >点我< /div>;
  }
}
2、构造函数中的bind
class App extends React.Component {
  constructor(props) {
    super();
    // 通过bind 改写this指向并返回新的函数
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this);// 正常
  }
  render() {
    // bind
    return < div onClick={this.handleClick} >点我< /div>;
  }
}
3、事件绑定时的bind
class App extends React.Component {
  handleClick() {
    console.log(this);// 正常
  }
  render() {
    // bind
    return < div onClick={this.handleClick.bind(this)} >点我< /div>;
  }
}
4、事件绑定时的匿名函数+箭头函数
class App extends React.Component {
  handleClick() {
    console.log(this);// 正常
  }
  render() {
    // bind
    return < div onClick={() => this.handleClick()} >点我< /div>;
  }
}
不建议在render()中bind，如：，因为它会在每次render()方法执行时绑定类方法，肯定对于性能有影响。而直接在constructor中bind, 则bind只会在组件实例化初时运行一次。
虽然以上四种方案都可以解决 事件处理函数中this指向的问题，但是由于我们在开发时，往往还需要做事件传参。

事件传参解决方法
1、事件绑定时的 bind
2、事件绑定时的匿名函数+箭头函数
3、自定义属性 dataset

事件绑定时的bind
bind 函数不但可以修改this指向返回新函数，还可以接收参数。写法相当灵活飘逸
class App extends React.Component {
  handleClick(a, b, e) {
    console.log(this);// 正常
    console.log(a, b, e);// "过火"，"上火","事件对象"
  }
  render() {
    return < div onClick={this.handleClick.bind(this, "过火", "上火")} >点我< /div>
  }
}
事件绑定时的匿名函数+箭头函数
class App extends React.Component {
  handleClick(a, b, e) {
    console.log(this);// 正常
    console.log(a, b, e);// "过火"，"上火","事件对象"
  }
  render() {
    return  < div onClick={(event) => this.handleClick("过火", "上火", event)} >点我< /div>
  }
}
自定义属性 dataset
class App extends React.Component {
  handleClick(e) {
    console.log(this);// 正常
    console.log(e.target.dataset.msg);// "过火"
  }
  render() {
    return < div data-msg="过火" onClick={this.handleClick.bind(this)} >点我< /div>
    }
}

小结
结合以上的对比分析，推荐react中，事件处理函数的写法有2种
方式一
class Btn extends React.Component {
  showBtn() {
    console.log(this);
  }
  render() {
    return < button onClick={this.showBtn.bind(this)}>按钮< /button>;
  }
}

方式二
class Btn extends React.Component {
  showBtn() {
    console.log(this);
  }
  render() {
    return < button onClick={() => this.showBtn()}>按钮< /button>;
  }
}

          https://blog.csdn.net/IT_10/article/details/91493425</pre>
          <h3>ref 获取dom的三种方式</h3>
          <pre>在React组件并不是真实的 DOM 节点，而是存在于内存之中的一种数据结构，叫做虚拟 DOM （virtual DOM）。只有当它插入文档以后，才会变成真实的 DOM 。根据 React 的设计，所有的 DOM 变动，都先在虚拟 DOM 上发生，然后再将实际发生变动的部分，反映在真实 DOM上，这种算法叫做 DOM diff，它可以极大提高网页的性能表现。但是，有时需要从组件获取真实 DOM 的节点，这时就要用到 ref 属性
方式一：字符串方式（不推荐）
1、通过 ref="自定义名称" 绑定
2、通过 this.refs.自定义名称 来获取 dom 元素
注意： 必须在类组件中才可使用，不要在 react 严格模式下使用（会控制台报 Warning，但不会阻断程序），注释掉 < React.StrictMode>可解决
import React from "react";
class Component1 extends React.Component {
  render() {
    return (
      < div>
        < button
          onClick={() => {
            this.refs.content.innerHTML =
              this.refs.content.innerHTML === "白虎" ? "青龙" : "白虎";
          } }
        >
          点击
        < /button>
        < div ref="content">青龙< /div>
      < /div>
    );
  }
}
function App() {
  return (
    < div>
      < Component1 />
    < /div>
  );
}
export default App;
方式二：回调函数方式（推荐）
1、通过 ref={(el) => {this.自定义属性 = el} 绑定
2、通过 this.自定义属性 来获取 dom 元素
注意：必须在类组件中才可使用
import React from "react";
class Component1 extends React.Component {
  render() {
    return (
      < div>
        < button onClick={() => {
            this.contentEl.innerHTML =
              this.contentEl.innerHTML === "白虎" ? "青龙" : "白虎";
          }}> 点击< /button>
      < div ref={(el) => { this.contentEl = el;}}>青龙< /div>
      < /div>
        );
  }
}
function App() {
  return (
  < div>< Component1 />< /div>
  );
}
export default App;

方式三：React.createRef()（react v16 新提出）
1、通过 constructor 构造函数中创建，this.自定义属性名 = React.createRef()
2、通过 ref={this.自定义属性名} 绑定
3、通过 this.自定义属性名.current 来获取 dom 元素
注意：必须在类组件中才可使用
import React from "react";
class Component1 extends React.Component {
  constructor(props) {
    super(props);
    this.contentEl = React.createRef();
  }
  render() {
    return (
      < div>React
        < button onClick={() => {
            this.contentEl.current.innerHTML =
              this.contentEl.current.innerHTML === "白虎" ? "青龙" : "白虎";
          }}>点击< /button>
        < div ref={this.contentEl}>青龙< /div>
      < /div>
    );
  }
}
function App() {
  return (
    < div>
      < Component1 />
    < /div>
  );
}
export default App;

上面代码中，组件的子节点有一个文本输入框，用于获取用户的输入。这时就必须获取真实的 DOM 节点，虚拟 DOM 是拿不到用户输入的。为了做到这一点，文本输入框必须有一个 ref 属性，然后 this.refs.[refName] 就会返回这个真实的 DOM 节点。
需要注意的是，由于 this.refs.[refName] 属性获取的是真实 DOM ，所以必须等到虚拟 DOM 插入文档以后，才能使用这个属性，否则会报错。上面代码中，通过为组件指定 Click 事件的回调函数，确保了只有等到真实 DOM 发生 Click 事件之后，才会读取 this.refs.[refName] 属性。</pre>
          <h3>React 路由</h3>
          <pre>
react-router-dom文档地址： https://reacttraining.com/react-router/
安装包：npm i react-router-dom@5.3.0（react-router-dom现在发了6.0版本，目前不稳定。 尽量使用5.0版本），这个包提供了三个核心的组件:HashRouter, Route, Link
导入包，并使用：import { HashRouter, Route, Link } from 'react-router-dom'  ，用HashRouter包裹整个应用，一个项目中只会有一个Router
使用Link指定导航链接，用Route指定路由规则(哪个路径展示哪个组件)

React路由三大对象之 Router、Link、Route
1， Router 组件：包裹整个应用，一个 React 应用只需要使用一次
两种常用路由：
HashRouter :hash模式
BrowserRouter: history模式 
原理：（推荐 BrowserRouter）
HashRouter：使用 URL 的 hash 实现
原理：监听 window 的 hashchange 事件来实现的 （http://localhost:3000/#/first）
BrowserRouter：使用 H5 的 history.pushState() API 实现  （http://localhost:3000/first）
原理：监听 window 的 popstate 事件来实现的

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
使用es6的导入重命名来统一名字： 无论导入的是哪个路由对象，都叫Router

2， Link 或者 NavLink  ：最终会渲染成a标签，用于指定路由导航
Link组件：
to 属性，将来会渲染成a标签的href属性
Link 组件无法展示哪个link处于选中的效果

NavLink：一个更特殊的 Link 组件，可以用于指定当前导航高亮
to属性，用于指定地址，会渲染成a标签的href属性
activeClassName: 用于指定高亮的类名，默认active。一般不去修改。
exact: 精确匹配，表示必须地址栏和to的属性值 精确匹配类名才生效

这两个标签的区别就是 NavLink指向的路径会自带一个名为 active 的css类名 

3，Route：决定路由匹配规则
格式：< Route path="/xx/xx" component={组件}>< /Route> 
path： Route组件中path属性的值
pathname: 指的如下格式
link组件中to的属性值
地址栏中的地址
模糊匹配规则
只要pathname以path开头就算匹配成功
匹配成功就加载对应组件；
整个匹配过程是逐一匹配，一个匹配成功了，并不会停止匹配。
模糊匹配和精确匹配
默认是模糊匹配的
补充exact可以设置成精确匹配

Switch与404
Switch
用Switch组件包裹多个Route组件。
在Switch组件下，不管有多少个Route的路由规则匹配成功，都只会渲染第一个匹配的组件


https://blog.csdn.net/wallowyou/article/details/105491074
</pre>
          <h3>React hooks</h3>
          <pre></pre>
          <h3>组件实例的三大核心属性 state，props，refs</h3>
          <pre>
https://blog.csdn.net/Happyaileaf/article/details/114707761?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-114707761-blog-93223218.pc_relevant_multi_platform_featuressortv2dupreplace&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-114707761-blog-93223218.pc_relevant_multi_platform_featuressortv2dupreplace&utm_relevant_index=1
          </pre>
          <h3>react项目之webpack搭建</h3>
          <pre></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'react',
  data() {
    return {
      created: this.$route.query.created,
      title: this.$route.query.name,
      catalogue:[]
    }
  },
  mounted() {
    this.$nextTick(function(){
      this.createCatalogue();
    })
  },
  computed: {},
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
<style scoped lang="less">
p.edit {
  background-color: #fff;
  box-sizing: border-box;
  word-wrap: break-word;
  font-size: 16px;
  color: #4d4d4d;
  font-weight: 400;
  line-height: 24px !important;
  padding: 20px;
  overflow-x: auto;
  overflow-y: hidden;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
