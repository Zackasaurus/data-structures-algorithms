function longestPalindrome(s: string): string {
  // O(n ** 2) solution
  const expandFromMiddle = (s: string, left: number, right: number): number => {
    while (
      left >= 0 &&
      right < s.length &&
      s.charAt(left) === s.charAt(right)
    ) {
      left--;
      right++;
    }
    // reduce 2 since left, right edges are not correct
    // add 1 since its length
    // -2 + 1 = -1
    return right - left - 1;
  };

  if (s === null || s.length < 1) return "";
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length - 1; i++) {
    let len1 = expandFromMiddle(s, i, i);
    let len2 = expandFromMiddle(s, i, i + 1);
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
}

console.log(longestPalindrome("geracecarii"));
