<template xmlns:hh="http://www.w3.org/1999/xhtml">
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>mockjs简介</h3>
          <pre>http://mockjs.com/ 官网
npm install mockjs --save-dev 安装
import Mock from 'mockjs' 或者 var Mock = require('mockjs')  导入mock</pre>
          <h3>mock.js生成数据案例</h3>
          <pre>
数据模板中的每个属性由 3 部分构成：属性名、生成规则、属性值：
// 属性名   name
// 生成规则 rule
// 属性值   value
'name|rule': value

注意：
属性名 和 生成规则 之间用竖线 | 分隔。
生成规则 是可选的。
生成规则 有 7 种格式： 'name|min-max': value 'name|count': value 'name|min-max.dmin-dmax': value 'name|min-max.dcount': value 'name|count.dmin-dmax': value 'name|count.dcount': value
//属性值自动加 1，初始值为 `number` 'name|+step': value

生成规则 的 含义 需要依赖 属性值的类型 才能确定。
属性值 中可以含有 @占位符。
属性值 还指定了最终值的初始值和类型。</pre>
          <h3>mock.js生成数据案例</h3>
          <pre>
1.生成字符串
'name|min-max': string
通过重复 string 生成一个字符串，重复次数大于等于 min，小于等于 max
const str=Mock.mock({
        "title|2-5":'hello'
    })

2.生成数字
1）'name|min-max': number
生成一个大于等于 min、小于等于 max 的整数，属性值 number 只是用来确定类型。
const num=Mock.mock({
        "num|1-100":100
    })
2）'name|min-max.dmin-dmax': number
生成一个浮点数，整数部分大于等于 min、小于等于 max，小数部分保留 dmin 到 dmax 位。
Mock.mock({
    'number1|1-100.1-10': 1,
    'number2|123.1-10': 1,
    'number3|123.3': 1,
    'number4|123.10': 1.123
})
// =>
{
    "number1": 12.92,
    "number2": 123.51,
    "number3": 123.777,
    "number4": 123.1231091814
}

3.生成标题
const title=Mock.mock({
        "title":'@ctitle()'
      })
console.log(title) =》 {title: '再府前商金'} 就是随机生成中文

4.生成段落
const center=Mock.mock({
        "center":'@cparagraph()'
      })
console.log(center) =》 {center: "此设构据特走火才全况连表会。然定长民式点七马石调今准叫...."}  就是随机生成比较长的中文

5.生成姓名-地址-身份证号：
var person=Mock.mock({
    name:'@cname()',
    IDcard:"@id()",
    address:"@city(true)"
})
console.log(person);  =》 {name: '宋强', IDcard: '53000019840225950X', address: '安徽省 芜湖市'}

6.生成随机图片：
var img=Mock.mock({
        img:"@image('300x200','#e1251b','#fff','我是随机图片')"
    })
console.log(img)   {img: 'http://dummyimage.com/300x200/e1251b/fff&text=我是随机图片'}

7.生成时间：
var data=Mock.mock({
        time:"@date(yyyy-MM-dd hh:mm:ss)"
    })

8.生成数组：
1）指定数组返回的条数：
const arr=Mock.mock({
        'list|5':[   // 指定范围的话就改成'list|2-10'
            {
                name:'@cname()',
                IDcard:"@id()",
                address:"@city(true)"
            }
        ]
    })
console.log(arr); //生成5组数据</pre>
          <h3>使用mock模拟get和post请求</h3>
          <pre>
先举个简单的示例
1.定义返回的数据
var  {newList}=Mock.mock({
            'newList|20-30':[
                {
                id:"@increment(1)",
                title:'@ctitle',
                updat:'@date(yyyy-MM-dd hh:mm:ss)',
                info:'@cparagraph(5,10)',
                small:"@dataImage(300x200,电影图片)"
            }
            ]
        })
2.拦截get请求
 Mock.mock('api/douban/movie/top250','get',()=>{
                return {
                    status:200,
                    message:'获取电影列表成功！',
                    total:newList.length,
                    list:newList

                })


我再os-web项目中碰到mock涉及get、post请求 的一些问题
1、get请求url路径注意带不带参数，不然定义的get请求没定义参数，但是实际的http请求带参数了就报404
2、Mock.mock请求应该一共用到三个参数 url  请求类型  response返回数据
3、response返回数据方式有下面三种 返回个function ， 直接返回data数据
4、mock的接口配置url路径注意和axios的公共路径是不是一直，不然也会报404

下面是案例
声明mock/index.js 文件
import Mock from 'mockjs'
import data from "./json/data";
const serviceName = '/api/mock';

// 通过Mock.mock函数模拟请求
Mock.mock(serviceName+'/login_check', 'get', function (option) {
    // 这里的option是请求的相关参数
    console.log(option)
    return Mock.mock({
        info: "用户登录成功:admin",
        resultCode: "000000",
        resultMessage: "SUCCESS",
        success: true,
        result: require('./json/loginCheck.json')
    });
});
Mock.mock(serviceName + '/UserRoleSV/selectRolesByUserId', 'post', function (option) {
    // 这里的option是请求的相关参数
    console.log(option);
    return require('./json/selectRolesByUserId.json');
});
Mock.mock(serviceName + '/RoleInfoSV/selectMenuModuleByRoleId', 'post', data.selectMenuModuleByRoleId);
Mock.mock(serviceName + '/noticeCentre/queryTop', 'post', data.queryTop);

如何是vue项目就在main.ts引入
import '@/mock/index'          </pre>
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
