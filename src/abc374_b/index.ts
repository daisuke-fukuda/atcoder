import * as fs from "fs";
const inputs = fs.readFileSync("/dev/stdin", "utf8");
const inputArray = inputs.split("\n");
const a = inputArray[0]
const b = inputArray[1]
if (a == b) {
  console.log(0);
} else {
  let target = a;
  let another = b;
  if (a.length < b.length) {
    target = b;
    another = a;
  }

  for (let i = 0; i < target.length; i++) {
    if (!another[i]) {
      console.log(i + 1)
      break
    }
    if (target[i] != another[i]) {
      console.log(i + 1)
      break
    }
  }

}

