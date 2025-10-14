import helloWorld from "./helloWorld.js";

async function messages() {
  let msg = await helloWorld();
  console.log(msg);
}

messages();

// 1. Mengapa kita perlu menambahkan await di dalam messages?
// Karena fungsi helloWorld mengembalikan sebuah Promise yang akan selesai (resolve) setelah 2 detik.
// Dengan menambahkan await, kita memastikan bahwa eksekusi akan menunggu hingga Promise tersebut selesai sebelum melanjutkan ke baris berikutnya.

// 2. Apa yang terjadi jika await dihapus?
// Kalau await dihapus, console.log akan menampilkan Promise { <pending> }, artinya proses
//async belum selesai tapi kita udah coba nampilin hasilnya. Jadi bukan teks "Hello
// World!" yang muncul.

// 3. Mengapa kita perlu menggunakan export dan import di sini?
// Kita ingin memisahkan fungsi helloWorld() ke dalam file terpisah (helloWorld.js) agar
// kode lebih rapi, modular, dan terorganisir, sehingga tidak menumpuk di satu tempat dan
// lebih mudah dikelola. Dengan mengekspor fungsi tersebut dari helloWorld.js, kita dapat
// mengimpor dan menggunakannya di file lain (misalnya messages.js), sehingga struktur
// kode menjadi lebih jelas dan mudah untuk dikembangkan.
