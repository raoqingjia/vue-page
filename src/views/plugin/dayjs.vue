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
          <h3>使用方式</h3>
          <pre>Day.js中文网  https://dayjs.fenxianglu.cn/category/#node-js
1、安装
npm install dayjs --save

2、项目中引入
import dayjs from 'dayjs'
或者 CommonJS
var dayjs = require('dayjs');
dayjs().format();</pre>
          <h3>初始化日期 / 时间</h3>
          <pre>dayjs().format('YYYY-MM-DD');		    // 初始化日期
dayjs().format('YYYY-MM-DD HH:mm:ss');  // 初始化日期时间

使用方法
dayjs()  当前时间
dayjs().year()   年
dayjs().month()  月
dayjs().date()  日
dayjs().day()  星期
dayjs().hour()  时
dayjs().minute()  分
dayjs().second()  秒
dayjs().millisecond() 毫秒
dayjs('2018-06-03')  时间字符串
dayjs(1528361259484)  时间戳
dayjs(new Date(2018,8,18))  Date 对象
dayjs().clone()  复制
dayjs().isValid()  检测当前 Dayjs 对象是否是一个有效的时间
设置
dayjs().set('year',2017)
dayjs().set('month',9)  增加时间并返回一个新的 Dayjs() 对象
dayjs().daysInMonth()   返回月份的天数
dayjs().toDate()        返回原生的 Date 对象         </pre>
          <h3>格式化日期 / 时间</h3>
          <pre>dayjs(value).format('YYYY-MM-DD');			// 初始化日期
dayjs(value).format('YYYY-MM-DD HH:mm:ss'); // 初始化日期时间</pre>
          <h3>加 / 减</h3>
          <pre>dayjs().add / dayjs().subtract 代表在当前时间上去加减；
dayjs(value).add / dayjs(value).subtract 代表在指定时间（value）上去加减；
加
dayjs().add(7, 'day').format('YYYY-MM-DD');   // 2022-04-27 今天（2022-04-20）加上7天
dayjs().add(1, 'month').format('YYYY-MM-DD');   // 2022-05-20 今天（2022-04-20）加上一月
减
dayjs().subtract(2, 'year').format('YYYY-MM-DD');   // 2020-05-20 今天（2022-04-20）减去2年
dayjs().subtract(2, 'hour').format('YYYY-MM-DD HH:mm:ss');   // 2022-04-20 14:03:39 今天现在（2022-04-20 16:03:39）减去2小时</pre>
          <h3>获取某年某月的第一天或最后一天</h3>
          <pre>获取某年某月的第一天：
dayjs().startOf('year').format('YYYY-MM-DD HH:mm:ss')   // 2022-01-01 00:00:00  => 第一天格式化出来的时分秒都是0
dayjs().startOf('month').format('YYYY-MM-DD')   // 2022-04-01
获取某年某月的最后一天：
dayjs().endOf('year').format('YYYY-MM-DD HH:mm:ss')   // 2022-12-31 23:59:59  => 最后时间 格式化出来的时分秒是23:59:59
dayjs().endOf('month').format('YYYY-MM-DD')   // 2022-04-</pre>
          <h3>获取星期几</h3>
          <pre>dayjs().day() : 返回0(星期日)到6(星期六)的数字
设置时也只能接受 0-6 的数字：
dayjs().day(6).format('YYYY-MM-DD')：获取最近周六的日期 => 2022-04-23
dayjs().day(0).format('YYYY-MM-DD')：获取最近周日的日期 => 2022-04-17</pre>
          <h3>获取毫秒数</h3>
          <pre>dayjs('2019-01-25').valueOf() 或 dayjs().valueOf()</pre>
          <h3>获取时间差（默认输出的差值单位是毫秒）</h3>
          <pre>dayjs('2019-01-25').diff('2018-06-05', 'month');         // 7
dayjs('2019-01-25').diff(dayjs('2018-06-05'), 'month');  // 7</pre>
          <h3>获取时、分、秒</h3>
          <pre>当前时间：2022-04-20 16:55:55 ；
