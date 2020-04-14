// 贪心法
// 乘船问题
function boat(a: number[], n: number, C: number): void {
  a.sort();
  let i = 0;
  let j = n - 1;
  let boatSum = 0;
  while (i <= j) {
    if (i == j) {
      console.log('a[i]: ', a[i]);
      boatSum++;
      break;
    }

    if (a[i] + a[j] <= C) {
      console.log('a[i]: ', a[i]);
      console.log('a[j]: ', a[j]);
      boatSum++;
      i++;
      j--;
    } else {
      console.log('a[j]: ', a[j]);
      boatSum++;
      j--;
    }
    console.log('\n');
  }
}
function test() {
  const n = 11; // 人数
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; // 人的重量
  const C = 20; // 船最大称承重
  boat(a, n, C);
}
test();
