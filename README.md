
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
