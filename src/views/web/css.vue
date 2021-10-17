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
           1、CSS样式笔记
          </h3>
          <pre>
<span>① 浮动</span>
float：left 左浮动 / right 右浮动
1）做统一水平布局的子盒都要设浮动
2）子盒浮动做水平布局后，父级盒必须给高度，否则子盒撑不开父级盒，除非清浮动
3）浮动子盒宽度之和如果大于父级盒的宽度，最后一个子盒会被挤到下一行
4）当一个盒子设为浮动，宽度会从100%变为自适应，会根据内容变化大小
<span>② 盒子的水平居中</span>
1）如果是行级元素，可以利用text-align: center;
2)如果是块级元素设置margin： 0 auto;
<span>③ 背景</span>
1)背景色 background-color：#ccc / transparent 背景色透明
2）背景图片
background-image：url（''）  图片名称不能用中文
背景图片在浏览器中不单独占位，该盒子不给高度，背景图片是不能显示的；
背景图片默认在盒子的水平和垂直方向重复平铺
3）背景图片的重复
background-repeat
no-repeat 不重复    repeat-x 水平方向重复  repeat-y 垂直方向重复
4）背景图片的定位
background-position: x 空格 y；
x(水平方向)  left 居左 center 居中  right居右
y(垂直方向)  top 顶部  center 中部  bottom 底部
如果是具体数值：盒内为正，盒外为负，要是负值大于图像宽度高度，图像就敢看不见了
<span>⑤ 外间距</span>
margin：40px； 四个方向都是40px
margin：40px 40px； 上下  左右
margin：40px 20px 40px；上 左右 下
margin：10px 20px 30px 40px； 上 右 下 左 顺时针方向
margin-top 在特殊的布局下是会失效的，这是margin自带的bug
margin 是水平叠加 垂直是以两个盒子之间margin值最大值为准
<span>⑥ 内间距</span>
padding 内填充，盒子的边框与盒内内容之间的距离
用法与margin一样
在box-sizing：content-box；的情况下
对于固定宽度高度的盒子，为保持盒子的总尺寸不变，填充padding增加多少，盒子的宽度高度对应减少多少
对于有边框或背景的两个盒子分离只能用margin
对于没有边框和背景的两个盒子分离，优先用padding
<span>⑦ 边框</span>
border
solid 实线 dashed 虚线  dotted 点线  double 双线（像素线最小是3px）
<span>⑧ 字体</span>
font-family
1）字体间使用逗号分隔，后面属于备用字体
2）中间有空格的英文字体名或中文字体名需要加引号
3）对于中英字混排，英文要放在前面
eg font-family：arial ，‘微软雅黑’
font-size 字体大小
font-weight  字体加粗  normal  正常字体 \ bold 加粗
font-style 文字倾斜    normal  正常字体 \ italic 倾斜
color   字体颜色
<span>⑨ 文本</span>
文本对齐方式  text-align：left / center / right
文本转换 text-transform：capitalize（首字母大写）/ uppercase （全部大写）/ lowercase （全部小写）
文本装饰 text-decoration： underline 下划线  / line-through 删除线 / line-overline 上划线 / none 取消装饰线
<span>⑩ 行高</span>
line-height
文字会在行高范围内垂直居中，行高搭配文字上填充实现精准定位
<span>⑪  行块</span>
display： block 块级 / line 行级 / line-block 行块 / none 隐藏，不占位
<span>⑫  定位position</span>
1）fixed 固定定位 （应用于导航，询问栏，广告栏）
 a.固定定位不占位
 b.宽度从100%变为自适应（这时候要定义width了，一般情况下是width:100%）
 c.默认以浏览器的四个角为坐标原点
 d.固定定位不会随页面滚动
2）relative相对定位
 a.相对定位盒子仍然占位
 b.可以作为absolute绝对定位盒子的参照盒
3)absolute 绝对定位（dom元素遮盖效果时用）
 a.宽度从100%变为自适应
 b.绝对定位盒子不占位
 c.默认以浏览器的四个角为坐标原点，通过left，right，top，bottom其中的两个参数值进行定位
4）绝对居中
 a.{
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,(-50%,);  //问题是IE低版本不太好用
    }
 b.{
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    margin:auto;
    width:100px;    //局限是要设置高度宽度
    height:80px;
    }
