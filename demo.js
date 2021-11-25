// 写法一
f1().then(function () {return f2();});
// 写法二
 f1().then(function () {  f2();});
 // 写法三

 f1().then(f2());
 // 写法四

 f1().then(f2);
