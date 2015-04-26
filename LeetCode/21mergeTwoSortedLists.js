/*

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.



*/

var merge = function(l1, l2) {
  if (l1 === null && l2 === null) {
    return null;
  }
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }

  var result = new ListNode(0);
  var prev = result;
  while(l1 !== null & l2 !== null) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }

    prev = prev.next;
  }

  if (l1) {
    prev.next = l1;
  }
  if (l2) {
    prev.next - l2;
  }
  return result.next;
};