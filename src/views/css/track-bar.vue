<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>
关键点事 dl dt dd css的样式结构 虚线是dd给的 dt之充当了圆点而且是用了z-index进行覆盖，而且第一个绿色圆点也是用伪元素设置的；我认为还有另一种写法，既然dl的高度是内容撑起来的也可以给dl设置border-left: 1px #e9edf1 dashed;，这样dt的圆点还可以向下移动
html结构
&#60div class="track">
  &#60div class="title">
    &#60h4>总订单编号：&#60span>32854064&#60/span>&#60/h4>
    &#60p>有与（中国）有限公司&#60/p>
  &#60/div>
  &#60div class="info">
    &#60dl class="clearfix">
      &#60dt>&#60/dt>
      &#60dd>
        &#60h5>[审核中] 部门总经理审批&#60/h5>
        &#60p>2018-06-07  17:08:40&#60/p>
      &#60/dd>
    &#60/dl>
    &#60dl class="clearfix">
      &#60dt>&#60/dt>
      &#60dd>
        &#60h5>[审核中] 部门总经理审批&#60/h5>
        &#60p>2018-06-07  17:08:40&#60/p>
      &#60/dd>
    &#60/dl>
    &#60dl class="clearfix">
      &#60dt>&#60/dt>
      &#60dd>
        &#60h5>[审核中] 部门总经理审批&#60/h5>
        &#60p>2018-06-07  17:08:40&#60/p>
      &#60/dd>
    &#60/dl>
    &#60dl class="clearfix">
      &#60dt>&#60/dt>
      &#60dd>
        &#60h5>[审核中] 部门总经理审批&#60/h5>
        &#60p>2018-06-07  17:08:40&#60/p>
      &#60/dd>
    &#60/dl>
    &#60dl class="clearfix">
      &#60dt>&#60/dt>
      &#60dd>
        &#60h5>[审核中] 部门总经理审批&#60/h5>
        &#60p>2018-06-07  17:08:40&#60/p>
      &#60/dd>
    &#60/dl>
    &#60dl class="clearfix">
      &#60dt>&#60/dt>
      &#60dd>
        &#60h5>[审核中] 部门总经理审批&#60/h5>
        &#60p>2018-06-07  17:08:40&#60/p>
      &#60/dd>
    &#60/dl>
    &#60dl class="clearfix">
      &#60dt>&#60/dt>
      &#60dd>
        &#60h5>[审核中] 部门总经理审批&#60/h5>
        &#60p>2018-06-07  17:08:40&#60/p>
      &#60/dd>
    &#60/dl>
  &#60/div>
  &#60a href="javascript:;" class="more">加载更多&#60/a>
