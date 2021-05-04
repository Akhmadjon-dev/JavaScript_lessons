// hello();

// // declaration
// function hello() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
// }

// hi();
// // expression
// var hi = function () {
//   console.log("hey");
// };
// "use strict";
// const obj = {
//   name: "ali",
//   tel: 2342432432,
//   walk() {
//     console.log(this);
//     return this;
//   },
// };
// let fun = obj.walk.bind(obj);
// console.log(obj.walk());

// console.log(fun());
// string
// number
// boolean
// null
// object
function square(num = "jon", num1 = 4) {
  // default parametr
  return num * num1;
}

console.log(square());

// square = (num) => num * num;
// let obj = (a, b) => ({ name: a, phone: b });
// console.log(obj("ali", 99999999));
const url =
  "https://api.themoviedb.org/3/movie/popular?api_key=f9a5c6b0c9b3f97d054414ec3439b63f&language=en-US&page=1";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
