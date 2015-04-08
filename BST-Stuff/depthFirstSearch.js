var BST = require("../binarySearchTree.js");

/*
        40
      /    \
    25      78
  /    \
10      31
      /   \
     30    33 
*/

var depthFirstSearch = function(node, target) {
  var result = [];
  var found = false;

  var subRoutine = function(node) {

    if(node && !found) {
      if(node.value === target){ 
        result.push(node);
        console.log(result);
        found = true;
      }
      console.log('currentNode: ', node.value);
      subRoutine(node.left);
      subRoutine(node.right);
    }
  };

  subRoutine(node);

  // return result;
  return found;
};

module.exports = depthFirstSearch;


var tree = new BST();
tree.add(40);
tree.add(25);
tree.add(10);
tree.add(31);
tree.add(30);
tree.add(78);
tree.add(33);

var found = depthFirstSearch(tree.head, 10);
console.log(found);

