var perc20 = function(string) {
  if (!string) {
    return null;
  }
  var spaces = [];
  string = string.split('');

  for (var i = 0; i < string.length; i++){
    if (string[i] === ' ') {
      spaces.push(i);
    }
  }

  for (var j = spaces.length - 1; j > -1; j--){
    string[spaces[j]] = '%20';
  } 

  return string.join('');
}

console.log(perc20('all spaces are %20'));