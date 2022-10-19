<template>
  <div class="article">
    <div class="content">
      <div class="wrap10">
        <h2 class="art-title"><span>{{languageText}}</span>
          <button class="btn" @click="languageToggle()">切换</button>
        </h2>
        <div class="art-content clear">
          <div class="item-wrap">
            <textarea v-model="toTranslated" class="toTranslated" placeholder="请输入要翻译的文字"></textarea>
          </div>
          <div class="item-wrap">
            <strong v-if="resultData.translation[0]">{{resultData.translation[0]}}</strong>
            <ul v-if="resultData.explains&&resultData.explains.length">
              <li>引申：</li>
              <li v-for="(items,index) in resultData.explains">{{items}}</li>
            </ul>
            <div v-if="resultData.webdict">
              <a target="_blank" :href="resultData.webdict">链接🔗</a>
              <iframe :src="resultData.webdict"></iframe>
            </div>
          </div>
        </div>
        <div class="btn-wrap">
          <button class="btn" @click="getTransData()">翻译</button>
          <button class="btn" @click="clearData()">清除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import sha256 from 'crypto-js/sha256';
  import jsonp from "fetch-jsonp";
  import {app_id, app_secret} from '../js/const';
  import axios from  'axios';
  export default {
    name: 'translation',
    data() {
      return {
        languageText: '中译英',
        status: 'zh',
        toTranslated: '',
        resultData: {
          explains: [],
          translation: [],
          webdict: '',
          speakUrl:'',
          tSpeakUrl:''
        }
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
            this.resultData.explains = res.explains;
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
          explains: [],
          webdict: '',
          speakUrl:'',
          tSpeakUrl:''
        }
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .art-content {
    margin: 0 auto;
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .item-wrap {
    float: left;
    height: 460px;
    width: 560px;
    margin: 0 auto;
    padding: 12px;
    font-size: 16px;
    border: 2px solid #c3c3c3;
    border-radius: 4px;
    background-color: #FFFFFF;
    color: #000000;

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
