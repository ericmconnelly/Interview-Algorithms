/*
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree {3,9,20,#,#,15,7},
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]

*/

var levelOrderBottom = function(root) {
    if (!root) {
        return [];
    }
    var result = [];
    var queue = [root];
    var arr = [];
    var next = [];
    while(queue.length) {
        var current = queue.shift();
        arr.push(current.val);
        if(current.left) {
            next.push(current.left);
        }
        if (current.right) {
            next.push(current.right);
        }
        if (queue.length === 0) {
            queue = next;
            next = [];
            result.unshift(arr);
            arr = [];
        }
    }
    return result;
};