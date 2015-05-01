/*

Question 1: write a function that takes 2 arrays of words (words1 = ['dog', 'cat', 'ripe'], words2 = ['god', 'tar', 'pier']. so taht the output says if the words in order of their index are anagrams of each other.  print 0 if no, 1 if yes.

so checkAnagrams(words1, words2) would output

1
0
1


*/

// var allAnagrams = function(string) {
//   // Your code here.
//   /* START SOLUTION */
//   var uniqueOutput = {};
//   var results = [];

//   (function anagram (ana, str) {
//     console.log(ana, str);
//     if (str === '') { uniqueOutput[ana] = 1; results.push(ana) }

//     for (var i = 0; i < str.length; i++) {
//       anagram(ana + str[i], str.slice(0, i) + str.slice(i + 1));
//     }
//   })('', string);
//   console.log(results);
//   return Object.keys(uniqueOutput);
//   /* END SOLUTION */
// };

// console.log(allAnagrams('dog'))

var getAnagrams = function(str, toMatch) {
  var result = 0;

  var anagram = function(ana, str) {
    if(str === '' && ana === toMatch) { //check if current anagram matches
      result = 1;
    }

    for (var i = 0; i < str.length; i++) {
      anagram(ana + str[i], str.slice(0, i) + str.slice(i + 1));
    }
  }

  anagram('', str);
  return result;
}

var checkAnagrams = function(array1, array2) {
  var results = [];

  for (var i = 0; i < array1.length; i++){
    if(!array2[i]) {
      console.log(0);
    } else if(array1[i].length !== array2[i].length) {
      console.log(0);
    } else {
      console.log(getAnagrams(array1[i], array2[i]));
    }
  }

  for (var k = 0; i < array2.length; k++){
    if (!array[k]){
      console.log(0);
    }
  }

};

checkAnagrams(['dog', 'cat', 'ripe'], ['god', 'tar', 'pier']);
