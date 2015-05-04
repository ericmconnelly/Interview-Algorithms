var Tree = require('../../binarySearchTree.js');

var hasPathSum = function(tree, target) {
    var stack = [];
    var pre = null;
    var curr = tree;
    var sum = 0;
    
    while(curr || stack.length) {
        while(curr) {
            stack.push(curr);
            sum += curr.value;
            curr = curr.left;
        }
        curr = stack.length - 1;
        if(!curr.left && !curr.right && sum === target) {
            return true;
        }
        if(curr.right && pre !== curr.right) {
            curr = curr.right;
        } else {
            pre = curr;
            stack.pop();
            sum -= curr.value;
            curr = null;
        }
    }
    return false;
};

var tree = new Tree();
// tree.add(5);
// tree.add(4);
// tree.add(2);
// tree.add(3);
// tree.add(8);
// tree.add(7);
// tree.add(11);
// tree.add(13);
// tree.add(1);
// console.log(tree.head);

tree.add(5);
tree.add(3);
tree.add(1);
tree.add(4);
console.log(tree.head.left);

console.log(hasPathSum(tree.head, 14));