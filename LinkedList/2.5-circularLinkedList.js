// Given a circular linked list, implement an algorithm which returns node at the begin- ning of the loop.
// DEFINITION
// Circular linked list: A (corrupt) linked list in which a node’s next pointer points to an earlier node, so as to make a loop in the linked list.
// EXAMPLE
// Input: A -> B -> C -> D -> E -> C [the same C as earlier] 
// Output: C

var findBeginning = function(list) {
  // var n1 = list.head;
  // var n2 = list.head;
  var n1 = list;
  var n2 = list;

  while(n2.next !== null) {
    n1 = n1.next;
    n2 = n2.next.next;

    if (n1 === n2) {
      break;
    }
  }

  if (n2.next === null) {
    return null;
  }

  n1 = list;

  while (n1 !== n2) {
    n1 = n1.next;
    n2 = n2.next;
  }
  return n2.value;
}

var Node = function(value){
  return { value: value, next: null };
}

var nodeA = Node('A');
var nodeB = nodeA.next = Node('B');
var nodeC = nodeB.next = Node('C');
var nodeD = nodeC.next = Node('D');
var nodeE = nodeD.next = Node('E');
nodeE.next = nodeC;
// console.log(nodeA);

console.log(findBeginning(nodeA));

