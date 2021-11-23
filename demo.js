// function Mother(name) {
//   this.name = name;
// }
// var son = new Mother('liming');
// console.log(son.__proto__ === Mother.prototype);  // true


// function Foo(){
//   this.a = 1;
// }
// var f1 = new Foo();
// console.log(Foo.prototype.constructor === Foo); // true
// console.log(f1.constructor === Foo); // true


function myNew(constrc, ...args) {
  // 1,2 创建一个对象obj，将obj的[[prototype]]属性指向构造函数的原型对象
  // 即实现：obj.__proto__ === constructor.prototype
  const obj = Object.create(constrc.prototype);
  // 3.将constrc内部的this（即执行上下文）指向obj，并执行
  const result = constrc.apply(obj, args);
  // 4. 如果构造函数返回的是对象，则使用构造函数执行的结果。否则，返回新创建的对象
  return result instanceof Object ? result : obj;
}

// 使用的例子：
function Person(name, age){
  this.name = name;
  this.age = age;
}
const person1 = myNew(Person, 'Tom', 20);
console.log(person1);  // Person {name: "Tom", age: 20}
