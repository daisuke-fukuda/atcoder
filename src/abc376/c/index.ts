import * as fs from "fs";
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
const N = +input[0]
const AArray = input[1].split(" ").sort((a: string, b: string) => +a > + b ? -1: 1)

const BArray = input[2].split(" ").sort((a: string, b: string) => +a > + b ? -1: 1)

let result = -1;
let isBuyX = false; // 買った？
let j = 0; // BArrayのIndex

for (let i = 0; i < N; i++) {
  // 入る？
  if (+AArray[i] <= +BArray[j]) {
    j++;
    continue
  } else {
    // 入らないので、xを購入する
    // ただし1回のみ
    if (!isBuyX) {
      isBuyX = true;
      result = +AArray[i]
      // jINdexはずらさない
    } else {
      // NG
      result = -1;
      break;
    }
  }
}
console.log(result)

function debug(s: any) {
  console.log(s)
}