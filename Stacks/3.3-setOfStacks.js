// Imagine a (literal) stack of plates. If the stack gets too high, it might topple. There- fore, in real life, we would likely start a new stack when the previous stack exceeds some threshold. Implement a data structure SetOfStacks that mimics this. SetOf- Stacks should be composed of several stacks, and should create a new stack once the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack (that is, pop() should return the same values as it would if there were just a single stack).
// FOLLOW UP
// Implement a function popAt(int index) which performs a pop operation on a specific sub-stack.


var Stack = function() {
  this.storage = [];
  this.count = 0;
};

Stack.prototype.push = function(input) {
  this.storage.push(input);
  this.count++;
};

Stack.prototype.pop = function() {
  this.count--;
  return this.storage.pop();
};

Stack.prototype.size = function() {
  return this.count;
};


var SetOfStacks = function () {
  this.stacks = [];
  this.stackTop = 0;
  this.maxSize = 2; 
};

SetOfStacks.prototype.push = function(input) {
  if (this.stacks.length === 0) {
    var newStack = new Stack();
    newStack.push(input);
    this.stacks.push(newStack);
  } else if (this.stacks[this.stackTop].size() === this.maxSize) {
    var newStack = new Stack();
    newStack.push(input);
    this.stacks.push(newStack);
    this.stackTop++;
  }else {
    this.stacks[this.stackTop].push(input);
  }
};

SetOfStacks.prototype.pop = function() {
  if (this.stacks.length === 0) {
    return null;
  } else if (this.stacks[this.stackTop].size() === 1) {
    var temp = this.stacks[this.stackTop].pop();
    this.stacks.splice(this.stackTop, 1);
    this.stackTop--;
    return temp;
  } else {
    return this.stacks[this.stackTop].pop();
  }
};

SetOfStacks.prototype.popAt = function(index) {
  if (typeof index !== 'number' || !this.stacks[index] || !this.stacks.length || index < 0) {
    return null;
  }
  var temp = this.stacks[index].pop();
  var current = index;

  while(this.stacks[current + 1]) {
    this.stacks[current].push(this.stacks[current + 1].storage.shift());
    this.stacks[current + 1].count--;
    if (this.stacks[current + 1].size() === 0){
      this.stacks.splice(current + 1, 1);
    }
    current++;
  }
  return temp;
}


var newSet = new SetOfStacks();
newSet.push(1);
newSet.push(2);
newSet.push(3);
newSet.pop();
newSet.pop();
newSet.push(4);
newSet.push(1);
newSet.push(5);
newSet.push(6);

newSet.popAt(0);
console.log(newSet.stacks);

