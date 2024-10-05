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
