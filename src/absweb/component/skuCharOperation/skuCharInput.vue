<template>
  <el-input type="text" :style="{width:'220px',backgroud:'#08203d'}" v-model="charItem.charValue" ></el-input>
</template>

<script>
  export default {
    name: 'skuCharInput',
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
