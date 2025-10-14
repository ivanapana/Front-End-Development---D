// IIFE & CALLBACK FUNCTION
// 1. IIFE (Immediately Invoked Function Expression)
//          Fungsi yang langsung dipanggil atau dijalankan
//          self-executing anonymous function
//          

(function (){
    console.log("Hello World");
})()

// IIFE with parameter & return value

// let output = (function (fullName){
//     return "Hello " + fullName;
// })("John Doe");
// console.log(output);

//2. Callback Function
//  function passsed into another function as an argument
// function yang diteruskan ke fungsi lain sebagai argumen
function greetings(callback){
    let result = callback("John Doe");
    return result;
}

//callback function must be an anonymous function
let output = greetings(function (fullName){
    return "Hello " + fullName;
});

console.log(output);
//Calback with parameter & return value


// Exercose #01
// buat program untuk menghitung BMI dgn menggunakkan
// IIFE & Callback function yang memiliki parameter  &
// return value