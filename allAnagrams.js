var allAnagrams = function(string) {
  var unique = {};

  var recurse = function(word, str) {
    if(str === '') {
      unique[word] = 1;
      return;
    }
    for (var i = 0; i < str.length; i++){
      recurse(word + str[i], str.slice(0, i) + str.slice(i + 1));
    }
  };

  recurse('', string);
  return Object.keys(unique);
};

console.log(allAnagrams('abca'));