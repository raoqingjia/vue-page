<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>1、项目背景</h3>
          <pre>现象：安全扫描人员知道高权限和低权限两人的工号，经常用低权限的工号访问修改接口请求入参访问高权限的数据信息，这样算是越权，低权限访问高权限肯定是不行的
解决方法：通过前后台增加请求头唯一标识判断，比如将， 增加的请求头参数名是：SH，值MD5规则：工号编码+请求来源明文+请求参数+固定参数HqMdQN ，之后台也按这种规则进行md5加密二者一对比，如果不一致就说明入参篡改了</pre>
          <h3>2、项目实施</h3>
          <pre>1、前提条件给请求头增加一个SR字段先给每个项目定义请求来源  集客大厅是abs，控制台是omss，政企esop是esp，计费结算是settle，mplvpn是mplvpn
2、区分get请求和post请求，因为http拦截器中request对于get和post请求入参格式在不同的字段上，同时angular的httpClient拦截器和Axios的拦截器入参字段还不一样
3、delete  put 用的不多没做限制，但是下载接口同时有get和post请求的情况，根据请求头中contentType是否为APPLICATION_JSON进行了过滤
4、 post入参是数组格式还是对象格式  如果是对象格式要JSON.stringify()转换一下，如果是数组就不需要，因为拦截器已经转换好了
5、get请求如果有些入参是null或者undefined是不会传给后台的，但是拦截器里会展示，这里需要对null或者undefined进行锅炉
6、angular的httpClient拦截器中的get请求入参前端取的和后天取的不一致，因为存在前端对于中文进行了encodeURIComponent()但是后台接受到的是没转义的正常中文，这时候就需要单独处理进行转移的代码进行解码，为了省事没单独判断中文字段，对整个get请求入参进行了decode解码
7、前端对get请求入参字段拼接顺序还和后台接口到的入参返回顺序还不一致，因为后台按abcd26个字母排序了，前端的顺序是乱的，当时我和后端都懒得进行排序就换了个方法。
后来改成我判断是get请求给后台传一个{}对象之后不用md5加密用encryptlong加密传给后台，后台也把取到的入参转成{}对象，进行对象循环变遍历挨个对比key值是否相等如果不相等说明入参被修改了。
这个问题如果在入参都是字母和数字的情况是没问题的，如果是中文又出现了前端转义了，后台接受到没转义的，而且encryptlong加密中文还出现乱码就算用base64后台也没能处理好
只能先对get请求进行入参排序后再传给后台了</pre>
          <h3>3、最后的代码</h3>
          <pre>
if (authHeader) {
  const timestamp = new Date().getTime().toString();  //  13位长度的字符串
  request = request.clone({
    setHeaders: {
      'Authorization': 'Bearer ' + authHeader,
      'currentUrl': this.getCurrentUrl(),
      'SR': encryptLong('abs'),
      'SH': this.getSHSecret(request , timestamp),
      'timestamp': timestamp,
      'x-zuul-trc-id': 'WEB' + dayjs().format('YYYYMMDDHHmmss') + timestamp.substring(7)
    },
  });
  return request;
}
getSHSecret(request , timestamp) {
  let val = '';
  if (request.method === 'GET') {
    // get请求body字段都是null  附件下载只有urlWithParams字段有入参 url 后面是没有入参的
    val = request.urlWithParams && request.urlWithParams.split('?')[1] ? decodeURI(request.urlWithParams.split('?')[1]) : '';
    val = this.storage.getItem('logInfo').name + 'abs' + getShParamString(val) + 'HqMdQN6VN9' + timestamp;
  }
  if (request.method === 'POST') {
    // request.body 订单详细下面有入参是数组格式的，数组格式的入参是字符串string类型 ，入参是对象格式的需要转一下
    val = this.storage.getItem('logInfo').name + 'abs' + (typeof request.body === 'string' ? request.body : JSON.stringify(request.body)) + 'HqMdQN6VN9' + timestamp;
  }
  return  Md5.hashStr(val).toString();
}
export function getShParamString(queryString) {
  // 创建空对象
  var params = {};
// 拆分字符串，按"&"分割
  var pairs = queryString.split("&");
// 遍历键值对，将其添加到params对象中
  if(pairs && pairs.length === 1 && pairs[0] === ''){  // 说明get请求没有入参
    return '';
  }
  pairs.forEach(function(pair) {
    let i= pair.indexOf('=');
    if(i !== -1){  // 之前这里是 var keyValue = pair.split("=",2);  但是后续不用 split 因为参数加密后有多个 = 等号出现的问题
      const paramName = pair.slice(0,i);  // 截取到等号前面的key值
      const paramValue = pair.slice(i+1); // 从等号后面开始截取到末尾的value值
      params[paramName] = paramValue;
    }
  });
// 对参数按照参数名进行排序
  var sortedParams = {};
  Object.keys(params).sort().forEach(function(key) {
    sortedParams[key] = params[key];
  });

// 组装参数字符串
  var paramStr = '';
  Object.keys(sortedParams).forEach(function(key) {
    paramStr += key + '=' + sortedParams[key] + '&';
  });
// 去除最后一个多余的"&"
  paramStr = paramStr.slice(0, -1);
  return paramStr;
}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'gatewayUltraVires',
        data() {
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
            toggle() {

            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
