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
错解
mysql的字段，unsigned int(3), 和unsinged int(6), 能存储的数值范围是否相同。如果不同，分别是多大
如果理解为int(3)最多显示3位无符号整体，int(6)最多显示6位无符号数，那就错了
unsigned属性就是将数字类型无符号化

正解
CREATE TABLE `test` (
    `id`  int(10) unsigned NOT NULL AUTO_INCREMENT,
    `id1` int(3) unsigned zerofill DEFAULT NULL,
    `id2` int(6) unsigned zerofill DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8

插入一些数据后
mysql >  select * from  test;
  id         id1         id2
   1         100       000100
   2      1000000     1000000
   3         010       000010
   4         000       000000
无论是int(3), int(6), 都可以显示6位以上的整数。但是，当数字不足3位或6位时，前面会用0补齐
int(3), int(6)的3和6代表的含义应该和unsigned zerofill搭配理解
在 int(M) 中，M 的值跟 int(M) 所占多少存储空间并无任何关系。和数字位数也无关系 int(3)、int(4)、int(8) 在磁盘上都是占用 4 btyes 的存储空间。
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
