var pathSum = function(root, target) {
  if(!root || !target) {
    return false;
  }
  var stack = [root];
  var vals = [root.value];

  while(stack.length) {
    var curr = stack.pop();
    var currVal = vals.pop();

    if(currVal === target && !curr.right && !curr.left) {
      return true;
    }

    if(curr.right) {
      stack.push(curr.right);
      vals.push(curr.right.value + currVal);
    }

    if(curr.left) {
      stack.push(curr.left);
      vals.push(curr.left.value + currVal);
    }
  }
  return false;
}



// var pathSum = function(root, target) {
//     var results = [];
//     if(!root) {return results;}
//     var stack = [];
//     var curr = root;
//     var prev = null;
//     var set = [];
//     var sum = 0;
    
//     while(stack.length || curr) {
//         if(!curr) {
//             var node = stack.length - 1;
//             if(node.right && prev !== node.right) {
//                 curr = node.right;
//             } else {
//                 prev = node;
//                 stack.pop();
//                 set.pop();
//                 sum -= node.val;
//             }
//         }else {
//             stack.push(curr);
//             set.push(curr.val);
//             sum += curr.val;
//             if(!curr.left && !curr.right && sum === target) {
//                 var found = [];
//                 for (var i = 0; i < set.length; i++){
//                     found.push(set[i]);
//                 }
//                 results.push(found);
//             }
//             curr = curr.left;
//         }
//     }
//     return results;
// };

// var pSum = function(root, sum) {
//     if(!root || !sum) {
//         return ;
//     }
//     var currVal = sum - root.val;
//     if(!root.left && !root.right) {
//         if(currVal === 0) {
//             return true;
//         }
//         return false;
//     }

//     var result = false;

//     if(root.left) {
//         result = pSum(root.left, currVal);
//     }
//     if(root.right){ 
//         result = pSum(root.right, currVal);
//     }
//     return result;
// }

var paths = function(root, target) {
    var results = [];
    if(!root || !target) { return results;}
    var stack = [];
    var sumStack = [];
    var history = [];
    var temp = 0;
    stack.push(root);
    sumStack.push(0);
    while(stack.length){
        var curr = stack.pop();

        while(history.length) {
            var pre = history.length - 1;
            if(pre.left === curr || pre.right === curr) {
                break;
            }
            history.pop();
        }
        temp = sumStack.pop();
        temp += curr.value;
        if(temp === target && !curr.right && !curr.left) {
            var found = [];
            for (var i = 0; i < history.length; i++) {
                result.push(history[i].value);
            }
            found.push(curr.val);
            results.push(found);

        }
        history.push(curr);
        if(curr.right) {
            stack.push(curr.right);
            sumStack.push(temp);
        }
        if(curr.left) {
            stack.push(curr.left);
            sumStack.push(temp);
        }
    }
    return results;
}   