// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import $ from 'jquery'
import storage from '@/storage'
import store from '@/store'
import Axios from 'axios'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'


Vue.prototype.$http=Axios;
Vue.config.productionTip = false;

require('./css/animate.min.css');
require('./css/font-awesome.css');
require('./css/common.css');
require('./js/common.js');
require('./js/common.js');
require('../static/nicescroll/jquery.nicescroll.min.js');



import VueI18n from 'vue-i18n'

Vue.use(VueI18n);// 通过插件的形式挂载
//https://blog.csdn.net/DOCALLEN/article/details/78408137?locationNum=2&fps=1
const i18n = new VueI18n({
  locale: 'zh-CN',    // 通过切换locale的值来实现语言切换   zh-CN 可以写成 this.$i18n.locale来动态切换
  messages: {
    'zh-CN':require('./js/zh'),// 中文语言包
    'en-US': require('./js/en')  // 英文语言包
  }
});



// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})

//生成随机颜色
Vue.prototype.getRandomColor=function  (){
  return '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).substr(-6);
}
//Vue.prototype.imgError=require('./i')

//路由拦截器
router.beforeEach((to, from, next) => {
//假设登陆成功后，user信息保存在sessionStorage中。
  if(to.fullPath.indexOf('/index')!=-1){
    store.commit('footerShowFun',true)
  }else{
    store.commit('footerShowFun',false)
  }
  next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
