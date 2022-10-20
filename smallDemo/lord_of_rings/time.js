// const sec = 10000;
// const start = performance.now();

// const ten = setTimeout(() => {
//   console.log(sec / 1000 + " sec passed");
// }, sec);

// setTimeout(() => {
//   clearTimeout(ten);
//   console.log("ten killed");
//   console.log(performance.now()/1000 + " sec")
// }, sec / 10);

const fs = require("fs");

console.log("start");

setTimeout(() => {
  console.log(performance.now(), "timer 0");
}, 0);

setImmediate(() => {
  console.log("Immediate");
});

fs.readFile("../../text.txt", () => {
  console.log("file is readed:", performance.now());
});

Promise.resolve().then(() => {
  console.log("Promise here");
});
const bigFunc = (hardLevel) => {
  for (let i = 0; i < hardLevel; i++) {}
  console.log("done!!!");
};

bigFunc(1000000000);

console.log("finish");
