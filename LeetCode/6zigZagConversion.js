/* 

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".

*/

var convert = function(string, rows) {
  var len = string.length;
  var array = [];
  var result = '';
  for (var j = 0; j < rows; j++) {
    array.push([]);
  }
  var i = 0;

  while( i < len) {
    for (var k = 0; k < rows && i < len; k++){
      array[k].push(string[i]);
      i++;
    }
    for (var m = rows - 2; m >= 1 && i < len; m--) {
      array[m].push(string[i]);
      i++;
    }
  }

  // for (var i = 1; i < array.length; i++){
  //   array[0] = array[0].concat(array[i]);
  //   console.log('0', array[0]);
  // }
  // console.log(array[0].join(''));
  // return array[0].join('');

  for (var i = 0; i < array.length; i++) {
    for (var k = 0; k < array[i].length; k++) {
      result += array[i][k];
    }
  }
  console.log(result);
  return result;
}
convert("PAYPALISHIRING", 3);

// var arr = [ [ 'P', 'A', 'H', 'N' ],
//   [ 'A', 'P', 'L', 'S', 'I', 'I', 'G' ],
//   [ 'Y', 'I', 'R' ] ];
//   console.log(arr[0].concat(arr[1]))

