var BST = require("../binarySearchTree.js");

/*
        40
      /    \
    25      78
  /    \
10      31        
      /    \
     30     33
*/


var commonAncestor = function(node, n1, n2) {
  if (!node){ 
    return null;
  }
  var currentParent = node.value;

  if (n1 < currentParent && n2 < currentParent) {
    return commonAncestor(node.left, n1, n2);
  }

  if (n1 > currentParent && n2 > currentParent) {
    return commonAncestor(node.right, n1, n2);
  }
  console.log('Lowest common ancestor is: ', currentParent)
  return currentParent;
};

var tree = new BST();
tree.add(40);
tree.add(25);
tree.add(10);
tree.add(31);
tree.add(30);
tree.add(78);
tree.add(33);

console.log(commonAncestor(tree.head, 30, 33));

var Node = function(val) {
  this.value = val;
  this.left = null;
  this.right = null;
};

var node = new Node(1);
console.log(node);
