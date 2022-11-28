<template>
  <div class="block-item choose-wrap">
    <h1 class="title-first">
      <div class="title-fl">
        <i class="search-icon"></i>
        <span class="txt-info">选择产品</span>
      </div>
      <div class="title-fr">
        <div class="display-wrap" >
          <i></i>
        </div>
      </div>
    </h1>
    <div class="choose-sku">
      <ul class="clearfix">
        <li v-for="(skuItem , index) in orderInfo.bizSkuSpecLst" :key="index">
          <label class="checkbox">
            <input type="checkbox" v-model="skuItem.checkbox" @click="chooseSku(skuItem)">
            <span></span>
          </label>
          <em>{{skuItem.skuName}}</em>
        </li>

      </ul>
    </div>
  </div>


</template>

<script>
  export default {
    name: '',
    props: {
      orderInfo: {
        type: Object,
        required: true,
      }
    },
    data() {
      return {

      }
    },
    mounted() {
    },
    methods: {
      chooseSku(skuItem){

      }
    }
  }
</script>
<style scoped lang="less">
@import "../css/common";
</style>
