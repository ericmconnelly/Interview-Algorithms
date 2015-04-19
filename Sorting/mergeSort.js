// var merge = function (left, right) {
//   var merged = [];
//   var iL = 0, iR = 0;
//   while (merged.length < left.length + right.length) {
//     // Default to the left element for stability
//     if (iR >= right.length || left[iL] <= right[iR])  {
//       merged.push(left[iL]);
//       iL += 1;
//     } else {
//       merged.push(right[iR]);
//       iR += 1;
//     }
//   }
//   return merged;
// }
// /* END SOLUTION */

// var mergeSort = function(array) {
//   // Your code here.
//   /* START SOLUTION */
//   var lists = [];
//   // Split array into sublists
//   // Natural variant: split array into pre-sorted sublists
//   var currentList = [];
//   lists = []
//   for (var i = 0; i < array.length; i++) {
//     if (currentList.length && array[i] < currentList[currentList.length-1]) {
//       lists.push(currentList);
//       currentList = [];
//     }
//     currentList.push(array[i]);
//   }
//   lists.push(currentList);
//   // Until the entire array is sorted
//   while (lists.length > 1) {
//     var newLists = [];
//     // Merge all adjacent lists
//     for (var i = 0; i < Math.floor(lists.length/2); i++) {
//       newLists.push(merge(lists[i*2], lists[i*2+1]))
//     }
//     // Include the leftover list if the number is odd
//     if (lists.length % 2) {
//       newLists.push(lists[lists.length-1]);
//     }
//     lists = newLists;
//   }
//   // we have a single, fully sorted list
//   return lists[0];
//   /* END SOLUTION */
// };


var merge = function(left, right) {
    
    var result = [];
    
    while(left.length && right.length) {
      if(left[0] <= right[0]) {
         result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    
    while(left.length) {
      result.push(left.shift());
    }
    
    while(right.length){ 
      result.push(right.shift());
    }
    
    return result;
};

var mergeSort = function(array) {
  if (array.length < 2 ) {
    return array;
  }
  var mid = Math.floor(array.length / 2);
  var left = array.slice(0, mid);
  var right = array.slice(mid);
  
  return merge(mergeSort(left), mergeSort(right));
};


console.log(mergeSort([-1340, 34950894853,5,5,10,28,9038]));
