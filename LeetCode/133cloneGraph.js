/*
Clone an undirected graph. Each node in the graph contains a label and a list of its neighbors.


OJ's undirected graph serialization:
Nodes are labeled uniquely.

We use # as a separator for each node, and , as a separator for node label and each neighbor of the node.
As an example, consider the serialized graph {0,1,2#1,2#2,2}.

The graph has a total of three nodes, and therefore contains three parts as separated by #.

First node is labeled as 0. Connect node 0 to both nodes 1 and 2.
Second node is labeled as 1. Connect node 1 to node 2.
Third node is labeled as 2. Connect node 2 to node 2 (itself), thus forming a self-cycle.
Visually, the graph looks like the following:

       1
      / \
     /   \
    0 --- 2
         / \
         \_/
*/

var Graph = function(val) {
  this.storage = {};
  this.nodeSize = 0;
  this.edgeSize = 0;
};

Graph.prototype.addNode = function(id) {
  if(!this.storage[id]) {
    this.nodeSize++;
    this.storage[id] = {
      outEdges: {},
      inEdges: {}
    }
  }
};

Graph.prototype.addEdge = function(fromId, toId, weight) {
  var fromNode; 
  var toNode;
  var edge;

  if(this.getEdge(fromId, toId)) {
    return;
  }

  fromNode = this.storage[fromId];
  toNode = this.storage[toId];

  if(!fromNode || !toNode) {
    return;
  }

  edge = {weight: weight || 1} ;

  fromNode.outEdges[toId] = edge;
  toNode.inEdges[toId] = edge;

  this.edgeSize++;

  return edge;
};

Graph.prototype.getEdge = function(fromId, toId) {
  var fromNode = this.storage[fromId];
  var toNode = this.storage[toId];

  if(fromNode && toNode) {
    return fromNode.outEdges[toId];
  }
};

Graph.prototype.forEachNode =function(callback) {
  var node;
  var nodeId;
  var allNodes = this.storage;

  for(nodeId in allNodes) {
    if (allNodes.hasOwnProperty(nodeId)) {
      callback(allNodes[nodeId], nodeId);
    }
  }
};

Graph.prototype.forEachEdge = function(callback) {
  var edge;
  var node;
  var nodeId;
  var toId;
  var outEdges;
  var allNodes = this.storage;

  for(nodeId in allNodes) {
    if(!allNodes.hasOwnProperty(nodeId)) {
      continue;
    }
    node = allNodes[nodeId];
    outEdges = node.outEdges;

    for(toId in outEdges) {
      if(!outEdges.hasOwnProperty(toId)) {
        continue;
      }
      callback(outEdges[toId]);
    }
  }

}

var obj = {1: 'a'};

var all = obj;

