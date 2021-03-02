<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>
            一、概括
          </h3>
          <pre>
URI、URL和URN
URI ：Uniform Resource Identifier，统一资源标识符；
URL：Uniform Resource Locator，统一资源定位符；
URN：Uniform Resource Name，统一资源名称。
其中，URL,URN是URI 的子集。</pre>
          <h3>
            2、通俗说法
          </h3>
          <pre>
举个例子，有一家公司的总经理，他的头衔，北京XXX公司总经理 张三，还有他的办公室地址，北京市海淀区长安街35号北京XXX公司总经理办公室，他的朋友都知道北京XXX公司的总经理是一个叫张三的人，那么，这个头衔就和张三对应起来了，只要一说到这个头衔，大家都知道说的是张三，反应到网络世界，这个头衔就叫做URI，只要你给我一个URI，我就知道它代表了什么，比如，http://www.sina.com.cn代表了新浪网，URI就是网络资源的头衔，通过URI标记可以把网络世界里面的每一个事物都加以标记并区分开来。
可是如果去找张三见一面，你做得到吗？你肯定做不到，因为你不知道他的地址，虽然你有他的URI头衔，但是除此以外，你对他具体的情况一无所知，于是你要定位到他，你就必须得到他的办公室地址，通过“北京市海淀区长安街35号北京XXX公司总经理办公室”这个地址，你就找到了张三。反应到网络世界，网络世界里面的每一个资源不光有自己的头衔，还要能够被人访问，被人找到，所以，网络地址是必须的，否则，这个网络资源的存在没有任何意义，这个地址就叫做URL。
URI是知道你的名字，url知道你家的确切地址可以找到你
URI强调的是给资源标记命名，URL强调的是给资源定位，但是你会发现，URL显然比URI包含信息更多，我通过URL也可以知道张三是总经理，并且我还知道了他的地址，所以大多数情况下大家觉得给一个网络资源分别命名和给出地址太麻烦，干脆就用地址既当地址用，又当标记名用，所以，URL也充当了WWW万维网里面URI的角色，但是他比URI多了一层意义，我不光知道你叫什么，我还知道你在哪里。我们在浏览器输入的都是URL，因为我们输入的目的是为了找到某一个资源，当然你输入的是URI也是没错的，因为URL也是URI。
总结：URI标记了一个网络资源，仅此而已；  URL标记了一个WWW互联网资源（用地址标记），并给出了他的访问地址。
</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'getDate',
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

</style>
