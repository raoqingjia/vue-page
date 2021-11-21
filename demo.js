
// function Car(make, year) {
//   this.make = make;
//   this.year = year;
//   this.info={
//     color: 'red'
//   }
// }
//
// // 分配给 beetle 的一个新的 Car 对象引用
// let beetle1 = new Car('wagen', 1938);
// beetle1.info.score= 100;
// let beetle2 = new Car('Volk', 19);
// beetle2.info.score= 33;
// let beetle3 = new Car('swagen', 18);
//
// console.log(beetle1);
// console.log(beetle2);
// console.log(beetle3);

function Parent(name){
  this.name='lily';
  this.info={
    score:99,
    color:"red"
  }
}
Parent.prototype.getMessage = function(){
  console.log(this.name,this.info)
}
function Child(){

}
Child.prototype = new Parent();
let child1 = new Child('lily2',18,'女');

child1.info.score = 100;
child1.getMessage();
let child2 = new Child();
child2.getMessage();
