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
    listTab:storage.getItem('listTab'),
    headerNav:[
      {name:'首页',path:'/index',active:true},
      {name:'模板',path:'/template',active:false},
      {name:'工具',path:'/software',active:false},
      {name:'项目',path:'/project',active:false},
      {name:'生活',path:'/emotion',active:false}
    ],
    caseNav:[
      {text:"Html/H5",code:'h5',img:require('../img/html-icon.png'),description:"Html/H5的特性、相关案例"},
      {text:"css/css3",code:'css',img:require('../img/css-icon.png'),description:"css原有样式、新增css3"},
      {text:"JavaScript",code:'js',img:require('../img/js-icon.png'),description:"JS原生函数及各属性"},
      {text:"jQuery",code:'jq',img:require('../img/jq-icon.png'),description:"各个属性及案例分析"},
      {text:"移动端",code:'app',img:require('../img/app-icon.png'),description:"移动端bug分析记录"},
      {text:"插件",code:'plugin',img:require('../img/plugin-icon.png'),description:"常用插件文档，Bug解决方案"},
      {text:"All",code:'all',img:require('../img/list-icon.png'),description:"全部案例，可通过关键字搜索"}
    ],
    softwareNav:[
      {img:require('../img/webstrom-icon.png'),text:"WebStorm11.0.3汉化版",description:"好用的JavaScript开发工具",link:"https://pan.baidu.com/s/1PxvKUOkkTwn_0viQecA9LA"},
      {img:require('../img/editplus-icon.png'),text:"EditPlus 3",description:"文本编辑器",link:"https://pan.baidu.com/s/1WwcadLXMR5TOB0A_PKSX6g"},
      {img:require('../img/postman-icon.png'),text:"Postman-win64-4.10.7",description:"一款强大的HTTP调试插件",link:"https://pan.baidu.com/s/1WSNCqvtLQOh7fBT988afiQ"},
      {img:require('../img/liwo-icon.png'),text:"狸窝视频转换器4.2.0.3",description:"一款基于视频、音频剪切软件",link:"https://pan.baidu.com/s/1OC8bKzg5Y0094eoLo8UGAQ"},
      {img:require('../img/apache-icon.png'),text:"Apache 2.4.25",description:"Web服务器软件",link:"https://pan.baidu.com/s/1TPFQ6eV6hodCVyRzrXTddA"},
      {img:require('../img/ie-icon.png'),text:"IE11-x64",description:"版本11.0.9600.18893",link:"https://pan.baidu.com/s/1PqBIPaQL-yyc2ZYtxpKjvg"},
      {img:require('../img/BCompare-icon.png'),text:"BCompare-4.1.3",description:"代码对比工具",link:"https://pan.baidu.com/s/1qBFoDGKIT7Zsfa_YHMSjRA"},
      {img:require('../img/ps-icon.png'),text:"Photoshop CS6",description:"图像编辑软件",link:"https://pan.baidu.com/s/1nuKdK62Hp7_f7J30IW_1hg"},
      {img:require('../img/mysql-icon.png'),text:"MySQL",description:"关系型数据库管理系统",link:""},
      {img:require('../img/mariadb-icon.png'),text:"MariaDB",description:"完全兼容MySQL",link:""},
      {img:require('../img/xingyuan-icon.png'),text:"星愿浏览器",description:"网页浏览器",link:"https://pan.baidu.com/s/1nNgYd94kt6iuOZi1xBk0OA"}
    ],
    emotionPassword:storage.getItem('emotionPassword'),
    footerShow:storage.getItem('footerShow')
  },
  mutations:{
    listTabFun_m(state,msg){
      state.listTab = msg;
      storage.setItem('listTab',msg)
    },
    emotionPasswordFun(state,msg){
      state.emotionPassword = msg;
      storage.setItem('emotionPassword',msg);
    },
    footerShowFun(state,msg){
      state.footerShow = msg;
      storage.setItem('footerShow',msg);
    }

  },
  getters :{
  // 请求数据时加载状态
    listTab: state => state.listTab,
    footerShow: state => state.footerShow
   }
});

export default store
