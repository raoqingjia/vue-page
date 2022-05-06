let arr = [
  {id: 1, pid: 1},
  {id: 2, pid: 1},
  {id: 2, pid: 1},
  {id: 3, pid: 1},
  {id: 6, pid: 1},
  {id: 3, pid: 1},
  {id: 6, pid: 1},
];
let temparr = [...new Set(arr.map((item) => JSON.stringify(item)))];
let resultArr = temparr.map((item) => JSON.parse(item));
console.log(resultArr);
