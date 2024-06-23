// topic - upload files using multer;
// for that, we will be creating a file to write uploading logic using multer;
// and then, we will be using it as a middleware in the routes where we are expecting the files;

// first we have to start a server for it;
import { config } from "dotenv";
config()
import express, { Application, Request, Response } from "express";
// here we are importing the multer middleware to upload the file;
import multer from "./middlewares/multer";

const app: Application = express();

app.get('/health', (req: Request, res: Response) => {
    res.send({
        success: true,
        message: "fine health condition"
    })
})

// using multer as middleware. here we can accept a single file with the name* file
// * name means form input element name not the file name;
// in multer there is many methods like multer.single for uploading a single file, 
// multer.array for getting more than one file from a single input field,
// multer.fields for getting files in multiple input fields...
app.post('/submit-form', multer.single("file") ,(req: Request, res: Response) => {
    // req.file looks like
    // {
    //     "fieldname": "file",
    //     "originalname": "profile.jpg",
    //     "encoding": "7bit",
    //     "mimetype": "image/jpeg",
    //     "destination": "./src/public/uploads/",
    //     "filename": "1719137628863-485744480.jpg",
    //     "path": "src\\public\\uploads\\1719137628863-485744480.jpg",
    //     "size": 256335
    // }

    // if we want to store the image in the db, we can use the "req.file.filename";
    
    res.send({
        success: true,
        message: "form submitted successfully",
        data: req.file
    })
})


const PORT: number = Number(process.env.PORT) || 3001;
app.listen(PORT, () => {
    console.log(`server successfully started at the port ${PORT}`);
})