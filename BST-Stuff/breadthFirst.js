var BST = require("../binarySearchTree.js");

/*
        40
      /    \
    25      78
  /    \
10      32

Output = 40,25,10,32,78

*/


var printLevel = function(root) {
  var queue = [];
  var next = [];
  queue.push(root);
  var count = 0;   // count how many siblings on each level

  while(queue.length) {
    var curr = queue.shift();
    if (curr) {
      count++;
      console.log('current: ', curr.value);
      next.push(curr.left);
      next.push(curr.right);
    }
    if(queue.length === 0){ 
      console.log(count);
      count = 0;
      queue = next;
      next = [];
    }
  }
};

// var alt = function(root) {
//   var queue = [];
//   var next = [];
//   queue.push(root);
//   var level = 0;
//   var result = [];

//   while(queue.length) {
//     var curr = queue.shift();

//     if(curr) {
//       result[level].push(curr.value);
//       next.push(curr.left);
//       next.push(curr.right);
//     }
//     if (queue.length === 0){
//       queue = next;
//       next = [];
//       level++;
//     }
//   }
//   console.log(result);
// };


var tree = new BST();
tree.add(40);
tree.add(25);
tree.add(10);
tree.add(32);
tree.add(78);
// console.log(tree.head);

printLevel(tree.head);
// alt(tree.head);
