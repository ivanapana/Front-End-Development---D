function ambilDataUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        const { username, email } = user;
        console.log(`Username: ${username}, Email: ${email}`);
      });
    })
    .catch((error) => {
      console.error("Terjadi error saat mengambil data:", error);
    });
}

export default ambilDataUser;
