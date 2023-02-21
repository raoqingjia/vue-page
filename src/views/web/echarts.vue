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
          <h3>文档常用链接</h3>
          <pre>echarts相关优秀项目网站
https://www.makeapie.cn/
https://pie.antcode.net/
https://echarts.apache.org/zh/option.html
https://www.isqqw.com/#/homepage
http://www.ppchart.com/
https://www.hcharts.cn/

可以借鉴的案例
Echarts图形-扩展属性：航线图的线条以及图标修改
https://wiki.smartbi.com.cn/pages/viewpage.action?pageId=76679914
Echarts 主题修改，可以作为自定义图表示例
https://echarts.apache.org/zh/theme-builder.html
地图、航线与柱状图关联展示
https://www.makeapie.cn/echarts_content/xlw6cwVrpX.html
地图带阴影，散点图，航线
https://www.makeapie.cn/echarts_content/xr5cqmiBBf.html

Echarts官网Json数据获取方式
1、network数据
2、拿图中的数据举例吧，你只需要先拿到 data/asset/data/product.json
然后在前面拼上 http://echarts.baidu.com/
得到的完整地址是 http://echarts.baidu.com/data/asset/data/product.json </pre>
          <h3>ECharts GL</h3>
          <pre>ECharts GL （后面统一简称 GL）为 ECharts 补充了丰富的三维可视化组件，这篇文章我们会简单介绍如何基于 GL 实现一些常见的三维可视化作品。
echarts-gl 中使用的地图类型同 geo 组件相同(ECharts 中提供了两种格式的地图数据，一种是可以直接 script 标签引入的 js 文件，引入后会自动注册地图名字和数据。还有一种是 JSON 文件，需要通过 AJAX 异步加载后手动注册。)
npm install echarts -S
npm install echarts-gl -S</pre>
          <h3>echarts-mapJson</h3>
          <pre>echarts的地图数据格式是GeoJSON
https://geojson.org/
GeoJSON是一种对各种地理数据结构进行编码的格式，基于Javascript对象表示法(JavaScript Object Notation, 简称JSON)的地理空间信息数据交换格式。GeoJSON对象可以表示几何、特征或者特征集合。

中国地图GeoJSON数据
https://geojson.cn/
https://www.hcharts.cn/mapdata
https://hxkj.vip/demo/echartsMap/
https://datav.aliyun.com/portal/school/atlas/area_selector
(2022年11月datav.aliyun.com生成的china数据在map3d和geo3d上是无法显示名称的，但是省份或者市是可以的)

echarts GeoJSON格式的 js或json 世界地图等数据下载
https://github.com/apache/echarts/tree/master/test/data/map/js
https://github.com/apache/echarts/tree/master/test/data/map/json</pre>
          <h3>Echarts地图加载慢的问题</h3>
          <pre>前提了解：ECharts 中提供了两种格式的地图数据，一种是可以直接 script 标签引入的 js 文件，引入后会自动注册地图名字和数据。还有一种是 JSON 文件，需要通过 AJAX 异步加载后手动注册

1、生产反映加载地图项目时很慢，有个6M的文件刷新就会加载，使用打包分析的工具发现都是echarts的中国地图的json文件在打包时被打到了chunkjs里面
经过多种尝试，发现之前使用的require引入的json文件，将require改成使用axios请求的方式去引入之后，重新打包，不会再将json文件打到chunkjs里去，成功解决了这个问题

2、开发项目中 需要使用到全国地图，当添加china.json（文件大小50kb+）的时候很卡，图表加载总是好几秒才出来。而且还会阻塞后面的图表渲染。也就是程序阻塞了
第一种办法：页面初始加载的时候 预加载 china.json文件 ，使用ajax请求，可是每次刷新图表都会重新加载一次china.json
第二种办法：这里就要预习到js堆栈的问题了，使用setTimeout(()=>{},0)包裹图表函数。让地图最后渲染（因为它比较卡）。这样页面速度就瞬间提升了。而且不会重复加载文件。
          </pre>
          <h3>Echart世界地图文字汉化</h3>
          <pre>下载的世界地图注册文件为英文的国家名称，为提升用户体验修改为中文的国家名称及中文的数据提示。
