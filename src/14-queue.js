const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.currentEl = null;
    this.lastEl = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const newEl = new ListNode();
    newEl.value = element;
    if (this.currentEl) {
      this.lastEl.next = newEl;
      this.lastEl = newEl;
    } else {
      this.currentEl = newEl;
      this.lastEl = newEl;
    }
    this.length++;
  }

  dequeue() {
    if (!this.currentEl || !this.lastEl) return null;
    const delEl = this.currentEl;
    this.currentEl = delEl.next;
    this.length--;
    return delEl.value;
  }
}

module.exports = Queue;
