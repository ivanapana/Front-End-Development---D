//JavaScript Function
// bagian dari program untuk menjalankan tugas tertentu
// cara 1. function declaration

// function greetings(){
//     console.log("Hello World")
// }

// greetings() //call function

// cara ke 2 function expression
// const greetings2 = function (){
//     console.log("Hello World")
// }

// greetings2()

// function with input(argument & parameter)
// and output to return value
//

// cara 1
//                  parameter
// function greetings(fullName){
//     return "Hello" + fullName
// }

//         Argumen
// greetings("John Doe")
// let output = greetings(" Ivana")
// console.log(output)

// // cara 2
// const greetings2=function(fullName){
//     return "Hello " + fullName
// }

// let output2 = greetings2("Jane Doe")
// console.log(output2)

//Global, Loval, Block Scope Variabel
var x = 10 // global variabel
let x = 10 // global variabel
console.log(x)
function funct1(){
    let y = 20
    console.log(x) //10
    console.log(y) //20
    if(true){
        let z = 30 // block variable
        console.log(x) //10
        console.log(y) //20
        console.log(z) //30
    }
   // console.log(z) error
}

//console.log(y) //ERROR
funct1()

// Mini Exercise
// Modifikasi mini exercise terakhir ttg menghitung BMI
// dengan menggunakan function dimana berat & tinggi
// sebagai argument (input) dan BMI sebagai output