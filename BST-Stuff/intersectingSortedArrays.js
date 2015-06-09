/* 
1. Find intersection of 2 sorted arrays.

*/

var findIntersection = function(a, b) {
  var aLength = a.length;
  var bLength = b.length;
  var i = 0;
  var j = 0;

  while( i < aLength && j < bLength) {
    var results =[];
    if(a[i] > b[j]) {
      j++;
    } else if(b[j] >a[i]) {
      i++;
    } else {
      results.push(a[i]);
      i++;
      j++;
    }
  }
  return results;
}