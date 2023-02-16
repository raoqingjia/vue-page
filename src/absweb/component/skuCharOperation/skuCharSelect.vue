<template>
  <el-select
    v-model="charItem.charValue"
    :style="{width:'220px',backgroud:'#08203d'}"
    placeholder="请选择">
  </el-select>
</template>

<script>
  export default {
    name: 'skuCharSelect',
    components:{},
    props: {
      orderInfo: {
        type: Object,
        required: false,
      },
      charItem: {
        type: Object,
        required: false,
      }
    },
    data() {
      return {

      }
    },
    mounted() {
    },
    methods: {
    }
  }
</script>
<style scoped lang="less">
  @import "../../css/common.less";
</style>
