<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <img src="../../img/java/spring-unkown.png" height="80px" width="800px">
          <pre>
Springcloud：spring-cloud-starter-netflix-eureka-client 版本显示unknown的问题

pom文件里加上下面的代码就行，固定springcloud组件的版本
 < dependencyManagement>
    < dependencies>
        < dependency>
            < groupId>org.springframework.cloud< /groupId>
            < artifactId>spring-cloud-dependencies< /artifactId>
            < version>Finchley.RELEASE< /version>
            < type>pom< /type>
            < scope>import< /scope>
        < /dependency>
    < /dependencies>
< /dependencyManagement>
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'springUnknown',
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
