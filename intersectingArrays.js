// given two arrays of unequal length, find the common values to both arrays;

var intersectingArrays_destructive = function(a, b) { // this is faster 
  var results = [];

  while(a.length > 0 && b.length > 0) {
    if (a[0] < b[0]) {
      a.shift();
    } else if (a[0] > b[0]) {
      b.shift();
    }else { // they are equal
      results.push(a.shift());
      b.shift();
    }
  }
  return results;
};

var arr1 = [1,2,3];
var arr2 = [2,3,4,5];
console.log(intersectingArrays_destructive(arr1, arr2));


var intersectingArrays_safe = function(a, b) { 
  var ai = 0;
  var bi = 0;
  var result = [];
  while (ai < a.length && bi < b.length) {
    if (a[ai] < b[bi]) {
      ai++;
    } else if (a[ai] > b[bi]) {
      bi++;
    } else { //theyre equal
      result.push(a[ai]);
      ai++;
      bi++;
    }
  }
  return result;
};


var intersectingArrays = function(a, b) {
  var result = [];
  var hash = {};

  for (var i = 0; i < a.length; i++){
    hash[a[i]] = true;
  }

  for (var j = 0; j < b.length; j++) {
    if (hash[b[i]]) {
      result.push(b[i]);
    }
  }

  return result;
};

var arr1 = [1,2,3];
var arr2 = [2,3,4,5];
console.log(intersectingArrays_destructive(arr1, arr2));


//all are O(n) but destructive is fastest