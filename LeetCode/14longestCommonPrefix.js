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

var alt = function(strings) {
  if (strings.length == 0) {
        return "";   // Or maybe return null?
    }
    for (var prefixLen = 0; prefixLen < strings[0].length; prefixLen++) {
        var c = strings[0].charAt(prefixLen);
        for (var i = 1; i < strings.length; i++) {
            if ( prefixLen >= strings[i].length ||
                 strings[i].charAt(prefixLen) != c ) {
                // Mismatch found
                return strings[i].substring(0, prefixLen);
            }
        }
    }
    return strings[0];
};

var longest = function(strs) {
  if(strs.length === 0) {
    return '';
  }
  var prefix = strs[0];
  console.log(prefix);
  for(var i = 1; i < strs.length; i++){
    for(var j = 0; j < prefix.length && j < strs[i].length; j++) {
      if(prefix.charAt(j) !== strs[i].charAt(j)) {
        break;
      }
    }
    prefix = prefix.substring(0,j);
    console.log(prefix)
  }
  return prefix;
}


var strings = ['foo', 'foog', 'food', 'asdf'];
console.log(longest(strings))

