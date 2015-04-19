var isBST = function(node) {
  var prev = null

  if(node){ 
    if (!isBST(node.left)) {
      return false;
    }
    if (prev !== null && node.value <= prev.value) {
      return false;
    }
    prev = node;
    return isBST(node.right);
  }
  return true;
}