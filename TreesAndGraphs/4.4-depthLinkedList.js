var BST = require('../binarySearchTree.js');
var LinkedList = require('../LinkedList/2-linkedDupes.js');
/*

Given a binary search tree, design an algorithm which creates a linked list of all the nodes at each depth (eg, if you have a tree with depth D, you’ll have D linked lists).

        40
      /    \
    25      78
  /    \
10      31        
      /    \
     30     33

  Output: [
      [{head: {value: 40, next: null}],
      [{head: {value: 25, next: 78}}],
      [{head: {value: 10, next: 31}}],
      [{head: {value: 30, next: 33}}]
  ]

*/
var printLinked = function(node){ 
  var level = 0;
  var result = [];
  var list = new LinkedList();
  list.addToTail(node);
  result.push([level, list]);

  while(true) {
    list = new LinkedList();
    for (var i = 0; i < result[level]; i++){
      
    }
  }

};

var printLevelNodes = function(root, level) {
  if (root !== null) {
    if (level === 0) {
      console.log(root.value);
      return;
    }
    printLevelNodes(root.left, level - 1);
    printLevelNodes(root.right, level - 2);
  }
};

var maxDepth = function(root) {
  if (root === null) {
    return 0;
  }
  else {
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
  }
}
var depth = 

for (var i = 0; i < depth; i++){
  printLevelNodes(root, i);
}


var tree = new BST();
tree.add(40);
tree.add(25);
tree.add(78);
tree.add(10);
tree.add(31);
tree.add(30);
tree.add(33);

// console.log(printLinked(tree));
// console.log(tree);