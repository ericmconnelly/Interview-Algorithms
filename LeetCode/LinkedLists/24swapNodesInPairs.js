/*

Given a linked list, swap every two adjacent nodes and return its head.

For example,
Given 1->2->3->4, you should return the list as 2->1->4->3.

Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.

*/

var pairSwap = function(list) {
  if(!list) {
    return null;
  }
  if(!list.next) {
    return list;
  }

  var start = new ListNode(0);
  start.next = list;

  var curr = start;

  while(curr.next && curr.next.next) {
    curr.next = swap(curr.next, curr.next.next);
    curr = curr.next.next;
  }

  return start.next;

};

var swap = function(node1, node2){ 
  node1.next = node2.next;
  node2.next = node1;
  return node2;
};

var doublePointer = function(head) {
   if(head === null || head.next === null)
        return head;
    start = head.next;
    prev = null;
    while(head !== null && head.next !== null) {
        if(prev !== null)
            prev.next = head.next;
        temp = head.next.next; 
        head.next.next = head;
        head.next = temp; 
        prev = head;
        head = temp; 
    }
        return start;
};


var alt = function(list) {
  if(!list || !list.next) {
    return list;
  }
  var start = list.next;
  var prev = null;
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
    var current = this.next;
    while(current.next) {
      current = current.next;
    }
    current.next = node;
  }
};

var list = new LinkedList(1);
list.push(2);
list.push(3);

console.log(list);


