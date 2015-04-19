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
  if(!node){ 
    return null;
  }
  if (node) {
    // console.log('recursed', node.value)
    inOrderTraverse(node.left);
    console.log(node.value);
    inOrderTraverse(node.right);
  }
};

var iterative = function(node) {
  var stack = [];
  var current = node;
  while(stack.length || current) {
    if (current) {
      stack.push(current)
      current = current.left;
    } else {
      current = stack.pop();
      console.log(current.value);
      current = current.right;
    }
  }
}

var tree = new BST();
tree.add(40);
tree.add(25);
tree.add(10);
tree.add(32);
tree.add(78);
// console.log(tree);

// inOrderTraverse(tree.head);
iterative(tree.head);

