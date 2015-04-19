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
      node.left.parent = node.value; 
    } else { 
      this.insert(node.left, val); 
    }
  } else {
    if (node.right === null) { 
      node.right = getBinaryNode(val); 
      node.right.parent = node.value;
    }
    else { this.insert(node.right, val); }
  }
};

BST.prototype.contains = function(target) {
  var currentNode = this.head;
  while(currentNode !== null) {
    if(currentNode.value === target) {
      return true;
    } else if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
  }
  return false;
}

module.exports = BST;

var tree = new BST();
tree.add(2);
tree.add(3);
tree.add(1);

// console.log(tree);
