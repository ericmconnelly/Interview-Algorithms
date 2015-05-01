
var arr = [1,2,3,4,5]
var combos = [];

var wat = function(arr, len, start, result) {
  if(len === 0) {
    combos.push(result);
    // console.log(result);
    return;
  }
  for (var i = start; i <= arr.length - len; i++) {
    result[result.length - len] = arr[i];
    wat(arr, len - 1, i + 1, result);
  }
};


// wat(arr, 3, 0, [[]]);
// console.log(combos);


 // static void combinations2(String[] arr, int len, int startPosition, String[] result){
 //        if (len == 0){
 //            System.out.println(Arrays.toString(result));
 //            return;
 //        }       
 //        for (int i = startPosition; i <= arr.length-len; i++){
 //            result[result.length - len] = arr[i];
 //            combinations2(arr, len-1, i+1, result);
 //        }
 //    }       

  // public static void main(String[] args){
  //       String[] arr = {"A","B","C","D","E","F"};
  //       combinations2(arr, 3, 0, new String[3]);
  //   }


var comb = function(string, n, result, start) {
  if(result.length === n) {
    console.log(result);
    return;
  }

  for (var i = start; i < string.length; i++) {
    result+= string[i];
    comb(string, n, result, i + 1);
  }
}

comb('abcd', 2, '', 0);

// var arr = [1,2,3];

// console.log(arr.slice(0,0));
// console.log(arr.slice(1));