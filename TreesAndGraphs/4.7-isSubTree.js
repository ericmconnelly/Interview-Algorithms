var BST = require('../binarySearchTree.js');

/*

You have two very large binary trees: T1, with millions of nodes, and T2, with hun- dreds of nodes. Create an algorithm to decide if T2 is a subtree of T1.

1. visit each node in the small tree once
2. called once per node of large tree

*/

var containsTree = function(t1, t2) {
  if (t2 === null) {
    return true;
  } else {
    return subTree(t1, t2);
  }
};

var subTree = function(t1, t2) {
  if (t1 === null) {
    return false;
  }
  if (t1.value === t2.value) {
    if (matchTree(t1, t2)) {
      return true;
    }
  }
  return (subTree(t1.left, t2) || subTree(t1.right, t2));
};

var matchTree = function(t1, t2) {
  if (t2 === null && t1 === null) {
    return true;
  }
  if (t1 === null || t2 === null){
    return false;
  }
  if (t1.value !== t2.value) {
    return false;
  }

  return (matchTree(t1.left, t2.left) && matchTree(t1.right, t2.right));
};


var tree = new BST();
tree.add(40);
tree.add(25);
tree.add(10);
tree.add(32);
tree.add(78);
tree.add(50);
tree.add(79);

var tree2 = new BST();

tree2.add(25);
tree2.add(10);
tree2.add(32);

console.log(containsTree(tree.head, tree2.head));