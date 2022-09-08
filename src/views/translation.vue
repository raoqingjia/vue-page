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
            <ul v-if="resultData.explains.length">
              <li>引申：</li>
              <li v-for="(items,index) in resultData.explains">{{items}}</li>
            </ul>
            <div v-if="status ==='zh'">
              <a v-if="resultData.webdict" target="_blank" :href="resultData.webdict">链接🔗</a>
              <iframe v-if="resultData.webdict" :src="resultData.webdict"></iframe>
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
  import $ from 'jquery'
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
          pcurl: '',
          webdict: ''
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
      getTransData() {
        console.log($('#app'));
        if (this.toTranslated.trim()) {
          const val = this.toTranslated.trim()
          // input=q前10个字符 + q长度 + q后10个字符（当q长度大于20）或 input=q字符串（当q长度小于等于20)
          let input = val;
          if(val.length>20){
            input =  val.substring(0,10)+ val.length + val.substring(val.length - 10,val.length);
          }
          const id = '717e19f617f29641' , keys = 'Fr9v9lFCWS8r6Zmg1Q4sPtmqADdxNyXd' , salt = this.guid() , curtime = new Date().getTime();
          console.log(id)
          console.log(keys)
          console.log(salt)
          console.log(curtime)
          console.log(input)
          // sha256(应用ID+input+salt+curtime+应用密钥)
          const sign = sha256(id + input + salt + curtime + keys);
          fetch('https://openapi.youdao.com/api', {
            method: "post",
            headers: new Headers({
              "Content-Type": "application/x-www-form-urlencoded",   //解决跨域
            }),
            body: new URLSearchParams({
              q: val,
              from: this.status === 'zh' ? 'zh-CHS' : 'en',
              to: this.status === 'zh' ? 'en' : 'zh-CHS',
              appKey: id,
              salt: salt,
              sign: sign,
              signType: 'v3',
              curtime: curtime
            }).toString(),
          }).then((resp) => {
            try {
              return resp.json();
            } catch (err) {
            }
            return resp.text();
          }).then((data) => {
            console.log(data);
            this.resultData.explains = data.basic ? data.basic.explains : [];
            this.resultData.translation = data.translation;
            this.resultData.webdict = 'https' + data.webdict.url.split("http")[1];
            this.resultData.pcurl = data.dict.url;

          }).catch((error) => {
            if (error) throw error;
          });

          $.ajax({
            url: "https://openapi.youdao.com/api",
            type: "POST",
            dataType: "jsonp",
            jsonp: "cb",    //这条属性可以设置回调函数的参数名称（必须与后台接口的回调函数参数名保持一致）
            jsonpCallback: "abc", //jQ 自动分配的回调函数的名称进行重命名
            data: {
              q: val,
              from: this.status === 'zh' ? 'zh-CHS' : 'en',
              to: this.status === 'zh' ? 'en' : 'zh-CHS',
              appKey: id,
              salt: salt,
              sign: sign,
              signType: 'v3',
              curtime: curtime
            },
            success: function (data) {
              console.log(data)
            }
          });
        }
      },
      guid() {
        var s = [];
        var x = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
          s[i] = x.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";
        s[19] = x.substr((s[19] & 0x3) | 0x8, 1);
        s[8] = s[13] = s[18] = s[23] = "-";

        var uuid = s.join("");
        return uuid;
      },
      clearData() {
        this.toTranslated = '';
        this.resultData = {
          translation: [],
          explains: [],
          pcurl: '',
          webdict: ''
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
    margin-top: 10px;
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
      height: 200px;
    }
  }


  .btn {
    font-size: 14px;
    padding: 0 12px;
    margin: 20px 0 0 15px;
    line-height: 28px;
    border: 1px solid #c3c3c3;
    border-radius: 20px;
    background-color: #FFFFFF;
    cursor: pointer;
  }
</style>
