var matrix0 = function(matrix) {
  var row = [];
  var column = [];

  for (var i = 0; i < matrix.length; i++){
    for (var j = 0; j < matrix[0].length; j++){
      if (matrix[i][j] === 0 ){
        row[i] = 1;
        column[j] = 1;
      }
    }
  }
  
  console.log('row: ', row);
  console.log('column: ', column);

  for (var i = 0; i < matrix.length; i++){
    for (var j = 0; j < matrix[0].length; j++){
      if (row[i] === 1 || column[j] === 1) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};


var matrix =  [ 
 [1, 9, 5, 1],
 [3, 4, 0, 2],
 [6, 9, 7, 3],
 [0, 9, 8, 4]
];

console.log(matrix0(matrix));