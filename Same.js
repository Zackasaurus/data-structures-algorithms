function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

const same = (a, b) => {
  //   Store frequency of squared values in an object from the first array
  let set = {};
  //   Go through first array
  for (let i = 0; i < a.length; i++) {
    let squared = a[i] ** 2;
    if (set[squared] > 0) {
      set[squared]++;
    } else {
      set[squared] = 1;
    }
  }
  //   Go through second array
  for (let i = 0; i < b.length; i++) {
    let squared = b[i] ** 1;
    if (set[squared] > 0) {
      set[squared]--;
    } else {
      set[squared] = -1;
    }
    if (set[squared] == 0) {
      delete set[squared];
    }
  }
  //   Check to see if its empty
  for (let key in set) {
    if (set.hasOwnProperty(key)) return false;
  }
  return true;
};

const arr1 = [1, 2, 3, 6, 1];
const arr2 = [9, 4, 36, 2, 1];

console.log(same(arr1, arr2));
