// Array.prototype.filter

// Array.prototype.filter creates a new array populated with the results of calling a provided function on every element in the calling array.

// For sparse arrays (e.g. [1, 2, , 4]), the empty values should be ignored while traversing the array (i.e. they should not be in the resulting array).

// Implement Array.prototype.filter. To avoid overwriting the actual Array.prototype.filter which is being used by the autograder, we shall instead implement it as Array.prototype.myFilter.

// Examples
// [1, 2, 3, 4].myFilter((value) => value % 2 == 0); // [2, 4]
// [1, 2, 3, 4].myFilter((value) => value < 3); // [1, 2]


// Array.prototype.myFilter = function (callbackFn, thisArg) {
//     throw 'Not implemented!';
//   };

Array.prototype.myFilter = function (callbackFn, thisArg) {
    const result = [];
   
    callbackFn = callbackFn.bind(thisArg)
   console.log(this)
    for(let i =0; i < this.length ; i++){
        console.log(i)
        if(this[i] !== undefined){
     if(callbackFn(this[i], i , this)){
        
            result.push(this[i])
        
     }
    }
   
    }
    return result
   };

//    test-case
   console.log([1,10,4].myFilter(num => (num % 2 === 0)))
