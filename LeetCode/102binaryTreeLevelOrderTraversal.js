/*

Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree {3,9,20,#,#,15,7},

  3
 / \
9  20
  /  \
 15   7

 [
  [3],
  [9,20],
  [15,7]
]
*/

var level = function (root) {
  if (!root) {return []; }
  var results = [];
  var queue = [root];
  var next = [];
  var tempArr = [];

  while(queue.length) {
    var current = queue.shift();
    tempArr.push(current.val);
    if(current.left) {
      next.push(current.left);
    }
    if(current.right) {
      next.push(current.right);
    }
    if(queue.length === 0) {
      queue = next;
      next = [];
      results.push(tempArr);
      tempArr = [];
    }
  }

  return results;
}