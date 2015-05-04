var powerSet = function(string) {
  if(!string || string === '') { 
    return ''
  }
  var unique = {};
  for (var i = 0; i < string.length; i++){
    unique[string[i]] = 1;
  }
  var str = Object.keys(unique).sort().join('');
  // console.log(str);
  var sets = {};
  var result = [];

  var recurse = function(subSet) {
    // console.log(subSet);
    if(sets[subSet]) {
      return;
    }

    sets[subSet] = 1;
    result.push(subSet);

    if(subSet.length === 1) {
      return;
    }

    for(var i = 0; i < subSet.length; i++) {
      recurse(subSet.slice(0, i) + subSet.slice(i + 1));
    }
  };

  recurse(str);
  // return Object.keys(sets);
  return result;
}

console.log(powerSet('abcc'));