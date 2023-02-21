<template>
  <div class="wrap" v-if="!detailInfo.pageLoading">
    <div class="block-item  customer-info">
      <h1 class="title-first">
        <div class="title-fl">
          <i class="head-icon"></i>
          <span class="txt-info">客户信息</span>
        </div>
        <div class="title-fr">
          <div class="display-wrap">
            <i></i>
          </div>
        </div>
      </h1>
      <ul class="info-colspan">
        <li>
          <label><span>*</span>客户名称：</label>
          <section>
            <input type="text" class="trigger-input" :value="orderInfo.customerName" placeholder="请选择" readonly>
            <button type="button" class="trigger-btn" @click="getCustomerInfo()"><i class="head-icon"></i></button>
          </section>
        </li>
        <li>
          <label><span>*</span>客户编码：</label>
          <section>
            <input type="text" placeholder="请输入" :value="orderInfo.customerNumber" readonly>
          </section>
        </li>
        <li>
          <label><span>*</span>客户等级：</label>
          <section>
            <p class="input-readonly">{{orderInfo.valueLevelName}}</p>
          </section>
        </li>
        <li>
          <label><span>*</span>客户所在省：</label>
          <section>
            <input type="text" readonly :value="orderInfo.companyName">
          </section>
        </li>
        <li>
          <label><span>*</span>客户所在地市：</label>
          <section>
            <input type="text" readonly :value="orderInfo.locationName">
          </section>
        </li>
        <li>
          <label><span>*</span>客户来源：</label>
          <section>
            <input type="text" readonly :value="orderInfo.custSourceName">
          </section>
        </li>
        <li>
          <label><span>*</span>添加合同：</label>
          <section>
            <div class="trigger-input-wrap">
              <input type="text" class="trigger-input have-click-btn" readonly>
              <i class="close-icon"></i>
            </div>
            <button type="button" class="trigger-btn">
              <i class="choose-icon"></i>
            </button>
            <button type="button" class="click-btn"><i class="add-icon"></i></button>
          </section>
        </li>
      </ul>
    </div>
    <chooseSku :orderInfo="orderInfo" v-if="orderInfo.bizSkuSpecLst.length>0"></chooseSku>
    <div class="product-wrap block-item"  v-for="(skuItem , skuIndex) in orderInfo.bizSkuSpecLst" :key="skuIndex">
      <div v-if="skuItem.checkbox">
        <h1 class="title-first title-sku">
          <div class="title-fl img-change-adjust">
            <div class="title-left-img"></div>
            <span class="txt-info title-middle-img">{{skuItem.skuName}}</span>
          </div>
          <div class="title-fr">
            <div class="display-wrap">
              <i></i>
            </div>
          </div>
        </h1>
        <div class="product-info" v-if="skuItem.checkbox">
          <skuAttributeOperation :orderInfo="orderInfo" :detailInfo="detailInfo" :skuItem="skuItem"></skuAttributeOperation>
        </div>
      </div>
    </div>
    <!--        <app-sku-attribute-operation *ngIf="!(skuItem.alias!=null&&skuItem.alias.indexOf('NOBIZCHAR')!=-1)" [detailInfo]="detailInfo" [skuItem]="skuItem" [skuIndex]="skuIndex" [pipeArgs]="'first'"  [nextNodeTmp]="nextNodeTmp"></app-sku-attribute-operation>-->
    <!--        <app-sku-rate-operation [detailInfo]="detailInfo" [skuItem]="skuItem" [skuIndex]="skuIndex"-->
    <!--                                [disabled]="rateDisable" [nextNodeTmp]="nextNodeTmp"></app-sku-rate-operation>-->
    <!--        <app-sku-charge-operation [detailInfo]="detailInfo" [skuItem]="skuItem"></app-sku-charge-operation>-->
    <!--    <div class="account-info"></div>-->
    <!--    <div class="other-info"></div>-->
    <!--    <div class="btn-wrap">-->
    <!--      <button type="button"> 提交订单</button>-->
    <!--      <button type="button"> 提交订单</button>-->
    <!--    </div>-->

    <queryCustomerInfo ref="queryCustomerInfoTmp" v-if="detailInfo.queryCustomerInfoModel" :detailInfo="detailInfo"
                       :orderInfo="orderInfo"></queryCustomerInfo>
  </div>
</template>

<script>
  import queryCustomerInfo from '../component/queryCustomerInfo';
  import chooseSku from '../component/chooseSku';
  import skuAttributeOperation from '../component/skuAttributeOperation';
  import {getFirstPackageSpecInfo} from '../../request/api';

  export default {
    components: {
      queryCustomerInfo,
      chooseSku,
      skuAttributeOperation
    },
    name: "offerOrder",
    mounted() {
      getFirstPackageSpecInfo({}).then((result) => {
        for (const key in result.data[0]) {
          this.detailInfo.pageLoading = false;
          this.$set(this.orderInfo, key, result.data[0][key]);  //为orderInfo绑定数据
        }
      });
    },
    data() {
      return {
        orderInfo: {},
        detailInfo: {
          pageLoading:true,
          queryCustomerInfoModel: false, // 选择客户弹窗，弹窗是否展示字段放这里是为了避免子组件里的逻辑加载
        }
      }
    },
    methods: {
      getCustomerInfo() {
        this.detailInfo.queryCustomerInfoModel = true;
        console.log(this.detailInfo);
      },

    }
  }
</script>

<style scoped lang="less">
  @import "../css/common.less";
</style>
