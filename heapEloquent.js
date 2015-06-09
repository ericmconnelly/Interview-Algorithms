/*

**The insert operation is the easiest to implement. The algorithm is also straight forward.

Add the element to the bottom of the heap.
Compare the added element with its parent; if they are in the correct order, stop.
If not, swap the element with its parent and return to the previous step.

***To delete the top of a heap:

Replace the root of the heap with the last element on the last level.
Compare the new root with its children; if they are in the correct order, stop.
If not, swap the element with one of its children and return to the previous step.
Swap with its smaller child in a min-heap and its larger child in a max-heap.

*/

var Heap = function() {
  this.array = [];
};

Heap.prototype = {
  add: function(data) {
    if(data === undefined) {
      throw 'invalid data';
    }
    this.array.push(data);
    this.bubbleUp(this.array.length - 1, data);
    console.log('array:', this.array);
  },

  bubbleUp: function(childIndex, childData) {
      //check to make sure there is more than just one element in array
    if(childIndex > 0) {
          //get the parent's index & value
      var parentIndex = this.getParentIndex(childIndex);
      // console.log('ParentIndex: ', parentIndex);
      var parentData = this.array[parentIndex];
          //if child's data is less than parent, swap them!
      if(this.shouldSwap(childData, parentData)) {
        this.array[parentIndex] = childData;
        this.array[childIndex] = parentData;
        this.bubbleUp(parentIndex, childData);
      }
    }
  },

  getParentIndex: function(childIndex) {
    return Math.floor( (childIndex-1) / 2);
  },

  pop: function() {
      //get the smallest, pop the last ele, then swap to beginning
    var headNode = this.array[0];
    var tailNode = this.array.pop();
    this.array[0] =  tailNode;
      //bubble the new first ele down
    this.bubbleDown(0, tailNode);
    console.log('afterPop: ', this.array);
    return headNode;
  },

  bubbleDown: function(parentIndex, parentData) {
    if(parentIndex < this.array.length) {
      var targetIndex = parentIndex;
      var targetData = parentData;

      var leftChildIndex = this.getLeftChild(parentIndex);
      var rightChildIndex = this.getRightChild(parentIndex);

      if(leftChildIndex < this.array.length) {
        var leftChildData = this.array[leftChildIndex];
        if(this.shouldSwap(leftChildData, targetData)) {
          targetIndex = leftChildIndex;
          targetData = leftChildData;
        }
      }

      if(rightChildIndex < this.array.length) {
        var rightChildData = this.array[rightChildIndex];
        if(this.shouldSwap(rightChildData, targetData)) {
          targetIndex = rightChildIndex;
          targetData = rightChildData;
        }
      }
      if(targetIndex !== parentIndex) {
        this.array[parentIndex] = targetData;
        this.array[targetIndex] = parentData;
        this.bubbleDown(targetIndex, parentData);
      }
    }
  },

  getLeftChild: function(parentIndex) {
    return parentIndex * 2 + 1;
  },

  getRightChild: function(parentIndex) {
    return parentIndex * 2 + 2;
  },

  shouldSwap: function(a, b) {
    return a > b;
  }

};

var heap = new Heap();
var arr = [10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5];

for(var i = 0; i < 10;  i++){
  heap.add(arr[i]);
}
console.log(heap);

console.log(heap.pop());
console.log(heap.pop());
// console.log(heap.pop());
// console.log(heap.pop());
// console.log(heap.pop());

console.log(heap);
