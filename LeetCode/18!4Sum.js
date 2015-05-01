/*

Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.


*/


var fourSum = function(arr, target) {
  if(!arr || arr.length < 4) {return []};
  arr = arr.sort(function(a,b) {return a + b;});
  var results = [];
  for (var i = 0; i < arr.length; i++){
    var target3 = target - arr[i];

    for (var j = i + 1; j < arr.length; j++){
      var target2 = target3 - arr[j];
      var left = j + 1;
      var right = arr.length - 1;

      while(left < right) {
        var sum = arr[left] + arr[right];

        if(sum < target2) {
          left++;
        } else if (sum > target2) {
          right--;
        } else {
          var bucket = [];
          bucket[0] = arr[i];
          bucket[1] = arr[j];
          bucket[2] = arr[left];
          bucket[3] = arr[right];
          while(left < right && arr[left] === bucket[2]) {
            left++;
          }
          while(left < right && arr[right] === bucket[3]) {
            right--;
          }
        }
      }
      while(j + 1 < arr.length && arr[j+1] === arr[j]) {
        j++;
      }
    }
    while(i + 1 < arr.length && arr[i + 1] === arr[i]) {
      i++;
    }
  }
  return results;
};

console.log(fourSum([0,0,0,0], 0));