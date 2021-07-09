<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>
            使用方式
          </h3>
          <pre>
1、安装
npm install qrcanvas

2、项目中引入
import { qrcanvas } from 'qrcanvas';

3、使用方法，下面是vue3.0使用的案例
onMounted(() => {
  const canvas=qrcanvas({
    data:'http://www.raoqingjia.online',
    size:128,
    background:'#fff'
  });
  document.getElementById('qrcode')!.innerHTML='';
  document.getElementById('qrcode')!.appendChild(canvas);
});

4、下面是qrcanvas中可配置的参数
export interface QRCanvasOptions {
    typeNumber?: TypeNumber;
    correctLevel?: ErrorCorrectionLevel;
    data?: string;
    canvas?: HTMLCanvasElement;
    size?: number;
    cellSize?: number;
    background?: QRCanvasLayerValue;
    foreground?: QRCanvasLayerValue;
    padding?: number;
    effect?: QRCanvasEffect;
    logo?: QRCanvasLayer;
    /**
     * Whether to resize the canvas to size of QRCode on render
     */
    resize?: boolean;
}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'qrcanvas',
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
