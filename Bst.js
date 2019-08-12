// Binary Search Tree

class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

class Tree {
  constructor() {}
}

// O(N) Brute Force
const rangeSumBST = (root, L, R) => {
  if (!root) return null;
  let count = 0;
  root.forEach(i => {
    if (i >= L && i <= R) {
      count += i;
    }
  });
  return count;
};

console.log(rangeSumBST([1, 2, 3, 4, 5, 6], 2, 4));

const _rangeSumBST = (root, L, R) => {
  if (!root) return null;
  let results = 0;
  const dfs = node => {
    if (!node) return null;
    dfs(node.left);
    if (node.val >= L && node.val <= R) {
      results += node.val;
    }
    dfs(node.right);
  };
  dfs(root);
  return results;
};
