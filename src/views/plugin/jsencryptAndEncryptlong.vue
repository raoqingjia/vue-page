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
          </h3>
          <pre>import { JSEncrypt as JSEncryptLong } from 'encryptlong'
import JSEncrypt from 'jsencrypt';
// 密钥对生成 http://web.chacuo.net/netrsakeypair

// RSA加密公钥  秘钥
const publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCWH+ct0j+ibkDgD1HB1EWUEMSTp/uIjg0dfO2VsYLhzVYmF04gUWSrUGHlNb5EyR8rhzTNmCdKCq93pinTUpymEO+T1H7Xzd2op/TDzZRGuB2Yofs2vHRFGQM9m5M8mpBYqog7Nx4fL7zXFqn14eEFd1syJXxPcCHvDo/rwdIEgQIDAQAB';
const privateKey = 'MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAJYf5y3SP6JuQOAPUcHURZQQxJOn+4iODR187ZWxguHNViYXTiBRZKtQYeU1vkTJHyuHNM2YJ0oKr3emKdNSnKYQ75PUftfN3ain9MPNlEa4HZih+za8dEUZAz2bkzyakFiqiDs3Hh8vvNcWqfXh4QV3WzIlfE9wIe8Oj+vB0gSBAgMBAAECgYBGKxM675KesTnRgFeOaVE8K7o16cY/xWWL6uCBnz61m+wwUaRKpsCO8jtPjxcnv3m6NrAPiJaUnPn2ysux4mMk4+HYtkmAe4Lo1MqkGi3+QNX/yCSKsBE//UKj5Cg5dNnKQr+rabLGvRpV0kDwG88zeho+I4gY0N4kwJfQJra7IQJBANQPI9tUcYEAVHbakbZjrU/x7Ark+BQG3ipbf+ogjXXurSon8qRKLwY1shtmBh9QzVa8VouB1XzaYKLag56rswsCQQC1O2SbNhwt8p7O28874KIbt1X1HsdpR8Ksk87AhgavVcsWY8aF314C3/l8PsTMIT2ZUZFXM6uvSx6k98puX94jAkBxnMrxL4TAQJUAOIno1e587ngwPgxLboKI3wzhOx+PF5jfBRgSvUwEX7BUzYxqKrhYx/72L1FZ2wX7OmdaE1ORAkBQWjn7+xy5XoX8z0ZtlOYrBblNycy+J/vvSkVz5LiYCqDVl31Qo71p5uYVqTrWCrLmBF09XYJ0YQkAOYD+OPEjAkBXBJ/JtEjZ/vLG3rO1MRJstYbsJLKwNd99Eiytt3uoeS1YyuaDxGpfKRc4A0h9XS7NrbV92nUgPE5Nf0rKrC1s';

/**
 *   利用jsencrypt对普通字符串加密
 */
// 加密
export function encryptPublic(txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey) // 设置公钥
  return encryptor.encrypt(txt) // 对数据进行加密
}

// 解密
export function decryptPublic(txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPrivateKey(privateKey) // 设置私钥
  return encryptor.decrypt(txt) // 对数据进行解密
}

/**
 *   利用encryptlong字符串长串加密
 */
// 加密
export function encryptLong(txt) {
  const encryptor = new JSEncryptLong()
  encryptor.setPublicKey(publicKey) // 设置公钥
  return encryptor.encryptLong(txt) // 对数据进行加密
}
// 解密
export function decryptLong(txt) {
  const encryptor = new JSEncryptLong()
  encryptor.setPrivateKey(privateKey) // 设置私钥
  return encryptor.decryptLong(txt) // 对数据进行解密
}

import {Base64} from 'js-base64' // node自带
encrypt加密可能有特殊符号，传参最好再转一下
const param = {staffNumber : Base64.encode(encrypt(this.logInfo.name)), pageId: 1}</pre>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'jsencryptAndEncryptlong',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name,
        catalogue:[]
      }
    },
    mounted:function(){
      this.$nextTick(function(){
        this.createCatalogue();
      })
    },
    computed:{},
    methods: {
      jump (index) {
//        let jump = document.getElementsByTagName('h3');
//       // 获取需要滚动的距离
//        let total = jump[index].offsetTop;
//        // Chrome
//        document.body.scrollTop = total;
//        // Firefox
//        document.documentElement.scrollTop = total;
//       // Safari
//        window.pageYOffset = total
//        https://www.cnblogs.com/wisewrong/p/6495726.html  参考网站
        let jump = document.getElementsByTagName('h3');
        let total = jump[index].offsetTop;  // 获取目标位置滚动的距离
        let distance = document.documentElement.scrollTop || document.body.scrollTop; //获取当前滚动轴的位置
        // 平滑滚动，时长500ms，每10ms一跳，共50跳
        let step = total / 50;
        if (total > distance) {
          smoothDown()
        } else {
          let newTotal = distance - total;  //防止total，let step=total/50太小，移动缓慢
          step = newTotal / 50;
          smoothUp()
        }

        function smoothDown () {
          if (total>distance ) {
            distance += step;
            document.body.scrollTop = distance;
            document.documentElement.scrollTop = distance;
            setTimeout(smoothDown, 10)
          } else {
            document.body.scrollTop = total;
            document.documentElement.scrollTop = total
          }
        }
        function smoothUp () {
          if ( total<distance) {
            distance -= step;
            document.body.scrollTop = distance;
            document.documentElement.scrollTop = distance;
            setTimeout(smoothUp, 10)
          } else {
            document.body.scrollTop = total;
            document.documentElement.scrollTop = total
          }
        }
      },
      //创建目录函数
      createCatalogue(){
        let object = document.getElementsByTagName('h3');
        var flag=[];
        for(var i=0;i<object.length;i++){
          var o={name:object[i].innerHTML};
          flag.push(o)
        }
        this.catalogue=flag;
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
