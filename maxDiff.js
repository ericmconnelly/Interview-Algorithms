var maxDiff = function(array) {
  if(!array || array.length < 2) {
    return null;
  }
  var max = array[1] - array[0];
  var minEl = array[0];
  for(var i = 0; i < array.length; i++){
    var currDiff = arr[i] - minEl;
    max = Math.max(max, currDiff);
    minEl = Math.min(minEl, arr[i]);
  }
  return max;
}
var arr = [1, 2, 6, 80, 100];
console.log(maxDiff(arr));
