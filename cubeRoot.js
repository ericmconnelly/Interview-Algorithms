var cubeRoot = function(num, low, high, mid){ 
  if(!low) {
    low = 1;
  }
  if(!high) {
    high = num;
  }
  if(!mid) {
    mid = (low + high) / 2;
  }

  var curr = mid * mid * mid;

  if(curr === num){
    return mid;
  }

  if(curr > num) {
    return cubeRoot(num, low, mid - 1);
  } 

  if(curr < num) {
    return cubeRoot(num, mid + 1, high);
  }

};

console.log(cubeRoot(10));