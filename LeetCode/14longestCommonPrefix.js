/* 
Write a function to find the longest common prefix string amongst an array of strings.

"Vertical matching (over characters)". Compare the characters between all strings from left to right. Stop whenever a mismatch is found.
*/

var longestCommonPrefix = function(arr) {
    if(!arr || arr.length === 0) {
        return '';
    }
   for (var i = 0; i < arr[0].length; i++) {
       var currChar = arr[0][i];
       for (var k = 1; k < arr.length; k++) {
           if (i === arr[k].length || arr[k][i] !== currChar) {
               return arr[0].substring(0,i);
           }
       }
   }
   return arr[0];
};

/*O(nk ^ 2) solution

"Horizontal matching (over strings)". Pick up the first string and compare it with the rest. Return the minimum prefix found among all comparisons.
*/

var longest = function(arr) {
  if (!arr || arr.length === 0) {
    return "";
  }

  var pre = arr[0];
  var i = 1;

  while( i < arr.length) {
    while(arr[i].indexOf(pre) !== 0) {
      pre = pre.substring(0, pre.lenght - 1);
    }
    i++;
  }
  return pre;
}