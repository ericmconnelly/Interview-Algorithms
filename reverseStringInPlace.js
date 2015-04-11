var reverseStr = function(string) {

  if (!string || string.length < 2) {
    return string;
  }

  var left = 0;
  var right = string.length - 1;

  while (left < right) {
    var temp = string[left];
    // string[left] = string[right];
    // string[right] = temp;
    string[left] = 'c';
    left++;
    right--;
  }

  return string;
};

// console.log(reverseStr('hitheresally'));


var reverse = function(string) {
  if (!string || string < 2) {
    return string;
  }
  var str = string.slice();
  for (var i = 0; i < str.length; i++){
    var temp = str[i];
    console.log(str[str.length -  1 -i])
    str[i] = str[str.length - 1];
    str[str.length - 1] = temp;
  }
  return str;
}

console.log(reverse('hithere')); 

var string = 'hi there';

console.log(string.split(' '));