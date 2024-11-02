import * as fs from "fs";
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

let reserved: boolean[][] = [];
for (let i = 0; i < 8; i++) {
  let temp = []
  for (let j = 0; j < 8; j++) {
    temp.push(false)
  }
  reserved.push(temp)
}

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if (input[i][j] == "#") {
      // console.log(i, j, "が#")
      for (let k = 0; k < 8; k++) {
        for (let l = 0; l < 8; l++) {
          // iがおなじやつはtrue
          // jが同じやつはtrue
          if (k == i || l == j) {
            reserved[k][l] = true
          }
        }
      }
    }
  }
}
// console.log(reserved)

let count = 0;
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if (reserved[i][j] == false) {
      count++
    }
  }
}




console.log(count)

