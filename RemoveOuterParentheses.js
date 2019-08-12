const removeOuterParaentheses = S => {
  // Edge Case
  if (S == '') {
    return '';
  }

  let arr = S.split('');

  let count = 0;

  let res = [...arr];

  let mirror = false;

  let deletions = 0;

  for (let i = 0; i < arr.length; i++) {
    // console.log(i);
    if (arr[i] == 'a') {
      count++;
    } else {
      count--;
    }
    if (count == 1 && !mirror) {
      res.splice(i - deletions, 1);
      deletions++;
      mirror = true;
    }
    if (count == 0) {
      res.splice(i - deletions, 1);
      deletions++;
      mirror = false;
    }
    console.log(count);
  }
  return res.join('');
};

console.log(removeOuterParaentheses('abaaababbabbabaabb'));

// ((()))

// (()(()))
// ()(())
// aababbaabbaabaabbb;

// ('(()(()))()');
// aabaabbbab

// "()((()())())()(())"
// abaaababbabbabaabb;
