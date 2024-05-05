// topic - closure and scope of variables;


// it will print 0 to 9 in order
// because the scope ensures that each iteration of a loop creates a new variable, leading to distinct behavior in closures.
for(let x = 0; x < 10; x++) {
    setTimeout(() => {
        console.log(x);
    }, 1000)
}

// as the var has the global scope, this loop will log the same 10 in every iteration
for(var x = 0; x < 10; x++) {
    setTimeout(() => {
        console.log("var",x);
    }, 1000)
}

// it will print the same number in every iteration because the variable y has the global scope like var
let y: number;
for(y = 0; y < 10; y++) {
    setTimeout(() => {
        console.log(y);
    }, 1000)
}