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
            1、background-size: length | percentage | cover | contain;
          </h3>
          <table class="dataintable">
            <tbody>
            <tr>
              <th style="width:25%;">值</th>
              <th>描述</th>
              <th style="width:8%;">测试</th>
            </tr>
            <tr>
              <td><i>length</i></td>
              <td>
                <p>设置背景图像的高度和宽度。</p>
                <p>第一个值设置宽度，第二个值设置高度。</p>
                <p>如果只设置一个值，则第二个值会被设置为 "auto"。</p>
              </td>
              <td><a target="_blank" href="http://www.w3school.com.cn/tiy/c.asp?f=css_background-size">测试</a></td>
            </tr>
            <tr>
              <td><i>percentage</i></td>
              <td>
                <p>以父元素的百分比来设置背景图像的宽度和高度。</p>
                <p>第一个值设置宽度，第二个值设置高度。</p>
                <p>如果只设置一个值，则第二个值会被设置为 "auto"。</p>
              </td>
              <td><a target="_blank" href="http://www.w3school.com.cn/tiy/c.asp?f=css_background-size&p=5">测试</a></td>
            </tr>

            <tr>
              <td>cover</td>
              <td>
                <p>图片宽高比不变、铺满整个容器的宽高，而图片多出的部分则会被截掉；</p>
              </td>
              <td><a target="_blank" href="http://www.w3school.com.cn/tiy/c.asp?f=css_background-size&p=7">测试</a></td>
            </tr>
            <tr>
              <td>contain</td>
              <td>图片自身的宽高比不变，缩放至图片自身能完全显示出来，所以容器会有留白区域</td>
              <td><a target="_blank" href="http://www.w3school.com.cn/tiy/c.asp?f=css_background-size&p=8">测试</a></td>
            </tr>
            </tbody>
          </table>
          <h3>
            2、二：background-size 在ie7\8的兼容写法：用filter滤镜
          </h3>
          <pre>
css中加入一句：
filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='../img/justice.jpg',sizingMethod='scale');
参数解释：
src="图片路径"，可以是相对，也可以是绝对；
sizingMethod：“scale|crop|image” 可选项。字符串(String)。设置或检索滤镜作用的对象的图片在对象容器边界内的显示方式。
crop：剪切图片以适应对象尺寸。
image：默认值。增大或减小对象的尺寸边界以适应图片的尺寸。
scale：缩放图片以适应对象的尺寸边界。
PS:注意：如果设置了background-attachment:fixed;会是background-size属性失效</pre>
          <h3>3、background-size值为cover和值为100%的区别</h3>
          <pre>
background-size：100% 100%;---按容器比例撑满，图片变形；
background-size：cover;---把背景图片放大到适合元素容器的尺寸，图片比例不变。</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'background-size',
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
  table.dataintable {
    margin-top: 15px;
    border-collapse: collapse;
    border: 1px solid #aaa;
    width: 100%;
    margin-bottom: 15px;
  }
  table.dataintable tr:nth-child(odd) {
    background-color: #F5F5F5;
  }
  table.dataintable tr:nth-child(even) {
    background-color: #fff;
  }
  table.dataintable th {
    vertical-align: baseline;
    padding: 5px 15px 5px 6px;
    background-color: #3F3F3F;
    text-align: center;
    color: #fff;
    border: 1px solid #aaa;
  }
  table.dataintable td {
    vertical-align: text-top;
    padding: 6px 15px 6px 6px;
    border: 1px solid #aaa;
    text-align: left;
  }
</style>
