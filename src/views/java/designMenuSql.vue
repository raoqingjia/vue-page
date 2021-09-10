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
新架构接口菜单地址
http://xxxx/api/initWebElemList?staffNumber=100C8000  通过staffNumber查的，我估计是通过staffNumber去查了角色，角色才是和页面关联的

1）页面菜单表设计
页面名称 menuName
页面code标识  menuCode
菜单的唯一id  menuId       主键自增
父子级菜单关联的字段  menuElemId
页面url跳转路径  menuUrl
需要区分一级，二级，三级菜单级别  menuLevel
菜单区分左右布局   layout
单独的一个菜单可能涉及特殊的逻辑  alias
菜单是否启用 enable    0 禁用  1启用
子级菜单列表字段children
子级菜单列表字段 sort  排序
当前页面菜单图标iconPath
单独的样式 cssCode
创建时间  createTime
创建人  createBy
更新时间  updateTime
更新人   updateBy

CREATE TABLE `gbss_menu`  (
  `MENU_ID`  int     NOT NULL AUTO_INCREMENT  COMMENT '唯一主键自增',
  `MENU_CODE` varchar(64)   NOT NULL   COMMENT '页面code标识',
  `MENU_NAME` varchar(128)     NOT NULL  COMMENT '页面名称 ',
  `PARENT_MENU_ID` int(20)  NULL DEFAULT NULL  COMMENT '父子级菜单关联的字段',
  `MENU_URI` varchar(256)     DEFAULT NULL  COMMENT '页面url跳转路径',
  `MENU_LEVEL` tinyint(4)      NOT NULL DEFAULT 1  COMMENT '需要区分一级，二级，三级菜单级别',
  `LAYOUT`  tinyint(4)       DEFAULT NULL  COMMENT '左右布局 1左边  2右边',
  `ENABLED` tinyint(4)      NOT NULL DEFAULT 1  COMMENT '菜单是否启用',
  `ALIAS`  varchar(64)       DEFAULT NULL  COMMENT '单独的一个菜单可能涉及特殊的逻辑',
  `SORT`   tinyint(4)         NOT NULL DEFAULT 1  COMMENT '排序',
  `CSS_CODE` varchar(128)    NULL DEFAULT NULL  COMMENT '菜单样式编码',
  `ICON_PATH` varchar(512)  NULL DEFAULT NULL  COMMENT '菜单图标地址',
  `CREATE_TIME` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0)  COMMENT '创建时间',
  `CREATE_BY`  varchar(64)   DEFAULT NULL  COMMENT '创建人',
  `UPDATE_TIME` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0)  COMMENT '修改时间',
  `UPDATE_BY`  varchar(64)  DEFAULT NULL  COMMENT '修改人',
  PRIMARY KEY (`MENU_ID`),
  UNIQUE INDEX `UK_WEB_MENU_CODE`(`MENU_CODE`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8;


2）角色和菜单关联表
RoleId   角色id
MenuId   菜单id

3）账户和角色关联
staffNumber  登录人账户
RoleId       角色id

一个人可能有多个角色，一个角色可能有多不同菜单，这样菜单有可能是重复的，菜单肯定要去重的，还要判断角色是否失效，菜单是否失效

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
