<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>1、html常用标签</h3>
          <pre>
<span>② a超链接</span>
标签的类型
1）块级标签
&#60div> &#60h1>-&#60h6> &#60p> &#60ul> &#60li>
具有盒模型特征：宽度100%，高度自适应，独立成行，垂直排列
2）行级标签  &#60a> &#60span> &#60img> &#60input>
具有部分盒模型特征：不独立成行，水平排列，宽度自适应，设置宽度高度不生效
img不属于容器，有些特殊，可以设置高度宽度
<span>① html</span>
超文本标记语言，所有网页标签的容器
<span>② head</span>
网页的头文件，网页的附属信息，内容不会出现在浏览器里
<span>② body</span>
网页的主题内容，浏览器窗口中能看到的部分
<span>② meta</span>
网页的元信息，网页的编码
<span>② title</span>
网页的标题
<span>② div</span>
搭建网页结构，把网页进行分盒
1）但是所有的默认高度为0
2）高度是自适应，由内容撑开，内容有多高，盒子就有多高
3）宽度是100%，跟浏览器窗口宽度一样
4）独立成行，也就是块级元素，会自动换行
5）英文单词，文字内容尽量有空格，否则视为成一个单词
<span>② img前景图</span>
1）前景图占位，图片自动撑起父级盒子
2）前景图不重复平铺
<span>② h系列标签</span>
&#60h1>-&#60h6> 共6组标签，级别从高到低，对于内容页，h1标签只能使用一次，其它标签可以多次使用
特征：
1）自带加粗
2）块级元素，具有div的所有特征，宽度100%，高度自适应，自动成行
3）自带外间距
<span>② p段落标签</span>
&#60p>段落文字&#60/p>
特征：
1）块级元素，具有div的所有特征，宽度100%，高度自适应，自动成行
2）自带外间距
<span>② ul无序列表</span>
ul 无序列表标签
li 列表项
特征：
1）块级元素，具有div的所有特征，宽度100%，高度自适应，自动成行
2）自带列表附，自带外间距，内填充
一般都不会用到自带列表附，ul{list-style：none} 外间距，内填充也是清零的
<span>② span万能标签</span>
几乎所有场景下都可以利用span标签
<span>② a超链接</span>
&#60a href="网址">文字或图片&#60/a>
特征：
1) 字体自带蓝色，下划线，访问过后变为紫色
2) 父级设置的字体颜色，a标签不会继承
阻止a标签默认行为的几种方法
1)&#60a href="javascript:void(0);"  onclick= "myjs( )">  Click Me &#60/a>
void(0)返回undefined，地址不发生跳转
2)&#60a href="javascript:;" >  Click Me  &#60/a>
和void(0)一样，都返回"undefined"
3)&#60a href="#">  Click Me  &#60/a>
是网上很常见的代码，#是标签内置的一个方法，用这种方法点击后网页后返回到页面的最顶端所以又有了“##”“#!”等,尽管解决了返回顶部的问题但仍存在其他缺陷，不推荐使用
可以设置锚点技术定位
<span>② form表单</span>
所有的表单控件动包含在form内，相当于表单控件的容器
表单控件
1）input 输入框
2）textarea 文本域
3）label 表单标注，把控件和文字进行绑定，相当点击文字内容也就同事点击了控件</pre>
          <h3>2、html5常用标签</h3>
          <pre>
<span>② 新增的标签</span>
header   网页的头部区域
nav      网页的导航
footer   网页的底部区域
article  网页的文章
aside    网页的侧边栏
hgroup   标题组，多个h标签放在里面
aside    网页的侧边栏
section  区段或文件（语义介于div和article之间）
&#60div class="main">&#60/div>   &#60div class="warp">&#60/div>
video  视频文件
&#60video src="视频文件路径" controls="controls">&#60/video>
audio 音频
&#60audio src="文件路径" controls="controls">&#60/audio>
autoplay	如果出现该属性，则视频在就绪后马上播放。
controls	如果出现该属性，则向用户显示控件，比如播放按钮。
loop	如果出现该属性，则当媒介文件完成播放后再次开始播放。</pre>
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
    mounted(){
      this.$nextTick(function(){

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
