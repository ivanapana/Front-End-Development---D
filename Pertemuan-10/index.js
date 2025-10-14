// Rest Parameter & Spread Operator
//1. Rest Parameter
// a. Rest parameter bertipe data array
// const func1 = (...rest) => {
//   console.log(rest);
// };

// func1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//Mini Exercise
// Buatlah fungsi yang dapat menjumlahkan semua nilai
// pada argument

const sum = (arr) => arr.reduce((acc, val) => acc + val, 0);
const func3 = (...rest) => {
  console.log(sum(rest));
};

func3(1, 2, 3, 4, 5);

//2. Spread Operator
// Berkaitan dengan Array & Object
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(...numbers);

// kegunaan spread operator pada array
// 1. duplikasi array
const numbers2 = [...numbers];
console.log(numbers2);

//2. menggabungkan array
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let comnbineArr1 = arr1.concat(arr2, arr3);
console.log(comnbineArr1);
let combineArr2 = [...arr1, ...arr2, ...arr3];
console.log(combineArr2);

// kegunaan spread operator pada object
// 1. duplikasi object
const student1 = {
  fullName: "John",
  status: "Active",
};

const student2 = { ...student1, address: "Manado" };
console.log(student2);

//2. menggabungkan object
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

let combineObject = { ...obj1, ...obj2 };
console.log(combineObject);
