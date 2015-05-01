var arr = [];

for (var i = 0; i < 100000; i++) {
  arr.push(Math.ceil(Math.random() * 10000))
}

var dev = function(arr, n) {
  var maxDev = 0;

  for (var i = 0; i <= arr.length - n; i++){
    // console.log(i)
    var currMin = arr[i];
    var currMax = arr[i];
    var curr = i + 1;

    while(curr < i + n) {
      currMin = Math.min(currMin, arr[curr]);
      currMax = Math.max(currMax, arr[curr]);
      var dev = currMax - currMin;
      maxDev = Math.max(maxDev, dev);
      curr++;
    }
  } 
  console.log(maxDev);
  return maxDev;
};

var arr2 = [1,2];
dev(arr, 10000);

// console.log(Math.ceil(Math.random() * 10000));

// var genArray = function(limit) {
//   var array = [];
//   while (array.length < limit) {
//     var randomNum = Math.floor(10000 * Math.random());
//     array.push(randomNum);
//   }
//   return array;
// };

// var getDeviation = function(list) {
//   var max = Math.max.apply(null, list);
//   var min = Math.min.apply(null, list);

//   return max - min;
// };

// var findDeviation = function(arr, d) {
//   var max = getDeviation(arr.slice(0,d));
//   var length = arr.length;
//   var bucket;
//   for (var i = 1; i <= length - d; i++) {
//     var bucket = arr.slice(i, i + d);
//     var bucketDeviation = getDeviation(bucket);
//     if (bucketDeviation > max) {
//       max = bucketDeviation;
//     }
//     bucket = [];
//   }
//   console.log(max);
// };

// findDeviation(genArray(100000), 2);

// findDeviation([1,2,3,1, 17, 30], 3);

