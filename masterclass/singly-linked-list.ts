import { log } from "./utils";
class ListNode {
  next: ListNode | null;
  constructor(public val: number) {
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
  push(value: number): SLL {
    const newNode = new ListNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop(): ListNode | undefined {
    let prev = null;
    let current = this.head;
    // empty
    if (!current) {
      return;
    }
    // only one node
    this.length--;
    if (!current.next) {
      this.head = this.tail = null;
      return current;
    }
    // two or more nodes
    while (current.next) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    this.tail = prev;
    return current;
  }
  shift(): ListNode | undefined {
    const oldHead = this.head;
    if (!this.head) {
      return;
    }
    this.length--;
    if (!this.head.next) {
      this.head = this.tail = null;
      return oldHead;
    }
    this.head = this.head.next;
    return oldHead;
  }
  unshift(value: number): SLL {
    const newNode = new ListNode(value);
    this.length++;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    return this;
  }
  get(index: number): ListNode | undefined {
    if (index >= this.length || index < 0) {
      return;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  set(index: number, value: number): boolean {
    const node = this.get(index);
    if (!node) {
      return false;
    }
    node.val = value;
    return true;
  }
  insert(index: number, value: number): boolean {
    if (index === this.length) {
      return !!this.push(value);
    }
    if (index === 0) {
      return !!this.unshift(value);
    }

    const prev = this.get(index - 1);
    if (!prev) {
      return false;
    }
    const newNode = new ListNode(value);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
    return true;
  }
  remove(index: number): ListNode | undefined {
    if (index === this.length - 1) {
      return this.pop();
    }
    if (index === 0) {
      return this.shift();
    }
    const prev = this.get(index - 1);
    if (!prev) {
      return;
    }
    const temp = prev.next;
    prev.next = prev.next.next;
    return temp;
  }
}

const list = new SLL();
list.push(5);
list.push(15);
list.push(25);
log(list.unshift(30));
log(list.get(0));
log(list.set(1, 123));
log(list.insert(2, 999));
log(list.insert(5, 4));
log(list.remove(2));

// log(list.shift());
// log(list.shift());
// log(list.shift());

log(list);
