/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack = [];
  }

  getLength() {
    return this.stack.length - 1;
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    return this.stack.pop(this.getLength());
  }

  peek() {
    return this.stack[this.getLength()];
  }
}

module.exports = Stack;
