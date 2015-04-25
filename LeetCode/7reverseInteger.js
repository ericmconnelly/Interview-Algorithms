/*

Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

*/
var reverse = function(num) {
    if(typeof num !== 'number') {
        return;
    }
    var isNeg = false;
    if(num < 0) {
        isNeg = true;
        num = num * -1;
    }
    var result = num.toString().split('').reverse().join('');
    
    if(isNeg) {
        return parseInt(result * -1);
    } else {
        return parseInt(result);
    }
};

console.log(reverse(1534236469));