/*
Suppose a sorted array is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Find the minimum element.

You may assume no duplicate exists in the array.

*/

var rotateMin = function(arr) {
  var start = 0;
  var end = arr.length - 1;
  while(start < end) {
    var mid = Math.floor((start + end) / 2);
    // console.log(arr[mid]);
    if (arr[end] < arr[mid]) {
      start = mid + 1;
      if (start === end) {
        return arr[start];
      }
    } else {
      end = mid;
    }
  }
  return arr[start];
}

var rotated = [2,1];
console.log(rotateMin(rotated));