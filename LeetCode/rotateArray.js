

var rotate = function(array, k) {
  if (k < 1 || array.length < 2) {
      return array;
  }
  var len = array.length;
  var pivot = len - k - 1;
  var i = 0;
  var pointer = pivot;
  
  while(i < pivot) {
      var temp = array[i];
      array[i] = array[pointer];
      array[pointer] = temp;
      i++;
      pointer++;
  }
  return array;
};
console.log(rotate([1], 0));
console.log(rotate([1,2], 1));
console.log(rotate([1,2,3,4,5,6,7], 3));
console.log(3 % 7);