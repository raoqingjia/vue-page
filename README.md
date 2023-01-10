
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
