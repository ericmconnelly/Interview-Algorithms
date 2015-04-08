// var BST = require("binarySearchTree.js");
// Implement a function to check if a tree is balanced. For the purposes of this question, a balanced tree is defined to be a tree such that no two leaf nodes differ in distance from the root by more than one.
/*
        
               A  (Height = 2)
           /     \
(height =-1)       B (Height = 1) <-- Unbalanced because 1-(-1)=2 >1 (left child is null)
                    \
                     C (Height = 0)


      A (h=3)
     /     \
   B(h=1)     C (h=2)        
  /          /   \
D (h=0)  E(h=0)  F (h=1)  <-- Balanced
               /
              G (h=0)

     A (h=3)
    /     \
B(h=0)     C (h=2)        <-- Unbalanced: 2-0 =2 > 1
          /   \
       E(h=1)  F (h=0)
       /     \
     H (h=0)   G (h=0)  
*/

//depth search
  // if child is not null
    // incremenet depth/height by 1;


var getHeight = function(node, depth) {
  if (node === null) {
    return depth;
  }

  var leftHeight = getHeight(node.left, depth+1);
  
  if (leftHeight === -1) {
    return -1;
  } 

  var rightHeight = getHeight(node.right, depth+1); 

  if (rightHeight === -1) {
    return -1;
  }

  if (Math.abs(leftHeight - rightHeight) > 1) {
    return -1;
  }

  return Math.max(leftHeight, rightHeight);
}

var isBalanced = function(node) {
  return getHeight(node, 0) !== -1;
}
// var maxDepth = function(root) {
//   if (root = null) {
//     return -1;
//   }
//   return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
// };

// var minDepth = function(root) {
//   if (root === null) {
//     return -1;
//   }

//   return 1 + Math.min(minDepth(root.left), minDepth(root.right));
// };

// var isBalanced = function(root) {
//   return (maxDepth(root) - minDepth(root) <= 1);
// }



var getBinaryNode = function(val) {
  return { value : val, left: null, right: null };
};

var BST = function() {
  this.head = null;
};

BST.prototype.add = function(val) {
  if(this.head === null) {
    this.head = getBinaryNode(val);
  }
  else {
    this.insert(this.head, val);
  }
};

BST.prototype.insert = function(node, val) {
  if (node.value > val ) {
    if (node.left === null) { 
      node.left = getBinaryNode(val); 
    } else { 
      this.insert(node.left, val); 
    }
  } else {
    if (node.right === null) { node.right = getBinaryNode(val); }
    else { this.insert(node.right, val); }
  }
};

var tree = new BST();
tree.add(2);
tree.add(3);
tree.add(1);
tree.add(5);
// tree.add(7);
// tree.add(10);
tree.add(0);
tree.add(-1); 

console.log(tree);
console.log(isBalanced(tree.head));
