<template>
  <el-select
    v-model="charItem.charValue"
    :style="{width:'220px',backgroud:'#08203d'}"
    @change="changeValue($event)"
    placeholder="请选择">
    <el-option
      :style="{padding:'0 8px'}"
      v-for="(item,i) in charItem.bizCharEnumSpecLst"
      :hidden="item.hidden"
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
      skuItem: {
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
    },
    mounted() {
    },
    methods: {
      changeValue($event){
        console.log($event);
        if(this.charItem.charName === '产品名称'){
          this.skuItem.bizCharSpecLst.forEach((cItem)=>{
            if(cItem.charName === '服务名称'){
              cItem.charValue = '';
              cItem.charDisplay = null;
              cItem.bizCharEnumSpecLst.forEach((eItem)=>{
                 eItem.hidden = true;
                 if(eItem.parentCode === $event){
                   eItem.hidden = false;
                 }
              })
            }
          })
          this.skuItem['FW'].forEach((gItem)=>{
            gItem.bizCharSpecLst.forEach((cItem)=>{
               if(cItem.charName === '服务项目'){
                 cItem.charValue = null;
                 cItem.charDisplay = null;
                 console.log(cItem)
               }
            });
          });
        }

        if(this.charItem.charName === '服务名称'){
          this.skuItem['FW'].forEach((gItem)=>{
            gItem.bizCharSpecLst.forEach((cItem)=>{
              if(cItem.charName === '服务项目'){
                cItem.charValue = null;
                cItem.charDisplay = null;
                cItem.bizCharEnumSpecLst.forEach((eItem)=>{
                  eItem.hidden = true;
                  if(eItem.parentCode === $event){
                    console.log(eItem.parentCode);
                    eItem.hidden = false;
                  }
                });
                console.log(cItem);
              }
            });
          });
        }
        this.$forceUpdate(); //  属性组groupType是4 多组下拉框数据是新增的对象，不是原有的数据，不加这行视图不更新。
      }
    }
  }
</script>
<style scoped lang="less">
  @import "../../css/common.less";
</style>
