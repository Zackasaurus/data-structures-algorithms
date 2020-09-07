// parent -> children : 2n + 1, 2n + 2
// children -> parent : Math.floor((n - 1) / 2)

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  getParent(index) {
    return index === 0 ? 0 : Math.floor((index - 1) / 2);
  }

  swap(a, b) {
    let temp = this.values[a];
    this.values[a] = this.values[b];
    this.values[b] = temp;
  }
  insert(v) {
    this.values.push(v);
    let current = this.values.length - 1;
    let parent = this.getParent(current);
    while (this.values[current] > this.values[parent]) {
      this.swap(current, parent);
      current = parent;
      parent = this.getParent(current);
    }
  }
  sinkDown(index) {
    let left = 2 * index + 1,
      right = 2 * index + 2,
      largest = index;
    const length = this.values.length;
    if (left < length && this.values[left] > this.values[largest]) {
      largest = left;
    }
    if (right < length && this.values[right] > this.values[largest]) {
      largest = right;
    }
    if (largest !== index) {
      this.swap(largest, index);
      this.sinkDown(largest);
    }
  }
  extractMax() {
    this.swap(0, this.values.length - 1);
    const max = this.values.pop();
    this.sinkDown(0);
    return max;
  }
  insertMul(arr) {
    arr.forEach((item) => this.insert(item));
  }
}

const maxHeap = new MaxBinaryHeap();

maxHeap.insertMul([1, 300, 2, 100, 6, 99, 98, 97]);

console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());

console.log(maxHeap);
