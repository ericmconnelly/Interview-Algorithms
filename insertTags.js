var insertTag = function(string, marker) {
    if (string === "" || typeof string !== "string") {
        return alert('Not a string');
        }

    string = string.split('');

    if (marker.length < 1) {
        return  string;
        }

    if (marker[0][0] < 0 || marker[marker.length - 1][1] > string.length - 1 ) {
        return alert('Markers not in range');
        }

    for (var i = 0; i < marker.length - 1; i++){
        if (marker[i][1] > marker[i + 1][0]) {
          return alert('Overlapping markers');
        }
    }

    for (var i = marker.length - 1; i >= 0; i--){
      string.splice(marker[i][1], 0, '</span>');
      string.splice(marker[i][0], 0, '<span>');
    }

    return string.join('');
};

var string1 = 'hello world, this is my first cut';
var markers = [[2,4], [4, 6]];
console.log(insertTag(string1, markers));
