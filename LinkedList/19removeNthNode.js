var removeNth = function(list, n) {
  var slow = list;
  var fast = start

  //move fast forward until the gap is n between slow & fast
  for (var i = 1; i <= n + 1; i++) {
    fast = fast.next;
  }
  while(fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return slow;
}