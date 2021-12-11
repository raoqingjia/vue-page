<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>
            使用方式
          </h3>
          <pre>
1、安装
npm i js-cookie
npm地址连接https://www.npmjs.com/package/js-cookie

2、项目中引入
import Cookies from 'js-cookie'
或者 CommonJS
var Cookies = require('js-cookie');


3、使用方法
创建一个cookie，整个站点可用；
Cookies.set('name', 'value');

创建一个cookie，有效期为4天，整个站点可用；
Cookies.set('name', 'value', { expires: 4 });

设置有效期小于1天
/设置cookie有效期为15分钟；
var inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
Cookies.set('foo', 'bar', {
  expires: inFifteenMinutes
});

只在当前页面所在的路径有效
Cookies.set('name', 'value', { expires: 4, path: '/path1' })

整个站点可用；
Cookies.set('name', 'value', { expires: 4 });
Cookies.set('name', 'value', { expires: 4, path: '/' });

读取某个cookie：
Cookies.get('name') // => 'value'
Cookies.get('nothing') // => undefined
读取所有可见cookie：返回的是个json对象；
Cookies.get() // => { name: 'value' , name1: 'value1' }

删除Cookie：
Cookies.remove('name')
Cookies.remove('name')
删除当前页面所在路径下某个有效的cookie：
Cookies.set('name', 'value', { path: '' })
Cookies.remove('name') // fail!
Cookies.remove('name', { path: '' }) // removed!

JSON支持
当创建cookie时，可以将Array或Object作为值；
Cookies.set('name', { foo: 'bar' });
读取cookie值：
Cookies.get('name') // => '{"foo":"bar"}'
Cookies.get() // => { name: '{"foo":"bar"}' }
Cookies.get('name') // => '{"foo":"bar"}'
Cookies.get() // => { name: '{"foo":"bar"}' }

Cookies.getJSON('name') // => { foo: 'bar' }
Cookies.getJSON() // => { name: { foo: 'bar' } }
</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cookie',
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
