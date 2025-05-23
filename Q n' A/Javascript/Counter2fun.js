// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

let createCounter = function (init){
    let val = init
    return {
        increment : ()=>{
            return ++val
        },
        reset : () => {
           return val = init
        },
        decrement : ()=> {
            return --val
        },
    }
}


createCounter.increment()
createCounter.increment()
createCounter.reset()
