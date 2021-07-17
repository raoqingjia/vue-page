<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>
map():
map和forEach等遍历方法不同，在forEach中return语句是没有任何效果的，而map则可以改变当前循环的值，返回一个新的被改变过值之后的数组（map需return），一般用来处理需要修改某一个数组的值。

let arr1 = [1,2,3];
let arr2 = arr1.map((value,key,arr) => {
    console.log(value)    // 1，2，3
    console.log(key)      // 0，1，2
    console.log(arr)      //[1,2,3] [1,2,3] [1,2,3]
    return value * value;
})
console.log(arr1); // [ 1, 2, 3 ]
console.log(arr2); // [ 1, 4, 9 ]

filter():
filter函数可以看成是一个过滤函数，返回符合条件的元素的数组
filter需要在循环的时候判断一下是true还是false，是true才会返回这个元素；

let arr1 = [1,2,3];
let arr2 = arr1.filter((value,key,arr) => {
    console.log(value)    // 1，2，3
    console.log(key)      // 0，1，2
    console.log(arr)      // [1,2,3]
    return value >= 3 ? false : true;     //内部走的就是value>=3 成立吗，成立的部分返回，不成立的部分不返回。
})
console.log(arr1); // [ 1, 2, 3 ]
console.log(arr2); // [ 1, 2 ]

filter() 数组去重
let arr5 = [1, 2, 2, 3, 4, 5, 5, 6];
let newArr4 = arr5.filter((x, index, self) => {
    return self.indexOf(x) === index;  //  这一行的思路真棒，元素和原数组做对比
})
console.log(newArr4) //[1,2,3,4,5,6]


filter() 去掉空字符串、undefined、null
let arr4 = ['', '1', '2', undefined, '3.jpg', undefined]
let newArr3 = arr4.filter(item => item)
console.log(newArr3); //['1', '2', '3.jpg']</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    mounted() {
      this.$nextTick(function () {
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
