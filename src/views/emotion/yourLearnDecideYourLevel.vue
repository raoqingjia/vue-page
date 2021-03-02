<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>有点顿悟，还点有些迷茫！</h3>
          <article>
             <p>
              写这篇文章的背景是我BBoss的第二年esop开始重构，老大们天天开会，小弟们天天改代码，而我则开始为辞职前准备，疯狂的复习所有的前端知识。
               老大们也在学习，为开会准备资料；而他们更多的是去了解什么叫区块链，什么叫人工智能，什么叫大数据，如何将这些前沿的技术融入到
               自己的项目中好去忽悠客户掏钱。
             </p>
            <p>
              这让我明白一个道理，我复习的再牢靠，我会的技术再多，我也只是个代码实施者。我所学习的方向只让我成长为一个合格的码农，走到终点也仅仅是个CTO，
              我不知道这是不是我想要！我知道我不想以后的每天都是在写代码，这样会腻的，等我也谢顶成为油腻大叔的时候我该何去何从？
            </p>
            <p>暂且先一句："30岁之前学技术，30岁后学习思维" 聊以安慰吧！</p>
            <p>
            </p>

          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'yourLearnDecideYourLevel',
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
