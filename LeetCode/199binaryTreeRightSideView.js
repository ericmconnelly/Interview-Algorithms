/* 

Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

For example:
Given the following binary tree,
   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
You should return [1, 3, 4].

*/

var rightSideView = function(root) {
    if(!root) {
        return [];
    }
    var queue = [root];
    var next = [];
    var result = [root.val];
    
    while(queue.length !== 0) {
        var current = queue.shift();
        if(current.left) {
            next.push(current.left);
        }
        if (current.right) {
            next.push(current.right);
        }
        if (queue.length === 0 && next.length) {
            result.push(next[next.length - 1].val);
            queue = next;
            next = [];
        }
    }
    return result;
};

