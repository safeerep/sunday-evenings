// topic - currying in js;
// currying is a technique in functional programming where a function that takes multiple arguments 
// is transformed into a sequence of functions, each taking a single argument. 
// instead of calling a function with all the arguments at once, 
// a curried function can be invoked one argument at a time.

// in simple terms, currying transforms a function like this:
function sum(a: number, b: number, c: number) {
    return a + b + c;
}

// normal function invocation
sum(1, 2, 3); 

// into this:
// @ts-ignore
// Curried function invocation
// sum(1)(2)(3);  


// basic - example
function curriedSum(a: number) {
    return function(b: number) {
        return function(c: number) {
            return a + b + c;
        };
    };
}
  
console.log(`hey safee curried sum result is: ${curriedSum(1)(2)(3)}`);
  
// by using arrow functions in ES6, we can make currying more concise.
const curriedSumWithArrowFunction = (a: number) => (b: number) => (c: number) => a + b + c;

console.log(`currying result from arrow function ${curriedSumWithArrowFunction(1)(2)(3)}`);


// key advantages of currying are 
// modularity: functions become more composable and reusable.
// partial application: arguments can be passed one at a time, making it easier to create specialized versions of functions.
// cleaner code: currying can help to avoid deeply nested function calls, resulting in cleaner, more readable code.

// example for partial application
function multiply(a: number) {
    return function(b: number) {
        return a * b;
    };
}
  
// here we are setting the value of `a` as 2
const double = multiply(2);
// calling the function with value for b;
console.log(double(5)); 
// calling the function with different value for b, but value of 'a' will be same
console.log(double(10)); 