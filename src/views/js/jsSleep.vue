<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <img src="../../img/js/sleep01.png" width="1200px" height="800px">
          <pre>
场景是我有一个submitOrder的提单方法，这个方法里面有 2、3、4处都是弹窗后需要用户确定后才能进行后续的逻辑
如果在每个弹窗确定方法里写回调函数着实是太麻烦，后来就想能不能中断一下，等用户确认之后在继续后面的代码逻辑
想到的是submitOrder加一个async 和 await，之后在await的promise方法里用setInterval中断一下
sleep代码
sleep(millisecond) {
  return new Promise((resolve, reject) => {
    const interval: any = setInterval(() => {
      if (this.isVisibleModel === false) {  // 说明弹窗关闭了，执行后续代码
        window.clearInterval(interval);
        console.log('setInterval 结束');
        resolve();
      }
      console.log('setInterval 执行');
    }, millisecond);
  });
}
后来想到while也有中断代码的作用，我再sleep里面尝试了用while，结果是整个程序卡死了</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                created: this.$route.query.created,
                title: this.$route.query.name
            }
        },
        mounted() {
            this.$nextTick(function () {
            })
        },
        methods: {
            toggle() {

            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
