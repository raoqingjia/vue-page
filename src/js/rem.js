const docEl = document.documentElement,
  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
  recalc = function recalc() {
    var clientHeight = docEl.clientHeight;
    console.log(docEl.clientHeight);
    if (!clientHeight) return;
    docEl.style.fontSize = 20 * (clientHeight / 1080) + 'px'; // 高度用rem，宽度用百分比
  };
recalc();
window.addEventListener(resizeEvt, recalc, false);
document.addEventListener('DOMContentLoaded', recalc, false);
