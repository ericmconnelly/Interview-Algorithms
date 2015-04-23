/* 

Given a binary tree, return the preorder traversal of its nodes' values.

For example:
Given binary tree {1,#,2,3},
   1
    \
     2
    /
   3
return [1,2,3].

        40
      /    \
    25      78
  /    \
10      32

Output = [40,25,10,32,78]

Note: Recursive solution is trivial, could you do it iteratively?

*/

var preOrder = function (root) {
  var result = [];
  var stack = [root];

  while(stack.length) {
    var current = stack.pop(); //LIFO
    if(current) {
      result.push(current.val);
    }
    if(current.right){ 
      stack.push(current.right);
    }
    if(current.left){ 
      stack.push(current.left);
    }
  }
  return result;
};
