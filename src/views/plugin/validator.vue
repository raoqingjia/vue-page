<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>Validator-js
前端的验证工具，无其他包依赖无样式，可以适合任何环境，可根据项目环境自行组装提示信息反馈给用户,兼容IE6以上版及目前流行的浏览器。
https://gitee.com/kennylee/validator-js
https://github.com/jaywcjlove/validator.js

$ npm install validator.tool --save
# Or
$ npm install @validator.tool/hook --save

在 .js 文件中调用
// 字符串验证
var validator = require('validator.tool');
var v = new validator();
v.isEmail('wowohoo@qq.com');
v.isIp('192.168.23.3');
v.isFax('');
// 表单验证
var a = new validator('example_form',[
    {...}
],function(obj,evt){
    if(obj.errors){
        // 判断是否错误
    }
})

在JS中使用方法。
< script type="text/javascript">
  var v = new Validator();
  v.isEmail('wowohoo@qq.com');
  v.isIp('192.168.23.3');
< /script>

应用在表单中的方法。
< form id="example_form">
    < div>
        < label for="email">邮箱验证< /label>
        < input type="email" name="email" id="email" class="form-control" placeholder="Email">
    < /div>
< /form>
< script type="text/javascript">
  var validator = new Validator('example_form',[
    {
      //name 字段
      name: 'email',
      display:"你输入的不{ {email}}是合法邮箱|不能为空|太长|太短",
      // 验证条件
      rules: 'is_emil|max_length(12)'
      // rules: 'valid_email|required|max_length(12)|min_length(2)'
    },{
      //name 字段
      name: 'sex',
      display:"请你选择性别{ {sex}}",
      // 验证条件
      rules: 'required'
    }
  ],function(obj,evt){
    if(obj.errors){
      // 判断是否错误
    }
  })
< /script>

说明文档
new Validator(formName, option, callback)
formName
formName 是标签中的 id 或者 name 的值，如上面的example_form
option
    name -> input 中 name 对应的值
    display -> 验证错误要提示的文字 { {这个中间是name对应的值}}
    rules -> 一个或多个规则(中间用|间隔)
    is_email -> 验证合法邮箱
    is_ip -> 验证合法 ip 地址
    is_fax -> 验证传真
    is_tel -> 验证座机
    is_phone -> 验证手机
    is_url -> 验证URL
    required -> 是否为必填
    max_length -> 最大字符长度
    min_length -> 最小字符长度
callback
var validator = new Validator('example_form',[
    {...},{...}
],function(obj,evt){
//obj = {
//  callback:(error, evt, handles)
//  errors:Array[2]
//  fields:Object
//  form:form#example_form
//  handles:Object
//  isCallback:true
//  isEmail:(field)
//  isFax:(field)
//  isIp:(field)
//  isPhone:(field)
//  isTel:(field)
//  isUrl:(field)
//  maxLength:(field, length)
//  minLength:(field, length)
//  required:(field) //}
     if(obj.errors.length>0){
     // 判断是否错误
     }
})

var v = new Validator();
v.isEmail('wowohoo@qq.com'); // -> 验证合法邮箱  |=> 返回布尔值
v.isIp('192.168.23.3'); // -> 验证合法 ip 地址  |=> 返回布尔值
v.isFax(''); // -> 验证传真  |=> 返回布尔值
v.isPhone('13622667263'); // -> 验证手机  |=> 返回布尔值
v.isTel('021－324234-234'); // -> 验证座机  |=> 返回布尔值
v.isUrl('http://JSLite.io'); // -> 验证URL  |=> 返回布尔值
v.maxLength('JSLite',12); // -> 最大长度  |=> 返回布尔值
v.minLength('JSLite',3); // -> 最小长度  |=> 返回布尔值
v.required('23'); // -> 是否为必填(是否为空)  |=> 返回布尔值</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'validator',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
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
