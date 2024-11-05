// dfs
import * as fs from "fs";
const inputs = fs.readFileSync("/dev/stdin", "utf8");
const inputArray = inputs.split("\n");
const nums = inputArray[1].split(" ").map(x => +x)
const countBusho = nums.length

/*
              (pos=0, a=0, b=0)
               /          \
    (pos=1, a=k[0], b=0)  (pos=1, a=0, b=k[0])
         /       \                /        \
(pos=2, a=k[0]+k[1], b=0)  (pos=2, a=k[0], b=k[1])  (pos=2, a=0, b=k[0]+k[1])
       /  \                 /   \                /   \
...

という木構造を作成しながら、全探索する。
全探索の方法は今回は何でも良いので、深さ優先でやる。

pos（どの部署を扱うかのindex） = 深さとし、
グループAにアサインする場合とグループBにアサインする場合で木を分岐する。
一番深いnodeで、全部署のアサインが完了しているので、人数の比較をする。

*/



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

let result = Number.MAX_VALUE
let sumA = 0;
let sumB = 0;

function dfs(depth: number) {
  // 全部アサイン終わった時
  if (depth == countBusho) {
    // グループA に割り当てられた部署に所属する人数の合計とグループ  B に割り当てられた部署に所属する人数の合計 のうち大きい方の値としてあり得る最小の値を求めてください。
    result = Math.min(result, Math.max(sumA, sumB))
    return;
  }

  // グループAにアサインする場合
  sumA += nums[depth]
  // 次のdepthへ
  dfs(depth + 1)
  // 戻ってきたのでincrementを下に戻す
  sumA -= nums[depth]

  // グループBにアサインする場合
  sumB += nums[depth]
  // 次のdepthへ
  dfs(depth + 1)
  // 戻ってきたのでincrementを下に戻す
  sumB -= nums[depth]
  return
}

dfs(0)
console.log(result)