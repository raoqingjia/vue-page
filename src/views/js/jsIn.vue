<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>JavaScript的in操作符可以用来判断一个属性是否属于一个对象，也可以用来变量一个对象的属性
1. 判断属性属于对象
var mycar = {make: "Honda", model: "Accord", year: 1998};
//注意，属性名必须是字符串形式，因为make不是一个变量
if ("make" in mycar ){
    document.write('true');
}else{
    document.write('false');  // 显示true
}

2. for in遍历对象属性
var mycar = {make: "Honda", model: "Accord", year: 1998};
for(var p in mycar){
    console.log(p + ': ' + make[p]);
}

3. in可以用来进行判断
if ( foo == 'bar' || foo == 'foobar' || foo == 'foo' )
{
//...
}
//就可以写成：
if ( foo in { 'bar':'', 'foobar':'', 'foo':'' } )
{
//...
}

4. delete操作符可以删除属性，配合in使用
var mycar = {make: "Honda", model: "Accord", year: 1998};
delete mycar.make;
"make" in mycar;  // returns false

var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
delete trees[3];
3 in trees; // returns false

5. 尽量不要用for in遍历数组
集合遍历的效率为：hash > for(;;) > for(in)
集合相关操作首选对象，次之用for循环遍历。          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'jsIn',
        data() {
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
            toggle() {

            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
