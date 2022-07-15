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
1.npm install vue-i18n@8 --save

2.新建 ./assets/language/langs/en 文件
新建 ./assets/language/langs/zh 文件

文件格式 en与zh的key要一一对应
module.exports = {
  language: {
     name: '英文'
   }
}

3.新建 ./assets/language/i18n.js
import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)  // 全局注入一个插件

const lang = localStorage.getItem('language'); // 从localStorage获取语言选择，初始未选择默认 zh 中文
const i18n = new VueI18n({
 locale: lang,  // 设置语言为 lang 默认 'zh'
 fallbackLocale: 'zh', //如果没有找到要显示的语言，则默认显示 ‘zh’
 silentFallbackWarn: true,  // 控制台上不打印警告
 messages:{
  'en':require('./langs/en'), //英文语言包
  'zh':require('./langs/zh') //中文语言包
 }
})
export default i18n

4.main.js
// 引入中英文切换插件vue-i18n
import i18n from '@/assets/language/i18n';
new Vue({
 i18n,
}).$mount('#app')

5. 页面绑定数据
< i class="num">{ {$t('language.name')}}< /i>
console.log(this.$t('language.name'))   // $t，是vue-i18n国际化插件

数组修改不生效 使用
this.$set(item.placeholder,0,this.$t('prompt.min'))
this.$set(item.placeholder,1,this.$t('prompt.max'))

6. app.vue监听 this.$i18n.locale
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('en')
 //页面刷新重制数据
mounted() {
  let langs = window.localStorage.getItem('language')
    if (langs === 'zh') {
        moment.locale('zh-cn')
        this.locale = zhCN
      } else if (langs === 'en') {
        moment.locale('en')
        this.locale = null
      }
},
watch: {
  '$i18n.locale'(newValue) {
    console.log(newValue)
    console.log(this.$i18n.locale)
    if (this.$i18n.locale === 'zh') {
      moment.locale('zh')
      this.locale = zhCN
    } else if (this.$i18n.locale === 'en') {
      moment.locale('en')
      this.locale = null
    }
  },
  immediate: true,
  deep: true   // 深度监听，监听到更深层级值的变化
},

7.登录页面成功跳转
localStorage.setItem('language','zh');  // 默认是中文

8.导航显示 中英文切换
< a-button size="small" @click="languageClick()">{ {languageType ? 'English' : '中文'}}< /a-button>
//页面刷新重制数据
mounted() {
  let langs = window.localStorage.getItem('language')
  this.languageType = langs === 'zh' ? true : false
},

languageClick() {
  this.languageType = !this.languageType
  console.log(this.$i18n.locale)
  console.log(this.$t('language.name'))
  if (this.languageType) {
    this.$i18n.locale = 'en'
    localStorage.setItem('language', 'en')
  } else {
    this.$i18n.locale = 'zh'
    localStorage.setItem('language', 'zh')
  }
}</pre>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                created: this.$route.query.created,
                title: this.$route.query.name
            }
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
