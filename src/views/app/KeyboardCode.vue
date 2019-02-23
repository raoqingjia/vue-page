<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>1、手机键盘也有keyCode可以判断keyCode</h3>
           <pre>
H5的键盘事件主要有三个：
onkeydown 当按下按键时运行
onkeypress当按下并松开按键时运行
onkeyup当松开按键时运行
$(document).keydown(function(event){
  if(event.keyCode == 13) {}
  console.log(event.keyCode);  //键盘code代码
  console.log(event.type);     //键盘代表内容
  console.log(event.key);       //键盘监听事件
  });</pre>
          <h3>
            2、每当键盘按下时监控input框值的变化，在电脑和安桌手机上测试都没有问题，在ios上有问题，对于输入中文keyup事件无法监听到中文的内容变化，同时类似于这种匹配的功能，最好加一个事件延迟，等用户输完后匹配，代码如下
          </h3>
<input id="inputVal" type="text" value="测试input事件">
          <p>输入内容---{{inputVal}}</p>
          <pre>
event.keyCode--------{{keyCode}}
event.type--------{{type}}
event.key--------{{key}}
$("#inputVal").on("input",function(e){
 var val=$(this).val();
 setTimeout(function(){
   _this.inputVal=val;
  console.log(event.keyCode);  //键盘code代码
  console.log(event.type);     //键盘代表内容
  console.log(event.key);       //键盘监听事件
     },300);
    e.stopPropagation();
});</pre>

          <h3>3、为什么keyup和keydown在IOS设备上失效，因为ios系统做了屏蔽机制，第三方输入法的事件系统是不管的，变换思路去监听input的值变化事件，替换方案如下</h3>
          <input id="propertychange" type="text" value="测试input事件">
          <p>输入内容---{{propertychange}}</p>
          <pre>
用 input 和 propertychange事件可以解决，可以说这是上边的升级版
$("#propertychange").bind('input propertychange', function(e){
      var val=$(this).val();
      setTimeout(function(){
        _this.propertychange=val;
      },300);
      e.preventDefault();
      e.stopPropagation();
});
链接出处：
https://blog.csdn.net/kongjiea/article/details/40186121
https://www.cnblogs.com/yang-C-J/p/7027126.html
http://blog.sina.com.cn/s/blog_86d9fde70101792u.html
</pre>
          <h3>4、疑问：如果不是标准键盘，是九宫格键盘怎么办，是不是出现keycode总是为0，因为是手机QQ或者微信内置的浏览器，而不是手机自带的浏览器
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'KeyboardCode',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name,
        keyCode:"",
        type:"",
        key:"",
        inputVal:"",
        propertychange:""

      }
    },
    mounted(){
      this.$nextTick(function(){
        var _this=this;
        $(document).keydown(function(event){
          if(event.keyCode == 13) {}
          _this.keyCode=event.keyCode;
          _this.type=event.type;
          _this.key=event.key;
          });
        $("#inputVal").on("input",function(e){
           var val=$(this).val();
           setTimeout(function(){
             _this.inputVal=val;
           },300);
          e.preventDefault();
          e.stopPropagation();
        });
        $("#propertychange").on("input",function(e){
          var val=$(this).val();
          setTimeout(function(){
            _this.propertychange=val;
          },300);
          e.preventDefault();
          e.stopPropagation();
        });
      })
    },
    methods: {
      click(){

      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input{
    width: 220px;
    padding: 8px;
    margin:8px 0;
    border: 1px solid #CCCCCC;
    border-radius: 4px;
  }
  p{
    margin: 10px 0;
  }
</style>
