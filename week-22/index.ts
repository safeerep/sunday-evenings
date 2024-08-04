// topic = proxies in js;
// proxies in js are a powerful feature that allows us to intercept and customize operations on objects. 
// such as property lookup, assignment, enumeration, function invocation,..
// we can use a proxy to define custom behavior for these operations by providing handler functions called "traps".
// this can be particularly useful for debugging, validation, logging, and more. 


// a simple example looks like,
const target = {
    message1: "hello",
    message2: "safeer"
};

const handler = {
    get: function(target: any, property: string) {
        if (property in target) {
            return target[property];
        } else {
            return `property ${property} does not exist.`;
        }
    }
};

const proxy = new Proxy(target, handler);

// calling existing properties
console.log(proxy.message1); 
console.log(proxy.message2); 

// it will logg - "property message3 does not exist."
console.log(proxy.message3); 


// we can use proxy for validating the property values;
// here is an example,

const user = {
    name: "safeer ep",
    age: 22
};

const handler2 = {
    set: function(target: any, property: string, value: string | number) {
        if (property === "age") {
            // here we are validating the value of the property "age"
            // it should be a number (not a string) and the number should be greater than zero;
            if (typeof value !== "number" || value < 0) {
                throw new Error("age must be a non-negative number");
            }
        }
        target[property] = value;
        return true;
    }
};

const proxy2 = new Proxy(user, handler2);

// it works fine as it is a postive integer;
proxy2.age = 77; 

try {
    // here it will not work as it is a negative integer
    proxy2.age = -5; 
} catch (e: any) {
    // here we will get the error message - "age must be a non-negative number"
    console.error(e.message);
}

// also we can use proxy to prevent properties from being deleted;
// here is an example for that,
const user2 = {
    name: "ep safeer",
    age: 22
};

const handler3 = {
    deleteProperty: function(target: any, property: string) {
        if (property in target) {
            console.log(`deleting property '${property}' is not allowed.`);
            return false;
        }
        return true;
    }
};

const proxy3 = new Proxy(user, handler3);

// here it logs - "deleting property 'name' is not allowed."
delete proxy3.name;
// so, here we will get the name;
console.log(proxy3.name); 