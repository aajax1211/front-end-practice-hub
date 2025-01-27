// Implement a sum function that accepts a number 
// and allows for repeated calling with more numbers.
// Calling the function without an argument will sum up
// all the arguments thus far and return the total.

// Examples

// sum(1)(); // 1
// sum(1)(2)(); // 3
// sum(1)(2)(-3)(); // 0

function sum(value) {
    return function (nextValue) {
        if(nextValue === undefined){
            return value
      }else{
        return sum(value + nextValue);
      }
    
    }
  }




console.log(sum(2)(3)(-2)(2)())