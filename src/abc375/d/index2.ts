import * as fs from "fs";
const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");

const target = input[0]
let result = 0;

// Siを取りうる文字（jより左側の文字）の、文字ごとのカウント。Aがx個、みたいな
let lCount: Map<string, number> = new Map();
// Skを取りうる文字（jより右側の文字）の、文字ごとのカウント。Aがx個、みたいな
let rCount: Map<string, number> = new Map();

// i = 0から始めるので、最初のlCountは空、rCountは全文字列が対象。なので、最初に全文字を舐めてrCountに入れておく
for (let i = 0; i < target.length; i++) {
  changeCount(rCount, target[i], true)
}

for (let i = 0; i < target.length; i++) {
  // console.log(result, lCount, rCount)

  // 文字コードを使って書いた方がエレガントだが、たかが26文字なのでこれで十分
  const Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  for (let j = 0; j < Alphabet.length; j++) {
    const char = Alphabet[j]
    result += (lCount.get(char) || 0) * (rCount.get(char) || 0)
  }
  changeCount(lCount, target[i-1], true)
  changeCount(rCount, target[i], false)
}


function changeCount(map: Map<string, number>, key: string, isIncrement: boolean) {
  if (!map.get(key)) {
    map.set(key, 0)
  }
  if (isIncrement) {
    map.set(key, (map.get(key) as number) + 1)
  } else {
    map.set(key, (map.get(key) as number) - 1)
  }
}

console.log(result)


