var BST = require("../binarySearchTree.js");

/*
        40
      /    \
    25      78
  /    \
10      32

Output = 10, 25, 32, 40, 78

*/

var inOrderTraverse = function(node) {
  if (node) {
    inOrderTraverse(node.left);
    console.log(node.value);
    inOrderTraverse(node.right);
  }
};

var tree = new BST();
tree.add(40);
tree.add(25);
tree.add(10);
tree.add(32);
tree.add(78);
// console.log(tree);

inOrderTraverse(tree.head);