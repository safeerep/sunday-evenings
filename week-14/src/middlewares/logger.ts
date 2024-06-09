// middlewares are functions that have access to the request and response object (res), 
// and also the next middleware function in the application’s request-response cycle. 
// these functions can perform various tasks such as executing code, 
// modifying the request and response objects, ending the request-response cycle, 
// and calling the next middleware function in the stack...

// commonly we will be using middleware functions for logging requests,
// checking authentication and authorization,
// modifying response object...

import { Request, Response, NextFunction } from "express";

// here we are using a middleware for logging;
export const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`in logger middleware.. `);
  console.log(`${req.method} ${req.url}`);
  next();
};
