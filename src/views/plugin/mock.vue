<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>1.基本使用方法</h3>
         <pre>
<span>① 安装</span>
使用npm安装: npm install mockjs;
或直接&#60script src="http://mockjs.com/dist/mock.js">&#60/script>;

<span>② 使用 Mock</span>
var Mock = require('mockjs')
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
输出结果
console.log(JSON.stringify(data, null, 4))

<span>③ 数据模板格式:</span>
 属性名|生成规则: 属性值
'name|rule': value
生成规则是可选的，有 7 种格式：
'name|min-max': value
'name|count': value
'name|min-max.dmin-dmax': value
'name|min-max.dcount': value
'name|count.dmin-dmax': value
'name|count.dcount': value
'name|+step': value
文档链接 https://github.com/nuysoft/Mock/wiki/Syntax-Specification

<span>④ 样例</span>
1）发起get请求:
$.ajax({
    url: 'http://test.com',
    type: 'get',
    dataType: 'json'
}).done(function(data, status, xhr) {
    console.log(JSON.stringify(data, null, 4));
});
2）Mock响应模板
Mock.mock('http://test.com', {
    "user|1-3": [{   // 随机生成1到3个数组元素
        'name': '@cname',  // 中文名称
        'id|+1': 88,    // 属性值自动加 1，初始值为88
        'age|18-28': 0,   // 18至28以内随机整数, 0只是用来确定类型
        'birthday': '@date("yyyy-MM-dd")',  // 日期
        'city': '@city(true)',   // 中国城市
        'color': '@color',  // 16进制颜色
        'isMale|1': true,  // 布尔值
        'isFat|1-2': true,  // true的概率是1/3
        'fromObj|2': obj,  // 从obj对象中随机获取2个属性
        'fromObj2|1-3': obj,  // 从obj对象中随机获取1至3个属性
        'brother|1': ['jack', 'jim'], // 随机选取 1 个元素
        'sister|+1': ['jack', 'jim', 'lily'], // array中顺序选取元素作为结果
        'friends|2': ['jack', 'jim'] // 重复2次属性值生成一个新数组
    },{
        'gf': '@cname'
    }]
});
3）可以看到结果:
{
    "user": [
        {
            "name": "董静",
            "id": 88,
            "age": 25,
            "birthday": "2015-04-01",
            "city": "湖南省 怀化市",
            "color": "#c0f279",
            "isMale": false,
            "isFat": false,
            "fromObj": {
                "dd": "44",
                "aa": "11"
            },
            "fromObj2": {
                "bb": "22",
                "cc": "33"
            },
            "brother": "jack",
            "sister": "jack",
            "friends": [
                "jack",
                "jim",
                "jack",
                "jim"
            ]
        },
        {
            "gf": "田杰"
        }
    ]
}
先关文档链接 https://segmentfault.com/a/1190000008839142

<span>⑤ 自定义响应时间</span>
可以自定义设置响应时间, 可以是绝对值, 也可以是区间.
Mock.setup({ timeout: 4000 });   // 设置4秒后再响应
Mock.setup({ timeout: '1000-4000' });  // 设置1秒至4秒间响应</pre>
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
