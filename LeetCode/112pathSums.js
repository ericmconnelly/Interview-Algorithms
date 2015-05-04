/*
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

For example:
Given the below binary tree and sum = 22,
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.


*/

var recursive = function(tree, target) {
  if(!tree || !target || typeof target !== 'number') {
    return false;
  }
  if(tree.left === null && tree.right === null) {
    return target === tree.val;
  }

  return recursive(tree.left, sum - tree.val) || recursive(tree.right, target - tree.val);
}

// var pathSumIterative = function(tree, target) {
//   if(!tree || !target || typeof target !== 'number' || tree = []) {
//     return false;
//   }
//   var sum = 0;
//   var stack = [];
//   var curr = tree;
//   var prev = null;

//   while(curr || stack.length) {
//     while(curr) {
//       stack.push(curr);
//       sum += curr.val;
//       curr = curr.left;
//     }
//     curr = stack.length - 1;
//     if(curr.left === null && curr.right === null && sum === target) {
//       return true;
//     }
//     if(curr.right && prev !== curr.right) {
//       curr = curr.right;
//     } else {
//       prev = curr;
//       stack.pop();
//       sum -= curr.val;
//       curr = null;
//     }
//   }
//   return false;

// }