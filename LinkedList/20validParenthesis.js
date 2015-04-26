/* 

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

*/

var isValid = function(string) {
  var hash = {
    '{' : '}',
    '[' : ']',
    '(' : ')'
  };

  var stack = [];

  for (var i = 0 ; i < string.length; i++){
    if (hash[string[i]] ) {
      stack.push(string[i]);
    } else if (string[i] === '}' || string[i] === ']' || string[i] === ')') {
      if(hash[stack.pop()] !== string[i]) {
        return false;
      } 
    }
  }

  return stack.length === 0;

}