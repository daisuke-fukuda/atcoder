import * as fs from "fs";
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

let beforeA = 0;
let beforeB = 0;
let cost = 0
for (let i = 1; i < input.length; i++) {
  let array = input[i].split(" ")
  let temp = calc(beforeA, beforeB, +array[0], +array[1])
  cost += (calc(beforeA, beforeB, +array[0], +array[1]))
  beforeA = +array[0];
  beforeB = +array[1]
}
cost += (calc(beforeA, beforeB, 0, 0))
console.log(cost)

// 数字の配列に変換
const nums = input[0].split(" ").map(x => +x)
main();



function main() {
  return;
}

function calc(a: number, b:number, c:number, d:number) {
  return Math.sqrt(
    (a-c)**2 + (b-d)**2
  )
}


// お便利関数
function min(a: number, b: number): number {
  return Math.min(a, b)
}
function max(a: number, b: number): number {
  return Math.max(a, b)
}