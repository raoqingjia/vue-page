<template>
  <ul class="info-rowspan char-rowspan">
<!--    *ngFor="let charItem of skuItem.bizCharSpecLst;let charIndex = index"-->
      <li class="clearfix">
        <label class="char-name">
          <span>*</span>
          charItem.charName
          <i class="prompt-icon">!</i>
        </label>
        <!--readonly为0是操作功能 *ngIf="charItem.readonly==0"-->
        <section >  --
<!--          <app-sku-attribute-select *ngIf="charItem.charType=='1'"  [detailInfo]="detailInfo"  [skuItem]="skuItem" [charItem]="charItem" [charIndex]="charIndex" [nextNodeTmp]="nextNodeTmp"></app-sku-attribute-select>-->
<!--          <app-sku-attribute-input *ngIf="charItem.charType=='2'||charItem.charType=='20'"  [detailInfo]="detailInfo" [skuItem]="skuItem" [skuIndex]="skuIndex" [charItem]="charItem" [charIndex]="charIndex" [nextNodeTmp]="nextNodeTmp"></app-sku-attribute-input>-->
<!--          <app-attribute-click-trigger #attributeClickTrigger  *ngIf="charItem.charType=='21'||charItem.charType=='22'" [detailInfo]="detailInfo" [skuItem]="skuItem" [skuIndex]="skuIndex"  [charItem]="charItem" [charIndex]="charIndex" ></app-attribute-click-trigger>-->
<!--          <app-assessment-template #assessmentTemplate *ngIf="charItem.charType=='9'"  [detailInfo]="detailInfo" [skuItem]="skuItem" [skuIndex]="skuIndex"  [charItem]="charItem" [charIndex]="charIndex" ></app-assessment-template>-->
<!--          <app-file-upload-download *ngIf="charItem.charType=='4'||charItem.charType=='41'||charItem.charType=='44'"  [charItem]="charItem"></app-file-upload-download>-->
<!--          <app-attribute-progress-bar *ngIf="charItem.charType=='5'" [detailInfo]="detailInfo" [skuItem]="skuItem" [charItem]="charItem"></app-attribute-progress-bar>-->
<!--          <app-switch *ngIf="charItem.charType=='7'" [switch]="charItem.switch" [charItem]="charItem"></app-switch>-->
<!--          <app-sku-attribute-datepicker *ngIf="charItem.charType=='8'"  [detailInfo]="detailInfo" [charItem]="charItem" [skuItem]="skuItem" ></app-sku-attribute-datepicker>-->
<!--          <app-attribute-textarea-popup *ngIf="charItem.charType=='31'" [detailInfo]="detailInfo" [skuItem]="skuItem" [charItem]="charItem"></app-attribute-textarea-popup>-->
<!--          <app-sku-attribute-textarea *ngIf="charItem.charType=='3'"  [detailInfo]="detailInfo" [skuItem]="skuItem"  [charItem]="charItem" [groupNum]="groupNum" ></app-sku-attribute-textarea>-->
        </section>
        <!--readonly为1是只读  *ngIf="charItem.readonly==1"-->
        <section> --
<!--          <app-order-info-readonly *ngIf="charItem.readonly==1" [detailInfo]="detailInfo"-->
<!--                                   [skuItem]="skuItem" [skuIndex]="skuIndex" [charIndex]="charIndex" [charItem]="charItem" [pipeArgs]="pipeArgs"-->
<!--                                   [attachFiles]="'prodordAttachFiles'" [changed]="charItem.changed"></app-order-info-readonly>-->
        </section>
      </li>

  </ul>
</template>

<script>
  export default {
    name: 'skuAttributeList',
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
