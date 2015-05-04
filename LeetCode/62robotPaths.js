/*

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?


Above is a 3 x 7 grid. How many possible unique paths are there?

Note: m and n will be at most 100.


*/
var makeGrid = function(num1, num2) {
  var result = [];
  for (var i = 0; i < num1; i++) {
    result.push(0);
  }
}

var uniquePaths = function(m, n) {
  if(m === 1 || n === 1) {
    return 1;
  }
  var count = 1;
  if (m > n) {
    for (var i = 1; i <= n - 1; i++){
      count *= (m + i - 1);
      count /= i;
    }
  }
}