function test() {
   this.name = '你好';
}
console.log(new test());
console.log(Object.create(test));
