// BST NATURALLY STAY SORTED

// 10
// 5   15
//2  7  12

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value);
    this.count = 0;
  }

  size() {
    return this.count;
  }
  insert(value) {
    this.count++;
    let newNode = new Node(value);
    const searchTree = node => {
      // if value < node.value, go left
      if (value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          searchTree(node.left);
        }
      }
      // if value > node.value, go right
      else if (value > node.value) {
        if (!node.right) {
          node.right = newNode;
        }
      }
    };
  }
  //   Find minimum value
  min() {
    let currentNode = this.root;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
  max() {
    let currentNode = this.root;

    while (currentNode.left) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }

  contains() {}
  // depth first search
  // in-order
  dfsInOrder() {}
  // pre-orde
  dfsPreOrder() {}
  // post-order
  dfsPostOrder() {}

  // breadth first search
  bfs() {}
}
