<template>
  <input type="text" v-model="charItem.charValue"/>
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
