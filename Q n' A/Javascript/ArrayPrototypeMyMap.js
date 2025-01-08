// Array.prototype.map creates a new array populated 
// with the results of calling a provided function on 
// every element in the calling array.

// Implement Array.prototype.map. To avoid overwriting
// the actual Array.prototype.map which is being used by
// the autograder, we shall instead implement it as Array.prototype.myMap.

// Examples
// [1, 2, 3, 4].myMap((i) => i); // [1, 2, 3, 4]
// [1, 2, 3, 4].myMap((i) => i * i); // [1, 4, 9, 16]

Array.prototype.myMap = function (callbackFn, thisArg) {
    let result = []

    callbackFn = callbackFn.bind(thisArg)
    for(let i=0; i<this.length; i++){
        if(this[i] !== undefined){
          value = callbackFn(this[i],i, this)
          result.push(value)
        }else{
          result.push(this[i])
        }
        
    }

    return result
  };

  console.log([1,2,3].myMap(((i)=>i*some),some=3))