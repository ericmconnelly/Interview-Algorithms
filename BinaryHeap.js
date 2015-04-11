var BinaryHeap = function() {
  this.array = [];

  if (data && (data instanceof Array)) {
    this.array = data;
    var length = this.array.length;
    for (var i = Math.floor( (length - 1) / 2 ); i >= 0; i--){
      this.bubbleDown(i, this.array[i]);
    }
  }
};

BinaryHeap.prototype.getParentIndex = function(childIndex) {
  return Math.floor( (childIndex - 1) / 2);
};

BinaryHeap.prototype.getLeftChild = function(parentIndex) {
  return parentIndex * 2 + 1;
};

BinaryHeap.prototype.getRightChild = function(parentIndex){ 
  return parentIndex * 2 + 2;
};

BinaryHeap.prototype.add = function(data) {
  if (data === undefined) {
    throw 'not valid input';
  }

  this.array.push(data);
  this.bubbleUp(this.array.length - 1, data);
};

BinaryHeap.prototype.bubbleUp = function(childIndex, childData) {
  if (childIndex > 0) {
    var parentIndex = this.getParentIndex(childIndex);
    var parentData = this.array[parentIndex];

    if (this.)
  }
}