<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>课程地址 https://www.bilibili.com/video/BV1e54y1f7gi?spm_id_from=333.851.b_7265636f6d6d656e64.2</h3>
          <h3>1、打乱数组顺序</h3>
          <pre>let arr = ['1',2,4,'3','55',true,false,'ss','aaa','eee'];
arr = arr.sort(()=>0.5- Math.random());
console.log(arr);  // 输出结果  [ 2, '3', '1', '55', true, 'aaa', false, 'ss', 'eee' ]

解释一下sort
arr= arr.sort((n1,n2)=>{
    // return -1; //返回负值 交换顺序
    // return 0 或者 1 //返回正值 保持顺序不变
    console.log(n1,n2);
    return n2-n1;
    // n2 - n1 从大到小
    // n1 - n2 从小到大
});
ps：如果是对象的话，可以对对象某个属性值的大小进行排序，return -1  交换循序  0 保持不变          </pre>
          <h3>2、数组中获取最大值最小值</h3>
          <pre>const num = [111,24,4,77,888,-11,33,-8];
const min = Math.min(...num);
const max = Math.max(...num);  // 在数组前添加不定参数...符号，就无须在调用apply()方法了
console.log(min,max);   // -11 888</pre>
          <h3>3、RGB转HEX</h3>
          <pre>// const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');
const RGBToHex = (r, g, b) => '#' + [r, g, b].map(x => {
  const hex = x.toString(16);
  return hex.length === 1 ? '0' + hex : hex
}).join('');
console.log(RGBToHex(0, 0, 0));  // 'ffa501';</pre>
          <h3>4、合并多个对象</h3>
          <pre>
const obj01={
  name:"李珊",
  age: 29
}
const obj02={
  book: '世界和平',
  price: 25.9
}
const obj03={...obj01,...obj02};
console.log(obj03);  // { name: '李珊', age: 29, book: '世界和平', price: 25.9 }</pre>
          <h3>5、删除数组中重复元素</h3>
          <pre>let arr = ['a','a','b',1,2,3,3,null,null,undefined,undefined,true,true,{name:'李明',age:12},{name:'李明',age:12},{name:'小红',age:12}];
let setArr = (arr)=>[...new Set(arr)];
console.log(setArr(arr));   //  下面是结果，说明对象去重不了，只能去除基本数据类型
[ 'a',
  'b',
  1,
  2,
  3,
  null,
  undefined,
  true,
  { name: '李明', age: 12 },
  { name: '李明', age: 12 },
  { name: '小红', age: 12 } ]

引申set的基本用法：
set是ES6提供的一种新的数据结构。Set和Map类似，也是一组key的集合，但不存储value。而且成员key的值都是唯一的，所以在Set中，没有重复的key。
1.初始化，声明一个Set
let s1 = new Set([1, 2, "2", 3, 4, 4, 5]);
console.log(s1); // 返回集合对象 => Set(6) {1, 2, "2", 3, 4, 5}
1）向Set加入值的时候，不会发生类型转换，所以 2 和 "2" 是两个不同得值，使用的算法叫做"Same-value-zero equality"，它类似于运算符( === )，注意：Set内部，两个NaN相等，会去除重复的NaN;
2) 上面说到key是唯一的，所以在new一个集合实例时，如果有重复的值，会自动去重；
3) new出来的Set集合对象，需要传入一个数组，因此灵活运用扩展运算符和集合，对数组进行操作;
let s2 = [1,3,5,2,3,5,7]
let newArr = [...new Set(s2)];
console.log("newArr",newArr); // newArr (5) [1, 3, 5, 2, 7]

2.利用Set对JSON数据去重
let arr = [
        { id: 1, pid: 1 },
        { id: 2, pid: 1 },
        { id: 2, pid: 1 },
        { id: 3, pid: 1 },
        { id: 6, pid: 1 },
        { id: 3, pid: 1 },
        { id: 6, pid: 1 },
      ];
let temparr = [...new Set(arr.map((item) => JSON.stringify(item)))];
let resultArr = temparr.map((item) => JSON.parse(item));
console.log(resultArr);  // [ { id: 1, pid: 1 }, { id: 2, pid: 1 }, { id: 3, pid: 1 }, { id: 6, pid: 1 } ]

3.操作方法：
add(value)：添加某个值，返回Set结构本身；
delete(value)：删除某个值，返回一个布尔值，表示是否删除成功；
has(value)：返回一个布尔值，表示是否含有该成员；
clear()：清楚所有成员，没有返回值

剩下的看这里吧
https://blog.csdn.net/dada914/article/details/119912625</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'getDate',
        data() {
            return {
                created: this.$route.query.created,
                title: this.$route.query.name
            }
        },
        methods: {
            toggle() {

            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
