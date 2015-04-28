/*
Remove all elements from a linked list of integers that have value val.

Example
Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
Return: 1 --> 2 --> 3 --> 4 --> 5


*/

var removeElements = function(list, target) {
  if(!list) {return list;}
  if(!target || typeof target !== 'number') {return list;}

  var copy = new LinkedList(null);
  copy.next = list;
  var current = copy;

  while(current.next) {
    if(current.next.val === target) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  console.log('list: ', list);
  return copy.next;
};

var LinkedList = function(val) {
  this.val = val;
  this.next = null;
};

LinkedList.prototype.push = function(val) {
  var node = {val: val, next: null};
  if(this.next === null) {
    this.next = node;
  } else {
    var current = this;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }
};

var list = new LinkedList(1);
list.push(1);
list.push(2);
// list.push(3);

console.log(removeElements(list, 1));