import * as fs from "fs";
const inputs = fs.readFileSync("/dev/stdin", "utf8");
const inputArray = inputs.split("\n");
const row1 = inputArray[0]
const rowNum = parseInt(row1[0])
const S = parseInt(row1[1])
const T = parseInt(row1[2])

type Coordinate = { x: number, y: number };

// 各アイテムの型 (aとbを持つ)
type Item = { a: Coordinate, b: Coordinate };


const xyArray: Item[] = []
for (let i = 1; i < (rowNum + 1); i++) {
  const nums = inputArray[i].split(" ")
  xyArray.push({a: {x: parseInt(nums[0]), y: parseInt(nums[1])}, b: {x: parseInt(nums[2]), y: parseInt(nums[3])}})
}
// console.log(xyArray)
// 再帰的に全てのパターンを生成する関数
function generateAllPatterns(arr: Item[], index: number, currentPattern: Coordinate[], allPatterns: Coordinate[][]) {
  if (index === arr.length) {
    allPatterns.push([...currentPattern]);
    return;
  }

  // a -> b の順で追加
  currentPattern.push(arr[index].a);
  currentPattern.push(arr[index].b);
  generateAllPatterns(arr, index + 1, currentPattern, allPatterns);

  // 戻して次のパターンを試す
  currentPattern.pop();
  currentPattern.pop();

  // b -> a の順で追加
  currentPattern.push(arr[index].b);
  currentPattern.push(arr[index].a);
  generateAllPatterns(arr, index + 1, currentPattern, allPatterns);

  // 戻す
  currentPattern.pop();
  currentPattern.pop();
}

// 全パターンを列挙する関数
function listAllPatterns(arr: Item[]): Coordinate[][] {
  const allPatterns: Coordinate[][] = [];
  generateAllPatterns(arr, 0, [], allPatterns);
  return allPatterns;
}

// 実行
const allPatterns = listAllPatterns(xyArray);
// console.log(allPatterns)



// ユークリッド距離を計算する関数
function calculateDistance(p1: Coordinate, p2: Coordinate): number {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

// 総移動時間を計算する関数 (SとTを交互に使う)
function calculateTotalTime(points: Coordinate[], speedS: number, speedT: number): number {
  let totalTime = 0;

  for (let i = 0; i < points.length - 1; i++) {
    const distance = calculateDistance(points[i], points[i + 1]);
    console.log(distance)
    const speed = (i % 2 === 0) ? speedS : speedT; // 偶数番目の移動はS、奇数番目はT
    const time = distance / speed;
    totalTime += time;
  }

  return totalTime;
}

// 最短の総移動時間を見つける関数
function findShortestTime(pointsArray: Coordinate[][], speedS: number, speedT: number): number {
  let shortestTime = Infinity;

  pointsArray.forEach(points => {
    const totalTime = calculateTotalTime(points, speedS, speedT);
    if (totalTime < shortestTime) {
      shortestTime = totalTime;
    }
  });

  return shortestTime;
}

// 最短の総移動時間を計算
const shortestTotalTime = findShortestTime(allPatterns, S, T);

console.log(`最短の総移動時間: ${shortestTotalTime} 秒`);

