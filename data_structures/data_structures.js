/*
  Data Structures
    - Stack
    - ArrayStack
    - Queue
    - StackQueue
*/


/*
  Create a stack data structure.
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const tempNode = this.top;
      this.top = newNode;
      this.top.next = tempNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    // const tempNode = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }

  peek() {
    return this.top;
  }

}

/*
// CONSOLE TEST CODE:
const webStack = new Stack();
webStack.push('google');
webStack.push('facebook');
webStack.push('yahoo');
webStack.pop();
*/

// Stack data structure using arrays
class ArrayStack {
  constructor() {
    this.array = [];
  }

  push(value) {
    this.array.push(value);
    return this;
  }

  pop() {
    this.array.pop();
    return this;
  }

  peek() {
    return this.array[this.array.length - 1];
  }

}

/*
// CONSOLE TEST CODE:
const arrayStack = new ArrayStack();
arrayStack.push('google');
arrayStack.push('facebook');
arrayStack.push('yahoo');
arrayStack.pop();
*/


/*
  Create a queue data structure.
*/

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length == 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }

  peek() {
    return this.first;
  }
}

/*
// CONSOLE TEST CODE:
const q = new Queue();
q.enqueue('John');
q.enqueue('Mary');
q.enqueue('Mark');
q.peek();
q.dequeue();
*/


/*
  Impement a Queue data structure using two stacks
*/
class StackQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  add(value) {
    this.stack1.push(value);
  }

  remove() {
    while (this.stack1.peek()) {
      this.stack2.push(this.stack1.pop());
    }
    const tempNode = this.stack2.pop();
    while (this.stack2.peek()) {
      this.stack1.push(this.stack2.pop());
    }
    return tempNode;
  }

  peek() {
    while (this.stack1.peek()) {
      this.stack2.push(this.stack1.pop());
    }
    const tempNode = this.stack2.peek();
    while (this.stack2.peek()) {
      this.stack1.push(this.stack2.pop());
    }
    return tempNode;
  }

}