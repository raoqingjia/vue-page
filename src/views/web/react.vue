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
            <li v-for="(items,index) in catalogue"  :key="index" ><a @click="jump(index)">{{index+1}}、{{items.name}}</a></li>
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
          <h3>React 脚手架修改 Webpack 配置的两种方案</h3>
          <pre>npm run eject：
可以通过执行 npm run eject 弹出 Webpack 配置信息，直接修改。不推荐。
craco：
使用 craco 在 React 脚手架的基础上进行 Webpack 配置。
安装 craco：npm install craco。
在根目录下创建 craco.config.js 配置文件编写配置信息。
使用 craco 启动项目：将 package.json 中 scripts 里的 react-scripts 改为 craco，才能将 craco.config.js 中的配置合并到 React 脚手架的配置信息中。</pre>

          <h3>React项目中配置使用less</h3>
          <pre>
            https://blog.csdn.net/qq_44539570/article/details/126008388
          </pre>
          <h3>React项目中配置使用jsx</h3>
          <pre>
           http://www.gaodaima.com/72970.html
          </pre>
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
          <pre>路由模块的安装 
npm install react-router-dom   // 目前版本： v6.3
官方案例：
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
const rootElement = document.getElementById("root");
render(
  < BrowserRouter>
    < Routes>
      < Route path="/" element={< App />} />
      < Route path="/expenses" element={< Expenses />} />
      < Route path="/invoices" element={< Invoices />} />
    < /Routes>
  < /BrowserRouter>,
  rootElement
)
路由各组件 
1. BrowserRouter / HashRouter 相当于容器（类似router-view），用于指定路由的模式
BrowserRouter为history模式，刷新某个路由路径时, 会出现 404 的错误， 前端路由的路径不要与后台路由路径相同(并且请求方式也相同)
HashRouter是通过 hash 值来对路由进行控制。使用 HashRouter，路由会默认有个#。
注意：BrowserRouter和HashRouter组件最好放在最顶层所有组件之外，这样能确保内部组件使用Link做路由跳转时不出错
如下：
function App() {
  return (
     < HashRouter>
        < Routes>
          < Route path="/product/:id" element={< ProductDetails/>}>< /Route>
          < Route path="/home" element={< StudentList />}>< /Route>
        < /Routes>
     < /HashRouter>
  );
}

2. Route 定义具体的路由
< Route path="/expenses" element={< Home/>} />
path 为路由名 ， element 为对应的组件
注：element 的值 必须 写成标签的形式

3. 老版本V5 中的作用路由
示例：
< BrowserRouter>
 < Route path="/" component={ Home } />
 < Route path="/product" component={ Product } />
< /BrowserRouter>
如上代码：
在当用户输入/product时，将会匹配到两个路由，/ 及 /product ；则会显示两个组件 ；
原因是老版本路由在匹配时，是进行模糊匹配
解决方案：
步骤1：使用Switch让路由只能匹配一个； 注意顺序问题，路由先从上向下进行匹配
< BrowserRouter>
 < Switch>
    < Route path="/" element={< Home />} />
    < Route path="/product" element={< Product />} />
 < /Switch>
< /BrowserRouter>
步骤2：使用exact关键字，让路由进行精准匹配
< Route path="/" exact component={Home} />
加上以上关键字，路由将会精准匹配，只会匹配，path为”/" 的路由

4. V6中的 组件Routes
v6 中 Switch 名称变为 Routes ， 且Route 标签必须包含在Routes标签里，会不然报错
也就是说，路由只能匹配到一个，不会在出现多个路由匹配的情况

