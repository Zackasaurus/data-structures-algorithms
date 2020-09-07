// Multiple Pointers

// Notes
// Assume Sorted Array
// a b , if positive go down one (arr.length - 1) , if negative go up one arr[1]
// a = arr[0], b = arr[arr.length]

// My Solution

const sumZero = arr => {
  let moveLeft = 0;
  let moveRight = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[moveRight] + arr[arr.length - 1 - moveLeft] > 0) {
      moveLeft++;
    } else if (arr[moveRight] + arr[arr.length - 1 - moveLeft] < 0) {
      moveRight++;
    } else {
      if (moveLeft !== arr.length - moveRight - 1) {
        return [arr[moveRight], arr[arr.length - 1 - moveLeft]];
      }
    }
  }
  return undefined;
};

const arr = [-5, -4, -3, -2, 0, 1, 6, 8];

// Refactored Code

const sumZeroR = arr => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum == 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

console.log(sumZeroR(arr));
