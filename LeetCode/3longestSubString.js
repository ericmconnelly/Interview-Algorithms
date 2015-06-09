/*
Given a string, find the length of the longest substring without repeating characters. For example, the longest substring without repeating letters for "abcabcbb" is "abc", which the length is 3. For "bbbbb" the longest substring is "b", with the length of 1.

*/

var lengthOfLongestSubstring = function(s) {
    if (!s || typeof s !== 'string' || s.length === 0) {
        return 0;
    }
    var max = 0;
    var hash = {};
    
    for (var i = 0; i < s.length; i++){
      var j = 0;
      if(hash[s[i]]) {
        j = Math.max(j, hash[s[i]] + 1);
      }

      hash[s[i]] = i + 1;
      max = Math.max(max, i - j + 1);
    }
    return max;
};

console.log(lengthOfLongestSubstring('aa'));
console.log(lengthOfLongestSubstring('dvdf'));
//bug in code becuase if hash[s[i]] = 0 eg aab, the calculations are wrong becuase it will not go into the if statement

