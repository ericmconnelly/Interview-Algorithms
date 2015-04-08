// Implement a MyQueue class which implements a queue using two stacks.

var Stack = function() {
  this.storage = [];
};
Stack.prototype.push = function(val) {
  this.storage.push(val);
};
Stack.prototype.pop = function() {
  return this.storage.pop();
};
Stack.prototype.size = function() {
  return this.storage.length;
};


var MyQueue = function() {
  this.inbox = new Stack();
  this.outbox = new Stack();
};

MyQueue.prototype.enqueue = function(val) {
  this.inbox.push(val);
};

MyQueue.prototype.dequeue = function() {
  if (this.outbox.size() === 0) {
    while(this.inbox.size() !== 0) {
      this.outbox.push(this.inbox.pop());
    }
  }
  return this.outbox.pop();
};

var queue = new MyQueue;
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
// console.log(queue.dequeue());
queue.dequeue();
console.log(queue);
