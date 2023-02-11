<template>
    <ul class="info-rowspan char-rowspan">
        <template  v-for="(charItem , charIndex) in skuItem.bizCharSpecLst">
            <li class="clearfix"  v-if="charItem.groupNum === groupItem.groupNum" :class="{}">
              <label class="char-name">
                <span>*</span>{{charItem.charName}}
              </label>
                <!--readonly为0是操作功能 *ngIf="charItem.readonly==0"-->
                <section v-if="charItem.readonly===0">
                  <skuCharInput v-if="charItem.charType==='2'||charItem.charType==='3'" :charItem="charItem"></skuCharInput>
                    <!--          <app-sku-attribute-select *ngIf="charItem.charType=='1'"  [detailInfo]="detailInfo"  [skuItem]="skuItem" [charItem]="charItem" [charIndex]="charIndex" [nextNodeTmp]="nextNodeTmp"></app-sku-attribute-select>-->
                    <!--          <app-sku-attribute-input *ngIf="charItem.charType=='2'||charItem.charType=='20'"  [detailInfo]="detailInfo" [skuItem]="skuItem" [skuIndex]="skuIndex" [charItem]="charItem" [charIndex]="charIndex" [nextNodeTmp]="nextNodeTmp"></app-sku-attribute-input>--></section>
                <!--readonly为1是只读  *ngIf="charItem.readonly==1"-->
              <section v-if="charItem.readonly===1"> <p>{{charItem.charValue?charItem.charValue:'--'}}</p></section>
            </li>
        </template>
    </ul>
</template>

<script>
  import skuCharInput from './skuCharOperation/skuCharInput'
    export default {
        name: 'skuAttributeList',
        components:{
          skuCharInput
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
