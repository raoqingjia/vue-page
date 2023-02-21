
首页中 笔记 案例 的图片大小一致为 40*50

项目中的图片大小

token  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
git remote set-url origin https://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@github.com/raoqingjia/vue-page.git/




如果需要渲染的文本是从后台读取的，需要手动执行 Prism.highlightAll()，否则出不了效果。
watch: {
	text(newValue, oldValue){
		this.$nextTick(() => {
			Prism.highlightAll()
		})
	}
}



<p class="language-bg"> 和 <p class="pre-cmd"> 定义黑色code代码格式



<ul class="catalogue clearfix">
  <li v-for="(items,index) in catalogue"  :key="index" ><a @click="jump(index)">{{index+1}}、{{items.name}}</a></li>
</ul>
<h3></h3>
<pre></pre>

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



简历待学习
1、使用第三方包 escook/request-miniprogram 搭配 async/await 进行网络异步请求
2、autoprefixer,px2rem,rem 进行移动端适配兼容
3、文件管理中使用了 clipboard2 实现剪切板功能，使用 file-saver 实现文件批量下载
4、指标表单提交使用 lodash 进行防抖节流
5、使用nuxt实现服务器渲染, 数据预加载,
6、PrintJs报表打印组件等功能
7、支持移动端部分功能自定义等
8、ali-oss处理图片文件
9、使用pont插件及axios请求接口与后台交互调试接口
10、Qiankun微前端框架对项目重构升级
11、Video.js 开源的 HTML5 和 Flash 视频播放器
12、放 lottie 动画
13、vex-table
14、cesium 场景展示
15、vue-pdf
16、合 vue 内置的 keep-alive 组件，
17、通过 rem + flexible.js 解决手机端视口适配
18、wangeditor富文本编辑器的使用
19、exportJsoExel实现页面表单数据生成excel表格
20、使用 postcss-pxtorem、lib-flexible 进行 REM 适配
https://anseki.github.io/leader-line/
highstock,highChart,
使用 uploadify 插件解决文件上传的需求
5. 使用 ckeditor 完成富文本编辑器功能
6. 使用 lazyload 实现图片延迟加载，和 iScroll 实现上拉追加下拉刷新数据，优化页面性能，减轻服务器负载
用 nuxt.js 开发
