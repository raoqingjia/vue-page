<template>
  <div>
    <h3 class="title" :style="{color:restStyle.fontColor}">{{title}}</h3>
    <ul v-if="displayType===0" class="colspan">
      <li v-for="(items,index) in list" :key="index" class="clearfix">
        <p class="txt">
          <span class="fl" :style="{color:restStyle.fontColor}">{{items.name}}</span>
          <span class="fr">{{items.data}}</span>
        </p>
        <dl class="bar">
          <dt :style="{width:(items.data/baseDate*100)+'%', background: 'linear-Gradient(to right, ' + restStyle.dataBg[0]+ ', '+ restStyle.dataBg[1]+')'}" class="data-bg"></dt>
          <dd class="base-bg"></dd>
        </dl>
      </li>
    </ul>
    <ul v-if="displayType===1" class="rowspan">
      <li v-for="(items,index) in list" :key="index" class="clearfix">
        <label class="name" :style="{color:restStyle.fontColor}">{{items.name}}</label>
        <dl class="bar">
          <dt
            :style="{width:(items.data/baseDate*100)+'%', background: 'linear-Gradient(to right, ' + restStyle.dataBg[0]+ ', '+ restStyle.dataBg[1]+')'}"
            class="data-bg"></dt>
          <dd class="base-bg"></dd>
        </dl>
        <label class="data">{{items.data}}</label>
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
      baseDate: {
        type: Number,
        default: 100
      },
      restStyle: { // 重置样式
        type: Object,
        default: 0
      },
      title: {
        type: String,
        default: ''
      },
      displayType: {// 每页显示条数
        type: Number,
        default: 0
      }
    },
    computed: {
      setWidth() {
        return '80%';
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
  h3.title {
    padding: 15px 20px 5px;
    text-align: left;
    font-size: 16px;
    font-weight: bold;

  }

  ul.colspan {
    width: 100%;
    padding: 5px 0 15px;

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

      .data-bg {
        height: 100%;
        width: 60%;
        border-radius: 6px;
        /*background: linear-gradient(to right, #eed180, #e95d58);*/
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

  ul.rowspan {
    width: 100%;
    padding: 5px 0;
    li {
      margin: 0 0 8px 0;
      padding: 0 20px;
      label {
        display: block;
        float: left;
        font-size: 14px;
        color: #c6ccd8;
        line-height: 36px;
      }
      .name {
        width: 20%;
        text-align: right;
      }
      .data {
        width: 10%;
        text-align: left;
      }
      .bar {
        float: left;
        width: 63%;
        height: 12px;
        margin: 12px 15px 0;
        overflow: hidden;
        position: relative;
        z-index: 1;
      }
      .data-bg {
        height: 100%;
        border-radius: 6px;
        /*background: linear-gradient(to right, #eed180, #e95d58);*/
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
