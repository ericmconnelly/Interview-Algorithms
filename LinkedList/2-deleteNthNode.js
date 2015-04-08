// delete a node inthe middle of a single linked list, given only access to that node

var deleteNthNode = function(list, node) {
  if (!node || !list || node.next === null ) {
    return;
  }

  var next = node.next;
  node.data = next.data;
  node.next = next.next;
};


var list = { head: { value: 4, next: { value: 5, next: {value: 6, next: null} } },
  tail: { value: 6, next: null } };
