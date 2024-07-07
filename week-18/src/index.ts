// topic - options http method 

// "options" method is one of the HTTP methods used to describe the communication options for the target resource. 
// it is used by clients to determine the HTTP methods and other capabilities supported by a web server for a specific URL;
// most common use case for the OPTIONS method is CORS. 
// browsers use it to perform preflight requests to check server permissions for cross-origin requests.
// typically, OPTIONS requests do not have a body, and the server's response also does not contain a body.
// but, technically it is possible to include a body in OPTIONS requests and responses, 
// it is not a standard practice and generally not recommended. 
// most clients and servers do not expect bodies in OPTIONS requests or responses, 
// and doing so can lead to compatibility issues;

import { config } from "dotenv"
config()

import express, { Application, json } from "express"

const app: Application = express()
app.use(json())

// route to handle OPTIONS requests
app.options('/resource', (req, res) => {
    res.header('Allow', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.send();
});

// example route to handle GET requests
app.get('/resource', (req, res) => {
    res.send('GET request to the resource');
});

const PORT: number = Number(process.env.PORT)
app.listen(PORT, () => {
    console.log(`server is successfully running at the port ${PORT}`);
})