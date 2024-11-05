// 標準入力
import * as fs from "fs";
const inputs = fs.readFileSync("/dev/stdin", "utf8");

// 標準出力
let outputBuffer = "";
function print(out: string | number | bigint) {
  outputBuffer += out;
}
function println(out: string | number | bigint) {
  print(out);
  print("\n");
}
function flush() {
  console.log(outputBuffer);
}
// for(let i = 0; i < N; ++i) {
//   println(ans[i]);
// }
// flush();

// 行ごとに分割する
const inputArray = inputs.split("\n");


// 項目ごとに分割する
// const inputArray = inputs.split(/\s/);


// 配列から取り出す
let currentIndex = 0;
function next() {
  return inputArray[currentIndex++];
}
// const S = next();


// 型変換する
// もっと早い方法もあるがわかりやすさ重視
// 数値
const str = "100";
const a = parseInt(str);    // 小数点以下は失われる
const b = parseFloat(str);  // 小数点以下を保持


// ■2進数N桁目の値を取得する
function getNthBit(target: number, n: number): number {
  return (target >> (n-1)) & 1
}


// 順列
const array = [0, 1, 2, 3]

function generatePermutation<V>(result: V[][], pre: V[], post: V[], depth: number, maxDepth: number) {
  // console.log(pre, post, depth)

  // 末尾まで行った
  if (depth === maxDepth) {
    // ここでは結果を詰めているが、何か処理をやってもOK
    result.push(pre);
    return;
  }
  for (let i = 0, len = post.length; i < len; ++i) {
    // copy。次のspliceが破壊的変更なので、別で扱う
    const rest = post.slice(0);

    // i個目の要素を抜き出す。restは破壊的変更で抜き出された後の値になる
    const elem = rest.splice(i, 1);

    // 決まった要素（非破壊処理）
    const nextPre = pre.concat(elem)
    generatePermutation(result, nextPre, rest, depth + 1, maxDepth);
  }
  return result;
};
function generatePermutationAll<V>(array: V[]) {
  return generatePermutation([], [], array, 0, array.length)
}
// 全部
// const result = generatePermutation([], [], array, 0, array.length)
// console.log(result)
//
// // 3つだけ
// const result2 = generatePermutation([], [], array, 0, 3)
// console.log(result2)


// 数字の昇順でsort
const AArray = inputs[1].split(" ").map(x => +x).sort((a: number, b: number) => +a > + b ? 1: -1)