<span>⑬ z-index</span>
设定定位元素的叠放次序
1）只有在fixed，relative，absolute下起作用
2）z-index数值越大，叠放次序越高，可以为负值
3）z-index没有单位
<span>⑭ cursor</span>
规定要显示的光标的类型（形状）
default	默认光标（通常是一个箭头）
auto	默认。浏览器设置的光标
crosshair	光标呈现为十字线
pointer	光标呈现为指示链接的指针（一只手）
move	此光标指示某对象可被移动
e-resize	此光标指示矩形框的边缘可被向右（东）移动
ne-resize	此光标指示矩形框的边缘可被向上及向右移动（北/东）
nw-resize	此光标指示矩形框的边缘可被向上及向左移动（北/西）
n-resize	此光标指示矩形框的边缘可被向上（北）移动
se-resize	此光标指示矩形框的边缘可被向下及向右移动（南/东）
sw-resize	此光标指示矩形框的边缘可被向下及向左移动（南/西）
s-resize	此光标指示矩形框的边缘可被向下移动（南）
w-resize	此光标指示矩形框的边缘可被向左移动（西）
text	此光标指示文本。
wait	此光标指示程序正忙（通常是一只表或沙漏）。
help	此光标指示可用的帮助（通常是一个问号或一个气球）
<span>⑮ resize</span>
控件尺寸调整，就是避免input等标签的尺寸不被拉伸
resize：none； 禁止调整控件尺寸
<span>⑯ vertical-align</span>
baseline	默认。元素放置在父元素的基线上。
sub	垂直对齐文本的下标。
super	垂直对齐文本的上标
top	把元素的顶端与行中最高元素的顶端对齐
text-top	把元素的顶端与父元素字体的顶端对齐
middle	把此元素放置在父元素的中部。
bottom	把元素的顶端与行中最低的元素的顶端对齐。
text-bottom	把元素的底端与父元素字体的底端对齐。
%	使用 "line-height" 属性的百分比值来排列此元素。允许使用负值。
inherit	规定应该从父元素继承 vertical-align 属性的值。
<span>⑰ 图片与容器之间存有间隙</span>
1） 图片的父级盒给以个高度值
1） img{ display:block; }
<span>⑱ 间距</span>
word-spacing 英文单词之间的间距
letter-spacing 英文字母或中文汉字间距
          </pre>
          <h3>
            2、CSS3样式笔记(兼容IE9以上浏览器)
          </h3>
          <pre>
<span>① rgba（r，g，b，a）</span>
r-red 红色 g-green 绿色 b-blue 蓝色 0-255 参数值
a-不透明度 0-1 0是完全透明 1完全不透明
eg background-color：rgba（255,0,0,0.5）
<span>② box-shadow 盒阴影</span>
box-shadow：a b c d color;
a 水平偏移 b 垂直偏移 c 羽化值 d 扩展值  color 阴影颜色可以用rgba
<span>③ border-radius 圆角半径</span>
border-radius:50%； 可以实现圆形效果
border-radius: 左上角水平圆角半径大小 右上角水平圆角半径大小 右下角水平圆角半径大小 左下角水平圆角半径大小/左上角垂直圆角半径大小 右上角垂直圆角半径大小 右下角垂直圆角半径大小 左下角垂直圆角半径大小;
border-top-left-radius: 200px 100px;
border-top-right-radius: 200px 100px;
border-bottom-left-radius: 200px 100px;
border-bottom-right-radius: 200px 100px;
<span>④ 背景</span>
1） background-size 背景图片尺寸
 a.auto 默认值 背景图片的原始大小
 b. w h w宽度   h高度
 c.contain 图片自身的宽高比不变，缩放至图片自身能完全显示出来，所以容器会有留白区域
 d.cover   图片宽高比不变、铺满整个容器的宽高，而图片多出的部分则会被截掉；
