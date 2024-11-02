import * as fs from "fs";
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const oneRow = input[0].split(" ")
const M = BigInt(oneRow[0])
const N = BigInt(oneRow[1])


// マス目の数
const allCount = M * M

// [i,j]がkey
let reserved = new Set<string>()

function setReserve(i: number, j: number) {
  if (i < 0 || j < 0) {
    // console.log(i, j, "0未満")
    return;
  }
  if (i >= M || j >= M) {
    // console.log(i, j, "M以上")
    return
  }
  // console.log(i, j, "ok")
  reserved.add(i.toString() + "," + j.toString())
}


for (let i = 1; i <= N; i++) {
  const row = input[i].split(" ")
  const a = +row[0] -1
  const b = +row[1] -1
  // console.log(a, b)
  setReserve(a, b)
  setReserve(a + 2, b + 1)
  setReserve(a + 1, b + 2)
  setReserve(a - 1, b + 2)
  setReserve(a - 2, b + 1)
  setReserve(a - 2, b - 1)
  setReserve(a - 1, b - 2)
  setReserve(a + 1, b - 2)
  setReserve(a + 2, b - 1)
}
// console.log(reserved)
console.log( (allCount - BigInt(reserved.size)).toString())