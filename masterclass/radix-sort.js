const getDigit = (n, p) => {
  return Math.floor(Math.abs(n) / 10 ** p) % 10;
};

const digitCount = (n) => {
  if (n === 0) return 1;
  return Math.floor(Math.log10(Math.abs(n))) + 1;
};

const mostDigits = (nums) => {
  let max = 0;
  nums.forEach((num) => {
    max = Math.max(max, digitCount(num));
  });
  return max;
};

console.log(getDigit(-12345, 2));

console.log(digitCount(-1110));

console.log(mostDigits([5, 77, 88, 9920, 32]));
