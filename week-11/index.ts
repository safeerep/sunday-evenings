// topic - Event Loop
// Event Loop is a mechanism that allows JavaScript to perform non-blocking operations-
// by offloading operations to the system kernel whenever possible;
// JavaScript has a single-threaded runtime, meaning it has one call stack and one memory heap;
// The Event Loop handles the execution of multiple chunks of your program over time, managing asynchronous operations;

// Event Loop Continuously checks the Call Stack and the Callback Queue, 
// pushing functions from the Callback Queue to the Call Stack if the Call Stack is empty;

// Call Stack:- Where function calls are stored and executed by LIFO (Last In, First Out) method;

// Callback Queue: A queue where the asynchronous operations are put once they are completed;

console.log('start');

let a: string;
setTimeout(() => {
  a = 'safeer'
  console.log('timeout 1');
}, 0);

// here we can't access the variable a. TS will shows an error like "Variable 'a' is used before being assigned."
// if we are moving forward with accessing a we will get a as undefined;
// console.log(`after first timeout ${a}`);
console.log(`after first timeout`);

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(data => console.log('fetch 1', data));
console.log('after fetch');

setTimeout(() => {
  // here we will get a;
  console.log(a);
  console.log('timeout 2');
}, 0);
console.log('after 2nd timeout');
console.log('end');

// synchronous code runs to completion first, logging all initial console statements.
// then asynchronous code (callbacks) runs in the order they were added to the Callback Queue.
// initially, a is undefined when accessed synchronously(line 24).
// after the first setTimeout executes, a is assigned 'safeer' and subsequent asynchronous operations can access the updated value.