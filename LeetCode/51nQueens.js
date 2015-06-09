
// http://www.cs.usfca.edu/~galles/visualization/RecQueens.html
// http://www.simplecode.in/famous-problems/n-queens-problem/#ffs-tabbed-33

var Board = function(n) {
  this.board = [];
  for(var i = 0; i < n; i++) {
    this.board.push([]);
    for(var k = 0; k < n; k++){
      this.board[i].push(0);
    }
  }
};

Board.prototype.toggle = function(board, row, column) {
  this.board[row][column] = !this.board[row][column];
};

Board.prototype.isSafe = function(n, board, row, column) {
  var i;
  var k;
  for ( i = 0; i < n; i++) {
    if(this.board[row][column]) {
      return false;
    }
  }

  for( i = row;  k = column; i >= 0 && k >= 0; i--; k--){
    if(this.board[row][column]) {
      return false;
    }
  }

  for( i = row;  k = column; i < n && k >= 0; i++; k >= 0) {
    if(board[i][k]) {
      return false;
    }
  }
  return true;
};

/*

Author
Posts
April 19, 2011 at 5:03 AM #80928

Anonymous
what are the time complexities of following backtracking problems?

n queen problem

Maze problem

Graph coloring problem

April 19, 2011 at 8:31 PM #106773

Anonymous
for n-queen’s problem :-

say for ex: 4 queen problem on a 4×4 board, in the worst case.

for every arrangement on the first row, starting from the first cell till the last cell, there can be 4x4x4 arrangements on the 2nd,3rd and the 4th row.

So , the time complexity would be. O(n^n)

So, in the worst case, you would have to try 4x4x4x4 = 256 combinations on a 4×4 board.

*/


