<template>
  <div>
    <h4 class="title-fourth">
      <div class="title-fl">
        <span class="txt-info">{{groupItem.groupName}}</span>
      </div>
      <div class="title-fr">
        <div class="display-wrap">
          <i></i>
        </div>
      </div>
    </h4>
    <ul class="info-rowspan char-rowspan">
      <template  v-for="(charItem , charIndex) in skuItem.bizCharSpecLst">
        <li class="clearfix"  v-if="charItem.groupNum === groupItem.groupNum" :class="{}">
          <label class="char-name">
            <span>*</span>{{charItem.charName}}
          </label>
          <!--readonly为0是操作功能 *ngIf="charItem.readonly==0"-->
          <section v-if="charItem.readonly!==2">
            <template v-if="charItem.readonly===0">
              <skuCharSelect v-if="charItem.charType==='1'" :skuItem="skuItem" :charItem="charItem"></skuCharSelect>
              <skuCharInput v-if="charItem.charType==='2'" :skuItem="skuItem" :charItem="charItem"></skuCharInput>
              <skuCharDatePicker v-if="charItem.charType==='3'" :skuItem="skuItem" :charItem="charItem"></skuCharDatePicker>
            </template>
            <p v-if="charItem.readonly===1"> {{charItem.charValue?charItem.charValue:'--'}}</p>
          </section>

        </li>
      </template>
    </ul>
  </div>
</template>

<script>
  import skuCharInput from './skuCharOperation/skuCharInput';
  import skuCharDatePicker from './skuCharOperation/skuCharDatePicker';
  import skuCharSelect from './skuCharOperation/skuCharSelect';
    export default {
        name: 'skuAttributeList',
        components:{
          skuCharInput,
          skuCharDatePicker,
          skuCharSelect
        },
        props: {
            orderInfo: {
                type: Object,
                required: false,
            },
            detailInfo: {
                type: Object,
                required: false,
            },
            skuItem: {
                type: Object,
                required: false,
            },
            groupItem: {
                type: Object,
                required: false,
            }
        },
        data() {
            return {}
        },
        mounted() {
        },
        methods: {}
    }
</script>
<style scoped lang="less">
    @import "../css/common.less";
</style>
