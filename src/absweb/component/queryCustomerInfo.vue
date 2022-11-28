<template>
  <div class="modal-wrap">
    <div class="modal" style="width: 900px">
      <div class="modal-content">
        <div class="modal-body">
          <div class="header-wrap clearfix">
            <h3>客户列表</h3>
            <i @click="closeModel()">x</i>
          </div>
          <div class="filter-wrap">
            <ul class="filter-condition clearfix">
              <li><span>客户名称/编码</span><input type="text" placeholder="请输入客户名称/客户编码"></li>
              <li class="btn">
                <button type="button" class="btn blue">查询</button>
              </li>
            </ul>
          </div>
          <div class=" clearfix">
            <table>
              <thead>
              <tr>
                <th></th>
                <th>客户编码</th>
                <th>客户名称</th>
                <th>客户来源</th>
                <th>行业名称</th>
                <th>服务等级</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item , index) in customerList" :key="index">
                <td>
                  <label class="radio">
                    <input type="checkbox" :value="index" :id="index"
                           v-model="customerChecked" @change="selectData(item , index)">
                    <span></span>
                  </label>
                </td>
                <td>{{item.customerNumber}}</td>
                <td>{{item.customerName}}</td>
                <td>{{item.custSourceName}}</td>
                <td>{{item.industryName}}</td>
                <td>{{item.valueLevelId}}</td>
              </tr>
              </tbody>
            </table>
          </div>
          <button type="button" class="btn blue" @click="clickSureBtn()">确定</button>
          <button type="button" class="btn gray" @click="closeModel()">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getCustomerFtsList} from '../../request/api';

  export default {
    name: 'queryCustomerInfo',
    props: {
      orderInfo: {
        type: Object,
        required: true,
      },
      detailInfo: {
        type: Object,
        required: true,
      }
    },
    created() {
      getCustomerFtsList({}).then((result) => {
        this.customerList = result.data;
      });
    },
    data() {
      return {
        customerChecked: [],
        customerList: [],
        showModel: false
      }
    },
    mounted() {
    },
    methods: {
      selectData(item, index) {
        this.customerChecked = [];
        for (let i = 0; i < this.customerList.length; i++) {
          if (index !== i) {
            this.customerList[i].checkbox = false;
          }
        }
        item.checkbox = !item.checkbox;
        if (item.checkbox) {
          this.customerChecked = [index];
        }
      },
      clickSureBtn() {
        console.log(this.customerList[this.customerChecked[0]]);
        // 不能这么搞，后续获取数据就是  orderInfo.customerInfo.companyNumber 或者 orderInfo.customerInfo.customerManagers[0].phone
        // 一个是层级太深，一个是多了好多无用字段
        // this.$set(this.orderInfo, 'customerInfo', this.customerList[this.customerChecked[0]]);
        const checkedObj = this.customerList[this.customerChecked[0]];
        this.$set(this.orderInfo, 'customerName', checkedObj.customerName);
        this.$set(this.orderInfo, 'customerNumber', checkedObj.customerNumber);
        this.$set(this.orderInfo, 'industryName', checkedObj.industryName);
        this.$set(this.orderInfo, 'companyName', checkedObj.companyName);
        this.$set(this.orderInfo, 'locationName', checkedObj.locationName);
        this.$set(this.orderInfo, 'valueLevelId', checkedObj.valueLevelId);
        this.$set(this.orderInfo, 'custSourceName', checkedObj.custSourceName);
        console.log(this.orderInfo);
        this.closeModel();
      },
      closeModel() {
        this.detailInfo.queryCustomerInfoModel = false;
      }
    }
  }
</script>
<style scoped lang="less">
  @import "../css/common.less";
</style>
