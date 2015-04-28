/* 
Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

For example,
Given 1->2->3->3->4->4->5, return 1->2->5.
Given 1->1->1->2->3, return 2->3.

*/


var deleteDupes = function(list) {
  if(!list || !list.next) {
    return list;
  }
  var curr = list;

  while(curr) {
    if(curr.next && curr.val === curr.next.val) {
      var temp = curr;
      while(temp && curr.val === temp.val) {
        temp = temp.next;
      }
      curr = temp;
    } else {
      curr = curr.next;
    }
  }
  return list;
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
list.push(1);

console.log(deleteDupes(list));