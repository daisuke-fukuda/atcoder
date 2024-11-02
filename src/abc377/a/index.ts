import * as fs from "fs";
const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");

const S = input[0]

if (S == "ABC" || S == "ACB" || S == "BAC" || S == "BCA" || S == "CAB" || S == "CBA") {
  console.log("Yes")
} else [
  console.log("No")
]


