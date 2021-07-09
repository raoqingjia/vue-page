<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>CommonJS 规范</h3>
          <pre>
CommonJS 规范，其目标是为了定义模块，提供通用的模块组织方式,每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。

// example.js
var x = 5;
var addX = function (value) {
  return value + x;
};
上面代码中，变量x和函数addX，是当前文件example.js私有的，其他文件不可见。

CommonJS规范规定，每个模块内部，module变量代表当前模块。这个变量是一个对象，它的exports属性（即module.exports）是对外的接口。加载某个模块，其实是加载该模块的module.exports属性。

// example.js
var x = 5;
var addX = function (value) {
  return value + x;
};
module.exports.x = x;
module.exports.addX = addX;
上面代码通过module.exports输出变量x和函数addX。

require方法用于加载模块。
var example = require('./example.js');
console.log(example.x); // 5
console.log(example.addX(1)); // 6

CommonJS模块的特点如下。
所有代码都运行在模块作用域，不会污染全局作用域。
模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。
模块加载的顺序，按照其在代码中出现的顺序。

module.exports属性
module.exports属性表示当前模块对外输出的接口，其他文件加载该模块，实际上就是读取module.exports变量。

exports变量
为了方便，Node为每个模块提供一个exports变量，指向module.exports。这等同在每个模块头部，有一行这样的命令。
var exports = module.exports;
造成的结果是，在对外输出模块接口时，可以向exports对象添加方法，例如下面的写法
exports.area = function (r) {
  return Math.PI * r * r;
};
exports.circumference = function (r) {
  return 2 * Math.PI * r;
};

注意，不能直接将exports变量指向一个值，因为这样等于切断了exports与module.exports的联系。
exports = function(x) {console.log(x)};
上面这样的写法是无效的，因为exports不再指向module.exports了。

下面的写法也是无效的。
exports.hello = function() {
  return 'hello';
};
module.exports = 'Hello world';
上面代码中，hello函数是无法对外输出的，因为module.exports被重新赋值了。

require命令
require命令的基本功能是，读入并执行一个JavaScript文件，然后返回该模块的exports对象。如果没有发现指定模块，会报错。加载文件的后缀名默认为.js。

// example.js
exports.message = "hi";
exports.say = function () {
  console.log(message);
}
运行下面的命令，可以输出exports对象。
var example = require('./example.js');
example
// {
//   message: "hi",
//   say: [Function]
// }

如果模块输出的是一个函数，那就不能定义在exports对象上面，而要定义在module.exports变量上面。
module.exports = function () {
  console.log("hello world")
}
require('./example2.js')();
上面代码中，require命令调用自身，等于是执行module.exports，因此会输出 hello world。

</pre>
          <h3>ES6 模块</h3>
          <pre>
