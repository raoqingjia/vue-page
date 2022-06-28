<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>一、什么是Feign
Feign是Netflix开发的声明式、模板化的HTTP客户端， Feign可以帮助我们更快捷、优雅地调用HTTP API
Feign 是⼀个 HTTP 请求的轻量级客户端框架。通过 接口 + 注解的方式发起 HTTP 请求调用，面向接口编程，而不是像 Java 中通过封装 HTTP 请求报文的方式直接调用。服务消费方拿到服务提供方的接⼝，然后像调⽤本地接⼝⽅法⼀样去调⽤，实际发出的是远程的请求。让我们更加便捷和优雅的去调⽤基于 HTTP 的 API，被⼴泛应⽤在 Spring Cloud 的解决⽅案中

结合 Spring Cloud 使用方式
同样还是以获取 Feign 的 GitHub 开源项目的 Contributors 为例，结合 Spring Cloud 的使用方式有如下三步：

第一步： 引入相关 starter 依赖：org.springframework.cloud:spring-cloud-starter-openfeign

在项目的 build.gradle 文件的依赖声明处 dependencies 添加该依赖声明即可。

第二步： 在项目的启动类 XXXApplication 上添加 @EnableFeignClients 注解启用 Feign 客户端功能
第三步： 创建 HTTP 调用接口，并添加声明 @FeignClient 注解。

最后一步配置初始化客户端，这一步主要是设置请求地址（url）、编码（Encoder）、解码（Decoder）等，与原生使用方式不同的是，现在我们是通过 @FeignClient 注解配置的 Feign 客户端属性，同时请求的 URL 也是使用的 Spring MVC 提供的注解。

< dependency>
    < groupId>org.springframework.cloud< /groupId>
    < artifactId>spring-cloud-starter-openfeign< /artifactId>
< /dependency>

https://blog.csdn.net/ronshi/article/details/124036646?utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~aggregatepage~first_rank_ecpm_v1~rank_v31_ecpm-4-124036646-null-null.pc_agg_new_rank&utm_term=boot+spring+%E9%9B%86%E6%88%90feign&spm=1000.2123.3001.4430
 https://www.jianshu.com/p/59295c91dde7
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'springFeign',
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
