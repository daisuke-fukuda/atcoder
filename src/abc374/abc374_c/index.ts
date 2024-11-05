import * as fs from "fs";
const inputs = fs.readFileSync("/dev/stdin", "utf8");
const inputArray = inputs.split("\n");
const a = inputArray[1]

const nums = a.split(" ").map(x => parseInt(x))
// console.log(nums)

function generateCombinations(nums: number[]): { group1: number[], sum1: number, group2: number[], sum2: number }[] {
  const result: { group1: number[], sum1: number, group2: number[], sum2: number }[] = [];

  const backtrack = (index: number, group1: number[], group2: number[]) => {
    if (index === nums.length) {
      const sum1 = group1.reduce((a, b) => a + b, 0);
      const sum2 = group2.reduce((a, b) => a + b, 0);
      result.push({ group1: group1.slice(), sum1, group2: group2.slice(), sum2 });
      return;
    }

    // nums[index]をgroup1に追加
    group1.push(nums[index]);
    backtrack(index + 1, group1, group2);
    group1.pop(); // 元に戻す

    // nums[index]をgroup2に追加
    group2.push(nums[index]);
    backtrack(index + 1, group1, group2);
    group2.pop(); // 元に戻す
  };

  backtrack(0, [], []); // 初期化
  return result;
}

function findClosestCombination(nums: number[]) {
  const combinations = generateCombinations(nums);

  // sum1 と sum2 の差が最小の組み合わせを見つける
  let minDiff = Infinity;
  let bestCombination = null;

  for (const combo of combinations) {
    const diff = Math.abs(combo.sum1 - combo.sum2);
    if (diff < minDiff) {
      minDiff = diff;
      bestCombination = combo;
    }
  }

  return bestCombination;
}

// 使用例
const bestCombination = findClosestCombination(nums);
if (bestCombination) {
  if (bestCombination.sum1 > bestCombination.sum2 ) {
    console.log(bestCombination.sum1);
  } else {
    console.log(bestCombination.sum2);

  }

}
