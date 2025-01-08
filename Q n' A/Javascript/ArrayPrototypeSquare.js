// Implement a custom Array function, Array.prototype.square() 
// which creates a new array with the results of squaring every 
// element within the array the .square() method is called on.

// Examples

// [-2].square(); // [4]
// [1, 2, 3, 4].square(); // [1, 4, 9, 16]

Array.prototype.square = function () {
    let result = []
    let value = 0
    for(let i=0;i<this.length;i++){
        value = this[i]**2
        result.push(value)
    }

    return result
  };


  console.log([1,4,5].square())