// Array & object in javascript
// 1.  Array
// Cara mendeklarasikan array
// cara 1. array literal

let students = ["John", "Jack", "Peter", "Bob"];
let john = ["John", 30, true, [80, 90, 100]];

//cara 2. kata kunci "new"
let employees = new Array("John", "Jack", "Peter", "Bob");

// menampilkan semua elemen sekaligus
console.log(students);

// menampilkan element array berdasarkan index
console.log(students[2]);

john[2] = false;
console.log(john);
// menampilkan index terakhir didalam array
console.log(students.length);
console.log(students[students.length - 1]);

// Array Method
let array = [1, 2, 3, "Hello", false, true];
// 1. toString()
array.toString();
console.log(array.toString());
//2. join ()
console.log(array.join("-"));
console.log(array.join(" "));
console.log(array.join("#"));
// 3. pop () -  menghapus element terakhir
array.pop();
console.log(array);
//4. push() - menambah element terakhir
array.push("Selamat Sore");
console.log(array);
//5. shift () - hapus elemt pertama
array.shift();
console.log(array);
// 6. unshift ("Selamat Sore");
array.unshift("Selamat Sore");
console.log(array);

// 7. splice () -  tambah/hapus, elment di tengah
array.splice(3, 0);
console.log(array);

// 8. slice()
let numbers = array.slice(1, 4);
console.log(numbers);

// 9. concat ()- menggabungkan array
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
let num3 = [7, 8, 9];
let combineNumbers = num1.concat(num2, num3);
console.log(combineNumbers);

// 2. Object --> memiliki property dan nilai

let johnObj = {
  fullName: "John Doe",
  age: 30,
  isActive: true,
  grade: [80, 90, 100],
  address: {
    street: "Jl.Arnold Mononutu",
    city: "Minahasa Utara",
    province: "Sulawesi Utara",
  },

  sayHello: function () {
    console.log("Hello my name is " + this.fullName);
  },
};

// cara mengakses element dalam object
//cara 1 . dot notation
console.log(johnObj.fullName);
console.log(johnObj.grade[1]);
console.log(johnObj.address.street);
// cara 2. bracket notation
console.log(johnObj["fullName"]);
console.log(johnObj["grade"[1]]);
console.log(johnObj["address"]["street"]);
johnObj["sayHello"]();

johnObj.job = "Programmer"; // jika properti tdk ada maka akan ditambahkan
delete johnObj.isActive; // hapus properti dlm object
console.log(johnObj);
