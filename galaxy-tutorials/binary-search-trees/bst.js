// Tree Class
class Tree {
  constructor() {
    this.root = null;
  }
  addValue(val) {
    let n = new Node(val);
    // console.log(n);
    if (this.root == null) {
      this.root = n;
    } else {
      // console.log('create node');
      this.root.addNode(n);
    }
  }
  traverse() {
    this.root.visit();
  }
  search(val) {
    return this.root.search(val);
  }
}

// Node Class
class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }

  addNode(n) {
    if (n.value < this.value) {
      if (this.left == null) {
        this.left = n;
      } else {
        this.left.addNode(n);
      }
    } else if (n.value > this.value) {
      if (this.right == null) {
        this.right = n;
      } else {
        this.right.addNode(n);
      }
    }
  }
  // Search
  search(val) {
    if (this.value == val) {
      return this;
      // return this;
      // console.log(val);
      // console.log('found ' + val);
    } else if (val < this.value && this.left != null) {
      return this.left.search(val);
    } else if (val > this.value && this.right != null) {
      return this.right.search(val);
    }
    return null;
  }
  // Visit
  visit() {
    if (this.left != null) {
      this.left.visit();
    }
    console.log(this.value);
    if (this.right != null) {
      this.right.visit();
    }
  }
}

let tree = new Tree();

for (let i = 0; i < 10; i++) {
  tree.addValue(Math.floor(Math.random() * 100));
}
// tree.addValue(15);
// tree.addValue(5);
// tree.addValue(3);
// tree.addValue(8);
console.log(tree);
tree.traverse();
