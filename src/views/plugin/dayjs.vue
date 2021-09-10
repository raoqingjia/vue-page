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
npm install dayjs --save

2、项目中引入
import dayjs from 'dayjs'
或者 CommonJS
var dayjs = require('dayjs');
dayjs().format();

3、使用方法
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
dayjs().set('month',9)
增加时间并返回一个新的 Dayjs() 对象
dayjs().add(7, 'day')
dayjs().add(7, 'year')
减少时间并返回一个新的 Dayjs() 对象
dayjs().subtract(7, 'year')
dayjs().subtract(7, 'month')
返回当前时间的开头时间的 Dayjs() 对象，如月份的第一天。
dayjs().startOf('year')
dayjs().startOf('month')
返回当前时间的末尾时间的 Dayjs() 对象，如月份的最后一天。
dayjs().endOf('month')
dayjs().endOf('year')
格式化
dayjs().format()
dayjs().format('YYYY-MM-DD dddd HH:mm:ss.SSS A')
时间差
dayjs('2018-06-08').diff(dayjs('2017-06-01'),'years')
dayjs('2018-06-08').diff(dayjs('2017-06-01'),'day')
dayjs('2018-06-08').diff(dayjs('2017-06-01'),'hour')
Unix 时间戳 (毫秒)
dayjs().valueOf()
Unix 时间戳 (秒)
dayjs().unix()
返回月份的天数
dayjs().daysInMonth()
</pre>
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
