const url =
  "https://api.themoviedb.org/3/movie/popular?api_key=f9a5c6b0c9b3f97d054414ec3439b63f&language=en-US&page=1";
const placeHolder = "https://jsonplaceholder.typicode.com/users";
const topMovie =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=f9a5c6b0c9b3f97d054414ec3439b63f&language=en-US&page=1";
const data = fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // data.map((item) => {
    //   const cards = document.getElementById("cards");
    //   const res = `
    //     <div class="card">
    //         <h1>
    //             ${item.name}
    //         </h1>
    //         <h2>
    //             ${item.username}
    //         </h2>
    //         <p>
    //             ${item.email}
    //         </p>
    //     </div>
    //     `;
    //   cards.innerHTML += res;
    // });
    console.log(data);
  });
