// @ts-nocheck

export class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  /**
   * Add an element to the end of the queue
   * @param {any} element the element to add
   * @returns {Record<string, any>} the queued element
   */
  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }
  /**
   * Remove the element at the front of the queue
   * @returns {any} the element at the front of the queue
   */
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
  /**
   * Get the element at the front of the queue without removing it
   * @returns {number} the element at the front of the queue
   */
  peek() {
    return this.elements[this.head];
  }
  /**
   * Get the length of the queue
   * @returns {number} the length of the queue
   */
  get length() {
    return this.tail - this.head;
  }
  /**
   * Check if the queue is empty
   * @returns {boolean} true if the queue is empty, false otherwise
   */
  get isEmpty() {
    return this.length === 0;
  }
}

// * TEST

let q = new Queue();
for (let i = 1; i <= 7; i++) {
  q.enqueue(i);
}
// get the current item at the front of the queue
console.log(q.peek()); // 1

// get the current length of queue
console.log(q.length); // 7

// dequeue all elements
while (!q.isEmpty) {
  console.log(q.dequeue());
}
