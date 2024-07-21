// topic - memoization
// memoization is an optimization technique that speeds up function execution 
// by caching the results of expensive function calls and 
// returning the cached result when the same inputs occur again. 
// this technique is particularly useful for recursive functions or 
// functions that are called frequently with the same arguments;

// here is an example of a memoized factorial function;

// here we are defining a higher order function (which takes a function as its argument;) with the name memoize;
function memoize<Args extends any[], R>(fn: (...args: Args) => R): (...args: Args) => R {
    const cache = new Map<string, R>();
    
    return function(this: unknown, ...args: Args): R {
        const key = JSON.stringify(args);

        // here we will check, is the key is already there or not, if key is already there
        // we will return the value of the key;
        if (cache.has(key)) {
            return cache.get(key)!;
        }

        // calls the original function fn with the provided arguments 'args', preserving the this context.
        // original function is the one which we received as the argument here;
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

// defining a factorial function that can be memoized

// here we are acutually calling the above memoize function with a function as argument like
// const factorial = memoize((n: number): number => { });
const factorial = memoize((n: number): number => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
});


// the flow is;
// first call (factorial(5)):
console.log(factorial(5)); 
// factorial(5) is called.
// the memoized function checks the cache (which is initially empty).
// computes factorial(5) recursively, caching intermediate results (factorial(4), factorial(3), etc..).
// caches the result 120 with the key [5].
// and returns 120.

// second call (factorial(6)):
console.log(factorial(6));
// factorial(6) is called.
// the memoized function checks the cache and finds the result for factorial(5).
// uses the cached result for factorial(5) to compute 6 * factorial(5).
// caches the result 720 with the key [6].
// and returns 720.