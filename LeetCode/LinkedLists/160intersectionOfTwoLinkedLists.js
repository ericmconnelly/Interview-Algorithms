/*

Write a program to find the node at which the intersection of two singly linked lists begins.


For example, the following two linked lists:

A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗            
B:     b1 → b2 → b3
begin to intersect at node c1.


Notes:

If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Your code should preferably run in O(n) time and use only O(1) memory.

*/


// var getIntersection = function(l1, l2) {
//   var p1 = l1;
//   var p2 = l2;
//   if(!p1 || !p2) { 
//     return null;
//   }

//   while(p1 !== null && p2 !== null && p1 !== p2) {
//     p1 = p1.next;
//     p2 = p2.next;
//     if (p1 === p2) {
//       return p1;
//     }
//     if (p1 === null) {
//       p1 = l2;
//     }
//     if(p2 === null) {
//       p2 = l1;
//     }
//   }
//   return l1;
// }
var intersection = function(l1, l2) {
  if(!l1 || !l2 ) { return null; }
  var l1Count = 0;
  var node1 = l1;
  while(node1) {
    node1 = node1.next;
    l1Count++;
  }

  var l2Count = 0;
  var node2 = l2;
  while(node2) {
    node2 = node2.next;
    l2Count++;
  }

  node1 = l1;
  node2 = l2;

  if(l1Count > l2Count) {
    var diff = l1Count - l2Count;
    for (var i = 0; i < diff; i++){
      node1 = node1.next;
    }
  }

  if(l2Count > l1Count) {
    var diff = l2Count - l1Count;
    for (var i = 0; i < diff; i++){
      node2 = node2.next;
    }
  }

  while(node1 !== node2 && node1 !== null) {
    node1 = node1.next;
    node2 = node2.next;
  }
  return node1;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
};

var l1 = new ListNode('a1');
l1.next = new ListNode('a2');
l1.next.next = new ListNode('c1');
l1.next.next.next = new ListNode('c2');

var l2 = new ListNode('b1');
l2.next = new ListNode('b2');
l2.next.next = new ListNode('b3');
l2.next.next.next = new ListNode('c1');
l2.next.next.next.next = new ListNode('c2');
l2.next.next.next.next.next = new ListNode('c3');
console.log(l1);
console.log(l2);

var x = {};
var y = {};


var obj = {val : 1, next : null};
var copy = obj;
var obj2 = {val : 1, next : null};
var copy2 = obj2;

console.log(copy === copy2);


/*
There are many solutions to this problem:

Brute-force solution (O(mn) running time, O(1) memory):
For each node ai in list A, traverse the entire list B and check if any node in list B coincides with ai.

Hashset solution (O(n+m) running time, O(n) or O(m) memory):
Traverse list A and store the address / reference to each node in a hash set. Then check every node bi in list B: if bi appears in the hash set, then bi is the intersection node.

Two pointer solution (O(n+m) running time, O(1) memory):
Maintain two pointers pA and pB initialized at the head of A and B, respectively. Then let them both traverse through the lists, one node at a time.
When pA reaches the end of a list, then redirect it to the head of B (yes, B, that's right.); similarly when pB reaches the end of a list, redirect it the head of A.
If at any point pA meets pB, then pA/pB is the intersection node.
To see why the above trick would work, consider the following two lists: A = {1,3,5,7,9,11} and B = {2,4,9,11}, which are intersected at node '9'. Since B.length (=4) < A.length (=6), pB would reach the end of the merged list first, because pB traverses exactly 2 nodes less than pA does. By redirecting pB to head A, and pA to head B, we now ask pB to travel exactly 2 more nodes than pA would. So in the second iteration, they are guaranteed to reach the intersection node at the same time.
If two lists have intersection, then their last nodes must be the same one. So when pA/pB reaches the end of a list, record the last element of A/B respectively. If the two last elements are not the same one, then the two lists have no intersections.

*/

