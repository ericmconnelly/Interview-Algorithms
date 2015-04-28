var LinkedList = require('../LinkedList.js');
/*
You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

*/

var addTwo = function(L1, L2) {
  var overflow = 0;
  var newList = new LinkedList();
  var curr1 = L1;
  var curr2 = L2;
  while(curr1 || curr2) {
    if (curr1) {
      overflow += curr1.value;
      curr1 = curr1.next;
    }
    if (curr2) {
      overflow += curr2.value;
      curr2 = curr2.next;
    }
    newList.addToTail(overflow % 10);
    // console.log(newList.head);
    overflow = Math.floor( overflow / 10);
    // console.log('overflow: ', overflow)
  }
  return newList.head;
}

var L1 = new LinkedList();
L1.addToTail(2);
L1.addToTail(4);
L1.addToTail(3);

var L2 = new LinkedList();
L2.addToTail(5);
L2.addToTail(6);
L2.addToTail(4);

console.log(addTwo(L1.head, L2.head));

var L3 = new LinkedList();
L3.addToTail(0);

var L4 = new LinkedList();
L4.addToTail(0);

console.log(addTwo(L3.head, L4.head));

