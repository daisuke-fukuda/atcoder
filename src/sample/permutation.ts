import * as fs from "fs";
import { maxHeaderSize } from "node:http";

const array = [0, 1, 2, 3]

const generatePermutation = function<V>(result: V[][], pre: V[], post: V[], depth: number, maxDepth: number) {
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

// 全部
const result = generatePermutation([], [], array, 0, array.length)
console.log(result)

// 3つだけ
const result2 = generatePermutation([], [], array, 0, 3)
console.log(result2)



