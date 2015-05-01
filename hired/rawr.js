function check_anagrams(first_words, second_words) {
    // To print results to the standard output please use console.log()
    // Example: console.log("Hello world!");
    
    for(var i = 0; i < first_words.length; i++) {
        if(!second_words[i]) {
            console.log(0);
        } else if( first_words[i].length !== arr2[i].length){
            console.log(0);
        } else {
            console.log(getAnagrams(first_words[i], second_words[i]))
        }
    }
    
    for (var k = 0; i < array2.length; k++){
        if (!array[k]){
            console.log(0);
        }
    }
}

var getAnagrams = function(str, toMatch) {
    var result = 0;
    var anagram = function(ana, str) {
        if(str === '' && ana == toMatch) {
            result = 1;
        }
        for (var i = 0; i < str.length; i++){
            anagram(ana + str[i], str.slice(0, i) + str.slice(i + 1));
        }
    }
    anagram('', str);
    return result;
}

check_anagrams([“cinema”, “host”, “aba”, “train”], “iceman”, “shot”, “bab”, “rain”);