<template>
  <el-date-picker
    v-model="charItem.charValue"
    :size="'middle'"
    :style="{width:'220px',backgroud:'#08203d'}"
    type="month"
    placeholder="选择月">
  </el-date-picker>
</template>

<script>
  export default {
    name: 'skuCharDatePicker',
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
