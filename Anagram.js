// Frequency Counter Approach - O(N)

const anagram = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }
  let count = {};
  for (let i of a) {
    count[i] ? ++count[i] : (count[i] = 1);
  }
  for (let i of b) {
    count[i] ? --count[i] : (count[i] = -1);
    !count[i] ? delete count[i] : null;
  }
  for (let i in count) {
    if (count.hasOwnProperty(i)) {
      return false;
    }
  }
  return true;
};
const str1 = 'geg';
const str2 = 'gee';

console.log(anagram(str1, str2));
