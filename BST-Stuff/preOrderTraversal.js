var BST = require("../binarySearchTree.js");

/*
        40
      /    \
    25      78
  /    \
10      32

Output = 40,25,10,32,78

*/

var preOrderTraverse = function(node) {
  if (node) {
    console.log(node.value);
    preOrderTraverse(node.left);
    preOrderTraverse(node.right)
  } 
};

var tree = new BST();
tree.add(40);
tree.add(25);
tree.add(10);
tree.add(32);
tree.add(78);
// console.log(tree);

preOrderTraverse(tree.head);