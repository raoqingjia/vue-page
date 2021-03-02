<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>生活难就难在钱上</h3>
          <article>
             <p>
               最近股票市场一片绿，我也损失近四千，我也是真TM的沉不住气，养气功夫不到家啊！
             </p>
             <p>对于九月份即将失业的我，钱现在对我来说实在是太重要了，今天又算了一下失业后要交纳的个人报销费用，真心不少啊！
               挣钱是真TM的难，未来花钱的地方是真多！心情相当不美丽，自我调压能力有点低！
             </p>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'makeMoneySoHard',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    methods: {
      toggle(){

      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  article p{
    margin-top:10px;
  }
  article p span{
    text-decoration:underline
  }
  article p img{
    display: block;
    height: 100%;
    margin: 0 auto;
  }
</style>
