// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number | undefined {
  /* 
  1.  Finding a pivot point where all elements to the left are smaller
      and all elements to the right are greater.

      x x x|x x x   lLong, rLong
        y y|y y     lShort, rShort

      x x y [y] [x] | [y] y [x] x x

  2.  Any pivot point in the smaller array has a corresponding point on the 
      larger array, that divides the total # of elements in two.

      x x x x x|x
               |y y y y

  3.  After picking a pivot point, it's possible to determine whether we need to
      go left or right. If larger array pivot is greater than smaller array, move
      smaller array pivot to the right. If smaller array pivot is greater, move
      smallar array pivot to the left.
      1 2 3 4|5 6
            2|3 4 5

  4. Code outline:
      1. Binary search on small array
      2. getIndices: m -> lLong, rLong
      3. getDirection: lLong, rLong -> get direction (left or right)
      4. getResult: calculate the median
  */

  // handle error bounds
  const getVal = (arr: number[], i: number): number => {
    if (i === -1) {
      return -Infinity;
    }
    if (i === arr.length) {
      return Infinity;
    }
    return arr[i];
  };

  // return (lShort, rShort, lLong, rLong)
  const getIndices = (
    rShort: number,
    aShort: number[],
    aLong: number[]
  ): number[] => {
    const midIndex = Math.floor((aShort.length + aLong.length) / 2);
    let rLong = midIndex - rShort;
    return [rShort - 1, rShort, rLong - 1, rLong];
  };

  // determine whether to go left or right
  const getDirection = (
    lShort: number,
    rShort: number,
    lLong: number,
    rLong: number,
    aShort: number[],
    aLong: number[]
  ) => {
    if (getVal(aShort, lShort) > getVal(aLong, rLong)) {
      return -1;
    }
    if (getVal(aLong, lLong) > getVal(aShort, rShort)) {
      return 1;
    }
    return 0;
  };

  const getResult = (
    lShort: number,
    rShort: number,
    lLong: number,
    rLong: number,
    aShort: number[],
    aLong: number[]
  ) => {
    let odd = (aShort.length + aLong.length) % 2;
    if (odd) {
      return Math.min(getVal(aLong, rLong), getVal(aShort, rShort));
    }
    return (
      (Math.max(getVal(aShort, lShort), getVal(aLong, lLong)) +
        Math.min(getVal(aShort, rShort), getVal(aLong, rLong))) /
      2
    );
  };
  // determine long and short arrays
  let aShort = nums1;
  let aLong = nums2;

  if (nums1.length > nums2.length) {
    aShort = nums2;
    aLong = nums1;
  }
  let l = 0;
  let r = aShort.length;
  let d = 1;
  while (d !== 0) {
    let m = Math.floor((l + r) / 2);
    // get indices from the m
    const [lShort, rShort, lLong, rLong] = getIndices(m, aShort, aLong);
    d = getDirection(lShort, rShort, lLong, rLong, aShort, aLong);
    // determine direction

    if (d < 0) {
      r = m - 1;
    } else if (d > 0) {
      l = m + 1;
    } else {
      // calculate
      return getResult(lShort, rShort, lLong, rLong, aShort, aLong);
    }
  }
}

// console.log(findMedianSortedArrays([1, 6, 20], [3, 9, 50, 500]));
console.log(findMedianSortedArrays([0, 0], [0, 0]));
