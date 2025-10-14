import ambilDataUser from "./ambilDataUser.js";

ambilDataUser();

// 1. Mengapa kita butuh .json() setelah fetch()?

//Soalnya hasil dari fetch() itu awalnya masih mentah (stream data).
//Nah, .json() dipakai buat nge-convert hasilnya jadi object JavaScript
//agar  bisa langsung diproses.

// 2. Jika API gagal merespons, bagaimana cara menambahkan error handling?

// Caranya bisa pake .catch() di akhir chaining, atau kalau pake async/await bisa ditaro
// di try...catch. Jadi kalau ada error, program nggak langsung berhenti
// tapi bisa nampilin pesan error ke console.
