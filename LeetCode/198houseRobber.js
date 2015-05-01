/* You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

[2, 1, 1, 2] = 4;

*/

var robber = function(array) {
  var a = 0;
  var b = 0;
  for (var i = 0; i < array.length; i++){
    if (i % 2 === 0) {
      a = Math.max(a + array[i], b);
    } else {
      b = Math.max(a, b + array[i]);
    }
  }
  return Math.max(a, b);
};

console.log(robber([2,1,1,2]))

console.log(0 % 2)