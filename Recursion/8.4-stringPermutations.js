


var stringPermutations = function(input) {
  input = input.split('');
  var results = [];

  var recurse = function(arr, memo) {
    var current;
    memo = memo || [];

    for (var i = 0; i < arr.length; i++){
      current = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(current));
      }
        recurse(arr.slice(), memo.concat(current))
        arr.splice(1, 0, current[0]);
    }
  };

  recurse(input);
  return results;
};

// console.log(stringPermutations('cat'));

var permutations2 = function (arr) {
    arr = arr.split('');
    var finalArr = [];
    var iterator = function (arrayTaken, tree) {
        for (var i = 0; i < tree; i++) {
            var temp = arrayTaken.slice();
            console.log(i, temp);
            temp.splice(tree - 1 - i, 0, temp.splice(tree - 1, 1)[0]);
            if (tree >= arr.length) {
                finalArr.push(temp);
            } else { iterator(temp, tree + 1); }
        }
    }
    iterator(arr, 1); 
    return finalArr;
};

// permutations2('cat');

function combinations(str) {
  var result = [];
    var fn = function(active, rest) {
        if (!active && !rest)
            return;
        if (!rest) {
            result.push(active);
        } else {
            fn(active + rest[0], rest.slice(1));
            fn(active, rest.slice(1));
        }
        return a;
    }
    return fn("", str);
}