实现思路
1 - 从官网下载world.json地图注册文件
2 - 将注册文件中的英文名映射为中文名
3 - 将映射后的注册文件进行地图注册
具体实现
1 - 获取world.json文件
2 - 引入映射文件（根据要显示中文/英文，映入不同的映射文件，目前Echarts地图注册文件支持215个国家的显示。）
import {mapZHName} from "./data/mapZHName"
3 - 数据库地图映射
formatWorldMapToZH(data) {
  let zhFeatures = [];
  if (data.features) {
    zhFeatures = data.features.map(item => {
      if (mapZHName[item.properties.name]){
        item.properties.name = mapZHName[item.properties.name];
      }
      return item;
    })
  }
  data.features = zhFeatures
  return data;
}
4 - 注册地图
initWorldMap() {
  if (!this.worldMap){
    axios.get(worldMap)
      .then(res => {
        // 地图映射
        this.worldMap = this.formatWorldMapToZH(res.data);
        let myChart = this.echarts.init(document.getElementById('worldMap'));
      	this.echarts.registerMap('world', this.worldMap);
      })
  }
},
映射文件mapZHName.js
export let mapZHName = {
  'Afghanistan': '阿富汗',
  'Angola': '安哥拉',
  'Albania': '阿尔巴尼亚',
  'United Arab Emirates': '阿联酋',
  'Argentina': '阿根廷',
  'Armenia': '亚美尼亚',
  'Australia': '澳大利亚',
  'Austria': '奥地利',
  'Azerbaijan': '阿塞拜疆',
  'Burundi': '布隆迪',
  'Belgium': '比利时',
  'Benin': '贝宁',
  'Burkina Faso': '布基纳法索',
  'Bangladesh': '孟加拉',
  'Bulgaria': '保加利亚',
  'Belarus': '白俄罗斯',
  'Belize': '伯利兹',
  'Bermuda': '百慕大',
  'Bolivia': '玻利维亚',
  'Brazil': '巴西',
  'Brunei': '文莱',
  'Bhutan': '不丹',
  'Botswana': '博茨瓦纳',
  'Canada': '加拿大',
  'Switzerland': '瑞士',
  'Chile': '智利',
  'China': '中国',
  'Cameroon': '喀麦隆',
  'Colombia': '哥伦比亚',
  'Costa Rica': '哥斯达黎加',
  'Cuba': '古巴',
  'Cyprus': '塞浦路斯',
  'Germany': '德国',
  'Djibouti': '吉布提',
  'Denmark': '丹麦',
  'Algeria': '阿尔及利亚',
  'Ecuador': '厄瓜多尔',
  'Egypt': '埃及',
  'Eritrea': '厄立特里亚',
  'Spain': '西班牙',
  'Estonia': '爱沙尼亚',
  'Ethiopia': '埃塞俄比亚',
  'Finland': '芬兰',
  'Fiji': '斐济',
  'France': '法国',
  'Gabon': '加蓬',
  'United Kingdom': '英国',
  'Georgia': '格鲁吉亚',
  'Ghana': '加纳',
  'Guinea': '几内亚',
  'Gambia': '冈比亚',
  'Greece': '希腊',
  'Greenland': '格陵兰',
  'Guatemala': '危地马拉',
  'Guyana': '圭亚那',
  'Honduras': '洪都拉斯',
  'Croatia': '克罗地亚',
  'Haiti': '海地',
  'Hungary': '匈牙利',
  'Indonesia': '印度尼西亚',
  'India': '印度',
  'Ireland': '爱尔兰',
  'Iran': '伊朗',
  'Iraq': '伊拉克',
  'Iceland': '冰岛',
  'Israel': '以色列',
  'Italy': '意大利',
  'Jamaica': '牙买加',
  'Jordan': '约旦',
  'Japan': '日本',
  'Kazakhstan': '哈萨克斯坦',
  'Kenya': '肯尼亚',
  'Kyrgyzstan': '吉尔吉斯斯坦',
  'Cambodia': '柬埔寨',
  'Korea': '韩国',
  'Kuwait': '科威特',
  'Lebanon': '黎巴嫩',
  'Liberia': '利比里亚',
  'Libya': '利比亚',
  'Sri Lanka': '斯里兰卡',
  'Lesotho': '莱索托',
  'Lithuania': '立陶宛',
  'Luxembourg': '卢森堡',
  'Latvia': '拉脱维亚',
  'Morocco': '摩洛哥',
  'Moldova': '摩尔多瓦',
  'Madagascar': '马达加斯加',
  'Mexico': '墨西哥',
  'Macedonia': '马其顿',
  'Mali': '马里',
  'Myanmar': '缅甸',
  'Montenegro': '黑山',
  'Mongolia': '蒙古',
  'Mozambique': '莫桑比克',
  'Mauritania': '毛里塔尼亚',
  'Malawi': '马拉维',
  'Malaysia': '马来西亚',
  'Namibia': '纳米比亚',
  'New Caledonia': '新喀里多尼亚',
  'Niger': '尼日尔',
  'Nigeria': '尼日利亚',
  'Nicaragua': '尼加拉瓜',
  'Netherlands': '荷兰',
  'Norway': '挪威',
  'Nepal': '尼泊尔',
  'New Zealand': '新西兰',
  'Oman': '阿曼',
  'Pakistan': '巴基斯坦',
  'Panama': '巴拿马',
  'Peru': '秘鲁',
  'Philippines': '菲律宾',
  'Papua New Guinea': '巴布亚新几内亚',
  'Poland': '波兰',
  'Puerto Rico': '波多黎各',
  'Portugal': '葡萄牙',
  'Paraguay': '巴拉圭',
  'Qatar': '卡塔尔',
  'Romania': '罗马尼亚',
  'Russia': '俄罗斯',
  'Rwanda': '卢旺达',
  'Saudi Arabia': '沙特阿拉伯',
  'Sudan': '苏丹',
  'Senegal': '塞内加尔',
  'Sierra Leone': '塞拉利昂',
  'El Salvador': '萨尔瓦多',
  'Somalia': '索马里',
  'Suriname': '苏里南',
  'Slovakia': '斯洛伐克',
  'Slovenia': '斯洛文尼亚',
  'Sweden': '瑞典',
  'Swaziland': '斯威士兰',
  'Syria': '叙利亚',
  'Chad': '乍得',
  'Togo': '多哥',
  'Thailand': '泰国',
  'Tajikistan': '塔吉克斯坦',
  'Turkmenistan': '土库曼斯坦',
  'Trinidad and Tobago': '特立尼达和多巴哥',
  'Tunisia': '突尼斯',
  'Turkey': '土耳其',
  'Uganda': '乌干达',
  'Ukraine': '乌克兰',
  'Uruguay': '乌拉圭',
  'United States': '美国',
  'Uzbekistan': '乌兹别克斯坦',
  'Venezuela': '委内瑞拉',
  'Vietnam': '越南',
  'Vanuatu': '瓦努阿图',
  'Yemen': '也门',
  'South Africa': '南非',
  'Zambia': '赞比亚',
  'Zimbabwe': '津巴布韦',
  'Liechtenstein':'列支敦士登',
  'Serbia':'塞尔维亚',
  "Aland": "奥兰群岛",
  "Andorra": "安道尔",
  "American Samoa": "美属萨摩亚",
  "Antigua and Barb.": "安提瓜和巴布达",
  "Bahrain": "巴林",
  "Bahamas": "巴哈马",
  "Bosnia and Herz.": "波斯尼亚和黑塞哥维那",
  "Barbados": "巴巴多斯",
  "Central African Rep.": "中非",
  "Dem. Rep. Congo": "刚果民主共和国",
  "Congo": "刚果",
  "Comoros": "科摩罗",
  "Cape Verde": "佛得角",
  "Curaçao": "库拉索",
  "Cayman Is.": "开曼群岛",
  "Czech Rep.": "捷克",
  "Dominica": "多米尼克",
  "Falkland Is.": "福克兰群岛",
  "Faeroe Is.": "法罗群岛",
  "Micronesia": "密克罗尼西亚联邦",
  "Guinea-Bissau": "几内亚比绍",
  "Eq. Guinea": "赤道几内亚",
  "Grenada": "格林纳达",
  "Guam": "关岛",
  "Isle of Man": "马恩岛",
  "Br. Indian Ocean Ter.": "英属印度洋领地",
  "Jersey": "泽西岛",
  "Kiribati": "基里巴斯",
  "Lao PDR": "老挝",
  "Saint Lucia": "圣卢西亚",
  "Malta": "马耳他",
  "N. Mariana Is.": "北马里亚纳群岛",
  "Montserrat": "蒙特塞拉特岛",
  "Mauritius": "毛里求斯",
  "Niue": "纽埃岛",
  "Palau": "帕劳",
  "Dem. Rep. Korea":"韩国",
  "Palestine": "巴勒斯坦",
  "Fr. Polynesia": "法属波利尼西亚",
  "S. Sudan": "南苏丹",
  "Singapore": "新加坡",
  "Saint Helena":"圣赫勒拿",
  "Solomon Is.": "所罗门群岛",
  "St. Pierre and Miquelon": "圣皮埃尔和密克隆群岛",
  "São Tomé and Principe": "圣多美和普林西比",
  "Seychelles": "塞舌尔",
  "Turks and Caicos Is.": "特克斯和凯科斯群岛",
  "Timor-Leste": "东帝汶",
  "Tonga": "汤加",
  "Tanzania": "坦桑尼亚",
  "St. Vin. and Gren.": "圣文森特和格林纳丁斯",
  "U.S. Virgin Is.": "美属维尔京群岛",
  "Samoa": "萨摩亚",
  "W. Sahara":"西撒哈拉",
  "Fr. S. Antarctic Lands":"马提尼克岛",
  "Côte d'Ivoire":"科特迪瓦",
  "N. Cyprus":"东塞浦路斯",
  "Dominican Rep.": "多米尼加",
  "Heard I. and McDonald Is.":"赫德岛和麦克唐纳群岛",
  "Siachen Glacier":"锡亚琴冰川",
  "S. Geo. and S. Sandw. Is.":"南乔治亚岛与南桑威奇群岛"
};</pre>
          <h3>Option的配置的通用配置</h3>
          <pre>
