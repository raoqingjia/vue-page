<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>简介：项目中我用生成器使用promis，或者async await的时候获取数据经常发些返回的数据打印出来的结果是Promise { < pending> }
需要知道 promise 要用then接收或者async await
例如：a() 是一个Promise封装的方法方法最后retrun new Promis()....
let b = this.a(); // 定义一个变量直接a() 赋值给 b
console.log(b);  //这里就会返回 Promise {< pending>}

第一种方式 then 接收
let b = this.a();
b.then(res =>{
	//.then是接收正确返回的信息
	console.log(res) // {...}
}).catch(err =>{
	// .catch 返回报错信息
	console.log(err)
})

第二种方式 async await接收：
async c(){
	let b = await this.a()
	console.log(b)  // 现在就是正确返回了 {...}

}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'promisePending',
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
