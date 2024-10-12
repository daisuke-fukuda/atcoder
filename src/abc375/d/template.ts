import * as fs from "fs";
const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");

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