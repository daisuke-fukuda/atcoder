import * as fs from "fs";
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const N = +input[0]

// 1始まりなので、わかりやすく埋める
// 後で消す
let matrixString: string[] = [""].concat(input.splice(1).map(x => " " + x))
let matrix: string[][] = matrixString.map(s => s.split(""))

// console.log( "=====" + "初期状態" +"======")
// print(matrix)
for (let i = 1; i <= N/2; i++) {
  const min = i
  const max = (N + 1 -i)

  const changeArray: {
    i: number,
    j: number
    color: string
  }[] = []


  for (let x = min; x <= max; x++) {
    for (let y = min; y <= max; y++) {
      // マス(y,N+1−x) の色をマス(x,y) の色で置き換える
      changeArray.push({i: y, j: (N + 1 -x), color: matrix[x][y]})
    }
  }
  // 同時に変更しなきゃいけないのでここでまとめて置き換える
  for (const changeArrayElement of changeArray) {
    // console.log(changeArrayElement)
    matrix[changeArrayElement.i][changeArrayElement.j] = changeArrayElement.color
    // console.log(changeArrayElement.j + "," + changeArrayElement.i + "を" + changeArrayElement.color + "に")
  }
  // console.log( "=====" + i +"======")
  // print(matrix)
}

// console.log( "=====" + "last" +"======")
print(matrix)

// console.log(matrix)

function print(array: string[][]) {
  // 1行目はskip
  for (let i = 1; i < matrix.length; i++) {
    console.log(matrix[i].join("").slice(1))
  }
}