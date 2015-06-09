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


var alt = function(m, n) {
  var matrix = [];
  for(var i = 0; i < m; i++){
    matrix.push([]);
    for(var k = 0; k < n; k++) {
      matrix[i].push(1);
    }
  }

  for(var i = 1; i < m; i++){
    for(var j = 1; j < n; j++){
      matrix[i][j] = matrix[i-1][j] + matrix[i][j-1];
    }
  }

  console.log(matrix);
  return matrix[m - 1][n - 1]
  console.log(matrix[m - 1][n - 1]);
}

alt(5,5);