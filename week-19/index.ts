// topic - rest and spread operators;

// rest operator allows to represent an indefinite number of arguments as an array. 
// it is commonly used in function parameters to collect all remaining arguments into an array,
// to collect the rest of the elements in an array after a certain index,
// merge two arrays;

// example 1:-
// in the function sum, we will be getting unknown number of parameters,
// and we have to return the sum of the numbers. there we can use the rest;

// we will be taking all the arguments as single element in an array;
const sum = (...numbers: number[]) => {
    // and here we will be iterating through the elements and returning the total;
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4));

// example 2:-
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// logs: 1
console.log(first);
// logs: 2
console.log(second);
// logs: [3, 4, 5]
console.log(rest); 

// example 3:-
// here we will be getting arrays as the argument;
const mergeArrays = (...arrays: any ) => {
    // here we will be concating it by spreading;
    return [].concat(...arrays);
}

// logs: [1, 2, 3, 4, 5, 6]
console.log(mergeArrays([1, 2], [3, 4], [5, 6])); 

// spread operator allows an iterable such as an array or object to be expanded,
// in places where zero or more arguments or elements are expected. 
// it is used for array and object literals.

// example 1:-
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
// logs: [1, 2, 3, 4, 5, 6]
console.log(arr2); 

// example 2:-
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
// logs: { a: 1, b: 2, c: 3 }
console.log(obj2); 

// example 3:-
const add = (x: number, y: number, z: number) => {
    return x + y + z;
}

const numbers: [number, number, number] = [1, 2, 3];
// logs: 6
console.log(add(...numbers)); 


// key differences between these two is,
// Rest: used in function parameters to collect arguments into an array.
// Spread: used in function calls, array literals, or object literals to expand elements.
// Rest: should always be at the end of the list of parameters.
// Spread: can be used anywhere in array literals or object literals.