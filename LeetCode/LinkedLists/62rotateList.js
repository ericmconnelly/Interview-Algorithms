/* 

Given a list, rotate the list to the right by k places, where k is non-negative.

For example:
Given 1->2->3->4->5->NULL and k = 2,
return 4->5->1->2->3->NULL.

*/

var rotateList = function(list, k) {
  if(!list || !list.next || k <= 0) {
    return list;
  }
  var length = 1;
  var pointer = list;

  while(pointer.next) {       //move pointer to end
    pointer = pointer.next;
    length++;
  }

  pointer.next = list; //creates circle
  k = k % length;

  for (var i = 0; i < length - k; i++){  //move pointer until it reaches
    pointer = pointer.next;
  }

  list = pointer.next;
  pointer.next = null;

  return list;

};


var ListNode = function(val) {
  this.val = val;
  this.next = null;
};


ListNode.prototype.push = function(val) {
  var node = {val : val, next: null};

  if (!this.next) {
    this.next = node;
  } else {
      var current = this;

      while(current.next) {
        current = current.next
        // console.log('current: ', current);
      }

      current.next = node;
  }

};

var list = new ListNode(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
console.log(list);


console.log(rotateList(list, 2));

var obj = {a : 1};
var x = obj;
x.a = 2;
console.log(obj);