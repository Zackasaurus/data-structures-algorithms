const swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};
// first index pivot
const pivot = (arr, start = 0, end = arr.length - 1) => {
  let count = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < arr[start]) {
      // if value is less than pivot, increment counter
      // swap the element with the element after the pivot
      count++;
      swap(arr, i, count);
    }
  }
  // place pivot in correct spot
  swap(arr, start, count);

  return count;
};

const quicksort = (arr, left = 0, right = arr.length - 1) => {
  // non base case
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left recursive
    quicksort(arr, left, pivotIndex - 1);
    // right recursive
    quicksort(arr, pivotIndex + 1, right);
  }
  return arr;
};

const ex1 = [3, 9, 8, 4, 7, 2, 6, 0, 5];
const ex2 = [5, 2, 1, 8, 4, 7, 6, 3];

console.log(pivot(ex2));
console.log(quicksort(ex1));
