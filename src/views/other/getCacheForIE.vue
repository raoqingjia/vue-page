<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>
现象是abs项目中流转信息，bpm信息请求是get请求，入参就一个订单id，测试哪里信息总是不更新，他笔记本ie每次都得清缓存；
IE 浏览器在发起 GET 请求，当参数一样时，浏览器会直接使用缓存数据，这样对于实时性有要求的数据不适用。但是谷歌浏览器不会
1、最简单的方法在get 请求后面添加一个参数 t = 时间戳   t = new Date().getTime();

2、axios解决办法
2.1、['Cache-Control'] = 'no-cache'; ['Pragma'] = 'no-cache';
在axios中设置header，ajax可以用setRequestHeader方法（推荐）
const api = axios.create({
    // ...
    headers: {
        'Cache-Control': 'no-cache'
    }
    // ...
})
2.2、 请求时拦截器
axios.interceptors.request.use(
  (config) => {
    const token = store.state.token;
    // ie11 缓存处理
     if (config.method === 'get') {
      config.params = {
        _t: Date.now(),
        ...config.params,
      };
      或者用下面的写法
      config.params  =  config.params || {};
		  config.params.t = Date.parse(new Date())/1000; //添加时间戳
    }
    if (token) {
      config.params = {
        _TOKEN: token,
        ...config.params
      };
    }
    return config;
  },
  (err) => {
    Message.error('请求超时!');
    return Promise.reject(err);
  }
);
3、angular
3.1改造http的get封装方法每次get请求入参加入时间戳
_getV2(url: string, body: any): Observable< any> {
  let params = '?timeStamp=' + new Date().getTime();
  console.log(body);
  for (const key in body) {
    if (body.hasOwnProperty(key)) {
      params += '&' + key + '=' + body[key];
    }
  }
  return this.http.get(url + params, {headers: this.httpHeader})
    .pipe(retry(1), catchError((err) => this.handleError(err, this.router)));
}
3.2 改http拦截器
// 重新对 请求对象 Authorization 重新设置jwtToken
addAuthHeader(request) {
  const authHeader = this.storage.getItem('jwtToken');
  if (authHeader) {
    request = request.clone({
      setHeaders: {
        'Authorization': 'Bearer ' + authHeader,
        'currentUrl': this.getCurrentUrl(),
        'SR': this.rsaEncryptor.encrypt('abs'),
        '_time': new Date().getTime()
      },
    });
    return request;
  }
  return request;
}
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'getCacheForIE',
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
