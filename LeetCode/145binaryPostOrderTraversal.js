/* 

Given a binary tree, return the preorder traversal of its nodes' values.

For example:
Given binary tree {1,#,2,3},
   1
    \
     2
    /
   3
return [3,2,1].

        40
      /    \
    25      78
  /    \
10      32

Output = [10,32,25, 78, 40]

Note: Recursive solution is trivial, could you do it iteratively?

*/

var postOrder = function(root) {
  if (!root) {
    return;
  }

  var result = [];
  var stack = [root];

  while(stack.length) {
    var current = stack.pop();
    result.unshift(current.val);
    if(current.left) {
      stack.push(current.left);
    }
    if(current.right) {
      stack.push(current.rigth);
    }
  }

  return result;
}