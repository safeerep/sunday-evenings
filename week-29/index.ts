// topic - shadowing in js;
// shadowing occurs when a variable defined in a certain scope (like a function or block) 
// has the same name as a variable in an outer scope. 
// the inner variable "shadows" or "hides" the outer variable, 
// making the inner variable the one that is accessed within that scope;

// basic-example

// outer scope variable
let engineer = "safeer ep"; 

function greet() {
    // inner scope variable with same name of variable in outer scope (shadows outer variable)
    let engineer = "aflu"; 
    // this will access the inner variable
    return `Hello, ${engineer}`
}

const greetingFromFunction = greet();
console.log(greetingFromFunction);

// this will access the golbal scope variable (safeer ep)
console.log("Hello, " + engineer); 

// pros of shadowing;
// - encapsulation: shadowing allows us to create variables that are specific to a particular function or block;
// - avoiding global pollution: by defining variables in a narrower scope, we can prevent polluting the global namespace, 
//                              reducing the risk of naming collisions.
// - improved readability: it can enhance readability by allowing us to use the same variable name 
//                         for similar concepts in different contexts, making the code more intuitive.

// cons of shadowing;
// confusion: it can lead to confusion, especially for those who may not be aware of the variable scopes. 
//             if the same variable name is used in different scopes, it might be hard to track which variable is being referenced.
// potential bugs: if a developer inadvertently uses the outer variable instead of the inner one (or vice versa), 
//                it can lead to subtle bugs that are difficult to trace.


// shadowing is a useful feature in js that allows for 
// better variable management and encapsulation, 
// but it should be used judiciously to avoid confusion and potential errors in our code.
// keeping variable names clear and distinct can help mitigate the downsides of shadowing;