backgroundColor                                     背景色

myChart.clear();                                    清空数据缓存
myChart.setOption(option);                          重新更新配置

new echarts.graphic.LinearGradient(a,b,c,d,arr)     设置颜色渐变效果
a ,b,c,d为0，1
a:1 arr中的颜色右到左
c:1 arr中的颜色左到右
b:1 arr中的颜色下到上
d:1 arr中的颜色上到下
具体用法
itemStyle: {
	color: new echarts.graphic.LinearGradient(
		0, 1, 0, 0,
		[
			{offset: 0, color: '#17CC8C'},
			{offset: 0.37, color: '#0D9BFC'},
			{offset: 0.67, color: '#38D7F4'},
			{offset: 1, color: '#666'}
		]
	)
}
 </pre>
          <h3>tooltip  提示框组件的通用介绍</h3>
          <pre>提示框组件可以设置在多种地方
可以设置在全局，即 tooltip
可以设置在坐标系中，即 grid.tooltip、polar.tooltip、single.tooltip
可以设置在系列中，即 series.tooltip
可以设置在系列的每个数据项中，即 series.data.tooltip
. show                     是否显示提示框组件
. trigger                  触发类型   item 数据项图形触发，主要在散点图，饼图等无类目轴的图表
                           axis坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
                           none什么都不触发
