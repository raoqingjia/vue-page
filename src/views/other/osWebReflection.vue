<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <img src="../../img/osWebReflection.jpeg" height="280px" width="500px">
          <pre>
情况描述：11月23日回归os项目仍发现os-web前端出现一堆问题，距离9月27号上线后，经历10月，11月两个需求迭代，距离11月25号大版本上线还有2天
问题1、2、4是9月份已经上线的需求，问题应该是出在前端
问题3是9月已上线需求，后台order by改一下就行
问题5是9月已上线需求，应该是要改需求
问题6是10已月上线需求，报by zero说明取得后端信息就如此
问题7是10已月上线需求
问题8是9月上线需求，这个问题不是前端调错接口了，就是后端告诉前端的接口取错了
问题9、10 是11月上线需求，刚开发完需要前端整改

除了问题9、10是还未上线刚开发完的需求，其他的都是已经上线了还存在的问题，已经上线的需求都不能保证质量，开发流程和上线验收流程应该是有问题的，

问题分析
1）10月份零零碎碎的应该是改过一些已经上线的逻辑，是后台主动改的还是，需求让改的已经无迹可寻了
2）9月上线后到11月中旬测试一直未介入，10月份上线需求测试根本未测试过，只有开发和需求点击验证过
3）9月份开发的时候前端人员开发同时兼顾abs项目，同时开发过程缺少自检的意识，认为接口联调通过不报错即可
4）后端开发未提供文档，接口调取反复，前端充当测试，联调过程沟通存在问题，而且接口字段有点反人类
5）到底是以谁验收为准，是测试还是需求，以测试为准，测试一直未接入，以需求为准，需求能否把所有交互场景覆盖验收
6）11月初前端开发离职一人，后续前端接手对项目不熟（应该只是改的慢，倒不至于改出问题）

解决办法
1）前端后端开发增强自测意识，同时加强沟通
2）已上线的东西不能随意动，如果让改做风险评估，改了之后回归测试
3）测试入场，光靠开发自测abs在19年就吃了不少亏了

当项目存在bug的时候，别光想着如何改bug，抽空想想bug是因为什么原因出现的！！！</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
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
