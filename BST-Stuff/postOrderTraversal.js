var BST = require("../binarySearchTree.js");

/*
        40
      /    \
    25      78
  /    \
10      31
      /    \
     30     33
Output = 10,30,33,31, 25, 78, 40

*/

var results = [];
var postOrderTraverse = function(node) {
  if (node) {
    // console.log(node.value);
    postOrderTraverse(node.left);
    postOrderTraverse(node.right)
    console.log('print: ', node.value);
    results.push(node.value);
  } 
};

var tree = new BST();
tree.add(40);
tree.add(25);
tree.add(10);
tree.add(31);
tree.add(30);
tree.add(78);
tree.add(33);
// console.log(tree);
// postOrderTraverse(tree.head);
// console.log(results);

// without recursion

var twoStack = function(tree) {
  if(!tree) {return;}
  var s1 = [tree];
  var s2 = [];
  var results = [];

  while(s1.length) {
    var curr = s1.pop();
    s2.push(curr);
    if(curr.left) {
      s1.push(curr.left);
    }
    if(curr.right) {
      s1.push(curr.right);
    }
  }

  while(s2.length){
    var curr = s2.pop();
    results.push(curr.value);
  }
  console.log(results);
};

twoStack(tree.head);

var oneStack = function(tree) {
  if(!tree) {return;} 
  var curr = tree;
  var stack = [];

  while(curr) {
    if(curr.right) {
      stack.push(curr.right);
    }
    stack.push(curr);
    curr = curr.left;
  }

  curr = stack.pop();

  if(curr.right && root.right === stack[stack.length - 1]) {
    stack.pop();
    stack.push(curr);
    curr = curr.right;
  } else {
    curr = null;
  }

}
/*

1. move to left most node
  2. push roots right child and then root to stack


*/