. formatter                提示框浮层内容格式，支持字符串和回调函数,例如 formatter: '{b0}: {c0}< br/>{b1}: {c1}'
. backgroundColor          提示框浮层的背景颜色
. borderColor              提示框浮层的边框颜色
. borderWidth              提示框浮层的边框宽
. padding                  提示框浮层内边距，单位px，默认各方向内边距为
. position                 提示框浮层的位置，默认不设置位置会跟随鼠标的位置，放置在容器正中间position: ['50%', '50%']
. triggerOn                提示框触发的条件，mousemove鼠标移动时触发click点击时触发mousemove|click同时鼠标移动和点击时触发
. alwaysShowContent        boolean  是否永远显示提示框内容，默认情况下在移出可触发提示框区域后 一定时间 后隐藏
. showDelay                浮层显示的延迟，单位为 ms，默认没有延迟，也不建议设置。在 triggerOn 为 'mousemove' 时有效。
. textStyle                提示框浮层的文本样式
                  . color        文字的颜色
                  . fontStyle    字体格式
                  . fontWeight   字体粗细程度
                  . lineHeight   字体行高
. axisPointer              坐标轴指示器配置项
            https://echarts.apache.org/zh/option.html#tooltip.axisPointer
          </pre>
          <img src="../../img/echarts/legend.png" width="700" height="380">
          <h3>legend  图例组件</h3>
          <pre>
