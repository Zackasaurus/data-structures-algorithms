const util = require("util");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  insertR(val) {
    const newNode = new Node(val);
    // edge case
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    const recurse = (parent) => {
      if (newNode.value < parent.value) {
        return parent.left === null
          ? (parent.left = newNode)
          : recurse(parent.left);
      } else {
        return parent.right === null
          ? (parent.right = newNode)
          : recurse(parent.right);
      }
    };
    recurse(this.root);
  }
  insertI(node) {
    if (this.root === null) {
      this.root = node;
    } else {
      let current = this.root;
    }
  }
}
const tree = new BST();
tree.insertR(5);
tree.insertR(8);
tree.insertR(3);
tree.insertR(7);

console.log(util.inspect(tree, false, null, true));
