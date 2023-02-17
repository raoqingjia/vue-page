<template>
  <div class="char-wrap">
    <h3 class="title-third margin-b10">
      <div class="title-fl">
        <i class="point"></i>
        <span class="txt-info">产品属性</span>
      </div>
    </h3>
    <!-- groupType为1说明是放在产品属性里遍历，为2放在产品资费里遍历 *ngIf="skuItem.bizSkuCharGroupSpecLst && skuItem.bizSkuCharGroupSpecLst.length>0;else other_content;"-->
    <ul  v-for="(groupItem , groupIndex) in skuItem.bizSkuCharGroupSpecLst">
        <li  v-if="groupItem.checkbox">

          <skuAttributeList v-if="groupItem.groupType==='1'" :skuItem ="skuItem" :groupItem="groupItem"></skuAttributeList>
          <skuAttributeTable v-if="groupItem.groupType==='4'" :skuItem ="skuItem" :groupItem="groupItem"></skuAttributeTable>
        </li>
    </ul>
  </div>
</template>

<script>
  import skuAttributeList from './skuAttributeList';
  import skuAttributeTable from './skuAttributeTable';


  export default {
    name: 'skuAttributeOperation',
    components:{skuAttributeList,skuAttributeTable},
    props: {
      orderInfo: {
        type: Object,
        required: true,
      },
      detailInfo: {
        type: Object,
        required: true,
      },
      skuItem: {
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
    }
  }
</script>
<style scoped lang="less">
  @import "../css/common.less";
</style>
