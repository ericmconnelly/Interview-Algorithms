var nthNode = function(list, n) {
  if (list.head === null || n < 1) {
    return null;
  }
  var node = list.head;
  var i = 1;
  var nthNode;

  while(node) {
    if ( i === n ) {
      nthNode = list.head;
    } else if (i - n > 0) {
      nthNode = nthNode.next;
    }
    i++;
    node = node.next;
  }
  return nthNode;
}


var list = { head: { value: 4, next: { value: 5, next: {value: 6, next: null} } },
  tail: { value: 6, next: null } };

  console.log(list);

  console.log(nthNode(list, 2));

var fromEnd = function(list, n) {
  if (list.head === null || n < 1) {
    return null;
  };

  var mainPointer = list.head;
  var refPointer = list.head;
  var counter = 0;

  while(counter < n){ 
    if (refPointer === null){ 
      console.log('what');
      return;
    }

    refPointer = refPointer.next;
    counter++;
  }
  // console.log('counter: ', counter);
  while(refPointer !== null) {
    mainPointer = mainPointer.next;
    refPointer = refPointer.next;
  }
  console.log('result: ', mainPointer.value);
}

fromEnd(list, 1);

var alt = function(list, n) { //get the length of the list

  var length = 0;
  var node = list.head;

  while(node !== null) {      // get the length
    node = node.next;
    length++; 
  }

  if (length < n) {     //make sure n is within range
    return null;
  }

  node = list.head;       //reset backto head

  for (var i = 0; i < length - n ; i++) {     //loop until n is hit
    node = node.next;
  }

  console.log(node.value);        //log the current node's value
}

alt(list, 1);