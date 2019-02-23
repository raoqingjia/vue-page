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
            1、根据所提供日期推算几个月后（前）的今天的日期
          </h3>
          <pre>
//获取几个月前的输入日期
//date 输入日期(YYYY-MM-DD)  monthNum 月数 6是向后推算6个月，-6是向前推算6个月
 GetPreMonthDay: function (date,monthNum){
  var dateArr = date.split('-');
  var year = dateArr[0]; //获取当前日期的年份
  var month = dateArr[1]; //获取当前日期的月份
  var day = dateArr[2]; //获取当前日期的日
  var days = new Date(year, month, 0);
  days = days.getDate(); //获取当前日期中月的天数
  var year2 = year;
  var month2 = parseInt(month) - monthNum;
  if (month2 <=0) {
   year2 = parseInt(year2) - parseInt(month2 / 12 == 0 ? 1 : parseInt(month2) / 12);
   month2 = 12 - (Math.abs(month2) % 12);
  }
  var day2 = day;
  var days2 = new Date(year2, month2, 0);
  days2 = days2.getDate();
  if (day2 > days2) {
   day2 = days2;
  }
  if (month2 < 10) {
   month2 = '0' + month2;
  }
  var t2 = year2 + '-' + month2 + '-' + day2;
  return t2;
 }</pre>
          <h3>
            2、取得当前月份前或后几个月的年月信息：0-当前年月，1-下个月，-1-上个月
          </h3>
          <pre>
function getY_M(n){
    var y = new Date().getFullYear();   //获取年份
    var m = new Date().getMonth()+1;    //获取月份
    m += n;
    y += parseInt(m / 12);
    m %= 12;
    if(m < 1){
        y--;
        m = 12 + m;
    }
    return y + "-" + ((m < 10) ? ("0" + m) : m);
}</pre>
          <h3>
            3、取得日期昨天，今天，明天  0-当前日，1-明天，-1-昨天
          </h3>
          <pre>
function  getDayFun(n){
    var today = new Date();
    today.setDate(today.getDate()+n);//日期  0-当前日，1-明天，-1-昨天
    var y = today.getFullYear();  //获取当年
    var m = today.getMonth()+1;  //获取当前月份的日期
    m = m<10 ? '0'+m : m;
    var d = today.getDate();
    d = d<10 ? '0'+d : d;
    return y+"-"+m+"-"+d;
}</pre>
          <h3>
            4、获取上个月的最后一天
          </h3>
          <pre>
function   lastMonth_lastDay(){
    var nowdays = new Date();
    var year = nowdays.getFullYear();
    var month = nowdays.getMonth();
    if(month==0)
    {
        month=12;
        year=year-1;
    }
    if (month < 10) {
        month = "0" + month;
    }
   // var firstDay = year + "-" + month + "-" + "01";//上个月的第一天
    var myDate = new Date(year, month, 0);
    var lastDay = year + "-" + month + "-" + myDate.getDate();//上个月的最后一天
    return  lastDay;
}</pre>
          <h3>
            5、js 秒转换成 时-分-秒
          </h3>
          <pre>
function formatSeconds(value) {
    var theTime = parseInt(value);// 秒
    var theTime1 = 0;// 分
    var theTime2 = 0;// 小时
    if(theTime > 60) {
        theTime1 = parseInt(theTime/60);
        theTime = parseInt(theTime%60);
        if(theTime1 > 60) {
            theTime2 = parseInt(theTime1/60);
            theTime1 = parseInt(theTime1%60);
        }
    }
    var result = ""+parseInt(theTime)+"秒";
    if(theTime1 > 0) {
        result = ""+parseInt(theTime1)+"分"+result;
    }
    if(theTime2 > 0) {
        result = ""+parseInt(theTime2)+"小时"+result;
    }
    return result;
}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'getDate',
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
