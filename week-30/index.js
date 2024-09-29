// topic - temporal dead zone in js;
// temporal dead zone (TDZ) refers to the period between the start of a block scope 
// and the point where a variable is declared and initialized. 
// during this time, variables declared with let, const, or class cannot be accessed, 
// and any attempt to do so will throw a ReferenceError. 
// this is different from var, where the variable is hoisted and initialized as undefined at the start of its scope.

// basic - example
{
    // TDZ starts here

    // here we will get ReferenceError: cannot access 'a' before initialization
    
    console.log(aaa); 

    // TDZ ends, 'a' is now initialized
    // it will be same if we are defining the variable with const;
    let aaa = 5; 
    console.log(aaa);
}

// even function expressions that are declared with let or const are subject to TDZ:
{
    // TDZ starts here

    // here we will get ReferenceError: Cannot access 'foo' before initialization;
    
    // console.log(aa);
    let aa = () => {
      return 'hello';
    };

    // here it will be accessible;
    console.log(aa());
}


// variables declared with var do not have a TDZ. 
// they are hoisted and initialized with the value undefined. 
// it means we can access them even before the declaration, 
// but they won’t have a value until the assignment occurs.

// for eg:-
{
    // here we will get logged "undefined" (no TDZ for `var`, bcz it is hoisted)
    
    console.log(c); 
    var c = 15;
    console.log(c);
}