<template>
  <div :style='restStyle'>
    <h3 :model="title"></h3>
    <ul>
      <li v-for="(items,index) in list" :key="index">
        <p class="txt">
          <span class="fl">{{items.name}}</span>
          <span class="fr">{{items.data}}</span>
        </p>
        <dl class="bar">
          <dt :style="{width:setWidth()}" class="date-bg"></dt>
          <dd class="base-bg"></dd>
        </dl>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'sortBar',
    data() {
      return {
        current: this.currentPage
      }
    },
    props: {
      list: {
        type: Array,
        default: []
      },
      restStyle: { // 重置样式
        type: Object,
        default: 0
      },
      title: {
        type: String,
        default: ''
      },
      display: {// 每页显示条数
        type: Number,
        default: 0
      }
    },
    computed: {
      setWidth () {
        return  '80%';
      },
    },
    created() {

    },
    mounted() {
    },
    methods: {}
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @height: 16px;
  ul {
    width: 100%;
    padding: 15px 0;
    li {
      margin: 0 0 8px 0;
      padding: 0 20px;
      p.txt {
        span {
          display: block;
          font-size: 14px;
          color: #c6ccd8;
          line-height: 36px;
        }
      }

      .bar {
        width: 100%;
        height: 12px;
        overflow: hidden;
        position: relative;
        z-index: 1;
      }

      .date-bg {
        height: 100%;
        width: 60%;
        border-radius: 6px;
        background: linear-gradient(to right, #eed180, #e95d58);
        position: absolute;
        left: 0;
        top: 0;
        z-index: 3;
      }

      .base-bg {
        height: 100%;
        width: 100%;
        border-radius: 6px;
        background-color: #fef7f1;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
      }
    }
  }


</style>
