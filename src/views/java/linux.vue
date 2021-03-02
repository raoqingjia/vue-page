<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>linux简介</h3>
          <pre>
#    超级管理员登录
$    普通用户登录
~    你所在的目录
pwd  查看当前所在的目录
i  编辑
在 vi 编辑器里,先 按一下 ESC 退出，然后 按 : 键，然后输入 wq 保存并退出的意思，再打回车，即可退出编辑状态。
cd   切换目录
cd /   切换到根目录  linux是没有系统盘符的，都是从根开始
cd home   切换到home目录
cd  .   表示当前目录
cd  ..  返回上一层目录
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'linux',
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

</style>
