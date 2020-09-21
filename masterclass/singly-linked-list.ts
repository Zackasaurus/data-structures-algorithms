import { log } from "./utils";
class ListNode {
  next: ListNode | null;
  constructor(public val: number) {
    this.val = val;
    this.next = null;
  }
}

class SLL {
  length: number;
  head: ListNode | null;
  tail: ListNode | null;
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(value): void {
    const newNode = new ListNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }
}

const list = new SLL();
list.push(5);
list.push(15);
list.push(25);
log(list);
