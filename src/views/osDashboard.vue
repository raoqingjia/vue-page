<template>
  <div class="dh-wrap">
    <h1 class="dh-title clearfix">
    OneSupport 运营数据统计
      <section class="dh-date clearfix">
        <label>数据月份：</label>
        <div class="choose-date">
          <el-date-picker
            v-model="datePicker"
            :size="'mini'"
            :style="{width:'150px',backgroud:'#08203d'}"
            type="month"
            placeholder="选择月">
          </el-date-picker>
        </div>
        <span class="sure-btn">确认</span>
      </section>
    </h1>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
    <div id="LiquidRing" :style="{width: '300px', height: '300px'}"></div>
  </div>
</template>

<script>
  import {routes} from '@/router'
  import {mapGetters} from 'vuex'
  import * as echarts from 'echarts'
  import pagination from '@/views/component/pagination'

  export default {
    name: 'osDashboard',
    created() {

    },
    components: {},
    data() {
      return {
        routes: routes,
        datePicker: ''
      }
    },
    mounted() {

      this.$nextTick(function () {
        let scaleX = document.body.clientWidth / 1920;
        let scaleY = document.body.clientHeight / 1080;
        let scale = scaleX < scaleY ? scaleX : scaleY;
        let screenWidthStyle = `width: 1920px;height: 1080px;transform: scale(${scale},${scale});!important;margin:0 ${(document.body.clientWidth - 1920 * scale) / 2}px;`;
        console.log(screenWidthStyle);
        this.drawLine();
      })
    },
    filters: {
      filterFun(value) {
        return value;
      }
    },
    methods: {
      LiquidRing() {
        var value = 0.54;
        let LiquidRing = echarts.init(document.getElementById('LiquidRing'));
        LiquidRing.setOption({
          backgroundColor: '#181b22',
          title: [
            {
              text: (value * 100).toFixed(0) + '%',
              left: '50%',
              top: '40%',
              textAlign: 'center',
              textStyle: {
                fontSize: '30',
                fontWeight: '400',
                color: '#8b8d90',
                textAlign: 'center',
                textBorderColor: 'rgba(0, 0, 0, 0)',
                textShadowColor: '#000',
                textShadowBlur: '0',
                textShadowOffsetX: 0,
                textShadowOffsetY: 1,
              },
            },
          ],
          polar: {
            radius: ['43%', '40%'],
            center: ['50%', '50%'],
          },
          angleAxis: {
            max: 100,
            clockwise: false,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            splitLine: {
              show: false,
            },
          },
          radiusAxis: {
            type: 'category',
            show: true,
            axisLabel: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
          },
          series: [
            {
              type: 'liquidFill',
              radius: '40%',
              z: 1,
              center: ['50%', '50%'],
              amplitude: 20,
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#324791',
                  },
                  {
                    offset: 1,
                    color: '#449090',
                  },
                ],
                globalCoord: false,
              },
              data: [
                0.4,
                {
                  value: 0.4,
                  direction: 'left',
                },
              ],
              backgroundStyle: {
                borderWidth: 1,
                color: 'transparent',
              },
              label: {
                normal: {
                  formatter: '',
                },
              },
              outline: {
                show: true,
                itemStyle: {
                  borderWidth: 0,
                },
                borderDistance: 0,
              },
            },
            {
              name: '',
              type: 'bar',
              roundCap: true,
              z: 2,
              showBackground: true,
              backgroundStyle: {
                color: '#15181e',
              },
              data: [75],
              coordinateSystem: 'polar',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, .5, 1, [
                    {
                      offset: 0,
                      color: '#5acef2',
                    },
                    {
                      offset: .7,
                      color: '#5073fb',
                    },
                    {
                      offset: 1,
                      color: '#6ae8d8',
                    },
                  ]),
                },
              },
            },
          ],
        });
      },
      drawLine() {
        console.log(echarts);
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'));
        // 绘制图表
        myChart.setOption({
          title: {text: '在Vue中使用echarts'},
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      }
    },

    computed: {
      caseNav() {
        return this.$store.state.caseNav
      },
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less">
  .dh-wrap {
    margin:-8px 0 0 0;
    /*background-color:rgba(55,60,107,0.8);*/
     background-color: #253562;
  }

  .dh-title {
    line-height: 60px;
    height: 60px;
    text-align: center;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    position: relative;
    .dh-date {
      position: absolute;
      top: 0;
      right: 50px;
      font-size: 14px;
      font-weight: normal;
      color: #acb1bf;
      label {
        float: left;
      }
      div.choose-date {
        float: left;
        margin: 0 10px 0 10px;
        input[type='text'] {
          height: 30px;
          line-height: 30px;
          width: 150px;
          background: #192b4f!important;
          border: 1px solid #192b4f!important;
          color: #acb1bf!important;
        }
      }
      span.sure-btn {
        float: left;
        height: 30px;
        line-height: 30px;
        margin: 15px 0 0 0;
        padding: 0 10px;
        border-radius:4px ;
        background-color: #08203d;
      }
    }
  }


</style>
