import * as fs from "fs";
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
// const input =
// `
// `.trim().split("\n");


const N = +input[0]

// jsのsortは文字列sortなので注意
const AArray = input[1].split(" ").map(x => +x).sort((a: number, b: number) => +a > + b ? 1: -1)
const BArray = input[2].split(" ").map(x => +x).sort((a: number, b: number) => +a > + b ? 1: -1)


// 2分探索しながら条件を満たす、満たさないを判定していく
// 条件を満たす値の、一番小さいものがresult

const max = AArray[AArray.length - 1] + 1000000
let ng = 0
let ok = max

// そもそもいけるか
if (!judge(ok)) {
  console.log(-1)
} else {
  while (true) {
    // 真ん中
    const target = Math.floor((ok + ng) / 2)

    const isOk = judge(target)

    // 真ん中の値がOKだったので、もっと左側に境目があるはず
    // low〜targetを次は探す
    if (isOk) {
      ok = target
    } else {
      // 真ん中の値がngだったので、もっと右側に境目があるはず
      // 次はtarget〜high
      ng = target
    }

    // 境目が明らかになったので終了
    if (ok - ng == 1) {
      break;
    }
  }
  if (ok === max) {
    console.log(-1)
  } else {
    console.log(ok)
  }
}



function judge(x: number) {
  // 箱を追加してsort
  let newBArray = [...BArray]
  newBArray.push(x)
  newBArray.sort( (a,b)=>+a > + b ? 1: -1)
  let isOK = true
  for (let i = 0; i < AArray.length; i++) {
    // 入る
    if (AArray[i] <= newBArray[i]) {
    } else {
      // 入らない
      isOK = false
      break;
    }
  }

  return isOK
}







