/*
    fibonacci(7)
          ____|_____
         |          |
    fibonacci(5)  fibonacci(6)
    ____|____     ____|_____
    |        |    |         |
    fib(3)  fib(4) fib(4)   fib(5)

*/
var fibRecursive = function(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else if (n > 1) {
    return fibRecursive(n - 1) + fibRecursive(n - 2);
  } else {
    return -1;
  }
};

console.log(fibRecursive(10));


var fibIterative = function(n) {
  if (n < 0) {
    return -1;
  }
  if (n === 0) {
    return 0;
  }

  var a = 1;
  var b = 1;

  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }

  return b;
}

console.log(fibIterative(10));

console.log([1,2,3,4,5].slice(1))