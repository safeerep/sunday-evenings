// topic - node.js with mongodb by using mongoose;
// we will cover how to connect Node.js applications to MongoDB using Mongoose.
// mongoose is a popular ODM (Object Data Modeling) library.
// we will explore how to define schemas in mongoose and implement CRUD (Create, Read, Update, Delete) operations.

// before that we have to start a basic express server to explore the things with mongoose;
import express, { Application, json } from "express";
// importing mongoose to connect with database
import { connect, connection } from "mongoose";
// importing routes 
import userRoutes from "./routes";

const app: Application = express();

// adding middleware to parse body
app.use(json());

// routes
app.use('/api/users', userRoutes);

// here we are connecting our applicatio with mongodb;
// we will be passing the connection url of our database to the method "connect",
// which we imported from mongoose;
// here I'm naming the database "mongoose-crud-example",
// you can use any name as you wish;
connect('mongodb://localhost:27017/mongoose-crud-example');

// here we are just logging in the connection method to get to know it is connected or not;
connection.once('open', () => {
    console.log('successfully connected with database');
});
        
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server is running on the port ${PORT}`);
});