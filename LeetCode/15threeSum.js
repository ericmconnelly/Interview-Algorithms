/* 

Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:
Elements in a triplet (a,b,c) must be in non-descending order. (ie, a ≤ b ≤ c)
The solution set must not contain duplicate triplets.
    For example, given array S = {-1 0 1 2 -1 -4},

    A solution set is:
    (-1, 0, 1)
    (-1, -1, 2)

*/


var arr = [-1, 0, 1, 2, -1, -4];

var sorted = arr.sort(function(a,b) {return a - b;});
console.log(sorted);

var threeSum = function(arr) {
  arr = arr.sort(function(a, b) {return a + b;});
  var results = [];

  for (var i = 0; i < arr.length; i++){
    var target = 0 - arr[i];
    var left = i + 1;
    var right = arr.length - 1;

    while (left < right) {
      var sum = arra[left] + arr[right];
      if(sum < target) {
        left++;
      } else if (sum < target) {
        right--;
      } else {
        var el1 = arr[i];
        var el2 = arr[left];
        var el3 = arr[right];
        results.push([el1, el2, el3]);

        while( left < right && arr[left] === el2 ) {
          front++;
        }

        while( left < right && arr[right] === el3) {
          right--;
        }
      }
    }

    while( i + 1 < arr.length && arr[i + 1] === arr[i]) {
      i++;
    }
  }

  return results;
};


var alt = function(arr) {
  // arr = arr.sort(function(a, b) {return a + b;});
    var results = [];

      for (var i = 0; i <= arr.length - 3; i++){
          var current = arr[i];
          console.log('current: ', current);
          var left = i + 1;
          var right = arr.length - 1;
          console.log('left: ', arr[left]);
          console.log('right: ', arr[right]);
          
          while (left < right) {
              var b = arr[left];
              var c = arr[right];
              if ( b + c === current * -1) {
                  var found = [current, b, c];
                  results.push(found.sort(function(a,b) {return a - b;}));
                  left++;
                  right--;
              } else if (b + c < current * -1) {
                  left++;
              } else {
                  right--;
              }
          }
      }
      
      return results;
};

var input = [-1,0,1];
console.log(input[1]);
console.log(alt(input));