const { Queue } = require("../../out");

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
