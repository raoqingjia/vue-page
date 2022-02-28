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
一、ENTITY
Entity（PO）　每个属性基本上都对应数据库表里面的某个字段。完全是一个符合Java Bean规范的纯Java对象，没有增加别的属性和方法。持久对象是由insert数据库创建，由数据库delete删除的。基本上持久对象生命周期和数据库密切相关。
二、VO
VO：表现层对象(View Object)，主要对应展示界面显示的数据对象，用一个VO对象来封装整个界面展示所需要的对象数据。
"为什么要使用VO：
因为当你封装JSON的时候很多时候不需要数据表里面的全部数据，且变化不定，如果有一天突然想要这个字段，又有一天想要这个表里面没有的字段，而需要通过连表或者懒加载别的表的字段，那你可以通过修改VO的属性能达到这个动态性的拓展。
三、DTO（Data Transfer Object），数据传输对象
泛指用于展示层与服务层之间的数据传输对象

其他言论
1、分为entity、vo这样或许对于前端来说比较明显，但是对于后端来说增加了工作量。我觉得可能给出这种约束的人闲得慌吧，慢慢地想把它们提出来，然后写了好多分重复地Java文件
用一个VO对象来封装整个界面展示所需要的对象数据，创建其他VO对象的时候都需要extends这个VO对

下面咱们看看阿里的规则
ContractVO.java   ContractEntity.java    ContractAddDTO.java
阿里巴巴Java开发手册中的分层领域模型规约：
DO（Data Object）：此对象与数据库表结构一一对应，通过 DAO层向上传输数据源对象。
DTO（Data Transfer Object）：数据传输对象，Service 或Manager 向外传输的对象。
BO（Business Object）：业务对象，可以由Service层输出的封装业务逻辑的对象。                     // 做过的项目里这个少见
Query：数据查询对象，各层接收上层的查询请求。注意超过2个参数的查询封装，禁止使用 Map 类 来传输。 // 就是接口请求头入参
VO（View Object）：显示层对象，通常是 Web 向模板渲染引擎层传输的对象。

领域模型命名规约：
1） 数据对象：xxxDO，xxx 即为数据表名。
2） 数据传输对象：xxxDTO，xxx为业务领域相关的名称。
3） 展示对象：xxxVO，xxx一般为网页名称。
4） POJO是 DO/DTO/BO/VO的统称，禁止命名成 xxxPOJO。

一、Entity
数据对象 XxxxEntity
用法：
以 Entity 为结尾（阿里是以 DO 为结尾）
Xxxx 与数据库表名保持一致
类中字段要与数据库字段保持一致，不能缺失或者多余
类中的每个字段添加注释，并与数据库注释保持一致
不允许有组合

二、VO(View Object)
视图对象 XxxxVO，用于展示层，它的作用是把某个指定页面（或组件）的所有数据封装起来。
用法：
不可继承自 Entity
VO 可以继承、组合其他 DTO，VO，BO 等对象
VO 只能用于返回前端、rpc 的业务数据封装对象

三、DTO(Data Transfer Object)
这个概念来源于J2EE的设计模式，原来的目的是为了EJB的分布式应用提供粗粒度的数据实体，以减少分布式调用的次数，从而提高分布式调用的性能和降低网络负载。
传输对象 XxxxDTO，是一种设计模式之间传输数据的软件应用系统。数据传输目标往往是数据访问对象从数据库中检索数据。数据传输对象与数据交互对象或数据访问对象之间的差异是一个以不具有任何行为除了存储和检索的数据（访问和存取器）。
简单来说，我们不需要把整个PO对象的全部字段传输到客户端，而是可以用DTO重新封装，传递到客户端。此时，如果这个对象用来对应界面的展现，就叫VO。
用法：
不可以继承自 Entity
DTO 可以继承、组合其他 DTO，VO，BO 等对象
DTO 只能用于前端、RPC 的请求参数

四、BO(Business Object)
业务对象 BO，可以包括一个或多个其它的对象。
例如：学生的综合情况，需要学生的基本信息、成绩等。
用法：
不可以继承自 Entity
BO 对象不得用于 controller 层

上面写的天花乱坠的，但是abs和omss项目中，起名有叫bean、dao、entity、vo的，还有entity文件夹套着vo的，还有就只有一个entity或者只有一个vo，还有的只有一个bean的，感觉这个规则就看架构师或者当初搭建项目人的习惯了</pre>
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
