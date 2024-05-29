/**
 * 素数判定法
 * 与えられた整数 n が素数かを判定する
 *
 * Point: 「sqrt(n)まで調べて割り切れなければ素数と判定して良い」
 *
 * 31 -> true
 * 32 -> false
 *
 * O(sqrt(n))
 */
function main() {
  const n = process.argv[2];

  let flg = true;
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      flg = false;
      console.info(false);
      return;
    }
  }

  if (flg) {
    console.info(true);
  }
}

console.time("exec");
main();
console.timeEnd("exec");
