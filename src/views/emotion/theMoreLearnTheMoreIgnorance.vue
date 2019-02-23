<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>未来的我该何去何从？选择比勤奋更重要？技术债何时能还完？</h3>
          <article>
             <p>
               这一周是前端开会最多的一次，吃完饭开会，开完会吃饭。
             </p>
            <p>
               ESOP项目老界面看来是要走到尽头了，是时候在再一次重构了，我TM连业务逻辑都不知道就让我花原型图，这不是要我命吗！既然是重构，那就推翻了从头开始，老业务、新框架、新界面、新技术；是Vue还是Angular，是Angular4.0还是5.0，是bootstrap、element还是Ant design of Angular,
              是bootstrap3.0还是4.0，一个个的测试，我的天啊，新的技术真新啊，IE9都不支持！
            </p>
            <p>
               时间紧任务重，三月份开始，六月份上线，心里默想玩蛋去吧。前端总共才两个半人，玩命的节奏。
              招人吧，简历一个个写的项目经验比我都多，心理暗想我当年的简历怎么写的，编都不会编。看着人家的简历，
              人家会不会两说，我得先看看我会不会啊，本以为自己弄了个个人网站，笔记
              记录的也不少啊，vue、angular1.0、bootstrap、gulp、npm都了解一些，也算不错了。可看了人家的项目经历后我才发现自己的技术债多半是换不上了，
              angular4.0-5.0、app-ui框架、rect；面试一个东北哥们后，心里拔凉拔凉的，并不是他技术太好，但人家了解的太多啦！
            </p>
            <p>过年回来后还感觉无所事事，现在才明白不是任务少，是自己没意识到还有那么多的新知识没去了解，没去尝试！越是了解越是感觉，学途路漫漫！</p>

          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'theMoreLearnTheMoreIgnorance',
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
    text-indent: 20px;
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
