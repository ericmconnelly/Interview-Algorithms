var LinkedList = function(){
  //fill me in!
  /* START SOLUTION */
  this.head = null;
  this.tail = null;
  this.size = 0;
  /* END SOLUTION */
};

//write methods here!

LinkedList.prototype.addToTail = function(/*START SOLUTION*/value/*END SOLUTION*/){
  /* START SOLUTION */
  var newTail = this.makeNode(value);
  if ( !this.head ){ this.head = newTail; }
  if ( this.tail ){ this.tail.next = newTail; }
  this.tail = newTail;
  this.size++;
  /* END SOLUTION */
};

LinkedList.prototype.removeHead = function(){
  /* START SOLUTION */
  var currentHead = this.head;
  if (!this.head) {
    return null;
  }
  if (this.head === this.tail) {
    this.head = this.tail = null;
    this.size--;
  } else {
    this.head = this.head.next;
    this.size--;
  }
  return currentHead.value;
  /* END SOLUTION */
};

LinkedList.prototype.contains = function(/*START SOLUTION*/target/*END SOLUTION*/){
  /* START SOLUTION */
  var node = this.head;
  while ( node ){
    if ( node.value === target ){ return true; }
    node = node.next;
  }
  return false;
  /* END SOLUTION */
};

LinkedList.prototype.makeNode = function(/*START SOLUTION*/value/*END SOLUTION*/){
  /* START SOLUTION */
  var node = {};
  node.value = value;
  node.next = null;
  return node;
  /* END SOLUTION */
};


// var list = new LinkedList();
// // list.tail.value;   //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.addToTail(6);
// list.addToTail(6);
// // list.head.value;   //yields '4';
// // list.contains(5);  //yields 'true';
// // list.contains(6);  //yields 'false';
// // list.removeHead(); //yields '4'
// // list.tail.value;   //yields '5';
// removeDupes(list); 
// console.log(list);
module.exports = LinkedList;