var find132pattern = function(nums) {
  let firstCheck = null;
  let one = null;
  let two = null;
  let twoIndex = null;
  let status = true;
  for (let i = 0; i < nums.length - 2; i++) {
    // Check to see if you can skip
    if (firstCheck == null) {
      firstCheck = nums[i];
    } else {
      if (nums[i] < firstCheck) {
        firstCheck = nums[i];
        status = true;
      } else {
        status = false;
      }
    }
    // console.log(check);
    if (status) {
      for (let j = 1 + i; j < nums.length - 1; j++) {
        if (nums[i] < nums[j] - 1) {
          for (let k = 1 + j; k < nums.length; k++) {
            if (nums[j] > nums[k] && nums[i] < nums[k]) {
              return true;
            }
          }
        }
      }
    }
  }
  return false;
};

console.log(find132pattern([3, 1, 4, 2]));
