export class Queue {
  elements: {};
  head: number;
  tail: number;
  /**
   * Add an element to the end of the queue
   * @param {any} element the element to add
   * @returns {Record<string, any>} the queued element
   */
  enqueue(element: any): Record<string, any>;
  /**
   * Remove the element at the front of the queue
   * @returns {any} the element at the front of the queue
   */
  dequeue(): any;
  /**
   * Get the element at the front of the queue without removing it
   * @returns {number} the element at the front of the queue
   */
  peek(): number;
  /**
   * Get the length of the queue
   * @returns {number} the length of the queue
   */
  get length(): number;
  /**
   * Check if the queue is empty
   * @returns {boolean} true if the queue is empty, false otherwise
   */
  get isEmpty(): boolean;
}
