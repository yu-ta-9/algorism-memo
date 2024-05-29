/**
 * エラトステネスの篩
 * 1 から n までの整数の中で素数を列挙する
 * n = 30 の場合、素数は 2, 3, 5, 7, 11, 13, 17, 19, 23, 29
 *
 * O(n log log n)
 */
function main() {
  const n = process.argv[2];

  // 数値数分の配列を用意し、初期値を true にする
  const array = [];
  for (let i = 2; i <= n; i++) {
    array[i] = true;
  }

  // trueである最小の数を見つけ、その倍数をすべて false にする
  const count = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= count; i++) {
    if (array[i]) {
      for (let j = 2 * i; j <= n; j += i) {
        array[j] = false;
      }
    }
  }

  for (let i = 2; i <= n; i++) {
    if (array[i]) {
      console.info(i);
    }
  }
}

console.time("exec");
main();
console.timeEnd("exec");
