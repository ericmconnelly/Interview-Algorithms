/*

Given a set of time intervals in any order, merge all overlapping intervals into one and output the result which should have only mutually exclusive intervals. Let the intervals be represented as pairs of integers for simplicity. 
For example, let the given set of intervals be {{1,3}, {2,4}, {5,7}, {6,8} }. The intervals {1,3} and {2,4} overlap with each other, so they should be merged and become {1, 4}. Similarly {5, 7} and {6, 8} should be merged and become {5, 8}

Write a function which produces the set of merged intervals for the given set of intervals.

An efficient approach is to first sort the intervals according to starting time. Once we have the sorted intervals, we can combine all intervals in a linear traversal. The idea is, in sorted array of intervals, if interval[i] doesn’t overlap with interval[i-1], then interval[i+1] cannot overlap with interval[i-1] because starting time of interval[i+1] must be greater than or equal to interval[i]. Following is the detailed step by step algorithm.

1. Sort the intervals based on increasing order of starting time.
2. Push the first interval on to a stack.
3. For each interval do the following
……..a. If the current interval does not overlap with the stack top, push it.
……..b. If the current interval overlaps with stack top and ending time of current interval is more than that of stack top, update stack top with the ending time of current interval.
4. At the end stack contains the merged intervals.
*/
var array = [
[1, 3],[2, 4] ,[5, 7] ,[6, 8]
];

var r = array.sort(function(a, b) {
  var valueA = a[0];
  var valueB = b[0];
  if( valueA < valueB) {
    return -1;
  }else if (valueA > valueB) {
    return 1;
  }
  return 0;
});

  //check two intervals to see if a's start time is before b
var compareInterval = function(a, b) {
  return a[0] < b[0];
}

var mergeIntervals = function(array) {
  if(array.length === 0) {
    return;
  }

  var stack = []
      //sort intervals
  intervals = array.sort(function(a, b) {
      var valueA = a[0];
      var valueB = b[0];
      if( valueA < valueB) {
        return -1;
      }else if (valueA > valueB) {
        return 1;
      }
      return 0;
  });
  //[ [ 1, 3 ], [ 2, 4 ], [ 5, 7 ], [ 6, 8 ] ]
  console.log(intervals);
    //push first interval into stack
  stack.push(intervals[0]);
    //start at next interval and merge if neccessary
  for(var i = 1; i < intervals.length; i++){
      //get interval from top of stack
    var top = stack[stack.length - 1]

    console.log('top: ', top, 'end: ', top[1]);

      //if top.end < curr.start, push curr into the stack
    if(top[1] < intervals[i][0]) {
      console.log(top[1], intervals[i][0])
      stack.push(intervals[i]);
    } else if(top[1] < intervals[i][1]) {
      top[1] = intervals[i][1];
      stack.pop();
      stack.push(top);
    }
  }
  console.log(stack);
}


console.log(mergeIntervals(array));

// Time complexity of the method is O(nLogn) which is for sorting. Once the array of intervals is sorted, merging takes linear time.