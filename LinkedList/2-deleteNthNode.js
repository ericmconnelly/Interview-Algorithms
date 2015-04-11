var LinkedList = require('../LinkedList.js');
// delete a node inthe middle of a single linked list, given only access to that node

var deleteNthNode = function(list, n) {
  if (n <= 0 || !node) {
    return node;
  }

  var node = list.head;
  var i = 1; 
  var nthNode;
  var previous;

  while(node) {
    if (i === n) {
      nthNode = list.head;
    } else if (i - n > 0) {
      previous = nthNode;
      nthNode = nthNode.next;
    }
    i++
    node = node.next;
  }

  if (!previous) {
    list.head = list.head.next;
  } else {
    previous.next = nthNode.next;
  }

  return list;

};

var list = new LinkedList();
list.addToTail(4);
list.addToTail(5);
list.addToTail(6);

deleteNthNode(list, 1);
console.log(list);

// var list = { head: { value: 4, next: { value: 5, next: {value: 6, next: null} } },
//   tail: { value: 6, next: null } };

