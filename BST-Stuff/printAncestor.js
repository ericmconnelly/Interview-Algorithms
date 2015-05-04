var BST = require("../binarySearchTree.js");

var printAncestor = function(node, target) {
  if(!node) {return false; }
  if(node.value === target) {return true; }
  if(printAncestor(node.left, target) || printAncestor(node.right, target)) {
    console.log(node.value);
    return true;
  }
  return false;
}




var tree = new BST();
tree.add(40);
tree.add(25);
tree.add(10);
tree.add(31);
tree.add(30);
tree.add(78);
tree.add(33);
console.log(tree);
