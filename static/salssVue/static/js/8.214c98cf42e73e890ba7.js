webpackJsonp([8],{"8ZZw":function(n,i,r){var t=r("cDnE");"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);r("rjj0")("31f89519",t,!0)},CKB7:function(n,i,r){"use strict";function t(n){r("8ZZw")}Object.defineProperty(i,"__esModule",{value:!0});var e=r("7+uW"),o=r("gsqX"),a=r.n(o),s=(r("mgS3"),{name:"custCompanyInfo",created:function(){},beforeMount:function(){},mounted:function(){this.$nextTick(function(){this.setSwiper()})},components:{},data:function(){return{pagination:[{text:"基本信息",active:!0},{text:"业务订购",active:!1},{text:"收入",active:!1},{text:"竞争信息",active:!1}],companyName:this.$route.query.companyName,orgCustName:this.$route.query.companyName,branchName:"企业法人",indusCatg:"公共管理和社会组织",orgCustLvl:"B",orgEmpQty:"14",orgPrvd:"",contactAddr:"",subscription:[{orgCustId:null,orgSvcTyp:null,orgSvcName:"物联网（其它）",svcIncome:"0.00万"},{orgCustId:null,orgSvcTyp:null,effDt:"2010-08-19",orgSvcName:"普通VPMN（长号）  ",svcIncome:"0.00万"},{orgCustId:null,orgSvcTyp:null,orgSvcName:"企业随E行",svcIncome:"0.00万"},{orgCustId:null,orgSvcTyp:null,effDt:"2008-08-29",orgSvcName:"企业邮箱",svcIncome:"0.00万"},{orgCustId:null,orgSvcTyp:null,orgSvcName:"集团彩铃",svcIncome:"0.00万"},{orgCustId:null,orgSvcTyp:null,orgSvcName:"农信通",svcIncome:"0.00万"},{orgCustId:null,orgSvcTyp:null,effDt:"2010-09-28",orgSvcName:"企信通",svcIncome:"0.00万"}],competitionInfo:[{operatorTyp:"电联运营商",orgSvcName:"地市级业务",compRoomLoc:"河北省",compFrameCnt:"254",compFramePower:"2000W",dedicatedLineCnt:"543",voiceDlAvgCnt:"754",bandWidth:"50M",installedCompCnt:"3000W",installedCompLoc:"3965",trafficPn:"100200",applicationScenario:"商业",netTyp:"光纤",fee:"2000",contractStartDt:"2017-03",contractEndDt:"2019-02",totalInc:"23000",cmccProvPrvdName:"河北省"}]}},methods:{setSwiperIndex:function(n){for(var i=this,r=0;r<i.pagination.length;r++)e.a.set(i.pagination[r],"active",!1);e.a.set(i.pagination[n],"active",!0),console.log(n+"------initial"),this.setSwiper(n)},setSwiper:function(n){new a.a(".swiper-container",{direction:"horizontal",pagination:".swiper-pagination",paginationClickable:!0,paginationBulletRender:function(n,i,r){return console.log(r),0==i?'<li class="'+r+'"> 基本信息</li>':1==i?'<li class="'+r+'">业务订购</li>':2==i?'<li class="'+r+'">收入</li>':3==i?'<li class="'+r+'">竞争信息</li>':void 0}})}}}),c=function(){var n=this,i=n.$createElement,r=n._self._c||i;return r("div",[r("section",{staticClass:"content swiper-container"},[r("div",{staticClass:"bank-name",domProps:{innerHTML:n._s(n.companyName)}}),n._v(" "),r("div",{staticClass:"bank-box swiper-container"},[r("div",{staticClass:"title-infor"},[r("ul",{staticClass:"swiper-pagination"},n._l(n.pagination,function(i,t){return r("li",{staticClass:"swiper-pagination-bullet",class:{active:i.active},domProps:{innerHTML:n._s(i.text)},on:{click:function(i){n.setSwiperIndex(t)}}})}))]),n._v(" "),r("div",{staticClass:"swiper-wrapper"},[r("div",{staticClass:"swiper-slide"},[r("ul",{staticClass:"infor"},[r("li",[r("span",[n._v("客户名称：")]),r("i",{domProps:{innerHTML:n._s(n.orgCustName)}})]),n._v(" "),r("li",[r("span",[n._v("机构类型：")]),r("i",{domProps:{innerHTML:n._s(n.branchName)}})]),n._v(" "),r("li",[r("span",[n._v("行业类型：")]),r("i",{domProps:{innerHTML:n._s(n.indusCatg)}})]),n._v(" "),r("li",[r("span",[n._v("客户级别：")]),r("i",{domProps:{innerHTML:n._s(n.orgCustLvl)}})]),n._v(" "),r("li",[r("span",[n._v("职工数量：")]),r("i",{domProps:{innerHTML:n._s(n.orgEmpQty)}})]),n._v(" "),r("li",[r("span",[n._v("所在地市：")]),r("i",{domProps:{innerHTML:n._s(n.orgPrvd)}})]),n._v(" "),r("li",[r("span",[n._v("通讯地址：")]),r("i",{domProps:{innerHTML:n._s(n.contactAddr)}})])])]),n._v(" "),r("div",{staticClass:"swiper-slide"},[r("ul",{staticClass:"infor order"},n._l(n.subscription,function(i){return r("li",[r("span",[n._v("业务名称：")]),r("i",{domProps:{innerHTML:n._s(i.orgSvcName)}}),r("br"),n._v(" "),r("span",[n._v("生效时间：")]),r("i",{domProps:{innerHTML:n._s(i.effDt)}})])}))]),n._v(" "),r("div",{staticClass:"swiper-slide "},[r("ul",{staticClass:"infor order"},n._l(n.subscription,function(i){return r("li",[r("span",[n._v("业务名称：")]),r("i",{domProps:{innerHTML:n._s(i.orgSvcName)}}),r("br"),n._v(" "),r("span",[n._v("收      入：")]),r("i",{domProps:{innerHTML:n._s(i.svcIncome)}})])}))]),n._v(" "),r("div",{staticClass:"swiper-slide competition"},[r("ul",{staticClass:"infor order"},n._l(n.competitionInfo,function(i){return r("li",[r("span",[n._v("运营商类型：")]),r("i",{domProps:{innerHTML:n._s(i.operatorTyp)}}),r("br"),n._v(" "),r("span",[n._v("集团业务类型：")]),r("i",{domProps:{innerHTML:n._s(i.orgSvcName)}}),r("br"),n._v(" "),r("span",[n._v("机房位置：")]),r("i",{domProps:{innerHTML:n._s(i.compRoomLoc)}}),r("br"),n._v(" "),r("span",[n._v("机架数：")]),r("i",{domProps:{innerHTML:n._s(i.compFrameCnt)}}),r("br"),n._v(" "),r("span",[n._v("机架功耗：")]),r("i",{domProps:{innerHTML:n._s(i.compFramePower)}}),r("br"),n._v(" "),r("span",[n._v("专线条数：")]),r("i",{domProps:{innerHTML:n._s(i.dedicatedLineCnt)}}),r("br"),n._v(" "),r("span",[n._v("语音专线的日均话务量：")]),r("i",{domProps:{innerHTML:n._s(i.voiceDlAvgCnt)}}),r("br"),n._v(" "),r("span",[n._v("带宽：")]),r("i",{domProps:{innerHTML:n._s(i.bandWidth)}}),r("br"),n._v(" "),r("span",[n._v("装机量：")]),r("i",{domProps:{innerHTML:n._s(i.installedCompCnt)}}),r("br"),n._v(" "),r("span",[n._v("装机地址：")]),r("i",{domProps:{innerHTML:n._s(i.installedCompLoc)}}),r("br"),n._v(" "),r("span",[n._v("话务号段：")]),r("i",{domProps:{innerHTML:n._s(i.trafficPn)}}),r("br"),n._v(" "),r("span",[n._v("应用场景：")]),r("i",{domProps:{innerHTML:n._s(i.applicationScenario)}}),r("br"),n._v(" "),r("span",[n._v("网络类型：")]),r("i",{domProps:{innerHTML:n._s(i.netTyp)}}),r("br"),n._v(" "),r("span",[n._v("资费：")]),r("i",{domProps:{innerHTML:n._s(i.fee)}}),r("br"),n._v(" "),r("span",[n._v("合同起始时间：")]),r("i",{domProps:{innerHTML:n._s(i.contractStartDt)}}),r("br"),n._v(" "),r("span",[n._v("合同终止时间：")]),r("i",{domProps:{innerHTML:n._s(i.contractEndDt)}}),r("br"),n._v(" "),r("span",[n._v("总收入（万/年）：")]),r("i",{domProps:{innerHTML:n._s(i.totalInc)}}),r("br"),n._v(" "),r("span",[n._v("省份：")]),r("i",{domProps:{innerHTML:n._s(i.cmccProvPrvdName)}}),r("br")])}))])])])])])},l=[],p={render:c,staticRenderFns:l},d=p,v=r("VU/8"),m=t,b=v(s,d,!1,m,"data-v-1bb7fb28",null);i.default=b.exports},cDnE:function(n,i,r){var t=r("kxFB");i=n.exports=r("FZ+f")(!1),i.push([n.i,"\n.content[data-v-1bb7fb28] { width: 94%; margin:10px auto 4rem; overflow: hidden;\n}\n.bank-name[data-v-1bb7fb28] { position: relative; height: 5rem; line-height: 5rem; text-align: center;\n  width: 100%; background: #fff; border-radius: 5px; margin: 1rem 0; font-size: 1.6rem;overflow: hidden;\n  text-overflow:ellipsis;\n  white-space: nowrap;\n}\n.bank-name i[data-v-1bb7fb28] { position: absolute; left: 2rem; top: -.5rem; width: 2.9rem; height: 3.5rem;\n  line-height: 3.0rem; text-align: center; color: #fff; font-size: 1.6rem;\n  background: url("+t(r("+omN"))+") no-repeat; background-size: contain; font-style: normal;\n}\n.bank-box[data-v-1bb7fb28] { width: 94%; margin: 1rem auto 0; background: #fff; border-radius: 5px; padding: .8rem .8rem 6rem;\n}\n.title-infor[data-v-1bb7fb28] { margin: 1rem 0;\n}\n.title-infor ul[data-v-1bb7fb28]{ display: -webkit-box; display: -ms-flexbox; display: flex; -ms-flex-wrap: wrap-reverse; flex-wrap: wrap-reverse;-webkit-flex-wrap: wrap; width: 100%;\n}\n.swiper-pagination-bullet[data-v-1bb7fb28]{\n  width: 5.7rem;\n  height: 5.7rem;\n  text-align: center;\n  line-height: 5.7rem;\n  -webkit-box-shadow:  0 0 8px rgba(38,72,174,.2);\n  box-shadow: 0 0 8px rgba(38,72,174,.2);\n  margin: 0 .6rem;\n  color: #709fdc;\n  border-radius: 5px;\n  background:#fff;\n  color: #709fdc!important;\n  opacity: 1.0;\n}\n.swiper-pagination-bullet-active[data-v-1bb7fb28]{\n  background: #3964ef;\n  color: #fff!important;\n}\n.title-infor li.active[data-v-1bb7fb28] { background: #3964ef; color: #fff;\n}\n.swiper-slide[data-v-1bb7fb28] {\n  top:6rem;\n  padding-bottom: 6rem;\n}\n.infor[data-v-1bb7fb28] { height: 22.5rem; overflow-y: scroll; padding: 0 .9rem;\n}\n.infor li[data-v-1bb7fb28] {\n  /*height: 3.1rem;*/\n  /*line-height: 3.1rem;*/\n  margin: 1rem 0;\n}\n.infor span[data-v-1bb7fb28] {\n  color: #989898;\n  vertical-align: top;width:25%\n;\n}\n.infor i[data-v-1bb7fb28] {\n  font-style: normal;\n  width: 74%;\n  display: inline-block;\n  vertical-align: top;\n  text-align: left;\n}\nhtml[data-v-1bb7fb28]{height: 100%; overflow: hidden;\n}\n.competition .infor span[data-v-1bb7fb28]{width: auto;\n}\n.competition .infor i[data-v-1bb7fb28]{width:45%;\n}\n.swiper-slide li[data-v-1bb7fb28] {\n  text-align: left;\n}\n\n\n",""])}});