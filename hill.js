function hill(v) {
  var state = { off: null, max: null };
  for (var i=0; i<v.length; i++) {
    if (i === 0) {
      state.off = 0;
      state.max = v[i];
    } else {
      if (v[i] > state.max) {
        state.max = v[i];
      } else {
        var o = state.max - v[i];
        if (o > state.off) {
          state.off = o;
        } else if (o === state.off) {
          state.off = state.off + 1;
        } else {
          // keep same state.off
        }
        state.max = state.max;
      }
    }
  }
  console.log(state.off);
}

var arr = [10,2,20]
hill(arr)

function hill2(v) {
    for (var i = 0; i < v.length; i++) {
        var current = v[0] - i;             //4
        for (var k = 1; k < v.length; k++) {
            current++;                  //5
            if (v[k] >= current) {        // 4 >= 5
                if (v[k] - current > i) {
                    current = v[k] - i;
                }
            } else {
                if (current - v[k] > i) {  //5 - 4 > 0
                 break; 
                } 
            }
        }
        if (k === v.length) {
            console.log(i)
            return i;
        }
    }
};

console.log(hill2(arr));

var hill3 = function(array) {
  var k = 0;
  var last = array[0];

  for (var i = 1; i < array.length; i++){
    if( last >= array[i] + k) {
      var diff = (last - (array[i] + k)) / 2 + 1;
    } else {
      if (last < array[i] - k) {
        last = array[i] - k;
      } else {
        last++;
      }
    }
  }
  console.log(k);
  return k;
}

var hill4 = function(array) {
  var K = 0;
  var last = array[0];

  for (var i = 1; i < array.length; ++i) {
      if (last >= array[i] + K) {
          // If we're here, then our value for K wasn't enough: the minimum
          // possible value of the previous element after transformation is still
          // not less than the maximum possible value of the current element after
          // transformation; so, we need to increase K, allowing us to decrease
          // the former and increase the latter.
          var diff = (last - (array[i] + K)) / 2 + 1;
          K += diff;
          last -= diff;
          ++last;
      } else {
          // If we're here, then our value for K was fine, and we just need to
          // record the minimum possible value of the current value after
          // transformation. (It has to be greater than the minimum possible value
          // of the previous element, and it has to be within the K-bound.)
          if (last < array[i] - K) {
              last = array[i] - K;
          } else {
              ++last;
          }
      }
  }
  console.log(Math.floor(K));
};


var arr2 = [5,4,3,50,8];


var hill5 = function(array) {
  var k = 0; 
  var last = array[0];

  for (var i = 1; i < array.length; i++){
    if( last >= array[i] + k) {
      var diff = last - (array[i] + k) / 3;
      k += diff;
      last -= diff;
      last++;
    } else {
      if( last < array[i] - k) {
        last = array[i] - k;
      } else {
        last++;
      }
    }
  }
  console.log(k);
}

// hill5(arr2);