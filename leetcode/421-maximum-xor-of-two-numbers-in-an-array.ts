// O(n ** 2)
function findMaximumXORNaive(nums: number[]): number {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      max = Math.max(max, nums[i] ^ nums[j]);
    }
  }
  return max;
}

function findMaximumXOR(nums: number[]): number {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      max = Math.max(max, nums[i] ^ nums[j]);
    }
  }
  return max;
}

const nums = [3, 10, 5, 25, 2, 8];

console.log(findMaximumXOR(nums));
