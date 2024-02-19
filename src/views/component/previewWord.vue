<template>
  <div>
    <a  @click="downLoad()">文档下载</a>
    <div ref="fileItem"></div>
  </div>
</template>
<script>
import axios from "axios";
var docx = require("docx-preview");
// import {DocxPreview ,docx} from 'docx-preview';
  export default {
    name: 'previewWord',
    data() {
      return {
        current: this.currentPage
      }
    },
    props: {
      fileUrl: {
        type: String,
        default: ''
      },
      fileName: {
        type: String,
        default: ''
      },
      baseDate: {
        type: Number,
        default: 100
      }
    },
    computed: {
    },
    created() {

    },
    mounted() {
      this.goPreview();
    },
    methods: {
      // 预览
      goPreview() {
        axios.request({
          url: this.fileUrl, // 直接填写json文件在public下的路径即可
          method: 'get',
          responseType: 'blob',
        }).then(res => {
          console.log(res);
          // const   options = {
          //   className: string = "docx", // 默认和文档样式类的类名/前缀
          //   inWrapper: boolean = true, // 启用围绕文档内容渲染包装器
          //   ignoreWidth: boolean = false, // 禁止页面渲染宽度
          //   ignoreHeight: boolean = false, // 禁止页面渲染高度
          //   ignoreFonts: boolean = false, // 禁止字体渲染
          //   breakPages: boolean = true, // 在分页符上启用分页
          //   ignoreLastRenderedPageBreak: boolean = true,//禁用lastRenderedPageBreak元素的分页
          //   experimental: boolean = false, //启用实验性功能（制表符停止计算）
          //   trimXmlDeclaration: boolean = true, //如果为真，xml声明将在解析之前从xml文档中删除
          //   debug: boolean = false, // 启用额外的日志记录
          // }
          docx.renderAsync(res.data, this.$refs.fileItem); // 渲染到页面
        }).catch(err => {
          alert("抱歉，服务出错！")
        });
      },
      // 下载
      downLoad() {
        axios({
          method: "get",
          responseType: "blob", // 因为是流文件，所以要指定blob类型
          url: this.fileUrl, // 自己的服务器，提供的一个word下载文件接口
        }).then(({ data }) => {
          console.log(data); // 后端返回的是流文件
          const blob = new Blob([data]); // 把得到的结果用流对象转一下
          var a = document.createElement("a"); //创建一个<a></a>标签
          a.href = URL.createObjectURL(blob); // 将流文件写入a标签的href属性值
          a.download = this.fileName; //设置文件名
          a.style.display = "none"; // 障眼法藏起来a标签
          document.body.appendChild(a); // 将a标签追加到文档对象中
          a.click(); // 模拟点击了a标签，会触发a标签的href的读取，浏览器就会自动下载了
          a.remove(); // 一次性的，用完就删除a标签
        });
      },
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

// :deep(.docx-wrapper) {
//   background-color: #fff !important;//设置灰边
// }

</style>
<!--

首先下载安装docx-preview，引入
npm install xlsx docx-preview --save
import { defaultOptions, renderAsync } from "docx-preview";
var docxx = require("docx-preview");
-->
