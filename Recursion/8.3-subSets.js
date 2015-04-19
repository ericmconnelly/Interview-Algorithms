/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

function powerSet(input) {
 var hash = {};
 input = input.split('');

 var recurse = function(subStr) {
  // console.log('subStr: ', subStr);
  var joined = subStr.join('');
  if(hash[joined]) {
    return;
  }
  hash[joined] = true;
  // console.log('pushed')
  if (subStr.length === 1) {
    return;
  }

  for (var i = 0; i < subStr.length; i++){
    // console.log(i, subStr.slice(0, i), subStr.slice(i + 1));
    var subSet = subStr.slice(0, i).concat(subStr.slice(i + 1));
    recurse(subSet);
  }
 };
 recurse(input);
 return Object.keys(hash);
}

// console.log(powerSet('abc'));

// console.log(['a','b','c','d','a'].sort());

var iterativePS = function(arr) {
  arr = arr.split('');
  var result = [[]];
  for (var i = 0; i < arr.length; i++){
    for (var j = 0, len = result.length; j < len; j++) {
      // console.log(result);
      // console.log('log: ', result[j].concat(arr[i]));
      result.push(result[j].concat(arr[i]));
    }
  } 
  return result;
}
console.log(iterativePS('abc'));

