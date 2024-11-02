import * as fs from "fs";
const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");

const NC = input[0].split(" ")
const N = +NC[0]
const C= +NC[1]
const target = input[1].split(" ")
let result = 0;
let before :number = -1;
for (let i = 0; i < target.length; i++) {
  const num = +target[i]

  if (before == -1 ) {
    result++
    before = num;
  } else if (num - before >= C) {
    result++
    before = num;
  }
}
console.log(result)