以下大部分方法都会往前溢出；如毫秒超过999，将持续到秒；秒超过59，将持续到分，这边情况在设置时特别突出！
console.log('-----获取年', dayjs().year());    // ==>> 2022
console.log('-----获取月', dayjs().month());   // 0到11的数字 ==>> 3
console.log('-----获取星期', dayjs().day());   // 0(星期日)到6(星期六)的数字 ==>> 3
console.log('-----获取天', dayjs().date());    // 1到31的数字 ==>> 20
console.log('-----获取小时', dayjs().hour());  // 0到23的数字 ==>> 16
console.log('-----获取分钟', dayjs().minute());// 0到59的数字 ==>> 55
console.log('-----获取秒', dayjs().second());  // 0到59的数字 ==>> 55
console.log('-----获取毫秒', dayjs().millisecond());  // 0到999的数字 ==>> 333</pre>
          <h3>将毫秒转为时分秒</h3>
          <pre>// 下面毫秒数代表：2022-04-20 17:43:20
const timestr = 1650447800731;   // 毫秒值必须是number类型，如果是string，结果可能和你想的不一样
console.log('将毫秒转为年-月-日 时:分:秒', dayjs(timestr).format('YYYY-MM-DD HH:mm:ss'));
console.log('获取年', dayjs(timestr).year()); //
console.log('获取月', dayjs(timestr).month());
console.log('获取天', dayjs(timestr).date());
console.log('获取时', dayjs(timestr).hour());
console.log('获取分', dayjs(timestr).minute());
注意：这里 year()、month()、date()、hour()、minute()、second()、millisecond() 等方法均可使用</pre>
          <h3>判断一个日期是否在另外一个日期之后 isAfter</h3>
          <pre>// day.js 为 2022-04-20
console.log('isAfter', dayjs().isAfter(dayjs('2011-01-01'))) 			 	// true
console.log('isAfter', dayjs('2022-04-20').isAfter(dayjs('2022-04-21')))	// false
console.log('isAfter', dayjs('2022-04-20').isAfter(dayjs('2022-04-20')))	// 相同也为false</pre>
          <h3>判断一个日期是否在另外一个日期之前 isBefore</h3>
          <pre>// day.js 为 2022-04-20
console.log('isBefore', dayjs().isBefore(dayjs('2011-01-01')))             // false
console.log('isBefore', dayjs('2022-04-20').isBefore(dayjs('2022-04-21'))) // true
console.log('isBefore', dayjs('2022-04-20').isBefore(dayjs('2022-04-20'))) // 日期相同时也为false</pre>
          <h3>判断两个日期是否相同 isSame</h3>
          <pre>// day.js 为 2022-04-20
console.log('isSame', dayjs().isSame(dayjs('2011-01-01')))  			// false
console.log('isSame', dayjs('2022-04-20').isSame(dayjs('2022-04-21')))	// false
console.log('isSame', dayjs('2022-04-20').isSame(dayjs('2022-04-20')))	// true</pre>
          <h3>判断一个日期是否在两个日期之间 isBetween</h3>
          <pre>注意:
此功能依赖IsBetween插件
此处也将演示如何使用 Day.js 的插件
import dayjs from 'dayjs'	// 引入dayjs
import isBetween from 'dayjs/plugin/isBetween'	// 引入相关插件
created() {
   dayjs.extend(isBetween); // 挂载插件
   // 使用插件
   console.log('isBetween', dayjs('2010-10-20').isBetween('2010-10-19', dayjs('2010-10-25')) )
}
Day.js 里面有 相同或之前 IsSameOrBefore 和 相同或之后 IsSameOrAfter的方法，可根据实际需求取用，但这两个方法需要依赖相应的插件！
注意：
isAfter、isBefore、isSame、IsBetween 默认都是通过将日期转为milliseconds去比较的，所以这两个方法有第二个参数。即指定比较的粒度
console.log('isBefore', dayjs('2022-04-20').isBefore('2015-01-01', 'year'))</pre>
          <h3>可用单位列表</h3>
          <pre>week  周  day 天   month  月   year 年  hour 小时  minute 分钟  second 秒  millisecond  毫秒</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dayjs',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name,
        catalogue:[]
      }
    },
    mounted:function(){
      this.$nextTick(function(){
        this.createCatalogue();
      })
    },
    computed:{},
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
<style scoped>

</style>
