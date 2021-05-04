var str = "salom hello salom Salom";
var st = "hey j, tugadi, hey mr hey";
var arr = [24, 421, "asdfj"];
var gap =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)";
// var x = new String("salom men object stringman");
// console.log(str.length); // method, property
// console.log(str.indexOf("m", str.indexOf("m") + 1));
// console.log(str.lastIndexOf("e"));
// console.log(str.indexOf("e"));
// console.log(str.search(/N/i));
// console.log(str.slice(2, -3));
// console.log(str.substring(2, 6));
// console.log(str.substr(2, 6));
// console.log(str.replace(/sal/gi, "hal"));
// console.log(str.toLowerCase());
// console.log(st.length);
// console.log(st.trim().length);
// console.log(st + "jrsf" + " salom");
// console.log(st.charAt(2));
// console.log(st.charCodeAt(101));
// console.log(st.endsWith("adi"));
// console.log(st.includes("tug"));
// console.log(st.match(/hey/g));
// console.log(st.split(" "));
// console.log(typeof true);
// console.log(st.repeat(10));

// funksiya bo'sin 2 ta parametr 1- gap uzun string 2- so'z qayerda joylashgan nechta ishlatilgan

// 2 task , nechta so'z borligini nechta gap borligini funksiya

// 2ta parametr 1parmetrda berilgan qiymatlarni 2parametrda berilgan qiymatlar bilan almashtirsin

function find(gap, soz) {
  var index = gap.indexOf(soz);
  var reg = new RegExp(soz, "gi");
  var amount = gap.match(reg).length;
  console.log(
    "bu soz " + index + "- pozitsiyada joylashgan.",
    "Gapda ",
    amount,
    " ta so'z bor"
  );
}
// find("I love amazing apps coding apps and creating apps", "apps");
// find("bor ekan da yoq ekan toq ekan da yoq ekan", "ekan");
var s = "I love js. I hate css. js is amazing.";
var lor =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
function gapFunc(sen) {
  console.log(sen.split(".").length - 1, "ta gap bor");
}

function wordFunc(word) {
  console.log(word.split(" ").length);
}
function signFunc(signn) {
  console.log(signn.split(""));
}

function changeHandler(text, word1, word2) {
  var reg = new RegExp(word1, "gi");
  console.log(text.replace(reg, word2));
}

changeHandler(s, "js", "css");
