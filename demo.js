// function Mother(name) {
//   this.name = name;
// }
// var son = new Mother('liming');
// console.log(son.__proto__ === Mother.prototype);  // true


function Foo(){
  this.a = 1;
}
var f1 = new Foo();
console.log(Foo.prototype.constructor === Foo); // true
console.log(f1.constructor === Foo); // true
