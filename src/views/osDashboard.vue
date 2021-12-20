<template>
  <div class="dh-wrap clearfix">
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
    <div class="dh-content clearfix">
      <aside class="fl-chart">
        <div id="mzptBar" class="chart-item" :style="{height: '260px'}"></div>
        <div class="chart-item">
          <sortBar :list="applicationList" :displayType="0" :baseDate="1500" :title="'今日提供方请求量排行榜'" :restStyle="applicationBarStyle"></sortBar>
        </div>
      </aside>
      <section class="middle-chart">
        <div class="chart-item">
          <sortBar :list="serviceList" :displayType="1" :baseDate="2000"  :title="'本月服务量请求排行榜'" :restStyle="serviceBarStyle"></sortBar>
        </div>
        <div id="byxz" class="chart-item" :style="{height: '330px'}"></div>
      </section>
      <aside class="fr-chart">
        <div id="tgfcgydzb" class="chart-item" :style="{height: '330px'}"></div>
        <div id="zqstnl" class="chart-item" :style="{height: '330px'}"></div>
      </aside>
    </div>
  </div>
</template>

<script>
  import {routes} from '@/router';
  import * as echarts from 'echarts';
  import sortBar  from '@/views/component/sortBar';

  export default {
    name: 'osDashboard',
    created() {

    },
    components: {'sortBar': sortBar},
    data() {
      return {
        routes: routes,
        datePicker: '',
        applicationBarStyle:{
          dataBg:['#eed180','#e95d58'],
          baseBg:'#fef7f1',
          fontColor:'#c6ccd8'
        },
        chartFontColor: '#c6ccd8',
        applicationList:[{name:"应用数量1", data:1200},{name:"应用数量1", data:1100},{name:"应用数量1", data:1000},{name:"应用数量1", data:990},{name:"应用数量1", data:800},
          {name:"应用数量1", data:780},{name:"应用数量1", data:720},{name:"应用数量1", data:690},{name:"应用数量1", data:680},{name:"应用数量1", data:550}],
        serviceList:[{name:"调用量名称", data:1200},{name:"调用量服务名称", data:1100},{name:"用量服务名称", data:1000},{name:"调用量", data:990},{name:"调用量服务名称", data:800}],
        serviceBarStyle:{
          dataBg:['#314ef1','#64b5f7'],
          baseBg:'#fef7f1',
          fontColor:'#c6ccd8'
        },

      }
    },
    mounted() {

      this.$nextTick(function () {
        let scaleX = document.body.clientWidth / 1920;
        let scaleY = document.body.clientHeight / 1080;
        let scale = scaleX < scaleY ? scaleX : scaleY;
        let screenWidthStyle = `width: 1920px;height: 1080px;transform: scale(${scale},${scale});!important;margin:0 ${(document.body.clientWidth - 1920 * scale) / 2}px;`;
        this.mzptBar();
        this.zqstnl(56.8);
        this.tgfcgydzb(89);
        this.byxz();
      })
    },
    methods: {
      // 每周平台请求情况
      mzptBar() {
        let yList = [32, 58, 64, 64, 64];
        let xData = ['第一周', '第二周', '第三周', '第四周', '第五周'];
        let dom = 340;
        let barWidth = dom / 20;  // 柱状图的宽度
        let colors = []
        for (let i = 0; i < xData.length; i++) {
          colors.push({
            type: 'linear',
            x: 0,
            x2: 1,
            y: 0,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: '#73fcff' // 最左边
              }, {
                offset: 0.5,
                color: '#86eef1' // 左边的右边 颜色
              }, {
                offset: 0.5,
                color: '#5ad6d9' // 右边的左边 颜色
              }, {
                offset: 1,
                color: '#3dc8ca'
              }]
          })
        }
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
              barWidth: barWidth,
              itemStyle: {
                normal: {
                  color: function (params) {
                    return colors[params.dataIndex % 7];
                  }
                }
              },
              label: {
                show: true,
                position: [barWidth / 2, -(barWidth + 20)],
                color: this.chartFontColor,  //  字体颜色
                fontSize: 14,
                align: 'center',
              },
              data: yList
            },
            {
              z: 2,
              type: 'pictorialBar',
              data: yList,
              symbol: 'diamond',
              symbolOffset: [0, '50%'],
              symbolSize: [barWidth, barWidth * 0.5],
              itemStyle: {
                normal: {
                  color: function (params) {
                    return colors[params.dataIndex % 7];
                  },
                }
              },
            },
            {
              z: 3,
              type: 'pictorialBar',
              symbolPosition: 'end',
              data: yList,
              symbol: 'diamond',
              symbolOffset: [0, '-50%'],
              symbolSize: [barWidth, barWidth * 0.5],
              itemStyle: {
                normal: {
                  borderWidth: 0,
                  color: function (params) {
                    return colors[params.dataIndex % 7].colorStops[0].color;
                  },

                }
              },
            },
          ],
        }

        let myChart = echarts.init(document.getElementById('mzptBar'));
        myChart.setOption(option);

      },
      zqstnl(currentDate){
        let myChart = echarts.init(document.getElementById('zqstnl'));
        let num = 0;
        let option = {
          title: [ {
            text: currentDate+'%',
            x: 'center',
            top: '46%',
            textStyle: {
              fontSize: '25',
              color: '#fdf914',
              fontFamily: 'Lato',
              foontWeight: '600',
            },
          }],
          polar: {
            radius: ['44%', '50%'],
            center: ['50%', '50%'],
          },
          angleAxis: {
            max: 100,
            show: false,
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
              show: false
            },
          },
          series: [
            {    // 真实的数据圆圈
              name: '',
              type: 'bar',
              roundCap: true,
              barWidth: 60,
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(66, 66, 66, 0.5)',   //  真实数据圆圈的底色
              },
              data: [currentDate],
              coordinateSystem: 'polar',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: '#fdf914'
                  }, {
                    offset: 1,
                    color: '#38a700'
                  }]),
                }
              }
            },
            { //  最外圈的圆
              name: '',
              type: 'pie',
              startAngle: 90,
              radius: ['60.5%', '64%'],
              hoverAnimation: false,
              center: ['50%', '50%'],
              itemStyle: {
                normal: {
                  labelLine: {
                    show: false
                  },
                  color: 'rgba(66, 66, 66, 0.3)',
                  shadowBlur: 10,
                  shadowColor: 'rgba(253, 249, 20, 0.3)',
                }
              },
              data: [{value: 100}]
            },
            {  //  运动小卫星
              name: "",
              type: 'custom',
              coordinateSystem: "none",
              renderItem: function(params, api) {
                return {
                  type: 'arc',
                  shape: {
                    cx: api.getWidth() / 2,
                    cy: api.getHeight() / 2,
                    r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.55, //  运动小卫星的半径
                    startAngle: (0+num) * Math.PI / 180,
                    endAngle: (1+num) * Math.PI / 180
                  },
                  style: {
                    stroke: "#fdf914",
                    fill: "transparent",
                    lineWidth: 5
                  },
                  silent: true
                };
              },
              data: [0]
            },
          ]
        };
        function numb(){
          num = num+5
          myChart.setOption(option, true)
        }
        setInterval(function() {
          numb()
        }, 100);
        myChart.setOption(option);
      },
      tgfcgydzb(currentDate){
        let myChart = echarts.init(document.getElementById('tgfcgydzb'));
        myChart.setOption({
          title: [ {
            text: currentDate+'%',
            x: 'center',
            top: '46%',
            textStyle: {
              fontSize: '25',
              color: '#fff',
              fontFamily: 'Lato',
              foontWeight: '600',
            },
          }],
          polar: {
            radius: ['43%', '50%'],
            center: ['50%', '50%'],
          },
          angleAxis: {
            max: 100,
            show: false,
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
              show: false
            },
          },
          series: [
            {    // 真实的数据圆圈
              name: '',
              type: 'bar',
              roundCap: true,
              barWidth: 80,
              showBackground: true,
              backgroundStyle:{
                color: 'rgba(231, 216, 236, 0.3)'   //  真实数据圆圈的底色
              },
              data: [currentDate],
              coordinateSystem: 'polar',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(1,0, 0,  0, [
                  {
                    offset: 0,
                    color: '#8a34e3'
                  },
                  {
                    offset: 0.5,
                    color: '#d571f9'
                  },
                    {
                      offset: 1,
                      color: '#c53ff5'
                    }
                  ]),
                }
              }
            }
          ]
        });
      },
      // 本月新增情况
      byxz(){
        let xLabel = ['第一周', '第二周', '第三周', '第四周', '第五周'];
        let yLabel = ["40", "60", "22", "85", "50", "40"];
        var option = {
          title: {
            text: '  本月新增情况',
            textStyle: {
              color: this.chartFontColor,
              fontSize: 16,
              lineHeight: 44,
            }
          },
          tooltip: {
            trigger: 'axis',
            formatter: "{b} : {c}",
            axisPointer: {
              lineStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(126,199,255,0)' // 0% 处的颜色
                  }, {
                    offset: 0.5,
                    color: 'rgba(126,199,255,1)' // 100% 处的颜色
                  }, {
                    offset: 1,
                    color: 'rgba(126,199,255,0)' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
                }
              },
            }
          },
          grid: {
            top: '17%',
            left: '11%',
            right: '7%',
            bottom: '16%',
            // containLabel: true
          },
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: '#233653'
              },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
              textStyle: {
                color:'#c6ccd8',
                padding: 16,
                fontSize: 14
              },
              formatter: function(data) {
                return data
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#192a44'
              },
            },
            axisTick: {
              show: false,
            },
            data: xLabel
          }],
          yAxis: [{
            min: 0,
            splitLine: {
              show: true,
              lineStyle: {
                color: '#192a44'
              },
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#233653"
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color:'#c6ccd8',
                padding: 16
              },
              formatter: function(value) {
                if (value === 0) {
                  return value
                }
                return value
              }
            },
            axisTick: {
              show: false,
            },
          }],
          series: [{
            name: '本月新增服务',
            type: 'line',
            symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbolSize: 10,
            smooth: true, // 折线是否平滑
            label:{
              show:true,
              color:'#c6ccd8'
            },
            lineStyle: {
              normal: {
                width: 2,
                color: "rgba(25,163,223,1)", // 线条颜色
              },
              borderColor: 'rgba(0,0,0,.4)',
            },
            itemStyle: {
              color: "#59a2f8",  //  折线点
            },
            tooltip: {
              show: true
            },
            areaStyle: { //区域填充样式
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: "rgba(25,163,223,.3)"
                },
                  {
                    offset: 1,
                    color: "rgba(25,163,223, 0)"
                  }
                ], false),
                shadowColor: 'rgba(25,163,223, 0.5)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              }
            },
            data: yLabel
          }]
        }
        let myChart = echarts.init(document.getElementById('byxz'));
        myChart.setOption(option);
      }
    },
    computed: {}
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  @fontColor: '#c6ccd8';

  .dh-wrap {
    margin: -8px 0 0 0;
    padding: 0 20px;
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
      color: @fontColor;

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
          background: #192b4f !important;
          border: 1px solid #192b4f !important;
          color: @fontColor !important;
        }
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

  .dh-content {
    margin: 20px 0 0 0;
  }

  .fl-chart {
    float: left;
    width: 28%;
  }

  .middle-chart {
    float: left;
    width: 40%;
    padding: 0 15px;
  }

  .fr-chart {
    float: right;
    width: 30%;
  }

  .chart-item {
    width: 100%;
    float: left;
    margin: 0 0 10px 0;
    border-radius: 4px;
    background-color: rgba(31,36,64,0.5);
    border: 2px solid #141e36;
  }


</style>
