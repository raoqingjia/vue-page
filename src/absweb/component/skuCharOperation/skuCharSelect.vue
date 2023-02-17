<template>
  <el-select
    v-model="charItem.charValue"
    :style="{width:'220px',backgroud:'#08203d'}"
    placeholder="请选择">
    <el-option
      :style="{padding:'0 8px'}"
      v-for="(item,i) in charItem.bizCharEnumSpecLst"
      :key="item.code"
      :label="item.value"
      :value="item.code">
    </el-option>
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
    created(){
      console.log(this.charItem);
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
