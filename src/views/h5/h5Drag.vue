<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>原理</h3>
          <pre>
使用H5自带的拖拽api实现组件拖拽生成，关键的点如下：
1、被拖拽的目标组件（以下简称目标）上需要添加一个属性draggable="true"
例如需要让一个按钮可以拖拽：
< button id="btn" type="button" draggable="true">按钮< /button>
2、需要了解以下几个监听事件
用于目标组件上的：
ondragstart：目标开始拖拽
ondrag： 目标拖拽的过程中
ondragend： 目标拖拽结束
用于容器上的：
ondragenter： 目标进入容器
ondragleave： 目标离开容器
ondrop： 目标在容器内释放
ondragover： 目标在容器中移动，这里需要注意，当前的H5版本中，我们需要阻止它的默认事件，否则会导致ondrop 失效，的参数中默认会传一个event，我们只需要event.preventDefault();就可以了，ondragover内的目标组件会有绿色加号图标展示
数据间传递
dataTransfer： 用于目标组件和容器之间数据传递的
dataTransfer对象有两个主要的方法：getData()方法和setData()方法。从这两个方法的英文字面意思上就能大概猜出来其用途。getData()方法可以取得由setData()方法保存的值。setData()方法的第一个参数，也是getData()方法唯一的一个参数，是用来保存数据类型的字符串，取值是”text”或”URL”
</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'colresizable',
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
