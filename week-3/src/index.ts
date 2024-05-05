import { config } from "dotenv";
config()
import express, { Application } from "express";
import { readFile, writeFile, createReadStream } from "fs";

const app: Application = express()

// the preferable from these two is createReadStream because,
// readFile tries to read entire content to memory at once and
// the createReadStream will reads the file as chunks and its more convinient and preferable 
// especially in the case of reading large files;

// readFile is working asynchronously so we can pass a callback as third argument to get data after finishing
// or we can use readFileSync method (there will not have third argument)
readFile("src/file.to.read.txt", "utf-8", (error: any, data: string) => {
    if (error) {
        console.log(`error happened safee.. `, error);
        return;
    }
    // else
    console.log(`read data`, data);

    // just modifying the data we got 
    const detailsArray: string[] = data.split(' ')

    // for write file method, there will take three arguments
    // first one is the path of the file where we want to write;
    // then data which we want to write;
    // the last argument is a callback to get the error (if happened ) or to know the writing process is finished successfully
    writeFile("newly.written.txt", String(detailsArray), (error) => {
        if ( error ) {
            console.log(`happened an error during writing file `, error);
            return;
        }
        console.log("file wrote successfully");
    })
})

const reader = createReadStream("src/file.to.read.txt")
reader.on("data", (data) => {
    // data will get as buffers and so, we have to stringify it to see in the original type.
    console.log('reading data in create read stream', data.toString());
})

const PORT: number = Number(process.env.PORT) || 8980;
app.listen(PORT, () => {
    console.log(`ok fine on port ${PORT}`);
})