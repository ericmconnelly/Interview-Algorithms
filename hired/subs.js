var arr = [ 3, -5, 1, -2, 8, -2, 3, -2, 1]; 
// -5, 1, -2 and the right sequence is: 8, -2, 3.


var sumArray = function(array) {
  /* START SOLUTION */
  var maxSum = Number.NEGATIVE_INFINITY;
  var currentSum = 0;

  for(var i = 0; i < array.length; i ++) {
    currentSum += array[i];

    if(maxSum < currentSum) {
      maxSum = currentSum;
    }

    if(currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
  /* END SOLUTION */
};

console.log(sumArray(arr));


var minArray = function(array) {
  var minSum = Number.POSITIVE_INFINITY;
  var currentSum = 0;

  for(var i = 0; i < array.length; i ++) {
    currentSum += array[i];

    if(minSum > currentSum) {
      minSum = currentSum;
    }

    // if(currentSum < 0) {
    //   currentSum = 0;
    // }
  }
  return minSum;
  /* END SOLUTION */
};

console.log(minArray(arr));