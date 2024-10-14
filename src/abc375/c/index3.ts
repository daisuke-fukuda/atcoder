import * as fs from "fs";
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const N = +input[0]

let matrix: string[] = input.splice(1)

// console.log( "=====" + "初期状態" +"======")
// print(matrix)
const result: string[][] = []


for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    // 外側から数えて何番目の枠か
    const frame = Math.min(i + 1, j + 1, N - i, N - j)
    const spinCount = frame % 4

    // 回転後の座標
    let x = i;
    let y = j;
    let temp = 0;
    for (let k = 0; k < spinCount; k++) {
      // swapしつう90度回転
      temp = x;
      x = y;
      y = (N -temp - 1)
    }
    // 座標決まったので文字を反映
    if (!result[x]) {
      result[x] = []
    }
    // console.log(x, y)
    result[x][y] = matrix[i][j]
  }
}


print(result)

function print(array: string[][]) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i].join(""))
  }
}