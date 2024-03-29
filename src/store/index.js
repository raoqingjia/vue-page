/**
 * Created by Administrator on 2017/12/28.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import storage from '@/storage'

Vue.use(Vuex);

const store = new Vuex.Store({
  // 定义状态
  state: {
    listTab: storage.getItem('listTab')||'all',
    headerNav: [
      {name: '笔记', path: '/index', active: true},
      {name: '案例', path: '/list', active: false},
      {name: '框架', path: '/framework', active: false},
      {name: '插件', path: '/plugin', active: false},
      {name: '作品', path: '/project', active: false},
    ],
    caseNav: [
      {text: "All", code: 'all', img: require('../img/list-icon.png'), description: "全部案例，可通过关键字搜索"},
      {text: "Html/H5", code: 'h5', img: require('../img/html-icon.png'), description: "Html/H5的特性、相关案例"},
      {text: "css/css3", code: 'css', img: require('../img/css-icon.png'), description: "css原有样式、新增css3"},
      {text: "JavaScript", code: 'js', img: require('../img/js-icon.png'), description: "JS原生函数及各属性"},
      {text: "jQuery", code: 'jq', img: require('../img/jq-icon.png'), description: "各个属性及案例分析"},
      {text: "移动端", code: 'app', img: require('../img/app-icon.png'), description: "移动端bug分析记录"},
      // {text: "前端框架", code: 'framework', img: require('../img/plugin-icon.png'), description: "平常项目中遇到的各种问题"},
      {text: "Java", code: 'java', img: require('../img/java-icon.png'), description: "java问题解析"},
      {text: "杂七杂八", code: 'other', img: require('../img/plugin-icon.png'), description: "平常项目中遇到的各种问题"},
    ],
    emotionPassword: storage.getItem('emotionPassword'),
    footerShow: storage.getItem('footerShow')
  },
  mutations: {
    listTabFun_m(state, msg) {
      state.listTab = msg;
      storage.setItem('listTab', msg)
    },
    emotionPasswordFun(state, msg) {
      state.emotionPassword = msg;
      storage.setItem('emotionPassword', msg);
    },
    footerShowFun(state, msg) {
      state.footerShow = msg;
      storage.setItem('footerShow', msg);
    }

  },
  getters: {
    // 请求数据时加载状态
    listTab: state => state.listTab,
    footerShow: state => state.footerShow
  }
});
console.log(store.state);
export default store
