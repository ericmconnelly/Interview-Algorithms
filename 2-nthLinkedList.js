var nthNode = function(list, n) {
  if (list.head === null || n < 1) {
    return null;
  }
  var node = list.head;
  var i = 1;
  var nthNode;

  while(node) {
    if ( i === n ) {
      nthNode = list.head;
    } else if (i - n > 0) {
      nthNode = nthNode.next;
    }
    i++;
    node = node.next;
  }
  return nthNode;
}


var list = { head: { value: 4, next: { value: 5, next: {value: 6, next: null} } },
  tail: { value: 6, next: null } };

  console.log(list);

  console.log(nthNode(list, 1));