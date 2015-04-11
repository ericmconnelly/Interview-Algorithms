var Stack = function() {
  this.storage = [];
  this.count = 0;
  this.currentMax = [];
};


Stack.prototype.push = function(input) {
  this.storage.push(input);

  var previousMax = this.currentMax[this.count-1];
  if (input > previousMax || previousMax === undefined) {
    this.currentMax.push(input);
  } else {
    this.currentMax.push(previousMax);
  }

  this.count++;
};

Stack.prototype.pop = function() {
  this.count--;
  this.currentMax.pop();
  return this.storage.pop();
};

Stack.prototype.size = function() {
  return this.count;
};

Stack.prototype.getMax = function() {
  return this.currentMax[this.count -1]
};


// var stack = new Stack();
// var arr = [5,15,2,12,22,25,1];
// for (var i = 0; i < arr.length; i++){
//   stack.push(arr[i]);
// }
// console.log(stack)
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// console.log(stack.getMax());
