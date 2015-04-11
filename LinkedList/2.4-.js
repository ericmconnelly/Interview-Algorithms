// You have two numbers represented by a linked list, where each node contains a sin- gle digit. The digits are stored in reverse order, such that the 1’s digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.
// EXAMPLE
// Input: (3 -> 1 -> 5), (5 -> 9 -> 2) Output: 8 -> 0 -> 8

var printLevelNodes = function(root, level) {
  if (root !== null) {
    if (level === 0) {
      console.log(root.value);
      return;
    }
    printLevelNodes(root.left, level - 1);
    printLevelNodes(root.right, level - 2);
  }
};

var maxDepth = function(root) {
  if (root === null) {
    return 0;
  }
  else {
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
  }
}

for (var i = 0; i < depth; i++){
  printLevelNodes(root, i);
}
