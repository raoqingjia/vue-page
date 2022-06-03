<template>
  <div id="wordCloud"></div>
</template>

<script>
    import * as echarts from 'echarts';
    import 'echarts-wordcloud'
    import {wordCloudCharts} from '../../data/chartsData'

    export default {
        name: 'wordCloud',
        // props: {
        //     list: {
        //         type: Array,
        //         default: []
        //     },
        //     baseDate: {
        //         type: Number,
        //         default: 100
        //     },
        //     restStyle: { // 重置样式
        //         type: Object,
        //         default: 0
        //     },
        //     title: {
        //         type: String,
        //         default: ''
        //     }
        // },
        created() {

        },
        mounted() {
            this.initCharts();
        },
        data() {
            return {}
        },
        methods: {
            initCharts() {
                const maskImage = new Image(); //可以根据图片形状生成有形状的词云图,这时候shape就别用了
                maskImage.src = require('@/img/wordCloud-bg.jpeg');
                const option = {
                    title: {
                        text: '热点分析',
                        link: 'https://www.baidu.com/s?wd=' + encodeURIComponent('ECharts'),
                        x: 'center',
                        textStyle: {
                            fontSize: 24
                        }

                    },
                    backgroundColor: '#F7F7F7',
                    tooltip: {
                        show: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {
                                iconStyle: {
                                    normal: {
                                        color: '#FFFFFF'
                                    }
                                }
                            }
                        }
                    },
                    series: [{
                        name: '热点分析 title',
                        type: 'wordCloud',
                        //size: ['9%', '99%'],
                        // 词的大小，最小12px，最大60px，可以在这个范围调整词的大小
                        sizeRange: [6, 66],
                        //textRotation: [0, 45, 90, -45],
                        // 每个词旋转的角度范围
                        rotationRange: [-45, 90],
                        // 词间距，数值越小，间距越小，这里间距太小的话，会出现大词把小词套住的情况，比如一个大的口字，中间会有比较大的空隙，这时候他会把一些很小的字放在口字里面，这样的话，鼠标就无法选中里面的那个小字
                        gridSize: 8,
                        // shape这个属性虽然可配置，但是在词的数量不太多的时候，效果不明显，它会趋向于画一个椭圆
                        // shape: 'circle',
                        textPadding: 0,
                        // maskImage 这个是可以自定义背景图片的，词云会按照图片的形状排布，所以有形状限制的时候，最好用背景图来实现，而且，这个背景图一定要放base64的，不然词云画不出来
                        // maskImage: maskImage,
                        // 布局的时候是否有动画
                        // layoutAnimation: true,
                        autoSize: {
                            enable: true,
                            minSize: 6
                        },
                        // 这是全局的文字样式，相对应的还可以对每个词设置字体样式
                        textStyle: {
                            // fontFamily: 'sans-serif',
                            // fontWeight: 'bold',
                            // 颜色可以用一个函数来返回字符串
                            color: function () {
                                return 'rgb(' + [
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160)
                                ].join(',') + ')';
                            },
                            emphasis: {
                                shadowBlur: 10,
                                shadowColor: '#FF6A00'
                            }
                        },
                        // 数据必须是一个数组，数组是对象，对象必须有name和value属性
                        data: [{
                            name: 'Farrah Abraham',
                            value: 366,
                            // 这里就是对每个字体的样式进行设置
                            textStyle: {
                                color: 'rgba(249,8,8, 0.5)'
                            }
                        }]
                    }]
                };
                option.series[0].data = wordCloudCharts;
                var myChart = echarts.init(document.getElementById("wordCloud"));
                myChart.setOption(option);
                myChart.on('click', function (params) {
                    //alert((params.name));
                    window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
                });
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #wordCloud {
    width: 100%;
    height: 450px;
  }
</style>
