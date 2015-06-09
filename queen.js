
/*Algorithm uses recursive Backtracking. Checks for correct position on subfields, whichs saves a lot position checks. Needs 15.720 position checks for a 8x8 field.
*/

var queenPuzzle = function(rows, columns) {
  if(rows <= 0) {
    return [[]];
  } else {
    return addQueen(rows - 1, columns);
  }
};

var addQueen = function(newRow, columns, prevSolution) {
  var newSolutions = [];
  var prev = queenPuzzle(newRow, columns);
  for(var i = 0; i < prev.length; i++){
    var solution = prev[i];
    for(var newColumn = 0; newColumn < columns; newColumn++){
      if(!hasConflict(newRow, newColumn, solution)) {
        newSolutions.push(solution.concat([newColumn]));
      }
    }
  }
  return newSolutions;
};

var hasConflict = function(newRow, newColumn, solution) {
  for (var i = 0; i < newRow; i++){
    if(solution[i] === newColumn ||
        solution[i] + 1 === newColumn + newRow ||
        solution[i] - 1 === newColumn - newRow) {
      return true;
    }
  }
  return false;
};
console.log(queenPuzzle(8, 8));