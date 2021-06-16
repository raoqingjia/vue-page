<template xmlns:hh="http://www.w3.org/1999/xhtml">
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>fastmock简介</h3>
          <pre>
https://www.fastmock.site 官网
fastmock可以让你在没有后端程序的情况下能真实地在线模拟ajax请求，你可以用fastmock实现项目初期纯前端的效果演示，也可以用fastmock实现开发中的数据模拟从而实现前后端分离,避免了本地手写数据模拟，在前端代码中产生一大堆的mock代码</pre>
          <h3>fastmock利用mock.js生成数据案例</h3>
          <pre>
基础随机内容的生成
{
  "string|1-10": "=", // 随机生成1到10个等号
  "string2|3": "=", // 随机生成2个或者三个等号
  "number|+1": 0, // 从0开始自增
  "number2|1-00.1-3": 1, // 生成一个小数，小数点前面1到10，小数点后1到3位
  "boolean": "@boolean( 1, 2, true )", // 生成boolean值 三个参数，1表示第三个参数true出现的概率，2表示false出现的概率
  "name": "@cname", // 随机生成中文姓名
  "firstname": "@cfirst", // 随机生成中文姓
  "int": "@integer(1, 10)", // 随机生成1-10的整数
  "float": "@float(1,2,3,4)", // 随机生成浮点数，四个参数分别为，整数部分的最大最小值和小数部分的最大最小值
  "range": "@range(1,100,10)", // 随机生成整数数组，三个参数为，最大最小值和加的步长
  "natural": "@natural(60, 100)", // 随机生成自然数（大于零的数）
  "email": "@email", // 邮箱
  "ip": "@ip" ,// ip
  "datatime": "@date('yy-MM-dd hh:mm:ss')" // 随机生成指定格式的时间
  // ......
}

列表数据
{
  "code": "0000",
  "data": {
    "pageNo": "@integer(1, 100)",
    "totalRecord": "@integer(100, 1000)",
    "pageSize": 10,
    "list|10": [{
      "id|+1": 1,
      "name": "@cword(10)",
      "title": "@cword(20)",
      "descript": "@csentence(20,50)",
      "price": "@float(10,100,10,100)"
    }]
  },
  "desc": "成功"
}

mockjs可以生成任意大小，任意颜色块，且用文字填充内容的图片，使我们不用到处找图片资源就能轻松实现图片的模拟展示
"code": "0000",
  "data": {
    "pageNo": "@integer(1, 100)",
    "totalRecord": "@integer(100, 1000)",
    "pageSize": 10,
    "list|10": [{
      // 参数从左到右依次为，图片尺寸，背景色，前景色（及文字颜色）,图片格式，图片中间的填充文字内容
      "image": "@image('200x100', '#ffcc33', '#FFF', 'png', 'Fast Mock')"
    }]
  },
  "desc": "成功</pre>
          <h3>fastmock常用语法</h3>
         <pre>
@cname 中文姓名
@phone 电话号码
@ID 身份证号
@image 随机图片地址
@province 省份
@city 市
@county 区

1.随机字符串
(类型 , 位数)
@string(lower,10)
lower : 小写字母
upper : 大写字母
number : 数字

@natural(60, 100) 随机生成自然数（大于零的数）

@ctitle(3, 8) 随机生成3,到8个字符

2.随机int
(下限 , 上限)
@integer(60, 100)

3.随机boolean
@boolean

4.随机float double
(下限 , 上限)
@float(60, 100)

5.随机日期(yyyy-mm-dd)
@date

6.随机时间 hh:mm:ss
@time

7.随机日期+时间(yyyy-mm-dd hh:mm:ss)
@datetime

8.当前日期+时间(yyyy-mm-dd hh:mm:ss)
@now

9.随机图片占位符 ,会生成一个图片链接
@image(200x100)
@image()

10.随机颜色(#79f2ac)
@color

11.长文本(英文)
@paragraph

12.长文本(中文)
@cparagraph

随机中文字符,带句号
@csentence(len)
@csentence(min, max)

13.常用特殊格式
@url 链接
@domain 域名
@email 邮箱
@ip IP
@region 地区(华东,华南…)
@province 省
@city 市
@county 县
@zip 邮编
@guid 随机GUID
@id 随机ID(Long)

'gender|1-2': true 性别
'sex|1': ["女","男"]
'companyId|+1':1 id格式
@date(‘yy-MM-dd hh:mm:ss’) 生成指定格式时间</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // 使用 Mock
  var Mock = require('mockjs');
  export default {
    name: 'mock',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    mounted() {
      this.$nextTick(function () {
        var data = Mock.mock({
          // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
          'list|1-10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1
          }]
        });
        // 输出结果
        console.log(JSON.stringify(data, null, 4))
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
