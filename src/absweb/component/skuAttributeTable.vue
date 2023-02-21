<template>
  <div class="attr-group">
    <h4 class="title-fourth clearfix">
      <div class="title-fl">
        <span class="txt-info">{{groupItem.groupName}}</span>
      </div>
      <div class="title-fr">
        <span class="btn" @click="addGroup()">添加</span>
        <div class="display-wrap"></div>
      </div>
    </h4>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
          <th class="operate">操作</th>
          <th class="serialNum">序号</th>
          <template v-for="(item , index)  in groupItem.groupTemplate">
            <th v-if="item.readonly!==2">
              <span class="required" v-if="item.optionalFlag===0">*</span>{{item.charName}}
            </th>
          </template>
        </tr>
        </thead>
        <tbody>
        <template v-for="(skuItemSup , skuItemSupIndex)  in skuItem[groupItem.groupNum]">
          <tr>
            <td class="operate">
              <span @click="copyGroup(skuItemSup)">复制</span>
              <span @click="deleteGroup(skuItemSupIndex)">删除</span>
            </td>
            <td class="serialNum">{{skuItemSupIndex + 1}}</td>
            <template v-for="(charItem,charIndex) in skuItemSup.bizCharSpecLst">
              <td v-if="charItem.readonly!==2">
                <template v-if="charItem.readonly===0">
                  <skuCharSelect v-if="charItem.charType==='1'" :skuItem="skuItem" :charItem="charItem"></skuCharSelect>
                  <skuCharInput v-if="charItem.charType==='2'" :skuItem="skuItem"  :charItem="charItem"></skuCharInput>
                  <skuCharDatePicker v-if="charItem.charType==='3'" :skuItem="skuItem"  :charItem="charItem"></skuCharDatePicker>
                </template>
                <p v-if="charItem.readonly===1"> {{charItem.charValue?charItem.charValue:'--'}}</p>
              </td>
            </template>
          </tr>
        </template>
        </tbody>
      </table>
    </div>
  </div>


<!--  <section v-if="charItem.readonly!==2">-->
<!--    <template v-if="charItem.readonly===0">-->
<!--      <skuCharSelect v-if="charItem.charType==='1'" :charItem="charItem"></skuCharSelect>-->
<!--      <skuCharInput v-if="charItem.charType==='2'" :charItem="charItem"></skuCharInput>-->
<!--      <skuCharDatePicker v-if="charItem.charType==='3'" :charItem="charItem"></skuCharDatePicker>-->
<!--    </template>-->
<!--    <p v-if="charItem.readonly===1"> {{charItem.charValue?charItem.charValue:'&#45;&#45;'}}</p>-->
<!--  </section>-->
</template>

<script>
  import skuCharInput from './skuCharOperation/skuCharInput';
  import skuCharDatePicker from './skuCharOperation/skuCharDatePicker';
  import skuCharSelect from './skuCharOperation/skuCharSelect';
    export default {
        name: 'skuAttributeTable',
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
        created(){
        },
        mounted() {
          this.initSpliceCharTableData();
        },
        methods: {
          initSpliceCharTableData(){
            this.groupItem.groupTemplate = [];
            this.skuItem[this.groupItem.groupNum] = [];
            this.skuItem.bizCharSpecLst.forEach((charItem)=>{
               if(charItem.groupNum === this.groupItem.groupNum){
                 this.groupItem.groupTemplate.push(charItem);
               }
            });
            this.addGroup();
            this.$forceUpdate();
            console.log(this.skuItem);
            console.log(this.groupItem.groupTemplate);
          },
          addGroup(){
            this.skuItem[this.groupItem.groupNum].push({
                groupNum: this.groupItem.groupNum, //  当前组编号，目前就初始化赋值了，新增加的没给值
                checkbox: false,
                disabled: false,
                action: 1, // 新增数据
                bizCharSpecLst: JSON.parse(JSON.stringify(this.groupItem.groupTemplate))
              });
            this.$forceUpdate();
            console.log(this.skuItem);
          },
          copyGroup(skuItemSup){
            this.skuItem[this.groupItem.groupNum].push( JSON.parse(JSON.stringify(skuItemSup)));
            this.$forceUpdate();
            console.log(this.skuItem);
          },
          deleteGroup(index){
            this.skuItem[this.groupItem.groupNum].splice(index,1);
            this.$forceUpdate();
            console.log(this.skuItem);
          }
        }
    }
</script>
<style scoped lang="less">
    @import "../css/common.less";
</style>
