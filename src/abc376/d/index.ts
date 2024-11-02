import * as fs from "fs";
const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");

// 数字の配列に変換
const s = input[0]
let result = 0;

for (let i = 0; i < s.length / 2; i++) {
  for (let j = i + 1; j < s.length ; j++) {
    for (let k = j + 1; k < s.length; k++) {
      if (s[i] == s[k]) {
        result ++
      }
    }
  }
}
console.log(result)



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