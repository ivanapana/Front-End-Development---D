// Asynchronous Javascript

// Synchronous -> single thread -> blocking
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3"); // Proses yang memakan waktu yang lama
// console.log("Proses 4");

// Asynchronous -> multi thread -> non-blocking
// 1. Parallel
// setTimeout(() => {
//   console.log("Proses 1");
// }, 4000);
// setTimeout(() => {
//   console.log("Proses 2");
// }, 2000);
// setTimeout(() => {
//   console.log("Proses 3");
// }, 5000);
// setTimeout(() => {
//   console.log("Proses 4");
// }, 1000);

//2. Concurrent
// setTimeout(() => {
//   console.log("Proses 1");
//   setTimeout(() => {
//     console.log("Proses 2");
//     setTimeout(() => {
//       console.log("Proses 3");
//       setTimeout(() => {
//         console.log("Proses 4");
//         setTimeout(() => {
//           console.log("Proses 5");
//           setTimeout(() => {
//             console.log("Proses 6");
//             setTimeout(() => {
//               console.log("Proses 7");
//             }, 4000);
//           }, 4000);
//         }, 4000);
//       }, 4000);
//     }, 4000);
//   }, 4000);
// }, 4000);

//3. Promise (Diterima, Ditolak, Menunggu )
let condition = true;
const newPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Berhasil");
  } else {
    reject("Gagal");
  }
});

// Cara menggunakkan Promise
//1. then-catch
// newPromise
//   .then((result) => `${result} !!!`) // Proses 1
//   .then((result2) => console.log(result2)) // Proses 2
//   .catch((error) => console.log(error)); // Jika ditolak

//2. async/await
//Buat didalam fungsi

// const getData = () => async () => {
//   const result = await newPromise;
//   console.log(result);
// };

// const getData = () => async () => {
//   try {
//     const result = await newPromise;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getData();

// Get data dari API menggunakkan fetch
fetch("https://jsonplaceholder.typicode.com/users")
  .then((result) => result.json())
  .then((data) => console.log(data));

// Mini Exercise
// Ubah then-catch diatas menggunakkan async-await
// dan tampilkan field name saja
const getUsers = async () => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/users"); // proses 1
    const data = await result.json(); // proses 2
    data.forEach((user) => console.log(user.name));
  } catch (error) {
    console.log(error);
  }
};
getUsers();
