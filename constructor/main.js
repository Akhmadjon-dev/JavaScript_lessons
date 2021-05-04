// function User(name, phone, email, gender, address, yosh) {
//   this.ism = name;
//   this.tel = phone;
//   this.pochta = email;
//   this.kocha = address;
//   this.yosh = function () {
//     return yosh + 10;
//   };
// }

// User.take = function () {
//   return "dont take";
// };

// var human = new User("Jhon", "997897789798", "ali@gmai.com", "jizzax", 35, 29);
// human.ol = "ol";

// var human = {
//   name: "Dilshod",
//   email: "ali@gmail.com",
//   address: " jizzax",
//   age: 19,
//   get: function () {
//     return "salom " + " seni yoshing ";
//   },
// };
// var human2 = {
//   name: "Dilshod",
//   email: "ali@gmail.com",
//   address: " jizzax",
//   age: 19,
//   take: function () {
//     return "ikkinchi" + human.get.call();
//   },
// };

// console.log(human.get());
// console.log(human2.take());
var address = "uzb";
function Name(name) {
  var ism = function () {
    var email = "jon@gmail.com";
    return (
      "salom bu ichki funksiyada " +
      name +
      " odam " +
      address +
      " da joylashgan" +
      email
    );
  };
  console.log(ism());
  console.log(name);
}

Name("jon");

// // var obj = {
// //   name: "Alijon",
// //   age: 23,
// //   phone: 999823429,
// //   email: "ali@gmail.com",
// // }; // key muhim

// // var arr = [
// //   12,
// //   { name: "jon", age: 24 },
// //   78,
// //   {
// //     name: "jasur",
// //     age: 25,
// //     friend: {
// //       name: "doston",
// //       age: 32,
// //       color: ["red", "green", "white"],
// //     },
// //   },
// //   "ali",
// //   "jon",
// // ]; // postion muhim

// // console.log(arr[3]["friend"]["color"][2]);

// // // obj.email = "jon@gmail.com";
// // // console.log(obj);

// // // console.log(obj.name);
// // // console.log(obj["name"]);

// // // function find(array, str) {
// // //   var result = null;
// // //   var index = null;
// // //   for (var i = 0; i < array.length; i++) {
// // //     if (array[i] == str) {
// // //       result = array[i];
// // //       index = i;
// // //     }
// // //   }
// // //   //   return (result, index);
// // //   console.log(result, index);
// // // }

// // // // console.log(find(arr,'jon'));

// // // find(arr, 53);

// // object quruvchi funksiya bu constructor
// // {name: value}
// // function User(name, age, phone, email) {
// //   (this.name = name),
// //     (this.age = age),
// //     (this.phone = phone),
// //     (this.pochta = email);
// // }

// // var user1 = new User("Asadbek", 21, 99887766, "asadbek@gmail.com");
// // var user2 = new User("Ahmadjon", 22, 995578799, "ahmadjon@gmail.com");
// // console.log(user1, user2);

// var obj = {
//   name: "ali",
//   age: 22,
//   phone: 234553,
//   num: "value",
// };

// // function hiyya(num) {
// //   console.log(obj[num]);
// // }

// var i = null;

// for (i in obj) {
//   console.log(obj[i]);
// }

// // hiyya("name");
// // hiyya("age");

// function User(name, age, phone, email) {
//   (this.name = name),
//     (this.age = age),
//     (this.phone = phone),
//     (this.email = email);
//   this.game = function () {
//     return "salom " + this.name + " o'ynamang";
//   };
// }
// var user = new User("Asadbek", 20, 9899983443, "ali@gmail.com");

// console.log(user);

// User.prototype.color = "qizil rang";
// User.prototype.fun = function () {
//   console.log("hello ", this.name);
// };
// console.log(user.fun());
// console.log(user.game());

// var person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "en",
//   set lang(x) {
//     this.language = x;
//   },
//   fun: function (lan) {
//     this.firstName = lan;
//   },
// };
// person.lang = "uzb";
// person.fun("hel");
// // console.log(person.fun("jalil"));
// console.log(person);

// var obj = { index: 10 };

// Object.defineProperty(obj, "qayta", {
//   get: function () {
//     this.index = 0;
//   },
// });
// Object.defineProperty(obj, "qosh", {
//   get: function () {
//     this.index++;
//   },
// });
// Object.defineProperty(obj, "ayir", {
//   get: function () {
//     this.index--;
//   },
// });
// Object.defineProperty(obj, "bol", {
//   set: function (x) {
//     this.index /= x;
//   },
// });
// Object.defineProperty(obj, "kop", {
//   set: function (x) {
//     this.index *= x;
//   },
// });
// console.log(obj);

// obj.kop = 2;
// console.log(obj);
