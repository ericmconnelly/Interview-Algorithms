var BST = require("../binarySearchTree.js");

/*
        40
      /    \
    25      78
  /    \
10      32

 Min = 10 //just traverse all the way down to the left
 Max = 78 //jus traverse all the way down the right

*/

var minNode = function(node) {
  if (!node) {
    return null;
  }
  if (!node.left) {
    console.log(node.value);
  }
  minNode(node.left);
};

var maxNode = function(node) {
  if (!node) {
    return null;
  }
  if (!node.right) {
    console.log(node.value);
  }
  minNode(node.right);
}



var tree = new BST();
tree.add(40);
tree.add(25);
tree.add(10);
tree.add(32);
tree.add(78);

minNode(tree.head);
maxNode(tree.head);