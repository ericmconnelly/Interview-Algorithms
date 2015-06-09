/*
Problem 1

Write three functions that compute the sum of the numbers in a given list using a for-loop, a while-loop, and recursion.

Problem 2

Write a function that combines two lists by alternatingly taking elements. For example: given the two lists [a, b, c] and [1, 2, 3], the function should return [a, 1, b, 2, c, 3].

Problem 3

Write a function that computes the list of the first 100 Fibonacci numbers. By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two. As an example, here are the first 10 Fibonnaci numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, and 34.

Problem 4

Write a function that given a list of non negative integers, arranges them such that they form the largest possible number. For example, given [50, 2, 1, 9], the largest formed number is 95021.

Update: Apparently this problem got a lot of people talking (although not as much as Problem 5 below.) You can click here to read my solution.

Problem 5

Write a program that outputs all possibilities to put + or - or nothing between the numbers 1, 2, ..., 9 (in this order) such that the result is always 100. For example: 1 + 2 + 34 – 5 + 67 – 8 + 9 = 100.
*/

var arr = [1,2,3,4,5,6,7];

var problem1 = function(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  console.log(sum);
  return sum;
};

problem1(arr);

var problem1b = function(arr){
  var sum = 0;
  var i = 0;
  while(i < arr.length) {
    sum+= arr[i]
    i++;
  }  
  console.log(sum);
  return sum;
};

problem1b(arr);

var problem1recurse = function(arr, index) {
  if(!index) {
    index = 0;
  }
  if(index){
    return arr[index]
  }
};

var a = [1,2,3];
var b = ['a', 'b', 'c'];

var mergeTwoLists = function(arr1, arr2) {
  var i = 0;
  var m = 0;
  var result = [];

  while(i < arr1.length || m < arr2.length) {
    result.push(arr1[i]);
    i++;
    result.push(arr2[m]);
    m++;
  }
  console.log(result);
};

mergeTwoLists(a, b);

var first100Fib = function(){
  var result = [1, 2];

  for(var i = 2; i < 101; i++){ 
    result[i] = result[i-1] + result[i-2];
  }
  console.log(result);
}

// first100Fib();

