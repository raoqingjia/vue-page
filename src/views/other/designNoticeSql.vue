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
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='页面公告信息';

下面是对应的mapper.xml里的sql
< resultMap id="queryNoticeResultMap" type="com.bboss.omss.maintenance.bean.webPage.WebPageNotice">
    < result property="id" jdbcType="INTEGER" column="ID"/>
    < result property="title" jdbcType="VARCHAR" column="TITLE"/>
    < result property="txt" jdbcType="VARCHAR" column="TXT"/>
    < result property="restStyle" jdbcType="VARCHAR" column="RESET_STYLE"/>
    < result property="category" jdbcType="VARCHAR" column="CATEGORY"/>
    < result property="staff" jdbcType="VARCHAR" column="STAFF"/>
    < result property="createTime" jdbcType="TIMESTAMP" column="CREATE_TIME"/>
    < result property="createBy" jdbcType="VARCHAR" column="CREATE_BY"/>
    < result property="updateTime" jdbcType="TIMESTAMP" column="UPDATE_TIME"/>
    < result property="updateBy" jdbcType="VARCHAR" column="UPDATE_BY"/>
< /resultMap>
< select id="queryNotice" resultMap="queryNoticeResultMap">
    SELECT  ID , TITLE , TXT , RESET_STYLE , CATEGORY  ,STAFF , CREATE_TIME , CREATE_BY , UPDATE_TIME , UPDATE_BY
    FROM   omss_rds.web_notice   ORDER BY  UPDATE_TIME  DESC limit  #{startIndex},#{pageSize}
< /select>
< insert id="insertNotice" parameterType="com.bboss.omss.maintenance.bean.webPage.WebPageNotice">
  insert into omss_rds.web_notice (TITLE,TXT,RESET_STYLE,CATEGORY,STAFF ,CREATE_BY , UPDATE_BY )
  values (#{param.title,jdbcType=VARCHAR}, #{param.txt,jdbcType=VARCHAR}, #{param.resetStyle,jdbcType=VARCHAR},
  #{param.category,jdbcType=VARCHAR},#{param.staff,jdbcType=VARCHAR},#{param.createBy,jdbcType=VARCHAR},#{param.updateBy,jdbcType=VARCHAR})
< /insert>
< update id="updateNotice" parameterType="com.bboss.omss.maintenance.bean.webPage.WebPageNotice">
   update omss_rds.web_notice
    SET   TITLE =#{param.title} , TXT=#{param.txt}, RESET_STYLE=#{param.resetStyle} , CATEGORY=#{param.category},
    STAFF=#{param.staff} , CREATE_BY = #{param.createBy} , UPDATE_BY =#{param.updateBy}
    WHERE ID = #{param.id ,jdbcType=INTEGER}
< /update>
< delete id="deleteNotice" parameterType="INTEGER">
  delete from omss_rds.web_notice  where id = #{id,jdbcType=INTEGER}
< /delete></pre>
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
