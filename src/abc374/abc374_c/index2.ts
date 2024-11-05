// bit探索法
import * as fs from "fs";
const inputs = fs.readFileSync("/dev/stdin", "utf8");
const inputArray = inputs.split("\n");
const nums = inputArray[1].split(" ").map(x => +x)
const countBusho = nums.length

/*

グループAを1、グループBを0とし、部署ごとに二進数で割り当てる。
10 20 30 という数字が与えられた時、
グループA: 10
グループB: 20, 30
なら、100

よって、2進数で000〜111 の範囲でループすれば全探索となる。

min(sum(グループA), sum（グループB)) が最大となる組み合わせの、
max(sum(グループA), sum（グループB)) が結果となる。

■2進数で111を取得する
2^n - 1 でできる。

よって、
(2**n) - 1 または
(1 << n) - 1   ※nが3の時、0b1000 - 1
で取得できる。
**/

let result = -1
let sum = 0;
// nが3の時、000〜111のループ
for (let i = 0; i <= (2 ** countBusho) - 1; i++) {
  let aCount = 0;
  let bCount = 0;

  // 桁数ごとのループ
  // 1ならグループA、0ならグループBとして計算
  for (let j = 0; j < countBusho; j++) {
    const bit = (i >> j) & 1
    if (bit == 1) {
      aCount += nums[j]
    } else {
      bCount += nums[j]
    }
  }
  result = Math.max(Math.min(aCount, bCount), result)
  sum = aCount + bCount;
}

console.log(sum - result)