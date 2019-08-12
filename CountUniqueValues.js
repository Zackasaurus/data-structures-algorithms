function countUniqueValues(arr) {
  // Move through array compare current value to next value
  if (arr.length == 0) {
    return 0;
  }
  let res = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      res++;
    }
  }
  return res;
}
const arr = [1, 1, 1, 2, 2, 3, 7];
console.log(countUniqueValues(arr));
