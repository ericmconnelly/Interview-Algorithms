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

module.exports = BST;

var tree = new BST();
tree.add(2);
tree.add(3);
tree.add(1);
