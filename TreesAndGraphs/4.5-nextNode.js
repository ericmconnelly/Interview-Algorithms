var BST = require('../binarySearchTree.js');
/*
Write an algorithm to find the ‘next’ node (e.g., in-order successor) of a given node in a binary search tree where each node has a link to its parent.


        40
      /    \
    25      78
  /    \
10      32

*/

var nextNode = function(node){ 
  if (node !== null) {
    var p;
    if (node.parent === null || node.right !== null) {
      p = leftMostChild(node.right);
    } else {
      while( (p === node.parent) !== null) {
        if (p.left === node){
          break;
        }
        node = p;
      }
    }
    return p;
  }
  return null;
}

var leftMostChild = function(node) {
  if (node === null) {
    return null;
  }
  while (node.left !== null) {
    node = node.left;
  }
  return node;
};

// var nextNode = function(node) {
//   if(!node){ 
//     return null;
//   }
//   if (node) {
//     nextNode(node.left);
//     console.log(node.value);
//     nextNode(node.right);
//   }

// };

var tree = new BST();
tree.add(40);
tree.add(25);
tree.add(10);
tree.add(32);
tree.add(78);
tree.add(50);
tree.add(79);
// console.log(tree.head);

console.log(nextNode(tree.head.left));