
// find a contigous subarray with the highest product, at least one element
//keep track of smallest product because it could become the largest when multiplied by a another negative number

var maxProduct = function(arr) {
  var max = arr[0];
  var inMax = max;
  var inMin = max;
  for (var i = 1; i < arr.length; i++){
    if (arr[i] < 0) {
      var temp = inMax;
      inMax = inMin;
      inMin = temp;
    }
    inMax = Math.max(arr[i], inMax * arr[i]);
    inMin = Math.min(arr[i], inMin * arr[i]);
    max = Math.max(max, inMax);
  }
  return max;
  //O(1) space, O(n) time
}

var maxArr = [2,-5,-2,-4,3];
console.log(maxProduct(maxArr));