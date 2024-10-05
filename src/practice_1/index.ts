import * as fs from "fs";
const inputs = fs.readFileSync("/dev/stdin", "utf8");
const inputArray = inputs.split("\n");

const a = parseInt(inputArray[0]);
const bc = inputArray[1].split(" ");

const b = parseInt(bc[0]);
const c = parseInt(bc[1]);
const s = inputArray[2];

console.log(`${a+b+c} ${s}`);