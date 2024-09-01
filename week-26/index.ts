// topic - template literals and tagged template literals
// template literals are enclosed by backticks (` `) and 
// can contain placeholders (${expression}`) for embedding js expressions;
// tagged template literals are an advanced form of template literals 
// that allows us to parse the template literals with a function. 
// they provide a powerful way to customize the output of template strings, 
// enabling the creation of more dynamic and context-aware strings;

// tagged template literals allows us to call a tag function with a template literal. 
// the tag function can then manipulate the literal’s content and placeholders 
// before it returns a final string (or any other type of output);
// they can prevent injection attacks by escaping data that is inserted into HTML or SQL queries;

// basic example for template literals
const theUser = "safeeeee..";
const greeting = `Hello, ${theUser}!`;
console.log(greeting);

// the syntax of tagged template literals involves using a function name immediately before the template literal:
// tagFunction`Hello, ${theUser}!`;

// a tagged template literal is like a function call, but with a special way of passing arguments:
// the first argument is an array of string literals.
// the subsequent arguments are the values of the placeholders (expressions inside ${});

// basic example for tagged template literals;
const format = (strings: any, ...values: any) => {
    // the strings looks like -> ["hello, ", "! you are ", " years old."]
    console.log(strings);
    // the values looks like -> ["safeer ep", 22]
    console.log(values);  
  
    return strings.reduce((result: any, str: string, i: number) => {
      return `${result}${str}${values[i] || ''}`;
    }, '');
}

const personName = "safeer ep";
const personAge = 22;

const message = format`hello, ${personName}! you are ${personAge} years old.`;
console.log(message);