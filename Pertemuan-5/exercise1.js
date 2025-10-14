//1. IIFE

let output = (function(berat, tinggi){
    let n = berat/(tinggi*tinggi)
    return n > 25 ? "BMI Anda adalah " + n + ", kategori kelebihan berat badan" : "BMI anda adalah" + n +  ", kategori normal";
}) (30, 1.60)
console.log(output)

//2. Callback Function
function BMI (callback){
    let result = callback(100, 1.60)
    return result
}

let ivana = BMI (function(berat, tinggi){
    let n = berat/(tinggi*tinggi);
    return n > 25 ? "BMI Anda adalah " + n + ", kategori kelebihan berat badan" : "BMI anda adalah " + n +  ", kategori normal";
});
console.log (ivana);
