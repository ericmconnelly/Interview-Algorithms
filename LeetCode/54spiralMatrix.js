/*
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

For example,
Given the following matrix:

[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
You should return [1,2,3,6,9,8,7,4,5].

*/

var spiral = function(matrix) {
  var results = [];
  var startRow = 0;
  var endRow = matrix.length - 1;
  var startCol = 0;
  var endCol = matrix[0].length - 1;

  while(startRow <= endRow && startCol <= endCol) {
    for(var i = startCol; i <= endCol; i++) {
      results.push(matrix[startRow][i]);
    }
    startRow++;

    for(var k = startRow; k <= endRow; k++) {
      results.push(matrix[k][endCol]);
    }
    endCol--;

    if(startRow <= endRow){
      for(var j = endCol; j >= startCol; j--) {
        results.push(matrix[endRow][j]);
      }
      endRow--;
    }

    if(startCol <= endCol) {
      for(var m = endRow; m >= startRow; m--) {
        results.push(matrix[m][startCol]);
      }
      startCol++;
    }
  }

  return results;
}

var arr = [
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
];


console.log(spiral(arr));