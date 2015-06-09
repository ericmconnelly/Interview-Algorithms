var Tree = require('../../binarySearchTree.js');

var pathSum = function(root, target) {
  if(!root || !target) {
    return false;
  }
  var stack = [root];
  var vals = [root.value];

  while(stack.length) {
    var curr = stack.pop();
    var currVal = vals.pop();

    if(currVal === target && !curr.right && !curr.left) {
      return true;
    }

    if(curr.right) {
      stack.push(curr.right);
      vals.push(curr.right.value + currVal);
    }

    if(curr.left) {
      stack.push(curr.left);
      vals.push(curr.left.value + currVal);
    }
  }
  return false;
}

// var hasPathSum = function(tree, target) {
//     var stack = [];
//     var pre = null;
//     var curr = tree;
//     var sum = 0;
    
//     while(curr || stack.length) {
//         while(curr) {
//             stack.push(curr);
//             sum += curr.value;
//             curr = curr.left;
//         }
//         curr = stack.length - 1;
//         if(!curr.left && !curr.right && sum === target) {
//             return true;
//         }
//         if(curr.right && pre !== curr.right) {
//             curr = curr.right;
//         } else {
//             pre = curr;
//             stack.pop();
//             sum -= curr.value;
//             curr = null;
//         }
//     }
//     return false;
// };

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
console.log(tree.head);
console.log(pathSum(tree.head, 12));


