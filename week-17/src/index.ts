// topic - data validation and sanitization;
// validation and sanitization are two essential concepts in handling user input in web applications,
// to ensure data integrity, security, and user experience;

// validation is the process of ensuring that the input data meets certain criteria before it is processed or stored in the database
// common validation checks include, type, format, length, presence and range checkings;

// sanitization is the process of cleaning or modifying input data, 
// to ensure it is safe and acceptable for further processing or storage;

// to show this two things, we will be setting a basic server;
import { config } from "dotenv";
config()
import express, { Application, json } from "express";
import router from "./routers";

const app: Application = express()

app.use(json())

// using router;
app.use(router)

const PORT: number = Number(process.env.PORT)
app.listen( PORT, () => {
    console.log(`server started to listen on the port ${PORT}`);
})