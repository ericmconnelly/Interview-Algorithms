/*
Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

For example,
Given input array A = [1,1,2],

Your function should return length = 2, and A is now [1,2].


*/


var removeDuplicates = function(array) {
  if(array.length < 2) {
      return array.length;
  }

  var count = 1;

  for(var i = 1; i < array.length; i++) {
    if(array[i] !== array[i-1]) {
        array[count++] = array[i];
    } else {
      array[i - count] = array[i];
    }
  }
  console.log(array);
  return count;
};

var arr = [1,1,2];

console.log(removeDuplicates(arr));


var arr2 = [1,2,3];
arr2[1] = arr2[2];

console.log(arr2)