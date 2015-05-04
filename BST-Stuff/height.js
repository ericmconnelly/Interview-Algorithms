var BST = require("../binarySearchTree.js");

// var treeHeight = function(root) {
//   if(!root) {
//     return 0;
//   }

//   var queue = [];
//   queue.push(root);
//   var height = 0;

//   while(1) {
//     var nodeCount = queue.length;
//     if(nodeCount === 0) {
//       return height;
//     }
//     height++;

//     while(nodeCount > 0) {
//       var node = queue.shift();
//       if(node.left !== null) {
//         queue.push(node.left);
//       }
//       if(node.right !== null) {
//         queue.push(node.right);
//       }
//       nodeCount--;
//     }
//   }
// }

var treeHeight = function(root) {
  if(!root) {return 0;}
  var queue = [];
  queue.push(root);
  var height = 0; 

  while(queue.length) {
    
  }
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

console.log(treeHeight(tree.head));


/*

Create a queue.
Push root into the queue.
height = 0
Loop
  nodeCount = size of queue
        
        // If number of nodes at this level is 0, return height
  if nodeCount is 0
    return Height;
  else
    increase Height

        // Remove nodes of this level and add nodes of 
        // next level
  while (nodeCount > 0)
    pop node from front
    push its children to queue
    decrease nodeCount
       // At this point, queue has nodes of next level

*/