// topic - optional chaining and nullish coalescing

// optional chaining allows us to
// access properties of an object without needing to check if each property exists at every level of nesting.
// if a property along the chain is null or undefined, the chain will short-circuit and return undefined.

interface Address {
  place?: string;
  zipcode?: number;
}

interface Person {
  id?: number;
  name?: string;
  email?: string | null;
  address?: Address;
}

const person: Person = {
  id: 1,
  name: "safee",
  address: {
    place: "masterpadi",
    zipcode: 10001,
  },
};

// without optional chaining;
// first we have to check, is the address is present in person or not
// then only we can access the place which is included in address.
// otherwise we may get runtime errors;
const city = person.address && person.address.place;

// with optional chaining we can write the same in concise syntax
const cityy = person.address?.place;

console.log(city);
console.log(cityy);

// nullish coalescing provides a way to specify a default value when dealing with null or undefined values.
// it returns the right-hand side operand if the left-hand side operand is null or undefined;
// otherwise, it returns the left-hand side operand.

const person2: Person = {
  id: 1,
  name: "John",
  email: null,
};

// without nullish coalescing
const userEmail = person2.email !== null && person.email !== undefined? person.email: "no email provided";

// with nullish coalescing we can write the same with concise syntax;
const userEmaill = person.email ?? "no email provided";

console.log(userEmail); 
console.log(userEmaill);
