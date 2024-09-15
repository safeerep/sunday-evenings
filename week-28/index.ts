// topic - promises patterns in js;
// js provides several methods for handling multiple promises simultaneously. 
// these method - Promise.all(), Promise.race(), Promise.any(), and Promise.allSettled() are 
// helpful when we want to manage multiple asynchronous tasks in different ways;


// 1. Promise.all()
// it takes an array of promises and returns a single promise 
// that resolves when all of the promises have resolved, 
// or rejects if any one of the promises rejects;

// example
const promise1 = new Promise((resolve) => setTimeout(() => resolve('First promise'), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Second promise'), 2000));
const promise3 = new Promise((resolve, reject) => setTimeout(() => reject('Third promise failed'), 1500));

Promise.all([promise1, promise2, promise3])
.then(results => {
        console.log('here we are in then of Promise.all()');
        console.log('All promises resolved:', results);
    })
    .catch(error => {
        console.log('here we are in catch of Promise.all()');
        console.error('One or more promises failed:', error);
    });


// 2. Promise.race()
// it returns a promise that resolves or rejects as soon as any of the promises in the array resolves or rejects, 
// regardless of the outcome of the other promises;

// example
const promise_1 = new Promise((resolve) => setTimeout(() => resolve('First promise won'), 1000));
const promise_2 = new Promise((resolve) => setTimeout(() => resolve('Second promise won'), 2000));
const promise_3 = new Promise((resolve, reject) => setTimeout(() => reject('Third promise lost'), 500));

Promise.race([promise_1, promise_2, promise_3])
.then(result => {
        console.log('here we are in then of Promise.race()');
        console.log('Race winner:', result);
    })
    .catch(error => {
        console.log('here we are in catch of Promise.race()');
        console.error('Race failed with error:', error);
    });


// 3. Promise.any()
// it returns a promise that resolves as soon as any of the promises resolves. 
// If all the promises reject, it rejects with an AggregateError containing all rejection reasons;

// example
const promise__1 = new Promise((resolve, reject) => setTimeout(() => reject('Promise 1 failed'), 1000));
const promise__2 = new Promise((resolve, reject) => setTimeout(() => reject('Promise 2 failed'), 2000));
const promise__3 = new Promise((resolve) => setTimeout(() => resolve('Promise 3 won'), 1500));

Promise.any([promise__1, promise__2, promise__3])
.then(result => {
        console.log('here we are in then of Promise.any()');
        console.log('First resolved promise:', result);
    })
    .catch(error => {
        console.log('here we are in catch of Promise.any()');
        console.error('All promises failed:', error.errors); // `error.errors` contains all rejection reasons
    });


// 4. Promise.allSettled()
// it returns a promise that resolves after all of the given promises have either resolved or rejected. 
// it never rejects and always returns an array of objects with the status and value or reason for each promise

// example
const promise___1 = new Promise((resolve) => setTimeout(() => resolve('First promise fulfilled'), 1000));
const promise___2 = new Promise((resolve, reject) => setTimeout(() => reject('Second promise failed'), 2000));
const promise___3 = new Promise((resolve) => setTimeout(() => resolve('Third promise fulfilled'), 1500));

Promise.allSettled([promise___1, promise___2, promise___3])
.then(results => {
    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
                console.log(`${index} here we are in then of Promise.allSettled()`);
                console.log(`Promise ${index + 1} fulfilled:`, result.value);
            } else {
                console.log(`${index} here we are in catch of Promise.allSettled()`);
                console.log(`Promise ${index + 1} rejected:`, result.reason);
            }
        });
    });


// in short :-
// Promise.all(): waits for all promises to resolve; if one rejects, the entire promise is rejected.
// Promise.race(): resolves or rejects as soon as the first promise settles (resolves or rejects).
// Promise.any(): resolves as soon as one promise resolves; rejects only if all promises reject.
// Promise.allSettled(): waits for all promises to settle and provides the status and value/reason for each.