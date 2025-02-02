// Currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each takes a single argument.

// Implement the curry function which accepts a function as the only argument and returns a function that accepts single arguments and can be repeatedly called until at least the minimum number of arguments have been provided (determined by how many arguments the original function accepts). The initial function argument is then invoked with the provided arguments.



function curry(func) {
    return function curried(...args) {
      if (args.length >= func.length) {
        return func.call(this, ...args);
      }
  
      return (arg) =>
        arg === undefined
          ? curried.call(this, ...args)
          : curried.call(this, ...args, arg);
    };
  }