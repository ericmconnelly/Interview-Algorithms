var LinkedList = require("./LinkedList.js");

var reverseLinkedList = function(node) { // in place
  var previous = null;
  while(node){
    var temp = node.next;
    node.next = previous;
    previous = node;
    node = temp;
  }
  // console.log(previous);
  return previous;
};

var reverseRecursive = function(node) { //recursive
  if (node === null) {
    return null;
  }  
  if (node.next === null) {
    return node;
  }
  var second = node.next;
  node.next = null;

  var reversed = reverseRecursive(second);
  second.next = node;
  
  return reversed;
};

var reverseLL = function(node) {
  if (!node.head || !node.head.next) {
    return node;
  }
  var nodes = [];
  var current = node.head;

  while(current) {
    nodes.push(current);
    current = current.next;
  }

  var reversedLL = new LinkedList();
  reversedLL.addToTail(nodes.pop());
  current = reversedLL.head;

  while(node) {
    node.next = null;
    current.next = node;
    current = current.next;
    node = nodes.pop();
  }
  return reversedLL;
};

var list = new LinkedList();
list.addToTail(1);
list.addToTail(2);
list.addToTail(3);
list.addToTail(4);

list.head = reverseRecursive(list.head);
console.log(list.head.next.next);
// reverseRecursive(list.head);
// console.log(list);
// console.log(reverseLL(list));

