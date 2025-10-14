//JvaScript Variable & Operators
//1. JavaScript Variable

// let fullName ="John Doe"; // camel case
// let FullName ="John Doe"; //pascal case
// let full_name ="John Doe"; // snake case

// const namaVariabel2 = "word";

// // tipe-tipe data
// const gender = "male" //string
// let age = 30 //number integer
// let weight = 90.6 //Number float
// let isMarried = false //boolean
// let grade = null // null (kosong)
// let address // undefined

// console.log(gender)


// //2. JavaScript Operator
// // a. Aritmetic Operator (+, -, *, /, %, **)
// // let bil1 = 20
// // let bil2 = 5
// // console.log(bil1 + bil2 ) //25
// // console.log (bil1-bil2) //15
// // console.log (bil1*bil2) //125
// // console.log(bil1/bil2) //4
// // console.log (bil1%bil2) //0
// // console.log(bil1**bil2) /3200000

// //Mini Exercise
// //Buatlah program yang menghitung luas lingkaran
// // dimana r/jari2 anda tentukan sendiri
// // kemudian tampilkan hasilnya

// // let jarijari =5
// // let phi = 3.14
// // console.log("luas lingkaran", (jarijari**2)*phi)

// //b. Assigment Operator (=, +=, -=, *=, /=)
// let bilangan = 5
// bilangan = bilangan + 10 //15
// bilangan += 5 //20

// ///c. string operator (+) concatination
// const firstName = "John"
// const lastName = "Doe"
// const fullName = firstName+ " " + lastName

// console.log(fullName)


// //d. Relational Operator (==, ===, >, <, >=, <=, !=)
// let bil1= 10
// let bil2 = 20
// let bil3 = "10"


// console.log (bil1==bil3) //true
// console.log(bil1===bil3) //false
// console.log(bil1 > bil2) //false
// console.log (bil1 < bil2) //true

// //e. Logical Operator (&&, ||, !)
// console.log (true && true) //true
// console.log (true&&false) //false
// console.log (false&&true) //false
// console.log(false&&false) //false

// console.log (true || true) //true
// console.log (true || false) // true
// console.log (false || true)// true
// console.log ( false || false) //false

// console.log(!true) //false

// //f. Ternary Operator (? :)
// let age = 16
// let isEligible = age >= 17 ? "Bisa Buat KTP" : "Belum bisa buat KTP"
// console.log (isEligible)

//Mini Exercise
// Buat Program yang dapat menghitung BMI (Body Mass Index)
// Rumus BMI : berat (kg) / (tinggi (m) tinggi (m))
// tampilkan hasilnua:
// jika BMI? 25 --> "BMI anda adalah ____, kategori kelebihan berat badan"

let berat = 55
let tinggi = 1.60
let BMI =  berat / (tinggi * tinggi)
let isEligible = BMI >= 25 ? "BMI anda adalah" +BMI  + ", kategori Kelebihan berat badan" : "BMI anda adalah " +BMI  +  ", kekurangan berat badan"
console.log (isEligible)