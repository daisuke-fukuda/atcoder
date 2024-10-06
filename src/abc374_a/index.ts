import * as fs from "fs";
const inputs = fs.readFileSync("/dev/stdin", "utf8");
const inputArray = inputs.split("\n");
const name = inputArray[0]

if (name.endsWith('san')) {
  console.log('Yes')
} else {
  console.log('No')
}