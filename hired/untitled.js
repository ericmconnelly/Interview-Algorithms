var allAnagrams = function(string) {
  var unique = {};
  var recurse = function(ana, str) {
    if(str === '') {
      unique[ana] = 1;
    }
    for (var i = 0; i < str.length; i++){
      recurse(ana + str[i], str.slice(0, i) + str.slice(i + 1))
    }
  }
  recurse('', string);
  return Object.keys(unique);
};

// console.log(allAnagrams('abc'));

var threeSum = function(arr, target) {
  if (arr.length < 3 || !arr || typeof target !== 'number') {
    return arr;
  }

  arr = arr.sort(function(a,b) {return a - b;});

  for (var i = 0; i < arr.length - 3; i++){
    var left = i + 1;
    var right = arr.length - 1;
    var diff = target - arr[i];
    while(left < right) {
      var sum = arr[left] + arr[right];
      if(diff === sum) {
        return true;
      } else if (diff > sum) {
        left++;
      } else {
        right--;
      }
    }
  }
  return false;
}

// var arr = [1,2,7,10,40,30,50, -5, -10];
// console.log(threeSum(arr, 49));
// var result = [];

// var printCombos = function(arr, size) {
//   var n = arr.size;
//   var data = [];
//   combos(arr, n, size, 0, data, 0)

//   var combos = function(arr, n, size, start, data) {
//     if (index === r) {
//       for (var j = 0; j < r; j++) {
//         console.log(data[j]);
//       }
//       return;
//     }
//     for (var i = start; i <= end && end - i + 1 >= r - index; i++) {
//       data[index] = arr[i];
//       combos(arr, data, i + 1, end, index + 1, r);
//     }
//   };
  
// }
// var arr2 = [1,2,3,4,5];
// printCombos(arr, 2);
var arr = [];

for (var i = 0; i < 100; i++) {
  arr.push(Math.ceil(Math.random() * 1000))
}
// console.log(arr);

var dev = function(arr, n) {
  var maxDev = 0;

  for (var i = 0; i <= arr.length - n; i++){
    var currMin = arr[i];
    var currMax = arr[i];
    var curr = i + 1;

    while(curr < n) {
      currMin = Math.min(currMin, arr[curr]);
      currMax = Math.max(currMax, arr[curr]);
      var dev = currMax - currMin;
      maxDev = Math.max(maxDev, dev);
    }
  } 
  console.log(maxDev);
  return maxDev;
};
// console.log(dev(arr, 2));
// console.log(Math.ceil(Math.random() * 1000));

var arr2 = [1,2,3,4,5];
dev(arr2, 2);