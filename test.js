

var p = {
  name : "lisi",
  age : 20,
  friends : ['张三', '李四']
}
var p1 = {
  name : "lisi",
  age : 20,
  friends : ['张三', '李四']
}
var p2 = Object.assign({}, p); // 则p1中就有了与p相同的属性和方法.  p1是接受者，p是提供者;
console.log(p1);
p.age = 3;
console.log(p.age);
console.log(p1.age);
