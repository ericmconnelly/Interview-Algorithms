var BinaryHeap = function() {
  this.storage = [];
  this.count = 0;
};

BinaryHeap.prototype.check = function(a, b) {
  return a > b;
}

BinaryHeap.prototype.insert = function(item) {
  this.count++;
  this.storage[this.count] =  item;
  console.log('count: ', this.count);
  var child = this.count; //2 = 10
  var parent = Math.floor(child / 2); //1 = 1
  console.log('before: ',this.storage);
  while( child > 1 && this.check(this.storage[child], this.storage[parent])) {
    var temp = this.storage[child];
    this.storage[child] = this.storage[parent];
    this.storage[parent] = temp;

    child = parent;
    parent = Math.floor(child / 2);
  }
  console.log('after: ', this.storage);
};

BinaryHeap.prototype.delete = function() {
  if (this.count === 0) {
    throw 'Heap is empty'
  }
  var item = this.storage[1];
  this.storage[1] = this.storage[this.count];
  this.storage[this.count--] = null;

  var parent = 1;
  var child = Math.floor(parent / 2);

  while(child <= this.count){
    if (child < this.count) {
      child = this.check(this.storage[child], this.storage[child + 1]) ? child : child - 1;
    }
    if (this.check(this.storage[parent], this.storage[child])) {
      break;
    }

    var temp = this.storage[parent];
    this.storage[parent] = this.storage[child];
    this.storage[child] = temp;

    parent = child;
    child = Math.floor(parent / 2);
  }

  return item;
};

BinaryHeap.prototype.length = function() {
  return this.count;
};

module.exports = BinaryHeap;



var heap = new BinaryHeap;
heap.insert(1);
heap.insert(10);
heap.insert(11);
heap.insert(9);
heap.insert(1);
heap.insert(12);
// heap.delete();
// heap.delete();

console.log(heap.storage);
