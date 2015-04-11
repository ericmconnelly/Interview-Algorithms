

var isPalindrome = function(str) {
  if (!str) {
    return true;
  }

  var str = str.replace(/[^a-zA-Z0-9 ]/g, "");

  var head = 0;
  var tail = str.length - 1;

  while(head !== tail) {

    if (str.charAt(head) !== str.charAt(tail)) {
      return false;
    }
    head++;
    tail--;
  }
  return true;
} ;


console.log(isPalindrome('taco cat'));
var name = 'peter Rocks!';
name.replace(/[^a-zA-Z0-9 ]/g, "");
console.log(name);