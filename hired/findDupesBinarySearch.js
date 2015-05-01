/*
We have an array of integers, where:

The integers are in the range 1..n1..n
The array has a length of n+1n+1
It follows that our array has at least one integer which appears at least twice. But it may have several duplicates, and each duplicate may appear more than twice.

We can do this in O(1)O(1) space.

We can do this in less than O(n^2)O(n2) time, while keeping O(1)O(1) space.

We can do this in O(n\lg{n})O(nlgn) time and O(1)O(1) space.

We can do this without destroying the input.

Our approach is similar to a binary search, except we divide the range of possible answers in half at each step, rather than dividing the array in half.

Find the number of integers in our input array which lie within the range 1..\frac{n}{2}1..
​2
​
​n
​​ .
Compare that to the number of possible unique integers in the same range.
If the number of actual integers is greater than the number of possible integers, we know there’s a duplicate in the range 1..\frac{n}{2}1..
​2
​
​n
​​ , so we iteratively use the same approach on that range.
If the number of actual integers is not greater than the number of possible integers, we know there must be duplicate in the range \frac{n}{2} + 1..n
​2
​
​n
​​ +1..n, so we iteratively use the same approach on that range.
At some point our range will contain just 1 integer, which will be our answer.
*/

var findDupe = function(array) {
  var floor = 0;
  var ceiling = array.length - 1;

  while(floor < ceiling) {
    var mid = floor + ((ceiling - floor) / 2);
    var lowerRangeFloor = floor; 
    var lowerRangeCeil = mid;
    var upperRangeFloor = mid + 1;
    var upperRangeCeil = ceiling;
    var lowerRangeCount = 0;

  }

}
var timeout = function(a) {
  setTimeout(function() {
    console.log(a);}
    , 5000);
};
for (var i = 0; i < 100; i++) {
  timeout('hi');
}
