<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>
报这个错说明肯定是和pom.xml文件中的maven-compiler-plugin相关，解决办法如下

1）可能是项目所需jdk版本和你当前使用的jdk版本不一致导致的，因为我项目的pom.xml中定义了java版本为1.8，但是实际idea中run这个项目却是1.7，解决办法：更换当前jdk版本为项目所需jdk版本即可

2）pom.xml文件中的maven-compiler-plugin有类似< bootclasspath>${JAVA_HOME}/jre/lib/rt.jar:${JAVA_HOME}/jre/lib/jce.jar< /bootclasspath>这样的配置，注释了就行
  </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'colresizable',
    data () {
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
      toggle(){

      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
