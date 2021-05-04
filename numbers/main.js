var x = 1230;
var y = "3192132.01235";
// console.log(typeof x);
// // console.log(x.toString(2));\
// console.log(typeof y);
// console.log(typeof parseInt(y));
// console.log(parseInt(y));
// console.log(parseFloat(y));
// console.log(y);
// console.log(Math.PI);
// console.log(Math.round(3.5));
// console.log(Math.pow(8, 1 / 3));
// console.log(Math.sqrt(16));

//console.log(Math.abs(-546));
// console.log(Math.ceil(10.00000000401));
// console.log(Math.floor(10.999999999999));
// console.log(Math.min(12, 23, 3, 65, 98));
// console.log(Math.max(12, 23, 3, 65, 98));

// console.log(Math.floor(Math.random() * 100));

function find() {
  var start = "+998";
  var code = Math.floor(Math.random() * (99 - 90 + 1) + 90);
  var uch = Math.floor(Math.random() * (999 - 100 + 1) + 100);
  var ik = Math.floor(Math.random() * (99 - 10 + 1) + 10);
  var ikki = Math.floor(Math.random() * (99 - 10 + 1) + 10);
  if (code == 96) {
    code = 99;
  }
  console.log(start, code, uch, ik, ikki);
}

find();
