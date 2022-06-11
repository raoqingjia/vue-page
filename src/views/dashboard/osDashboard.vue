<template>

  <div class="dh-wrap clearfix">
    <h1 class="dh-title clearfix">
      运营数据统计
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
    <div class="content-up">
      <section class="fl-chart">
        <div class="chart-item" id="mzptBar"></div>
      </section>
      <section class="middle-chart">
        <div class="chart-item"></div>
      </section>
      <section class="fr-chart">
        <div class="chart-item"></div>
      </section>
    </div>
    <div class="content-down">
      <section class="fl-chart">
        <div class="chart-item"  id="qingqiul"></div>
      </section>
      <section class="middle-chart">
        <div class="chart-item"></div>
      </section>
      <section class="fr-chart">
        <div class="chart-item"></div>
      </section>
    </div>
  </div>
</template>

<script>
  import {routes} from '@/router';
  import * as echarts from 'echarts';
  import sortBar from '@/views/component/sortBar';
  import '@/js/rem'
  export default {
    name: 'osDashboard',
    created() {

    },
    components: {'sortBar': sortBar},
    data() {
      return {
        routes: routes,
        datePicker: '',
      }
    },
    mounted() {
      this.$nextTick(function () {
        this.mzptBar();
        this.qingqiul();
      })
    },
    methods: {
        // 每周平台请求情况
        mzptBar() {
            let yList = [32, 58, 64, 64, 64];
            let xData = ['第一周', '第二周', '第三周', '第四周', '第五周'];
            let option = {
                title: {
                    text: '  每周平台请求量情况',
                    textStyle: {
                        color: this.chartFontColor,
                        fontSize: 16,
                        lineHeight: 44,
                    }
                },
                //提示框
                tooltip: {
                    trigger: 'axis',
                    formatter: "{b} : {c}",
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                /**区域位置*/
                grid: {
                    left: '14%',
                    right: '8%',
                    top: '23%',
                    bottom: '18%',
                },
                //X轴
                xAxis: {
                    data: xData,
                    type: 'category',
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: 'rgba(255,255,255,1)',
                            shadowColor: 'rgba(255,255,255,1)',
                            shadowOffsetX: '20',
                        },
                        symbol: ['none', 'arrow'],
                        symbolOffset: [0, 25]
                    },
                    splitLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        margin: 15,   // 字体距离x周之间的距离
                        fontSize: 12,  // x轴字体大小
                    },
                },
                yAxis: {
                    show: true,
                    splitNumber: 4,
                    axisLine: {
                        show: false,
                    },
                    splitLine: {  //  y轴
                        show: true,
                        lineStyle: {
                            type: 'border',
                            color: '#323d64',
                        },
                    },
                    axisLabel: {
                        color: this.chartFontColor,  //  字体颜色
                        margin: 15,
                        fontSize: 12,  // y轴字体大小
                    }
                },
                series: [
                    {
                        type: 'bar',
                        barWidth: 15,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                    offset: 0,
                                    color: '#84d1e9'
                                }, {
                                    offset: 1,
                                    color: '#3579b4'
                                }]),
                                borderRadius: [10, 10, 0, 0]
                            }
                        },
                        label: {
                            show: true,
                            position: 'top',
                            color: this.chartFontColor,  //  字体颜色
                            fontSize: 14,
                            align: 'center',
                        },
                        data: yList
                    }
                ]
            }
            let myChart = echarts.init(document.getElementById('mzptBar'));
            myChart.setOption(option);

        },
        qingqiul(){
                let yLabel = ['调用量名称01', '调用量服务名称02', '用量服务名称03','调用量04','调用量服务名称05','调用量名称01', '调用量服务名称02', '用量服务名称03','调用量04','调用量服务名称05'];
                let yData = [3653, 1755,2705,2655,6475,3653, 3755,4705,5455,5675];
                let bgData = [];
                for(let i in yData){
                    bgData.push(800)
                }
                let  option = {
                    title: {
                        text: '  本月服务请求量排行榜',
                        textStyle: {
                            color: this.chartFontColor,
                            fontSize: 16,
                            lineHeight: 44,
                        }
                    },
                    grid: {
                        left: '6%',
                        right: '6%',
                        bottom: '5%',
                        top: '18%',
                        containLabel: true
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'none'
                        },
                        formatter: function(params) {
                            return params[0].name + '<br/>' +
                                "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                                params[0].seriesName + ' : ' + params[0].value + ' <br/>'
                        }
                    },
                    xAxis: {
                        show: false,
                        type: 'value'
                    },
                    yAxis: [{
                        type: 'category',
                        inverse: false,
                        axisLabel: {
                            show: true,
                            margin:15,
                            textStyle: {
                                color: this.chartFontColor,
                            },
                        },
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        data: yLabel
                    }, {
                        type: 'category',
                        inverse: true,
                        axisTick: 'none',
                        axisLine: 'none',
                        show: true,
                        axisLabel: {
                            textStyle: {
                                color: this.chartFontColor,
                                fontSize: '12'
                            },
                        },
                        data: yData
                    }],
                    series: [{
                        name: '人数',
                        type: 'bar',
                        zlevel: 1,
                        itemStyle: {
                            normal: {
                                barBorderRadius: 15,
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    offset: 0,
                                    color: '#2674b9'
                                }, {
                                    offset: 1,
                                    color: '#88d4eb'
                                }]),
                                shadowBlur:0,
                                shadowColor:'rgba(87,220,222,0.7)'
                            },
                        },
                        barWidth: 15,
                        data: yData
                    },
                        {
                            name: '背景',
                            type: 'bar',
                            barWidth: 15,
                            barGap: '-100%',
                            data: bgData,
                            itemStyle: {
                                normal: {
                                    color: '#464b62',
                                    barBorderRadius: 15,
                                }
                            },
                        },
                    ]
                };
                let myChart = echarts.init(document.getElementById('qingqiul'));
                myChart.setOption(option);
            },
    },
    computed: {}
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  @fontColor: '#c6ccd8';
  @borderColor: '#fff';

  /* 我默认rem的根元素在1920*1080下是 20px */

  .dh-wrap {
    background-color: #253562;
  }
  .dh-wrap /deep/ .el-input__inner {
    height: 30px;
    line-height: 30px;
    width: 150px;
    background: #192b4f !important;
    border: 1px solid #192b4f !important;
    color: @fontColor !important;
  }

  .dh-title {
    line-height: 59px;
    height: 59px;
    text-align: center;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    position: relative;
    border-bottom: 1px solid #fff;
    .dh-date {
      position: absolute;
      top: 0;
      right: 50px;
      font-size: 14px;
      font-weight: normal;
      color: @fontColor;

      label {
        float: left;
      }

      div.choose-date {
        float: left;
        margin: 0 10px 0 10px;
      }

      span.sure-btn {
        float: left;
        height: 30px;
        line-height: 30px;
        margin: 15px 0 0 0;
        padding: 0 10px;
        border-radius: 4px;
        background-color: #08203d;
      }
    }
  }
  .content-up , .content-down {
    display: flex;
    flex-direction: row;
    margin: 10px 5px 0;
  }
  .content-up{
    height: 16.8rem;
  }
  .content-down{
    height: 31.2rem;
    padding-bottom:10px ;
  }
  .fl-chart, .fr-chart {
    flex: 3;
    height: 100%;
  }
  .middle-chart {
    flex: 5;
    height: 100%;
  }

  .chart-item {
    height: 100%;
    width: calc(100% - 10px);
    margin: 0 5px;
    border-radius: 4px;
    background-color: rgba(31, 36, 64, 0.5);
    border: 2px solid #141e36;
  }
</style>