ES6 模块是前端开发同学更为熟悉的方式，使用 import, export 关键字来进行模块输入输出。ES6 不再是使用闭包和函数封装的方式进行模块化，而是从语法层面提供了模块化的功能。
ES6 模块中不存在 require, module.exports, __filename 等变量，CommonJS 中也不能使用 import。两种规范是不兼容的，一般来说平日里写的 ES6 模块代码最终都会经由 Babel, Typescript 等工具处理成 CommonJS 代码。
使用 Node 原生 ES6 模块需要将 js 文件后缀改成 mjs，或者 package.json "type"`` 字段改为 "module"，通过这种形式告知Node使用ES Module` 的形式加载模块。

ES6 module 基本语法：
---------------------------------------------------
export 导出语法
export * from 'module'; //重定向导出 不包括 module内的default
export { name1, name2, ..., nameN } from 'module'; // 重定向命名导出
export { import1 as name1, import2 as name2, ..., nameN } from 'module'; // 重定向重命名导出
export let name1 = 'name1'; // 声明命名导出 或者 var, const，function， function*, class
export default expression; // 默认导出
export default function () { ... } // 或者 function*, class
export default function name1() { ... } // 或者 function*, class
export { name1 as default, ... }; // 重命名为默认导出
-----------------------------------------------------

import 导入语法
---------------------------------------------------
// 命名导出 module.js
let a = 1,b = 2
export { a, b }
export let c = 3

// 命名导入 main.js
import { a, b, c } from 'module'; // a: 1  b: 2  c: 3
import { a as newA, b, c as newC } from 'module'; // newA: 1  b: 2  newC: 3

// 默认导出 module.js
export default 1

// 默认导入 main.js
import defaultExport from 'module'; // defaultExport: 1

// 混合导出 module.js
let a = 1
export { a }
const b = 2
export { b }
export let c = 3
export default [1, 2, 3]

// 混合导入 main.js
import defaultExport, { a, b, c as newC} from 'module'; //defaultExport: [1, 2, 3]  a: 1  b: 2  newC: 3
import defaultExport, * as name from 'module'; //defaultExport: [1, 2, 3]  name: { a: 1, b: 2, c: 3 }
import * as name from 'module'; // name: { a: 1, b: 2, c: 3, default: [1, 2, 3] }

// module.js
Array.prototype.remove = function(){}

//副作用 只运行一个模块
import 'module'; // 执行module 不导出值  多次调用module.js只运行一次

//动态导入(异步导入)
var promise = import('module');
---------------------------------------------------

ES6 module 特点
---------------------------------------------------
ES6 module的语法是静态的
import 会自动提升到代码的顶层

export 和 import 只能出现在代码的顶层，下面这段语法是错误的

//if for while 等都无法使用
{
  export let a = 1
  import defaultExport from 'module'
}

true || export let a = 1
import 的导入名不能为字符串或在判断语句，下面代码是错误的

import 'defaultExport' from 'module'

let name = 'Export'
import 'default' + name from 'module'
静态的语法意味着可以在编译时确定导入和导出，更加快速的查找依赖，可以使用lint工具对模块依赖进行检查，可以对导入导出加上类型信息进行静态的类型检查

ES6 module的导出是绑定的
使用 import 被导入的模块运行在严格模式下

使用 import 被导入的变量是只读的，可以理解默认为 const 装饰，无法被赋值

使用 import 被导入的变量是与原变量绑定/引用的，可以理解为 import 导入的变量无论是否为基本类型都是引用传递
---------------------------------------------------

CommonJs 和 ES6 Module 的区别
其实上面我们已经说到了一些区别

CommonJs导出的是变量的一份拷贝，ES6 Module导出的是变量的绑定（export default 是特殊的）
CommonJs是单个值导出，ES6 Module可以导出多个
CommonJs是动态语法可以写在判断里，ES6 Module静态语法只能写在顶层
CommonJs的 this 是当前模块，ES6 Module的 this 是 undefined

易混淆点
模块语法与解构

module语法与解构语法很容易混淆，例如：
import { a } from 'module'
const { a } = require('module')
尽管看上去很像，但是不是同一个东西，这是两种完全不一样的语法与作用

导出语法与对象属性简写
同样下面这段代码也容易混淆

let a = 1
export { a } // 导出语法
export default { a } // 属性简写 导出 { a: 1 } 对象
module.exports = { a } // 属性简写 导出 { a: 1 } 对象
export default 和 module.exports 是相似的


ES6 module 支持 CommonJs 情况
先简单说一下各个环境的 ES6 module 支持 CommonJs 情况，后面单独说如何在不同环境中使用,因为 module.exports 很像 export default 所以 ES6模块 可以很方便兼容 CommonJs
在ES6 module中使用CommonJs规范，根据各个环境，打包工具不同也是不一样的,我们现在大多使用的是 webpack 进行项目构建打包，因为现在前端开发环境都是在 Node 环境原因，而 npm 的包都是 CommonJs 规范的，所以 webpack 对ES6模块进行扩展 支持 CommonJs，并支持node的导入npm包的规范
如果你使用 rollup，想在ES Module中支持Commonjs规范就需要下载rollup-plugin-commonjs插件，想要导入node_modules下的包也需要rollup-plugin-node-resolve插件
如果你使用 node，可以在 .mjs 文件使用 ES6，也支持 CommonJs 查看 nodejs es-modules.md,在浏览器环境 不支持CommonJs

node 与 打包工具webpack，rollup的导入 CommonJs 差异

// module.js
module.export.a = 1

// index.js webpack rollup
import * as a from './module'
console.log(a) // { a: 1, default: { a:1 } }

// index.mjs node
import * as a from './module'
console.log(a) // { default: { a:1 } }
node 只是把 module.exports 整体当做 export default
打包工具除了把 module.export 整体当做 export default，还把 module.export 的每一项 又当做 export 输出，这样做是为了更加简洁
import defaultExport from './foo'， defaultExport.foo()
import { foo } from './foo'， foo()
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'colresizable',
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
