1  queryCustomerInfo 组件引入方式是
import queryCustomerInfo from '../component/queryCustomerInfo'
 components:{queryCustomerInfo},

2  data()  created()    mounted()  都是方法

3  props功能：让组件接受外部传过来的数据
第一种：（只接收）：props: ['name']
第二种：（限制类型）：props:{  name:Number }
第三种：（限制类型，限制必要性，指定默认值）：
props: {
    name: {
        type: String,
        required: true,
        default: 'hhh'
    }
}
props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，
若业务需求确实需要修改，那么请复制props的内容在data中声明一份，然后去修改data中的数据。

4  v-for绑定多组复选框和单选框
如果是是单选框，v-model绑定的就要是一个单独声明的数组变量，来存贮选中元素中的:value绑定的值
如果是多选框，v-model绑定的可以是数据中的checked来记录选中元素

5 嵌套的层级比较多，数据双向绑定实现不了,从而导致输入框不显示问题。
  其根本在于vue示例中data的数据被加工为响应式的，如果再往这个数据中“添加新属性”，显然，新的属性没有被加工成响应式数据，从而导致视图不更新。
   (这个是大数据量，深层次结构报文的天敌啊，一个报文几十个字段，多层次的数据接口，请求数据挂载到主对象上，数据改变了页面还不更新)
办法：
1.降低嵌套层数
2.使用this.$forceUpdate()具有强制刷新的功能，迫使Vue实例化对象重新渲染，仅仅影响本身和插槽内容的子组件，而不是影响所有子组件
// 在method方法中写
// 多层嵌套无法输入解决方法
change(e) {
this.$forceUpdate()
},
3. 使用this.$set(this.data,”key”,value’)给对象添加属性，应该理解为将数据格式化成响应式数据后再赋值给对象

6  $forceUpdata()、$set()和 $nextTick() 的区别
1.$forceUpdata()、$set()都用于更新视图
2.$nextTick()并不是更新视图，而是等数据视图更新之后再执行某些操作














































