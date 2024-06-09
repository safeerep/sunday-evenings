// topic - express.js
// express.js is a minimalist web application framework for Node.js, 
// designed for building web applications and APIs. 
// it is one of the most popular frameworks in the Node.js ecosystem.

// key features are,
// routing
// middleware
// templating
// static files 
// error handling;


import { config } from "dotenv";
config()

import express, { Application } from "express";
// import middleware function here to use;
import { logger } from "./middlewares/logger";
// we are importing routes here;
import routes from "./routes";

const app: Application = express()

// here we are using a middleware to log;
app.use(logger)

// here we are using routes;
app.use('/', routes)

const PORT: number = Number(process.env.PORT) || 3002;
app.listen( PORT, () => {
    console.log(`express server started at the port ${PORT}`);
})