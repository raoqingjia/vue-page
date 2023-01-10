<template>

</template>

<script>
  import queryCustomerInfo from "./queryCustomerInfo";
  import chooseSku from "./chooseSku";
  import skuAttributeOperation from "./skuAttributeOperation";

  export default {
    name: '',
    components:{},
    props: {
      orderInfo: {
        type: Object,
        required: false,
      },
      detailInfo: {
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
  @import "../css/common.less";
</style>
