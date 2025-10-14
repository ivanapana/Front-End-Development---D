async function ambilDataUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    data.forEach((user) => {
      console.log(`Nama Lengkap: ${user.name}`);
    });
  } catch (error) {
    console.error("Gagal mengambil data:", error);
  }
}

export default ambilDataUser;
