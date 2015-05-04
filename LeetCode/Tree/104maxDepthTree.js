/* 

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

*/

// var maxDepth = function(tree) {
//   if(!tree) {
//     return 0;
//   }

//   return Math.max(maxDepth(tree.left), maxDepth(tree.right)) + 1;
// }


var maxDepth = function(tree){
  if(!tree) {
    return 0;
  }
  var l = maxDepth(tree.left);
  var r = maxDepth(tree.right);
  
}