/*

Given a string S, find the longest palindromic substring in S. You may assume that the maximum length of S is 1000, and there exists one unique longest palindromic substring.

1. set two pointers at 0, longest & longestIndex;
2. for loop through string once
3. longestIndex is the pointer that stays at the beginning of the current pallindrome
4. longest moves down the string 
5. if current sub string is a palindrome && 

GO BACK AND LEARN THIS ON WHITEBOARD

*/

var isPalindrome = function(string, startIndex, endIndex) {
  var k = endIndex;
  for (var i = startIndex; i <= k; i++) {
    if(string[i] !== string[k]) {
      return false
    }
    k--;
  }
  return true;
};

var longestSubPalindrome = function(string) {
  var len = string.length;
  var longest = 0;
  var longestIndex = 0;

  for (var i = 0; i < len; i++) {
    if (isPalindrome(string, i - longest, i)) {
      longest++;
      longestIndex = i;
    } else if (i - longest - 1 >= 0 && isPalindrome(string, i - longest -1, i)) {
      longest += 2;
      longestIndex = i;
    }

  }
  longestIndex++;
  return string.substring(longestIndex - longest, longestIndex);
}
