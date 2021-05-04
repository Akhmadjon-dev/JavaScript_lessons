const users = "https://jsonplaceholder.typicode.com/users";

fetch(users)
  .then(function (response) {
    return response.json();
  })
  .then(function (res) {
    var usersList = document.querySelector("#users-list");

    for (let i = 0; i < res.length; i++) {
      var element = `   
      <tr>
        <td scope="col">
          ${res[i].id}
        </td>
        <td scope="col">
        ${res[i].name}
        </td>
        <td scope="col">
        ${res[i].phone}
        </td>
        <td scope="col"> ${res[i].email}</td>
        <td scope="col"> ${res[i].address.city}</td>
        <td scope="col"> ${res[i].company.name}</td>
        <td scope="col"> ${res[i].website}</td>
      </tr>
      `;

      usersList.innerHTML += element;
    }
  })
  .catch((error) => console.log(error));

// const url = "https://jsonplaceholder.typicode.com/users";
// const urlPhoto = "https://jsonplaceholder.typicode.com/photos/10";
// const urlPosts = "https://jsonplaceholder.typicode.com/posts";

// fetch(urlPosts)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     data.forEach((post) => {
//       const users = document.getElementById("users");
//       const result = `
//             <div class="card mx-auto" style="width: 18rem;">
//                 <div class="card-body">
//                     <h5 class="card-title">
//                         ${post.title}
//                     </h5>
//                     <p class="card-text">
//                         ${post.body}
//                     </p>
//                     <a href="#" class="btn btn-primary">
//                         ${post.id}
//                     </a>
//                 </div>
//             </div>
//         `;
//       users.innerHTML += result;
//     });
//   });
// // fetch(url)
// //   .then((response) => response.json())
// //   .then((data) => {
// //     console.log(data);
// //     data.forEach((user) => {
// //       const users = document.getElementById("users");
// //       const result = `
// //             <div class="card mx-auto" style="width: 18rem;">
// //                 <img class="card-img-top" src="${user.img}" alt="Card image cap">
// //                 <div class="card-body">
// //                     <h5 class="card-title">
// //                         ${user.name}
// //                     </h5>
// //                     <p class="card-text">
// //                         ${user.email}
// //                     </p>
// //                     <p class="card-text">
// //                         ${user.phone}
// //                     </p>
// //                     <a href="#" class="btn btn-primary">
// //                         ${user.address.city}
// //                     </a>
// //                 </div>
// //             </div>
// //         `;
// //       users.innerHTML += result;
// //     });
// //   });
// // fetch(urlPhoto)
// //   .then((response) => response.json())
// //   .then((data) => {
// //     console.log(data);
// //     const users = document.getElementById("users");
// //     const result = `
// //             <div class="card mx-auto" style="width: 18rem;">
// //                 <img class="card-img-top" src="${data.url}" alt="Card image cap">
// //                 <div class="card-body">
// //                     <h5 class="card-title">
// //                         ${data.title}
// //                     </h5>

// //                     <a href="#" class="btn btn-primary">
// //                         ${data.id}
// //                     </a>
// //                 </div>
// //             </div>
// //         `;
// //     users.innerHTML += result;
// //   });
