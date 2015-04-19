var BST = require("../binarySearchTree.js");

/*
        40
      /    \
    25      78
  /    \
10      32

 Min = 10 //just traverse all the way down to the left
 Max = 78 //jus traverse all the way down the right

*/


var tree = new BST();
tree.add(40);
tree.add(25);
tree.add(10);
tree.add(32);
tree.add(78);