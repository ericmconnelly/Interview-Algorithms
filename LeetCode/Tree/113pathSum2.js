var pathSum = function(root, target) {
    var results = [];
    if(!root) {return results;}
    var stack = [];
    var curr = root;
    var prev = null;
    var set = [];
    var sum = 0;
    
    while(stack.length || curr) {
        if(!curr) {
            var node = stack.length - 1;
            if(node.right && prev !== node.right) {
                curr = node.right;
            } else {
                prev = node;
                stack.pop();
                set.pop();
                sum -= node.val;
            }
        }else {
            stack.push(curr);
            set.push(curr.val);
            sum += curr.val;
            if(!curr.left && !curr.right && sum === target) {
                var found = [];
                for (var i = 0; i < set.length; i++){
                    found.push(set[i]);
                }
                results.push(found);
            }
            curr = curr.left;
        }
    }
    return results;
};