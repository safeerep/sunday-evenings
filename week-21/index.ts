// topic - generator functions in js;

import { json } from "stream/consumers";

// generator functions provide a powerful way to handle sequences of data in js, 
// allowing us to pause and resume execution as needed. 
// it is particularly useful for implementing lazy evaluation, 
// handling asynchronous operations, and managing complex iteration logic;

// here is a simple real world usecase;
// imagine fetching paginated data from an API. 
// generators can simplify this like following;

const fetchPages = function* ( totalPages: number ): Generator<Promise<any>, void, unknown> {
    for (let i: number = 1; i <= totalPages; i++) {
        // function yields Promises for each page fetch;
        yield fetch(`https://jsonplaceholder.typicode.com/posts/${i}`)
            .then(response => response.json());
    }
}

// here we are writing an helper function to just log the data;
const loggData = ( result: any) => {
    if (result.value) {
        result.value.then((data: typeof json) => console.log(data));
    }
}
// creates an iterator for the generator;
const pages = fetchPages(3);

// fetches and logs each page's data;
let result = pages.next();
loggData(result)
result = pages.next();
loggData(result)
result = pages.next();
loggData(result)

// ps: while it's possible to use arrow functions for defining the fetch logic, 
// arrow functions are not typically used for defining generator functions themselves 
// because arrow functions do not have their own this context. 
// the traditional function syntax (function*) is the standard way to define generator functions.