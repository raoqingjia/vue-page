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
            1、基于canvas通过原生的js实现随机生成动态验证码
          </h3>
          <pre>
Html是基于angula4.0书写的
&#60canvas #canvas id="canvas" width="100" height="30" (click)="codeFun()">&#60/canvas>
&#60button (click)="codeFun()">刷新&#60/button>
Js
codeFun() {
  // 获取到元素canvas
  const $canvas = document.getElementById('canvas');
  const _str = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz0123456789'; // 设置随机数库
  let _picTxt = ''; // 随机数
  const _num = 4; // 4个随机数字
  const _width = $canvas['width'];
  const _height = $canvas['height'];
  const canvasEl: HTMLCanvasElement = this.elementRef.nativeElement.querySelector('#canvas');
  const ctx: CanvasRenderingContext2D = canvasEl.getContext('2d'); // 获取 context 对象
  ctx.textBaseline = 'bottom'; // 文字上下对齐方式--底部对齐
  ctx.fillStyle = this.randomColor(180, 240); // 填充画布颜色
  ctx.fillRect(0, 0, _width, _height); // 填充矩形--画画
  for (let i = 0; i < _num; i++) {
      const x = (_width - 10) / _num * i + 10;
      const y = this.randomNum(_height / 1.2, _height);
      const deg = this.randomNum(0, 25);
      const txt = _str[this.randomNum(0, _str.length)];
      _picTxt += txt; // 获取一个随机数
      ctx.fillStyle = this.randomColor(10, 100); // 填充随机颜色
      ctx.font = this.randomNum(20, 40) + 'px SimHei'; // 设置随机数大小，字体为SimHei
      ctx.translate(x, y); // 将当前xy坐标作为原始坐标
      ctx.rotate(deg * Math.PI / 180); // 旋转随机角度
      ctx.fillText(txt, 0, 0); // 绘制填色的文本
      ctx.rotate(-deg * Math.PI / 180);
      ctx.translate(-x, -y);
  }
  for (let i = 0; i < _num; i++) {
      // 定义笔触颜色
      ctx.strokeStyle = this.randomColor(90, 180);
      ctx.beginPath();
      // 随机划线--4条路径
      ctx.moveTo(this.randomNum(0, _width), this.randomNum(0, _height));
      ctx.lineTo(this.randomNum(0, _width), this.randomNum(0, _height));
      ctx.stroke();
  }
  for (let i = 0; i < _num * 10; i++) {
      ctx.fillStyle = this.randomColor(0, 255);
      ctx.beginPath();
      // 随机画原，填充颜色
      ctx.arc(this.randomNum(0, _width), this.randomNum(0, _height), 1, 0, 2 * Math.PI);
      ctx.fill();
  }
  const picCode = _picTxt;
  console.log(_picTxt)
  return _picTxt; // 返回随机数字符串
}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'getDate',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
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
