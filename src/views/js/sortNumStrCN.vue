<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>
            1、下面的排序只能排  字符串元素的数组 如果数组中有数字类型排序就会出问题
          </h3>
          <pre>
window.onload=function(){
 //支持IE8 先排 字符串数字 大写英文字母 小写英文字母 汉字
  var arr=["1","Jack",1,"Book",2,"Fung",76,"3","457","dgh",93,"Mark","中国","china",82,"phone","刘德华"];
  console.log('原数组');
  console.log(arr);
  console.log('for方法从小到大排序');
  console.log(arrSortMinToMax(arr));
  console.log('for方法从大到小排序');
  console.log(arrSortMaxToMin(arr));
};
function arrMinNum(arr){
  var minNum = Infinity, index = -1,minVul = "";
  for (var i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) == "string") {
      if (arr[i].charCodeAt() < minNum) {
        minNum = arr[i].charCodeAt();
        minVul = arr[i];
        index = i;
      }
    }else {
      if (arr[i] < minNum) {
        minNum = arr[i];
        minVul = arr[i]
        index = i;
      }
    }
  };
  return {"minNum":minVul,"index":index};
}
function arrSortMinToMax(arr){
  var arrNew = [];
  var arrOld = arr.concat();
  for (var i = 0; i < arr.length; i++) {
    arrNew.push(arrMinNum(arrOld).minNum);
    arrOld.splice(arrMinNum(arrOld).index,1)
  };
  return (arrNew);
}
function arrMaxNum(arr){
  var maxNum = -Infinity, index = -1,maxVul = "";
  for (var i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) == "string") {
      if (arr[i].charCodeAt()>maxNum) {
        maxNum = arr[i].charCodeAt();
        maxVul = arr[i];
        index = i;
      }
    }else {
      if (arr[i]>maxNum) {
        maxNum = arr[i];
        maxVul = arr[i];
        index = i;
      }
    }
  };
  return {"maxNum":maxVul,"index":index};
}
function arrSortMaxToMin(arr){
  var arrNew = [];
  var arrOld = arr.slice(0);
  for (var i = 0; i < arr.length; i++) {
    arrNew.push(arrMaxNum(arrOld).maxNum);
    arrOld.splice(arrMaxNum(arrOld).index,1);
  };
  return (arrNew);
}
</pre>
          <h3>
            2、利用轻量的汉字转拼音JavaScript库，将汉字转换后排序
          </h3>
          <pre>

我使用的是tiny-pinyin这个字典库，将汉字转换成拼音再排序，同时支持 node.js (4-7) 和 浏览器 (safari/chrome/firefox/android 6+/ios) 。
注意：不支持多音字；ie/edge 测试未通过。
git地址 https://github.com/creeperyang/pinyin
npm地址 https://www.npmjs.com/package/tiny-pinyin  </pre>
          <h3>3、使用localeCompare()方法用本地特定的顺序来比较两个字符串，但是感觉不太靠谱</h3>
          <pre>
stringVar.localeCompare(stringExp[, locales][, options])
stringVar
必需。要比较的第一个字符串。
stringExp
必需。要比较的第二个字符串。
locales
可选。包含一种或多种语言或区域设置标记的区域设置字符串数组。如果包含多个区域设置字符串，请以降序优先级对它们进行排列，确保首个条目为首选区域位置。如果省略此参数，则使用 JavaScript 运行时的默认区域设置。此参数必须符合 BCP 47 标准；请参见 Intl.Collator 对象了解详细信息。
options
可选。包含指定比较选项的一个或多个特性的对象。请参见 Intl.Collator 对象了解详细信息。
比较完成后，返回值是一个数字。
1）如果字符串1小于字符串2，则返回小于0的数字；
2）如果字符串1大于字符串2，则返回数字1；
3）如果字符串1等于字符串2，则返回数字0；
测试1：
var str="北京";
var var2="北京";
var res=str.localeCompare(var2);
console.log(res);
输出0，相等
测试2：
var str="星期一";
var var2="星期二";
var res=str.localeCompare(var2);
console.log(res);
 var array = ['白鸽', '麻雀', '大象', '狗', '猫', "鸡"];
 var resultArray = array.sort(
   function compareFunction(param1, param2) {
     return param1.localeCompare(param2,"zh");  //这个zh我不太明白
   }
 );
 console.log(resultArray);</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const pinyin = require('tiny-pinyin')
  export default {
    name: 'sortNumStrCN',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    mounted() {
      this.$nextTick(function () {
        if(pinyin.isSupported()){
          var str='我爱你 love YOU 123 Hello';
          console.log(str);
          console.log( pinyin.convertToPinyin(str));
        }
      })
    },
    methods: {
      toggle(){

      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
