/*

Given a Binary Tree, print all nodes that don’t have a sibling (a sibling is a node that has same parent. In a Binary Tree, there can be at most one sibling). Root should not be printed as root cannot have a sibling.

        40
      /    \
    25      78
  /    \      \
10      32    90

*/
var BST = require("../binarySearchTree.js");

var printSingles = function(node) {
  if (node === null) {
    return;
  }

  if (node.left !== null && node.right !== null) {
    printSingles(node.left);
    printSingles(node.right);
  }

  else if (node.right !== null) {
    console.log(node.right.value);
    printSingles(node.right);
  }

  else if (node.left !== null) {
    console.log(node.left.value);
    printSingles(node.left);
  }
};

var tree = new BST();
tree.add(40);
tree.add(25);
tree.add(10);
tree.add(32);
tree.add(78);
tree.add(90);

printSingles(tree.head);

