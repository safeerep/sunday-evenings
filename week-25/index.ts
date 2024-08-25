// topic - IIFE
// an Immediately Invoked Function Expression (IIFE) is a js function,
// that runs as soon as it is defined. 
// the primary purpose of an IIFE is to execute code immediately 
// and create a new scope to avoid polluting the global namespace, 
// thus preventing variable collisions and ensuring data privacy.

// the syntax involves wrapping the function in parentheses and then immediately calling it with a pair of parentheses:

// normal function
(function() {
    // here we can write the code to be executed immediately
})();

// arrow function
(() => {
    // here we can write the code to be executed immediately
})();

// IIFEs can also take arguments, which can be useful for passing in variables:
const userIs = "safeer";

((greeting, person) => {
    console.log(`${greeting}, ${person}!`);
})("hy", userIs);


// IIFEs can return values, which can be stored in a variable:
const result = (() => {
    const number = 33;
    return number * 7;
})();

console.log(result);


// IIFEs are a powerful tool in js that helps us to manage scope, avoid global variables, and maintain clean, modular code.

// when creating functions inside a loop, IIFEs can help create a new scope to avoid common pitfalls with closures.
// a simple example below;

for (var i = 0; i < 3; i++) {
    // using IIFE in loop to help create a new scope to avoid common pitfalls with closures
    ((index) => {
        setTimeout(function() {
            // here it will print 0, 1, 2 respectively.
            console.log(index);
        }, 1000);
    })(i);

    // using setTimeout directly in loop
    setTimeout(function() {
        // but if we are using the setTimeout directly into the loop block it will print 1,1,1
        console.log(1);
    }, 2000);
}
