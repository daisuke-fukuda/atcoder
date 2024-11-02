import * as fs from "fs";
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
const rowOne = input[0].split(" ")
const N = +rowOne[0]
const Q = +rowOne[1]

let nowL = 0
let nowR = 1;
let result = 0
for(let i = 1; i < input.length; i ++ ){
  const target = input[i].split(" ")
  // console.log(target)

  const LR = target[0]
  const targetPosition = +target[1] - 1 // 0始まりなので調整

  if (LR == "L") {
    // console.log("Lだよ")

    // 右回りにいけるかチェック
    let rightOK = false;
    let tempCount = 0;
    let tempL = nowL
    let tempR = nowR
    // console.log("右回りをためすよ")
    while (true) {
      tempL++
      tempCount++
      // console.log("今", tempL)
      // indexはループ
      if (tempL == N) {
        tempL = 0;
      }

      // ダメだった
      if (tempR == tempL) {
        break;
      }
      // OK
      if (tempL == targetPosition) {
        result += tempCount
        rightOK = true;
        nowL = tempL
        break;
      }
    }

    // ダメなら左回り
    if (!rightOK) {
      // console.log("左回りをためすよ")
      tempL = nowL
      tempR = nowR
      tempCount = 0;
      while (true) {
        tempL--
        tempCount++
        // console.log("今", tempL)
        // indexはループ
        if (tempL == -1) {
          tempL = N -1;
        }

        // ダメだった
        if (tempR == tempL) {
          break;
        }
        // OK
        if (tempL == targetPosition) {
          result += tempCount
          nowL = tempL
          break;
        }
      }
    }


    // R
  } else {
    // console.log("Rだよ")
    // 右回りにいけるかチェック
    let rightOK = false;
    let tempCount = 0;
    let tempL = nowL
    let tempR = nowR
    // console.log("右回りをためすよ")
    while (true) {
      tempR++
      tempCount++
      // console.log("今", tempR)
      // indexはループ
      if (tempR == N) {
        tempR = 0;
      }

      // ダメだった
      if (tempR == tempL) {
        break;
      }
      // OK
      if (tempR == targetPosition) {
        result += tempCount
        rightOK = true;
        nowR = tempR
        break;
      }
    }

    // ダメなら左回り
    if (!rightOK) {
      // console.log("左回りをためすよ")

      tempL = nowL
      tempR = nowR
      tempCount = 0;
      while (true) {
        tempR--
        tempCount++
        // console.log("今", tempR)
        // indexはループ
        if (tempR == -1) {
          tempR = N -1;
        }

        // ダメだった
        if (tempR == tempL) {
          break;
        }
        // OK
        if (tempR == targetPosition) {
          result += tempCount
          nowR = tempR
          break;
        }
      }
    }
  }
}

console.log(result)

