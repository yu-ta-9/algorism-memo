/**
 * 約数列挙
 * 与えられた整数 n がの約数を列挙する
 * Point: 「sqrt(n)まで調べれば良い」
 *
 * 32 -> [ 1, 2, 4, 8, 16, 32 ]
 *
 * O(sqrt(n))
 */
function main() {
  const n = process.argv[2];

  const answers = [];

  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      answers.push(i);
      answers.push(n / i);
    }
  }

  console.info(answers.sort((a, b) => a - b));
}

console.time("exec");
main();
console.timeEnd("exec");
