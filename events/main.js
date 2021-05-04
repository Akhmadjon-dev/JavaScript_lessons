// function myFunc() {
//   console.log("clicked");
// }
// function hello() {
//   console.log("who are you?");
// }

// var send = document.querySelector("#send");
// send.ondblclick = function () {
//   console.log("hi");
// };

// send.addEventListener("dblclick", function () {
//   console.log("hello btn is clicked");
// });

var form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("hello");
});
