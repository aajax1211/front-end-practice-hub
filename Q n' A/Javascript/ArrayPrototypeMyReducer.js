// Array.prototype.reduce is a way of "reducing" elements in an array by calling a "reducer" callback 
// function on each element of the array in order, passing in the return value from the calculation on 
// the preceding element. The final result of running the reducer across all elements of the array is a single value.

// Implement Array.prototype.reduce. To avoid overwriting the actual Array.prototype.reduce 
// which is being used by the autograder, we shall instead implement it as Array.prototype.myReduce.


Array.prototype.myReduce = function (callbackFn, initialValue) {
    let acc = 0;
    let start = 0;
    
    initialValue !== undefined ? (
        acc = initialValue,
        start = 0
    ) :(
        acc = this[0],
        start = 1
    );

    for(let i = start ; i< this.length ; i++){
       acc = callbackFn(acc,this[i], i, this)

    }
    

    return acc;
  };


 console.log( [1,2,3,4].myReduce(((acu,current) => acu + current), 0))