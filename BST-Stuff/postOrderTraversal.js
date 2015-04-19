var BST = require("../binarySearchTree.js");

/*
        40
      /    \
    25      78
  /    \
10      31
      /    \
     30     33
Output = 10,30,33,31, 25, 78, 40

*/

var results = [];
var postOrderTraverse = function(node) {
  if (node) {
    // console.log(node.value);
    postOrderTraverse(node.left);
    postOrderTraverse(node.right)
    console.log('print: ', node.value);
    results.push(node.value);
  } 
};

var tree = new BST();
tree.add(40);
tree.add(25);
tree.add(10);
tree.add(31);
tree.add(30);
tree.add(78);
tree.add(33);
// console.log(tree);
postOrderTraverse(tree.head);
console.log(results);

// without recursion

// var postTraverse = function(node) {
//   var queue = [];
//   queue.push(node);

//   while(!queue.length){ 
//     var currentNode = queue.shift();
//     if (currentNode.left !== null && currentNode.)
//   }
// }