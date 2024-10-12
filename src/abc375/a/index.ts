import * as fs from "fs";
const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");

const n = +input[0]
const s = input[1]

let count = 0;
for (let i = 0; i < s.length; i++) {
  if (s[i] === "#" && s[i+1] === "." && s[i+2] === "#") {
    count++
  }
}

console.log(count)



// 数字の配列に変換
const nums = input[0].split(" ").map(x => +x)
main();

function main() {
  return;
}


// お便利関数
function min(a: number, b: number): number {
  return Math.min(a, b)
}
function max(a: number, b: number): number {
  return Math.max(a, b)
}