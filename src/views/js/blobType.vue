<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>如何创建Blob</h3>
          <pre>
Blob(Binary Large Object)术语最初来自数据库（oracle 中也有类似的栏位类型。），早期数据库因为要存储声音、图片、以及可执行程序等二进制数据对象所以给该类对象取名为Blob。
在一般的Web开发中，很少会用到Blob，但Blob可以满足一些场景下的特殊需求。Blob，Binary Large Object的缩写，代表二进制类型的大对象。Blob的概念在一些数据库中有使用到，例如，MYSQL中的BLOB类型就表示二进制数据的容器。在Web中，Blob类型的对象表示不可变的类似文件对象的原始数据，通俗点说，就是Blob对象是二进制数据，但它是类似文件对象的二进制数据，因此可以像操作File对象一样操作Blob对象，实际上，File继承自Blob。

使用旧方法创建 Blob 对象。
旧的方法使用 BlobBuilder 来创建一个Blob 实例，并且使用一个 append() 方法，将字符串（或者 ArrayBuffer 或者 Blob，此处用 string 举例）插入，一旦数据插入成功，就可以使用 getBlob() 方法设置一个 mime
var builder = new BolbBuilder();
builder.append("Hello World!");
var blob = builder.getBlob("text/plain");

新方法创建Blob 对象
var blob = new Blob(array[optional], options[optional]);
构造函数，接受两个参数
第一个参数：为一个数据序列，可以是任意格式的值，例如，任意数量的字符串，Blobs 以及 ArrayBuffers。
第二个参数：用于指定将要放入Blob中的数据的类型(MIME)（后端可以通过枚举MimeType，获取对应类型
var blob = new Blob(["Hello World!"],{type:"text/plain"});
</pre>
          <h3>Blob对象的基本方法</h3>
          <pre>
Blob对象有一个slice方法，返回一个新的Blob对象，包含了源Blob对象中制定范围内的数据。
参数说明：
start： 可选，代表 Blob 里的下标，表示第一个会被会被拷贝进新的 Blob 的字节的起始位置。如果传入的是一个负数，那么这个偏移量将会从数据的末尾从后到前开始计算。
end： 可选，代表的是 Blob 的一个下标，这个下标-1的对应的字节将会是被拷贝进新的Blob 的最后一个字节。如果你传入了一个负数，那么这个偏移量将会从数据的末尾从后到前开始计算。
contentType： 可选，给新的 Blob 赋予一个新的文档类型。这将会把它的 type 属性设为被传入的值。它的默认值是一个空的字符串。
举个举例：
var data = "abcdef";
var blob1 = new Blob([data]);
var blob2 = blob1.slice(0,3);
console.log(blob1);  //输出：Blob {size: 6, type: ""}
console.log(blob2);  //输出：Blob {size: 3, type: ""}
通过slice方法，从blob1中创建出一个新的blob对象，size等于3。

Blob对象能够添加到表单中，作为上传数据使用：
const content = '< a id="a">< b id="b">hey!< /b>< /a>';
const blob = new Blob([content], {type: 'text/xml'});
formData.append('webmasterfile', blob);

当要上传大文件的时候，此方法非常有用，可以将大文件分割分段，然后各自上传，因为分割之后的 Blob 对象和原始的是独立存在的。
不过目前浏览器实现此方法还没有统一，火狐使用的是 mozSlice() ，Chrome 使用的是 webkitSlice() ，其他浏览器则正常的方式 slice()
可以写一个兼容各浏览器的方法：
function sliceBlob(blob, start, end, type) {
  type = type || blob.type;
  if (blob.mozSlice) {
      return blob.mozSlice(start, end, type);
  } else if (blob.webkitSlice) {
      return blob.webkitSlice(start, end type);
  } else {
      throw new Error("This doesn't work!");
  }
}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'colresizable',
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
