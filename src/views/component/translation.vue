<template>
  <div class="translate-wrap" v-if="showWindow">
    <div class="translate-content">
      <h2 class="title"><span>{{languageText}}</span>
        <button class="btn" @click="languageToggle()">切换</button>
      </h2>
      <div class="item-wrap clearfix">
        <div class="item-aside">
          <textarea v-model="toTranslated" class="toTranslated" placeholder="请输入要翻译的文字"></textarea>
        </div>
        <div class="item-aside">
          <div v-for="(items,index) in resultData.web">
            <h3>{{index+1}}、{{items.key}}</h3>
            <p>{{items.value.join("、")}}</p>
          </div>
          <div v-if="resultData.webdict">
            <a target="_blank" :href="resultData.webdict">链接🔗</a>
            <iframe :src="resultData.webdict"></iframe>
          </div>
        </div>
      </div>
      <div class="btn-wrap">
        <button class="btn" @click="getTransData()">翻译</button>
        <button class="btn" @click="clearData()">清除</button>
        <button class="btn" @click="closeWindow()">关闭</button>
      </div>
    </div>
  </div>
</template>

<script>
  import sha256 from 'crypto-js/sha256';
  import jsonp from "fetch-jsonp";
  import {app_id, app_secret} from '../../js/const';
  export default {
    name: 'translation',
    data() {
      return {
        languageText: '中译英',
        status: 'zh',
        toTranslated: '',
        resultData: {
          web: [],
          translation: [],
          webdict: '',
          speakUrl:'',
          tSpeakUrl:''
        },
        showWindow: false
      }
    },
    mounted() {
    },
    methods: {
      languageToggle() {
        if (this.status === 'zh') {
          this.status = 'en';
          this.languageText = '英译中';
        } else {
          this.status = 'zh';
          this.languageText = '中译英';
        }
        this.clearData();
      },
      // 有道翻译开发文档
      // https://ai.youdao.com/doc.s#docs
      // https://ai.youdao.com/DOCSIRMA/html/%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E7%BF%BB%E8%AF%91/API%E6%96%87%E6%A1%A3/%E6%96%87%E6%9C%AC%E7%BF%BB%E8%AF%91%E6%9C%8D%E5%8A%A1/%E6%96%87%E6%9C%AC%E7%BF%BB%E8%AF%91%E6%9C%8D%E5%8A%A1-API%E6%96%87%E6%A1%A3.html
      getTransData() {
        if (this.toTranslated.trim()) {
          const query = this.toTranslated.trim()
          // input=q前10个字符 + q长度 + q后10个字符（当q长度大于20）或 input=q字符串（当q长度小于等于20)
          let input = query;
          if (query.length > 20) {
            input = query.substring(0, 10) + query.length + query.substring(query.length - 10, query.length);
          }
          const appKey = app_id , keys = app_secret, salt = (new Date).getTime(), curtime = Math.round(new Date().getTime() / 1000);
          // sha256(应用ID+input+salt+curtime+应用密钥)
          const sign = sha256(appKey + input + salt + curtime + keys);
          const params = {
            q: query,
            from: this.status === 'zh' ? 'zh-CHS' : 'en',
            to: this.status === 'zh' ? 'en' : 'zh-CHS',
            appKey: appKey,
            salt: salt,
            sign: sign,
            signType: 'v3',
            curtime: curtime
          }
          let url = "https://openapi.youdao.com/api?";
          for (const key in params) {
            url = url + "&" + key + "=" + params[key];
          }
          jsonp(url).then(res => {
            return res.json();
          }).then(res => {
            console.log(res);
            this.resultData.web = res.web?res.web:[];
            this.resultData.translation = res.translation;
            this.resultData.webdict = 'https' + data.webdict.url.split("http")[1];
            this.resultData.speakUrl = res.speakUrl;
            this.resultData.tSpeakUrl = res.tSpeakUrl;
          }).catch((err) => {
            console.log(err);
          });
        }
      },
      clearData() {
        this.toTranslated = '';
        this.resultData = {
          translation: [],
          web: [],
          webdict: '',
          speakUrl:'',
          tSpeakUrl:''
        }
      },
      closeWindow() {
        this.showWindow = false;
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .translate-wrap{
    position: fixed;
    top: 53px;
    right: 0;
    border: 1px solid #cccccc;
    background: #cccccc;
    .translate-content {
      width: 800px;
      .title{
        margin: 10px 0;
      }
    }
  }

  .item-wrap{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .item-aside {
      height: 400px;
      width: 300px;
      padding: 12px;
      font-size: 16px;
      border: 2px solid #c3c3c3;
      border-radius: 4px;
      background-color: #FFFFFF;
      color: #000000;
      h3{
        text-align: left;
        font-size: 16px;
        line-height: 32px;
      }
      textarea {
        width: 100%;
        height: 100%;
        font-size: 16px;
      }

      strong {
        font-size: 18px;
        padding: 10px 0;
        margin: 0 0 10px 0;
      }

      strong, a {
        display: block;
        text-align: left;
        color: #000000;
      }
      p{
        text-align: left;
        line-height: 28px;
      }
      ul {
        border-top: 1px solid #c3c3c3;
      }

      ul li {
        line-height: 32px;
      }

      iframe {
        width: 100%;
        height: 250px;
      }
    }
  }

  .btn-wrap{
    margin: 10px 0;
  }
  .btn {
    font-size: 14px;
    padding: 0 12px;
    margin: 0 0 0 15px;
    line-height: 28px;
    border: 1px solid #c3c3c3;
    border-radius: 20px;
    background-color: #FFFFFF;
    cursor: pointer;
  }
</style>