5. v6 中，exact 属性不再需要
v6 内部算法改变，不再需要加exact实现精确匹配路由，默认就是匹配完整路径。
如果需要旧的行为(模糊匹配)，路径后加/*
< Route path="/products/*" element={< Products />} />
< Route path="/products/:productId" element={< ProductDetail />} />
测试： /prodcuts 显示
/products/4 显示
/products/haha 显示
/products/haha/hehe 显示
结论：看第6点：React Router 能够自动找出最优匹配路径 ，顺序不重要
若：path属性取值为*时，可以匹配任何（非空）路径，同时该匹配拥有最低的优先级。可以用于设置404页面。
< Routes>
    < Route path='/foo' element={Foo}>
        < Route path='bar' element={Bar}>< /Route>
        < Route path='*' element={NotFound}>< /Route>
    < /Route>
< /Routes>

6. v6 中，Route 先后顺序不再重要，React Router 能够自动找出最优匹配路径

7. v6 保留Link，NavLink
Link,NavLink 类似与a标准，区别NavLink可以设置高亮样式
< Link to="/home">首页< /Link>
NavLink的使用，及激活状态的样式设置
V5老版本，activeClassName设置，或activeStyle
< NavLink to="/" activeClassName='active-menu'>
    < i className="fa fa-dashboard">< /i>< span>首页< /span>
< /NavLink>
V6新版本，activeClassName 与 activeStyle属性被移除可以直接在的className和style中使用一个函数来设置激活状态的样式。
方法：通过箭头函数接收到isActive参数值，通过isActive的值来设置
通过className
< NavLink to="/faq"className={({ isActive }) => isActive ? 'active' : ''}>首页< /NavLink>

通过style
< NavLink to="/product/1" style={({ isActive }) => {
    return {
      fontWeight: "bold",
      color: isActive ? "red" : ""
    };
}}
fontWeight: "bold" 不管是否激活，都会有； 因为没有判断

8. Navigate组件
< Route path="/" element ={< Navigate replace to="/home" />} />
< Navigate replace to="" />是对旧的 Redirect 的完整取代。
replace 属性也可以省略，不过行为由 replace 改为 push
replace vs push
this.props.history.push('router地址')
push: a-b-c，可以回到上一级
push跳转会形成history，可返回到上一层。
this.props.history.replace('router地址')
replace: a-b-c 回不到上一级 适用于登录后，不需要重新回到登页面
replace跳转不会形成history，不可返回到上一层。
结论：push有历史记录，replace没有历史记录

9. V6中嵌套路由改为相对路径
嵌套路由必须放在Route中，且使用相对路径，不再像v5那样必须提供绝对路径
< Route path='/about' element={< About />}>
    < Route index element={< Address />} />
    < Route path='address' element={< Address />}>< /Route>
    < Route path='information' element={< Information />}>< /Route>
    < Route path='joinus' element={< Join />}>< /Route>
< /Route>
上面的访问路径为 /about/address , /about/information, /about/joinus

10. 使用Outlet组件
此组件是一个占位符，告诉 React Router 嵌套的内容应该放到哪里。
export default class about extends Component {
  render() {
    return (
      < div className='container'>
        < h2>关于< /h2>
        < div>
            < div className="left">
               < ul>
                < li>< Link to='/about/address'>公司地址< /Link> /li>
                < li>< Link to='/about/join'>加入我们< /Link>< /li>
                < li>< Link to='/about/story'>背景故事< /Link>< /li>
               < /ul>
            < /div>
            < div className="left">
                < Outlet/>
            < /div>
        < /div>
      < /div>
    )
  }
}

11. 使用index 指定默认路由, 或者path为空
< Route path='/about' element={< About/>}>
    < Route index element={< Address/>} />
    < Route path='address' element={< Address/>}>< /Route>
    < Route path='information' element={< Information/>}>< /Route>
    < Route path='joinus' element={< Join/>}>< /Route>
< /Route> 
或者设置path为空，来指定默认路由
let router  =[{
  path: "/home",
  element :< Home/>,
  children: [
    {
    path:"",
    element:< News/>
    },
    {
    path: " news " ,
    element:< News/>
    }
  ]
}]

12. useRoutes 声明式的路由配置方式(项目常用方式)
声明式路由中，不能写index, 可以让path: "" , 来实现显示默认组件;
useRoutes函数，会返回已经渲染好的路由元素
const GetRoutes=()=>{
    return useRoutes([
      {
        path:'/',
        element:< Home/>
      },
      {
        path:'/home',
        element:< Home/>
      },
      {
        path:'/product',
        element:< Product/>
      },
      {
        path:'/about',
        element:< About/>,
        children:[
          {
            path:"",
            element:< Story/>
          },
          {
            path:'address',
            element:< Address/>
          },
          {
            path:'join',
            element:< Join/>
          },
          {
            path:'story',
            element:< Story/>
          }
        ]
      },
      {
        path:'/concat',
        element:< Concat/>
      },
      {
        path:'/brand',
        element:< Brand/>
      }
    ])
}
function App() {
  return (
    < div>
      < Router>
       < Nav>< /Nav>
       < GetRoutes/>  // GetRoutes就代替了下面注释的代码
         // < Routes>
            // < Route path='/' element={< Home/>}>< /Route>
            // < Route path='/home' element={< Home/>}>< /Route>
            // < Route path='/product' element={< Product/>}>< /Route>
            // < Route path='/about' element={< About/>}>
                 // < Route index element={< Story/>}>< /Route>
                 // < Route path='address' element={< Address/>}>< /Route>
                 // < Route path='join' element={< Join/>}>< /Route>
                 // < Route path='story' element={< Story/>}>< /Route>
            // < /Route>
            // < Route path='/concat' element={< Concat/>}>< /Route>
            // < Route path='/brand' element={< Brand/>}>< /Route>
         // < /Routes>
      < /Router>
    < /div>
  );
}
export default App;

13. v6 用useNavigate实现编程式导航，useHistory被移除
import {useNavigate} from "react-router-dom";
const navigate = useNavigate();
navigate("/welcome");  // 等同于push
如果要重定向:
navigate("/welcome",{replace:true});
除此之外，还可以使用navigate(-1)后退到前一页，使用navigate(-2)后退到前一页的前一页，navigate(1)前向导航，
注：V5版本中的编程式路由导航 this.props.history.replace() 与  this.props.history.push();
在V6中useNavigate 替代
详细版本：
v6版本编程导航使用 useNavigate (以下为引入代码)
import { useNavigate } from "react-router-dom";
export default function A() {
  const navigate = useNavigate();
  //...
}
1.push跳转+携带params参数
navigate(`/b/child1/${id}/${title}`);
2.push跳转+携带search参数
navigate(`/b/child2?id=${id}&title=${title}`);
3.push跳转+携带state参数
navigate("/b/child2", { state: { id, title }});
4.replace跳转+携带params参数
navigate(`/b/child1/${id}/${title}`,{replace: true});
5.replace跳转+携带search参数
navigate(`/b/child2?id=${id}&title=${title}`,{replace: true});
6.replace跳转+携带state参数
navigate("/b/child2", { state: { id, title },replace: true});

14. useSearch 获取路由参数的方法
在Route组件中的path属性中定义路径参数
在组件内通过useParams hook访问路径参数
< BrowserRouter>
    < Routes>
        < Route path='/foo/:id' element={Foo} />
    < /Routes>
< /BrowserRouter>
用useParams获取
import { useParams } from 'react-router-dom';
export default function Foo(){
  const params = useParams();
  return (
      < div>
        < h1>{params.id}< /h1>
      < /div>
  )
}
在以前版本中，组件的props会包含一个match对象，在其中可以取到路径参数。但在最新的6.x版本中，无法从props获取参数。
并且，针对类组件的withRouter高阶组件已被移除。
因此对于类组件来说，使用参数有两种兼容方法：
1. 将类组件改写为函数组件传递
2. 写一个HOC来包裹类组件，用useParams获取参数后通过props传入原本的类组件

15. useSearchParams 获取search 参数
查询参数不需要在路由中定义
使用useSearchParams hook来访问查询参数。其用法和useState类似，会返回当前对象和更改它的方法，更改searchParams时，必须传入所有的查询参数，否则会覆盖已有参数
import { useSearchParams } from 'react-router-dom';
// 当前路径为 /foo?id=12
function Foo(){
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('id')) // 12
    setSearchParams({name: 'foo'}) // /foo?name=foo
    return (
        < div>foo< /div>
    )
}
但在最新的6.x版本中，无法从props获取参数。在类组件中获取search参数的值，解决方法与上面一样

16. useLocation 获取传递的state值
1.传递参数
< NavLink to={`detail`} state={ {
         id:item.id,
         name:item.name,
         content: item.content }}>
   {item.name}
< /NavLink>
或
navigate("/b/child2", { state: { id, title }});
2.接收参数
import React from 'react'
import { useLocation } from 'react-router-dom'
export default function Detail() {
  // 这是连续结构赋值 把useLocation里面呢的state解构，在解构state里面的属性
  const {state:{id,name,content}} = useLocation()
  return (
    < div>
     < ul>
        < li>id:{id}< /li>
        < li>content:{content}< /li>
        < li>name:{name}< /li>
     < /ul>
    < /div>
  )
}
注： prop属性中的location已经没有了，所以在类组件不能获取到相应的数据了，
解决方案就是1. 写成函数 2. 使用高阶组件HOC (13,14,15,16 都是这样)

17. 多组路由
通常，一个应用中只有一个Routes组件。
但根据实际需要也可以定义多个路由出口（如侧边栏和主页面都要随URL而变化）
< Router>
    < SideBar>
        < Routes>
            < Route>< /Route>
        < /Routes>
    < /SideBar>
    < Main>
        < Routes>
            < Route>< /Route>
        < /Routes>
    < /Main>
< /Router>

18. 路由组件懒加载
安装： npm i @loadable/component
import loadable from '@loadable/component'
const ComponentNode = loadable(()=>{
  return import("./"+item.componentPath)
})
< Route path={item.path} element={< ComponentNode />}>

19. 动态路由案例
菜单数据：
var menuInfo = [
     {
         menuId: 2,
         menuName: "用户管理理",
         menuUrl: "/index/user",
         pathRoute:'user',
         pathname: "userlist",
         componentPath: "user/UserManger",
         menuImgClass: 'TeamOutlined',
         pId:0,
         menuState: "0",
         isContainChildren:false,
         menuChilds: [{
             menuId: 10,
             menuName: "添加用户",
             menuUrl: "/index/user/adduser",
             pathRoute:'adduser',
             pathname: "adduser",
             componentPath: "user/AddUser",
             menuImgClass: 'VideoCameraAddOutlined',
             pId:2,
             menuState: "0",
             isContainChildren:false,
             menuChilds: []
         },{
             menuId: 11,
             menuName: "修改用户",
             menuUrl: "/index/user/modifyUser",
             pathRoute:'modifyUser',
             pathname: "modifyUser",
             componentPath: "user/ModifyUser",
             menuImgClass: 'VideoCameraAddOutlined',
             pId:2,
             menuState: "0",
             isContainChildren:false,
             menuChilds: []
         }]
     },
     {
         menuId: 3,
         menuName: "角色管理理理",
         menuUrl: "/index/role",
         pathRoute:'role',
         pathname: "role",
         componentPath: "user/RoleManger",
         menuImgClass: 'WhatsAppOutlined',
         pId:0,
         menuState: "0",
         isContainChildren:true,
         menuChilds: [
             {
                 menuId: 7,
                 menuName: "添加角色",
                 menuUrl: "/index/role/addrole",
                 pathRoute:'addrole',
                 pathname: "addrole",
                 componentPath: "user/AddRole",
                 menuImgClass: 'VideoCameraAddOutlined',
                 pId:3,
                 menuState: "0",
                 isContainChildren:false,
                 menuChilds: []
             },
             {
                 menuId: 8,
                 menuName: "角色详情",
                 menuUrl: "/index/role/roleInfo",
                 pathRoute:'roleInfo',
                 pathname: "roleInfo",
                 componentPath: "user/RoleInfo",
                 menuImgClass: 'TagOutlined',
                 isContainChildren:false,
                 pId:3,
                 menuState: "0",
                 menuChilds: []
             },
             {
                 menuId: 9,
                 menuName: "角色列表",
                 menuUrl: "/index/role/rolelist",
                 pathRoute:'rolelist',
                 pathname: "rolelist",
                 componentPath: "user/RoleList",
                 menuImgClass: 'StarOutlined',
                 pId:3,
                 menuState: "0",
                 isContainChildren:false,
                 menuChilds: []
             }
         ]
     }
 ];
动态路由生成组件：
// 用于创建路由(可以根据数据，生成动态的路由)
import {useRoutes} from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
// react 动态加载组件 @loadable/component
import loadable from '@loadable/component'
import {observer,inject} from 'mobx-react'
const PrivateRoute = (props)=>{
 function bindRouter(list){
  let arr = [];
  list.map((item)=>{
    const ComponentNode = loadable(()=>{
        return import("./"+item.componentPath)
    })
    if(item.menuChilds && item.menuChilds.length>0){
      if(item.isContainChildren){
          arr.push({
              path:item.pathRoute,
              element:< ComponentNode/>,
              children:[...bindRouter(item.menuChilds)]
          })
      }else{
          arr.push({
              path:item.pathRoute,
              //element:< ComponentNode/>
              children:[...bindRouter(item.menuChilds)]
          })
      }
    }else{
      arr.push({
          path:item.pathRoute,
          element:< ComponentNode/>
      })
    }
  })
  return arr;
}

const menuInfo = props.user.userInfo.menuInfo ? props.user.userInfo.menuInfo:[];
  return useRoutes([
    {
      path:"/",
      element:< Login/>
    },
    {
      path:"/index",
      element:< Home />,
      children:[...bindRouter(menuInfo)]
    }
  ])
}
export default inject('user')(observer(PrivateRoute));</pre>
          <h3>React hooks</h3>
          <pre>具体的看看 案例 -> 框架 -> react Hooks 总结
或者这个链接的笔记
http://bugshouji.com/shareweb/t1534</pre>
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