. show                   boolean 是否展示
. left                   string、number图例组件离容器左侧的距离
. top                    string、number图例组件离容器顶部的距离
. width                  string、number图例组件的宽度默认自适应
. orient                 图例列表的布局朝向 horizontal（横）、vertical（竖）
. align                  图例标记和文本的对齐 auto、left、right
. padding                number、Array图例内边距
. itemGap                number 图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔
. itemWidth              number 图例标记的图形宽度
. itemHeight             number 图例标记的图形高度
. selectedMode           string boolean 控制是否可以通过点击图例改变系列的显示状态。默认开启图例选择，可以设成 false 关闭
. textStyle              图例中的文本样式
            . color            文字的颜色
            . fontStyle        字体格式
            . fontWeight       字体粗细程度
            . lineHeight       字体行高
. data                   图例的数据数组，如果 data 没有被指定，会自动从当前系列中获取。多数系列会取自 series
                         data: [{
                            name: '系列1',
                            // 强制设置图形为圆。
                            icon: 'circle',  //triangle三角、roundRect圆角矩形、rect矩形、diamond菱形、pin水滴、arrow none
                            textStyle: {
                              color: 'red'  // 设置文本为红色
                            }
                        }]</pre>
          <img src="../../img/echarts/grid.png" width="700" height="400">
          <h3>grid 组件在容器中的位置</h3>
          <pre>
. left: '5%',
. right: '5%',
. top: '5%',
. bottom: '18%',
. show: true,
. borderColor:'#fff'

