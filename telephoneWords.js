var hash = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};

var telephoneWords = function(string) {
  if(!string || typeof string !== 'string' || string.length < 1) {
    return null;
  }
  var results = [];

  var recurse = function(word, digits) {
    if(digits.length === 0){ 
      results.push(word);
      return;
    }
    var currLetters = hash[digits[0]];
    var remaining = digits.slice(1);

    for (var i = 0; i < currLetters.length; i++){
      recurse(word + currLetters[i], remaining);
    }
  };

  recurse('', string.split(''));
  return results;
};

var words = telephoneWords('22'); 
console.log(words, words.length);
