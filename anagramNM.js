var anagramNM = function(n, m) {
  var arr = []
  for(var i = 0; i < n; i++){
    arr.push(i);
  }


  var recurse = function(word, remaining) {
    if(word.length === m){ 
      console.log('word' ,word);
      return;
    }
    console.log(word);
    for(var i = 0; i < remaining.length; i++){
      recurse(word.push(remaining[i]),  remaining.slice(i + 1));
    }
  };
  var result = [];
  recurse(result, arr);
};

anagramNM(4, 2);