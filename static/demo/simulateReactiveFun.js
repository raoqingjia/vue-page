//  输出结果打印
function output(key,value) {
  console.log("set key = "+key + ", value = " + value);
}

//  利用Object.defineProperty实现响应监听
function defineProperty(obj,key,val) {
  reactive(val);  //  这里是能监听多维对象的关键点
  Object.defineProperty(obj,key,{   //  Object.defineProperty 入参关键是 原有对象，key值
     get(){
       return val;
     },
     set(newValue){
        if(val === newValue){
          return false;
        }
       val = newValue;
        output(key,newValue);
     }
  })
}

function reactive(obj) {
  if(typeof obj === "object") {   // 如果是对象类型才进行后续的逻辑判断
    for (const key in obj) {
      defineProperty(obj,key,obj[key]);
    }
  }
}
const data = {
  a : 1,
  b : 2,
  c : {
    c1: {
      af : 99
    },
    c2 : 4
  }
}
  reactive(data);
data.a = 5;
data.b = 7;
data.c.c2 = 4;
data.c.c1.af = 121;
