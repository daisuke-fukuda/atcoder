/*
1行を
{a: {x: row[0], y: row[1]}, b: {x:row[2], y: row[3]}}
というobjectに変換して扱う。


A1〜Anの順列（並び順）を作成し（レーザーの照射順）、
aから照射する or bから照射する の総分岐を計算すれば良い。
照射の方向は2種類なので、bit演算が使える。
 */

import * as fs from "fs";
const inputs = fs.readFileSync("/dev/stdin", "utf8");
// debug
// const inputs = `6 10 8
// 1000 1000 -1000 -1000
// 1000 -1000 -1000 -1000
// -1000 1000 1000 1000
// -1000 1000 -1000 -1000
// 1000 1000 1000 -1000
// 1000 -1000 -1000 1000`

type Point = { x: number, y: number };
// 線分
type Segment = { a: Point, b: Point };

const inputArray = inputs.trim().split("\n").map(s => s.split(" "));
// console.log(inputArray)
const rowCount = +inputArray[0][0]
const S = +inputArray[0][1]
const T = +inputArray[0][2]

// console.log(rowCount, S, T)

const segments: Segment[] = []
for (let i = 1; i < inputArray.length; i++) {
  segments.push({a: {
      x: +inputArray[i][0],
      y: +inputArray[i][1],
    },
    b: {
      x: +inputArray[i][2],
      y: +inputArray[i][3],
    }
  })
}
// console.log(segments)

// 順列作成
const permutations = generatePermutationAll(segments)


let result = Number.MAX_VALUE;
for (const permutation of permutations) {
  // console.log(permutation)

  // bit総分岐
  for (let i = 0; i < (2 ** permutation.length); i++) {

    // この並び順でかかった時間
    let time = 0;
    let beforePoint: Point = {x: 0, y: 0}

    for (let j = 0; j < permutation.length; j++) {
      const a = permutation[j].a
      const b = permutation[j].b

      // j桁目
      const bit = (i >> j) & 1
      // aに移動して、bまで照射
      if (bit == 1) {
        // 時間 = 距離/速度
        time += (calculateDistance(beforePoint, a) / S)
        beforePoint = a
        time += (calculateDistance(beforePoint, b) / T)
        beforePoint = b

      // bに移動してaまで照射
      } else {
        time += (calculateDistance(beforePoint, b) / S)
        beforePoint = b
        time += (calculateDistance(beforePoint, a) / T)
        beforePoint = a

      }
    }
    // console.log(i)
    result = Math.min(result, time)
  }

}

console.log(result)

// ユークリッド距離を計算する関数
function calculateDistance(p1: Point, p2: Point): number {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}




function generatePermutation<V>(result: V[][], pre: V[], post: V[], depth: number, maxDepth: number): V[][] {
  // console.log(pre, post, depth)

  // 末尾まで行った
  if (depth === maxDepth) {
    // ここでは結果を詰めているが、何か処理をやってもOK
    result.push(pre);
    return result;
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
function generatePermutationAll<V>(array: V[]): V[][] {
  return generatePermutation([], [], array, 0, array.length)
}





//
// const xyArray: Item[] = []
// for (let i = 1; i < (rowNum + 1); i++) {
//   const nums = inputArray[i].split(" ")
//   xyArray.push({a: {x: parseInt(nums[0]), y: parseInt(nums[1])}, b: {x: parseInt(nums[2]), y: parseInt(nums[3])}})
// }
// // console.log(xyArray)
// // 再帰的に全てのパターンを生成する関数
// function generateAllPatterns(arr: Item[], index: number, currentPattern: Coordinate[], allPatterns: Coordinate[][]) {
//   if (index === arr.length) {
//     allPatterns.push([...currentPattern]);
//     return;
//   }
//
//   // a -> b の順で追加
//   currentPattern.push(arr[index].a);
//   currentPattern.push(arr[index].b);
//   generateAllPatterns(arr, index + 1, currentPattern, allPatterns);
//
//   // 戻して次のパターンを試す
//   currentPattern.pop();
//   currentPattern.pop();
//
//   // b -> a の順で追加
//   currentPattern.push(arr[index].b);
//   currentPattern.push(arr[index].a);
//   generateAllPatterns(arr, index + 1, currentPattern, allPatterns);
//
//   // 戻す
//   currentPattern.pop();
//   currentPattern.pop();
// }
//
// // 全パターンを列挙する関数
// function listAllPatterns(arr: Item[]): Coordinate[][] {
//   const allPatterns: Coordinate[][] = [];
//   generateAllPatterns(arr, 0, [], allPatterns);
//   return allPatterns;
// }
//
// // 実行
// const allPatterns = listAllPatterns(xyArray);
// // console.log(allPatterns)
//
//
//
// // ユークリッド距離を計算する関数
// function calculateDistance(p1: Coordinate, p2: Coordinate): number {
//   return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
// }
//
// // 総移動時間を計算する関数 (SとTを交互に使う)
// function calculateTotalTime(points: Coordinate[], speedS: number, speedT: number): number {
//   let totalTime = 0;
//
//   for (let i = 0; i < points.length - 1; i++) {
//     const distance = calculateDistance(points[i], points[i + 1]);
//     console.log(distance)
//     const speed = (i % 2 === 0) ? speedS : speedT; // 偶数番目の移動はS、奇数番目はT
//     const time = distance / speed;
//     totalTime += time;
//   }
//
//   return totalTime;
// }
//
// // 最短の総移動時間を見つける関数
// function findShortestTime(pointsArray: Coordinate[][], speedS: number, speedT: number): number {
//   let shortestTime = Infinity;
//
//   pointsArray.forEach(points => {
//     const totalTime = calculateTotalTime(points, speedS, speedT);
//     if (totalTime < shortestTime) {
//       shortestTime = totalTime;
//     }
//   });
//
//   return shortestTime;
// }
//
// // 最短の総移動時間を計算
// const shortestTotalTime = findShortestTime(allPatterns, S, T);
//
// console.log(`最短の総移動時間: ${shortestTotalTime} 秒`);
//