坐标轴位置布局,也就是上图，一个区域展示两个坐标轴的效果配置
grid:[
    {x: '7%', y: '20%', width: '38%', height: '60%'},
    {x2: '7%', y: '20%', width: '38%', height: '60%'}
],
 xAxis: [//X轴各图标属性
    {gridIndex: 0, type: 'category',data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']},
    {gridIndex: 1, type: 'category',data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']},
],
yAxis: [
    {gridIndex: 0, type: 'value'},
    {gridIndex: 1, type: 'value'},
],
series: [
  {
      data: dataAll[0],
      xAxisIndex: 0,
      yAxisIndex: 0,
      type: 'line',
      name:'折线图'
  },
  {
      data: dataAll[1],
      xAxisIndex: 1,
      yAxisIndex: 1,
      type: 'bar',
      name:'柱状图'
  }]        </pre>
          <img src="../../img/echarts/y-splitLine.png" width="700" height="350">
          <h3>yAxis同于xAxis</h3>
          <pre>
.splitLine                     坐标轴在 grid 区域中的分隔线
   . show                      是否显示分隔线
   . lineStyle.color           分隔线颜色，可以设置成单个颜色
   . lineStyle.width           分隔线线宽
   . lineStyle.type            线的类型。可选：solid dashed dotted

.axisLine                      坐标轴轴线

.axisLabel                     坐标轴刻度相关设置
   . show                      是否显示刻度标签
   . name                      坐标轴名称
   . inverse                   是否是反向坐标轴, 这个再类似进度条的横向bar的时候用的到，配成type值为category 类目轴
   . type                      坐标轴类型 value 数值轴  category 类目轴  time 时间轴
   . nameLocation              坐标轴名称显示位置 start  center   end
   . interval                  坐标轴刻度标签的显示间隔，在类目轴中有效
   . inside                    boolean，刻度标签是否朝内，默认朝外
   . rotate                    number，刻度标签旋转的角度，旋转的角度从 -90 度到 90
   . margin                    number，刻度标签与轴线之间的距离
   . formatter                 string，Function刻度标签的展示内容，例如formatter: '{value} kg'
   . fontStyle                 string，文字字体的风格。可选：normal，italic，oblique
   . fontWeight                string，number文字字体的粗细 bold bolder lighter ，100 | 200 | 300
   . fontFamily                文字的字体系列
   . fontSize                  number，文字的字体大小</pre>
          <img src="../../img/echarts/series-lineStyle.png" width="700" height="350">
          <h3>series 图标展示风格，line bar pie ... 系列</h3>
          <pre>
series-bar
. itemStyle               图形样式
      . color             柱条的颜色
      . borderColor       柱条的描边颜色
      . borderWidth       number 柱条的描边宽度，默认不描边
      . borderRadius      number Array  bar圆角半径，单位px，支持传入数组分别指定 4 个圆角半径。 如:5,  [5, 5, 0, 0]

. label                   图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
      . offset            Array是否对文字进行偏移。默认不偏移。例如：[30, 40]
      . position          标签的位置top/left/right/bottom绝对的像素值position:[10,10]相对的百分比position:['50%','50%']
      . align             文字水平对齐方式，默认自动  可选：left center right

series-line
  . symbol                标记的图形(折线上的拐点)circle,rect,roundRect,triangle,diamond,pin,arrow,none
  . symbolSize            标记的大小
  . symbolRotate          标记的旋转角度
  . symbolOffset          [0, 0] Array,标记相对于原本位置的偏移
  . smooth                是否平滑曲线显示,boolean是否开启平滑处理,number类型（取值范围 0 到 1）越小表示越接近折线段

  . itemStyle             折线拐点标志的样式
       . color 			      拐点的颜色
       . borderColor      拐点的边框
       . shadowBlur       图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果
       . shadowColor      阴影颜色
       . shadowOffsetX    阴影水平方向上的偏移距离
       . shadowOffsetY    阴影垂直方向上的偏移距离

  . label                 折线上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
       . show             是否显示标签
       . offset           [30, 40] 是否对文字进行偏移
       . formatter        标签内容格式器
       . color            文字的颜色
       . fontWeight       文字字体的粗细
       . fontSize         number文字的字体大小
       . borderColor      文字块边框颜色
       . borderWidth      描边的线宽，为 0 时无描边
       . borderType       描边线类型 solid dashed dotted

  . lineStyle             折线的样式
       . color            线的颜色
       . width            线宽
       . type             string number Array  线的类型 solid dashed dotted
       . shadowBlur       图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果
       . shadowColor      阴影颜色
       . shadowOffsetX    阴影水平方向上的偏移距离
       . shadowOffsetY    阴影垂直方向上的偏移距离

  . areaStyle 	          区域填充样式。设置后显示成区域面积图
       . color            填充的颜色
       . origin           图形区域的起始位置
       . shadowBlur       图形阴影的模糊大小


series-pie
  . selectedMode          boolean、string选中模式的配置，表示是否支持多个选中，字符串可选single,multiple分别表示单选/多选
  . color:                设置饼图颜色 ['#d52d57', '#f6c543', '#50b1d4'],
  . label                 饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称
  . show                  是否展示
  . position              标签文字的位置  outside 饼图扇区外侧 inside inside
  . formatter             标签内容格式器
  . itemStyle: {
       normal: {
         color: "#386db3", //折线点的颜色
         lineStyle: {
         color: "#386db3"  //折线的颜色
        }
    }

series-treemap
  . leafDepth:1     设置展示第几层级,默认不开启,层次更深的节点则被隐藏起来,点击则可下钻看到层次更深的节点
  . roam            是否开启拖拽漫游(移动和缩放)false：关闭 scale、zoom只能够缩放 move、pan只能够平 true 缩放和平移均可
  . nodeClick       点击节点后的行为，false节点点击无反应 zoomToNode点击节点后缩放到节点 link 点击节点后会进行超链接跳转
  . drillDownIcon   当节点可以下钻时的提示符,只能是字符。
  . emphasis        高亮状态配置
  . top :'5%',
  . height: '72%',
  . width: '90%',
  . color: ['transparent'],</pre>
          <h3>Echarts地图的label到底怎么居中</h3>
          <pre>
在geojson注册的时候，可以定义 properties.cp 属性，实现文本的坐标自定义，实现居中。
echarts.registerMap('china',
    "type": "FeatureCollection",
    "features": [{
        "id": "650000",
        "type": "Feature",
        "geometry": {
            "type": "Polygon",
            "coordinates": [],
            "encodeOffsets": [[, ]]
        },
        "properties": {
            "cp": [87.617733, 43.792818],
            "name": "新疆",
            "childNum":
        }
    }],
    "UTF8Encoding": true
});
上面的写法不对，但是思路是对的，因为  registerMap引入的肯定是提前写好的chinaMap.json文件，所以改也是取json文件里改而不是单独的改registerMap里面配置
json文件里只改properties.cp 这个字段就行，这里[]里表示的是经纬度，我记不住经纬度概念就用x y轴表示了
 {
  "type": "Feature",
  "id": "640000",
  "properties": {
    "id": "640000",
    "cp": [
      106.278179,  /* x轴 大数往左，小数往右   地域面积比较小的每次加减0.5左右就差不多了 */
      37.26637    /*  y轴 大数向上，小数向下  */
    ],
    "name": "宁夏",
    "childNum": 2
},
如果只改中国的31个省份还好，工作量不大，要是地市级也改成居中的工作量就大了还是网上找现成的json文件吧 </pre>
          <h3>echarts wordCloud词云图总结使用说明</h3>
          <pre>
1、安装echarts 和 echarts-wordcloud
npm install echarts --save
npm install echarts-wordcloud --save
"echarts": "^5.2.2",
"echarts-wordcloud": "^2.0.0"
2、项目中引入echarts 和 echarts-wordcloud
import echarts from 'echarts'
import 'echarts-wordcloud

3、Echarts cloud 文字随机颜色不生效
与echarts的版本有关，新版的echarts不再需要 normal，直接写textStyle就好了
textStyle: {
  normal: {
   fontFamily: '微软雅黑',
   color: function () {
       return 'rgb(' + [
         Math.round(Math.random() * 250),
         Math.round(Math.random() * 250),
         Math.round(Math.random() * 250)
       ].join(',') + ')';
     }
   }
 },
去掉
textStyle: {
  fontFamily: '微软雅黑',
  color: function () {
      return 'rgb(' + [
        Math.round(Math.random() * 250),
        Math.round(Math.random() * 250),
        Math.round(Math.random() * 250)
      ].join(',') + ')';
    }
}

4.上代码
initCharts() {
    const maskImage = new Image(); //可以根据图片形状生成有形状的词云图,这时候shape就别用了
    maskImage.src = require('@/img/wordCloud-bg.jpeg');
    const option = {
        title: {
            text: '热点分析',
            link: 'https://www.baidu.com/s?wd=' + encodeURIComponent('ECharts'),
            x: 'center',
            textStyle: {
                fontSize: 24
            }

        },
        backgroundColor: '#F7F7F7',
        tooltip: {
            show: true
        },
        toolbox: {
            feature: {
                saveAsImage: {
                    iconStyle: {
                        normal: {
                            color: '#FFFFFF'
                        }
                    }
                }
            }
        },
        series: [{
            name: '热点分析 title',
            type: 'wordCloud',
            //size: ['9%', '99%'],
            // 词的大小，最小12px，最大60px，可以在这个范围调整词的大小
            sizeRange: [6, 66],
            //textRotation: [0, 45, 90, -45],
            // 每个词旋转的角度范围
            rotationRange: [-45, 90],
            // 词间距，数值越小，间距越小，这里间距太小的话，会出现大词把小词套住的情况，比如一个大的口字，中间会有比较大的空隙，这时候他会把一些很小的字放在口字里面，这样的话，鼠标就无法选中里面的那个小字
            gridSize: 8,
            // shape这个属性虽然可配置，但是在词的数量不太多的时候，效果不明显，它会趋向于画一个椭圆
            // shape: 'circle',
            textPadding: 0,
            // maskImage 这个是可以自定义背景图片的，词云会按照图片的形状排布，所以有形状限制的时候，最好用背景图来实现，而且，这个背景图一定要放base64的，不然词云画不出来
            // maskImage: maskImage,
            // 布局的时候是否有动画
            // layoutAnimation: true,
            autoSize: {
                enable: true,
                minSize: 6
            },
            // 这是全局的文字样式，相对应的还可以对每个词设置字体样式
            textStyle: {
                // fontFamily: 'sans-serif',
                // fontWeight: 'bold',
                // 颜色可以用一个函数来返回字符串
                color: function () {
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: '#FF6A00'
                }
            },
            // 数据必须是一个数组，数组是对象，对象必须有name和value属性
            data: [{
                name: 'Farrah Abraham',
                value: 366,
                // 这里就是对每个字体的样式进行设置
                textStyle: {
                    color: 'rgba(249,8,8, 0.5)'
                }
            }]
        }]
    };
    option.series[0].data = wordCloudCharts;
    var myChart = echarts.init(document.getElementById("wordCloud"));
    myChart.setOption(option);
    myChart.on('click', function (params) {
        //alert((params.name));
        window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
    });
}          </pre>
          <wordCloud></wordCloud>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import wordCloud from '@/views/component/charts/wordCloud';
  export default {
      name: 'echarts',
      components: {'wordCloud': wordCloud},
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
  strong{
       background-repeat: no-repeat;

  }
</style>
