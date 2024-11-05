// 番兵法
import * as fs from "fs";
const inputs = fs.readFileSync("/dev/stdin", "utf8");
const inputArray = inputs.split("\n");
const a = inputArray[0] + "$"
const b = inputArray[1] + "$"

const length = Math.max(a.length, b.length)
for (let i = 0; i < length ; i++) {
  if (a[i] != b[i]) {
    console.log(i + 1)
    break
  }
  if (i + 1 == length) {
    console.log(0)
  }
}