&#60/div>
css结构
.track {
  background-color: #fff;
  width: 336px;
  padding: 0 20px 20px 20px;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px #dfe2e5 solid;
  position: absolute;
  top:20px;
  left: 10px;;
  z-index: 11;
}
.track:after {
  content: "";
  position: absolute;
  top: -21px;
  left: 50%;
  width: 0;
  height: 0;
  border-top:10px solid  transparent;
  border-bottom:10px solid  #dfe2e5;
  border-right:10px solid transparent;
  border-left:10px solid  transparent;
}
.track .title {
  border-bottom: 1px #dfe2e5 solid;
  padding: 0 40px ;
}
.track .title h4{
  font-size: 12px;
  font-weight: bold;
  line-height: 20px;
  margin: 0;
  padding: 15px 0  8px 0;
  color: #354052;
}
.track .title p{
  font-size: 12px;
  color: #7f8fa4;
  padding: 0 0 15px 0 ;
  margin: 0;
}
.track .info  {
  height: 378px;
  padding: 15px 0;
  overflow: hidden;
}
.track .info dl{
  margin: 0;
}
.track .info  dt{
  float: left;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #e9edf1;
  border: 1px #e0e4ea solid;
  margin-right: -8px;
  position: relative;
  z-index: 10;
}
.track .info  dl:first-of-type dt:first-of-type{
  background-color: #44c82c;
  border: 1px #2cac17 solid;

}
.track .info  dd{
  float: left;
  margin: 0;
  border-left: 1px #e9edf1 dashed;
  padding-left: 25px;
}
.track .info dd  h5{
  font-size: 12px;
  font-weight: bold;
  line-height: 20px;
  margin: 0;
  padding: 0 0  8px 0;
  color: #354052;
}
.track .info  dd  p{
  font-size: 12px;
  color: #7f8fa4;
  padding: 0 0 15px 0 ;
  margin: 0;
}
.track .more{
  display: block;
  font-size: 12px;
  color: #c5c7cb;
  text-align: center;
  line-height: 24px;
} </pre>
<div class="track">
  <div class="title">
    <h4>总订单编号：<span>32854064</span></h4>
    <p>有与（中国）有限公司</p>
  </div>
  <div class="info">
    <dl class="clearfix">
      <dt></dt>
      <dd>
        <h5>[审核中] 部门总经理审批</h5>
        <p>2018-06-07  17:08:40</p>
      </dd>
    </dl>
    <dl class="clearfix">
      <dt></dt>
      <dd>
        <h5>[审核中] 部门总经理审批</h5>
        <p>2018-06-07  17:08:40</p>
      </dd>
    </dl>
    <dl class="clearfix">
      <dt></dt>
      <dd>
        <h5>[审核中] 部门总经理审批</h5>
        <p>2018-06-07  17:08:40</p>
      </dd>
    </dl>
    <dl class="clearfix">
      <dt></dt>
      <dd>
        <h5>[审核中] 部门总经理审批</h5>
        <p>2018-06-07  17:08:40</p>
      </dd>
    </dl>
    <dl class="clearfix">
      <dt></dt>
      <dd>
        <h5>[审核中] 部门总经理审批</h5>
        <p>2018-06-07  17:08:40</p>
      </dd>
    </dl>
    <dl class="clearfix">
      <dt></dt>
      <dd>
        <h5>[审核中] 部门总经理审批</h5>
        <p>2018-06-07  17:08:40</p>
      </dd>
    </dl>
    <dl class="clearfix">
      <dt></dt>
      <dd>
        <h5>[审核中] 部门总经理审批</h5>
        <p>2018-06-07  17:08:40</p>
      </dd>
    </dl>
  </div>
  <a href="javascript:;" class="more">加载更多</a>
</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
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


  .track {
    background-color: #fff;
    width: 300px;
    padding: 0 20px 20px 20px;
    box-sizing: border-box;
    border-radius: 3px;
    border: 1px #dfe2e5 solid;
    position: absolute;
    top:146px;
    left: 5px;;
    z-index: 11;

  }

  .track:after {
    content: "";
    position: absolute;
    top: -21px;
    left: 50%;
    width: 0;
    height: 0;
    border-top:10px solid  transparent;
    border-bottom:10px solid  #dfe2e5;
    border-right:10px solid transparent;
    border-left:10px solid  transparent;

  }


  .track .title {
    border-bottom: 1px #dfe2e5 solid;
    padding: 0 40px ;
  }
  .track .title h4{
    font-size: 12px;
    font-weight: bold;
    line-height: 20px;
    margin: 0;
    padding: 15px 0  8px 0;
    color: #354052;
  }
  .track .title p{
    font-size: 12px;
    color: #7f8fa4;
    padding: 0 0 15px 0 ;
    margin: 0;
  }
  .track .info  {
    height: 378px;
    padding: 15px 0;
    overflow: hidden;
  }
  .track .info dl{
    margin: 0;
  }
  .track .info  dt{
    float: left;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #e9edf1;
    border: 1px #e0e4ea solid;
    margin-right: -8px;
    position: relative;
    z-index: 10;
  }
  .track .info  dl:first-of-type dt:first-of-type{
    background-color: #44c82c;
    border: 1px #2cac17 solid;

  }
  .track .info  dd{
    float: left;
    margin: 0;
    border-left: 1px #e9edf1 dashed;
    padding-left: 25px;

  }

  .track .info dd  h5{
    font-size: 12px;
    font-weight: bold;
    line-height: 20px;
    margin: 0;
    padding: 0 0  8px 0;
    color: #354052;
  }
  .track .info  dd  p{
    font-size: 12px;
    color: #7f8fa4;
    padding: 0 0 15px 0 ;
    margin: 0;
  }

  .track .more{
    display: block;
    font-size: 12px;
    color: #c5c7cb;
    text-align: center;
    line-height: 24px;
  }

</style>
