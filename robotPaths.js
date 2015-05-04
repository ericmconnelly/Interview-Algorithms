var Board = function(n) {
  this.board = [];
  for (var i = 0; i < n; i++) {
    this.board.push([]);
    for (var j = 0; j < n; j++){
      this.board[i].push(false);
    }
  }
};

Board.prototype.toggle = function(i, j) {
  this.board[i][j] = !this.board[i][j];
};

Board.prototype.hasBeenVisited = function(i, j) {
  if (this.board[i][j] === true) {
    return true;
  } else {
    return false;
  }
}

var b = new Board(2);
console.log(b);
console.log(b.hasBeenVisited(1, 1));

var robotPaths = function(n, board, i, j) {
  if(!board) {
    board = new Board(n);
    i = 0;
    j = 0;
  }
    //check if within board, and not on place already visisted.
  if(!(i >= 0 && i < n && j >= 0 && j <n) || board.hasBeenVisited(i,j)) {
    return 0;
  }
    //got to the end 
  if(i === n - 1 && j === n - 1) {
    return 1;
  }
  board.toggle(i, j);

  var result = robotPaths(n, board, i, j + 1) + robotPaths(n, board, i, j - 1) + robotPaths(n, board, i + 1, j) + robotPaths(n, board, i -1, j);

  board.toggle(i, j);
  return result;
};

console.log(robotPaths(3));
