function sequentialDigits(low: number, high: number): number[] {
  const ans = [];
  let start = 12;
  let add = 11;
  let k = 8;
  for (let i = 0; i < 9; i++) {
    let current = start;
    for (let j = 0; j < k; j++) {
      if (current >= low && current <= high) {
        ans.push(current);
      }
      current += add;
    }
    k--;
    add = add * 10 + 1;
    start += add;
  }
  return ans;
}
console.log(sequentialDigits(10, 10 ** 9));
