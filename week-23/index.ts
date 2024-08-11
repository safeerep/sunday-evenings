// topic - symbols in js;
// symbol is a unique and immutable primitive value. 
// symbols are often used to create unique keys for object properties, 
// ensuring that the keys do not collide with keys created by other code or libraries;
// once a Symbol is created, its value cannot be changed;

// we can create a Symbol using the Symbol() function like,
const symbol1 = Symbol();

// we can log the type of symbol here;
console.log(`type of symbol is ${typeof symbol1}`); 


// also we can pass an optional description to the Symbol() function;
// this description is useful for debugging purposes but has no impact on the uniqueness of the Symbol:

const symbol2 = Symbol('description');
const symbol3 = Symbol('description');

// @ts-ignore
// here the symbols will not be equal even the descriptions are same;
console.log(`symbols are equal - ${symbol2 === symbol3}`);


// symbols are often used as unique property keys for objects;
// this ensures that no other part of our code or external libraries can inadvertently overwrite or access these properties.
const uniqueKey = Symbol('uniqueKey');

const obj = {
    [uniqueKey]: 'this is value for unique key',
    regularKey: 'this is a regular value'
};

console.log(obj[uniqueKey]); 
console.log(obj.regularKey);


// symbols are not enumerable by default, 
// meaning they do not show up in standard property enumeration methods such as,
// for...in, Object.keys(), or JSON.stringify()..;
const sym = Symbol('hiddenProperty');

const obj2 = {
    [sym]: 'it will be hidden',
    visible: 'it will be visible'
};

// only the key visible will be getting here;
for (let key in obj2) {
    console.log(key);
}

// here we will get only the key visible
console.log(Object.keys(obj2));
// we will get the object with only the key visible and its value;
console.log(JSON.stringify(obj2));

// however, we can access all symbol properties using Object.getOwnPropertySymbols():
const symbols = Object.getOwnPropertySymbols(obj2);

console.log(symbols);
// @ts-ignore
console.log(obj2[symbols[0]]);


// sub-topic - global symbols and the symbol registry
// global symbol registry allows us to create and share symbols across different parts of our application;
// we can create or access a global symbol by using Symbol.for():

const globalSym1 = Symbol.for('shared');
const globalSym2 = Symbol.for('shared');

// @ts-ignore
// here it will be equal as its key provided is equal
console.log(`here the symbols are equal as its keys are equal - ${globalSym1 === globalSym2}`);

// to retrieve the key of a global symbol, we can use Symbol.keyFor():
const key = Symbol.keyFor(globalSym1);
console.log(key);


// sub-topic - well-known symbols
// javaScript also defines several well-known symbols, 
// which represent internal language behaviors that we can override or customize in our objects. 
// these symbols include,

// Symbol.iterator - used to define the default iterator for an object.
// Symbol.toStringTag - used to customize the string description of an object when Object.prototype.toString() is called.
// Symbol.toPrimitive - used to customize how an object is converted to a primitive value.