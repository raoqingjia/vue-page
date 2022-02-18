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
java.lang.String 、java.lang.StringBuffer 、java.lang.StrungBuilder  处理字符串常用的有三个类
三者共同之处:都是final类,不允许被继承
StringBuffer是线程安全，可以不需要额外的同步用于多线程中;
StringBuilder是非同步,运行于多线程中就需要使用着单独同步处理，但是速度就比StringBuffer快多了;
StringBuffer与StringBuilder两者共同之处:可以通过append、indert进行字符串的操作。
String实现了三个接口:Serializable、Comparable< String>、CarSequence
StringBuilder只实现了两个接口Serializable、CharSequence，相比之下String的实例可以通过compareTo方法进行比较，其他两个不可以

执行速度，
在这方面运行速度快慢为：StringBuilder > StringBuffer > String
String最慢的原因：String为字符串常量，而StringBuilder和StringBuffer均为字符串变量，即String对象一旦创建之后该对象是不可更改的，但后两者的对象是变量，是可以更改的

线程安全
在线程安全上，StringBuilder是线程不安全的，而StringBuffer是线程安全的
如果一个StringBuffer对象在字符串缓冲区被多个线程使用时，StringBuffer中很多方法可以带有synchronized关键字，所以可以保证线程是安全的，但StringBuilder的方法则没有该关键字，所以不能保证线程安全，有可能会出现一些错误的操作。所以如果要进行的操作是多线程的，那么就要使用StringBuffer，但是在单线程的情况下，还是建议使用速度比较快的StringBuilder

总结　
String：适用于少量的字符串操作的情况
StringBuilder：适用于单线程下在字符缓冲区进行大量操作的情况
StringBuffer：适用多线程下在字符缓冲区进行大量操作的情况</pre>
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
