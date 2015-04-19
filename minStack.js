var Stack = function() {
  this.storage = [];
  this.currentMin = [];
  this.count = 0;
};

Stack.prototype.push = function(val) {
  this.storage.push(val);

  var previousMin = this.currentMin[this.count - 1];
  if (previousMin === undefined || previousMin > val) {
    this.currentMin.push(val);
  } else {
    console.log(previousMin);
    this.currentMin.push(previousMin);
  }

  this.count++;
};

Stack.prototype.pop = function() {
  this.count--;
  return this.storage.pop();
};

Stack.prototype.size = function() {
  return this.count;
};

Stack.prototype.getMin = function() {
  return this.currentMin[this.count - 1];
};



var stack = new Stack();
var arr = [5,15,2,12,22,25,1];
for (var i = 0; i < arr.length; i++){
  stack.push(arr[i]);
}
console.log(stack)
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
