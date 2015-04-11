var BST = require('../binarySearchTree');

var minimalBT = function(array) {
  
  var subRoutine = function(array, start, end) {

    if (end < start) {
      return null;
    }

    var mid = Math.floor((start + end) / 2);
    var node = new makeNode(array[mid]);
    node.left = subRoutine(array, start, mid - 1);
    node.right = subRoutine(array, mid + 1, end);

    console.log('returning: ', node);//this only gets here when sub is empty
    return node;                      //some crazy stack stuff
  };

  return subRoutine(array, 0, array.length - 1);

};

var makeNode = function(val) {
  this.value = val;
  this.left = null;
  this.right = null;
};


var arr = [1, 3, 7, 20, 25, 30, 5, 8, 9, 10];

var tree = minimalBT(arr);
