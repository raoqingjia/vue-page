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
id         主键自增
title      标题可为空
content    显示内容不可为空
restStyle  重置样式
category   类别可分高、中、低三个级别，或者按一类信息，二类信息区分
level      权限，可能不是所有公告都对外开放的，也可能分级别展示的
createTime 创建时间
createBy   创建人
updateTime 修改时间
updateBy   修改人

CREATE TABLE  omss_rds.web_notice (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `TITLE`  varchar(32)   COMMENT '标题',
  `CONTENT` varchar(255) NOT NULL COMMENT '显示内容',
  `REST_STYLE` varchar(255)  COMMENT '样式重置',
  `CATEGORY` int(1)     COMMENT '定义为类别或者级别或者集客、运维',
  `LEVEL` varchar(32)    DEFAULT NULL COMMENT '按级别分配是否展示',
  `CREATE_TIME` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0)  COMMENT '创建时间',
  `CREATE_BY`  varchar(64)   DEFAULT NULL  COMMENT '创建人',
  `UPDATE_TIME` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0)  COMMENT '修改时间',
  `UPDATE_BY`  varchar(64)  DEFAULT NULL  COMMENT '修改人',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='页面公告信息';</pre>
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
