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
  var curr = node;
  if (curr) {
    console.log(curr.value);
    preOrderTraverse(curr.left);
    preOrderTraverse(curr.right)
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

var iterative = function(node) {
  if(!node){ return null;}
  var stack = [node];
  var results = [];
  while(stack.length) {
    var curr = stack.pop();
    results.push(curr.value);
    console.log(curr.value);
    if(curr.right) {
      stack.push(curr.right);
    }
    if(curr.left) {
      stack.push(curr.left);
    }
  }
  console.log(results);
}

iterative(tree.head);

