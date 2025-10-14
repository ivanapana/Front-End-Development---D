// Mini Exercise
// Modifikasi mini exercise terakhir ttg menghitung BMI
// dengan menggunakan function dimana berat & tinggi
// // sebagai argument (input) dan BMI sebagai output


// var x = 10 // global variabel
// let x = 10 // global variabel
// console.log(x)
// function funct1(){
//     let y = 20
//     console.log(x) //10
//     console.log(y) //20
//     if(true){
//         let z = 30 // block variable
//         console.log(x) //10
//         console.log(y) //20
//         console.log(z) //30
//     }
//    // console.log(z) error
// }

//console.log(y) //ERROR
// funct1()


// function funct1(berat, tinggi){
//     // let berat = 55
//     // let tinggi = 1.60
//     return berat, tinggi
    
//     // console.log("Berat anda " + berat + "kg")
//     // console.log("Tinggi anda " + tinggi + "m")
//     // let isEligible = BMI >= 25 ? "BMI anda adalah" + BMI  + ", kategori Kelebihan berat badan" : "BMI anda adalah " + BMI  +  ", kekurangan berat badan"
//     // console.log (isEligible)
// }

// let berat = 55
// let tinggi = 1.60
// let BMI =  berat / (tinggi * tinggi)
// let isEligible = BMI >= 25 ? "BMI anda adalah" + BMI  + ", kategori Kelebihan berat badan" : "BMI anda adalah " + BMI  +  ", kekurangan berat badan"
// console.log (isEligible)

// funct1()

function calculateBMI (berat, tinggi){
    let bmi = berat/ (tinggi*tinggi)
    return bmi >= 25 ? "BMI anda adalah" + bmi + ", kategori Kelebihan berat badan" : "BMI anda adalah " + bmi  +  ", kekurangan berat badan"
}

let output = calculateBMI(55, 1.60)
console.log(output)

// pelajari dirumah tentang IIFE & callback function
