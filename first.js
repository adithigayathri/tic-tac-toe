/*let num = 50;
let usernum = prompt("guess");
console.log(usernum);
while (num != usernum) {
  console.log("wrong beachh");
  usernum = prompt("guess again beachh");
}
console.log("eeuuu");
*/

/*
let inp = prompt(console.log("enter name"));
let username = `@${inp}${inp.length}`;
console.log(username);
*/

/*
let arr = [35, 25, 45, 24, 23];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
let avg = sum / arr.length;
console.log(avg);*/

/*
function vowelNum(str) {
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      cnt += 1;
    }
    return cnt;
  }
}

let res = vowelNum("Adithi");
console.log(res);
*/

/*
let arr = [2, 3, 4, 5];
arr.forEach((num) => {
  console.log(num * num);
});
*/

/*
let arr = [1, 2, 3, 104];
let op = arr.reduce((res, cur) => {
  return res > cur ? res : cur;
});
console.log(op);

let marks = [23, 98, 90, 76, 95, 67];
let newArr = marks.filter((val) => {
  return val > 90;
});
console.log(newArr);
*/

let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
  console.log("btn1 was clciked");
  let a = 25;
  a++;
  console.log(a);
};