2） background 背景合写
background：颜色 图片 重复  定位(水平 垂直)
多重背景色用，逗号隔开
.demo1{
    background:url(/i/bg_flower.gif) no-repeat 50% 50% , url(/i/bg_flower_2.gif) repeat 0% 0%;
    background-color:yellow; //这是定义的默认背景颜色
}
.demo2 {
    width: 600px;
    height: 200px;
    border: 1px solid black;
    background: url('1.png') no-repeat,
                url('2.png') no-repeat 200px 0,
                url('3.png') no-repeat 400px 0;
}
3） background-attachment 背景附件
background-attachment：fixed 背景图片相对于浏览器窗口静止
<span>⑤ 线性渐变</span>
background：liner-gradient（方向，颜色1 范围1 ，颜色2 范围2 ）
1）方向 left right top bottom
2）角度 deg
3）范围 0%-100%  0是最左边，100%是最右边
兼容性前缀，所以线性渐变要写多个liner-gradient，不然可能在火狐显示，在谷歌不显示
background: -ms-linear-gradient(top, #fff, #dededc);      /* IE 9 */
background: -moz-linear-gradient(top, #fff, #dededc);     /* Firefox */
background: -webkit-linear-gradient(top, #fff, #dededc);  /* Safari and Chrome */
background: -o-linear-gradient(top, #fff, #dededc);       /* Opera */
background: linear-gradient(top, #fff, #dededc);
<span>⑥ transition状态过渡动画</span>
transition：css属性 时间1 动画类型  时间2
css属性 ：需要应用过渡动画的属性 all-所有样式的属性
时间1 ：动画执行时间
动画类型 ：ease平滑过渡（默认） ease-in 加速  ease-out 减速  ease-in-out 先加速后减速 linear 匀速
时间2 ：动画延迟时间 点击后延迟几秒再执行
<span>⑦ transform 变形动画</span>
rotate 旋转    （单位 deg） rotate（45 deg）正值顺时针旋转，负值逆时针旋转。
scale 缩放     （没有单位） scale（1.2,0.8） 1.2水平向比例 0.8垂直向比例
skew 倾斜动画  （单位 deg） skew（x，y） x水平方向倾斜角度  y垂直方向倾斜度
translate 位移 （单位 px 或 百分比） translate（x，y） x水平方向  y垂直方向  正值往右往上，负值往左往上
详情：
translate(x,y)	定义 2D 转换。
translate3d(x,y,z)	定义 3D 转换。
translateX(x)	定义转换，只是用 X 轴的值。
translateY(y)	定义转换，只是用 Y 轴的值。
translateZ(z)	定义 3D 转换，只是用 Z 轴的值。
scale(x,y)	定义 2D 缩放转换。
scale3d(x,y,z)	定义 3D 缩放转换。
scaleX(x)	通过设置 X 轴的值来定义缩放转换。
scaleY(y)	通过设置 Y 轴的值来定义缩放转换。
scaleZ(z)	通过设置 Z 轴的值来定义 3D 缩放转换。
rotate(angle)	定义 2D 旋转，在参数中规定角度。
rotate3d(x,y,z,angle)	定义 3D 旋转。
rotateX(angle)	定义沿着 X 轴的 3D 旋转。
rotateY(angle)	定义沿着 Y 轴的 3D 旋转。
rotateZ(angle)	定义沿着 Z 轴的 3D 旋转。
skew(x-angle,y-angle)	定义沿着 X 和 Y 轴的 2D 倾斜转换。
skewX(angle)	定义沿着 X 轴的 2D 倾斜转换。
skewY(angle)	定义沿着 Y 轴的 2D 倾斜转换。
perspective(n)	为 3D 转换元素定义透视视图。
注意 ：
 a.单位的问题
 b.transition要先设置状态过渡，不然动画变化太快，看不清效果
 c.属性之间的空格
 d.尽量父级用float浮动，不用display
<span>⑧ animation 关键帧动画</span>
1）定义动画
@keyframes 动画名称（英文/或是中文名）{
      0%{ ...... }
      50%{ ...... }    <-- 这里千万别加分号
      100%{ ...... }
  }
2）应用动画
#box{ animation：动画名称 执行时间 动画类型 延迟时间  循环 }
循环 - n（整数，循环次数）  infinite 无限循环
3）animation-delay 动画延迟时间
<span>⑨ opacity 属性</span>
设置 div 元素的不透明级别：
opacity： value | inherit
value	规定不透明度，从 0.0 （完全透明）到 1.0（完全不透明） | inherit 从父元素继承opacity属性的值。
不透明度为0，但它还是默认占位
IE8 以及更早的版本支持替代的 filter 属性。例如：filter:Alpha(opacity=50)。
<span>⑩ @media 查询</span>
媒体查询一定要放到style样式的最下面
@media (min-width: 768px){ //>=768的设备 }
@media (min-width: 992px){ //>=992的设备 }
@media (min-width: 1200){ //>=1200的设备 }

@media (max-width: 1199){ //<=1199的设备 }
@media (max-width: 991px){ //<=991的设备 }
@media (max-width: 767px){ //<=768的设备 }</pre>
          <h3>
            3、css选择器
          </h3>
          <pre>
<span>① 伪类选择器</span>
E：first-of-type  E的父级盒中第一个与E类型相同的子元素
E：last-of-type  E的父级盒中最后一个与E类型相同的子元素
E：nth-of-type(n)  E的父级盒中第n个与E类型相同的子元素
E：first-child  一组子元素中的第一个元素
E：last-child   一组子元素中的最后一个元素
E：nth-child（n）  一组子元素中的第n个元素
E：nth-child（2n）  一组子元素中的偶数个子元素
E：first-child    一组子元素中的奇数个子元素
a:link { 链接的默认样式 }
a:visited { 已访问的样式 }
a:hover  {鼠标悬停时的样式 }
a:active  { 点击链接时的样式 }
a标签伪元素的书写顺序  link visited  hover active
<span>② 伪元素选择器</span>
:before{ content:""; }  在元素的内容之前插入新的内容
:after{ content:""; }   在元素的内容之后插入新的内容
<span>③ 后代选择器</span>
父级类名A  空格 子级类名B  eg： .classFather .classSon { color:red}
代表含义是在父级选择器 A区域范围内的所有B选择器生效
<span>④  * 通配符选择器</span>
代表页面中所有的标签，只有在测试项目中我才会有，真正的项目中我不会用，通配符*其实是有bug的
<span>⑤ 邻兄弟选择器器</span>
 h1 + p {margin-top:50px;}
这个选择器读作：“选择紧接在 h1 元素后出现的段落；而且要是h1 和 p 元素拥有共同的父元素”。
<span>⑥ 群组选择器</span>
div,span,img { color:red } 即具有相同样式的标签分组显示
<span>⑦ 子选择器</span>
 如：div>p ,带大于号>
<span>⑧ 字符串匹配的属性选择符</span>
(^ $ *三种，分别对应开始、结尾、包含)
img[alt] {
border: 3px dashed #e15f5f;
}
该选择器的关键字符是 $ ，它的意思是“以此结尾” 。
img[alt$="film"] {
  border: 3px dashed #e15f5f;
}
该选择器的关键字符是 * 符号，它的意思是“包含” 。
img[alt*="film"] {
  border: 3px dashed #e15f5f;
}
<span>⑨ 选择器优先级（权重）</span>
标签选择器  1
class选择器 10
id选择器    100
内联样式    1000
!important  最高级
!important > 行内样式>ID选择器 > 类选择器 > 标签 > 通配符 > 继承 > 浏览器默认属性</pre>
          <h3>
            4、类选择器的命名建议
          </h3>
          <pre>
命名className时，应当以其作用、功能来命名，而不要使用没有语义化或者以颜色、左右空间位置的文字来命名。
<span>① 1、对于布局，即用.g-作为前缀，通常有以下推荐的写法。</span>
头部： header或head
主体： body
尾部：footer或foot
主栏： main
侧栏：side
盒容器： wrap或box
主栏子容器：mainc
侧栏子容器：sidec
<span>② 对于模块，即.m-作为前缀。元件，.u-作为前缀，通常有下面推荐的写法。</span>
导航： nav
子导航：subnav
菜单：menu
选项卡：tab
标题区：head或title
内容区：body或content
列表：list
表格：table
表单：form
排行：top
热点：hot
登录：login
标志：logo
广告：adervertise
搜索：search
幻灯：slide
帮助：help
新闻：news
下载：download
注册：register或regist
投票：vote
版权:copyright
结果：result
按钮：button
输入：input
<span>③ 对于功能，即以.f-为前缀，通常推荐如下：</span>
清除浮动：clearboth
向左浮动：floatleft
向右浮动: floatright
溢出隐藏：overflowhidden
<span>④ 对于颜色，即以.s-为前缀，通常推荐如下：</span>
字体颜色：fontcolor
背景：background
背景颜色：backgroundcolor
背景图片：backgroundimage
背景定位：backgroundposition
边框颜色：bordercolor
<span>⑤ 对于状态，即以.z-为前缀，通常推荐如下：</span>
选中:selected
当前：current
显示：show
隐藏：hide
打开：open
关闭:close
出错：error
不可用:disabled</pre>
          <h3>5、样式重置</h3>
          <pre>
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del,
dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label,
legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header,
hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video, input {
  margin: 0;
  padding: 0;
  outline: none !important;
}
a {
  text-decoration: none !important;

}
li {
  list-style: none;
}
img {
  border: none;
}
input, textarea {
  border: none;
  resize: none;
  outline: none;
}
h1, h2, h3, h4, h5, h6 {
  font-weight: normal;
}
i {
  font-style: normal;
}
body {
  overflow-y: scroll !important;
  background: #ebeef5;
}
.fl {
  float: left !important;
}
.fr {
  float: right !important;
}
.clearfix:after {
  content: "";
  height: 0;
  display: block;
  clear: both;
  *zoom: 1
}
.hidden {
  overflow: hidden;
}
.basep {
  position: relative;
}
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'css',
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
  strong{
background-repeat: no-repeat;

  }
</style>
