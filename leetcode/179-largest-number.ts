import { log } from "../masterclass/utils";

function largestNumber(nums: number[]): string {
  let result = "";
  const getLength = (num: number): number => {
    if (num === 0) {
      return 1;
    }
    return Math.floor(Math.log10(num)) + 1;
  };
  const appendNumber = (num1: number, num2: number): number => {
    return num1 * 10 ** getLength(num2) + num2;
  };
  const compare = (a: number, b: number) => {
    // just create a sum of each alteration and compare
    const ab = appendNumber(a, b);
    const ba = appendNumber(b, a);
    return ba - ab;
  };
  const sortedArr = nums.sort(compare);
  sortedArr.forEach((number) => {
    if (result === "0" && number === 0) {
      return;
    }
    result += number;
  });

  return result;
}

log(largestNumber([0, 0]));
