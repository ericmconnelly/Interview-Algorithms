var Graph = function(){
  this.storage = {};

};

Graph.prototype.addNode = function(node){
  var stringified = JSON.stringify(node);
  this.storage[stringified] = [];
};

Graph.prototype.contains = function(node){
  var stringified = JSON.stringify(node);
  if (this.storage[stringified]) {
    return true;
  } 
  return false;
};

Graph.prototype.removeNode = function(node){
  var stringified = JSON.stringify(node);
  delete this.storage[stringified];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var stringifiedFrom = JSON.stringify(fromNode);
  var stringifiedTo = JSON.stringify(toNode);
  if (this.storage[stringifiedFrom].indexOf(stringifiedTo) !== -1){
    return true;
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var stringifiedFrom = JSON.stringify(fromNode);
  var stringifiedTo = JSON.stringify(toNode);
  this.storage[stringifiedTo].push(stringifiedFrom);
  this.storage[stringifiedFrom].push(stringifiedTo);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var stringifiedFrom = JSON.stringify(fromNode);
  var stringifiedTo = JSON.stringify(toNode);

};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



var graph = new Graph();
graph.addNode({val :10})
console.log(graph);

