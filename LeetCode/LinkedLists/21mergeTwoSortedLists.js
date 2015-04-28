/*

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.



*/
var mergeRec = function(l1, l2) {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  if(l1.val < l2.val) {
    l1.next = mergeRec(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeRec(l2.next, l1);
    return l2;
  }
};

var merge = function(l1, l2) {
  if (!l1 && !l2) {
    return null;
  }
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }

  var result = new ListNode(0);
  var prev = result;  //{ val: 0, next: null }
  while(l1 !== null & l2 !== null) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
    console.log('result: ', result);
  }
    // console.log(prev);

  if (l1) {
    prev.next = l1;
  }
  if (l2) {
    prev.next = l2;
  }
  // console.log(prev);
  console.log('l1 ' ,l1);
  console.log('l2: ', l2);
  return result.next;

};



function ListNode(val) {
    this.val = val;
    this.next = null;
};

// var list1 = new ListNode(1);
// list1.next = new ListNode(3);
// list1.next.next = new ListNode(5);

// var list2 = new ListNode(2);
// list2.next = new ListNode(4);
// list2.next.next = new ListNode(6);
// // console.log(list1);
// // console.log(list2);

// var merged = merge(list1, list2);
// console.log(merged.next.next.next);


var obj = {val: 1, next: null};

var prev = obj;
prev.next = {val: 2, next: null};

console.log(obj); //{ val: 1, next: { val: 2, next: null } } uhh WTF

var obj2 = {a: 2};
var x = obj2;
x.a = 1;
console.log(obj2);

var arr = [1];
var y = arr;
arr[0] = 10
y[0] = 2;

console.log(arr);