<template>
  <div class="customer-info">
    <h1 class="title-first">
      <div class="title-fl">
        <i class="head-icon"></i>
        <span class="txt-info">客户信息</span>
      </div>
      <div class="title-fr">
        <div class="display-wrap" (click)="basicDisplayList()">
          <i [ngClass]="{'expand': !basicDisplay, 'collapse': basicDisplay}"></i>
        </div>
      </div>
    </h1>
    <div class="customer-info">
      <ul class="info-colspan">
        <li>
          <label><span>*</span>客户名称：</label>
          <section>
            <input type="text" class="trigger-input" placeholder="请选择" [title]="detailInfo.customerName"
                   [(ngModel)]="detailInfo.customerName" readonly>
            <button type="button" class="trigger-btn" (click)="custmerquery.setChooseCustomerShow()"><i
              class="head-icon"></i></button>
            <app-custmerquery #custmerquery (exportdata)="getCustomerName($event)"></app-custmerquery>
          </section>
        </li>
        <li>
          <label><span>*</span>客户编码：</label>
          <section>
            <input type="text" placeholder="请输入" [(ngModel)]="detailInfo.customerNum" readonly>
          </section>
        </li>
        <li *ngIf="detailInfo.custServLevel">
          <label><span>*</span>客户等级：</label>
          <section>
            <p class="input-readonly">{{detailInfo.custServLevel | customerLevel}}</p>
          </section>
        </li>
        <li *ngIf="detailInfo.custProvNum">
          <label><span>*</span>客户所在省：</label>
          <section>
            <p class="input-readonly">{{detailInfo.custProvNum | provinceName:''}}</p>
          </section>
        </li>
        <li *ngIf="detailInfo.locationName">
          <label><span>*</span>客户所在地市：</label>
          <section>
            <input type="text" [(ngModel)]="detailInfo.locationName" readonly>
          </section>
        </li>
        <li *ngIf="detailInfo.custSourceName">
          <label><span>*</span>客户来源：</label>
          <section>
            <input type="text" [(ngModel)]="detailInfo.custSourceName" readonly>
          </section>
        </li>
        <li *ngIf="detailInfo.agreementFlag!=0">
          <label><span *ngIf="detailInfo.agreementRequired != false">*</span>添加合同：</label>
          <section>
            <div class="trigger-input-wrap">
              <input type="text" class="trigger-input have-click-btn"
                     [title]="detailInfo.prodistAgreements[0].agreementName"
                     [(ngModel)]="detailInfo.prodistAgreements[0].agreementName" readonly>
              <i class="close-icon" *ngIf="detailInfo.agreementRequired == false" (click)="cancelAddContract()"></i>
            </div>
            <button type="button" class="trigger-btn" (click)="addContract.show(detailInfo.customerNum,detailInfo.agreementsTemplate)">
              <i class="choose-icon"></i>
            </button>
            <button type="button" class="click-btn" (click)="createContract.show(detailInfo, logInfo)"><i class="add-icon"></i></button>
            <app-add-contract #addContract (agreementOutput)="sureAddContract($event)"></app-add-contract>
            <app-create-contract #createContract (contractOutput)="sureCreateContract($event)"></app-create-contract>
          </section>
        </li>
        <app-business-opportunity  [detailInfo]="detailInfo" #businessOpportunity></app-business-opportunity>
        <!--          busiOpportunity_dictProjectId  全网项目编码 非必填-->
        <li  *ngIf="detailInfo.alias&&detailInfo.alias.indexOf('dictProjectId')!==-1">
          <label>全网项目编码：</label>
          <section>
            <input  *ngIf="!detailInfo.dictProjectIdDisabled" type="text" placeholder="样例：I19391110140003" [(ngModel)]="detailInfo.dictProjectId">
            <p *ngIf="detailInfo.dictProjectIdDisabled" class="readonly" nz-popover [nzPopoverContent]="detailInfo.dictProjectId">{{detailInfo.dictProjectId | filternull | intercept: 16}}</p>
          </section>
        </li>
      </ul>
    </div>
  </div>
  <div class="choose-sku"></div>
  <div class="sku-info"></div>
  <div class="account-info"></div>
  <div class="other-info"></div>
  <div class="btn-wrap">
    <button type="button"> 提交订单 </button>
    <button type="button"> 提交订单 </button>
  </div>
</template>

<script>
    export default {
        name: "offerOrder"
    }
</script>

<style scoped>

</style>
