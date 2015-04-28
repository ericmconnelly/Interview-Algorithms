/*

Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.

O(n) time, & O(n) space
1.setHash w/ vals as keeys
  input first val in hash
2. while loop to traverse
  3. if next's val exists in has
        4. set current.next = current.next.next;
  5. else 
      5. move current

return list

O(n) time & O(1) space

because the list is sorted, we can do a inner while loop to remove dupes

1. set current pointer
2. while loop until current.next !== null
  3. if current's val is the same as the next
    4. set current.next = next.next
  5. else 
    6. move current

7. return list

*/



var deleteDuplicates = function(list) {
    if(!list || !list.next) { return list; }
    var hash = {};
    var current = list;
    hash[current.val] = 1;
    
    while(current && current.next) {
        var nextVal = current.next.val;
        if(hash[nextVal]) {
            current.next = current.next.next;
        } else {
            current = current.next;
            hash[nextVal] = 1;
        }
    }
    return list;
};

var delDupes = function(list) {
  if(!list || !list.next) {return list;}
  var current = list;
  while(current.next) {
    if(current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return list;
};


var LinkedList = function(val) {
  this.val = val;
  this.next = null;
};

LinkedList.prototype.push = function(val) {
  var node = {val: val, next: null};
  if(this.next === null) {
    this.next = node;
  } else {
    var current = this.next;
    while(current.next) {
      current = current.next;
    }
    current.next = node;
  }
};

var list = new LinkedList(1);
list.push(1);

console.log(delDupes(list));