/*

Given a list of non negative integers, arrange them such that they form the largest number.

For example, given [3, 30, 34, 5, 9], the largest formed number is 9534330.

Note: The result may be very large, so you need to return a string instead of an integer.

[3, 30, 34, 5, 9] = 9534330
*/

function largestNumber(num) {
    return num.sort(function(a, b) {
        return (b + '' + a ) - (a + '' + b);
    }).join('').replace(/^0*/,'') || '0';
}

var largestNumberArray = function(array) {
  var sorted = array.sort(function(a, b) {
    return (b + '' + a) - (a + '' + b);
  });
  
  return sorted.join('');
}

var arr = [3, 30, 34, 5, 9];
var arr2 = [1,2,3];

console.log(largestNumber(arr2));
console.log(largestNumberArray(arr2));