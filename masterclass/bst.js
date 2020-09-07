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
  insert(node) {
    this.root = this.root ?? node;
    return this.root;
  }
}
const tree = new BST();
tree.insert(new Node(5));
console.log(tree);
