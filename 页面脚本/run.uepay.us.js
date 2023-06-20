// https://run.uepay.us/  下单刷新脚本
var refreshTime = 3000; // 单位毫秒 如果网速慢页面跳转慢 数量调大
var refreshCount = 0;
setElementClick01();  // 开始执行脚本
//  触发第1个dom按钮 购买订阅
function setElementClick01() {
  var elements = document.getElementsByClassName('nav-main-link-name');
  for (var i = 0; i < elements.length; i++) {
    if(elements[i].innerHTML === '购买订阅'){
      // console.log('1、购买订阅')
      elements[i].click();
    }
  }
  setTimeout(function() {
    setElementClick02()
  }, refreshTime )
}
//  触发第2个dom按钮 立即订阅
function setElementClick02() {
  var elements = document.getElementsByClassName('btn-alt-primary');
  for (var i = 0; i < elements.length; i++) {
    if(elements[i].innerHTML === '立即订阅'){
      // console.log('2、立即订阅')
      elements[i].click();
    }
  }
  setTimeout(function() {
    setElementClick03()
  }, refreshTime )
}
//  触发第3个dom按钮 下单  但是这个class类名里有个span包裹着下单文字
function setElementClick03() {
  var elements = document.getElementsByClassName('btn-primary');
  for (var a = 0; a < elements.length; a++) {
    var spanEle =  elements[a].getElementsByTagName('span');
    for (var i = 0; i < spanEle.length; i++) {
      if(spanEle[i].innerHTML && spanEle[i].innerHTML.indexOf('下单')!==-1){
        // console.log('3、下单')
        spanEle[i].click();
      }
    }
  }
  setTimeout(function() {
    setElementClick04()
  }, refreshTime )
}
//  触发第4个dom按钮 结账  但是这个class类名里有个span包裹着下单文字
function setElementClick04() {
  var elements = document.getElementsByClassName('btn-primary');
  for (var a = 0; a < elements.length; a++) {
    var spanEle =  elements[a].getElementsByTagName('span');
    for (var i = 0; i < spanEle.length; i++) {
      if(spanEle[i].innerHTML && spanEle[i].innerHTML.indexOf('结账')!==-1){
        // console.log('4、结账')
        spanEle[i].click();
      }
    }
  }
  setTimeout(function() {
    refreshCount ++;
    console.log('已经刷了：【'+refreshCount + '】脚本');
    setElementClick01()
  }, refreshTime )
}
