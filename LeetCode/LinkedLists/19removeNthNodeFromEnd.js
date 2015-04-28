/*


Given a linked list, remove the nth node from the end of list and return its head.

For example,

   Given linked list: 1->2->3->4->5, and n = 2.

   After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:
Given n will always be valid.
Try to do this in one pass.

*/

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
list.push(6);
list.push(6);
list.push(3);
console.log(list.next);

var removeElements = function(list, target) {
    while(list !== null && list.val === target) {
       list = list.next;
    }   
    var curr = list;
    while(curr !== null && curr.next !== null) {
        if(curr.next.val === target) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return list;
};

console.log(removeElements(list, 6));


var list2= new ListNode(1);
list2.push(2);
list2.push(6);
list2.push(6);
list2.push(3);


var alt = function(list, target) {
  if(!list || !list.next) {return list;}
  if(!target || typeof target !== 'number') {return list;}

  var copy = new ListNode(null);
  copy.next = list;
  var current = copy;
  while(current.next) {
    if(current.next.val === target) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return copy.next;
};

console.log(alt(list2, 6));