const getDigit = (n, p) => {
  return Math.floor(Math.abs(n) / 10 ** p) % 10;
};

const digitCount = (n) => {
  if (n === 0) return 1;
  return Math.floor(Math.log10(Math.abs(n))) + 1;
};

const mostDigits = (nums) => {
  console.log("run");
  let max = 0;
  nums.forEach((num) => {
    max = Math.max(max, digitCount(num));
  });
  return max;
};

const radixSort = (nums) => {
  const getMax = mostDigits(nums);
  for (let i = 0; i < getMax; i++) {
    // init arr
    const buckets = Array.from({ length: 10 }, () => []);
    // place in buckets
    nums.forEach((num) => {
      buckets[getDigit(num, i)].push(num);
    });
    // pull out of buckets and place back to array
    let idx = 0;
    buckets.forEach((bucket) => {
      bucket.forEach((value) => {
        nums[idx] = value;
        idx++;
      });
    });
  }

  return nums;
};

// console.log(getDigit(345, 2));

// console.log(digitCount(-1110));

// console.log(mostDigits([5, 77, 88, 9920, 32]));

console.log(radixSort([5, 77, 88, 0, 434, 78834, 89, 9920, 32]));
