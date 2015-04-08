// How would you design a stack which, in addition to push and pop, also has a function min which returns the minimum element? Push, pop and min should all operate in O(1) time.

// have each node in the stack keep track of the minimum beneath itself, then to find min, the top element is the min

// when you push an element onto the stack, the elememtn is given the current minimum. it sets the 'local min' to be the mind

var stackMin = function(){

};