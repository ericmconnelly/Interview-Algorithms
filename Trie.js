var Trie = function() {
    this.head = {};
};
 
Trie.prototype.validate = function(word) { 
    if((word === undefined) || (word === null)) throw "The given word is invalid.";
    if (typeof word !== "string") throw "The given word is not a string";
}
 
Trie.prototype.add = function(word) {
    this.validate(word);
 
    var current = this.head;

    for (var i = 0; i < word.length; i++) { 
        if(!(word[i] in current)) {
            current[word[i]] = {};
        }
 
        current = current[word[i]]
    };
 
    current.$ = 1;  //word end marker
};

Trie.prototype.hasWord = function(word) {
    this.validate(word);
    var current = this.head;

    for (var i = 0; i < word.length; i++){
        if (!(word[i] in current)){
            return false;
        }
        current = current[word[i]];
    }
    return current.$ === 1;
};

Trie.prototype.delete = function(word) {
    this.validate(word);

    var noKids = function(node) { //checks node if it has children(keys)
      return Object.keys(node).length === 0;
    };

    var canDelete = function(word, index, node) {
      if (!word) { throw "Error, input"; }
      if (index >= word.length) { throw "Err"; }
      if (!node) { throw "Error, no node"; }

      if (index === word.length - 1) {
        return (delete node.$) && noKids(node);
      } else {
        if (canDelete(word, index + 1, node[word[index + 1]])) {
          return (delete node[word[index + 1]]) && noKids(node);
        }
      }
      return false;
    }

    canDelete(word, -1, this.head);
};

Trie.prototype.sort = function(startNode) {
  var word = '';
  var sorted = [];

  if (!startNode) {
    startNode = this.head;
  }

  console.log('startNode: ', startNode);

  var sortTrie = function(node, word, sorted) {
    for (var letter in node) {
      if (letter === '$') {
        sorted.push(word);
      }else {
        sortTrie(node[letter], word + letter, sorted);
      }
    }
  };

  sortTrie(startNode, word, sorted);
  console.log(sorted);
  return sorted;
}

module.exports = Trie;


var trie = new Trie();
trie.add('poop');
trie.add('pool');
trie.add('prototype');
// console.log(trie.delete('poop'));
console.log(trie.head);
console.log(trie.hasWord('poop'))
console.log(trie.hasWord('pool'))
trie.sort(trie.head.p);
