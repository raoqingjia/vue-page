<template>
      <footer>
        <div class="inner">
            <div class="link">
              <ul >
                <li><a href="javascript:;">框架、插件网站</a></li>
                <li><a href="https://antv.vision/zh/" target="_blank">蚂蚁数据可视化</a></li>
                <li><a href="http://www.jqueryfuns.com/" target="_blank">jQuery插件网站</a></li>
                <li><a href="https://www.angular.cn/" target="_blank">Angular中文网</a></li>
                <li><a href="https://vuefe.cn/" target="_blank">Vue.js中文网</a></li>
                <li><a href="http://nodejs.cn/" target="_blank">Node.js中文网</a></li>
                <li><a href="https://www.npmjs.com/" target="_blank">npm命令查询</a></li>
                <li><a href="http://echarts.baidu.com/" target="_blank">Echarts官网</a></li>
                <li><a href="http://echarts.baidu.com/echarts2/doc/example.html" target="_blank">Echarts中文网</a></li>
                <li><a href="https://ng.ant.design/docs/introduce/zh" target="_blank">Ant Design of Angular</a></li>
                <li><a href="https://datatables.net/download/" target="_blank">datatables</a></li>
                <li><a href="https://012x.ant.design/docs/react/introduce" target="_blank">Ant Design of React</a></li>
                <li><a href="http://element-cn.eleme.io/#/zh-CN" target="_blank">Element-UI中文网</a></li>
                <li><a href="http://mint-ui.github.io/#!/zh-cn" target="_blank">Mint UI中文网</a></li>
                <li><a href="http://www.bootcss.com/" target="_blank">Bootstrap中文网</a></li>
                <li><a href="http://momentjs.com/" target="_blank">Moment.js官网</a></li>
                <li><a href="http://mockjs.com/" target="_blank">Mock.js官网</a></li>
                <li><a href="https://www.fastmock.site/#/" target="_blank">fastmock官网</a></li>
                <li><a href="http://fontawesome.dashgame.com/" target="_blank">Font Awesome字体官网</a></li>
                <li><a href="https://daneden.github.io/animate.css/" target="_blank">Animate.css</a></li>
              </ul>
              <ul>
                <li><a href="javascript:;">开发工具</a></li>
                <li><a href="https://tool.lu/" target="_blank">在线工具大全</a></li>
                <li><a href="https://codepen.io/" target="_blank">在线编辑器</a></li>
                <li><a href="http://tool.oschina.net/regex#" target="_blank">正则表达式测试</a></li>
                <li><a href="http://www.atool.org/css_less.php" target="_blank">Css代码转Less、Sass、Scss</a></li>
                <li><a href="http://www.sioe.cn/yingyong/yanse-rgb-16/" target="_blank">RGB颜色转换工具</a></li>
                <li><a href="http://tool.oschina.net/diff/" target="_blank">代码对比/归并</a></li>
                <li><a href="http://zb.yuanrenbang.com/plus/list.php?tid=8" target="_blank">证书类在线生成器</a></li>
              </ul>
              <ul >
                <li><a href="javascript:;">文档链接</a></li>
                <li><a href="https://www.w3cschool.cn/tutorial" target="_blank">W3Cschool</a></li>
                <li><a href="https://leetcode.com/" target="_blank">leetcode</a></li>
                <li><a href="http://bigerfe.com/" target="_blank">大前端面试题库</a></li>
                <li><a href="https://www.nowcoder.com/" target="_blank">牛客网</a></li>
                <li><a href="https://www.acmcoder.com/index" target="_blank">赛码网</a></li>
                <li><a href="https://edu.51cto.com/t/exam/" target="_blank"></a>51cto题库</li>
                <li><a href="https://juejin.cn/" target="_blank">掘金</a></li>
                <li><a href="https://github.com/" target="_blank">github.com</a></li>
                <li><a href="https://webpack.docschina.org/guides/getting-started/" target="_blank">webpack</a></li>
                <li><a href="http://es6.ruanyifeng.com/" target="_blank">ECMAScript 6 入门</a></li>
                <li><a href="http://www.css88.com/jqapi-1.9/category/version/1.0/" target="_blank">jQuery API中文文档</a></li>
                <li><a href="http://tool.lanrentuku.com/guifan/ui.html" target="_blank">移动端UI尺寸规范</a></li>
                <li><a href="https://cloud.tencent.com/developer/doc/1282" target="_blank">腾讯云开发文档手册（相当全）</a></li>
              </ul>
            </div>
        </div>
      </footer>
</template>

<script>

  export default {
    name: 'footernav',
    created () {

    },
    mounted() {

    },
    data () {
      return {

      }
    },
    methods:{
      toggle(){
          $('.nav').toggle();
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
