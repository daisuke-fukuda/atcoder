import * as fs from "fs";
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

// const input =
// `
// 6 3
// R 4
// L 5
// R 6
// `.trim().split("\n");



const rowOne = input[0].split(" ")
const N = +rowOne[0]
const Q = +rowOne[1]


function calc(from: number, to: number, ng: number) {
  // 距離計算をしたいので、fromとtoは逆でも良い。一般化するために、sが小さい方、tが大きい方とする
  let s = from
  let t = to
  if (from > to) {
    s = to
    t = from
  }

  // sとtの間にxがある場合は逆周り
  if (s < ng &&  ng < t) {
      // console.log("逆")
      return N - (t - s )
     } else {
      // console.log("直線")
      return t - s
  }
}


let nowL = 0
let nowR = 1;
let result = 0
for(let i = 1; i < input.length; i ++ ){
  const target = input[i].split(" ")
  // console.log(target)

  const LR = target[0]
  const targetPosition = +target[1] - 1 // 0始まりなので調整

  if (LR == "L") {
    // 距離計算
    const temp = calc(nowL, targetPosition, nowR)
    // console.log(temp)
    result += temp

    // 移動
    nowL = targetPosition

    // R
  } else {
    // 距離計算
    const temp = calc(nowR, targetPosition, nowL)
    // console.log(temp)
    result += temp

    // 移動
    nowR = targetPosition
  }
  // console.log("result", result, nowL, nowR)
}

console.log(result)

