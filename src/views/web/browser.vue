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
            1、关于IE
          </h3>
          <pre>
<span>① Window上的IE</span>
WIN7自带的IE 8
WIN8自带的是IE 11 (ie10是win8系统内置，无法降级成为ie8,只能通过开发者工具调试)
WIN10自带的就是 IE 11
如果将WIN7上的IE11卸载，并不意味IE消失，而是IE降版本了，如果将window的自带IE卸载程序很可能崩溃，因为IE上自带了window的好多程序，所以说卸载降级也要有个限度哦，别卸的电脑崩溃了
<span>② IE降级</span>
以win7系统下IE11降级为例
先点击“开始”菜单  ->  “控制面板” ->  “程序”(卸载程序)”
<img src="../../img/browser-ie01.jpg" style="width: 600px">
<img src="../../img/browser-ie02.jpg" style="width: 600px;margin-top: 30px">
<span>③ 关于开发者工具</span>
开发者工具中的任何设置仅供临时调试使用，无法保持，包括这里的文档模式；如果是页面遇到兼容问题，可以通过将网页添加到IE兼容性视图列表以做长期使用；但是IE兼容性视图也是有bug陷阱的
<span>④ 兼容性视图</span>
有些页面在IE11上打开报错，可能是默认版本不是IE11而是默认为IE7了，这是因为将网页添加到IE兼容性视图列表，将当前网站设置为兼容性视图这时IE11文档模式默认值变为：IE7值，像类似只支持IE8以上的代码就是个悲剧（这就是我说的bug陷阱）
如果网页需要html5支持,则将该页面的网站地址从IE兼容性视图列表从移出，这时IE11文档模式默认值变为：Edge值
IE会定期向微软官网拉数据，假如某网站被列入微软的兼容性视图浏览名单中，那么就会IE就会以兼容性视图模式来处理该网站。因此我们可以明白到文档模式不是完全掌控在我们手中的
<span>⑤ 让默认IE以哪种版本打开</span>
在IE11以及360浏览器文档模式默认为IE7版本，可以通过设置meta标签改变为其他模式
&#60meta http-equiv="X-UA-Compatible" content="IE=11" />  默认以IE11打开
&#60meta http-equiv="X-UA-Compatible" content="IE=8,9,10" /> 从大到小一次打开，默认是IE10如果不存在IE10，就递推用IE9打开
&#60meta http-equiv="X-UA-Compatible">使用常识：　　　　　　　　　　　　
必须放在head标签内才有效。
多个标签时只认第一个
<span>⑥ js判断当前IE版本 </span>
<p class="pre-cmd">window.onload=function(){
   alert(IEVersion())
}
function IEVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if(isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if(fIEVersion == 7) {
            return 7;
        } else if(fIEVersion == 8) {
            return 8;
        } else if(fIEVersion == 9) {
            return 9;
        } else if(fIEVersion == 10) {
            return 10;
        } else {
            return 6;//IE版本<=7
        }
    } else if(isEdge) {
        return 'edge';//edge
    } else if(isIE11) {
        return 11; //IE11
    }else{
        return -1;//不是ie浏览器
    }
}</p>
通过调用 IEVersion()可以获得返回值，值如下
<table  border="0" align="left">
  <tbody>
  <tr>
    <td>值</td>
    <td>值类型</td>
    <td>值说明</td>
  </tr>
  <tr>
    <td>-1</td>
    <td>Number</td>
    <td>&nbsp;不是ie浏览器</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Number</td>
    <td>ie版本&lt;=6</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Number</td>
    <td>ie7</td>
  </tr>
  <tr>
    <td>8</td>
    <td>Number</td>
    <td>ie8</td>
  </tr>
  <tr>
    <td>9</td>
    <td>Number</td>
    <td>ie9</td>
  </tr>
  <tr>
    <td>10</td>
    <td>Number</td>
    <td>ie10</td>
  </tr>
  <tr>
    <td>11</td>
    <td>Number</td>
    <td>ie11</td>
  </tr>
  <tr>
    <td>'edge'</td>
    <td>String</td>
    <td>ie的edge浏览器</td>
  </tr>
  </tbody>
</table>
           </pre>
            <h3>
              2、关于火狐firefox
            </h3>
          <pre>
<span>① 火狐响应式工具 </span>
ctrl + shift + m</pre>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'browser',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    mounted(){
      this.$nextTick(function(){

      })
    },
    computed:{

    },
    methods: {
      toggle(){

      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  table{
    height: 202px;
    width: 100%;
    text-align: center;
    border-collapse: collapse;
  }
  table th, table td, table th, table td {
    border: 1px solid silver;
    border-collapse: collapse;
    padding: 3px;
  }
</style>
