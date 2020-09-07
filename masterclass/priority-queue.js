class Node {
  constructor(priority, value) {
    this.k = priority;
    this.v = value;
  }
}

class NaivePriorityQueue {
  constructor() {
    this.queue = [];
  }
  //   O(1)
  enqueue(node) {
    this.queue.push(node);
  }
  //   O(N)
  dequeue() {
    let maxIndex = 0;
    let max = null;
    this.queue.forEach((item, index) => {
      if (max === null) max = item.k;
      if (item.k > max) {
        max = item.k;
        maxIndex = index;
      }
    });
    return this.queue.splice(maxIndex, 1);
  }
}

class PriorityQueue {}

const n = new NaivePriorityQueue();
n.enqueue(new Node(1, "a"));
n.enqueue(new Node(26, "z"));
n.enqueue(new Node(226, "zz"));
n.enqueue(new Node(2, "b"));

console.log(n.dequeue());
console.log(n.dequeue());
console.log(n.dequeue());
console.log(n.dequeue());
